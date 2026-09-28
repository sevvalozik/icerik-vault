---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Boş Ekran"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, bos-ekran, sosyal-kaygi]
related: ["[[bos-ekran]]", "[[teknik-spec]]", "[[scroll-altyazi-brief]]"]
---

# Humentis — Scroll: Boş Ekran — Video Brief

> Hikâye: [[bos-ekran]] · Kayıt: `03-Assets/images/humentis/scroll/panik-ve-sosyal-kaygi/bos-ekran/`
> Tek hareket: kamera omuz üstünden telefona yavaşça yaklaşır. Kişi neredeyse hiç kıpırdamaz.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still, over-the-shoulder shot at a crowded house party in the evening. In the right foreground, a young man in his twenties in a dark blue shirt stands in the corner of a living room, leaning against the wall, seen from behind over his right shoulder; only the back of his head, his shoulder and his hands are visible, never his face. In one hand he holds a glass of juice, in the other a smartphone that he is looking down at. The phone screen is completely black and switched off, showing only a faint reflection of warm lights. In the background, out of focus, the party: warm string lights, a birthday balloon, a group of people laughing and talking, all soft blurred silhouettes with no recognisable faces. Warm, low light, shallow depth of field, realistic muted colours, soft filmic grain. No readable text, no logos. 16:9.
```

Ekran açık ve renkli çıkarsa sonuna ekle: `The phone screen is off: a plain glossy black rectangle.`

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `bos-ekran.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same house party, same young man in the dark blue shirt in the corner, seen from behind over his shoulder; his face is never visible.
Action: he stands still, head bowed toward the phone, occasionally sliding his thumb across the black screen as if scrolling, pretending to be busy. The phone screen stays completely black and switched off the whole time. In the blurred background, people keep laughing, talking and moving, warm lights twinkling.
Camera: a very slow, smooth push-in over his shoulder toward the phone in his hand, ending with the black phone screen large in the centre of the frame, a faint reflection of the party lights on the glass.
Warm low light, shallow depth of field, realistic muted colours, soft filmic grain. No readable text, no logos, no sound.
Avoid: the phone screen lighting up or showing an app, his face, faces in the background, fast camera movement.
```

## Teslim

Videoyu klasöre `bos-ekran.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede telefon ekranının merkezi ölçülür.
