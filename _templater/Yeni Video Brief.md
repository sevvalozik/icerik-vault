<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const kampanya = await tp.system.prompt("Kampanya / video adı (örn. Vitamin C Serum lansman)");
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
const kslug = slugify(kampanya);
await tp.file.move("06-AI-Video/" + slug + "/" + kslug + "-brief");
-%>
---
type: video-brief
client: "<% musteriAdi %>"
slug: <% slug %>
kampanya: "<% kampanya %>"
platform: reels
oran: "9:16"
hedef_sure: "20-30 sn"
model_birincil: kling
model_yedek: veo
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [ai-video, brief, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]", "[[06-AI-Video/<% slug %>/video-log]]"]
---

# <% musteriAdi %> — <% kampanya %> — AI Video Brief

> Sıra: 1 → 2 → 3 → 4 → 5. Önce [[prompt-formulu]] (30 sn kontrol), üretimden sonra [[kalite-kontrol]]. Hazır kurgular: [[sektor-receteleri]]. Ürün gerçekse [[tutarlilik-rehberi]] madde 1 zorunlu.

## 1. Amaç & mesaj

- **Tek cümlelik amaç:** 
- **İzleyici ne hissetsin / ne yapsın:** 
- **Platform / oran / süre:** Reels 9:16, 20–30 sn
- **Yayın tarihi:** 
- **Onay veren:** 

## 2. Marka çapası

- Marka brief: [[00-Musteriler/<% slug %>/marka-brief]]
- **AI Brief Bloğu** (brief'ten kopyala):

```text
```

- **Grade satırı (EN):** 
- **Negatif liste:** [[negatif-promptlar]] → 

## 3. Kartlar

| Kart | EN metin | Referans görsel (I2V başlangıç karesi) |
|---|---|---|
| PRODUCT SHEET | `` | `03-Assets/images/<% slug %>/` |
| CHARACTER SHEET | `` | — |
| LOCATION SHEET | `` | — |

## 4. Kurgu planı

| # | Sn | Çekim | Amaç | Kaynak | Model | Durum |
|---|---|---|---|---|---|---|
| 1 | 0–3 | | hook | AI | | ☐ |
| 2 | 3–9 | | ürün | AI I2V | | ☐ |
| 3 | 9–15 | | | | | ☐ |
| 4 | 15–21 | | | | | ☐ |
| 5 | 21–25 | logo + CTA | kapanış | post | — | ☐ |

**Ekran yazıları (post, marka fontu):**
- Hook: 
- Orta: 
- CTA: 

**Ses:** 

## 5. Shot promptları

### Shot 1 — 

**Varyant A**
```text
```
**Negatif**
```text
```
**Varyant B**
```text
```
- Model / mod: 
- Başlangıç karesi: 
- Süre / oran: 8 sn / 9:16

### Shot 2 — 

**Varyant A**
```text
```
**Negatif**
```text
```
- Model / mod: 

## 6. Post-prodüksiyon

- [ ] Klipler → `03-Assets/videos/<% slug %>/<% slug %>-<% kslug %>-s01-v1.mp4`
- [ ] Tek LUT / preset
- [ ] Yazı marka fontuyla, hook üstte sabit
- [ ] Logo end-card `03-Assets/logos/<% slug %>/`
- [ ] Müzik (lisans)
- [ ] Altyazı manuel
- [ ] 1080×1920, H.264, 30 fps

## 7. Üretim logu

| Tarih | Shot | Model / sürüm | Varyant | Seed | Dosya | Puan | Not |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## 8. Durum & onay

- **Durum:** draft
- **Müşteri geri bildirimi:** 
- **Öğrenilenler:** 
