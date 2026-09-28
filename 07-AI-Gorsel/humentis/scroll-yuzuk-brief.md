---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Yüzük"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, bosanma, yuzuk]
related: ["[[yuzuk]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Yüzük — Video Brief

> Hikâye: [[yuzuk]] · Kayıt: `03-Assets/images/humentis/scroll/evlilik-oncesi-ve-bosanma/yuzuk/`
> Kural: sabit kamera, sadece eller, zamanlı eylem listesi, "Avoid" satırı. Yakın plan ama tek nesne; hareketler yavaş ve net.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still, close-up. The entrance hall of a home in the warm light of early evening. On a small wooden console table by the front door sits a round cream-coloured ceramic bowl holding a set of house keys. An adult's left hand rests flat on the console next to the bowl, wearing a simple gold wedding band. Only the hands are visible; no face, no body. Warm, quiet, muted colours, soft filmic grain, shallow depth of field, the ring and the bowl in sharp focus. No text, no logos. 16:9.
```

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `yuzuk.mp4`

```text
Photorealistic close-up film shot based exactly on the uploaded image. Same console table by the front door in warm evening light, same ceramic bowl with keys, same left hand with the gold wedding band. Only the two hands ever appear; no face, no body.
Action:
0–4 s: the right hand comes in and slowly turns the wedding band on the finger, then carefully slides it off. A faint pale band of skin remains on the finger where the ring was.
4–6 s: the right hand holds the ring just above the bowl and stops for a moment, hesitating.
6–8 s: it drops the ring gently into the bowl; the ring rolls a little beside the keys and comes to rest. The hands withdraw.
Camera: completely static, locked-off, no pan, no zoom. Slow, quiet, realistic movement. Warm evening light, muted colours, soft filmic grain. No text, no logos, no sound.
Avoid: more than one ring, the ring changing shape, extra fingers, a face, camera movement.
```

El hareketi bozulursa klibi tereddüt anından ikiye böl; ikinci parçayı ilkinin son karesinden üret.

## Teslim

Videoyu klasöre `yuzuk.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), son karede geçiş noktası ölçülür.
