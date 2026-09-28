---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kule"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: done
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, kule, cocuk-gelisimi]
related: ["[[kule]]", "[[teknik-spec]]", "[[scroll-yarim-adim-brief]]"]
---

# Humentis — Scroll: Kule — Video Brief

> Hikâye: [[kule]] · Kayıt: `03-Assets/images/humentis/scroll/cocuk-gelisimi-ve-okula-hazirlik/kule/`
> ✅ Üretildi (28 Eylül 2026, Google Flow). Nano Banana 2 ile başlangıç karesi, Veo ile 8 sn 1080p video. Tek denemede kullanılabilir çıktı alındı.

## 1. Başlangıç karesi (Nano Banana 2, 16:9) → `kf-baslangic.jpg`

Önce boş oda üretildi, sonra aynı görsel eklenip kule yaptırıldı:

```text
Photorealistic film still. A real child's bedroom in soft daylight: a light wool rug on a wooden floor, a window on the upper right letting in warm morning sun, a few soft toys and a low shelf blurred in the background. On the rug, a small tower of two natural unpainted wooden blocks, and six more blocks scattered loosely around it. Camera very low, at rug level, side view, static; the tower in the centre-left of the frame with empty space above it. Warm, calm, muted natural colours, shallow depth of field, soft filmic grain. No people, no hands, no text, no logos, no brand names on toys. 16:9.
```
```text
Same room, same rug, same light, same low camera angle as the uploaded image. Now in the centre of the rug stands one tall, carefully stacked tower of eight natural wooden cube blocks, slightly uneven. No other blocks on the rug. No people, no hands, no text, no logos. 16:9.
```

## 2. Video (Veo, başlangıç karesi: `kf-baslangic.jpg`) → `kule.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same child's bedroom, same tall wooden block tower, same low static side view.
Action: a small child's hand enters from the right and gently places a finger on the top block. The tower wobbles, then topples over. The blocks tumble onto the rug, and one block rolls toward the camera and comes to rest in the foreground, close to the lens, in sharp focus. The hand withdraws. Only the small hand and forearm are ever visible; no face, no body.
Camera: locked-off, no zoom, no pan. Lighting unchanged. Warm muted natural colours, soft filmic grain. No text, no logos, no sound.
```

## Notlar

- Devrilme anında (2.5–3.3 sn) bloklar bir an hafif şekil değiştiriyor. Sitede bu kısım hızlı geçtiği için fark edilmiyor. Yeniden üretilirse `rigid solid wooden cubes that keep their shape` eklenebilir.
- Flow arayüzü (Eylül 2026): alttaki kutuda sağdaki model düğmesinden görsel ya da video modeli seçiliyor, soldaki "+" ile başlangıç görseli ekleniyor. Ayrı bir "Frames to Video" menüsü yok.
- Ham dosya Flow'dan `Child_toppling_block_tower_1080p_….mp4` adıyla iner. Siteye koymadan önce scrub için yeniden kodlanır: `ffmpeg -i ham.mp4 -an -c:v libx264 -crf 21 -g 1 -pix_fmt yuv420p -movflags +faststart kule.mp4`.
