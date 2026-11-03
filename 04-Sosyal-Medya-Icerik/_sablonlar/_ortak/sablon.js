/*
 * _sablonlar/_ortak/sablon.js — bütün sosyal medya şablonlarının ortak yardımcıları.
 * Şablon: <script id="veri" type="application/json">…</script> + <div id="deck"></div> + bu dosya
 *         + kendi TIPLER sözlüğü → Sablon.kur(TIPLER).
 * Metin işaretleri (md):  **kalın**   ==vurgu==   __alt çizgi__   satır sonu = \n
 * Taşma: class="fit" olan kutularda yazı, kutuya sığana kadar küçültülür (en az %45).
 *   Flex kutularda içerik TEK bir <div> içinde olmalı (yoksa her metin parçası ayrı flex öğesi olur).
 * ?s=N → yalnızca N. slayt (render-karusel.sh böyle çeker).
 */
(function () {
  const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const md = (s) => esc(s)
    .replace(/\*\*([\s\S]+?)\*\*/g, "<b>$1</b>")          // işaret satır sonunu aşabilir
    .replace(/==([\s\S]+?)==/g, '<span class="hl">$1</span>')
    .replace(/__([\s\S]+?)__/g, '<span class="ul">$1</span>')
    .replace(/\n/g, "<br>");

  // 24×24 çizgi ikonlar (stroke = currentColor). Ad bulunamazsa "nokta".
  const P = {
    nokta: '<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>',
    onay: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    carpi: '<path d="M7 7l10 10M17 7L7 17"/>',
    soru: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.6 2.6 0 1 1 3.6 2.4c-.8.4-1.2 1-1.2 1.8v.6"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
    unlem: '<path d="M12 4l9 16H3z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.3" r=".6" fill="currentColor"/>',
    konusma: '<path d="M4 5h16v10H9l-5 4z"/>',
    kalp: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    ampul: '<path d="M9.5 17.5h5M10.5 20.5h3M12 3.5a5.5 5.5 0 0 0-3.3 9.9c.6.5.9 1.2.9 2V16h4.8v-.6c0-.8.3-1.5.9-2A5.5 5.5 0 0 0 12 3.5z"/>',
    kalkan: '<path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6z"/>',
    filiz: '<path d="M12 21v-9"/><path d="M12 13c-4 0-6-2.5-6-6 4 0 6 2.5 6 6zM12 11c0-3.5 2-6 6-6 0 3.5-2 6-6 6z"/>',
    saat: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    kisiler: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.3c3 .2 5.5 2.6 5.5 5.7"/>',
    kisi: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    ev: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    kulak: '<path d="M7.5 9a4.5 4.5 0 1 1 9 0c0 2.6-2 3.4-2.8 4.8-.6 1.1-.6 2.2-1.2 3.2-.7 1.2-2 1.8-3.2 1.2"/><path d="M10 9.4a2 2 0 1 1 3.4 1.4"/>',
    beyin: '<path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 .5V5.5a2.5 2.5 0 0 0-3-1z"/><path d="M15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 .5"/>',
    gunes: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
    dalga: '<path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/>',
    takvim: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    telefon: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
    konum: '<path d="M12 21s7-7.6 7-12.5a7 7 0 0 0-14 0C5 13.4 12 21 12 21z"/><circle cx="12" cy="8.5" r="2.5"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    ok: '<path d="M5 12h13M13 6l6 6-6 6"/>',
    // araç / ekspertiz
    arac: '<path d="M3 16v-3.5l2-4.5c.4-.9 1.2-1.5 2.2-1.5h9.6c1 0 1.8.6 2.2 1.5l2 4.5V16"/><path d="M3 13h18"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
    rapor: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 15.5h7M9 9h3"/>',
    anahtar: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>',
    lup: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>',
    olcer: '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M12 15l4-5"/><circle cx="12" cy="15" r="1.3" fill="currentColor"/>',
    fren: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M5.5 6.5a9 9 0 0 1 4-2.6"/>',
    motor: '<path d="M4 10h3l2-2h5l2 2h2v3h2v-2h1v6h-1v-2h-2v3h-3l-2 2H9l-2-2H4z"/>',
    boya: '<path d="M4 4h12v5H4z"/><path d="M16 6.5h3v5h-8v3"/><rect x="9.5" y="14.5" width="3" height="6" rx="1"/>',
    mor_isik: '<path d="M9 3h6l-1 6h-4z"/><path d="M10 9l-4 12M14 9l4 12M12 9v12" stroke-dasharray="1.5 2.2"/>',
    aku: '<rect x="3" y="7" width="18" height="12" rx="1.5"/><path d="M7 7V5h3v2M14 7V5h3v2M7 13h3M15.5 11.5v3M14 13h3"/>',
    teker: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5"/>',
    yag: '<path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10z"/>',
    kart: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14.5h4"/>',
  };
  const ikon = (ad, cls = "") => `<svg class="ikon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[ad] || P.nokta}</svg>`;

  function veri() {
    try { return JSON.parse(document.getElementById("veri").textContent); }
    catch (e) { console.error("veri bloğu okunamadı", e); return { slaytlar: [] }; }
  }

  /** class="fit" kutuları: yazı taşmayana kadar font-size küçült. */
  function fit(root) {
    root.querySelectorAll(".fit").forEach((el) => {
      const base = parseFloat(getComputedStyle(el).fontSize);
      let size = base, guard = 0;
      // Dar satır aralıklı başlıklarda (line-height < 1) harfler satır kutusundan taşar; küçük pay bırak.
      // Flex kutuda (başlığı alta/üste yaslamak için) taşma görünmez yöne olur; içteki tek bloğu ölç.
      const inner = /flex/.test(getComputedStyle(el).display) && el.children.length === 1 ? el.firstElementChild : null;
      const over = () => {
        const h = inner ? inner.scrollHeight : el.scrollHeight;
        const w = Math.max(el.scrollWidth, inner ? inner.scrollWidth : 0);
        return h > el.clientHeight + Math.max(2, size * 0.22) || w > el.clientWidth + 2;
      };
      while (over() && size > base * 0.45 && guard++ < 80) { size *= 0.96; el.style.fontSize = size + "px"; }
      if (over()) el.dataset.tasma = "1";
    });
  }

  function renkleri(M) {
    const r = (M && M.renkler) || {};
    for (const [k, v] of Object.entries(r)) document.documentElement.style.setProperty(`--${k}`, v);
  }

  function kur(TIPLER) {
    const V = veri();
    const M = V.marka || {};
    renkleri(M);
    const deck = document.getElementById("deck");
    (V.slaytlar || []).forEach((s, i) => {
      const sec = document.createElement("section");
      const fn = TIPLER[s.tip] || TIPLER.varsayilan || Object.values(TIPLER)[0];
      sec.className = `slide tip-${s.tip || "varsayilan"} ${s.mod ? "mod-" + s.mod : ""}`;
      sec.id = "s" + (i + 1);
      sec.innerHTML = fn(s, { i, n: V.slaytlar.length, V, M, md, esc, ikon });
      deck.appendChild(sec);
    });
    const q = new URLSearchParams(location.search).get("s");
    if (q) { document.body.classList.add("solo"); const on = document.getElementById("s" + q); if (on) on.classList.add("on"); }
    const bitti = () => {
      fit(document); document.body.dataset.ready = "1"; if (window.sonra) window.sonra();
      if (new URLSearchParams(location.search).has("debug")) {
        const pre = document.createElement("pre"); pre.id = "debug";
        pre.textContent = JSON.stringify([...document.querySelectorAll(".slide.on .fit, body:not(.solo) .fit")].map((el) => ({ c: el.className, fs: el.style.fontSize, ch: el.clientHeight, sh: el.scrollHeight, cw: el.clientWidth, sw: el.scrollWidth, t: el.textContent.slice(0, 24) })));
        document.body.appendChild(pre);
      }
    };
    // Yazı tiplerinin GERÇEKTEN yüklenmesini bekle: fonts.ready, henüz istenmemiş fontlar için hemen döner
    // ve ölçüm yedek fontla yapılırsa (Bebas yerine Arial gibi) başlıklar gereksiz küçülür.
    void document.body.offsetHeight;
    const yukle = document.fonts ? Promise.all([...document.fonts].map((f) => f.load().catch(() => null))).then(() => document.fonts.ready) : Promise.resolve();
    Promise.race([yukle, new Promise((r) => setTimeout(r, 6000))]).then(() => requestAnimationFrame(() => requestAnimationFrame(bitti)));
    return V;
  }

  window.Sablon = { veri, md, esc, ikon, fit, kur, IKONLAR: Object.keys(P) };
})();
