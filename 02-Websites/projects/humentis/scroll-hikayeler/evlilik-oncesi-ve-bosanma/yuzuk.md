---
type: website
framework: html
client: humentis
slug: humentis-scroll-bosanma-yuzuk
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, bosanma, evlilik-oncesi]
related: ["[[00-genel-bakis]]", "[[evlilik-oncesi-ve-bosanma]]", "[[teknik-spec]]", "[[scroll-yuzuk-brief]]"]
---

# Evlilik Öncesi ve Boşanma — "Yüzük"

> Şevval tarafından seçildi (28 Eylül 2026); iki hikâyeden biri ([[dis-fircasi]], [[yuzuk]]). Kural: **ekranda yazı yok**; sadece sondaki site başlığı var. Hoca: Elif Silav (evlilik öncesi ve boşanma süreci).
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-yuzuk-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Bir yetişkin; sadece eli görünür. |
| Konu | Boşanma süreci |
| Duygusal çekirdek | Yıllardır parmağında taşıdığı yüzüğü çıkarıyor. Parmakta soluk bir iz kalıyor. |
| Mekân | Akşam, bir evin girişi; kapının yanında küçük bir konsol, üstünde anahtarların bırakıldığı seramik bir kase |
| Geçiş | Kaseye bırakılan yüzüğe yaklaşma; kasenin krem seramiği ekranı doldurur ve krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Akşam, evin girişi. Kapının yanındaki konsolda anahtarların bırakıldığı küçük bir seramik kase duruyor. Bir el konsolun üstünde duruyor, parmağında bir alyans var. Diğer el alyansı yavaşça çeviriyor ve parmaktan çıkarıyor. Parmakta soluk bir iz kalıyor. El yüzüğü kasenin üstünde bir an tutuyor, sonra kaseye bırakıyor. Yüzük anahtarların yanında hafifçe dönüp duruyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `yuzuk` 0 sn | Konsol, kase; yüzüklü el konsolun üstünde | — |
| 12–45 | kurgu | `yuzuk` 0→4 sn | Diğer el yüzüğü çevirip parmaktan çıkarır; parmakta soluk iz | — |
| 45–75 | kurgu | `yuzuk` 4→son | Yüzüğü kasenin üstünde tutar, durur, bırakır; yüzük anahtarların yanında döner, durur | — |
| 75–100 | geçiş | son kare | Kasedeki yüzüğe yaklaşma, krem seramik krem zemine döner | **Bir kararın eşiğindeyseniz** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur.

## 4. Açıldığı site bölümü

**Başlık:** Bir kararın eşiğindeyseniz

**İlk paragraf:** Bir evliliği bitirme kararı, dışarıdan bir imza gibi görünse de içeride uzun ve yorucu bir süreçtir: tereddüt, suçluluk, korku ve bazen de rahatlama iç içe geçer. İster kararı hâlâ tartıyor olun ister süreç çoktan başlamış olsun, terapide duygularınızı düzenlemenize ve kendiniz için en sağlıklı adımları atmanıza birlikte eşlik ederiz.

**Alt bölümler (metin uzmanla yazılacak):**
- Kalmak ya da gitmek: karar sürecinde destek
- Evlilik öncesi danışmanlık: sorunları önceden konuşmak
- Boşanma sonrası kendinizi yeniden kurmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede kasedeki yüzüğün yeri ölçülür; `transform-origin` o nokta, ölçek 1→9, parlaklık artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/evlilik-oncesi-ve-bosanma/yuzuk/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/evlilik-oncesi-ve-bosanma/yuzuk/` → `kf-baslangic.jpg`, `yuzuk.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — EV GİRİŞİ — AKŞAM`
- **Kurallar:** Yüz yok; sadece eller. Marka ya da okunur yazı yok.
