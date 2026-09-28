---
type: website
framework: html
client: humentis
slug: humentis-scroll-bosanma-dis-fircasi
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, bosanma, evlilik-oncesi]
related: ["[[00-genel-bakis]]", "[[evlilik-oncesi-ve-bosanma]]", "[[teknik-spec]]", "[[scroll-dis-fircasi-brief]]"]
---

# Evlilik Öncesi ve Boşanma — "Diş Fırçası"

> Şevval tarafından seçildi (28 Eylül 2026); iki hikâyeden biri ([[dis-fircasi]], [[yuzuk]]). Kural: **ekranda yazı yok**; sadece sondaki site başlığı var. Hoca: Elif Silav (evlilik öncesi ve boşanma süreci).
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-dis-fircasi-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Bir yetişkin; sadece eli ve kolu görünür. |
| Konu | Boşanma süreci |
| Duygusal çekirdek | On iki yıl boyunca aynı bardakta iki fırça. Bu sabah biri gidiyor. |
| Mekân | Sabah, sade bir ev banyosu; lavabonun kenarında cam bir bardak, yanında açık bir makyaj/tıraş çantası |
| Geçiş | Bardakta kalan tek fırçaya yaklaşma; banyonun beyaz fayansı ve ışık ekranı doldurur, krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Sabah. Banyo lavabosunun kenarında cam bir bardak, içinde iki diş fırçası yan yana duruyor. Yanında fermuarı açık bir çanta. Bir el uzanıyor, fırçalardan birini alıyor, bir an tutuyor, sonra çantaya koyup fermuarı kapatıyor. Bardakta tek fırça kalıyor, hafifçe yana yatıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–15 | kurgu | `dis-fircasi` 0 sn | Bardakta iki fırça, yanında açık çanta | — |
| 15–45 | kurgu | `dis-fircasi` 0→3 sn | El uzanır, bir fırçayı alır, bir an tutar | — |
| 45–72 | kurgu | `dis-fircasi` 3→son | Fırçayı çantaya koyar, fermuarı kapatır, el çekilir; bardakta tek fırça kalır | — |
| 72–100 | geçiş | son kare | Tek fırçalı bardağa yaklaşma, beyaz fayans ve ışık krem zemine döner | **Bir evliliği bitirmek de bir süreçse** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur.

## 4. Açıldığı site bölümü

**Başlık:** Bir evliliği bitirmek de bir süreçse

**İlk paragraf:** Ayrılık kararı çoğu zaman tek bir anda değil, küçük ve sessiz vedalarla yaşanır: bir fırçanın, bir fincanın, bir alışkanlığın evden eksilmesiyle. Boşanma sürecinde hem kendi duygularınızı taşımak hem de pratik kararlar almak zorunda kalabilirsiniz. Bu süreçte kaybı yaşamanıza, öfkeyle ve suçlulukla baş etmenize, yeni hayatınızı kurmanıza birlikte eşlik ederiz.

**Alt bölümler (metin uzmanla yazılacak):**
- Boşanma kararı ve belirsizlik
- Boşanma sürecinde duygular: yas, öfke, suçluluk
- Çocuklarla boşanmayı konuşmak
- Yeni bir düzen kurmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede bardaktaki tek fırçanın biraz üstü ölçülür; `transform-origin` o nokta, ölçek 1→8, parlaklık artar, beyaz fayans ve ışık krem `#erime`ye akar.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/evlilik-oncesi-ve-bosanma/dis-fircasi/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/evlilik-oncesi-ve-bosanma/dis-fircasi/` → `kf-baslangic.jpg`, `dis-fircasi.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — BANYO — SABAH`
- **Kurallar:** Yüz yok; sadece eller. Marka ya da okunur yazı yok.
