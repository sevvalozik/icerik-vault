---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — İki Oda"
kullanim: "scroll site karesi + video"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, iki-oda]
related: ["[[iki-oda]]", "[[teknik-spec]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: İki Oda — AI Görsel Brief

> Hikâye: [[iki-oda]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/ergen-ve-ebeveyn/iki-oda/` · Dosya adı = kod + `.jpg` (videolar aynı adla `.mp4`, şeffaf görseller `.png`).

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet.**
2. Karakterin ilk karesini üret, en iyisini seç; sonraki karelerde referans olarak yükle ve başa ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonu** (büyük boyut).
4. Kaçırırsa sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`
5. Sonra her kareyi aşağıdaki hareket promptuyla videoya çevir (Veo / Kling, image-to-video, sessiz, 16:9).

## Karakter kartları (birebir)

- **GÜL:** `a woman in her mid-forties, a school teacher, shoulder-length dark hair with a few grey strands tied loosely, wearing a soft grey cardigan over a dark t-shirt`

## Kareler

| # | Kod | Sahne | Durum |
|---|---|---|---|
| 1 | `kesit` | Evin kesiti (bebek evi), gece | ☐ |
| 2 | `iki-oda` | Kesitte sadece iki yatak odası, aradaki duvar ortada | ☐ |
| 3 | `iki-oda-lamba-kapali` | Aynısı, sağ odada lamba kapalı | ☐ |
| 4 | `gul-oda` | Gül arkadan yatağın kenarında, telefon elinde | ☐ |
| 5 | `duvar-gul` | Gül başını duvara yaslamış | ☐ |

## Promptlar

### 1 — `kesit`

Evin kesiti (bebek evi), gece · **Referans:** —

```text
Cinematic architectural cutaway photograph, photorealistic, like a life-size dollhouse: the front wall of a modest Ankara apartment has been removed so we see three rooms side by side at night. Left: a small dining room with a table, one plate pushed away, chairs slightly askew, light off except a dim kitchen glow. Centre: a parents' bedroom with a warm bedside lamp on, a woman sitting on the edge of the bed seen from behind. Right: a teenager's bedroom with a desk lamp on, a glowing phone face-up on the desk, posters and an unmade bed, and nobody in it. Thin interior walls separate the rooms. Straight-on frontal view, 24mm lens, deep focus, wide 3:2 composition with space around the building. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. No teenager, no child, no person in the right-hand's room, no hands, no silhouette. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 3:2.
```

### 2 — `iki-oda`

Kesitte sadece iki yatak odası, aradaki duvar ortada · **Referans:** kesit

```text
Edit this image. Frame only the two bedrooms from the reference cutaway: the parents' bedroom on the left with the woman on the edge of the bed seen from behind, the empty teenager's room on the right with the desk lamp and the glowing phone. The thin wall between the two rooms runs exactly down the vertical centre of the image. Keep everything else the same. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. No person in the right-hand room. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 3 — `iki-oda-lamba-kapali`

Aynısı, sağ odada lamba kapalı · **Referans:** iki-oda

```text
Edit this image. Keep everything exactly the same, except: in the right-hand room the desk lamp is switched off and the phone screen is dark, so that room is almost black. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 4 — `gul-oda`

Gül arkadan yatağın kenarında, telefon elinde · **Referans:** iki-oda

```text
Cinematic film still, photorealistic. A parents' bedroom at night, a warm bedside lamp. Seen strictly from behind and slightly above the shoulder, a woman in her mid-forties, a school teacher, shoulder-length dark hair with a few grey strands tied loosely, wearing a soft grey cardigan over a dark t-shirt, sits on the edge of the bed holding a phone in both hands; the screen is a soft blank glow with no readable content. Medium close shot. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 5 — `duvar-gul`

Gül başını duvara yaslamış · **Referans:** gul-oda

```text
Cinematic film still, photorealistic. The same bedroom at night. a woman in her mid-forties, a school teacher, shoulder-length dark hair with a few grey strands tied loosely, wearing a soft grey cardigan over a dark t-shirt sits on the bed with her back to the camera and turned toward the side wall, the side of her head resting against the plain cream wall, her hair covering her face; a phone lies face-down on the bed beside her. Close shot, the wall fills the right half of the frame. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

## Hareket (video) promptları

- **Mod:** `loop` = arka planda sürekli, hafif · `scrub` = scroll'a bağlı, kaydırdıkça ilerler.
- Videoları aynı adla `.mp4` olarak koy ve **Claude'a söyle**: scrub için özel kodlama yapılır ([[teknik-spec]] §4b).

| Kod | Mod | Süre (sn) | Hareket promptu |
|---|---|---|---|
| `kesit` | scrub | 6 | `Very slow camera push-in toward the centre of the cutaway house; the lamps glow steadily; the woman sits still. The face never becomes visible. Nothing else changes. No text. No person in the right-hand room.` |
| `iki-oda` | loop | 5 | `Static camera. The phone glow in the right-hand room flickers softly; the woman on the left breathes slowly. The face never becomes visible. Nothing else changes. No text. No person in the right-hand room.` |
| `gul-oda` | loop | 5 | `Static close shot. The thumbs type slowly, stop, then press delete; the screen glow flickers. The face never becomes visible. Nothing else changes. No text.` |
| `duvar-gul` | loop | 5 | `Very slow push-in. The woman rests her head against the wall and breathes out slowly. The face never becomes visible. Nothing else changes. No text.` |

## Notlar

- **Arda hiçbir karede yok:** sağ odada kişi, el, silüet olmamalı. Gemini birini eklerse yeniden üret.
- `kesit` geniş (3:2) üretilir ki kamera içinde gezebilsin; `iki-oda` ve `iki-oda-lamba-kapali` düzenleme promptlarıdır, önce `kesit`'i yükle.
- `iki-oda-lamba-kapali` videoya çevrilmez; geçiş kodla yapılır.

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
