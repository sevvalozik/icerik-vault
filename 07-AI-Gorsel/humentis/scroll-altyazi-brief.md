---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Altyazı"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: done
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, altyazi, dikkat]
related: ["[[altyazi]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Altyazı — Video Brief

> Hikâye: [[altyazi]] · Kayıt: `03-Assets/images/humentis/scroll/dikkat-ve-odaklanma/altyazi/`
> ✅ Üretildi (28 Eylül 2026, Google Flow): Nano Banana 2 ile başlangıç karesi, Veo ile 10 sn 1080p video.

## Öğrenilenler

- **Birinci deneme olmadı:** POV (kamera = dinleyen) ve netlik kaydırma istenince model konuşan arkadaşın kafasını pencereye çevirdi, sonuç gerçekçi değildi. Çözüm: yandan sabit kamera, dikkati dağılan kişinin başını çevirmesini görmek.
- **Yüzler:** İlk görselde yandan yüz detayı görünüyordu. Aynı görseli "tam siluet" diye düzenletmek çözdü (aşağıdaki düzenleme promptu).
- **Zamanlı eylem listesi** (0–2 sn, 2–4 sn…) ve "sadece soldaki kadının başı hareket eder" demek, iki kişinin aynı anda oynamasını engelledi.

## 1. Başlangıç karesi (Nano Banana 2, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. Inside a quiet café in late afternoon. Two women in their early thirties sit facing each other at a small round wooden table in front of a large bright window. The camera is inside the café, looking toward the window, so both women are seen in side profile and are backlit: their faces are in deep shadow, no facial features visible, only soft dark silhouettes with warm rim light on hair and shoulders.
The woman on the LEFT wears a light cardigan and sits with her hands around a coffee cup, looking at her friend.
The woman on the RIGHT wears a dark sweater, leans slightly forward and is mid-sentence, one hand raised in a small talking gesture.
Through the window behind them: a softly blurred street with trees and a few distant passers-by. Two coffee cups and a small plate on the table.
Camera at seated eye level, static, medium-wide shot, both women fully in frame from the waist up. Warm natural light, muted colours, soft filmic grain, shallow depth of field. No text, no logos, no readable signs. 16:9.
```

Yüz detayı görünürse görseli ekleyip düzenlet:

```text
Edit the uploaded image. Keep everything the same: the café, the table, the cups, the window, the two women, their poses and positions. Only change the lighting: the window behind them is very bright and slightly overexposed, and the café interior is dim, so both women become fully dark backlit silhouettes. Their faces are completely black in shadow, with no eyes, nose, mouth or skin detail visible, only the outline of their profiles and a thin warm rim light on their hair and shoulders. 16:9.
```

## 2. Video (Veo, 10 sn, başlangıç karesi: `kf-baslangic.jpg`) → `altyazi.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same café, same two backlit women in side profile at the table by the window, same static camera. Faces always stay in shadow, no facial features visible.

The woman on the RIGHT is the speaker: for the whole 10 seconds she keeps talking to her friend with small, calm hand gestures. She always faces her friend on the left. She never turns her head toward the window and never looks away.

The woman on the LEFT is the listener, and she is the only one whose head moves:
0–2 s: she looks at her friend and nods slightly.
2–4 s: her attention drifts; she slowly turns her head to the right, toward the window and the street.
4–7 s: she keeps looking out of the window at a passer-by walking on the street, while her friend keeps talking.
7–10 s: she slowly turns her head back to her friend.

Camera: completely static, locked-off, no pan, no zoom, no focus change. Lighting unchanged. Natural, subtle, realistic body movement, no exaggerated acting. Warm muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: the speaker turning her head, both women moving their heads at the same time, visible faces, camera movement.
```

## Scrub için kodlama

`ffmpeg -i ham.mp4 -an -c:v libx264 -crf 21 -g 1 -pix_fmt yuv420p -movflags +faststart altyazi.mp4`
