/* preview.js — Instagram profil önizlemesinin tek render çekirdeği.
   Stüdyo (canlı düzenleme) ve dışa aktarılan tek dosya HTML aynı kodu kullanır. */
(function (root) {
  const icon = root.icon;

  const trNum = (n) => new Intl.NumberFormat("tr-TR").format(Number(n) || 0);
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  function parseDate(s) {
    if (!s) return null;
    const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/);
    if (!m) return null;
    return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0));
  }
  function formatDate(s) {
    const d = parseDate(s);
    if (!d) return "";
    return `${d.getDate()} ${AYLAR[d.getMonth()]} ${d.getFullYear()}`;
  }
  function captionHtml(text) {
    if (!text || !text.trim()) return '<span class="ig-caption-empty">caption henüz yazılmadı</span>';
    return esc(text).replace(/(^|\s)(#[\wçğıöşüÇĞİÖŞÜ]+|@[\w.]+)/g, '$1<span class="ig-tag">$2</span>');
  }
  const compact = (n) => {
    n = Number(n) || 0;
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "").replace(".", ",") + " Mn";
    if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "").replace(".", ",") + " B";
    return trNum(n);
  };

  const isVideo = (src) => /\.(mp4|mov|m4v|webm)(\?|#|$)/i.test(String(src || "")) || /^data:video\//.test(String(src || ""));

  /** Izgara/detay için medya etiketi: video ise <video>, değilse <img>. */
  function mediaTag(src, alt, opts) {
    const o = Object.assign({ cls: "", controls: false, muted: true, poster: true, posterSrc: "" }, opts || {});
    if (!src) return "";
    if (isVideo(src)) {
      const frag = o.poster && !/^data:/.test(src) && !/#t=/.test(src) ? "#t=0.1" : "";
      const posterAttr = o.posterSrc ? ` poster="${esc(o.posterSrc)}"` : "";
      return `<video class="${o.cls}" src="${esc(src)}${frag}"${posterAttr} preload="metadata" playsinline${o.controls ? " controls" : ""}${o.muted ? " muted" : ""}></video>`;
    }
    return `<img class="${o.cls}" src="${esc(src)}" alt="${esc(alt || "")}" loading="lazy" />`;
  }

  function defaults(p) {
    return Object.assign({
      username: "kullaniciadi", profileName: "", bio: "", avatar: "", posts: [],
      postsCount: null, followers: 0, following: 0, verified: false, private: false,
      gridRatio: "4:5", theme: "dark", highlights: [], statusBarTime: "19:28", bubble: "",
    }, p || {});
  }

  function render(container, profileRaw, options) {
    const p = defaults(profileRaw);
    const o = Object.assign({
      mode: "client", resolveImage: (x) => x, onSelect: null, selectedIndex: -1,
      draggable: false, onReorder: null, showStates: false, flat: false, onChange: null, onAvatarClick: null, onAvatarDrop: null,
    }, options || {});

    const state = container.__igState || (container.__igState = { tab: "grid", detail: -1, scrollTop: 0 });
    const img = (src) => (src ? o.resolveImage(src) : "");
    const posts = p.posts || [];
    const gridPosts = posts;
    const reelPosts = posts.filter((x) => x.type === "reels");

    const avatarSrc = img(p.avatar);
    const avatarEl = (cls) => avatarSrc
      ? `<img class="${cls}" src="${esc(avatarSrc)}" alt="" />`
      : `<div class="${cls}" style="display:flex;align-items:center;justify-content:center;color:#6b6b6b">${icon("image")}</div>`;

    function tileHtml(post, index) {
      const src = img(post.image);
      const badge = post.type === "carousel" ? "carousel" : (post.type === "reels" || isVideo(post.image)) ? "reelsFilled" : null;
      return `<div class="ig-tile${o.selectedIndex === index ? " ig-selected" : ""}" data-index="${index}"${o.draggable ? ' draggable="true"' : ""}>
        ${(() => {
          const poster = img(post.poster || post.__localPoster || "");
          if (poster) return `<img src="${esc(poster)}" alt="${esc(post.alt || "")}" loading="lazy" />`;
          if (src) return mediaTag(src, post.alt, { muted: true });
          return `<div class="ig-tile-empty">${icon("image")}<span>${post.image ? "görsel bulunamadı" : "boş slot"}</span></div>`;
        })()}
        ${o.showStates && post.status ? `<span class="ig-tile-state ig-state-${esc(post.status)}">${post.status === "planlandi" ? "plan" : post.status === "yayinlandi" ? "yayın" : "taslak"}</span>` : ""}
        ${badge ? `<span class="ig-tile-badge">${icon(badge)}</span>` : ""}
        ${post.type === "reels" && post.likes ? `<span class="ig-tile-views">${icon("play")}${compact(post.likes)}</span>` : ""}
      </div>`;
    }

    function gridHtml() {
      if (state.tab === "reels") {
        if (!reelPosts.length) return `<div class="ig-empty-state">Reels sekmesinde gösterilecek içerik yok.<br/>Bir gönderinin türünü <b>reels</b> yap.</div>`;
        return `<div class="ig-grid" data-ratio="9:16">${reelPosts.map((r) => tileHtml(r, posts.indexOf(r))).join("")}</div>`;
      }
      if (state.tab === "repost") return `<div class="ig-empty-state">Henüz yeniden paylaşım yok.</div>`;
      if (state.tab === "tagged") return `<div class="ig-empty-state">Fotoğraflarda ve videolarda etiketlendiğinde burada görünür.</div>`;
      if (!gridPosts.length) return `<div class="ig-empty-state">Henüz gönderi yok.<br/>Görselleri sürükleyip bırak.</div>`;
      return `<div class="ig-grid" data-ratio="${esc(p.gridRatio)}">${gridPosts.map((g) => tileHtml(g, posts.indexOf(g))).join("")}</div>`;
    }

    function postBlockHtml(post, index) {
      const imgs = [post.image, ...(post.extraImages || [])].filter(Boolean);
      const src = img(imgs[0]);
      const likeRow = post.likedBy
        ? `<div class="ig-likedby"><span class="ig-facepile"><i></i><i></i><i></i></span><span><b>${esc(post.likedBy)}</b> ve <b>diğer kişiler</b> beğendi</span></div>`
        : (post.likes ? `<div class="ig-post-likes">${trNum(post.likes)} beğenme</div>` : "");
      const commentRow = post.commentUser || post.commentText
        ? `<div class="ig-comment-row"><span><b>${esc(post.commentUser || p.username)}</b> ${captionHtml(post.commentText)}</span>${icon("heartFilled", "ig-comment-heart")}</div>`
        : "";
      const captionRow = (post.caption || "").trim()
        ? `<div class="ig-post-caption"><span class="ig-u">${esc(p.username)}</span> ${captionHtml(post.caption)}</div>`
        : (commentRow ? "" : `<div class="ig-post-caption"><span class="ig-u">${esc(p.username)}</span> ${captionHtml("")}</div>`);

      return `<div class="ig-post" data-post="${index}">
        <div class="ig-post-head">
          ${avatarEl("ig-post-avatar")}
          <div class="ig-post-user">${esc(p.username)}${p.verified ? icon("verified") : ""}</div>
          <span class="ig-spacer"></span>
          ${icon("menu2", "ig-post-menu")}
        </div>
        <div class="ig-post-media">
          ${src ? mediaTag(src, post.alt, { controls: isVideo(src), muted: false, poster: false, posterSrc: img(post.poster || post.__localPoster || "") })
                : `<div class="ig-media-empty">${icon("image")}<span>${post.image ? "medya bulunamadı" : "görsel eklenmedi"}</span></div>`}
          ${imgs.length > 1 ? `<div class="ig-post-dots">${imgs.map((_, i) => `<span class="${i === 0 ? "on" : ""}"></span>`).join("")}</div>` : ""}
        </div>
        <div class="ig-post-bar">
          <span class="ig-act">${icon("heart")}${post.likes ? `<b>${trNum(post.likes)}</b>` : ""}</span>
          <span class="ig-act">${icon("comment")}${post.comments ? `<b>${trNum(post.comments)}</b>` : ""}</span>
          <span class="ig-act">${icon("send")}</span>
          <span class="ig-spacer"></span>
          ${icon("bookmark")}
        </div>
        <div class="ig-post-meta">
          ${likeRow}
          ${captionRow}
          ${commentRow}
          ${post.comments > 1 ? `<div class="ig-post-comments">${trNum(post.comments)} yorumun tümünü gör</div>` : ""}
          <div class="ig-post-date">${esc(formatDate(post.date) || "tarih belirtilmedi")}</div>
        </div>
      </div>`;
    }

    function detailHtml() {
      if (!posts[state.detail]) return "";
      const feed = posts.slice(state.detail);   // seçilenden sonuna kadar hepsi
      return `<div class="ig-detail">
        <div class="ig-detail-top">
          ${icon("back", "ig-detail-back")}
          <div class="ig-detail-title"><div>Gönderi</div><div class="ig-detail-sub">${esc(p.username)}</div></div>
          <span class="ig-detail-pad"></span>
        </div>
        <div class="ig-detail-body">${feed.map((post, i) => postBlockHtml(post, state.detail + i)).join("")}</div>
      </div>`;
    }

    const bioLines = String(p.bio || "").split("\n").filter((l) => l.length);
    const html = `<div class="ig-phone${p.theme === "light" ? " ig-light" : ""}${o.flat ? " ig-flat" : ""}">
      <div class="ig-status">
        <span>${esc(p.statusBarTime)}</span>
        <span class="ig-status-right">${icon("signal")}<span class="ig-status-net">3G</span>${icon("battery")}</span>
      </div>
      <div class="ig-topbar">
        <span class="ig-topbar-left">${icon("plus")}</span>
        <span class="ig-topbar-name">${p.private ? icon("lock") : ""}${esc(p.username)}${p.verified ? icon("verified") : ""}<span class="ig-ico ig-chev">${root.IGIcons.chevronDown}</span><span class="ig-dot"></span></span>
        <span class="ig-topbar-right">${icon("threads")}${icon("menu")}</span>
      </div>
      <div class="ig-scroll">
        <div class="ig-header">
          <div class="ig-header-top">
            <div class="ig-avatar-wrap${o.onAvatarClick ? " ig-clickable" : ""}" title="${o.onAvatarClick ? "Logoyu değiştir" : ""}">
              ${p.bubble ? `<div class="ig-bubble">${esc(p.bubble)}</div>` : ""}
              ${avatarEl("ig-avatar")}
              ${o.mode === "studio" || o.mode === "self" ? `<span class="ig-avatar-add">${icon("plus")}</span>` : ""}
            </div>
            <div class="ig-stats">
              <div><div class="ig-stat-num">${trNum(p.postsCount == null ? posts.length : p.postsCount)}</div><div class="ig-stat-label">gönderi</div></div>
              <div><div class="ig-stat-num">${trNum(p.followers)}</div><div class="ig-stat-label">takipçi</div></div>
              <div><div class="ig-stat-num">${trNum(p.following)}</div><div class="ig-stat-label">takip</div></div>
            </div>
          </div>
          <div class="ig-bio">${p.profileName ? `<div class="ig-bio-name">${esc(p.profileName)}</div>` : ""}${bioLines.map((l) => captionHtml(l)).join("<br/>")}</div>
          ${o.mode === "client" ? "" : `<div class="ig-banner">${icon("plus")}Banner ekle</div>`}
          <div class="ig-actions">
            ${o.mode === "client"
              ? `<div class="ig-btn ig-btn-primary">Takip Et</div><div class="ig-btn">Mesaj</div><div class="ig-btn ig-btn-sq">${icon("personAdd")}</div>`
              : `<div class="ig-btn">Düzenle</div><div class="ig-btn">Profili paylaş</div><div class="ig-btn ig-btn-sq">${icon("personAdd")}</div>`}
          </div>
        </div>
        <div class="ig-highlights">
          ${(p.highlights || []).map((h) => {
            const label = typeof h === "string" ? h : h.label;
            const cover = typeof h === "string" ? "" : img(h.cover);
            return `<div class="ig-hl"><div class="ig-hl-circle">${cover ? `<img src="${esc(cover)}" alt="" />` : icon("image")}</div><div class="ig-hl-label">${esc(label)}</div></div>`;
          }).join("")}
          <div class="ig-hl"><div class="ig-hl-circle">${icon("plus")}</div><div class="ig-hl-label">Öne Çıkanlar</div></div>
        </div>
        <div class="ig-tabs">
          ${[["grid", "grid"], ["reels", "reels"], ["repost", "repost"], ["tagged", "tagged"]].map(([key, ic]) =>
            `<div class="ig-tab${state.tab === key ? " ig-active" : ""}" data-tab="${key}">${icon(ic)}</div>`).join("")}
        </div>
        ${gridHtml()}
      </div>
      <div class="ig-bottomnav">
        <span class="ig-nav-item">${icon("home")}</span>
        <span class="ig-nav-item">${icon("reels")}</span>
        <span class="ig-nav-item">${icon("send")}<span class="ig-dot"></span></span>
        <span class="ig-nav-item">${icon("search")}</span>
        <span class="ig-nav-item">${avatarEl("ig-nav-avatar")}<span class="ig-dot"></span></span>
      </div>
      ${state.detail >= 0 ? detailHtml() : ""}
    </div>`;

    container.innerHTML = html;
    const scroll = container.querySelector(".ig-scroll");
    if (scroll) { scroll.scrollTop = state.scrollTop; scroll.addEventListener("scroll", () => { state.scrollTop = scroll.scrollTop; }); }

    container.querySelectorAll(".ig-tab").forEach((el) => el.addEventListener("click", () => {
      state.tab = el.dataset.tab; state.scrollTop = scroll ? scroll.scrollTop : 0; render(container, profileRaw, options);
    }));

    const avatarWrap = container.querySelector(".ig-avatar-wrap");
    if (avatarWrap && o.onAvatarClick) {
      avatarWrap.addEventListener("click", (e) => { e.stopPropagation(); o.onAvatarClick(); });
      if (o.onAvatarDrop) {
        avatarWrap.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("Files")) { e.preventDefault(); e.stopPropagation(); avatarWrap.classList.add("ig-drop-hot"); } });
        avatarWrap.addEventListener("dragleave", () => avatarWrap.classList.remove("ig-drop-hot"));
        avatarWrap.addEventListener("drop", (e) => {
          if (!e.dataTransfer.files.length) return;
          e.preventDefault(); e.stopPropagation(); avatarWrap.classList.remove("ig-drop-hot");
          o.onAvatarDrop(e.dataTransfer.files[0]);
        });
      }
    }

    const back = container.querySelector(".ig-detail-back");
    if (back) back.addEventListener("click", () => { state.detail = -1; render(container, profileRaw, options); });

    container.querySelectorAll(".ig-tile").forEach((el) => {
      const index = +el.dataset.index;
      el.addEventListener("click", () => {
        if (o.onSelect) o.onSelect(posts[index], index);
        else { state.detail = index; render(container, profileRaw, options); }
      });
      el.addEventListener("dblclick", () => { state.detail = index; render(container, profileRaw, options); });
      if (!o.draggable) return;
      el.addEventListener("dragstart", (e) => { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/ig-index", String(index)); el.classList.add("ig-dragging"); });
      el.addEventListener("dragend", () => el.classList.remove("ig-dragging"));
      el.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("text/ig-index")) { e.preventDefault(); el.classList.add("ig-drop-target"); } });
      el.addEventListener("dragleave", () => el.classList.remove("ig-drop-target"));
      el.addEventListener("drop", (e) => {
        el.classList.remove("ig-drop-target");
        const from = +e.dataTransfer.getData("text/ig-index");
        if (Number.isNaN(from) || from === index) return;
        e.preventDefault(); e.stopPropagation();
        if (o.onReorder) o.onReorder(from, index);
      });
    });

    return container;
  }

  root.IGPreview = { render, trNum, compact, formatDate, parseDate, captionHtml, esc, AYLAR, isVideo };
})(typeof window !== "undefined" ? window : globalThis);
