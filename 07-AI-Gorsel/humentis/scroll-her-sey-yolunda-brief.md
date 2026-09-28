---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Her Şey Yolunda"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, her-sey-yolunda]
related: ["[[her-sey-yolunda]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Her Şey Yolunda — AI Görsel Brief

> Hikâye: [[her-sey-yolunda]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/her-sey-yolunda/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **CAN:** `a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `sunum-dis` | Dışarıdan: sunum, arkadan | Gemini | ☐ |
| 2 | `sunum-ic` | İçeriden: kürsüyü sıkan el | Gemini | ☐ |
| 3 | `alkis-dis` | Dışarıdan: alkış, hafifçe eğiliyor | Gemini | ☐ |
| 4 | `alkis-ic` | İçeriden: kilitli tuvalet, lavaboya dayanmış eller | Gemini | ☐ |
| 5 | `koridor-dis` | Dışarıdan: koridorda rahat yürüyüş | Gemini | ☐ |
| 6 | `koridor-ic` | İçeriden: pantolona silinen ıslak eller | Gemini | ☐ |
| 7 | `parti-dis` | Dışarıdan: doğum günü, mumlar ve kahkaha | Gemini | ☐ |
| 8 | `parti-ic` | İçeriden: masanın altında yanan telefon | Gemini | ☐ |
| 9 | `araba-dis` | Dışarıdan: direksiyonda, telefon hoparlörde | Gemini | ☐ |
| 10 | `araba-ic` | İçeriden: eklemleri beyazlamış el | Gemini | ☐ |

## Promptlar

### 1 — `sunum-dis`

Dışarıdan: sunum, arkadan · **Referans:** —

```text
Cinematic film still, photorealistic. A modern glass-walled meeting room in daylight. Seen strictly from behind, a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, stands at the front of the room presenting to a small audience seated at a long table; a large wall screen behind the audience glows softly and is out of focus. His posture is relaxed and confident, one hand gesturing. Medium-wide shot, he is left of centre. 35mm lens, static camera. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `sunum-ic`

İçeriden: kürsüyü sıkan el · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic, close-up. The right hand of a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie grips the edge of a light wooden lectern hard, knuckles pale and tendons visible, the navy suit sleeve and white shirt cuff at frame edge. The meeting room behind is soft and out of focus. 85mm lens, very shallow depth of field. Slightly cooler and darker than daylight, tense stillness. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 3 — `alkis-dis`

Dışarıdan: alkış, hafifçe eğiliyor · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic. The same meeting room. Seen strictly from behind, a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, gives a small polite nod to the audience as they applaud; blurred hands clapping around the table. Warm, successful moment. Medium-wide shot. 35mm lens. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 4 — `alkis-ic`

İçeriden: kilitli tuvalet, lavaboya dayanmış eller · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic. A small clean office restroom with pale tiles and a single sink. Seen from behind and above the shoulder, a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, leans forward with both hands braced on the edge of the white sink, head lowered, jacket slightly bunched at the shoulders. The mirror is out of frame; no reflection visible. Medium close shot. 35mm lens. Cool, quiet, slightly dim fluorescent light. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 5 — `koridor-dis`

Dışarıdan: koridorda rahat yürüyüş · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic. A bright modern office corridor. Seen from behind, a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, walks away from camera with relaxed shoulders, one hand in his trouser pocket, colleagues softly blurred in the distance. 35mm lens, static camera. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 6 — `koridor-ic`

İçeriden: pantolona silinen ıslak eller · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic, close-up. The hands of a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie wipe damp palms against the sides of navy suit trousers while walking, a few water droplets still on the fingers. Office corridor floor blurred behind. 85mm lens, shallow depth of field. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 7 — `parti-dis`

Dışarıdan: doğum günü, mumlar ve kahkaha · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic. A warm evening birthday gathering in a friend's living room: a round table, a homemade cake with lit candles, glasses, several adults' hands reaching in, soft fairy lights. a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, seen from behind, leans in lighting the last candle with a match, surrounded by laughter. Medium shot. 35mm lens. Warm amber practical light, low saturation. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 8 — `parti-ic`

İçeriden: masanın altında yanan telefon · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic, close-up under a table edge. The hand of a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie, navy sleeve, holds a phone low beneath the tablecloth edge, thumb hovering; the screen is a soft blank glow with no readable content. Above, out of focus, warm party lights and glasses. 85mm lens, very shallow depth of field. Cool screen light against warm background. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 9 — `araba-dis`

Dışarıdan: direksiyonda, telefon hoparlörde · **Referans:** sunum-dis

```text
Cinematic film still, photorealistic. Night, inside a left-hand-drive car (steering wheel on the left side) stopped at a red light in the city. Shot from the back seat behind the driver: a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie sits relaxed at the wheel, one hand resting on top of the wheel, the phone in a dashboard holder with a soft blank glow. Red traffic light blurred through the windscreen. 35mm lens. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 10 — `araba-ic`

İçeriden: eklemleri beyazlamış el · **Referans:** araba-dis

```text
Cinematic film still, photorealistic, close-up. The left hand of a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie grips the steering wheel of a car at night, knuckles white, tendons visible, navy sleeve and white cuff; red traffic light glow on the skin. 85mm lens, very shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

## Notlar

- Her sahnenin **dışarıdan** ve **içeriden** karesi aynı anı gösterir; mümkünse `-ic` karelerini `-dis` karesini referans vererek üret, ışık ve kıyafet eşleşsin.
- Araba **sol direksiyonlu** olmalı (filmdeki Selim kareleriyle aynı hata tekrarlanmasın).

## Hareket (video) promptları

Durağan kare sitede fotoğraf gibi duruyor; film hissi için her kare kısa bir videoya çevrilir (image-to-video). **Önce kareyi yukarıdaki promptla üret, sonra o kareyi başlangıç karesi olarak videoya ver.**

- **Model:** Gemini'deki Veo ("Video" modu, görsel yükle) ya da Kling (image-to-video). Runway'de prompt kısa tutulur.
- **Ses kapalı**, 16:9, 1080p, kamera hareketi yazılandan fazla olmasın.
- **Kaydet:** aynı klasöre, aynı adla `.mp4` (örn. `oda-gece.mp4`). Site `.mp4` varsa fotoğraf yerine onu kullanır.
- **Mod:** `loop` = arka planda sürekli, hafif · `scrub` = scroll'a bağlı: kaydırdıkça ilerler, geri kaydırınca geri gider.
- **Videoları koyunca Claude'a söyle:** scrub'ın akıcı olması için videoların özel ayarla yeniden kodlanması gerekiyor (her kare anahtar kare). Bunu Claude yapar; elle yapılacaksa: `ffmpeg -i girdi.mp4 -an -c:v libx264 -crf 22 -g 1 -pix_fmt yuv420p -vf scale=1920:-2 -movflags +faststart cikti.mp4`

| Kod | Mod | Süre (sn) | Hareket promptu |
|---|---|---|---|
| `sunum-dis` | loop | 5 | `Static camera. The man presents calmly, one hand gesturing slowly; the audience nods, the wall screen glows softly. The person's face never becomes visible. Nothing else changes. No text.` |
| `sunum-ic` | loop | 4 | `Static close-up. The fingers tighten on the lectern edge, relax a little, then tighten again. A slight tremor. The person's face never becomes visible. Nothing else changes. No text.` |
| `alkis-dis` | scrub | 4 | `Static camera. The audience applauds; the man gives a small nod and steps back from the lectern. The person's face never becomes visible. Nothing else changes. No text.` |
| `alkis-ic` | loop | 5 | `Static camera. The man, hands braced on the sink, breathes deeply; his back rises and falls slowly twice. The person's face never becomes visible. Nothing else changes. No text.` |
| `koridor-dis` | scrub | 5 | `Static camera. The man walks away down the corridor with relaxed shoulders. The person's face never becomes visible. Nothing else changes. No text.` |
| `koridor-ic` | loop | 4 | `Tracking close-up. The damp palms wipe down the sides of the trousers while walking. The person's face never becomes visible. Nothing else changes. No text.` |
| `parti-dis` | scrub | 5 | `Static camera. The man lights the last candle; friends' hands raise glasses; soft laughter movement. The person's face never becomes visible. Nothing else changes. No text.` |
| `parti-ic` | loop | 4 | `Static close-up. Under the table the thumb hovers over the glowing phone, taps once, the screen glow flickers. The person's face never becomes visible. Nothing else changes. No text.` |
| `araba-dis` | loop | 6 | `Static camera from the back seat. The red light glows through the windscreen, rain streaks slowly; the man sits still at the wheel. The person's face never becomes visible. Nothing else changes. No text.` |
| `araba-ic` | loop | 4 | `Static close-up. The knuckles whiten as the grip on the steering wheel tightens; red light flickers on the skin. The person's face never becomes visible. Nothing else changes. No text.` |

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
