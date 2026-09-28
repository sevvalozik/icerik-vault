---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kırılan Vazo"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, kirilan-vazo]
related: ["[[kirilan-vazo]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Kırılan Vazo — AI Görsel Brief

> Hikâye: [[kirilan-vazo]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/cift-terapisi/kirilan-vazo/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **ECE:** `a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `masa` | Üstten masa, iki tabak, ters telefon | Gemini | ☐ |
| 2 | `eller` | Ece arkadan, masada kenetli eller | Gemini | ☐ |
| 3 | `koridor` | Koridor, duvarda uzaklaşan erkek gölgesi | Gemini | ☐ |
| 4 | `kapi` | Çalışma odası kapısı, kapanmak üzere | Gemini | ☐ |
| 5 | `vazo` | Rafta mavi-krem seramik vazo | Gemini | ☐ |
| 6 | `kirik` | Yerde kırık vazo parçaları, üstten | Gemini | ☐ |
| 7 | `parca-el` | Ece'nin alyanslı eli bir parçayı alıyor | Gemini | ☐ |

## Promptlar

### 1 — `masa`

Üstten masa, iki tabak, ters telefon · **Referans:** —

```text
Cinematic film still, photorealistic, top-down view. A small dining table in an apartment at night under a single warm pendant lamp: two ceramic plates, one with a finished meal, the other untouched and full; two forks; a phone lying face-down near the edge; a glass of water. Nobody visible. Composition centred, negative space around the plates. 35mm lens, overhead camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `eller`

Ece arkadan, masada kenetli eller · **Referans:** masa

```text
Cinematic film still, photorealistic. Seen from behind and slightly above the shoulder, a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band, sits at the same small dining table at night, her hands clasped tightly together on the table next to her untouched plate, the gold ring visible. Across the table, an empty chair pushed back. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 3 — `koridor`

Koridor, duvarda uzaklaşan erkek gölgesi · **Referans:** masa

```text
Cinematic film still, photorealistic. A narrow apartment hallway at night, cream walls, a runner rug, a single warm light from the living room behind the camera. On the wall, only the long soft shadow of a man walking away down the hallway; the man himself is not in frame. At the far end, a half-open study door. 28mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 4 — `kapi`

Çalışma odası kapısı, kapanmak üzere · **Referans:** koridor

```text
Cinematic film still, photorealistic. The same apartment hallway at night, medium shot of a light oak study door, about to close, a thin line of warm light from inside the study along its edge. Nobody visible. 35mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 5 — `vazo`

Rafta mavi-krem seramik vazo · **Referans:** koridor

```text
Cinematic film still, photorealistic. A wall shelf in the same apartment hallway at night, beside the study door: a handmade ceramic vase with a cream body and a deep blue glaze band sits near the edge of the shelf, a few books next to it. Medium close shot, vase centred. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 6 — `kirik`

Yerde kırık vazo parçaları, üstten · **Referans:** vazo

```text
Cinematic film still, photorealistic, top-down view. Seven or eight large pieces of the same cream-and-deep-blue ceramic vase scattered on a wooden hallway floor at night, clean breaks, no dust cloud, one piece lying glaze-side down showing the unglazed cream inside. 35mm lens, overhead camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 7 — `parca-el`

Ece'nin alyanslı eli bir parçayı alıyor · **Referans:** kirik

```text
Cinematic film still, photorealistic, close-up. The hand of a woman in her mid-thirties, straight chestnut shoulder-length hair, wearing a soft oatmeal knit cardigan over a white t-shirt, a thin gold wedding band, the gold wedding band visible, carefully picks up one large piece of the broken cream-and-blue vase from the wooden floor; her cardigan sleeve at frame edge. Other pieces blurred around. 85mm lens, very shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

## Notlar

- `kapi` ve `vazo` için I2V klip isteniyorsa: kareyi Kling/Veo'ya başlangıç karesi olarak ver; `kapi`: `The door slowly closes and clicks shut. Nothing else moves.` · `vazo`: `The vase trembles slightly, slides to the edge of the shelf and falls out of frame. Camera stays still.` Klip aynı adla `.mp4` olarak kaydedilir.

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
