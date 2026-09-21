#!/usr/bin/env node
/**
 * build-instagram.js
 * `04-Sosyal-Medya-Icerik/<slug>/instagram-feed.md` notunu, müşteriye gönderilebilen
 * TEK DOSYA HTML'e derler: CSS + JS + veri + görseller (data: URI) gömülü.
 * İnternet, sunucu veya ek dosya gerektirmez.
 *
 * Kullanım:
 *   node scripts/build-instagram.js                 # tüm feed notları
 *   node scripts/build-instagram.js nefin-beauty    # tek müşteri
 *   node scripts/build-instagram.js nefin-beauty --status=planlandi,yayinlandi
 *   node scripts/build-instagram.js --no-resize     # sips ile küçültmeyi atla
 *
 * Harici paket gerektirmez. Görseller varsa macOS `sips` ile 1080 px'e küçültülür.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");
const crypto = require("crypto");
const { ROOT, escapeHtml, listClients } = require("./lib/vault.js");
const { readFeed } = require("./lib/feed-note.js");

const IG_DIR = path.join(ROOT, "scripts", "instagram");
const DIST_DIR = path.join(ROOT, "04-Sosyal-Medya-Icerik", "dist");
const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif", ".mp4": "video/mp4", ".mov": "video/quicktime", ".m4v": "video/x-m4v", ".webm": "video/webm" };
const VIDEO_EXT = new Set([".mp4", ".mov", ".m4v", ".webm"]);
const MAX_EDGE = 1080;

const VIDEO_CACHE = path.join(os.tmpdir(), "icerik-vault-ig-video-cache");
let hasFfmpeg = null;
function ffmpegAvailable() {
  if (hasFfmpeg !== null) return hasFfmpeg;
  try { execFileSync("ffmpeg", ["-version"], { stdio: "ignore" }); hasFfmpeg = true; }
  catch { hasFfmpeg = false; }
  return hasFfmpeg;
}

/**
 * Videoyu gömmeden önce 1080 px / H.264 CRF 28 / AAC 96k'ya sıkıştırır (ses korunur).
 * Sonuç tmp'de önbelleklenir; ffmpeg yoksa null döner ve orijinal gömülür.
 */
function compressVideo(abs) {
  if (!ffmpegAvailable()) return null;
  const st = fs.statSync(abs);
  const key = crypto.createHash("sha1").update(`${abs}|${st.size}|${st.mtimeMs}|v1`).digest("hex").slice(0, 16);
  const out = path.join(VIDEO_CACHE, `${key}.mp4`);
  if (fs.existsSync(out)) return out;
  fs.mkdirSync(VIDEO_CACHE, { recursive: true });
  try {
    execFileSync("ffmpeg", ["-v", "error", "-y", "-i", abs,
      "-vf", "scale='min(1080,iw)':-2",
      "-c:v", "libx264", "-crf", "28", "-preset", "veryfast",
      "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", out],
      { stdio: "ignore", timeout: 5 * 60 * 1000 });
    return fs.existsSync(out) ? out : null;
  } catch { return null; }
}

let hasSips = null;
function sipsAvailable() {
  if (hasSips !== null) return hasSips;
  try { execFileSync("sips", ["--version"], { stdio: "ignore" }); hasSips = true; }
  catch { hasSips = false; }
  return hasSips;
}

const read = (f) => fs.readFileSync(path.join(IG_DIR, f), "utf8");

/** Görseli (gerekirse küçülterek) data: URI'ye çevirir. */
function toDataUri(relPath, opts, cache, report) {
  if (!relPath) return "";
  if (cache.has(relPath)) return cache.get(relPath);
  const abs = path.resolve(ROOT, relPath);
  if (!abs.startsWith(ROOT) || !fs.existsSync(abs)) { report.missing.push(relPath); cache.set(relPath, ""); return ""; }
  const ext = path.extname(abs).toLowerCase();
  const mime = MIME[ext];
  if (!mime) { report.missing.push(`${relPath} (desteklenmeyen tür)`); cache.set(relPath, ""); return ""; }

  let buf = fs.readFileSync(abs);
  if (VIDEO_EXT.has(ext)) {
    if (opts.resize) {
      const small = compressVideo(abs);
      if (small) {
        const sb = fs.readFileSync(small);
        if (sb.length && sb.length < buf.length) { report.saved += buf.length - sb.length; buf = sb; }
      } else if (!ffmpegAvailable()) report.noFfmpeg = true;
    }
    report.videoBytes += buf.length;
  }
  if (opts.resize && !VIDEO_EXT.has(ext) && ext !== ".gif" && sipsAvailable()) {
    try {
      const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "ig-")), path.basename(abs));
      fs.copyFileSync(abs, tmp);
      execFileSync("sips", ["-Z", String(MAX_EDGE), tmp], { stdio: "ignore" });
      const small = fs.readFileSync(tmp);
      if (small.length && small.length < buf.length) { report.saved += buf.length - small.length; buf = small; }
      fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
    } catch { /* küçültme başarısızsa orijinali göm */ }
  }
  const uri = `data:${mime};base64,${buf.toString("base64")}`;
  cache.set(relPath, uri);
  report.bytes += buf.length;
  return uri;
}

function buildHtml(profile, opts = {}) {
  const options = Object.assign({ resize: true, statuses: null, calendar: true }, opts);
  const report = { missing: [], bytes: 0, saved: 0, videoBytes: 0 };
  const cache = new Map();

  const data = JSON.parse(JSON.stringify(profile));
  if (options.statuses && options.statuses.length) data.posts = data.posts.filter((p) => options.statuses.includes(p.status));
  data.avatar = toDataUri(data.avatar, options, cache, report);
  data.highlights = (data.highlights || []).map((h) => (typeof h === "string" ? h : { label: h.label, cover: toDataUri(h.cover, options, cache, report) }));
  data.posts.forEach((p) => {
    if (p.poster) p.poster = toDataUri(p.poster, options, cache, report);
    p.image = toDataUri(p.image, options, cache, report);
    p.extraImages = (p.extraImages || []).map((x) => toDataUri(x, options, cache, report)).filter(Boolean);
  });
  if (data.postsCount == null) data.postsCount = data.posts.length;

  const today = new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  const accent = (profile.accent || "#0095f6");
  const title = `${profile.client || profile.username} — Instagram Önizleme`;

  const html = `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<style>
:root { --bg:#0d0d10; --panel:#1a1a1e; --panel2:#232329; --panel3:#2c2c33; --line:#303036; --fg:#e8e8ea; --dim:#9a9aa3; --accent:${accent}; }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--fg); font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif; }
.bar { display:flex; align-items:center; gap:10px; flex-wrap:wrap; padding:12px 18px; border-bottom:1px solid var(--line); background:var(--panel); position:sticky; top:0; z-index:5; }
.bar .t { font-weight:700; font-size:15px; }
.bar .s { color:var(--dim); font-size:12.5px; }
.bar .draft { margin-left:auto; font-size:11px; letter-spacing:.4px; text-transform:uppercase; border:1px solid var(--accent); color:var(--accent); padding:3px 9px; border-radius:99px; }
.viewtabs { display:flex; gap:6px; padding:14px 18px 0; justify-content:center; }
.viewtab { padding:7px 16px; border-radius:99px; border:1px solid var(--line); background:var(--panel); color:var(--dim); font-size:13px; cursor:pointer; }
.viewtab.on { background:var(--accent); border-color:var(--accent); color:#fff; font-weight:600; }
.stage { display:flex; justify-content:center; padding:22px 16px 40px; }
#calendar { max-width:1000px; margin:0 auto; padding:18px; display:none; }
.hint { text-align:center; color:var(--dim); font-size:12px; padding:0 16px 26px; }
@media (max-width: 460px) {
  .stage { padding:0; }
  .ig-phone { width:100vw !important; height:calc(100vh - 0px) !important; border-radius:0 !important; box-shadow:none !important; }
  .viewtabs { padding-top:10px; }
}
${read("preview.css")}
${read("calendar.css")}
</style>
</head>
<body>
<div class="bar">
  <span class="t">${escapeHtml(profile.client || profile.username)}</span>
  <span class="s">Instagram profil önizlemesi · ${escapeHtml(today)}</span>
  <span class="draft">yayınlanmadan önce</span>
</div>
<div class="viewtabs">
  <div class="viewtab on" data-view="profile">Profil</div>
  ${options.calendar ? '<div class="viewtab" data-view="calendar">İçerik Takvimi</div>' : ""}
</div>
<div class="stage"><div id="phone"></div></div>
<div id="calendar"></div>
<div class="hint">Gönderiye dokun → detay görünümü. Bu bir önizlemedir; içerikler henüz yayınlanmadı.</div>
<script>${read("icons.js")}</script>
<script>${read("preview.js")}</script>
<script>${read("calendar.js")}</script>
<script>
const PROFILE = ${JSON.stringify(data)};
const phone = document.getElementById("phone");
const cal = document.getElementById("calendar");
IGPreview.render(phone, PROFILE, { mode: "client" });
document.querySelectorAll(".viewtab").forEach(function (t) {
  t.addEventListener("click", function () {
    document.querySelectorAll(".viewtab").forEach(function (x) { x.classList.remove("on"); });
    t.classList.add("on");
    var isCal = t.dataset.view === "calendar";
    document.querySelector(".stage").style.display = isCal ? "none" : "flex";
    cal.style.display = isCal ? "block" : "none";
    if (isCal && !cal.dataset.ready) { IGCalendar.render(cal, PROFILE, { editable: false }); cal.dataset.ready = "1"; }
  });
});
</script>
</body>
</html>
`;
  return { html, report };
}

function buildSlug(slug, options) {
  const profile = readFeed(slug);
  if (!profile) return null;
  const client = listClients().find((c) => c.slug === slug);
  if (client && client.palette && client.palette.vurgu) profile.accent = client.palette.vurgu;
  const { html, report } = buildHtml(profile, options);
  fs.mkdirSync(DIST_DIR, { recursive: true });
  const out = path.join(DIST_DIR, `${slug}-instagram.html`);
  fs.writeFileSync(out, html, "utf8");
  return { out, size: Buffer.byteLength(html), report, posts: profile.posts.length };
}

function main() {
  const args = process.argv.slice(2);
  const options = { resize: !args.includes("--no-resize"), statuses: null };
  const st = args.find((a) => a.startsWith("--status="));
  if (st) options.statuses = st.slice(9).split(",").map((s) => s.trim()).filter(Boolean);
  const slugs = args.filter((a) => !a.startsWith("--"));

  let targets = slugs;
  if (!targets.length) {
    const dir = path.join(ROOT, "04-Sosyal-Medya-Icerik");
    targets = fs.readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && fs.existsSync(path.join(dir, e.name, "instagram-feed.md")))
      .map((e) => e.name);
  }
  if (!targets.length) { console.log("Feed notu bulunamadı. Önce: node scripts/instagram-studio.js <slug>"); return; }
  if (options.resize && !sipsAvailable()) console.log("! sips bulunamadı — görseller orijinal boyutta gömülecek (dosya büyük olabilir).");

  for (const slug of targets) {
    const res = buildSlug(slug, options);
    if (!res) { console.log(`✗ ${slug}: instagram-feed.md yok`); continue; }
    const mb = (res.size / 1048576).toFixed(1);
    console.log(`✓ ${slug} → ${path.relative(ROOT, res.out)} (${res.posts} gönderi, ${mb} MB)`);
    if (res.report.missing.length) console.log(`  ! eksik görsel: ${res.report.missing.join(", ")}`);
    if (res.report.videoBytes > 1048576) console.log(`  i ${(res.report.videoBytes / 1048576).toFixed(1)} MB video gömüldü${res.report.noFfmpeg ? " (ffmpeg yok — sıkıştırılamadı)" : " (1080p'ye sıkıştırıldı, ses korundu)"}.`);
    if (res.report.saved > 1048576) console.log(`  i sıkıştırmayla kazanılan: ${(res.report.saved / 1048576).toFixed(1)} MB`);
    if (res.size > 20 * 1048576) console.log("  ! 20 MB üstü — WhatsApp'ta sorun çıkarabilir; --status=planlandi ile daralt ya da videoyu önceden küçült.");
  }
}

if (require.main === module) main();
module.exports = { buildHtml, buildSlug, DIST_DIR };
