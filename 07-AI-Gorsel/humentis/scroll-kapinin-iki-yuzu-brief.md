---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kapının İki Yüzü"
kullanim: "scroll site karesi + video"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, kapinin-iki-yuzu]
related: ["[[kapinin-iki-yuzu]]", "[[teknik-spec]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Kapının İki Yüzü — AI Görsel Brief

> Hikâye: [[kapinin-iki-yuzu]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/ergen-ve-ebeveyn/kapinin-iki-yuzu/` · Dosya adı = kod + `.jpg` (videolar aynı adla `.mp4`, şeffaf görseller `.png`).

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet.**
2. Karakterin ilk karesini üret, en iyisini seç; sonraki karelerde referans olarak yükle ve başa ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonu** (büyük boyut).
4. Kaçırırsa sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`
5. Sonra her kareyi aşağıdaki hareket promptuyla videoya çevir (Veo / Kling, image-to-video, sessiz, 16:9).

## Karakter kartları (birebir)

- **MURAT:** `a man in his late forties, an accountant, short greying hair, slightly broad shoulders, wearing a dark green knit sweater and grey trousers`

## Kareler

| # | Kod | Sahne | Durum |
|---|---|---|---|
| 1 | `koridor-baba` | Koridor, Murat arkadan kapının önünde | ☐ |
| 2 | `koridor-yaslanmis` | Murat alnını kapıya yaslamış | ☐ |
| 3 | `oda-genel` | Defne'nin odası, akşam, kimse yok | ☐ |
| 4 | `defter` | Masada açık çizim defteri, karakalem çizimler | ☐ |
| 5 | `belge` | Duvarda çerçeveli belge | ☐ |
| 6 | `cekmece` | Aralık çekmecede katlanmış kâğıt | ☐ |
| 7 | `kapi-aralik` | Koridordan, birkaç santim aralık kapı, iki ışık | ☐ |
| 8 | `kapi-serit` | Kapı kenarı şeridi (şeffaf yapılacak) | ☐ |

## Promptlar

### 1 — `koridor-baba`

Koridor, Murat arkadan kapının önünde · **Referans:** —

```text
Cinematic film still, photorealistic. An apartment hallway in the evening, lit by a warm yellow ceiling lamp. Seen strictly from behind, a man in his late forties, an accountant, short greying hair, slightly broad shoulders, wearing a dark green knit sweater and grey trousers, stands in front of a closed white bedroom door, his right hand half-raised as if about to knock. The door fills the right part of the frame. Medium shot. 35mm lens, static camera at eye level. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. The face is never visible. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 2 — `koridor-yaslanmis`

Murat alnını kapıya yaslamış · **Referans:** koridor-baba

```text
Cinematic film still, photorealistic. The same hallway in the evening. a man in his late forties, an accountant, short greying hair, slightly broad shoulders, wearing a dark green knit sweater and grey trousers, seen from behind, leans his forehead and one hand against the closed white bedroom door, head bowed, shoulders slumped. Medium close shot. 50mm lens. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. The face is never visible. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 3 — `oda-genel`

Defne'nin odası, akşam, kimse yok · **Referans:** —

```text
Cinematic film still, photorealistic. A sixteen-year-old's bedroom in the evening, lit by a cool white desk lamp: an unmade bed, headphones on the pillow, a desk by the window with an open sketchbook and pencils, a small framed certificate on the wall, a half-open desk drawer, a few art prints taped to the wall. Nobody in the room. Medium-wide shot from near the door. 28mm lens. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. No teenager, no child, no person in the teenager's room, no hands, no silhouette. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 4 — `defter`

Masada açık çizim defteri, karakalem çizimler · **Referans:** oda-genel

```text
Cinematic film still, photorealistic, close-up top-down. An open sketchbook on a wooden desk under a cool white desk lamp: beautiful, detailed graphite pencil drawings of city rooftops seen from a balcony, a cat sleeping on a windowsill, and a pair of men's reading glasses left on a table. Pencils and an eraser beside it. 50mm lens, shallow depth of field. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. No teenager, no child, no person in the teenager's room, no hands, no silhouette. No written words. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 5 — `belge`

Duvarda çerçeveli belge · **Referans:** oda-genel

```text
Cinematic film still, photorealistic, close shot. A simple framed school certificate hanging on a bedroom wall with a small ribbon rosette pinned beside it, lit by a cool desk lamp; the certificate text is illegible and softly out of focus. Art prints taped on the wall around it. 85mm lens, shallow depth of field. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. No teenager, no child, no person in the teenager's room, no hands, no silhouette. No readable text. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 6 — `cekmece`

Aralık çekmecede katlanmış kâğıt · **Referans:** oda-genel

```text
Cinematic film still, photorealistic, close shot from above. A half-open wooden desk drawer containing pencils, a phone charger and a single folded sheet of cream paper lying on top, slightly unfolded, blank at the top with space for a handwritten word. Cool desk lamp light. 50mm lens, shallow depth of field. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. No teenager, no child, no person in the teenager's room, no hands, no silhouette. No writing on the paper. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 7 — `kapi-aralik`

Koridordan, birkaç santim aralık kapı, iki ışık · **Referans:** koridor-baba

```text
Cinematic film still, photorealistic. The same hallway in the evening, the white bedroom door now open a few centimetres; a thin blade of cool white light from inside the room falls across the warm yellow hallway floor, the two lights meeting. a man in his late forties, an accountant, short greying hair, slightly broad shoulders, wearing a dark green knit sweater and grey trousers stands beside the door seen from behind, one hand on the door frame. Nobody visible inside the room. 35mm lens. Evening interior light: warm yellow hallway lamp versus cool white desk lamp, muted low-saturation grade, deep petrol-green shadows, filmic softness. The face is never visible. High resolution, photorealistic. No text, no logos, no watermark, no readable screens. 16:9.
```

### 8 — `kapi-serit`

Kapı kenarı şeridi (şeffaf yapılacak) · **Referans:** —

```text
Photograph of the vertical edge of a white painted interior door with its hinge side, seen straight on, a tall narrow strip isolated on a plain seamless flat medium-grey studio background, even soft light. Vertical 1:4, high resolution, photorealistic. No text, no people.
```

## Hareket (video) promptları

- **Mod:** `loop` = arka planda sürekli, hafif · `scrub` = scroll'a bağlı, kaydırdıkça ilerler.
- Videoları aynı adla `.mp4` olarak koy ve **Claude'a söyle**: scrub için özel kodlama yapılır ([[teknik-spec]] §4b).

| Kod | Mod | Süre (sn) | Hareket promptu |
|---|---|---|---|
| `koridor-baba` | scrub | 5 | `Static camera. The man slowly raises his hand toward the door, hesitates, lowers it, then raises it again. The face never becomes visible. Nothing else changes. No text.` |
| `koridor-yaslanmis` | loop | 5 | `Static camera. The man leans his forehead against the door and breathes slowly; his shoulders rise and fall. The face never becomes visible. Nothing else changes. No text.` |
| `oda-genel` | loop | 5 | `Static camera. The desk lamp light is steady, the curtain moves slightly; headphones on the pillow. Nobody enters the room. The face never becomes visible. Nothing else changes. No text.` |
| `defter` | loop | 4 | `Very slow top-down drift across the open sketchbook drawings; a pencil rolls slightly. The face never becomes visible. Nothing else changes. No text. No hands.` |
| `cekmece` | scrub | 4 | `Static camera. The drawer slides open a little further, revealing the folded paper. The face never becomes visible. Nothing else changes. No text. No hands.` |
| `kapi-aralik` | scrub | 5 | `Static camera. The door opens slowly by a few centimetres; the cool light from the room widens across the warm hallway floor. The face never becomes visible. Nothing else changes. No text. Nobody visible inside the room.` |

## Notlar

- **Defne hiçbir karede yok.** Odada kişi, el, silüet olmamalı.
- Belge ve nottaki yazılar görselde okunaksız/boş kalır; *Babama,* yazısını site HTML ile ekler.
- `kapi-serit`: Önizleme → Araçlar → Arka Planı Kaldır → PNG olarak `kapi-serit.png`.
- `belge` videoya çevrilmez (duran kare yeterli).

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
