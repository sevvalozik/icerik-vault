---
type: website
framework: html
client: humentis
slug: humentis-scroll-cocuk-kule
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, cocuk-gelisimi, okula-hazirlik]
related: ["[[00-genel-bakis]]", "[[cocuk-gelisimi-ve-okula-hazirlik]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Çocuk Gelişimi ve Okula Hazırlık — "Kule"

> Şevval tarafından seçildi (28 Eylül 2026). Bu konunun hocaları: Müge Ertuğrul, Simge Kaya.

## 1. Künye

| | |
|---|---|
| Karakter | Bir çocuk. Sadece küçük eli ve bileği görünür; yüz, beden ve silüet hiç yok. |
| Konu | Oyunla gelişim: deneme, düşme, yeniden kurma |
| Duygusal çekirdek | Kule yıkılıyor ve kimse kurtarmaya koşmuyor. Çocuk yeniden, bu sefer daha yükseğe kuruyor. |
| Mekân | Gerçek bir çocuk odası: halı, pencereden gün ışığı, köşede birkaç oyuncak. Alçak, sabit kamera. |
| Geçiş | Son blok konunca pencere ışığı odayı doldurur, ekran krem zemine erir. |
| Tahmini uzunluk | **4 ekran boyu** (kısa kesim, ~20 sn) |

## 2. Hikâye

Halıda bir çocuk tahta blokları üst üste koyuyor. Beşinci blok yamuk duruyor, kule sallanıp halıya yıkılıyor. Kimse koşup kurtarmıyor. Biraz sonra kule yeniden kurulmuş, bu sefer tabanı daha geniş ve daha yüksek. Küçük el en üste son bloğu dikkatle koyup çekiliyor.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–30 | kurgu | `dizme` 0→son (scrub) | El bloklarla kuleyi dört kata çıkarır | — |
| 30–50 | kurgu | `yikilma` 0→son (scrub) | Beşinci blok yamuk konur, kule halıya yıkılır | — |
| 50–62 | durgun | `yikilma` son karesi | Bloklar halıda, kimse gelmiyor | *Düşmek de oyunun parçası.* |
| 62–66 | kararma | — | Kısa kararma (zaman geçer) | — |
| 66–88 | kurgu | `son-blok` 0→son (scrub) | Daha geniş tabanlı, yüksek kule; el son bloğu koyup çekilir | — |
| 88–100 | geçiş | — | Pencere ışığı büyür, krem zemine erime | **Çocuğunuzun gelişimini birlikte izleyelim** |

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

- **Toplam uzunluk:** 4 ekran boyu (`#hikaye` 500vh)
- **Sahne listesi:** §3 tablosu ile aynı.
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/cocuk-gelisimi-ve-okula-hazirlik/kule/`
- **Video klasörü:** `03-Assets/images/humentis/scroll/cocuk-gelisimi-ve-okula-hazirlik/kule/` → `dizme.mp4`, `yikilma.mp4`, `son-blok.mp4`
- **Görsel/video promptları:** [[scroll-kule-brief]]
- **KURGU:** `[[0,30,"dizme",0,SON],[30,50,"yikilma",0,SON],[50,62,"yikilma",SON,SON],[66,88,"son-blok",0,SON],[88,100,"son-blok",SON,SON]]`. SON değerleri klipler gelince süreye göre yazılır. 62–66 arası kararma ile geçilir.
- **Yazı:** tek satır, alt orta, serif italik, 50–62.
- **Geçiş:** 88–95 arası videoya `brightness` + sağ üstten (pencere yönü) sıcak ışık gradyanı, 94'ten sonra krem `#erime` katmanı, başlık 96'da.
- **Üst bant:** mekân `İÇ MEKAN — ÇOCUK ODASI — GÜNDÜZ`, saat yerine boş (ya da `SAHNE 1`).
- **Kurallar:** Çocuk yüzü, bedeni ve silüeti yok; yalnızca el ve bilek. Marka ya da yazılı oyuncak yok.
