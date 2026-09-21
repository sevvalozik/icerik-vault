/* calendar.js — içerik takvimi görünümü (stüdyo + export ortak). */
(function (root) {
  const { parseDate, AYLAR, trNum } = root.IGPreview;
  const esc = root.IGPreview.esc;
  const GUNLER = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const two = (n) => String(n).padStart(2, "0");
  const dayKey = (d) => `${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())}`;

  function render(container, profile, options) {
    const o = Object.assign({ resolveImage: (x) => x, editable: false, onChange: null, onSelect: null, month: null }, options || {});
    const posts = profile.posts || [];
    const state = container.__calState || (container.__calState = { month: null });
    if (o.month) state.month = o.month;
    if (!state.month) {
      const first = posts.map((p) => parseDate(p.date)).filter(Boolean).sort((a, b) => a - b)[0] || new Date();
      state.month = new Date(first.getFullYear(), first.getMonth(), 1);
    }
    const cur = state.month;
    const year = cur.getFullYear(), month = cur.getMonth();

    const byDay = {};
    const undated = [];
    posts.forEach((post, index) => {
      const d = parseDate(post.date);
      if (!d) { undated.push({ post, index }); return; }
      (byDay[dayKey(d)] = byDay[dayKey(d)] || []).push({ post, index, d });
    });

    const firstOfMonth = new Date(year, month, 1);
    const offset = (firstOfMonth.getDay() + 6) % 7; // pazartesi = 0
    const start = new Date(year, month, 1 - offset);
    const cells = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const key = dayKey(d);
      const items = byDay[key] || [];
      const other = d.getMonth() !== month;
      const today = dayKey(new Date()) === key;
      cells.push(`<div class="cal-cell${other ? " cal-other" : ""}${today ? " cal-today" : ""}" data-date="${key}">
        <div class="cal-daynum">${d.getDate()}</div>
        <div class="cal-items">${items.sort((a, b) => a.d - b.d).map(({ post, index }) => {
          const src = post.image ? o.resolveImage(post.image) : "";
          const time = (post.date.match(/(\d{2}):(\d{2})/) || [,])[0] || "";
          return `<div class="cal-item cal-${esc(post.status || "taslak")}" data-index="${index}"${o.editable ? ' draggable="true"' : ""} title="${esc(post.title || "")}">
            ${src ? `<img src="${esc(src)}" alt="" loading="lazy"/>` : `<span class="cal-noimg"></span>`}
            <span class="cal-item-text"><b>${esc(time)}</b> ${esc(post.title || "gönderi")}</span>
          </div>`;
        }).join("")}</div>
      </div>`);
    }

    container.innerHTML = `<div class="cal-wrap">
      <div class="cal-head">
        <button class="cal-nav" data-step="-1">‹</button>
        <div class="cal-title">${AYLAR[month]} ${year}</div>
        <button class="cal-nav" data-step="1">›</button>
        <div class="cal-legend">
          <span><i class="cal-dot cal-taslak"></i>taslak</span>
          <span><i class="cal-dot cal-planlandi"></i>planlandı</span>
          <span><i class="cal-dot cal-yayinlandi"></i>yayınlandı</span>
        </div>
      </div>
      <div class="cal-grid-head">${GUNLER.map((g) => `<div>${g}</div>`).join("")}</div>
      <div class="cal-grid">${cells.join("")}</div>
      ${undated.length ? `<div class="cal-undated"><div class="cal-undated-title">Tarihsiz (${trNum(undated.length)})${o.editable ? " — bir güne sürükle" : ""}</div>
        <div class="cal-undated-list">${undated.map(({ post, index }) => {
          const src = post.image ? o.resolveImage(post.image) : "";
          return `<div class="cal-item cal-${esc(post.status || "taslak")}" data-index="${index}"${o.editable ? ' draggable="true"' : ""}>
            ${src ? `<img src="${esc(src)}" alt="" loading="lazy"/>` : `<span class="cal-noimg"></span>`}
            <span class="cal-item-text">${esc(post.title || "gönderi")}</span></div>`;
        }).join("")}</div></div>` : ""}
    </div>`;

    container.querySelectorAll(".cal-nav").forEach((b) => b.addEventListener("click", () => {
      state.month = new Date(year, month + Number(b.dataset.step), 1);
      render(container, profile, options);
    }));

    container.querySelectorAll(".cal-item").forEach((el) => {
      el.addEventListener("click", () => { if (o.onSelect) o.onSelect(+el.dataset.index); });
      if (!o.editable) return;
      el.addEventListener("dragstart", (e) => { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/cal-index", el.dataset.index); el.classList.add("cal-dragging"); });
      el.addEventListener("dragend", () => el.classList.remove("cal-dragging"));
    });

    if (o.editable) {
      container.querySelectorAll(".cal-cell").forEach((cell) => {
        cell.addEventListener("dragover", (e) => { if (e.dataTransfer.types.includes("text/cal-index")) { e.preventDefault(); cell.classList.add("cal-drop"); } });
        cell.addEventListener("dragleave", () => cell.classList.remove("cal-drop"));
        cell.addEventListener("drop", (e) => {
          e.preventDefault(); cell.classList.remove("cal-drop");
          const index = +e.dataTransfer.getData("text/cal-index");
          const post = posts[index];
          if (!post) return;
          const time = (post.date.match(/\d{2}:\d{2}/) || ["10:00"])[0];
          post.date = `${cell.dataset.date} ${time}`;
          if (post.status === "taslak") post.status = "planlandi";
          if (o.onChange) o.onChange(post, index);
          render(container, profile, options);
        });
      });
    }
    return container;
  }

  root.IGCalendar = { render };
})(typeof window !== "undefined" ? window : globalThis);
