---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kıyafetler"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ozguven, kiyafetler]
related: ["[[kiyafetler]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Kıyafetler — Video Brief

> Hikâye: [[kiyafetler]] · Kayıt: `03-Assets/images/humentis/scroll/ozguven/kiyafetler/`
> Kural (Kule / Altyazı'dan): sabit kamera, tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Yazı yok, her şeyi görüntü anlatmalı.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A small cosy bedroom in the evening, warm bedside lamp light. A young woman in her twenties, in a simple top and jeans, stands in front of an open wardrobe on the left, seen from behind; her face is never visible and there is no mirror in the frame. On the bed in the foreground: a small evening handbag, a pair of heeled shoes, and two or three dresses already thrown on it, including a cream-coloured silk dress on top. Static camera at chest height, medium-wide shot. Warm, soft, slightly melancholic mood, realistic muted colours, soft filmic grain, shallow depth of field. No text, no logos, no mirror. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `kiyafetler.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same small bedroom in the evening, same young woman at the open wardrobe seen from behind; her face is never visible. Only she moves.
Action:
0–3 s: she takes a dress from the wardrobe, holds it up against herself for a moment, then drops it onto the bed.
3–6 s: she takes another dress, holds it up, and tosses it onto the growing pile on the bed.
6–10 s: she stops, turns and sits down on the edge of the bed next to the pile of clothes, and slowly takes off her heeled shoes, leaving them on the floor. She stays sitting, shoulders dropped.
Camera: completely static, locked-off, no pan, no zoom. Natural, subtle movement. Warm lamp light, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: a mirror, her face, other people, camera movement.
```

Model karıştırırsa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `kiyafetler.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
