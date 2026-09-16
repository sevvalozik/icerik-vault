<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const kampanya = await tp.system.prompt("Kampanya / görsel seti adı");
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
const kslug = slugify(kampanya);
await tp.file.move("07-AI-Gorsel/" + slug + "/" + kslug + "-gorsel-brief");
-%>
---
type: gorsel-brief
client: "<% musteriAdi %>"
slug: <% slug %>
kampanya: "<% kampanya %>"
kullanim: "reels-kapak / feed / story / web-hero / sunum / keyframe"
oran: "9:16"
model_birincil: gemini
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [ai-gorsel, brief, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]", "[[07-AI-Gorsel/<% slug %>/gorsel-log]]"]
---

# <% musteriAdi %> — <% kampanya %> — AI Görsel Brief

> Formül: [[gorsel-prompt-formulu]]. Ürün gerçekse fotoğrafını yükle, tarif ettirme.

## 1. Amaç

- **Nerede kullanılacak:** 
- **Kaç adet, hangi oran:** 
- **Üstüne yazı gelecek mi, nereye:** 

## 2. Marka çapası

- Marka brief: [[00-Musteriler/<% slug %>/marka-brief]]
- **Grade satırı (EN):** 
- **Referans görsel:** `03-Assets/images/<% slug %>/`
- **Negatif:** 

## 3. Kartlar

| Kart | EN metin | Yüklenecek dosya |
|---|---|---|
| PRODUCT SHEET | `` | |
| LOCATION SHEET | `` | — |

## 4. Görsel listesi

| # | Kullanım | Oran | Kompozisyon notu | Model | Durum |
|---|---|---|---|---|---|
| 1 | | | | | ☐ |

## 5. Promptlar

### Görsel 1 — 
```text
```
- Model / ayar: 
- Yüklenen referans: 

## 6. Post

- [ ] Yazı/logo marka fontuyla (Canva / Figma / Claude Design)
- [ ] Dosya: `03-Assets/images/<% slug %>/<% slug %>-<% kslug %>-01.png`
- [ ] Log'a işlendi

## 7. Üretim logu

| Tarih | # | Model | Prompt varyantı | Dosya | Puan | Not |
|---|---|---|---|---|---|---|
| | | | | | | |
