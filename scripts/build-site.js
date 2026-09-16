#!/usr/bin/env node
/**
 * build-site.js
 * `type: website` olan .md notlarını 02-Websites/projects/ (alt klasörler dahil) içinden okuyup
 * basit birer .html dosyasına derler. Çıktı: 02-Websites/dist/<slug>.html
 *
 * Kullanım:
 *   node scripts/build-site.js
 *
 * Harici paket gerektirmez. Notun frontmatter'ındaki `slug` bir marka brief'iyle
 * (00-Musteriler/<slug>/marka-brief.md) eşleşiyorsa, brief'in renk paleti tablosundaki
 * ilk hex değerleri CSS değişkeni olarak sayfaya yazılır (--zemin, --birincil, --vurgu, --metin).
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PROJECTS_DIR = path.join(ROOT, "02-Websites", "projects");
const CLIENTS_DIR = path.join(ROOT, "00-Musteriler");
const DIST_DIR = path.join(ROOT, "02-Websites", "dist");

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
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function simpleMarkdownToHtml(md) {
  const out = [];
  const blocks = md.split(/\n{2,}/);
  for (const block of blocks) {
    const b = block.trim();
    if (!b) continue;
    if (b.startsWith("```html")) { out.push(b.replace(/^```html\n?/, "").replace(/```$/, "")); continue; }
    if (b.startsWith("```")) { out.push(`<pre><code>${escapeHtml(b.replace(/^```[a-z]*\n?/, "").replace(/```$/, ""))}</code></pre>`); continue; }
    const h = b.match(/^(#{1,4})\s+(.*)$/);
    if (h && !b.includes("\n")) { out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); continue; }
    const lines = b.split("\n");
    if (lines.every((l) => /^\s*[-*]\s+/.test(l))) {
      out.push("<ul>\n" + lines.map((l) => `  <li>${inline(l.replace(/^\s*[-*]\s+/, ""))}</li>`).join("\n") + "\n</ul>");
      continue;
    }
    if (lines.every((l) => /^\s*\d+[.)]\s+/.test(l))) {
      out.push("<ol>\n" + lines.map((l) => `  <li>${inline(l.replace(/^\s*\d+[.)]\s+/, ""))}</li>`).join("\n") + "\n</ol>");
      continue;
    }
    out.push(`<p>${lines.map(inline).join("<br />\n")}</p>`);
  }
  return out.join("\n");
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

function buildPage(data, content) {
  const title = escapeHtml(data.client || "Website");
  const palette = readPalette(data.slug) || {};
  const vars = Object.entries(palette).map(([k, v]) => `      --${k}: ${v};`).join("\n");
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
${vars || "      --zemin: #ffffff; --metin: #222222; --birincil: #222222; --vurgu: #0066cc;"}
    }
    body { margin: 0; font-family: system-ui, sans-serif; background: var(--zemin); color: var(--metin); line-height: 1.6; }
    main { max-width: 72rem; margin: 0 auto; padding: 2rem 1rem; }
    h1, h2, h3 { color: var(--birincil); }
    a, .btn { color: var(--vurgu); }
  </style>
</head>
<body>
<main>
${simpleMarkdownToHtml(content.trim())}
</main>
</body>
</html>
`;
}

function walkMd(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMd(full, out);
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function main() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
    console.log("02-Websites/projects/ oluşturuldu (henüz website notu yok).");
    return;
  }
  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

  let built = 0;
  for (const file of walkMd(PROJECTS_DIR)) {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = parseFrontmatter(raw);
    if (data.type !== "website") continue;
    const html = buildPage(data, content);
    const slug = path.basename(file).replace(/\.md$/, ".html");
    fs.writeFileSync(path.join(DIST_DIR, slug), html, "utf8");
    console.log(`✓ ${path.relative(ROOT, file)} -> 02-Websites/dist/${slug}`);
    built += 1;
  }
  console.log(`\n${built} website notu derlendi. Çıktı: ${DIST_DIR}`);
}

main();
