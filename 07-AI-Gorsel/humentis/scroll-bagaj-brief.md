---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Bagaj"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ayrilik, bagaj]
related: ["[[bagaj]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Bagaj — Video Brief

> Hikâye: [[bagaj]] · Kayıt: `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/bagaj/`
> Kural: sabit kamera, tek kişi, zamanlı eylem listesi, "Avoid" satırı. Yetişkin, sade, sakin bir ton; gençlik aşkı çağrıştıran nesne (peluş, kalp, fotoğraf) yok.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A quiet residential street in front of an apartment building in the late afternoon, warm low sunlight. A dark grey family car is parked by the curb with its boot (trunk) open; inside are a few plain brown cardboard boxes with no writing on them. An adult in their forties in a simple dark coat stands behind the car, seen from behind, holding one last plain cardboard box in both arms; their face is never visible. Soft golden light reflects on the car's paint. Calm, restrained, grown-up mood, realistic muted colours, soft filmic grain. Static camera at standing eye level, medium shot from behind. No text on the boxes, no licence plate text, no logos. 16:9.
```

## 2. Video (Veo, 8–9 sn, başlangıç: `kf-baslangic.jpg`) → `bagaj.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same quiet street in late-afternoon light, same parked car with the open boot, same adult in a dark coat seen from behind; their face is never visible. Only this person moves.
Action:
0–3 s: they place the last cardboard box into the boot next to the others.
3–5 s: they reach up and close the boot lid with both hands.
5–8 s: they leave one hand resting flat on the closed boot lid and stand still for a moment, head slightly bowed; then they slowly take the hand away.
Camera: completely static, locked-off, no pan, no zoom. Slow, quiet, realistic movement. Warm low sunlight with reflections on the car, muted colours, soft filmic grain. No text, no licence plate, no logos, no sound.
Avoid: the person turning around, getting into the car, other people, camera movement, writing on the boxes.
```

Model karıştırırsa klibi ortadan ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `bagaj.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
