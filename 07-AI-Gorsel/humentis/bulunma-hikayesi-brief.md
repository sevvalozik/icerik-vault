---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Bulunma hikâyesi — psikolog ikna filmi"
kullanim: "sunum / scroll film karesi (+ isteğe bağlı I2V klip)"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, sunum, bulunma, karakter]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[humentis-bulunma-hikayesi]]", "[[07-AI-Gorsel/humentis/gorsel-log]]", "[[gorsel-prompt-formulu]]", "[[tutarlilik-rehberi]]"]
---

# Humentis — Bulunma Hikâyesi — AI Görsel Brief

> 28 Eylül 2026 güncellemesi: yüz gösteren 6 kare (A1, B1, C1, A3, B3, C3) arkadan/eller kadrajına çevrildi — Şevval'in isteği, marka brief'e uyum.

> Film: `01-Presentations/active/humentis-bulunma-hikayesi/film.html` · Not: [[humentis-bulunma-hikayesi]]
> Bu brief'teki 14 kare üretilip aşağıdaki **dosya adlarıyla** `03-Assets/images/humentis/bulunma/` klasörüne konunca film onları kendiliğinden alır (`.jpg`, `.png` veya `.webp`). Aynı ada `.mp4` klip konursa film fotoğraf yerine klibi oynatır.

## 1. Amaç

- **Nerede kullanılacak:** Psikologlara canlı gösterilecek kaydırmalı "kısa film" sunumu (patronlara/danışanlara değil).
- **Kaç adet, hangi oran:** 14 kare, **16:9**, en az 1920×1080. Film kareleri 2.39:1 sinemaskop bantla kırpıyor → **önemli her şey karenin orta yatay bandında** kalmalı (üst/alt %12'ye yüz, el, telefon koyma).
- **Üstüne yazı gelecek mi:** Evet, filmde HTML ile (altyazı alt ortada; "bulma" karelerinde alıntı **sol alt** üçte birde → A3/B3/C3'te figür/eller **sağ üçte birde** olsun).

## 2. Marka çapası ve bilinçli istisna

- Marka brief: [[00-Musteriler/humentis/marka-brief]]
- **Yüz kuralı (28 Eylül 2026, Şevval):** Hiçbir karede **yüz görünmez** — karakterler yalnızca arkadan, omuz üstünden, eller ya da silüet olarak. Bu, marka brief'in "AI'da insan ya hiç yok ya da arkadan/eller" kuralıyla uyumlu; duygu el, omuz ve nefesle anlatılır. Karakterler kurgusal ve yetişkin (en genç 22), çocuk/ergen yok, ağlama/kriz/hastane yok. Film iç sunum olduğu için kareler yine de kamuya açık kanallarda marka onayı olmadan kullanılmaz.
- **Gece grade satırı (EN):** `cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain`
- **Sabah/gündüz grade satırı (EN, marka brief'ten birebir):** `muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness`
- **Ekran kuralı:** telefon/laptop ekranında AI arayüz **yok** → `the phone screen is a soft blank glow, out of focus, no readable content`. Aranan cümle ve bulunan başlık filmde HTML ile yazılıyor.
- **Negatif (hepsine):** `visible face, facial features, eyes, face in profile, face reflection, text, letters, captions, subtitles, readable screen, app interface, logo, watermark, extra fingers, deformed hands, plastic skin, crying, hospital, medical equipment, pills, children, teenager, pastel pink, lavender, purple gradient, neon, horror lighting, harsh flash, stock photo smile, cartoon, 3d render look`

## 3. Kartlar (her promptta KELİMESİ KELİMESİNE)

| Kart | EN metin |
|---|---|
| DENİZ (A) | `a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie` |
| ECE (B) | `a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band` |
| SELİM (C) | `a man in his early forties, short dark hair greying at the temples, a neatly trimmed short beard, wearing a navy wool overcoat over a light blue shirt with a loosened dark tie` |
| MEKAN A | `a small rented student room in Ankara: a wooden desk under a window, stacks of lecture notes and a closed laptop, a desk lamp switched off, a single potted plant on the sill` |
| MEKAN B | `a modest apartment kitchen: a warm oak counter, two ceramic mugs, a window with distant city lights, a doorway to a dark hallway` |
| MEKAN C | `the driver's seat of a parked mid-size sedan in an open-air office car park at night, cool white street lamps, the engine off` |
| DEFTER | `an open hardcover appointment book with blank lined cream pages on a warm oak desk, a black fountain pen, a small plant, soft daylight through linen curtains` |

> Tutarlılık: her karakterin ilk karesini (A1/B1/C1) üret → beğenilen kareyi sonraki karelere **referans görsel** olarak yükle ("same woman as the reference image, same clothes"). Bkz. [[tutarlilik-rehberi]] §3.

## 4. Görsel listesi

| # | Dosya adı | Film anı | Kompozisyon | Model | Durum |
|---|---|---|---|---|---|
| 1 | `humentis-bulunma-o1` | Açılış — Ankara gece | geniş, pencereler | Gemini | ☐ |
| 2 | `humentis-bulunma-a1` | Deniz — gece, yalnızlık | geniş, arkadan, figür küçük | Gemini | ☐ |
| 3 | `humentis-bulunma-b1` | Ece — gece, yalnızlık | orta plan, arkadan | Gemini | ☐ |
| 4 | `humentis-bulunma-c1` | Selim — gece, yalnızlık | arka koltuktan | Gemini | ☐ |
| 5 | `humentis-bulunma-a2` | Deniz — arama | omuz üstü | Gemini | ☐ |
| 6 | `humentis-bulunma-b2` | Ece — arama | omuz üstü | Gemini | ☐ |
| 7 | `humentis-bulunma-c2` | Selim — arama | omuz üstü | Gemini | ☐ |
| 8 | `humentis-bulunma-a3` | Deniz — fark etme | eller: kalemi bırakıyor, sağda | Gemini | ☐ |
| 9 | `humentis-bulunma-b3` | Ece — fark etme | arkadan: ilk kez oturuyor, sağda | Gemini | ☐ |
| 10 | `humentis-bulunma-c3` | Selim — fark etme | arkadan: başı koltuğa düşüyor, sağda | Gemini | ☐ |
| 11 | `humentis-bulunma-a4` | Deniz — sabah | orta, arkadan | Gemini | ☐ |
| 12 | `humentis-bulunma-b4` | Ece — sabah | detay, eller | Gemini | ☐ |
| 13 | `humentis-bulunma-c4` | Selim — gündüz | geniş, arkadan | Gemini | ☐ |
| 14 | `humentis-bulunma-defter` | Randevu defteri | üstten, defter sağda | Gemini | ☐ |

## 5. Promptlar

### 1 — O1 · Açılış: Ankara, gece
```text
Cinematic documentary still, photorealistic. A wide shot of mid-rise Ankara apartment blocks after midnight, most windows dark, five or six windows scattered across the facades still softly lit with warm lamp light, a quiet empty street below with a single street lamp. Composition: buildings fill the central horizontal band, calm negative space above. 35mm lens, deep focus, slightly elevated camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9, high resolution. No people visible, no text, no signage, no logos, no neon.
```

### 2 — A1 · Deniz, gece — yalnızlık
```text
Cinematic film still, photorealistic. A small rented student room in Ankara: a wooden desk under a window, stacks of lecture notes and a closed laptop, a desk lamp switched off, a single potted plant on the sill. Seen strictly from behind, a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, sits hunched at the desk with her back to the camera, her shape silhouetted against the dark window, a phone glowing beside the notes. Wide shot, she is small in the frame, right of centre, the room around her feels large and still. 28mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. Her face is never visible. No text, no readable screen, no logos.
```

### 3 — B1 · Ece, gece — yalnızlık
```text
Cinematic film still, photorealistic. A modest apartment kitchen: a warm oak counter, two ceramic mugs, a window with distant city lights, a doorway to a dark hallway. Seen from behind, a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band, stands facing the window, both hands pressed on the counter, shoulders raised and tense. One mug untouched beside her. Medium shot, she is left of centre, 50mm lens, shallow depth of field, static camera. Only the cool light from the window. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. Her face is never visible, no reflection of her face in the window. No text, no logos.
```

### 4 — C1 · Selim, gece — yalnızlık (arka koltuktan)
```text
Cinematic film still, photorealistic. Shot from the back seat: the driver's seat of a parked mid-size sedan in an open-air office car park at night, cool white street lamps, the engine off. In the driver's seat, seen only from behind, a man in his early forties, short dark hair greying at the temples, a neatly trimmed short beard, wearing a navy wool overcoat over a light blue shirt with a loosened dark tie: the back of his head, his shoulders and both hands resting on the steering wheel. Beyond the windscreen, empty parking spaces and lamp light. 35mm lens, static camera, slight depth of field. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. His face is never visible, not in the rear-view mirror either. No text, no licence plates, no logos, no car brand badges.
```

### 5 — A2 · Deniz — arama (omuz üstü)
```text
Cinematic film still, photorealistic. Over-the-shoulder shot from behind a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, holding a phone in both hands above the desk and typing with her thumbs. The phone screen is a soft blank glow, out of focus, no readable content. Blurred lecture notes below, a dark window beyond. Her shoulder and hair frame the left of the image, the phone sits in the central band. 50mm lens, shallow depth of field, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. No text, no interface, no logos.
```

### 6 — B2 · Ece — arama (omuz üstü)
```text
Cinematic film still, photorealistic. Over-the-shoulder close shot of a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band, standing at a warm oak kitchen counter, typing on a phone held low in both hands; the gold ring catches the screen light. The phone screen is a soft blank glow, out of focus, no readable content. A ceramic mug blurred in the foreground, window with distant city lights beyond. 85mm lens, shallow depth of field, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. No text, no interface, no logos.
```

### 7 — C2 · Selim — arama (omuz üstü)
```text
Cinematic film still, photorealistic. Over-the-shoulder shot from the passenger side of a parked car at night: a man in his early forties, short dark hair greying at the temples, a neatly trimmed short beard, wearing a navy wool overcoat over a light blue shirt with a loosened dark tie, holds a phone against the top of the steering wheel and types with one thumb. The phone screen is a soft blank glow, out of focus, no readable content. Dashboard dark, cool white street lamps blurred through the windscreen. 50mm lens, shallow depth of field, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. No text, no interface, no dashboard graphics, no logos.
```

### 8 — A3 · Deniz — fark etme (eller)
```text
Cinematic film still, photorealistic. Close-up on hands at a wooden desk covered in lecture notes: the left hand of a young woman in an oversized heather-grey hoodie finally lets go of a pen she was gripping tightly, fingers uncurling, the pen rolling onto the notes; her right hand holds a phone whose screen is a soft blank glow, out of focus, no readable content. The hands sit in the right third of the frame; the left two-thirds fall into soft darkness. 85mm lens, very shallow depth of field, natural skin texture. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. No face, no text, no logos.
```

### 9 — B3 · Ece — fark etme (arkadan)
```text
Cinematic film still, photorealistic. Seen from behind and slightly to the side, a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band, has just sat down on a kitchen stool for the first time tonight; her shoulders have dropped, and she holds a phone loosely against her chest with the ringed hand, its glow spilling on the cardigan. The figure sits in the right third of the frame; the left two-thirds is dark kitchen with distant blurred city lights. 50mm lens, shallow depth of field, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. Her face is never visible. No text, no logos.
```

### 10 — C3 · Selim — fark etme (arkadan)
```text
Cinematic film still, photorealistic. From the back seat of a parked car at night: a man in a navy wool overcoat, short dark hair greying at the temples, leans his head back against the headrest, seen only from behind; one hand has dropped from the steering wheel into his lap, loosely holding a phone whose soft blank glow lights his coat sleeve. His head and shoulders sit in the right third of the frame; the left side shows the dark windscreen and blurred street lamps. 35mm lens, shallow depth of field, static camera. Cool blue-teal night grade, deep petrol-green shadows, the phone or window glow as the soft key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9. His face is never visible, not in the mirror either. No text, no logos.
```

### 11 — A4 · Deniz — sabah
```text
Cinematic film still, photorealistic. A small rented student room in Ankara: a wooden desk under a window, stacks of lecture notes and a closed laptop, a desk lamp switched off, a single potted plant on the sill. Morning: the curtain has just been pulled open and soft early daylight falls across the desk and the notes. Seen from behind, a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, stands at the window holding a mug, her phone resting calmly on the desk. Medium-wide shot, 35mm lens, static camera. Soft warm window light from the left. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. 16:9. No text, no logos, no face visible.
```

### 12 — B4 · Ece — sabah (detay)
```text
Cinematic film still, photorealistic. Close detail on a warm oak kitchen counter in soft morning daylight: two ceramic mugs of fresh coffee side by side, steam rising. From the left, a woman's hand with a thin gold wedding band and an oatmeal knit cardigan sleeve rests near one mug; from the right, a man's hand in a plain grey sweater sleeve rests near the other, the two hands close but not touching. Window light from behind, a small plant blurred in the background. 85mm lens, shallow depth of field, static camera, top-down angle of about 45 degrees. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. 16:9. No faces, no text, no logos, no extra hands.
```

### 13 — C4 · Selim — gündüz
```text
Cinematic film still, photorealistic. A calm tree-lined residential street in Çankaya, Ankara, late morning sun, autumn plane trees, cream stone apartment facades. Seen from behind, a man in his early forties, short dark hair greying at the temples, a neatly trimmed short beard, wearing a navy wool overcoat over a light blue shirt with a loosened dark tie, walks unhurriedly along the pavement away from camera toward a building entrance with a pale oak door. Wide shot, he is small in the central band, right of centre, long soft shadows. 35mm lens, deep focus, static camera at eye level. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. 16:9. No text, no signage, no logos, no face visible.
```

### 14 — DEFTER · Randevu defteri
```text
Cinematic still life, photorealistic, top-down view. An open hardcover appointment book with blank lined cream pages on a warm oak desk, a black fountain pen, a small plant, soft daylight through linen curtains. The open book fills the right half of the frame and is perfectly flat and square to the camera, its right-hand page clean and empty; the left side of the frame shows oak grain, the pen and the corner of a sage-green armchair cushion. 50mm lens, even focus, static overhead camera. Soft warm window light from the top left. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. 16:9. No handwriting, no text, no numbers, no logos, no hands.
```
> Film satırları sağ sayfaya yazıyor. Kare geldiğinde yazılar sayfaya oturmazsa `uzmanlar/genel.js` → `defter.alan` değerlerini (% sol/üst/genişlik/yükseklik) değiştir.

## 6. İsteğe bağlı: I2V hareket satırları (Kling / Veo / Runway, 4–6 sn)

Fotoğraf yeterli; film zaten yavaş zoom/pan yapıyor. Daha "film" istersen kareyi başlangıç karesi yap, bu satırı ver, çıktıyı aynı adla `.mp4` kaydet:

| Kare | Hareket promptu (EN) |
|---|---|
| O1 | `Very slow push-in. One more window light switches off. Nothing else moves.` |
| A1 | `Static camera. She slowly turns a page, then stops. The phone screen glow flickers softly.` |
| B1 | `Static camera. She breathes slowly, fingers tightening then loosening on the counter edge.` |
| C1 | `Static camera. Street lamp light drifts slightly on the windscreen. He does not move.` |
| A2 / B2 / C2 | `Static camera. Thumbs type slowly, pause, type again. Screen remains a blank glow.` |
| A3 | `Static camera. The fingers slowly uncurl and release the pen; it rolls a little. Nothing else moves.` |
| B3 | `Static camera. Her shoulders lower with one slow breath. Nothing else moves.` |
| C3 | `Very slow push-in. His head settles back against the headrest; one slow breath.` |
| A4 | `Static camera. Curtain moves gently in the breeze; daylight shifts softly across the desk.` |
| B4 | `Static camera. Steam rises from both mugs. The hands stay still.` |
| C4 | `Static camera. He walks slowly away toward the door. Leaves move gently.` |
| DEFTER | `Static overhead camera. Daylight shifts very slightly across the page. Nothing else moves.` |

## 7. Post

- [ ] Yazı/logo yok — tüm metinler film içinde HTML
- [ ] Dosya adları yukarıdaki tabloyla birebir, klasör: `03-Assets/images/humentis/bulunma/`
- [ ] Log'a işlendi: `07-AI-Gorsel/humentis/gorsel-log.md`

## 8. Üretim logu

| Tarih | # | Model | Prompt varyantı | Dosya | Puan | Not |
|---|---|---|---|---|---|---|
| | | | | | | |
