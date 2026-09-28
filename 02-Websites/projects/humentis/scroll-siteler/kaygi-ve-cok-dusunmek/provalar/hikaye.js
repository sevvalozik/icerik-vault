/*
  Provalar — sahne verisi
  Kaynak: 02-Websites/projects/humentis/scroll-hikayeler/kaygi-ve-cok-dusunmek/provalar.md → "Kodlama için"
  Yüzdeler hikâye bölümünün toplam scroll'una göredir (0–100).
*/
window.HIKAYE = {
  uzman: { ad: "Uzman Adı", unvan: "Uzman Psikolog" },
  uzunlukEkran: 5,                                  // kısa kesim (şartname §0)
  kok: "../../../../../../",                       // vault köküne göreli yol
  gorselKlasoru: "03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/provalar/",
  logo: "03-Assets/logos/humentis/humentis-lockup-horizontal.svg",
  muzik: {
    gece: "03-Assets/audio/humentis/bulunma-muzik.mp3",
    sabah: "03-Assets/audio/humentis/bulunma-sabah-1.mp3",
    // [başlangıç %, bitiş %, ses 0–1, hangi parça]
    seviye: [[0, 8, 0, "gece"], [8, 34, .6, "gece"], [34, 48, 1, "gece"], [48, 52, 0, "gece"], [52, 100, .8, "sabah"]],
  },

  // Arka planlar: hangi aralıkta hangi görsel (ton: yer tutucunun ışık rengi)
  // video: aynı adla .mp4 varsa kullanılır. "loop" = sürekli döner, "scrub" = scroll'a bağlı ilerler
  arkaPlan: [
    { gorsel: "oda-gece",      a: 0,  b: 48, ton: "gece",  video: "loop" },
    { gorsel: "oda-sabah",     a: 48, b: 64, ton: "safak", video: "scrub" },
    { gorsel: "koridor",       a: 64, b: 78, ton: "gun",   video: "scrub" },
    { gorsel: "koridor-duvar", a: 78, b: 97, ton: "gun",   video: "loop" },
  ],

  // Gerçek Nil (yer tutucu figür; görsel gelince arka plan görselinin içinde olacak)
  gercekNil: { x: 50, y: 70, olcek: 0.9, oturuyor: true },

  // Senaryo başlığı ve saat
  baslik: [
    { a: 0,  b: 34, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "23:14" },
    { a: 34, b: 39, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "00:40" },
    { a: 39, b: 44, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "01:55" },
    { a: 44, b: 48, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "03:10" },
    { a: 48, b: 64, mekan: "İÇ MEKAN — NİL'İN ODASI — ŞAFAK", saat: "06:48" },
    { a: 64, b: 100, mekan: "İÇ MEKAN — OFİS KORİDORU — GÜNDÜZ", saat: "09:02" },
  ],

  // Film yazıları. tip: alt (altyazı), orta, prova (hayalet etiketi), replik
  metinler: [
    { a: 1,  b: 11, tip: "alt",    html: "Yarın 09:00. Beş dakikalık bir görüşme." },
    // 12–22: typing (aşağıda ayrı)
    { a: 23, b: 33, tip: "prova",  html: "Prova 1: Sesi titriyor." },
    { a: 38, b: 47, tip: "sayac",  html: "Prova 47." },
    { a: 69, b: 73.5, tip: "replik", html: "“Bir hafta daha isteyebilir miyim?”" },
    { a: 73, b: 77.5, tip: "replik", html: "“Tamam.”" },
    { a: 79, b: 90, tip: "alt",    html: "Dün gece 47 kez yaşadığı konuşma.<br>Gerçekte 40 saniye sürdü." },
  ],

  // Yaz → sil → yeniden yaz
  typing: { a: 12, b: 22, varyantlar: ["“Selin Hanım, bir şey konuşabilir miyiz?”", "“Müsaitseniz…”"] },

  // Hayaletler: x,y (%), ölçek, poz (nil-poz-N), ne zaman beliriyor (%)
  hayaletler: [
    { x: 16, y: 62, s: 1.05, poz: 1, p: 23 },
    { x: 80, y: 60, s: 1.00, poz: 2, p: 26 },
    { x: 33, y: 55, s: 0.85, poz: 3, p: 28.5 },
    { x: 66, y: 54, s: 0.82, poz: 4, p: 31 },
    { x: 90, y: 66, s: 1.12, poz: 5, p: 33 },
    { x: 6,  y: 58, s: 0.95, poz: 6, p: 35 },
    { x: 24, y: 70, s: 1.15, poz: 2, p: 36.5 },
    { x: 43, y: 50, s: 0.70, poz: 5, p: 38 },
    { x: 58, y: 49, s: 0.68, poz: 1, p: 39.5 },
    { x: 73, y: 72, s: 1.18, poz: 3, p: 41 },
    { x: 11, y: 47, s: 0.66, poz: 4, p: 42.5 },
    { x: 86, y: 48, s: 0.70, poz: 6, p: 44 },
    { x: 37, y: 73, s: 1.20, poz: 1, p: 45 },
    { x: 62, y: 75, s: 1.22, poz: 2, p: 46 },
  ],
  geriCekilme: { a: 34, b: 48, olcek: 0.9 },   // kamera geri çekilir
  temizleme: { a: 52, b: 64 },                  // sabah ışığı soldan sağa hayaletleri siler
  gecis: { a: 92, b: 100 },                     // hayalet + gerçek Nil birleşir, krem zemine erir

  // Site bölümü (§5)
  site: {
    baslik: "Kaygı, hiç yaşanmamış şeylerin provasıdır",
    ilk: "Zihin, belirsizliği sevmez. Yarın ne olacağını bilmediğinde, bütün ihtimalleri önceden yaşayarak kendini hazırlamaya çalışır. Sorun şu ki, bu provalar çoğu zaman gerçekte hiç olmayacak sahneler için yapılır ve bedeli uykuyla, dikkatle, huzurla ödenir. Kaygıyla çalışmak, provaları susturmak değil; onların sizin yerinize karar vermesini durdurmaktır.",
    bolumler: [
      "Neden hep en kötü ihtimali düşünüyorum?",
      "Hazırlıklı olmak ile prova yapmak arasındaki fark",
      "Kaygıyla birlikte nasıl çalışıyoruz?",
    ],
    cta: "Ön görüşme için randevu al",
    ikincil: "Blog: “Gece yarısı düşünceleri neden daha korkutucu?”",
  },
};
