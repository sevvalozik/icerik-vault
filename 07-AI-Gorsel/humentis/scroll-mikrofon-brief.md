---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Mikrofon"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ozguven, mikrofon]
related: ["[[mikrofon]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Mikrofon — Video Brief

> Hikâye: [[mikrofon]] · Kayıt: `03-Assets/images/humentis/scroll/ozguven/mikrofon/`
> Kural (Kule / Altyazı'dan): sabit kamera, tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Yazı yok, her şeyi görüntü anlatmalı.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A small, cosy café on an open-mic night, dim warm light. In the background, a tiny empty stage with a single microphone on a stand, lit by one warm spotlight; nobody on the stage. In the foreground, at a small table near the back, a young man in his twenties sits holding an acoustic guitar on his lap, seen from behind over his shoulder; his face is never visible. A few other guests at tables are soft, blurred silhouettes. On the left edge, near the stage, the host stands as a blurred silhouette. Warm amber tones, shallow depth of field, realistic muted colours, soft filmic grain. No text, no posters with writing, no logos. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `mikrofon.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same café, same empty stage with the microphone in the spotlight, same young man with the guitar in the foreground seen from behind; his face is never visible.
Action:
0–4 s: the host near the stage, a blurred silhouette, turns toward the young man and makes an inviting gesture with one arm toward the stage, as if saying "you're next".
4–8 s: the young man grips the neck of his guitar a little tighter, gives a small shake of his head, and stays seated. The microphone on the stage remains empty in the spotlight.
Camera: completely static, locked-off, no pan, no zoom. Subtle, realistic movement. Warm amber light, soft filmic grain. No text, no logos, no sound.
Avoid: the young man standing up or walking to the stage, anyone else going on stage, visible faces, camera movement.
```

Model karıştırırsa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `mikrofon.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
