/**
 * lib/vault.js — vault genelinde paylaşılan yardımcılar.
 * build-site.js, build-instagram.js ve instagram-studio.js bunları kullanır.
 * Harici paket gerektirmez.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const CLIENTS_DIR = path.join(ROOT, "00-Musteriler");

/** `---` bloğunu basit key: value olarak ayrıştırır; [a, b] dizi olur. */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, fmBlock, content] = match;
  const data = {};
  fmBlock.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) return;
    let [, key, value] = m;
    value = value.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^"|"$/g, "")).filter(Boolean);
    } else {
      data[key] = value.replace(/^"|"$/g, "");
    }
  });
  return { data, content };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Marka brief'inden palet tablosunu okur: | Zemin | #hex | ... */
function readPalette(slug) {
  if (!slug) return null;
  const brief = path.join(CLIENTS_DIR, slug, "marka-brief.md");
  if (!fs.existsSync(brief)) return null;
  const raw = fs.readFileSync(brief, "utf8");
  const palette = {};
  const map = { zemin: "zemin", birincil: "birincil", vurgu: "vurgu", metin: "metin", "başlık": "birincil", "gövde metni": "metin", "vurgu 1": "vurgu" };
  for (const line of raw.split("\n")) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|\s*`?(#[0-9A-Fa-f]{6})`?/);
    if (!m) continue;
    const key = map[m[1].toLowerCase()];
    if (key && !palette[key]) palette[key] = m[2];
  }
  return Object.keys(palette).length ? palette : null;
}

/** Bir klasördeki tüm .md dosyalarını (alt klasörler dahil) toplar. */
function walkMd(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMd(full, out);
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

/** 00-Musteriler altındaki marka brief'i olan müşteriler: {slug, client, palette}. */
function listClients() {
  if (!fs.existsSync(CLIENTS_DIR)) return [];
  const out = [];
  for (const entry of fs.readdirSync(CLIENTS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    const brief = path.join(CLIENTS_DIR, entry.name, "marka-brief.md");
    if (!fs.existsSync(brief)) continue;
    const { data } = parseFrontmatter(fs.readFileSync(brief, "utf8"));
    out.push({
      slug: data.slug || entry.name,
      client: data.client || entry.name,
      sektor: data.sektor || "",
      palette: readPalette(data.slug || entry.name),
    });
  }
  return out.sort((a, b) => a.client.localeCompare(b.client, "tr"));
}

/** Verilen yolun vault kökü içinde kaldığını doğrular (path traversal koruması). */
function safeVaultPath(relOrAbs) {
  const abs = path.resolve(ROOT, String(relOrAbs || ""));
  const rootWithSep = ROOT.endsWith(path.sep) ? ROOT : ROOT + path.sep;
  if (abs !== ROOT && !abs.startsWith(rootWithSep)) return null;
  return abs;
}

/** ASCII kebab-case dosya adı (Türkçe karakterler çevrilir). */
function kebab(name) {
  const trMap = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", Ç: "c", Ğ: "g", İ: "i", I: "i", Ö: "o", Ş: "s", Ü: "u" };
  return String(name)
    .replace(/[çğıöşüÇĞİIÖŞÜ]/g, (c) => trMap[c] || c)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** tmp + rename ile atomik yazım. */
function writeFileAtomic(file, content) {
  const tmp = `${file}.tmp-${process.pid}-${Date.now()}`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(tmp, content, "utf8");
  fs.renameSync(tmp, file);
}

module.exports = { ROOT, CLIENTS_DIR, parseFrontmatter, escapeHtml, readPalette, walkMd, listClients, safeVaultPath, kebab, writeFileAtomic };
