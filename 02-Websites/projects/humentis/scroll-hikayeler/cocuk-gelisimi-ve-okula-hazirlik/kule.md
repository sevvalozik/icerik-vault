---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-cocuk-kule
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/2WXyGvfBRCd9hEP64ayZHA"
tags: [website, humentis, scroll, hikaye, cocuk-gelisimi, okula-hazirlik]
related: ["[[00-genel-bakis]]", "[[cocuk-gelisimi-ve-okula-hazirlik]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Çocuk Gelişimi ve Okula Hazırlık — "Kule"

> Şevval tarafından seçildi (28 Eylül 2026). Bu konunun hocaları: Müge Ertuğrul, Simge Kaya.
> **Site hazır:** `02-Websites/projects/humentis/scroll-siteler/cocuk-gelisimi-ve-okula-hazirlik/kule/` · Canlı: https://claude.ai/artifact/2WXyGvfBRCd9hEP64ayZHA
> Sadeleştirildi: tek video, kule dizili başlar ve kaydırdıkça devrilir.

## 1. Künye

| | |
|---|---|
| Karakter | Bir çocuk. Sadece küçük eli ve bileği görünür; yüz, beden ve silüet hiç yok. |
| Konu | Oyunla gelişim: deneme, düşme, yeniden kurma |
| Duygusal çekirdek | Kule yıkılıyor ve bu bir felaket değil. Düşen bloklardan biri yeni bir başlangıcın ilk parçası oluyor. |
| Mekân | Gerçek bir çocuk odası: halı, pencereden gün ışığı, köşede birkaç oyuncak. Alçak, sabit kamera. |
| Geçiş | Kameranın dibine yuvarlanan bloğun ahşap yüzüne yaklaşılır; ahşap ışıkla açılıp krem zemine erir. |
| Tahmini uzunluk | **3 ekran boyu** (kısa kesim, ~20 sn) |

## 2. Hikâye

Halıda sekiz bloklu bir kule dimdik duruyor. Küçük bir el uzanıp parmağıyla en üstteki bloğa dokunuyor. Kule sallanıp devriliyor, bloklar halıya dağılıyor ve bir tanesi yuvarlanıp kameranın önünde duruyor. El çekiliyor. Ekranda tek satır beliriyor: "Düşmek de oyunun parçası." Sonra o tek bloğa yaklaşıyoruz ve ahşap yüzü sitenin sayfasına dönüşüyor.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–10 | kurgu | `kule` 0 sn (durgun) | Kule dimdik duruyor | — |
| 10–48 | kurgu | `kule` 0→5.2 sn (scrub) | El dokunur, kule devrilir, bir blok kameraya yuvarlanır | — |
| 48–70 | kurgu | `kule` 5.2→son (scrub) | Bloklar halıda durulur | *Düşmek de oyunun parçası.* (52–70, üstte) |
| 70–92 | geçiş | son kare | Öndeki bloğun yüzüne yaklaşma (×12), ışık dolar, bantlar kalkar | — |
| 86–100 | geçiş | — | Krem zemine erime | **Çocuğunuzun gelişimini birlikte izleyelim** |

Müzik yok ya da çok hafif. Opsiyonel olarak kule yıkılırken tek bir tahta sesi (varsayılan kapalı, ses düğmesiyle açılır).

## 4. Açıldığı site bölümü

**Başlık:** Çocuğunuzun gelişimini birlikte izleyelim

**İlk paragraf:** Çocuklar dünyayı oyunla öğrenir: denerler, yanılırlar, yeniden kurarlar. Bir kulenin yıkılması, bir harfin ters yazılması, bir becerinin bir süre gecikmesi çoğu zaman gelişimin doğal parçasıdır. Bazen de desteklenmesi gereken bir alana işaret eder. Gelişimsel değerlendirmede çocuğunuzun güçlü yanlarını ve ihtiyaçlarını birlikte görür, okula ve yeni dönemlere hazırlığı adım adım planlarız. İlk görüşmeyi çocuğunuz olmadan, sizinle yapabiliriz.

**Alt bölümler (metin uzmanla yazılacak):**
- Gelişimsel değerlendirme nedir, nasıl yapılır?
- Okula hazır mı? Yaştan önemli olan beceriler
- Dikkat, uyum ve davranış: ne zaman destek almalı?

**CTA:** Ön görüşme için randevu al
**İkincil:** Blog: "Çocuğunuzun gelişimini karşılaştırmadan izlemek"

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Motor [[yarim-adim]] ile aynı: `kurgu` sahne tipi.

- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Sahne listesi:** §3 tablosu ile aynı.
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/cocuk-gelisimi-ve-okula-hazirlik/kule/`
- **Video klasörü:** `03-Assets/images/humentis/scroll/cocuk-gelisimi-ve-okula-hazirlik/kule/` → `kule.mp4` (1080p, 8 sn, all-intra, scrub), `kule-ilk.jpg` (ilk kare, yüklenene kadar gösterilir), `kf-baslangic.jpg` (Flow başlangıç karesi)
- **Görsel/video promptları:** [[scroll-kule-brief]]
- **KURGU:** `[[0,10,0,0],[10,48,0,5.2],[48,68,5.2,"son"]]` → `[başlangıç %, bitiş %, klip başı sn, klip sonu sn]`.
- **Yaklaşma hedefi:** son karede öndeki bloğun ön yüzü videonun %49.8 / %76.5 noktasında. `object-fit: cover` hesabıyla ekrandaki piksel yerine çevrilip `transform-origin` yapılır; ölçek 1→12, easeInOut.
- **Yazı:** tek satır, üst orta (blokla çakışmasın), serif italik, 52–70.
- **Geçiş:** 78'den itibaren sıcak ışık katmanı, 77–84 sinema bantları ve üst yazı kaybolur, 86–92 krem `#erime`, başlık 91'de.
- **Üst bant:** mekân `İÇ MEKAN — ÇOCUK ODASI — GÜNDÜZ`, saat yerine boş (ya da `SAHNE 1`).
- **Kurallar:** Çocuk yüzü, bedeni ve silüeti yok; yalnızca el ve bilek. Marka ya da yazılı oyuncak yok.
