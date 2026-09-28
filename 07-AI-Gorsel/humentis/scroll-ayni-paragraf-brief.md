---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Aynı Paragraf"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, ayni-paragraf]
related: ["[[ayni-paragraf]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Aynı Paragraf — AI Görsel Brief

> Hikâye: [[ayni-paragraf]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/sinav-ve-performans-kaygisi/ayni-paragraf/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **DENIZ:** `a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie`

## Filmden hazır kareler (üretme, zaten kopyalandı)

- `oda.jpg` ← filmdeki `humentis-bulunma-a1.jpg`
- `omuz.jpg` ← filmdeki `humentis-bulunma-a2.jpg`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `not` | Ders notu yakın plan, kurşun kalem | Gemini | ☐ |
| 2 | `telefon-masa` | Masada flu ışık veren telefon, üstten | Gemini | ☐ |
| 3 | `pencere` | Pencere kulpunda el, keten perde | Gemini | ☐ |
| 4 | `oda-sayfalar` | Deniz arkadan pencere önünde, havada sayfalar | Gemini | ☐ |
| 5 | `kagit-doku` | Boş krem kâğıt dokusu | Gemini | ☐ |

## Promptlar

### 1 — `not`

Ders notu yakın plan, kurşun kalem · **Referans:** oda (filmdeki a1)

```text
Cinematic film still, photorealistic, close-up. Handwritten university lecture notes on lined paper on a wooden desk at night, a pencil resting diagonally on the page, a wide empty left margin on the page. Only the cool glow of a phone off-frame lights the paper. 85mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. The handwriting is illegible scribbles. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `telefon-masa`

Masada flu ışık veren telefon, üstten · **Referans:** oda

```text
Cinematic film still, photorealistic, top-down. A phone lying face-up on a wooden desk among lecture notes at night, the screen a soft blank glow with no readable content, lighting the paper around it. 50mm lens. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 3 — `pencere`

Pencere kulpunda el, keten perde · **Referans:** oda

```text
Cinematic film still, photorealistic. Close shot of the hand of a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, grey hoodie sleeve, on the handle of a tall window at night, about to open it; a linen curtain beside the window, distant Ankara city lights outside. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 4 — `oda-sayfalar`

Deniz arkadan pencere önünde, havada sayfalar · **Referans:** oda

```text
Cinematic film still, photorealistic. A small rented student room at night with the window wide open, the linen curtain billowing inward. Seen strictly from behind, a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, stands in front of the open window. Eight loose sheets of lecture notes float gently in the air around the room, caught by the breeze. Wide shot. 28mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 5 — `kagit-doku`

Boş krem kâğıt dokusu · **Referans:** —

```text
Flat top-down photograph of a single blank sheet of warm cream paper with a subtle natural fibre texture, filling the entire frame edge to edge, perfectly even soft light, no shadows, no folds, no lines, no text. 16:9, very high resolution.
```

## Notlar

- `oda` ve `omuz` filmden kopyalandı; yeniden üretme.
- `pencere` için klip: `The hand turns the handle and the window opens inward; the curtain billows. Nothing else moves.`

## Hareket (video) promptları

Durağan kare sitede fotoğraf gibi duruyor; film hissi için her kare kısa bir videoya çevrilir (image-to-video). **Önce kareyi yukarıdaki promptla üret, sonra o kareyi başlangıç karesi olarak videoya ver.**

- **Model:** Gemini'deki Veo ("Video" modu, görsel yükle) ya da Kling (image-to-video). Runway'de prompt kısa tutulur.
- **Ses kapalı**, 16:9, 1080p, kamera hareketi yazılandan fazla olmasın.
- **Kaydet:** aynı klasöre, aynı adla `.mp4` (örn. `oda-gece.mp4`). Site `.mp4` varsa fotoğraf yerine onu kullanır.
- **Mod:** `loop` = arka planda sürekli, hafif · `scrub` = scroll'a bağlı: kaydırdıkça ilerler, geri kaydırınca geri gider.
- **Videoları koyunca Claude'a söyle:** scrub'ın akıcı olması için videoların özel ayarla yeniden kodlanması gerekiyor (her kare anahtar kare). Bunu Claude yapar; elle yapılacaksa: `ffmpeg -i girdi.mp4 -an -c:v libx264 -crf 22 -g 1 -pix_fmt yuv420p -vf scale=1920:-2 -movflags +faststart cikti.mp4`

| Kod | Mod | Süre (sn) | Hareket promptu |
|---|---|---|---|
| `oda` | loop | 6 | `Static camera. The student sits hunched at the desk, turns one page slowly, then stops. The laptop glow flickers softly. The person's face never becomes visible. Nothing else changes. No text.` |
| `omuz` | loop | 5 | `Static over-the-shoulder. Thumbs type slowly on the phone, pause, type again. Screen stays a blank glow. The person's face never becomes visible. Nothing else changes. No text.` |
| `not` | loop | 4 | `Static close-up. The pencil rolls slightly on the page; the phone glow off-frame pulses once. The person's face never becomes visible. Nothing else changes. No text. No person visible.` |
| `telefon-masa` | scrub | 3 | `Static overhead. The phone vibrates twice, sliding a few millimetres on the desk, then its screen goes dark. The person's face never becomes visible. Nothing else changes. No text. No person visible.` |
| `pencere` | scrub | 4 | `Static close shot. The hand turns the handle and the window swings inward; the linen curtain billows. The person's face never becomes visible. Nothing else changes. No text.` |
| `oda-sayfalar` | loop | 6 | `Static wide camera. The loose sheets drift and turn slowly in the air; the curtain billows; the student stands still. The person's face never becomes visible. Nothing else changes. No text.` |

`kagit-doku` videoya çevrilmez; sayfaların savrulması kodla yapılır.

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |

## Video klipleri (28 Eylül 2026, Google Flow / Veo)

Kodla çizilen uçuşan kâğıtlar gerçekçi bulunmadı; hikâye gerçek videoyla anlatılıyor. Başlangıç karesi: `oda.jpg` (filmdeki a1, Deniz'in karakteri korunur).

### `pencere.mp4` ✅ (10 sn; telefon → kalkar → pencereyi açar)
```text
Photorealistic film shot based exactly on the uploaded image. Same small student bedroom at night, same young woman with a ponytail in a grey hoodie sitting at the desk by the window, seen from behind. Her face is never visible; she always keeps her back or the back of her head to the camera.
Action, one person only:
0–3 s: the phone on the desk lights up and buzzes. She glances at it, then slowly turns the phone face down on the desk.
3–6 s: she sits still for a moment, shoulders tense, then pushes the chair back and stands up.
6–10 s: she steps to the window on the left, turns the handle and opens the window inward. Cold night air comes in; the white curtain begins to stir gently.
Camera: completely static, locked-off, no pan, no zoom. Night lighting unchanged: desk lamp and laptop glow, city lights outside. Realistic, subtle movement, cinematic, soft filmic grain. No text, no logos, no sound.
Avoid: showing her face, a second person, camera movement.
```

### `ruzgar.mp4` ⏳ (üretilecek; kâğıtlar uçuşur)
İlk denemede rüzgâr esti ama kâğıtlar masadan kalkmadı. Model masadaki kâğıdı sabit nesne sanıyor. En garantili yol: `pencere`'nin son karesini (`pencere-son-kare.jpg`) Nano Banana'da düzenleyip **havada birkaç kâğıt** ekletmek, sonra o görselden video üretmek.

Görsel düzenleme:
```text
Edit the uploaded image. Keep everything exactly the same: the room, the woman at the open window with her back to the camera, the desk, the lamp, the laptop, the lighting. Only change: five or six loose white paper sheets from the desk are now caught by the wind, lifting off the desk and floating in mid-air between the desk and the window, some tilted, some curling, at different heights. The curtain billows into the room. 16:9.
```
Video (Extend ile devam ettirirken de kullanılabilir):
```text
Continue the shot seamlessly. The moment the window opens, a strong gust of cold night wind bursts into the room. The white curtain flaps wildly inward. The wind immediately sweeps across the desk: the loose white paper sheets and notebook pages fly off the desk into the air, one after another, tumbling, fluttering and spinning around the room in the warm lamp light, rising and falling for the rest of the shot. More and more sheets lift off the desk and join them. The young woman in the grey hoodie stays completely still at the open window with her back to the camera; her face is never visible and she does not try to catch the papers. Static camera, no pan, no zoom. Realistic lightweight paper physics, cinematic night lighting, soft filmic grain. No text, no logos, no sound. Avoid: papers staying on the desk, the woman turning around, camera movement.
```
Gelince: sitede 26–72 arası `pencere`, ardından `ruzgar`; geçiş perde yerine kameraya süzülen sayfa (ya da bir sayfaya yaklaşma) olur.
