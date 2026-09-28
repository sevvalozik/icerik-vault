/*
  Provalar — sahne verisi
  Kaynak: 02-Websites/projects/humentis/scroll-hikayeler/kaygi-ve-cok-dusunmek/provalar.md → "Kodlama için"
  Yüzdeler hikâye bölümünün toplam scroll'una göredir (0–100).
*/
window.HIKAYE = {
  uzman: { ad: "Uzman Adı", unvan: "Uzman Psikolog" },
  uzunlukEkran: 10,
  kok: "../../../../../../",                       // vault köküne göreli yol
  gorselKlasoru: "03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/provalar/",
  logo: "03-Assets/logos/humentis/humentis-lockup-horizontal.svg",
  muzik: {
    gece: "03-Assets/audio/humentis/bulunma-muzik.mp3",
    sabah: "03-Assets/audio/humentis/bulunma-sabah-1.mp3",
    // [başlangıç %, bitiş %, ses 0–1, hangi parça]
    seviye: [[0, 14, 0, "gece"], [14, 46, .6, "gece"], [46, 58, 1, "gece"], [58, 64, 0, "gece"], [64, 100, .8, "sabah"]],
  },

  // Arka planlar: hangi aralıkta hangi görsel (ton: yer tutucunun ışık rengi)
  // video: aynı adla .mp4 varsa kullanılır. "loop" = sürekli döner, "scrub" = scroll'a bağlı ilerler
  arkaPlan: [
    { gorsel: "oda-gece",      a: 0,  b: 58, ton: "gece",  video: "loop" },
    { gorsel: "oda-sabah",     a: 58, b: 74, ton: "safak", video: "scrub" },
    { gorsel: "koridor",       a: 74, b: 88, ton: "gun",   video: "scrub" },
    { gorsel: "koridor-duvar", a: 88, b: 98, ton: "gun",   video: "loop" },
  ],

  // Gerçek Nil (yer tutucu figür; görsel gelince arka plan görselinin içinde olacak)
  gercekNil: { x: 50, y: 70, olcek: 0.9, oturuyor: true },

  // Senaryo başlığı ve saat
  baslik: [
    { a: 0,  b: 46, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "23:14" },
    { a: 46, b: 50, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "00:40" },
    { a: 50, b: 54, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "01:55" },
    { a: 54, b: 58, mekan: "İÇ MEKAN — NİL'İN ODASI — GECE", saat: "03:10" },
    { a: 58, b: 74, mekan: "İÇ MEKAN — NİL'İN ODASI — ŞAFAK", saat: "06:48" },
    { a: 74, b: 100, mekan: "İÇ MEKAN — OFİS KORİDORU — GÜNDÜZ", saat: "09:02" },
  ],

  // Film yazıları. tip: alt (altyazı), orta, prova (hayalet etiketi), replik
  metinler: [
    { a: 0.5, b: 6,  tip: "orta",  html: "Salı. 23:14." },
    { a: 6.5, b: 14, tip: "alt",   html: "Yarın 09:00. Beş dakikalık bir görüşme." },
    // 14–22: typing (aşağıda ayrı)
    { a: 22, b: 34, tip: "prova", html: "Prova 1: Sesi titriyor." },
    { a: 34, b: 37, tip: "prova", html: "Prova 2: Hiçbir şey demiyor. Sessizlik daha kötü." },
    { a: 37, b: 40, tip: "prova", html: "Prova 3: Toplantıya başka biri giriyor." },
    { a: 40, b: 43, tip: "prova", html: "Prova 4: Ne diyeceğini unutuyor." },
    { a: 43, b: 46, tip: "prova", html: "Prova 5: Projeden alınıyor." },
    { a: 50, b: 58, tip: "sayac", html: "Prova 47." },
    { a: 65, b: 73, tip: "orta",  html: "Sonra sabah oldu." },
    { a: 82.5, b: 85.5, tip: "replik", html: "“Bir hafta daha isteyebilir miyim?”" },
    { a: 85,   b: 88,   tip: "replik", html: "“Tamam, takvimi güncelle yeter.”" },
    { a: 88.5, b: 94,   tip: "alt",   html: "Dün gece 47 kez yaşadığı konuşma.<br>Gerçekte 40 saniye sürdü." },
    { a: 94.5, b: 97.5, tip: "orta",  html: "Belki mesele Selin Hanım değil." },
  ],

  // Yaz → sil → yeniden yaz
  typing: { a: 14, b: 22, varyantlar: ["“Selin Hanım, bir şey konuşabilir miyiz?”", "“Kısaca bir şey soracaktım…”", "“Müsaitseniz…”"] },

  // Hayaletler: x,y (%), ölçek, poz (nil-poz-N), ne zaman beliriyor (%)
  hayaletler: [
    { x: 16, y: 62, s: 1.05, poz: 1, p: 23 },
    { x: 80, y: 60, s: 1.00, poz: 2, p: 34.5 },
    { x: 33, y: 55, s: 0.85, poz: 3, p: 37.5 },
    { x: 66, y: 54, s: 0.82, poz: 4, p: 40.5 },
    { x: 90, y: 66, s: 1.12, poz: 5, p: 43.5 },
    { x: 6,  y: 58, s: 0.95, poz: 6, p: 47 },
    { x: 24, y: 70, s: 1.15, poz: 2, p: 48.5 },
    { x: 43, y: 50, s: 0.70, poz: 5, p: 50 },
    { x: 58, y: 49, s: 0.68, poz: 1, p: 51 },
    { x: 73, y: 72, s: 1.18, poz: 3, p: 52 },
    { x: 11, y: 47, s: 0.66, poz: 4, p: 53 },
    { x: 86, y: 48, s: 0.70, poz: 6, p: 54 },
    { x: 37, y: 73, s: 1.20, poz: 1, p: 55 },
    { x: 62, y: 75, s: 1.22, poz: 2, p: 56 },
  ],
  geriCekilme: { a: 46, b: 58, olcek: 0.9 },   // kamera geri çekilir
  temizleme: { a: 64, b: 74 },                  // sabah ışığı soldan sağa hayaletleri siler
  gecis: { a: 94, b: 100 },                     // hayalet + gerçek Nil birleşir, krem zemine erir

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
