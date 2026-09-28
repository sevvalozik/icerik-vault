---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Sofra"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, sofra, aile]
related: ["[[sofra]]", "[[teknik-spec]]", "[[scroll-kule-brief]]"]
---

# Humentis — Scroll: Sofra — Video Brief

> Hikâye: [[sofra]] · Kayıt: `03-Assets/images/humentis/scroll/aile-danismanligi/sofra/`
> Kural (Kule / Altyazı'dan): sabit kamera, tek büyük değişim. Burada kimse bir şey yapmıyor; değişen tek şey buharın kaybolması.

## 1. Başlangıç karesi (Nano Banana, 16:9) → `kf-baslangic.jpg`

```text
Photorealistic film still, perfectly top-down overhead shot of a family dinner table in the evening. A warm wooden table with a steaming pot of home-cooked stew in the centre, four full plates of food, glasses of water, bread and cutlery, a simple linen tablecloth. At each of the four sides of the table, a pair of hands holds a smartphone just above the table edge: an adult man's hands, an adult woman's hands, a teenager's hands, and a child's small hands. Each phone screen glows softly with blurred, unreadable content. Nobody is touching their food. Only hands and forearms are visible; no faces, no heads, no bodies. The plate in the very centre of the frame, next to the pot, is empty and clean white. Warm pendant lamp light from above, cosy but quiet mood, realistic muted colours, soft filmic grain. No readable text, no logos, no brand names. 16:9.
```

Ortadaki boş beyaz tabak önemli: geçiş ona yaklaşarak yapılıyor. Çıkmazsa sonuna ekle: `One clean empty white serving plate lies in the exact centre of the table.`

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `sofra.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same perfectly top-down view of the family dinner table, same four pairs of hands holding glowing phones, same food. Only hands and forearms are ever visible; no faces.
Action: nothing dramatic happens. The thumbs slowly scroll and tap on the phone screens, each person absorbed in their own phone. Nobody touches the food. At the start, thick steam rises from the pot in the centre; over the 8 seconds the steam gradually thins out and disappears completely, as the food goes cold. The lamp light dims very slightly.
Camera: completely static, locked-off overhead shot, no pan, no zoom, no rotation. Subtle, realistic hand movement. Warm muted colours, soft filmic grain. No readable text on the screens, no logos, no sound.
Avoid: anyone eating or putting the phone down, faces or heads entering the frame, camera movement, the food changing.
```

## Teslim

Videoyu klasöre `sofra.mp4` olarak koy ya da masaüstündeki klasöre at. Scrub için yeniden kodlanır (`-g 1`), sonra son karede ortadaki tabağın yeri ölçülür.
