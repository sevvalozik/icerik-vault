---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Diş Fırçası"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, bosanma, dis-fircasi]
related: ["[[dis-fircasi]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Diş Fırçası — Video Brief

> Hikâye: [[dis-fircasi]] · Kayıt: `03-Assets/images/humentis/scroll/evlilik-oncesi-ve-bosanma/dis-fircasi/`
> Kural: sabit kamera, sadece eller, zamanlı eylem listesi, "Avoid" satırı. Yakın plan ama tek nesne; hareketler yavaş ve net.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still, close-up. A simple, clean home bathroom in soft morning light. On the edge of a white sink stands a clear glass tumbler holding two toothbrushes side by side, one blue and one green, leaning together. Next to it lies an open grey toiletry bag with its zipper open. White tiles in the background, a small window letting in soft daylight. Calm, quiet, slightly melancholic mood, realistic muted colours, soft filmic grain, shallow depth of field, the glass in sharp focus. No people, no hands, no text, no logos, no brand names on the toothbrushes. 16:9.
```

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `dis-fircasi.mp4`

```text
Photorealistic close-up film shot based exactly on the uploaded image. Same bathroom sink in soft morning light, same glass with two toothbrushes, same open toiletry bag. Only an adult hand and forearm ever appear; no face, no body.
Action:
0–3 s: an adult hand enters the frame from the right, slowly takes the blue toothbrush out of the glass, and holds it still for a moment, hesitating.
3–6 s: the hand puts the toothbrush into the open toiletry bag and zips the bag closed.
6–8 s: the hand picks up the bag and withdraws out of frame. The green toothbrush left alone in the glass slowly tips to one side and rests against the rim.
Camera: completely static, locked-off, no pan, no zoom. Slow, quiet, realistic movement. Soft morning light, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: both toothbrushes being taken, a face, camera movement, the glass moving.
```

El hareketi bozulursa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `dis-fircasi.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
