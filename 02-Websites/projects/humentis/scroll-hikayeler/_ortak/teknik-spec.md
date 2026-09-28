---
type: website
framework: html
client: humentis
slug: humentis-scroll-teknik-spec
status: active
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, ortak, teknik, spec]
related: ["[[00-genel-bakis]]", "[[humentis-bulunma-hikayesi]]", "[[00-Musteriler/humentis/marka-brief]]"]
---

# Scroll Hikâye Siteleri — Teknik Şartname

**Tam hikâye sayılması için** bir hikâye dosyasında şu bölümler olmalı: künye, hikâye, scroll senaryosu, geçiş anı, açıldığı site bölümü, gerekli görseller ve **Kodlama için** (çıktı klasörü, sahne listesi, özel davranışlar, görsel dosyaları). 💡 fikirler tam hikâyeye çevrilirken bu bölüm eklenir.

> **Claude / Claude Code için:** Bir hikâye dosyası (örn. `kaygi-ve-cok-dusunmek/provalar.md`) verildiğinde siteyi bu şartnameye göre kur. Hikâye dosyasındaki scroll senaryosu, geçiş anı, açıldığı site bölümü ve **"Kodlama için"** bölümü bağlayıcıdır. Metinleri birebir kullan, uydurma. Bu dosyayla hikâye dosyası çelişirse hikâye dosyası kazanır.

## 1. Referans uygulama

`01-Presentations/active/humentis-bulunma-hikayesi/film.html` bu projenin çalışan scroll motorudur. Aynı mimariyi kullan:
- Sabit (`position: fixed`) bir sahne, altında sahne uzunluklarının toplamı kadar yüksek bir scroll izi.
- Her sahne bir `layer`; scroll konumundan her sahnenin yerel ilerlemesi `t` (0–1) hesaplanır; opaklık, zoom (Ken Burns), metin görünürlüğü `t`'ye bağlıdır.
- Üst ve alt siyah sinemaskop bantları, film greni, vinyet, üst bantta senaryo başlığı ve saat.
- Görsel yoksa ışık tonuna göre yer tutucu + köşede kare kodu (film.html'deki `loadMedia` davranışı): site görseller üretilmeden de çalışır.
- Müzik: iki parça, belirli sahnede çapraz geçiş (film.html'deki `setupMusic`).

Kütüphane gerekmez. İstenirse GSAP ScrollTrigger (cdnjs, sabit sürüm) kullanılabilir ama davranış film.html ile aynı kalmalı.

## 2. Çıktı yeri ve dosya yapısı

```
02-Websites/projects/humentis/scroll-siteler/<konu>/<hikaye>/
├── index.html          # tek sayfa: hikâye + site bölümü
├── hikaye.js           # sahne verisi (hikâye dosyasının §3 tablosundan üretilir)
└── README.md           # nasıl açılır, hangi görseller eksik
```
- Görsel promptları: `07-AI-Gorsel/humentis/scroll-<hikaye>-brief.md` (Claude görsel üretmez; görseller bu brief'le Gemini'de üretilip aşağıdaki klasöre konur, site onları adıyla bulur)
- Görseller: `03-Assets/images/humentis/scroll/<konu>/<hikaye>/<kod>.jpg` (hikâye dosyasının "Kodlama için → Görsel dosyaları" listesi). HTML'den vault köküne göreli yol **6 seviye**: `../../../../../../` (örn. `../../../../../../03-Assets/images/humentis/scroll/<konu>/<hikaye>/`). `hikaye.js` içinde `kok` olarak tanımla.
- Müzik: `03-Assets/audio/humentis/bulunma-muzik.mp3` (gece) ve `bulunma-sabah-1.mp3` (umut). Başka parça istenmedikçe bunlar.
- Logo: `03-Assets/logos/humentis/humentis-lockup-horizontal.svg`

## 3. Sayfa yapısı

1. **Hikâye bölümü** (scroll film): §3 tablosundaki her satır bir sahne. "%" sütunu sahnenin toplam hikâye içindeki payıdır; toplam uzunluk hikâye dosyasının künyesindeki "tahmini uzunluk" (ekran boyu) değeridir.
2. **Geçiş** (§4): hikâyenin son %6–20'si. Sonunda sabit sahne çözülür ve sayfa normal akışa geçer.
3. **Site bölümü** (§5): normal scroll'lu içerik; başlık, ilk paragraf, alt bölümler, CTA. Bu bölüm krem zeminde, hikâyeden bağımsız okunabilir olmalı.
4. **Alt bilgi:** uzman adı, unvan, Humentis logosu, "Ön görüşme için randevu al" butonu (şimdilik `#randevu` bağlantısı).

## 4. Sahne tipleri (component'ler)

Hikâye dosyalarında geçen tipler. `hikaye.js` içinde her sahne bir `tip` alır.

| Tip | Ne yapar | Nerede kullanılıyor |
|---|---|---|
| `frame` | Tam ekran görsel/klip + Ken Burns + metinler | Hepsi |
| `text` | Görselsiz, düz zeminde tek/çok satır metin | "Sonra sabah oldu.", "Bu korku gerçekten benim mi?" |
| `typing` | Metnin scroll ile harf harf yazılması; `rewrite` seçeneği: yaz → sil → yeniden yaz | Provalar (ilk cümle), Motor Kapalı |
| `ghosts` | Arka plan görseli üzerinde dekupe figürler; her scroll adımında biri belirir (`opacity .35, blur 1px, mix-blend-mode: screen`); `clear` seçeneği: ışık maskesi soldan sağa geçerken figürleri siler | Provalar |
| `split` | Ekranı ikiye böler (masaüstünde dikey, mobilde yatay); sol/sağ ayrı görsel ve metin; `merge` seçeneği: sağ panel `clip-path` ile sola kayarak birleşir | Her Şey Yolunda |
| `era` | Aynı kadrajdaki görseller arasında erime geçişi (crossfade + scale 1.00→1.02); köşede küçük yıl etiketi | Miras |
| `triptych` | Ekranı üçe böler, üç kare yan yana, aynı anda hafif "nefes" (scale 1→1.01) | Miras |
| `clock` | Senaryo başlığındaki saatin scroll ile hızla akması | Provalar, Aynı Paragraf |
| `shards` | Kırık parçaların (6–9 SVG poligon) havalanıp altın çizgiyle birleşmesi | Kırılan Vazo |
| `pages` | Kâğıtların 3D dönüşümle savrulup tek sayfada birleşmesi | Aynı Paragraf |
| `dive` | Ekran ışığına push-in, ışığın tüm kadrajı doldurması | Motor Kapalı |

Yeni bir hikâye yeni bir tip gerektirirse hikâye dosyasının "Kodlama için" bölümünde tarif edilir.

## 4b. Hareket: video öncelikli

Durağan fotoğraf + zoom sitede "fotoğraf" gibi algılanıyor; hedef film hissi. Bu yüzden:

- Her arka plan önce **aynı adla `.mp4`** arar, yoksa `.jpg`, o da yoksa yer tutucu (film.html ve Provalar motoru böyle).
- Sahne verisinde her arka plan için `video: "loop"` ya da `video: "scrub"`:
  - **loop:** sessiz, döngüde, sahne görünürken oynar (perde kıpırtısı, ekran ışığı, yağmur).
  - **scrub:** `video.currentTime = sahneİlerlemesi × süre`; kaydırdıkça ilerler, geri kaydırınca geri gider (kapı kapanır, vazo düşer, ışık odaya yayılır).
- Mod ve hareket promptu her kare için görsel brief'inde (`07-AI-Gorsel/humentis/scroll-<hikaye>-brief.md` → "Hareket (video) promptları").
- **Kodlama şartı:** scrub akıcı olsun diye videolar her karesi anahtar kare olacak şekilde yeniden kodlanır: `ffmpeg -i girdi.mp4 -an -c:v libx264 -crf 22 -g 1 -pix_fmt yuv420p -vf scale=1920:-2 -movflags +faststart cikti.mp4`. Loop videolar da aynı komutla küçültülür.
- Video yoksa bile sahne ölü durmaz: hayaletler/figürler CSS ile hafif süzülür (`suzul` animasyonu), ışıklar gradient ile hareket eder.

## 5. Tasarım tokenları

- Renkler (logo paleti): petrol `#284C51`, koyu petrol `#0f2226`, krem `#F6EFDD`, fildişi `#f8f5ed`, altın `#CEAB69`, koyu altın `#7A5C22`, kömür `#564E44`
- Fontlar (Google Fonts): başlık ve film yazısı **Source Serif 4**, arayüz **Manrope**, senaryo başlığı **Courier Prime**, el yazısı **Caveat**
- Gece sahneleri: siyah/petrol zemin, krem yazı. Site bölümü: krem zemin, petrol başlık, kömür metin.
- Film yazısı: alt ortada, `clamp(20px, 2.15vw, 38px)`, gölgeli. Alıntılar: italik, sol altta.

## 6. Davranış kuralları

- **Oynat modu:** sağ altta ▶ OYNAT (ve `P` tuşu): sabit hızda otomatik kaydırma (film.html'deki `SPEED`). Ok tuşları ve boşluk: sonraki/önceki sahne.
- **Müzik:** ilk tıklama/tuşla başlar; hikâye dosyasında "Hope piano'ya geçiş" yazan sahnede 4 sn çapraz geçiş; "Tam sessizlik" yazan sahnede ses 0.
- **Erişilebilirlik:** `prefers-reduced-motion` açıksa Ken Burns ve gren kapalı, geçişler sade opaklık. Tüm film yazıları DOM'da gerçek metin (ekran okuyucu için).
- **Mobil:** 375 px genişlikte çalışmalı; `split` yatay bölünür, `triptych` dikey üçlü olur.
- **Görsel yoksa:** yer tutucu + kare kodu; site asla kırık görsel göstermez.

## 7. Değişmez içerik kuralları (marka brief §5, §7)

- Hiçbir görselde yüz yok; çocuk hiçbir şekilde görünmez.
- Arayüz taklidi yok: telefon ekranları boş ışık, sahte uygulama/arama sonucu çizilmez.
- Teşhis, tedavi vaadi, dramatik kriz dili yok. Metinler hikâye dosyasından birebir.
- Sahte randevu formu kurulmaz; CTA şimdilik bağlantı.

## 8. Örnek uygulama

`02-Websites/projects/humentis/scroll-siteler/kaygi-ve-cok-dusunmek/provalar/` bu şartnameyle kurulmuş ilk sitedir (28 Eylül 2026 testi). Yeni siteler bu klasörün yapısını (`index.html` motoru + `hikaye.js` verisi) örnek alabilir; motor büyük ölçüde aynı kalır, sahne tipleri hikâyeye göre eklenir.

- Hikâyenin site bölümündeki alt başlıkların metni hikâye dosyasında yoksa uydurulmaz: başlık konur, altına "Bu bölümün metni uzmanla birlikte yazılacak." notu yazılır.
- Geçişin son karesi (krem zemin + başlık) site bölümünün kapağıdır: başlık site bölümünde **tekrar edilmez**. Sticky sahne bittiğinde başlık yukarı kayar, altından ilk paragraf gelir (aksi halde başlık iki kez görünür).

## 9. Claude'a verilecek örnek istek

> `02-Websites/projects/humentis/scroll-hikayeler/kaygi-ve-cok-dusunmek/provalar.md` dosyasını ve `_ortak/teknik-spec.md`'yi oku. Referans olarak `01-Presentations/active/humentis-bulunma-hikayesi/film.html`'e bak. Siteyi spec §2'deki klasöre kur; görseller yoksa yer tutucu kullan. Uzman adı: "Uzman Adı".
