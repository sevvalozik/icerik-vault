---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-ayrilik-bagaj
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ayrilik, iliski-sonrasi]
related: ["[[00-genel-bakis]]", "[[ayrilik-ve-iliski-sonrasi]]", "[[teknik-spec]]", "[[scroll-bagaj-brief]]"]
---

# Ayrılık ve İlişki Sonrası — "Bagaj"

> Şevval tarafından seçildi (28 Eylül 2026); üç hikâyeden biri ([[dolap]], [[bagaj]], [[yatak]]). Ton: **yetişkin** ayrılığı (birlikte yaşamış otuzlu–kırklı yaşlar), gençlik aşkı hissi yok. Kural: **ekranda yazı yok**. Hocalar: Başak Kale, Sena Şimşek (aldatılma).
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-bagaj-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Kırklı yaşlarda bir yetişkin, sade bir montla. Hep arkadan; yüz yok. |
| Konu | Ayrılık ve ilişki sonrası süreç |
| Duygusal çekirdek | Eski partnerinin eşyalarını geri veriyor. Bagajı kapatınca bir süre elini üstünden çekemiyor. |
| Mekân | Akşamüstü, bir apartmanın önündeki sessiz sokak; park etmiş bir arabanın açık bagajı |
| Geçiş | Kapanan bagaj kapağının üstündeki akşam ışığı yansımasına yaklaşma; ışık krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Akşamüstü, apartmanın önü. Park etmiş bir arabanın bagajı açık, içinde birkaç koli var. Biri, arkadan görünüyor, kucağındaki son koliyi bagaja yerleştiriyor. Bagaj kapağını indirip kapatıyor. Elini kapağın üstünde bırakıyor, bir süre öyle duruyor, başı hafifçe öne eğik. Sonra elini çekiyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `bagaj` 0 sn | Açık bagaj, koliler; kişi elinde son koliyle, arkadan | — |
| 12–40 | kurgu | `bagaj` 0→3 sn | Son koliyi bagaja yerleştirir | — |
| 40–60 | kurgu | `bagaj` 3→5 sn | Bagaj kapağını kapatır | — |
| 60–80 | kurgu | `bagaj` 5→son | Elini kapağın üstünde tutar, başı eğik; sonra çeker | — |
| 80–100 | geçiş | son kare | Bagaj kapağındaki akşam ışığı yansımasına yaklaşma, krem zemine erime | **Bir ilişkiyi geride bırakmak zor geliyorsa** |

**Yazı yok.**

## 4. Açıldığı site bölümü

**Başlık:** Bir ilişkiyi geride bırakmak zor geliyorsa

**İlk paragraf:** Ayrılığın en zor anları bazen en sıradan olanlardır: eşyaları paylaşmak, geri vermek, son kez aynı kapının önünde durmak. Bir ilişkiyi bitirmek, onu bir anda içinizden silmek anlamına gelmez. Terapide bu vedayı kendi hızınızda yaşamanıza, geçmişle aranıza sağlıklı bir mesafe koymanıza ve yeniden kendinize dönmenize eşlik ederiz.

**Alt bölümler (metin uzmanla yazılacak):**
- Ayrılık sonrası duygular: yas, öfke, rahatlama
- Geçmişle sağlıklı mesafe
- Kendinize yeniden dönmek

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede bagaj kapağındaki en parlak ışık yansıması ölçülür; `transform-origin` o nokta, ölçek 1→9, parlaklık ve sıcak ışık katmanı artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ayrilik-ve-iliski-sonrasi/bagaj/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/bagaj/` → `kf-baslangic.jpg`, `bagaj.mp4` (üretilecek)
- **Üst bant:** `DIŞ MEKAN — APARTMAN ÖNÜ — AKŞAMÜSTÜ`
- **Kurallar:** Yüz yok. Fotoğraf, çerçeve ya da okunur yazı yok; ayrılığı sadece boşalan yerler anlatır.
