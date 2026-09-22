#!/usr/bin/env node
/**
 * instagram-studio.js — Instagram profil önizleme stüdyosu (yerel).
 *
 *   node scripts/instagram-studio.js              # müşteri seçiciyle açılır
 *   node scripts/instagram-studio.js nefin-beauty # doğrudan o müşteriyle
 *   node scripts/instagram-studio.js --port=4190
 *
 * Sadece 127.0.0.1'e bağlanır, harici paket kullanmaz.
 * Görseller `03-Assets/images/<slug>/instagram/`, veri
 * `04-Sosyal-Medya-Icerik/<slug>/instagram-feed.md` içinde tutulur.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { execFile, execFileSync } = require("child_process");
const { ROOT, listClients, safeVaultPath, kebab } = require("./lib/vault.js");
const { readFeed, writeFeed, feedPath, emptyProfile } = require("./lib/feed-note.js");
const { buildSlug } = require("./build-instagram.js");

const IG_DIR = path.join(ROOT, "scripts", "instagram");
const MAX_UPLOAD = 60 * 1024 * 1024;  // video için geniş tutuldu
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".mov": "video/quicktime", ".m4v": "video/x-m4v", ".webm": "video/webm" };
const UPLOAD_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".mp4", ".mov", ".m4v", ".webm"]);

const args = process.argv.slice(2);
const portArg = args.find((a) => a.startsWith("--port="));
const PORT = portArg ? Number(portArg.slice(7)) : 4180;
const startSlug = args.find((a) => !a.startsWith("--")) || "";

const VIDEO_RE = /\.(mp4|mov|m4v|webm)$/i;
let ffmpegOk = null;
function hasFfmpeg() {
  if (ffmpegOk !== null) return ffmpegOk;
  try { execFileSync("ffmpeg", ["-version"], { stdio: "ignore" }); ffmpegOk = true; }
  catch { ffmpegOk = false; }
  return ffmpegOk;
}

/**
 * Video için ilk kareden poster üretir (ızgarada anında görünsün diye).
 * Zaten varsa yeniden üretmez. ffmpeg yoksa "" döner — önizleme <video>'ya düşer.
 */
function ensurePoster(relVideo) {
  if (!relVideo || !VIDEO_RE.test(relVideo)) return "";
  const relPoster = relVideo.replace(VIDEO_RE, "-poster.jpg");
  const absPoster = path.join(ROOT, relPoster);
  if (fs.existsSync(absPoster)) return relPoster;
  const absVideo = path.join(ROOT, relVideo);
  if (!fs.existsSync(absVideo) || !hasFfmpeg()) return "";
  try {
    execFileSync("ffmpeg", ["-v", "error", "-y", "-ss", "0.2", "-i", absVideo, "-frames:v", "1", "-vf", "scale=1080:-2", absPoster], { stdio: "ignore", timeout: 20000 });
    return fs.existsSync(absPoster) ? relPoster : "";
  } catch { return ""; }
}

/** Notun disk sürümü (mtime). Dosya yoksa 0. */
function feedVersion(slug) {
  const f = feedPath(slug);
  return fs.existsSync(f) ? Math.round(fs.statSync(f).mtimeMs) : 0;
}

const json = (res, code, body) => { const s = JSON.stringify(body); res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Content-Length": Buffer.byteLength(s) }); res.end(s); };
const fail = (res, code, msg) => json(res, code, { error: msg });

function readBody(req, limit = Math.round(MAX_UPLOAD * 1.4) + 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on("data", (c) => { size += c.length; if (size > limit) { reject(new Error("Gövde çok büyük")); req.destroy(); return; } chunks.push(c); });
    req.on("end", () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")); } catch (e) { reject(e); } });
    req.on("error", reject);
  });
}

function serveFile(res, abs) {
  if (!abs || !fs.existsSync(abs) || fs.statSync(abs).isDirectory()) { res.writeHead(404); res.end("bulunamadı"); return; }
  const type = MIME[path.extname(abs).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-cache" });
  fs.createReadStream(abs).pipe(res);
}

/** Feed notu yoksa marka brief'inden iskelet üretir. */
function loadProfile(slug) {
  const existing = readFeed(slug);
  if (existing) {
    // Eski video gönderi/hikayelerinin posteri yoksa üret (bir sonraki kayıtta nota yazılır).
    for (const item of [...existing.posts, ...(existing.stories || [])]) {
      if (VIDEO_RE.test(item.image || "") && (!item.poster || !fs.existsSync(path.join(ROOT, item.poster)))) {
        item.poster = ensurePoster(item.image);
      }
    }
    return existing;
  }
  const client = listClients().find((c) => c.slug === slug);
  if (!client) return null;
  return emptyProfile(client);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const p = decodeURIComponent(url.pathname);

  try {
    if (req.method === "GET" && (p === "/" || p === "/index.html")) return serveFile(res, path.join(IG_DIR, "studio.html"));

    if (req.method === "GET" && /^\/(studio|preview|icons|calendar)\.(js|css|html)$/.test(p)) return serveFile(res, path.join(IG_DIR, p.slice(1)));

    if (req.method === "GET" && p.startsWith("/asset/")) {
      const abs = safeVaultPath(p.slice(7));
      if (!abs) return fail(res, 403, "yol vault dışında");
      return serveFile(res, abs);
    }

    if (req.method === "GET" && p === "/api/clients") {
      return json(res, 200, {
        clients: listClients().map((c) => ({ ...c, hasFeed: fs.existsSync(feedPath(c.slug)) })),
        startSlug,
      });
    }

    if (req.method === "GET" && p === "/api/feed") {
      const slug = url.searchParams.get("slug") || "";
      if (!/^[a-z0-9-]+$/.test(slug)) return fail(res, 400, "geçersiz slug");
      const profile = loadProfile(slug);
      if (!profile) return fail(res, 404, "müşteri bulunamadı");
      const client = listClients().find((c) => c.slug === slug);
      return json(res, 200, { profile, palette: client ? client.palette : null, saved: fs.existsSync(feedPath(slug)), version: feedVersion(slug) });
    }

    if (req.method === "POST" && p === "/api/feed") {
      const body = await readBody(req);
      const profile = body.profile;
      if (!profile || !/^[a-z0-9-]+$/.test(profile.slug || "")) return fail(res, 400, "geçersiz profil");
      // İyimser kilit: not bu sekme yüklendiğinden beri dışarıdan değiştiyse üzerine yazma.
      const current = feedVersion(profile.slug);
      if (body.version !== undefined && Number(body.version) !== current) {
        return json(res, 409, { error: "Not bu sekmenin dışında değişti (Obsidian ya da başka bir stüdyo sekmesi). Üzerine yazılmadı.", serverVersion: current });
      }
      const file = writeFeed(profile);
      return json(res, 200, { ok: true, file: path.relative(ROOT, file), version: feedVersion(profile.slug) });
    }

    if (req.method === "POST" && p === "/api/upload") {
      const body = await readBody(req);
      const { slug, filename, data } = body;
      if (!/^[a-z0-9-]+$/.test(slug || "")) return fail(res, 400, "geçersiz slug");
      const ext = path.extname(String(filename || "")).toLowerCase();
      if (!UPLOAD_EXT.has(ext)) return fail(res, 400, `desteklenmeyen dosya türü: ${ext || "?"} (jpg, png, webp, mp4, mov)`);
      const buf = Buffer.from(String(data || "").replace(/^data:[^,]+,/, ""), "base64");
      if (!buf.length) return fail(res, 400, "boş dosya");
      if (buf.length > MAX_UPLOAD) return fail(res, 413, "dosya 60 MB'tan büyük");

      const dir = path.join(ROOT, "03-Assets", "images", slug, "instagram");
      fs.mkdirSync(dir, { recursive: true });
      let base = kebab(path.basename(filename, ext)) || "gorsel";
      let name = `${base}${ext}`;
      let i = 2;
      while (fs.existsSync(path.join(dir, name))) name = `${base}-${i++}${ext}`;
      fs.writeFileSync(path.join(dir, name), buf);
      const rel = path.relative(ROOT, path.join(dir, name));
      return json(res, 200, { ok: true, path: rel, poster: ensurePoster(rel) });
    }

    if (req.method === "POST" && p === "/api/export") {
      const body = await readBody(req, 2 * 1024 * 1024);
      const slug = body.slug;
      if (!/^[a-z0-9-]+$/.test(slug || "")) return fail(res, 400, "geçersiz slug");
      if (!fs.existsSync(feedPath(slug))) return fail(res, 400, "önce kaydet");
      const result = buildSlug(slug, { resize: body.resize !== false, statuses: body.statuses || null });
      if (!result) return fail(res, 500, "derlenemedi");
      return json(res, 200, { ok: true, file: path.relative(ROOT, result.out), size: result.size, missing: result.report.missing });
    }

    if (req.method === "POST" && p === "/api/reveal") {
      const body = await readBody(req, 64 * 1024);
      const abs = safeVaultPath(body.file || "");
      if (!abs || !fs.existsSync(abs)) return fail(res, 404, "dosya yok");
      if (process.platform === "darwin") execFile("open", ["-R", abs], () => {});
      return json(res, 200, { ok: true });
    }

    res.writeHead(404); res.end("bulunamadı");
  } catch (err) {
    fail(res, 500, err.message);
  }
});

server.listen(PORT, "127.0.0.1", () => {
  const link = `http://127.0.0.1:${PORT}/${startSlug ? `?slug=${startSlug}` : ""}`;
  console.log(`\n  Instagram Önizleme Stüdyosu → ${link}`);
  console.log("  Kapatmak için Ctrl+C\n");
  if (process.platform === "darwin" && !args.includes("--no-open")) execFile("open", [link], () => {});
});
