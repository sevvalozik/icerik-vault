#!/usr/bin/env node
/**
 * vault-check.js — vault sağlık kontrolü (harici paket gerekmez)
 *
 *   node scripts/vault-check.js
 *
 * Kontroller:
 *  1. İçerik notlarında zorunlu frontmatter alanları (type, client, slug, status, date)
 *  2. `client` olup 00-Musteriler altında marka brief'i olmayan müşteriler
 *  3. 90 MB üstü dosyalar (GitHub 100 MB sınırına yaklaşanlar)
 *  4. Log dosyalarında promptu kaydedilmemiş (❓) satırlar
 *  5. Marka brief'lerinde doldurulmamış ❓ alan sayısı
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CONTENT_DIRS = [
  "00-Musteriler", "01-Presentations", "02-Websites", "04-Sosyal-Medya-Icerik",
  "05-Kod-Projeleri", "06-AI-Video", "07-AI-Gorsel",
];
const REQUIRED = {
  musteri: ["client", "slug", "status", "date"],
  presentation: ["client", "status", "date"],
  website: ["client", "status", "date"],
  "sosyal-medya-icerik": ["client", "status", "date"],
  "kod-projesi": ["client", "status", "date"],
  "video-brief": ["client", "slug", "kampanya", "status", "date"],
  "video-log": ["client", "slug", "date"],
  "gorsel-brief": ["client", "slug", "kampanya", "status", "date"],
  "gorsel-log": ["client", "slug", "date"],
};
const SKIP_DIRS = new Set([".git", ".obsidian", "node_modules", "dist", "_export", ".trash"]);
const WARN_FILE_MB = 90;   // uyarı: GitHub sınırına yaklaşıyor
const FAIL_FILE_MB = 100;  // hata: GitHub push reddeder

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^"|"$/g, "");
  }
  return data;
}

const rel = (p) => path.relative(ROOT, p);
const problems = { frontmatter: [], missingBrief: [], bigFiles: [], unloggedPrompts: [], openQuestions: [] };

const briefClients = new Set();
const seenClients = new Map();

for (const dir of CONTENT_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs).filter((f) => f.endsWith(".md"))) {
    if (file.includes(`${path.sep}_templates${path.sep}`) || file.includes(`${path.sep}_kutuphane${path.sep}`)) continue;
    const raw = fs.readFileSync(file, "utf8");
    const fm = parseFrontmatter(raw);
    if (!fm) { problems.frontmatter.push(`${rel(file)}: frontmatter yok`); continue; }
    const req = REQUIRED[fm.type];
    if (req) {
      const missing = req.filter((k) => !fm[k]);
      if (missing.length) problems.frontmatter.push(`${rel(file)}: eksik → ${missing.join(", ")}`);
    }
    if (fm.type === "musteri" && fm.client) {
      briefClients.add(fm.client);
      const q = (raw.match(/❓/g) || []).length;
      if (q) problems.openQuestions.push(`${rel(file)}: ${q} adet ❓ doğrulanacak alan`);
    } else if (fm.client) {
      seenClients.set(fm.client, rel(file));
    }
    if (/-log\.md$/.test(file)) {
      const rows = raw.split("\n").filter((l) => l.startsWith("|") && l.includes("❓"));
      if (rows.length) problems.unloggedPrompts.push(`${rel(file)}: ${rows.length} satırda prompt/model kaydı yok`);
    }
  }
}
for (const [client, where] of seenClients) {
  if (!briefClients.has(client)) problems.missingBrief.push(`"${client}" (ilk görüldüğü yer: ${where})`);
}
let overLimit = 0;
for (const file of walk(ROOT)) {
  const mb = fs.statSync(file).size / (1024 * 1024);
  if (mb >= FAIL_FILE_MB) { overLimit += 1; problems.bigFiles.push(`${rel(file)} — ${mb.toFixed(1)} MB  ← 100 MB ÜSTÜ, push edilemez`); }
  else if (mb >= WARN_FILE_MB) problems.bigFiles.push(`${rel(file)} — ${mb.toFixed(1)} MB  (sınıra yakın, uyarı)`);
}

function section(title, items, hint) {
  console.log(`\n${title}${items.length ? ` (${items.length})` : " — temiz"}`);
  items.forEach((i) => console.log("  • " + i));
  if (items.length && hint) console.log("  → " + hint);
}
console.log("İçerik Vault kontrolü");
section("1. Eksik frontmatter", problems.frontmatter, "type/client/slug/status/date alanlarını tamamla");
section("2. Marka brief'i olmayan müşteriler", problems.missingBrief, "Templater → Yeni Müşteri");
section("3. Büyük dosyalar (90 MB uyarı / 100 MB hata)", problems.bigFiles, "Google Drive'a taşı, .gitignore'a ekle (99-Dashboard/bulut-depolama.md)");
section("4. Promptu kaydedilmemiş log satırları", problems.unloggedPrompts, "Mümkünse geriye dönük doldur; yeni üretimlerde zorunlu");
section("5. Marka brief'lerinde doğrulanacak alanlar", problems.openQuestions, "Müşteriyle teyit et");

const total = Object.values(problems).reduce((n, a) => n + a.length, 0);
console.log(`\n${total ? total + " bulgu" : "Her şey yolunda"}.`);
process.exit(problems.frontmatter.length || overLimit ? 1 : 0);
