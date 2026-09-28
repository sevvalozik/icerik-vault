---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Tuval"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, tuval, mukemmeliyetcilik]
related: ["[[tuval]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Tuval — Video Brief

> Hikâye: [[tuval]] · Kayıt: `03-Assets/images/humentis/scroll/mukemmeliyetcilik-ve-erteleme/tuval/`
> Kural: sabit kamera, tek kişi, zamanlı eylem listesi, "Avoid" satırı. Hareketler büyük olsun (kol, adım); küçük el işi AI'de bozuluyor.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A small, bright home studio room in soft daylight from a large window on the left. In the centre, a wooden easel holds a large, completely blank white canvas. In front of it stands a person in their thirties wearing a paint-stained canvas apron, seen from behind and slightly to the side, holding a paintbrush in one hand and a small cloth rag in the other; their face is never visible. On the wooden floor around the easel lie many crumpled sheets of sketch paper. A small table with paint tubes and a palette on the right. Calm, airy, slightly melancholic mood, realistic muted colours, soft filmic grain, shallow depth of field. Static camera at standing eye level, medium-wide shot, the whole canvas clearly visible. No text, no logos, nothing painted on the canvas. 16:9.
```

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `tuval.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same bright studio room, same blank white canvas on the easel, same person in the paint-stained apron seen from behind; their face is never visible. Only this person moves.
Action:
0–3 s: they raise the brush and paint one single, confident diagonal stroke of deep blue paint across the blank canvas.
3–5 s: they take one step back and stand still, looking at the stroke, head slightly tilted.
5–8 s: they step forward again and wipe the blue stroke off the canvas with the cloth rag in a few firm movements, until the canvas is completely white and blank again. They lower their arms.
Camera: completely static, locked-off, no pan, no zoom. Natural, realistic movement, realistic wet paint. Soft daylight, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: painting a picture or more than one stroke, the canvas staying painted at the end, showing the face, camera movement.
```

Silme kısmı tutmazsa ikiye böl: önce 0–5 sn (çizer, geri çekilip bakar), sonra son kareden "wipes the stroke off until the canvas is blank" (3 sn). Olmazsa silme yerine **tuvali şövaleden alıp duvara ters çevirerek dayayıp yeni boş bir tuval koyması** da aynı anlamı taşır.

## Teslim

Videoyu klasöre `tuval.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede tuvalin merkezi ölçülür.
