---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Fotoğraf"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ozguven, fotograf]
related: ["[[fotograf]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Fotoğraf — Video Brief

> Hikâye: [[fotograf]] · Kayıt: `03-Assets/images/humentis/scroll/ozguven/fotograf/`
> Kural (Kule / Altyazı'dan): sabit kamera, tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Yazı yok, her şeyi görüntü anlatmalı.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still at golden hour on a beach. Five young friends in their twenties stand close together in a row in the middle distance, arms around each other's shoulders, facing the camera, laughing, posing for a photo. They are completely backlit by the low orange sun behind them, so they are dark silhouettes with no visible facial features. In the right foreground, a young woman with shoulder-length hair stands slightly apart from them, seen from behind over her shoulder, holding a smartphone in her hand at her side; her face is never visible. Warm orange and pink sky, soft sea haze, gentle lens flare, realistic muted colours, soft filmic grain, shallow depth of field. No text, no logos. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `fotograf.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same beach at golden hour, same five friends as backlit silhouettes, same young woman in the right foreground seen from behind; no faces visible.
Action:
0–3 s: one of the friends in the group waves an arm toward the young woman, gesturing "come, join us".
3–5 s: the young woman gently shakes her head, smiles it off with a small shrug, and raises her phone with both hands to take the photo, staying outside the group.
5–8 s: the friends squeeze closer together and pose; she holds the phone steady, framing them. The phone screen shows the group's silhouettes.
Camera: completely static, locked-off, no pan, no zoom. Natural, relaxed movement. Warm golden light, soft filmic grain. No text, no logos, no sound.
Avoid: the young woman joining the group, visible faces, camera movement.
```

Model karıştırırsa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `fotograf.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
