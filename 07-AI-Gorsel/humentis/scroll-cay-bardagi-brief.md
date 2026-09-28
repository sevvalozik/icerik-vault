---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Çay Bardağı"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, cay-bardagi, yas]
related: ["[[cay-bardagi]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Çay Bardağı — Video Brief

> Hikâye: [[cay-bardagi]] · Kayıt: `03-Assets/images/humentis/scroll/yas-ve-kayip/cay-bardagi/`
> Ekranda yazı olmadığı için her şeyi görüntü anlatmalı. Başlangıç karesinde üç şey net görünmeli: **iki bardak**, **boş sandalye**, **sandalyedeki erkek hırkası**.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A small, modest Turkish kitchen in soft early-morning light. A little square wooden table by a window with lace curtains, set for two: two empty traditional tulip-shaped Turkish tea glasses on small saucers facing each other, a double teapot (çaydanlık) steaming on a trivet, a small plate of bread and cheese. On the left, an elderly woman in her seventies in a soft beige cardigan sits at the table, seen from behind over her shoulder; only her grey hair, shoulder, arm and hands are visible, never her face. Across the table, the second chair is empty; a man's worn brown wool cardigan hangs over the back of that empty chair. Static camera at seated eye level, medium shot, both glasses, the empty chair and the cardigan clearly visible. Warm, gentle, quiet mood, realistic muted colours, soft filmic grain, shallow depth of field. No text, no photos or picture frames, no logos. 16:9.
```

Hırka seçilmezse sonuna ekle: `The man's brown cardigan draped over the empty chair across the table is clearly visible and in focus.`

## 2. Video (Veo, 10 sn, başlangıç: `kf-baslangic.jpg`) → `cay.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same small kitchen in early-morning light, same elderly woman seen from behind over her shoulder, same two tea glasses, same empty chair with the man's brown cardigan. Her face is never visible. Only she moves.
Action:
0–3 s: she lifts the teapot and slowly pours tea into her own glass in front of her; steam rises from it.
3–6 s: out of habit she moves the teapot across the table toward the second, empty glass in front of the empty chair, and stops just above it. Her hand holding the teapot stays still in the air.
6–8 s: she slowly lowers the teapot back onto the table without pouring.
8–10 s: she gently slides the empty glass on its saucer back toward herself, and rests her hands on the table. Steam keeps rising from her full glass.
Camera: completely static, locked-off, no pan, no zoom. Slow, natural, tender movement. Soft morning light, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: pouring tea into the second glass, anyone sitting in the empty chair, her face, camera movement, the cardigan disappearing.
```

Model tek videoda karıştırırsa ikiye böl: önce 0–6 sn (doldurur, uzatır, durur), sonra son kareden 6–10 sn (bırakır, bardağı çeker).

## Teslim

Videoyu klasöre `cay.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede dolu bardağın üstü ölçülür.
