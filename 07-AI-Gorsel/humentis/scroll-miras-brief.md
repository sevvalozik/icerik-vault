---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Miras"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, miras]
related: ["[[miras]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Miras — AI Görsel Brief

> Hikâye: [[miras]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/miras/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **ELIF:** `a woman in her late thirties, an architect, shoulder-length wavy auburn hair, wearing a charcoal wool coat over a cream turtleneck`
- **ANNE94:** `a woman in her early thirties in 1990s Turkey, dark hair in a short permed bob, wearing a patterned knitted cardigan over a simple blouse`
- **ANNE63:** `a woman in her thirties in 1960s rural Anatolia, a white cotton headscarf tied at the nape, wearing a long dark wool dress and a knitted vest`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `kapi-bugun` | Bugün: modern daire kapısı, içeriden, Elif arkadan | Gemini | ☐ |
| 2 | `kapi-bugun-sabah2` | Ertesi sabah: aynı kadraj, daha aydınlık, çıkan çantanın kenarı | Gemini | ☐ |
| 3 | `kapi-1994` | 1994: aynı kadraj, boyalı ahşap kapı, dantel perde | Gemini | ☐ |
| 4 | `pencere-1994` | 1994: aynı kadın pencere önünde, servisi izliyor | Gemini | ☐ |
| 5 | `kapi-1963` | 1963: aynı kadraj, kasaba evi, çift kanatlı ahşap kapı | Gemini | ☐ |

## Promptlar

### 1 — `kapi-bugun`

Bugün: modern daire kapısı, içeriden, Elif arkadan · **Referans:** —

```text
Cinematic film still, photorealistic. The entrance hall of a modern Ankara apartment in the early morning, seen from inside: a plain white front door standing ajar, soft morning daylight spilling in from the landing, a coat hook with a small child's jacket, a shoe rack. Seen strictly from behind, a woman in her late thirties, an architect, shoulder-length wavy auburn hair, wearing a charcoal wool coat over a cream turtleneck, stands at the door, one hand on the door handle. The door is centred in the frame; she stands left of it. 35mm lens, static camera at eye level. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. No children anywhere. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `kapi-bugun-sabah2`

Ertesi sabah: aynı kadraj, daha aydınlık, çıkan çantanın kenarı · **Referans:** kapi-bugun

```text
Edit this image. Keep the entrance hall, the door, the camera position and the woman exactly the same. Change only: the morning light is brighter and warmer, and at the edge of the doorway only the corner of a small school backpack is visible, as if someone has just stepped out. No person other than the woman is visible, no child, no hands. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 3 — `kapi-1994`

1994: aynı kadraj, boyalı ahşap kapı, dantel perde · **Referans:** kapi-bugun

```text
Cinematic film still, photorealistic, 1990s Turkey. The entrance hall of an older Ankara apartment in the early morning, seen from inside, same composition as the reference image: a painted wooden front door standing ajar, a lace curtain on the small door window, a wooden coat stand, patterned floor tiles, warm yellow morning light. Seen strictly from behind, a woman in her early thirties in 1990s Turkey, dark hair in a short permed bob, wearing a patterned knitted cardigan over a simple blouse, stands at the door, one hand on the handle. The door is centred in the frame; she stands left of it. 35mm lens, static camera. Warm slightly faded film-stock colours, low saturation. The face is never visible. No children anywhere. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 4 — `pencere-1994`

1994: aynı kadın pencere önünde, servisi izliyor · **Referans:** kapi-1994

```text
Cinematic film still, photorealistic, 1990s Turkey. A modest living room with lace curtains, early morning. Seen strictly from behind, a woman in her early thirties in 1990s Turkey, dark hair in a short permed bob, wearing a patterned knitted cardigan over a simple blouse, stands at the window holding the lace curtain slightly aside with one hand, watching the street below; a school minibus is a small blur at the street corner. Medium shot. 35mm lens. Warm faded film-stock colours, low saturation. The face is never visible. No children visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 5 — `kapi-1963`

1963: aynı kadraj, kasaba evi, çift kanatlı ahşap kapı · **Referans:** kapi-bugun

```text
Cinematic film still, photorealistic, 1960s rural Anatolia. The entrance of an old stone village house in the early morning, seen from inside, same composition as the reference image: a heavy double-leaf wooden door with iron fittings standing ajar, worn stone floor, a copper jug on a shelf, pale cool morning light. Seen strictly from behind, a woman in her thirties in 1960s rural Anatolia, a white cotton headscarf tied at the nape, wearing a long dark wool dress and a knitted vest, stands at the door, one hand on the wooden door edge. The door is centred in the frame; she stands left of it. 35mm lens, static camera. Soft desaturated, slightly faded tones. The face is never visible. No children anywhere. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

## Notlar

- Üç dönem karesi (`kapi-bugun`, `kapi-1994`, `kapi-1963`) **aynı kadrajda** olmalı: kapı ortada, kadın kapının solunda. `kapi-bugun`'u referans yükleyerek üret, yoksa erime geçişi kopuk durur.
- Hiçbir karede çocuk yok; sadece `kapi-bugun-sabah2`'de çantanın kenarı.

## Hareket (video) promptları

Durağan kare sitede fotoğraf gibi duruyor; film hissi için her kare kısa bir videoya çevrilir (image-to-video). **Önce kareyi yukarıdaki promptla üret, sonra o kareyi başlangıç karesi olarak videoya ver.**

- **Model:** Gemini'deki Veo ("Video" modu, görsel yükle) ya da Kling (image-to-video). Runway'de prompt kısa tutulur.
- **Ses kapalı**, 16:9, 1080p, kamera hareketi yazılandan fazla olmasın.
- **Kaydet:** aynı klasöre, aynı adla `.mp4` (örn. `oda-gece.mp4`). Site `.mp4` varsa fotoğraf yerine onu kullanır.
- **Mod:** `loop` = arka planda sürekli, hafif · `scrub` = scroll'a bağlı: kaydırdıkça ilerler, geri kaydırınca geri gider.
- **Videoları koyunca Claude'a söyle:** scrub'ın akıcı olması için videoların özel ayarla yeniden kodlanması gerekiyor (her kare anahtar kare). Bunu Claude yapar; elle yapılacaksa: `ffmpeg -i girdi.mp4 -an -c:v libx264 -crf 22 -g 1 -pix_fmt yuv420p -vf scale=1920:-2 -movflags +faststart cikti.mp4`

| Kod | Mod | Süre (sn) | Hareket promptu |
|---|---|---|---|
| `kapi-bugun` | scrub | 5 | `Static camera. The woman slowly pulls the front door closed until it clicks shut; morning light on the floor narrows to a thin line. The person's face never becomes visible. Nothing else changes. No text. No child appears.` |
| `kapi-bugun-sabah2` | scrub | 5 | `Static camera. The corner of the small backpack disappears through the doorway; the woman's hand stays on the handle, then she slowly closes the door. The person's face never becomes visible. Nothing else changes. No text. No child appears.` |
| `kapi-1994` | loop | 5 | `Static camera. The lace curtain on the door window moves slightly in a draught; the woman stands at the half-open door, still. The person's face never becomes visible. Nothing else changes. No text.` |
| `pencere-1994` | loop | 5 | `Static camera. The woman holds the lace curtain aside; far below the school minibus turns the corner and disappears. The person's face never becomes visible. Nothing else changes. No text.` |
| `kapi-1963` | loop | 5 | `Static camera. Dust drifts in the pale morning light at the half-open wooden door; the woman's headscarf moves slightly in the breeze. The person's face never becomes visible. Nothing else changes. No text.` |

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
