---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Yatak"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, ayrilik, yatak]
related: ["[[yatak]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Yatak — Video Brief

> Hikâye: [[yatak]] · Kayıt: `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/yatak/`
> Kural: sabit kamera, tek kişi, zamanlı eylem listesi, "Avoid" satırı. Yetişkin, sade, sakin bir ton; gençlik aşkı çağrıştıran nesne (peluş, kalp, fotoğraf) yok.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A bright, calm adult bedroom in the morning, sunlight streaming in through a large window. A double bed with white linen: the left side is rumpled and slept in, with a pillow and the duvet pushed back; the right side is perfectly smooth and untouched, with a second pillow still neatly in place. An adult in their thirties in a soft grey T-shirt stands at the foot of the bed, seen from behind, about to make the bed; their face is never visible. A simple wardrobe on the side wall. Warm, hopeful morning light, realistic muted colours, soft filmic grain. Static camera at standing eye level, medium-wide shot. No text, no logos. 16:9.
```

## 2. Video (Veo, 8–9 sn, başlangıç: `kf-baslangic.jpg`) → `yatak.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same bright bedroom in morning sunlight, same double bed with one rumpled side and one untouched side, same adult in a grey T-shirt seen from behind; their face is never visible. Only this person moves.
Action:
0–3 s: they straighten and smooth the duvet across the bed.
3–6 s: they pick up the untouched second pillow from the right side, carry it to the wardrobe and put it away on a shelf.
6–9 s: they come back, take their own pillow and place it in the exact middle of the bed, plump it gently, then stand still for a moment looking at the bed.
Camera: completely static, locked-off, no pan, no zoom. Calm, natural movement. Warm morning sunlight, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: a second person, showing the face, camera movement, extra pillows appearing.
```

Model karıştırırsa klibi ortadan ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `yatak.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
