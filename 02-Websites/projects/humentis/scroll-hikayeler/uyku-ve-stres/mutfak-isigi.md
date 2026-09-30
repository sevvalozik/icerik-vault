---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-uyku-mutfak-isigi
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, uyku, stres]
related: ["[[00-genel-bakis]]", "[[uyku-ve-stres]]", "[[teknik-spec]]", "[[scroll-mutfak-isigi-brief]]"]
---

# Uyku ve Stres — "Mutfak Işığı"

> Şevval tarafından seçildi (28 Eylül 2026); uyku için iki hikâyeden biri ([[saat-0412]], [[mutfak-isigi]]). Kural: **ekranda yazı yok**; sadece üst bantta ilerleyen saat ve sondaki site başlığı var. Hocalar: Elif Silav, Sena Şimşek (stres yönetimi) ve genel.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-mutfak-isigi-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Kırklı yaşlarda bir kişi. Mutfak masasında, sırtı koridora dönük; yüz hiç görünmez. |
| Konu | Uyku ve stres |
| Duygusal çekirdek | Ev uyuyor. Bir tek o uyanık, gecenin üçünde bir bardak suyla oturuyor. |
| Mekân | Gece, bir apartman dairesi; karanlık koridor, kapalı yatak odası kapıları, koridorun sonunda sadece davlumbaz ışığı yanan mutfak |
| Geçiş | Kamera koridor boyunca mutfağın sıcak ışığına ilerler; ışık krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Gecenin üçü. Evin bütün kapıları kapalı, herkes uyuyor. Karanlık koridorun sonunda sadece mutfağın küçük davlumbaz ışığı yanıyor. Masada biri oturuyor, sırtı bize dönük, önünde bir bardak su. Hiç kıpırdamıyor. Kamera karanlık koridordan o ışığa doğru, sessizce ilerliyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–15 | kurgu | `mutfak-isigi` 0 sn | Karanlık koridor, kapalı kapılar; en sonda ışık yanan mutfak | — |
| 15–75 | kurgu | `mutfak-isigi` 0→son | Kamera koridor boyunca yavaşça mutfağa ilerler; masadaki kişi sırtı dönük, bir yudum su alır | — |
| 75–100 | geçiş | son kare | Davlumbaz ışığına yaklaşma, krem zemine erime | **Herkes uyurken siz uyanıksanız** |

**Yazı yok.** Üst banttaki saat (`#saat`) kodla ilerler: 03:07 → 03:26 → 03:48.

## 4. Açıldığı site bölümü

**Başlık:** Herkes uyurken siz uyanıksanız

**İlk paragraf:** Gecenin bir yarısı uyanıp bir daha uyuyamamak, evin sessizliğinde düşüncelerle baş başa kalmak çok yalnız hissettirebilir. Uzun süren uykusuzluk çoğu zaman gündüz taşıdığımız yükün geceye taşmasıdır. Terapide bu yükü birlikte fark eder, gece uyanmalarının ardındaki stresle çalışır ve bedeninizin yeniden dinlenebileceği bir düzen kurarız.

**Alt bölümler (metin uzmanla yazılacak):**
- Gece uyanmaları neden olur?
- Uykusuzluk ve kaygı arasındaki bağ
- Ne zaman destek almak gerekir?

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Video zaten ışığa ilerlediği için son karede davlumbaz ışığının merkezi ölçülür; yaklaşma kısa (ölçek 1→6), parlaklık artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/uyku-ve-stres/mutfak-isigi/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/uyku-ve-stres/mutfak-isigi/` → `kf-baslangic.jpg`, `mutfak-isigi.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — DAİRE — GECE` + ilerleyen saat
- **Kurallar:** Yüz yok. Ekranlarda ve saatlerde AI'nin yazdığı rakam kullanılmaz; saat kodla gösterilir.
