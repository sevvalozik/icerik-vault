/**
 * lib/feed-note.js — `04-Sosyal-Medya-Icerik/<slug>/instagram-feed.md` notunu
 * JSON'a çevirir ve geri yazar. Round-trip güvenli: `## Gönderiler` bölümü
 * dışındaki her şey (kullanıcının kendi notları) olduğu gibi korunur.
 *
 * Not biçimi:
 *   ### 1 · <baslik>
 *   - görsel: 03-Assets/images/<slug>/instagram/x.jpg
 *   - tür: post | reels | carousel
 *   - ek görseller: a.jpg, b.jpg
 *   - tarih: 2026-09-24 19:30
 *   - durum: taslak | planlandi | yayinlandi
 *   - begeni: 240
 *   - yorum: 12
 *   - alt: "..."
 *   > caption satırı
 */

const fs = require("fs");
const path = require("path");
const { ROOT, parseFrontmatter, writeFileAtomic, kebab } = require("./vault.js");

const POSTS_HEADING = "## Gönderiler";
const STORIES_HEADING = "## Hikayeler";
/** Stüdyonun yönettiği bölümler; bunlar her kayıtta yeniden yazılır, diğerleri korunur. */
const MANAGED = ["Gönderiler", "Hikayeler"];

/**
 * Bir `## Başlık` bölümünün gövdesini döndürür. Başlık yalnızca satır başında aranır —
 * metin içinde geçen `## Gönderiler` ifadesi bölümü kesmesin.
 */
function sectionBody(text, title) {
  const re = new RegExp(`^##[ \\t]+${title}[ \\t]*$`, "m");
  const m = text.match(re);
  if (!m) return "";
  let rest = text.slice(m.index + m[0].length);
  const next = rest.search(/^##[ \t]+/m);
  return next === -1 ? rest : rest.slice(0, next);
}
const TYPES = ["post", "reels", "carousel"];
const STATUSES = ["taslak", "planlandi", "yayinlandi"];

const feedPath = (slug) => path.join(ROOT, "04-Sosyal-Medya-Icerik", slug, "instagram-feed.md");

function splitList(v) {
  if (Array.isArray(v)) return v.filter(Boolean);
  if (!v) return [];
  return String(v).split(",").map((s) => s.trim().replace(/^"|"$/g, "")).filter(Boolean);
}

function toInt(v, fallback = 0) {
  const n = parseInt(String(v ?? "").replace(/[^\d-]/g, ""), 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Ham metinden gönderi bloklarını ayrıştırır. */
function parsePosts(body) {
  const lines = body.split(/\r?\n/);
  const posts = [];
  let cur = null;
  const push = () => { if (cur) posts.push(cur); cur = null; };

  for (const line of lines) {
    const h = line.match(/^###\s+(.*)$/);
    if (h) {
      push();
      const title = h[1].replace(/^\d+\s*[·.\-]\s*/, "").trim();
      cur = { id: title || `post-${posts.length + 1}`, title, image: "", type: "post", extraImages: [], poster: "", date: "", status: "taslak", likes: 0, comments: 0, alt: "", likedBy: "", commentUser: "", commentText: "", caption: "" };
      continue;
    }
    if (!cur) continue;

    const kv = line.match(/^\s*[-*]\s*([^:]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1].trim().toLowerCase();
      const val = kv[2].replace(/\s+#.*$/, "").trim().replace(/^"|"$/g, "");
      if (key === "görsel" || key === "gorsel") cur.image = val;
      else if (key === "tür" || key === "tur") cur.type = TYPES.includes(val) ? val : "post";
      else if (key === "ek görseller" || key === "ek gorseller") cur.extraImages = splitList(val);
      else if (key === "tarih") cur.date = val;
      else if (key === "durum") cur.status = STATUSES.includes(val) ? val : "taslak";
      else if (key === "begeni" || key === "beğeni") cur.likes = toInt(val);
      else if (key === "yorum") cur.comments = toInt(val);
      else if (key === "alt") cur.alt = val;
      else if (key === "poster") cur.poster = val;
      else if (key === "begenen" || key === "beğenen") cur.likedBy = val;
      else if (key === "yorum yazan") cur.commentUser = val;
      else if (key === "yorum metni") cur.commentText = val;
      continue;
    }
    const q = line.match(/^\s*>\s?(.*)$/);
    if (q) {
      cur.caption = cur.caption ? `${cur.caption}\n${q[1]}` : q[1];
      continue;
    }
  }
  push();
  return posts.map((p, i) => ({ ...p, caption: p.caption.trim(), order: i }));
}

/** `## Hikayeler` bölümünü ayrıştırır. Sıra = story sırası. */
function parseStories(body) {
  const stories = [];
  let cur = null;
  const push = () => { if (cur) stories.push(cur); cur = null; };

  for (const line of body.split(/\r?\n/)) {
    const h = line.match(/^###\s+(.*)$/);
    if (h) {
      push();
      const title = h[1].replace(/^\d+\s*[·.\-]\s*/, "").trim();
      cur = { id: title || `story-${stories.length + 1}`, title, image: "", poster: "", duration: 5, date: "", status: "taslak", text: "", link: "" };
      continue;
    }
    if (!cur) continue;
    const kv = line.match(/^\s*[-*]\s*([^:]+):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1].trim().toLowerCase();
    const val = kv[2].replace(/\s+#.*$/, "").trim().replace(/^"|"$/g, "");
    if (key === "görsel" || key === "gorsel") cur.image = val;
    else if (key === "poster") cur.poster = val;
    else if (key === "süre" || key === "sure") cur.duration = Math.min(30, Math.max(1, toInt(val, 5)));
    else if (key === "tarih") cur.date = val;
    else if (key === "durum") cur.status = STATUSES.includes(val) ? val : "taslak";
    else if (key === "metin") cur.text = val;
    else if (key === "bağlantı" || key === "baglanti") cur.link = val;
  }
  push();
  return stories.map((s, i) => ({ ...s, order: i }));
}

function serializeStory(story, index) {
  const title = story.title || story.id || `hikaye-${index + 1}`;
  const out = [
    `### ${index + 1} · ${title}`,
    `- görsel: ${story.image || ""}`,
    `- poster: ${story.poster || ""}`,
    `- süre: ${Math.min(30, Math.max(1, toInt(story.duration, 5)))}`,
    `- tarih: ${story.date || ""}`,
    `- durum: ${STATUSES.includes(story.status) ? story.status : "taslak"}`,
    `- metin: ${story.text || ""}`,
    `- bağlantı: ${story.link || ""}`,
  ];
  return out.map((l) => l.replace(/[ \t]+$/, "")).join("\n");
}

function serializePost(post, index) {
  const title = post.title || post.id || `gonderi-${index + 1}`;
  const out = [`### ${index + 1} · ${title}`];
  out.push(`- görsel: ${post.image || ""}`);
  out.push(`- tür: ${TYPES.includes(post.type) ? post.type : "post"}`);
  out.push(`- ek görseller: ${(post.extraImages || []).join(", ")}`);
  out.push(`- poster: ${post.poster || ""}`);
  out.push(`- tarih: ${post.date || ""}`);
  out.push(`- durum: ${STATUSES.includes(post.status) ? post.status : "taslak"}`);
  out.push(`- begeni: ${toInt(post.likes)}`);
  out.push(`- yorum: ${toInt(post.comments)}`);
  out.push(`- alt: ${post.alt || ""}`);
  out.push(`- begenen: ${post.likedBy || ""}`);
  out.push(`- yorum yazan: ${post.commentUser || ""}`);
  out.push(`- yorum metni: ${post.commentText || ""}`);
  for (let i = 0; i < out.length; i++) out[i] = out[i].replace(/[ \t]+$/, "");
  const caption = (post.caption || "").replace(/\r/g, "");
  if (caption.trim()) out.push(caption.split("\n").map((l) => `> ${l}`.trimEnd()).join("\n"));
  return out.join("\n");
}

/** Frontmatter + gönderiler → uygulamanın kullandığı JSON. */
function toProfile(data, posts, stories = []) {
  return {
    slug: data.slug || "",
    client: data.client || "",
    username: data.username || data.slug || "",
    profileName: data.profile_name || data.client || "",
    bio: (data.bio || "").replace(/\\n/g, "\n"),
    avatar: data.avatar || "",
    postsCount: data.posts_count !== undefined && data.posts_count !== "" ? toInt(data.posts_count, posts.length) : posts.length,
    followers: toInt(data.followers),
    following: toInt(data.following),
    verified: String(data.verified) === "true",
    private: String(data.private) === "true",
    gridRatio: data.grid_ratio === "1:1" ? "1:1" : "4:5",
    theme: data.theme === "light" ? "light" : "dark",
    highlights: splitList(data.highlights),
    statusBarTime: data.status_bar_time || "19:28",
    status: data.status || "draft",
    date: data.date || "",
    posts,
    stories,
  };
}

function readFeed(slug) {
  const file = feedPath(slug);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = parseFrontmatter(raw);
  return toProfile(data, parsePosts(sectionBody(content, "Gönderiler")), parseStories(sectionBody(content, "Hikayeler")));
}

/** Frontmatter bloğunu profil verisinden yeniden üretir; bilinmeyen alanlar korunur. */
function serializeFrontmatter(profile, previousRaw) {
  const known = new Set(["type", "client", "slug", "platform", "username", "profile_name", "bio", "avatar", "posts_count", "followers", "following", "verified", "private", "grid_ratio", "theme", "highlights", "status_bar_time", "status", "date", "tags", "related"]);
  const extra = [];
  if (previousRaw) {
    const m = previousRaw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (m) {
      for (const line of m[1].split(/\r?\n/)) {
        const kv = line.match(/^([A-Za-z0-9_]+):/);
        if (kv && !known.has(kv[1])) extra.push(line);
      }
    }
  }
  const q = (s) => `"${String(s ?? "").replace(/"/g, '\\"')}"`;
  const lines = [
    "---",
    "type: instagram-feed",
    `client: ${q(profile.client)}`,
    `slug: ${profile.slug}`,
    "platform: instagram",
    `username: ${profile.username || ""}`,
    `profile_name: ${q(profile.profileName)}`,
    `bio: ${q((profile.bio || "").replace(/\r/g, "").replace(/\n/g, "\\n"))}`,
    `avatar: ${profile.avatar || ""}`,
    `posts_count: ${toInt(profile.postsCount, (profile.posts || []).length)}`,
    `followers: ${toInt(profile.followers)}`,
    `following: ${toInt(profile.following)}`,
    `verified: ${profile.verified ? "true" : "false"}`,
    `private: ${profile.private ? "true" : "false"}`,
    `grid_ratio: ${q(profile.gridRatio === "1:1" ? "1:1" : "4:5")}`,
    `theme: ${profile.theme === "light" ? "light" : "dark"}`,
    `highlights: [${(profile.highlights || []).map(q).join(", ")}]`,
    `status_bar_time: ${q(profile.statusBarTime || "19:28")}`,
    `status: ${profile.status || "draft"}`,
    `date: ${profile.date || new Date().toISOString().slice(0, 10)}`,
    "tags: [sosyal-medya, instagram, onizleme]",
    `related: ["[[00-Musteriler/${profile.slug}/marka-brief]]"]`,
    ...extra,
    "---",
  ];
  return lines.join("\n");
}

/**
 * Notu yazar. Var olan dosyada `## Gönderiler` bölümü dışındaki gövde korunur.
 */
function writeFeed(profile) {
  const slug = profile.slug;
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Geçersiz slug");
  const file = feedPath(slug);
  const previousRaw = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  const prevBody = previousRaw ? parseFrontmatter(previousRaw).content : "";

  // Gövdeyi `## ` başlıklarına göre böl; TÜM "Gönderiler" bölümlerini çıkar, gerisini koru.
  // (Eşzamanlı yazımda ikinci bir Gönderiler bölümü oluşursa katlanarak çoğalmasın.)
  const segments = [];
  const headRe = /^##[ \t]+(.*)$/gm;
  let match, last = 0, lastTitle = null;
  while ((match = headRe.exec(prevBody)) !== null) {
    segments.push({ title: lastTitle, text: prevBody.slice(last, match.index) });
    lastTitle = match[1].trim();
    last = match.index;
  }
  segments.push({ title: lastTitle, text: prevBody.slice(last) });

  const isManaged = (t) => t !== null && MANAGED.includes(t.replace(/\s+$/, ""));
  let insertAt = segments.findIndex((seg) => isManaged(seg.title));
  const kept = segments.filter((seg) => !isManaged(seg.title));
  if (insertAt === -1) insertAt = kept.length;
  else insertAt = segments.slice(0, insertAt).filter((seg) => !isManaged(seg.title)).length;

  const before = kept.slice(0, insertAt).map((seg) => seg.text.trimEnd()).filter(Boolean).join("\n\n");
  const after = kept.slice(insertAt).map((seg) => seg.text.trimEnd()).filter(Boolean).join("\n\n");

  const postsBlock = (profile.posts || []).map(serializePost).join("\n\n");
  const storiesBlock = (profile.stories || []).map(serializeStory).join("\n\n");
  const parts = [
    serializeFrontmatter(profile, previousRaw), "", before, "",
    STORIES_HEADING, "", storiesBlock || "_Henüz hikaye yok._", "",
    POSTS_HEADING, "", postsBlock || "_Henüz gönderi yok._",
  ];
  if (after) parts.push("", after);
  const out = parts.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  writeFileAtomic(file, out);
  return file;
}

/** Feed notu yoksa marka brief'inden iskelet profil üretir (dosyaya yazmaz). */
function emptyProfile(client) {
  return toProfile({
    slug: client.slug,
    client: client.client,
    username: kebab(client.client).replace(/-/g, ""),
    profile_name: client.client,
    bio: "",
    followers: "0",
    following: "0",
    theme: "dark",
    grid_ratio: "4:5",
    date: new Date().toISOString().slice(0, 10),
  }, [], []);
}

module.exports = { readFeed, writeFeed, feedPath, emptyProfile, toProfile, parsePosts, serializePost, parseStories, serializeStory, sectionBody, POSTS_HEADING, STORIES_HEADING, TYPES, STATUSES };
