---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-dikkat-altyazi
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/LWSmPrGyDn8MEWKZzkmk8A"
tags: [website, humentis, scroll, hikaye, dikkat, dehb, yetiskin]
related: ["[[00-genel-bakis]]", "[[dikkat-ve-odaklanma]]", "[[teknik-spec]]", "[[scroll-altyazi-brief]]"]
---

# Dikkat ve Odaklanma — "Altyazı"

> Şevval tarafından seçildi (28 Eylül 2026). Özellikle Irmak Tara Sığırcı için (DEHB); Zeynep Baltacı da kullanabilir.
> **Site hazır:** `02-Websites/projects/humentis/scroll-siteler/dikkat-ve-odaklanma/altyazi/` · Canlı: https://claude.ai/artifact/LWSmPrGyDn8MEWKZzkmk8A

## 1. Künye

| | |
|---|---|
| Karakterler | İki arkadaş, otuzlu yaşlarda. İkisi de pencereye karşı siluet, yüzler hiç görünmez. Soldaki dinliyor, sağdaki anlatıyor. |
| Konu | Yetişkin DEHB: istemeden dikkatin kayması ve bunun ilişkilere yansıması |
| Duygusal çekirdek | Dinlemek istiyor, arkadaşı da ona önemli bir şey anlatıyor. Ama aklı bir anda pencereden dışarı kayıyor ve döndüğünde tam cevap vermesi gereken soru geliyor. |
| Mekân | Öğleden sonra bir kafe, büyük pencerenin önünde yuvarlak masa; sabit, yandan kamera |
| Geçiş | Onu içeri çeken pencere ışığı ekranı doldurur, krem zemine erir. |
| Tahmini uzunluk | **4 ekran boyu** (kısa kesim, ~24 sn) |

## 2. Hikâye

Kafede iki arkadaş konuşuyor. Sağdaki anlatıyor: "Geçen hafta işten ayrıldım." Soldaki başını sallayarak dinliyor. Sonra aklı kayıyor, başını yavaşça pencereye çeviriyor, dışarıdan biri geçiyor. O sırada arkadaşının cümleleri altyazıda bulanıklaşıp sönüyor: "Çünkü müdürüm bir gün beni çağırıp…", "…ve annem de hiç anlamadı, o yüzden…". Başını geri çevirdiğinde altyazı yeniden netleşiyor ve tam o an soru geliyor: "Sen olsan ne yapardın?" Cevabı yok, çünkü dinleyememiş.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı (altyazı, alt siyah bantta) |
|---|---|---|---|---|
| 0–8 | kurgu | `altyazi` 0 sn | İkisi konuşuyor | — |
| 8–22 | kurgu | `altyazi` 0→2.2 sn | Dinleyen başını sallıyor | *— Geçen hafta işten ayrıldım.* |
| 22–56 | kurgu | `altyazi` 2.2→7 sn | Dinleyen başını pencereye çeviriyor, dışarıdan biri geçiyor | *— Çünkü müdürüm bir gün beni çağırıp…* → *— …ve annem de hiç anlamadı, o yüzden…* (bulanık, sönük) |
| 56–74 | kurgu | `altyazi` 7→son | Arkadaşına geri dönüyor | — |
| 58–86 | durgun | son kare | Soru ekranda asılı kalır | *— Sen olsan ne yapardın?* (net) |
| 84–100 | geçiş | — | Pencere ışığı ekranı doldurur, krem zemine erime | **Dinlemek istiyorsunuz ama aklınız kayıyorsa** |

Müzik yok. İstenirse çok hafif kafe ortam sesi (varsayılan kapalı).

## 4. Açıldığı site bölümü

**Başlık:** Dinlemek istiyorsunuz ama aklınız kayıyorsa

**İlk paragraf:** En sevdiğiniz insan karşınızda konuşurken bir anda aklınızın pencereden dışarı kaydığını, cümlenin ortasını kaçırdığınızı fark ediyor olabilirsiniz. Bu ilgisizlik ya da saygısızlık değil. Dikkatin yönünü ve süresini düzenlemekte zorlanan bir zihnin günlük hayattaki izidir ve çoğu zaman yıllarca "dağınıklık" diye geçiştirilir. Değerlendirmeyle bu zorluğun neden kaynaklandığını anlar, işte, okulda ve ilişkilerde işinize yarayacak somut yollar kurarız.

**Alt bölümler (metin uzmanla yazılacak):**
- Yetişkinlerde DEHB nasıl görünür?
- Dikkat dağınıklığı ilişkileri nasıl etkiler?
- Değerlendirme ve birlikte çalışma süreci

**CTA:** Ön görüşme için randevu al

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Motor [[kule]] ile aynı: tek klip, `kurgu`.

- **Toplam uzunluk:** 4 ekran boyu (`#hikaye` 500vh)
- **Sahne listesi:** §3 tablosu ile aynı.
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/dikkat-ve-odaklanma/altyazi/`
- **Video klasörü:** `03-Assets/images/humentis/scroll/dikkat-ve-odaklanma/altyazi/` → `altyazi.mp4` (1080p, 10 sn, all-intra, scrub), `altyazi-ilk.jpg`, `kf-baslangic.jpg`
- **Görsel/video promptları:** [[scroll-altyazi-brief]]
- **KURGU:** `[[0,8,0,0],[8,22,0,2.2],[22,56,2.2,7],[56,74,7,"son"]]`
- **Altyazı:** film altyazısı gibi alt siyah bandın ortasında, beyaz sans, gölgeli. Konuşan arkadaş olduğu için başta "— " var.
- **Dağılma efekti (sahne tipinin özü):** `uzak = clamp((p-27)/8) * (1 - clamp((p-50)/6))`. "dagil" işaretli altyazılarda opaklık `× (1 - .72·uzak)`, `blur(5·uzak px)`. Dinleyen dönünce son soru tamamen net.
- **Geçiş:** 84'ten itibaren sinema bantları ve mekân yazısı kaybolur, 86–93 sıcak beyaz ışık katmanı (%90), 90–94 krem `#erime`, başlık 93'te.
- **Üst bant:** `İÇ MEKAN — KAFE — ÖĞLEDEN SONRA`
