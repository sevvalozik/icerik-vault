#!/usr/bin/env node
/**
 * build-site.js
 * type: website olan .md notlarını 02-Websites/projects/ içinden okuyup
 * basit birer .html dosyasına derler. Çıktı: 02-Websites/dist/<slug>.html
 *
 * Kullanım:
 *   node scripts/build-site.js
 *
 * Not: Harici paket gerektirmez (sadece Node.js built-in modülleri).
 * Daha gelişmiş markdown -> HTML dönüşümü istersen `marked` paketini
 * npm ile kurup bu scriptteki basit render fonksiyonunun yerine koyabilirsin.
 */

const fs = require("fs");
const path = require("path");

const PROJECTS_DIR = path.join(__dirname, "..", "02-Websites", "projects");
const DIST_DIR = path.join(__dirname, "..", "02-Websites", "dist");

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, fmBlock, content] = match;
  const data = {};
  fmBlock.split("\n").forEach((line) => {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) return;
    let [, key, value] = m;
    value = value.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^"|"$/g, "");
    }
  });
  return { data, content };
}

function simpleMarkdownToHtml(md) {
  return md
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith("## ")) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith("# ")) return `<h1>${block.slice(2)}</h1>`;
      if (block.trim().startsWith("```html")) {
        return block.replace(/```html\n?/, "").replace(/```$/, "");
      }
      return `<p>${block}</p>`;
    })
    .join("\n");
}

function buildPage(data, content) {
  const title = data.client || "Website";
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
${simpleMarkdownToHtml(content.trim())}
</body>
</html>
`;
}

function main() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error("Bulunamadı: " + PROJECTS_DIR);
    process.exit(1);
  }
  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
  let built = 0;

  files.forEach((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data, content } = parseFrontmatter(raw);
    if (data.type !== "website") return;

    const html = buildPage(data, content);
    const slug = file.replace(/\.md$/, ".html");
    fs.writeFileSync(path.join(DIST_DIR, slug), html, "utf8");
    console.log(`✓ ${file} -> dist/${slug}`);
    built += 1;
  });

  console.log(`\n${built} website notu derlendi. Çıktı: ${DIST_DIR}`);
}

main();
