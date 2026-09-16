---
type: gorsel-log
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-16
tags: [ai-gorsel, log, nefinbeauty]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[c-vitamini-serum-kampanya-brief]]"]
---

# Nefin Beauty — Görsel Logu

> `03-Assets/images/nefin-beauty/` kaydı. Boyutlar ölçüldü (16 Eylül 2026). Promptlar kaydedilmemiş (❓); bundan sonra her üretim buraya işlenir.

## AI üretimi (Gemini)

| Dosya | Boyut / oran | İçerik | Prompt | Kullanım / puan |
|---|---|---|---|---|
| `Gemini_Generated_Image_fqpt5kfqpt5kfqpt.png` | 2604×1632 (16:10) | Tam ürün ailesi (amber serumlar, tonik, krem, saşeler) keten + terrazzo + seramik vazo, pampas | ❓ | Ürün ailesi vitrini; 4/5 — ürün adedi çok, etiketler AI |
| `Gemini_Generated_Image_o93qqso93qqso93q.png` | 2604×1632 | Aynı sahnenin varyantı (ahşap masa) | ❓ | 4/5 |
| `Gemini_Generated_Image_uuhqycuuhqycuuhq.png` | 2604×1632 | Ürün ailesi, traverten zemin, "CC" kutu görünüyor | ❓ | 4/5 |
| `Gemini_Generated_Image_n99ji7n99ji7n99j.png` | 1301×816 (16:10) | "Nefin Cosmetics — Cildinizin Doğal Işıltısıyla Tanışın" hero konsepti, tonik + serum traverten üstünde, yazı AI | ❓ | Ana sayfa hero konsepti; yazı **onaysız slogan**, 3/5 (düşük çözünürlük) |
| `Gemini_Generated_Image_nqz1y7nqz1y7nqz1.jpeg` | 2752×1536 (16:9) | Hasır sepette 3 ürün, "NEFIN cosmetics" logo AI çizimi | ❓ | 3/5 — logo AI, kullanılmaz |
| `Gemini_Generated_Image_ogdjmvogdjmvogdj.jpeg` | 2750×1536 (16:9) | "Her Damlayla Parla — Vitamin C Gücü": el pipetle damla, portakal dilimi, ahşap | ❓ | Vitamin C anlatımı; 4/5 — yazı AI, slogan onaysız |
| `Gemini_Generated_Image_v6mmxav6mmxav6mm.jpeg` | 800×1304 (~9:15) | Telefonda "Nefin Cosmetics" WhatsApp sohbet mockup'ı (ürün kartları + fiyatlar) | ❓ | WhatsApp satış botu demosu; **fiyatlar/ürünler gerçek değil** |

## Gerçek / seçilmiş

| Dosya | Boyut | İçerik | Not |
|---|---|---|---|
| `nefin_hero.png` | 1280×803 | Seçilen hero (n99ji7 varyantının büyütülmüş hali gibi görünüyor) | Yazı AI; final hero'da yazı Cambria ile yeniden basılmalı |
| `nefin_24k_gold_tonic.jpg` | 403×1439 | Gerçek ürün: 24K Gold Tonic, bordo/kadife zemin | **Eski stil** (bordo yasak) — sadece form referansı; I2V için yeni krem-zemin çekim gerekli |
| `nefin_anti_acne_serum.jpg` | 280×700 | Gerçek ürün: Anti-Acne Serum, bordo zemin | aynı |
| `nefin_daily_moisture_cream.jpg` | 519×1382 | Gerçek ürün: Daily Moisture Cream (beyaz pompalı, altın kapak), bordo zemin | aynı |

## Gözlemler

1. Hiçbir görselin promptu yok → bundan sonra [[gorsel-brief-template]] ile.
2. Tüm AI görseller **yatay**; reels/story için 9:16 üretim yok. Video keyframe'leri 9:16 üretilmeli.
3. Gerçek ürün fotoğrafları düşük çözünürlük ve eski (bordo) stil. **Öncelik:** krem zeminde, yüksek çözünürlüklü, düz ürün çekimi (müşteriden ya da stüdyo) → her AI işinin temeli.
4. AI görsellerdeki yazı/slogan/logo onaysız; müşteriye gösterirken "taslak" ibaresi.

## Yeni kayıt şablonu

| Tarih | Dosya | Model | Prompt (brief → görsel no) | Oran | Kullanım | Puan |
|---|---|---|---|---|---|---|
| | `nefin-<kampanya>-kf01.png` | Gemini (Nano Banana Pro) | | 9:16 | video keyframe | |
