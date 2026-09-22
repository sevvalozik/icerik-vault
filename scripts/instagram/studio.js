/* studio.js — düzenleme katmanı: müşteri seçimi, sürükle-bırak, sıralama, kayıt, export. */
(function () {
  const $ = (id) => document.getElementById(id);
  const phone = $("phone");
  const calendarEl = $("calendar");
  const stage = document.querySelector(".stage");

  let profile = null;
  let palette = null;
  let selected = -1;
  let storySel = -1;
  let view = "grid";
  let saveTimer = null;
  let saving = false;
  let version = 0;
  const pending = new Map(); // title -> File (henüz vault'a yazılmamış)

  const toast = (msg, isErr) => {
    const t = $("toast");
    t.textContent = msg;
    t.className = "toast on" + (isErr ? " err" : "");
    clearTimeout(t.__t);
    t.__t = setTimeout(() => { t.className = "toast"; }, 2600);
  };
  const setState = (text, cls) => { const s = $("saveState"); s.textContent = text; s.className = "savestate " + (cls || ""); };

  const api = async (url, opts) => {
    const res = await fetch(url, opts);
    const body = await res.json().catch(() => ({ error: "yanıt okunamadı" }));
    if (!res.ok) throw new Error(body.error || res.statusText);
    return body;
  };

  const resolveImage = (p) => (!p ? "" : /^(blob:|data:|https?:)/.test(p) ? p : "/asset/" + p.split("/").map(encodeURIComponent).join("/"));
  const kebab = (s) => String(s).replace(/[çğıöşüÇĞİIÖŞÜ]/g, (c) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", Ç: "c", Ğ: "g", İ: "i", I: "i", Ö: "o", Ş: "s", Ü: "u" }[c] || c))
    .normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

  /* ---------- render ---------- */
  function renderAll() {
    if (!profile) return;
    window.IGPreview.render(phone, profile, {
      mode: "studio",
      resolveImage: (p) => resolveImage(pendingUrl(p) || p),
      selectedIndex: selected,
      draggable: true,
      showStates: $("f_states").checked,
      onSelect: (post, i) => { selected = i; storySel = -1; renderAll(); },
      onReorder: reorder,
      onAvatarClick: () => { $("filePicker").dataset.target = "avatar"; $("filePicker").click(); },
      onAvatarDrop: (file) => uploadSingle(file, "avatar"),
    });
    if (view === "calendar") renderCalendar();
    renderPostEditor();
    renderStories();
  }
  function pendingUrl(p) { return typeof p === "string" && p.startsWith("blob:") ? p : null; }

  function renderCalendar() {
    window.IGCalendar.render(calendarEl, profile, {
      editable: true,
      resolveImage,
      onSelect: (i) => { selected = i; view = "grid"; switchView("grid"); renderAll(); },
      onChange: () => { markDirty(); renderAll(); },
    });
  }

  function storyThumb(st) {
    const src = resolveImage(st.poster || st.__localPoster || st.image || "");
    if (!src) return `<span class="empty">medya yok</span>`;
    if (window.IGPreview.isVideo(src)) return `<video src="${src}" muted playsinline preload="metadata"></video>`;
    return `<img src="${src}" alt="" />`;
  }

  function renderStories() {
    const list = $("storyList");
    const stories = profile.stories || [];
    $("storyCount").textContent = stories.length ? `(${stories.length})` : "";
    $("storyPlay").disabled = !stories.length;
    list.innerHTML = stories
      .map((st, i) => `<li data-i="${i}" draggable="true" class="${i === storySel ? "on" : ""}" title="${(st.title || "").replace(/"/g, "")}">
        ${storyThumb(st)}<span class="num">${i + 1}</span>
        ${window.IGPreview.isVideo(st.image) ? '<span class="vid">▶</span>' : ""}
      </li>`)
      .join("");

    list.querySelectorAll("li").forEach((li) => {
      const i = +li.dataset.i;
      li.addEventListener("click", () => { storySel = i; selected = -1; renderAll(); });
      li.addEventListener("dragstart", (e) => { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/story", String(i)); li.classList.add("dragging"); });
      li.addEventListener("dragend", () => li.classList.remove("dragging"));
      li.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("text/story")) { e.preventDefault(); li.classList.add("drop"); } });
      li.addEventListener("dragleave", () => li.classList.remove("drop"));
      li.addEventListener("drop", (e) => {
        li.classList.remove("drop");
        const from = +e.dataTransfer.getData("text/story");
        if (Number.isNaN(from) || from === i) return;
        e.preventDefault(); e.stopPropagation();
        const [moved] = profile.stories.splice(from, 1);
        profile.stories.splice(i, 0, moved);
        storySel = i;
        markDirty(); renderAll();
      });
    });

    const st = stories[storySel];
    $("storyEditor").classList.toggle("hidden", !st);
    $("postPane").classList.toggle("hidden", !!st);
    if (!st) return;
    $("storyIndex").textContent = `${storySel + 1}/${stories.length}`;
    $("s_thumb").src = resolveImage(st.poster || st.__localPoster || st.image) || "";
    $("s_file").textContent = st.image || "(medya yok)";
    $("s_title").value = st.title || "";
    $("s_text").value = st.text || "";
    $("s_duration").value = st.duration || 5;
    $("s_date").value = (String(st.date || "").match(/^\d{4}-\d{2}-\d{2}/) || [""])[0];
    $("s_status").value = st.status || "taslak";
    $("s_link").value = st.link || "";
  }

  function playStories(from = 0) {
    const phoneEl = phone.querySelector(".ig-phone");
    if (!phoneEl || !(profile.stories || []).length) return;
    window.IGPreview.openStoryViewer(phoneEl, profile, { resolveImage: (x) => resolveImage(x) }, from);
  }

  function addStoryFiles(files) {
    const list = Array.from(files).filter((f) => /^image\/(jpeg|png|webp)$/.test(f.type) || /^video\/(mp4|quicktime)$/.test(f.type) || /\.(jpe?g|png|webp|mp4|mov)$/i.test(f.name));
    if (!list.length) { toast("Desteklenen dosya yok (jpg, png, webp, mp4)", true); return; }
    profile.stories = profile.stories || [];
    list.forEach((file) => {
      const base = kebab(file.name.replace(/\.[^.]+$/, "")) || "hikaye";
      let title = base, i = 2;
      while (profile.stories.some((x) => x.title === title)) title = `${base}-${i++}`;
      const key = "s" + Math.random().toString(36).slice(2);
      const story = {
        __key: key, id: title, title, image: URL.createObjectURL(file), poster: "",
        duration: 5, date: "", status: "taslak", text: "", link: "",
      };
      pending.set(key, file);
      profile.stories.push(story);
      if (/^video\//.test(file.type) || /\.(mp4|mov)$/i.test(file.name)) {
        captureFrame(file).then((dataUrl) => {
          if (!dataUrl) return;
          const target = profile.stories.find((x) => x.__key === key);
          if (target) { target.__localPoster = dataUrl; renderAll(); }
        });
      }
    });
    storySel = profile.stories.length - 1;
    selected = -1;
    markDirty(); renderAll();
    toast(`${list.length} hikaye eklendi — kaydediliyor`);
  }

  function renderPostEditor() {
    const post = profile.posts[selected];
    $("postEditor").classList.toggle("hidden", !post);
    $("noPost").classList.toggle("hidden", !!post);
    $("postIndex").textContent = post ? `${selected + 1}/${profile.posts.length}` : "";
    if (!post) return;
    const thumbSrc = resolveImage(post.poster || post.__localPoster || post.image) || "";
    const thumbBox = $("p_thumb");
    if (window.IGPreview.isVideo(thumbSrc)) {
      thumbBox.outerHTML = `<video id="p_thumb" src="${thumbSrc}#t=0.1" muted playsinline preload="metadata"></video>`;
    } else {
      thumbBox.outerHTML = `<img id="p_thumb" src="${thumbSrc}" alt="" />`;
    }
    $("p_file").textContent = post.image || "(medya yok)";
    $("p_title").value = post.title || "";
    $("p_caption").value = post.caption || "";
    const m = String(post.date || "").match(/^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}:\d{2}))?/);
    $("p_date").value = m ? m[1] : "";
    $("p_time").value = m && m[2] ? m[2] : "";
    $("p_type").value = post.type || "post";
    $("p_status").value = post.status || "taslak";
    $("p_likes").value = post.likes || 0;
    $("p_comments").value = post.comments || 0;
    $("p_alt").value = post.alt || "";
    $("p_extra").value = (post.extraImages || []).join(", ");
    $("p_likedby").value = post.likedBy || "";
    $("p_cuser").value = post.commentUser || "";
    $("p_ctext").value = post.commentText || "";
  }

  function fillProfileForm() {
    $("f_username").value = profile.username || "";
    $("f_profileName").value = profile.profileName || "";
    $("f_bio").value = profile.bio || "";
    $("f_postsCount").value = profile.postsCount == null ? "" : profile.postsCount;
    $("f_followers").value = profile.followers || 0;
    $("f_following").value = profile.following || 0;
    $("f_avatar").value = profile.avatar || "";
    $("f_highlights").value = (profile.highlights || []).map((h) => (typeof h === "string" ? h : h.label)).join(", ");
    $("f_bubble").value = profile.bubble || "";
    $("f_time").value = profile.statusBarTime || "19:28";
    $("f_theme").value = profile.theme || "dark";
    $("f_ratio").value = profile.gridRatio || "4:5";
    $("f_private").checked = !!profile.private;
    $("f_verified").checked = !!profile.verified;
  }

  function readProfileForm() {
    profile.username = $("f_username").value.trim();
    profile.profileName = $("f_profileName").value;
    profile.bio = $("f_bio").value;
    const pc = $("f_postsCount").value.trim();
    profile.postsCount = pc === "" ? null : Number(pc);
    profile.followers = Number($("f_followers").value) || 0;
    profile.following = Number($("f_following").value) || 0;
    profile.avatar = $("f_avatar").value.trim();
    profile.highlights = $("f_highlights").value.split(",").map((s) => s.trim()).filter(Boolean);
    profile.bubble = $("f_bubble").value;
    profile.statusBarTime = $("f_time").value.trim() || "19:28";
    profile.theme = $("f_theme").value;
    profile.gridRatio = $("f_ratio").value;
    profile.private = $("f_private").checked;
    profile.verified = $("f_verified").checked;
  }

  /* ---------- sıralama ---------- */
  function reorder(from, to) {
    const locked = $("f_lock").checked;
    if (locked && (profile.posts[from].status === "yayinlandi" || profile.posts[to].status === "yayinlandi")) {
      toast("Yayınlanmış gönderiler kilitli", true); return;
    }
    const [moved] = profile.posts.splice(from, 1);
    profile.posts.splice(to, 0, moved);
    selected = to;
    markDirty(); renderAll();
  }

  /* ---------- kaydetme ---------- */
  function markDirty() {
    setState("kaydedilmedi", "dirty");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 800);
  }

  async function uploadPending() {
    for (const post of [...profile.posts, ...(profile.stories || [])]) {
      const file = pending.get(post.__key);
      if (!file) continue;
      const data = await new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result).split(",")[1]);
        r.onerror = reject;
        r.readAsDataURL(file);
      });
      const ext = (file.name.match(/\.[a-z0-9]+$/i) || [".jpg"])[0].toLowerCase();
      const res = await api("/api/upload", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: profile.slug, filename: (post.title || "gorsel") + ext, data }),
      });
      if (post.image && post.image.startsWith("blob:")) URL.revokeObjectURL(post.image);
      post.image = res.path;
      if (res.poster) { post.poster = res.poster; delete post.__localPoster; }
      pending.delete(post.__key);
    }
  }

  async function save() {
    if (!profile || saving) return;
    saving = true;
    try {
      setState("kaydediliyor…");
      await uploadPending();
      const clean = JSON.parse(JSON.stringify(profile, (k, v) => (k === "__key" || k === "__localPoster" ? undefined : v)));
      const res = await api("/api/feed", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ profile: clean, version }) });
      version = res.version;
      $("feedPath").textContent = res.file;
      setState("kaydedildi ✓", "ok");
      renderAll();
    } catch (e) {
      setState("hata: " + e.message, "err");
      toast(e.message, true);
      if (/dışında değişti/.test(e.message) && confirm(e.message + "\n\nDiskteki güncel hâli yüklensin mi? (Bu sekmedeki kaydedilmemiş değişiklikler gider.)")) {
        await loadClient(profile.slug);
      }
    } finally { saving = false; }
  }

  async function uploadSingle(file, target) {
    try {
      const data = await new Promise((r, j) => { const fr = new FileReader(); fr.onload = () => r(String(fr.result).split(",")[1]); fr.onerror = j; fr.readAsDataURL(file); });
      const res = await api("/api/upload", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: profile.slug, filename: file.name, data }) });
      if (target === "avatar") { profile.avatar = res.path; $("f_avatar").value = res.path; toast("Logo güncellendi"); }
      else if (profile.posts[selected]) {
        profile.posts[selected].image = res.path;
        profile.posts[selected].poster = res.poster || "";
        delete profile.posts[selected].__localPoster;
      }
      markDirty(); renderAll();
    } catch (e) { toast(e.message, true); }
  }

  /** Videodan tarayıcıda ilk kareyi yakalar — yükleme bitmeden ızgarada görünsün diye. */
  function captureFrame(file) {
    return new Promise((resolve) => {
      let settled = false;
      const finish = (val) => { if (settled) return; settled = true; URL.revokeObjectURL(url); resolve(val); };
      const url = URL.createObjectURL(file);
      const v = document.createElement("video");
      v.muted = true; v.playsInline = true; v.preload = "metadata"; v.src = url;
      v.addEventListener("loadeddata", () => { try { v.currentTime = Math.min(0.2, (v.duration || 1) / 2); } catch { finish(""); } });
      v.addEventListener("seeked", () => {
        try {
          const c = document.createElement("canvas");
          c.width = v.videoWidth || 720; c.height = v.videoHeight || 1280;
          c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
          finish(c.toDataURL("image/jpeg", 0.72));
        } catch { finish(""); }
      });
      v.addEventListener("error", () => finish(""));
      setTimeout(() => finish(""), 5000);
    });
  }

  /* ---------- görsel ekleme ---------- */
  function addFiles(files) {
    const list = Array.from(files).filter((f) => /^image\/(jpeg|png|webp)$/.test(f.type) || /^video\/(mp4|quicktime)$/.test(f.type) || /\.(jpe?g|png|webp|mp4|mov)$/i.test(f.name));
    if (!list.length) { toast("Desteklenen dosya yok (jpg, png, webp, mp4)", true); return; }
    list.forEach((file) => {
      const base = kebab(file.name.replace(/\.[^.]+$/, "")) || "gorsel";
      let title = base, i = 2;
      while (profile.posts.some((p) => p.title === title)) title = `${base}-${i++}`;
      const key = "k" + Math.random().toString(36).slice(2);
      const post = {
        __key: key, id: title, title, image: URL.createObjectURL(file),
        type: /^video\//.test(file.type) || /\.(mp4|mov)$/i.test(file.name) ? "reels" : "post",
        extraImages: [], date: "", status: "taslak", likes: 0, comments: 0, alt: "", caption: "",
      };
      pending.set(key, file);
      profile.posts.unshift(post);
      if (post.type === "reels") {
        captureFrame(file).then((dataUrl) => {
          if (!dataUrl) return;
          const target = profile.posts.find((x) => x.__key === key);
          if (target) { target.__localPoster = dataUrl; renderAll(); }
        });
      }
    });
    selected = 0;
    markDirty(); renderAll();
    const vids = list.filter((f) => /^video\//.test(f.type) || /\.(mp4|mov)$/i.test(f.name)).length;
    toast(`${list.length} dosya eklendi${vids ? ` (${vids} video)` : ""} — kaydediliyor`);
  }

  /* ---------- müşteri yükleme ---------- */
  async function loadClient(slug) {
    const res = await api("/api/feed?slug=" + encodeURIComponent(slug));
    profile = res.profile;
    version = res.version || 0;
    profile.posts.forEach((p) => { p.__key = "k" + Math.random().toString(36).slice(2); });
    profile.stories = profile.stories || [];
    profile.stories.forEach((p) => { p.__key = "s" + Math.random().toString(36).slice(2); });
    palette = res.palette;
    if (palette && palette.vurgu) document.documentElement.style.setProperty("--accent", palette.vurgu);
    pending.clear();
    selected = -1;
    storySel = -1;
    fillProfileForm();
    $("feedPath").textContent = res.saved ? `04-Sosyal-Medya-Icerik/${slug}/instagram-feed.md` : "henüz kaydedilmedi";
    setState(res.saved ? "kaydedildi ✓" : "yeni", res.saved ? "ok" : "");
    history.replaceState(null, "", "?slug=" + slug);
    renderAll();
  }

  function switchView(next) {
    view = next;
    document.querySelectorAll(".viewtab").forEach((t) => t.classList.toggle("on", t.dataset.view === next));
    stage.style.display = next === "grid" ? "flex" : "none";
    calendarEl.style.display = next === "calendar" ? "block" : "none";
    if (next === "calendar") renderCalendar();
  }

  /* ---------- olaylar ---------- */
  function bind() {
    ["f_username", "f_profileName", "f_bio", "f_postsCount", "f_followers", "f_following", "f_avatar", "f_highlights", "f_bubble", "f_time", "f_theme", "f_ratio", "f_private", "f_verified"]
      .forEach((id) => $(id).addEventListener("input", () => { readProfileForm(); markDirty(); renderAll(); }));
    $("f_states").addEventListener("change", renderAll);

    const upd = (fn) => () => { const post = profile.posts[selected]; if (!post) return; fn(post); markDirty(); renderAll(); };
    $("p_title").addEventListener("input", upd((p) => { p.title = kebab($("p_title").value) || p.title; }));
    $("p_caption").addEventListener("input", upd((p) => { p.caption = $("p_caption").value; }));
    $("p_alt").addEventListener("input", upd((p) => { p.alt = $("p_alt").value; }));
    $("p_likes").addEventListener("input", upd((p) => { p.likes = Number($("p_likes").value) || 0; }));
    $("p_comments").addEventListener("input", upd((p) => { p.comments = Number($("p_comments").value) || 0; }));
    $("p_type").addEventListener("change", upd((p) => { p.type = $("p_type").value; }));
    $("p_status").addEventListener("change", upd((p) => { p.status = $("p_status").value; }));
    $("p_extra").addEventListener("input", upd((p) => { p.extraImages = $("p_extra").value.split(",").map((s) => s.trim()).filter(Boolean); }));
    $("p_likedby").addEventListener("input", upd((p) => { p.likedBy = $("p_likedby").value; }));
    $("p_cuser").addEventListener("input", upd((p) => { p.commentUser = $("p_cuser").value; }));
    $("p_ctext").addEventListener("input", upd((p) => { p.commentText = $("p_ctext").value; }));
    const setDate = upd((p) => {
      const d = $("p_date").value, t = $("p_time").value;
      p.date = d ? (t ? `${d} ${t}` : d) : "";
      if (d && p.status === "taslak") { p.status = "planlandi"; $("p_status").value = "planlandi"; }
    });
    $("p_date").addEventListener("change", setDate);
    $("p_time").addEventListener("change", setDate);

    $("p_delete").addEventListener("click", () => {
      const post = profile.posts[selected];
      if (!post) return;
      if (!confirm(`"${post.title}" gönderisi feed'den çıkarılsın mı?\n(Görsel dosyası 03-Assets içinde kalır.)`)) return;
      pending.delete(post.__key);
      profile.posts.splice(selected, 1);
      selected = -1; markDirty(); renderAll();
    });
    $("p_open").addEventListener("click", () => {
      if (phone.__igState) { phone.__igState.detail = selected; window.IGPreview.render(phone, profile, { mode: "studio", resolveImage, showStates: $("f_states").checked }); }
    });
    $("p_replace").addEventListener("click", () => { $("filePicker").dataset.target = "post"; $("filePicker").click(); });
    $("avatarPick").addEventListener("click", () => { $("filePicker").dataset.target = "avatar"; $("filePicker").click(); });

    $("addSlot").addEventListener("click", () => {
      let title = "bos-slot", i = 2;
      while (profile.posts.some((p) => p.title === title)) title = `bos-slot-${i++}`;
      profile.posts.unshift({ __key: "k" + Math.random().toString(36).slice(2), id: title, title, image: "", type: "post", extraImages: [], date: "", status: "taslak", likes: 0, comments: 0, alt: "", caption: "" });
      selected = 0; markDirty(); renderAll();
    });

    const picker = $("filePicker");
    picker.addEventListener("change", async () => {
      const files = Array.from(picker.files || []);
      const target = picker.dataset.target;
      picker.value = ""; picker.dataset.target = "";
      if (!files.length) return;
      if (target === "avatar" || target === "post") {
        await uploadSingle(files[0], target);
        return;
      }
      if (target === "story") { addStoryFiles(files); return; }
      addFiles(files);
    });
    $("dropzone").addEventListener("click", () => { $("filePicker").dataset.target = ""; $("filePicker").click(); });
    $("storyDrop").addEventListener("click", () => { $("filePicker").dataset.target = "story"; $("filePicker").click(); });
    $("storyPlay").addEventListener("click", () => playStories(0));
    $("s_play").addEventListener("click", () => playStories(Math.max(0, storySel)));

    const ups = (fn) => () => { const st = profile.stories[storySel]; if (!st) return; fn(st); markDirty(); renderAll(); };
    $("s_title").addEventListener("input", ups((st) => { st.title = kebab($("s_title").value) || st.title; }));
    $("s_text").addEventListener("input", ups((st) => { st.text = $("s_text").value; }));
    $("s_duration").addEventListener("input", ups((st) => { st.duration = Math.min(30, Math.max(1, Number($("s_duration").value) || 5)); }));
    $("s_link").addEventListener("input", ups((st) => { st.link = $("s_link").value; }));
    $("s_status").addEventListener("change", ups((st) => { st.status = $("s_status").value; }));
    $("s_date").addEventListener("change", ups((st) => { st.date = $("s_date").value; }));
    $("s_delete").addEventListener("click", () => {
      const st = profile.stories[storySel];
      if (!st) return;
      if (!confirm(`"${st.title}" hikayesi kaldırılsın mı?\n(Medya dosyası 03-Assets içinde kalır.)`)) return;
      pending.delete(st.__key);
      profile.stories.splice(storySel, 1);
      storySel = -1;
      markDirty(); renderAll();
    });

    const sd = $("storyDrop");
    sd.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("Files")) { e.preventDefault(); e.stopPropagation(); sd.classList.add("hot"); } });
    sd.addEventListener("dragleave", () => sd.classList.remove("hot"));
    sd.addEventListener("drop", (e) => {
      if (!e.dataTransfer.files.length) return;
      e.preventDefault(); e.stopPropagation(); sd.classList.remove("hot");
      addStoryFiles(e.dataTransfer.files);
    });

    const dropTargets = [[$("dropzone"), "hot"], [stage, "hot"]];
    dropTargets.forEach(([el, cls]) => {
      el.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("Files")) { e.preventDefault(); el.classList.add(cls); } });
      el.addEventListener("dragleave", () => el.classList.remove(cls));
      el.addEventListener("drop", (e) => {
        if (!e.dataTransfer.files.length) return;
        e.preventDefault(); el.classList.remove(cls); addFiles(e.dataTransfer.files);
      });
    });
    window.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("Files")) e.preventDefault(); });
    window.addEventListener("drop", (e) => { if (e.dataTransfer.files.length) e.preventDefault(); });

    document.querySelectorAll(".viewtab").forEach((t) => t.addEventListener("click", () => switchView(t.dataset.view)));
    $("clientSelect").addEventListener("change", (e) => loadClient(e.target.value));

    $("exportBtn").addEventListener("click", async () => {
      try {
        setState("derleniyor…");
        clearTimeout(saveTimer); await save();
        const res = await api("/api/export", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: profile.slug }) });
        const mb = (res.size / 1048576).toFixed(1);
        toast(`${res.file} (${mb} MB) hazır — Finder'da açılıyor`);
        if (res.missing && res.missing.length) toast("Eksik görsel: " + res.missing.join(", "), true);
        await api("/api/reveal", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ file: res.file }) });
        setState("kaydedildi ✓", "ok");
      } catch (e) { toast(e.message, true); setState("hata", "err"); }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") { e.preventDefault(); clearTimeout(saveTimer); save(); }
    });
    window.addEventListener("beforeunload", (e) => {
      if ($("saveState").classList.contains("dirty")) { e.preventDefault(); e.returnValue = ""; }
    });
  }

  (async function init() {
    try { await start(); }
    catch (e) {
      setState("yüklenemedi", "err");
      toast("Yüklenemedi: " + e.message + " — sunucu çalışıyor mu? (node scripts/instagram-studio.js)", true);
      const box = document.querySelector(".stage");
      if (box) box.innerHTML = `<div style="padding:40px;text-align:center;color:var(--dim);line-height:1.7">
        Stüdyo yüklenemedi.<br/><b style="color:var(--fg)">${String(e.message)}</b><br/>
        <button class="btn" style="margin-top:14px" onclick="location.reload()">Yeniden dene</button></div>`;
    }
  })();

  async function start() {
    bind();
    const { clients, startSlug } = await api("/api/clients");
    const sel = $("clientSelect");
    sel.innerHTML = clients.map((c) => `<option value="${c.slug}">${c.client}${c.hasFeed ? " ✓" : ""}</option>`).join("");
    const urlSlug = new URLSearchParams(location.search).get("slug");
    const slug = urlSlug || startSlug || (clients[0] && clients[0].slug);
    if (!slug) { toast("00-Musteriler altında marka brief'i olan müşteri yok", true); return; }
    sel.value = slug;
    await loadClient(slug);
  }
})();
