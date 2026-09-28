/*
  BULUNMA — uzman yapılandırması (GENEL ŞABLON)
  ------------------------------------------------
  Kişiselleştirmek için: bu dosyayı kopyala → uzmanlar/<uzman-slug>.js
  Sonra filmi şöyle aç:  film.html?uzman=<uzman-slug>
  Sadece aşağıdaki metinleri değiştirmen yeterli; film yapısı otomatik kurulur.

  Görseller: her kare için  <assetBase><kod>.jpg | .png | .webp  (veya .mp4 klip)
  aranır. Uzmana özel kare istersen "assetBase"i o uzmanın klasörüne çevir.
*/
window.FILM = {
  uzman: {
    ad: "Uzman Adı",                 // örn. "Simge Kaya"
    unvan: "Uzman Psikolog",         // örn. "Uzman Klinik Psikolog"
    sitesinden: "Uzman Adı’nın sitesinden", // Türkçe eki isme göre: "Simge Kaya’nın sitesinden"
  },

  assetBase: "../../../03-Assets/images/humentis/bulunma/humentis-bulunma-",
  logo: "../../../03-Assets/logos/humentis/humentis-lockup-horizontal.svg",

  acilis: {
    mekan: "DIŞ MEKAN — ANKARA — GECE",
    saat: "00:40",
    satirlar: ["Ankara. Gece yarısını geçmiş.", "Bazı pencerelerde ışık hâlâ yanıyor."],
    baslik: "Bulunma",
    altBaslik: "üç kısa hikâye",
  },

  // Üç hikâye. Uzmanın gerçek çalışma alanlarına göre değiştir.
  hikayeler: [
    {
      kod: "a",
      kisi: "Deniz, 22",
      gece:   { mekan: "İÇ MEKAN — ÖĞRENCİ EVİ — GECE", saat: "02:14", satir: "Üç haftadır aynı sayfayı okuyor." },
      arama:  { mekan: "İÇ MEKAN — ÖĞRENCİ EVİ — GECE", saat: "02:31", metin: "sınavdan önce nefes alamıyorum normal mi" },
      bulma:  {
        mekan: "İÇ MEKAN — ÖĞRENCİ EVİ — GECE", saat: "02:33",
        alan: "Sınav ve performans kaygısı",
        alinti: "Sınav yaklaştıkça nefesiniz daralıyorsa, bu bir zayıflık değil. Zihninizin sizi korumaya çalışma biçimi.",
        rahatlama: "İlk kez biri, tam olarak onu anlatıyor.",
      },
      sabah:  { mekan: "İÇ MEKAN — ÖĞRENCİ EVİ — SABAH", saat: "08:10", satir: "Sabah, telefonunda kayıtlı bir isim vardı." },
    },
    {
      kod: "b",
      kisi: "Ece, 34",
      gece:   { mekan: "İÇ MEKAN — MUTFAK — GECE", saat: "23:48", satir: "Tartışma bitti. Sessizlik bitmedi." },
      arama:  { mekan: "İÇ MEKAN — MUTFAK — GECE", saat: "23:56", metin: "evliliğimizde artık konuşamıyoruz" },
      bulma:  {
        mekan: "İÇ MEKAN — MUTFAK — GECE", saat: "00:02",
        alan: "Çift terapisi",
        alinti: "Aynı evde iki yabancı gibi hissetmeye başladıysanız, konuşmanın başka bir yolu olabilir.",
        rahatlama: "Sayfayı kaydetti. Yarın ona da gösterecek.",
      },
      sabah:  { mekan: "İÇ MEKAN — MUTFAK — SABAH", saat: "07:45", satir: "İki fincan. Bu sabah ikisi de dolu." },
    },
    {
      kod: "c",
      kisi: "Selim, 41",
      gece:   { mekan: "DIŞ MEKAN — OTOPARK, ARABANIN İÇİ — GECE", saat: "21:05", satir: "Motoru yirmi dakika önce kapattı. Hâlâ inemedi." },
      arama:  { mekan: "DIŞ MEKAN — OTOPARK, ARABANIN İÇİ — GECE", saat: "21:12", metin: "her sabah işe gitmek istememek" },
      bulma:  {
        mekan: "DIŞ MEKAN — OTOPARK, ARABANIN İÇİ — GECE", saat: "21:15",
        alan: "Tükenmişlik ve iş stresi",
        alinti: "Yorgunluğunuz uykuyla geçmiyorsa, mesele belki dinlenmek değil. Sizi neyin tükettiğini birlikte görmek.",
        rahatlama: "Eve girmeden önce bir randevu isteği bıraktı.",
      },
      sabah:  { mekan: "DIŞ MEKAN — ÇANKAYA — GÜNDÜZ", saat: "10:20", satir: "Bu kez yürüyerek geldi." },
    },
  ],

  gecis: "Sonra sabah oldu.",

  birlesme: {
    satirlar: ["Üç ayrı gece.", "Üç ayrı arama."],
    son: "Aynı isim.",
  },

  // Randevu defteri: baş harfler + konu. İlk üçü hikâyelerle eşleşiyor, gerisi hızlanıyor.
  defter: {
    mekan: "İÇ MEKAN — DANIŞMA ODASI — GÜNDÜZ",
    saat: "09:00",
    baslik: "Bu hafta",
    satirlar: [
      ["Pzt 10:00", "D.K.",   "Sınav kaygısı"],
      ["Pzt 18:30", "E. & M.", "Çift terapisi"],
      ["Sal 09:30", "S.A.",   "Tükenmişlik"],
      ["Sal 14:00", "N.Y.",   "Yas süreci"],
      ["Çar 11:00", "B.T.",   "Kaygı"],
      ["Çar 17:00", "O. & C.", "Aile danışmanlığı"],
      ["Per 10:30", "İ.D.",   "Özgüven"],
      ["Per 16:00", "A.Ş.",   "İlişkiler"],
      ["Cum 12:00", "K.E.",   "Uyku ve stres"],
    ],
    // Yazıların defter görselindeki sayfalara oturacağı yerler (% — görselin kendi genişlik/yüksekliğine göre).
    // Şu anki değerler humentis-bulunma-defter.jpg için ölçüldü; defter karesi değişirse bunları güncelle.
    sayfalar: [
      { sol: 49.8, ust: 27.5, gen: 19.5, yuk: 53 },   // sol sayfa: başlık + ilk satırlar
      { sol: 74.6, ust: 27.5, gen: 19.5, yuk: 53 },   // sağ sayfa: kalan satırlar
    ],
    ilkSayfaSatir: 4,
    alt: "Hangi alanda çalışırsanız çalışın, sizi arayan biri zaten var.",
  },

  kapanis: {
    satirlar: [
      "Bu hikâyeler kurgusal.",
      "Ama her gün, birileri için gerçek oluyor.",
    ],
    vurgu: "Sitenizin işi bu anı yaratmak.",
  },

  final: {
    soru: "Sizi arayanlar, sizi bulsun mu?",
    alt: "Kendi siteniz · kendi sesiniz · Humentis çatısı altında",
  },
};
