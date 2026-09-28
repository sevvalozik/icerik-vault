---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Dans Pisti"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ozguven, dans-pisti]
related: ["[[dans-pisti]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Dans Pisti — Video Brief

> Hikâye: [[dans-pisti]] · Kayıt: `03-Assets/images/humentis/scroll/ozguven/dans-pisti/`
> Kural (Kule / Altyazı'dan): sabit kamera, tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Yazı yok, her şeyi görüntü anlatmalı.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still at a wedding party at night. A dance floor full of people dancing under warm string lights and soft coloured party lights; all dancers are blurred, backlit silhouettes with no recognisable faces. In the left foreground, at the edge of the dance floor, a young woman in a simple evening dress stands holding a glass, seen from behind, from head to knees; her face is never visible. Warm golden and soft pink tones, bokeh lights, shallow depth of field, realistic muted colours, soft filmic grain. No text, no logos. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `dans.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same wedding dance floor at night, same dancing silhouettes, same young woman at the edge seen from behind; her face is never visible.
Action:
0–5 s: the music is lively; she taps one foot to the beat and her shoulders sway gently with the music, the glass in her hand moving slightly. The dancers keep dancing.
5–8 s: she shifts her weight forward as if about to step onto the dance floor, hesitates, then settles back to where she was and stays at the edge.
Camera: completely static, locked-off, no pan, no zoom. Natural, subtle movement. Warm party lights, bokeh, soft filmic grain. No text, no logos, no sound.
Avoid: her stepping onto the dance floor, anyone pulling her in, visible faces, camera movement.
```

Model karıştırırsa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `dans.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
