---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Dolap"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ayrilik, dolap]
related: ["[[dolap]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Dolap — Video Brief

> Hikâye: [[dolap]] · Kayıt: `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/dolap/`
> Kural: sabit kamera, tek kişi, zamanlı eylem listesi, "Avoid" satırı. Yetişkin, sade, sakin bir ton; gençlik aşkı çağrıştıran nesne (peluş, kalp, fotoğraf) yok.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A calm, simply furnished adult bedroom in soft morning light. A two-door light oak wardrobe stands against the wall, both doors closed. An adult's hand rests on the handle of the left door. Only the hand and forearm are visible; no face, no body. Neutral, mature interior: linen bedding at the edge of the frame, a plain rug, soft daylight from a window on the side. Quiet, restrained mood, realistic muted colours, soft filmic grain. Static camera at chest height facing the wardrobe. No text, no logos. 16:9.
```

## 2. Video (Veo, 8–9 sn, başlangıç: `kf-baslangic.jpg`) → `dolap.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same bedroom in soft morning light, same two-door oak wardrobe, same adult hand on the left door handle. Only the hands and forearms ever appear; no face, no body.
Action:
0–3 s: the hand opens the left wardrobe door. That side of the wardrobe is empty: only bare wooden hangers on the rail, one of them still swinging slightly. The right side is full of the person's own clothes.
3–5 s: the hand slowly gathers the empty hangers one by one and sets them aside on the shelf.
5–8 s: both hands slide the person's own clothes on their hangers from the right side toward the empty left side; the clothes spread out, but a clear empty gap remains in the middle of the rail. The hands stop.
Camera: completely static, locked-off, no pan, no zoom. Slow, quiet, realistic movement. Soft daylight, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: clothes appearing on the empty side by themselves, a face, camera movement, the wardrobe changing shape.
```

Model karıştırırsa klibi ortadan ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `dolap.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
