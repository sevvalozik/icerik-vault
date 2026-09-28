---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — 04:12"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, uyku, saat-0412]
related: ["[[saat-0412]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: 04:12 — Video Brief

> Hikâye: [[saat-0412]] · Kayıt: `03-Assets/images/humentis/scroll/uyku-ve-stres/saat-0412/`
> Kural: sabit kamera (ya da tek, yavaş bir ilerleme), tek kişi hareket eder, zamanlı eylem listesi, "Avoid" satırı. Rakam ve yazı AI'ye yazdırılmaz; saat kodla gösterilir.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still. A dark bedroom late at night. A person in their thirties lies in a double bed on their side under a grey duvet, turned away from the camera; only the back of their head, hair and shoulder are visible, never the face. On the bedside table, a smartphone lies face up with its screen dark, next to a glass of water. A thin vertical gap between heavy curtains lets in a faint cold streetlight glow. Deep blue night tones, very low light, realistic, soft filmic grain. Static camera from the foot-side corner of the room at bed height. No text, no logos, no readable screen. 16:9.
```

## 2. Video (Veo, 8–10 sn, başlangıç: `kf-baslangic.jpg`) → `saat-0412.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same dark bedroom at night, same person in bed turned away from the camera; their face is never visible, always turned away or pressed into the pillow. Only this person moves.
Action:
0–3 s: restless, they turn over under the duvet, then turn back again, pulling the duvet up.
3–6 s: they flip the pillow and lie down again; the phone on the bedside table lights up briefly with a soft glow and goes dark.
6–10 s: they give up, sit up slowly on the edge of the bed with their back to the camera, shoulders dropped. At the same time the thin gap between the curtains slowly turns from cold streetlight to the first pale light of dawn.
Camera: completely static, locked-off, no pan, no zoom. Realistic, tired, subtle movement. Night blue tones slowly warming at the end, soft filmic grain. No text, no numbers on the phone, no logos, no sound.
Avoid: showing the face, a second person, camera movement, bright daylight.
```

Gece sahnelerinde model görüntüyü fazla aydınlatırsa başa `Very dark, low-key night scene,` ekle.

## Teslim

Videoyu klasöre `saat-0412.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`).
