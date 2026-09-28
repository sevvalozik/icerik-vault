---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Mutfak Işığı"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, uyku, mutfak-isigi]
related: ["[[mutfak-isigi]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Mutfak Işığı — Video Brief

> Hikâye: [[mutfak-isigi]] · Kayıt: `03-Assets/images/humentis/scroll/uyku-ve-stres/mutfak-isigi/`
> Kural: sabit kamera (ya da tek, yavaş bir ilerleme), tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Rakam ve yazı AI'ye yazdırılmaz; saat kodla gösterilir.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A quiet apartment at 3 a.m. A long, dark hallway seen from one end, with closed bedroom doors on both sides and no lights on. At the far end of the hallway, through an open doorway, a small kitchen is lit only by the warm little light under the cooker hood. In the kitchen, a person in their forties sits at a small table with their back to the hallway, a glass of water in front of them; their face is never visible. Deep blue shadows in the hallway, one warm pool of light at the end. Static camera at eye level at the start of the hallway. Realistic, still, lonely mood, soft filmic grain. No text, no logos, no visible clock digits. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `mutfak-isigi.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same dark apartment hallway at 3 a.m., same small lit kitchen at the far end, same person sitting at the kitchen table with their back to the camera; their face is never visible.
Action: the camera slowly and smoothly glides forward down the dark hallway toward the kitchen, past the closed bedroom doors, ending just inside the kitchen doorway with the warm hood light and the person's back in view. The person stays almost still, only once slowly lifting the glass of water and putting it down again.
Camera: one slow, steady forward dolly move, no shake, no turns, no zoom. Realistic night lighting: dark blue hallway, warm light in the kitchen. Soft filmic grain. No text, no logos, no sound.
Avoid: the person turning around, other people, lights switching on, fast camera movement.
```

Gece sahnelerinde model görüntüyü fazla aydınlatırsa başa `Very dark, low-key night scene,` ekle.

## Teslim

Videoyu klasöre `mutfak-isigi.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`).
