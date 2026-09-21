/* icons.js — Instagram arayüzündeki inline SVG ikonlar. Dış kaynak yok. */
(function (root) {
  const s = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;

  const ICONS = {
    plus: s('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),
    lock: s('<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    chevronDown: s('<polyline points="6 9 12 15 18 9"/>'),
    menu2: s('<line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="15" x2="18" y2="15"/>'),
    menu: s('<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>'),
    threads:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16.2 11.4c-.2-.1-.4-.2-.6-.3-.1-2.1-1.2-3.3-3.1-3.3-1.1 0-2.1.5-2.7 1.4l1.2.8c.4-.6.9-.8 1.5-.8 1 0 1.6.6 1.7 1.7h-.6c-2.3 0-3.9 1.1-3.9 2.9 0 1.5 1.2 2.5 2.8 2.5 1.3 0 2.2-.6 2.7-1.5.3.6.5 1.2.5 1.2M12 21.5c-5.3 0-8.5-3.4-8.5-9.5S6.7 2.5 12 2.5s8.5 3.4 8.5 9.5c0 3.2-.9 5.6-2.5 7.2"/><path d="M15.9 13c0 1.2-.9 2-2 2-.7 0-1.3-.4-1.3-1 0-.8.8-1.3 2.1-1.3.4 0 .8 0 1.2.1z"/></svg>',
    personAdd: s('<path d="M15 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20"/><circle cx="8.5" cy="7" r="3.5"/><line x1="18" y1="8" x2="18" y2="14"/><line x1="15" y1="11" x2="21" y2="11"/>'),
    grid: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="2" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/></svg>',
    reels: s('<rect x="3" y="3" width="18" height="18" rx="4.5"/><path d="M3.5 8.5h17"/><path d="M8.5 3.3 11.5 8.5"/><path d="M14 3.3 17 8.5"/><path d="M10.4 12.3v4.6l4-2.3z" fill="currentColor"/>'),
    repost: s('<path d="M4 9V7.5A2.5 2.5 0 0 1 6.5 5H17"/><polyline points="14 2 17 5 14 8"/><path d="M20 15v1.5a2.5 2.5 0 0 1-2.5 2.5H7"/><polyline points="10 22 7 19 10 16"/>'),
    tagged: s('<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="2.6"/><path d="M6.5 19c.9-2.4 2.9-3.6 5.5-3.6s4.6 1.2 5.5 3.6"/>'),
    home: s('<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/>'),
    send: s('<path d="M21.5 3.5 2.8 10.2l7.4 2.6 2.6 7.4z"/><path d="M21.5 3.5 10.2 12.8"/>'),
    search: s('<circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21"/>'),
    heart: s('<path d="M12 20.5s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7.5 2.9c0 5-7.5 9.6-7.5 9.6z"/>'),
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7.5 2.9c0 5-7.5 9.6-7.5 9.6z"/></svg>',
    comment: s('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.4-.6L3 21l1.8-4.8A8.2 8.2 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4z"/>'),
    bookmark: s('<path d="M6 3.5h12v17l-6-4.2-6 4.2z"/>'),
    carousel: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 2.5h11A2.5 2.5 0 0 1 22 5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 16V5a2.5 2.5 0 0 1 2.5-2.5z" opacity=".95"/><path d="M4 6.6V19a2.5 2.5 0 0 0 2.5 2.5H18v1.5H6A4 4 0 0 1 2 19V6.6z" opacity=".95"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l12-7.5z"/></svg>',
    reelsFilled: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z" opacity="0"/><path d="M4.2 3h15.6A1.2 1.2 0 0 1 21 4.2v15.6a1.2 1.2 0 0 1-1.2 1.2H4.2A1.2 1.2 0 0 1 3 19.8V4.2A1.2 1.2 0 0 1 4.2 3zm5.9 6.3v5.4l4.6-2.7z" /></svg>',
    pin: s('<path d="M14.5 3.5 20.5 9.5"/><path d="M17.5 6.5 12 12l-1 4-4-4-3.5 6.5L10 15"/>'),
    verified: '<svg viewBox="0 0 24 24" fill="#0095f6"><path d="M12 1.8 14.3 4l3-.4 1.1 2.9 2.9 1.1-.4 3L23 12l-2.1 2.4.4 3-2.9 1.1-1.1 2.9-3-.4L12 22.2 9.6 20l-3 .4-1.1-2.9-2.9-1.1.4-3L1 12l2-2.4-.4-3 2.9-1.1L6.6 2.6l3 .4z"/><polyline points="8 12.2 10.8 15 16 9.4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    image: s('<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M4 17.5 9.5 12l3.5 3.5L16 13l4 4"/>'),
    battery: '<svg viewBox="0 0 26 13" fill="none"><rect x="1" y="1" width="21" height="11" rx="3.2" stroke="currentColor" stroke-opacity=".5" stroke-width="1.1"/><rect x="2.6" y="2.6" width="5.5" height="7.8" rx="2" fill="currentColor"/><path d="M23.6 4.6v3.8c.9-.3 1.4-.9 1.4-1.9s-.5-1.6-1.4-1.9z" fill="currentColor" fill-opacity=".5"/></svg>',
    signal: '<svg viewBox="0 0 20 13" fill="currentColor"><rect x="0" y="9" width="3.2" height="4" rx="1"/><rect x="4.6" y="6.5" width="3.2" height="6.5" rx="1"/><rect x="9.2" y="3.5" width="3.2" height="9.5" rx="1"/><rect x="13.8" y="0.5" width="3.2" height="12.5" rx="1"/></svg>',
    close: s('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'),
    back: s('<polyline points="15 5 8 12 15 19"/>'),
    calendar: s('<rect x="3" y="5" width="18" height="16" rx="2.5"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>'),
    trash: s('<path d="M4 7h16"/><path d="M9 7V4.5h6V7"/><path d="M6 7l1 13h10l1-13"/>'),
    drag: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>',
  };

  root.IGIcons = ICONS;
  root.icon = (name, cls = "") => `<span class="ig-ico ${cls}">${ICONS[name] || ""}</span>`;
})(typeof window !== "undefined" ? window : globalThis);
