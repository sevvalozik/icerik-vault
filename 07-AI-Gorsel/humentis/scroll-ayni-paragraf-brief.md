---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Aynı Paragraf"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, ayni-paragraf]
related: ["[[ayni-paragraf]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Aynı Paragraf — AI Görsel Brief

> Hikâye: [[ayni-paragraf]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/sinav-ve-performans-kaygisi/ayni-paragraf/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **DENIZ:** `a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie`

## Filmden hazır kareler (üretme, zaten kopyalandı)

- `oda.jpg` ← filmdeki `humentis-bulunma-a1.jpg`
- `omuz.jpg` ← filmdeki `humentis-bulunma-a2.jpg`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `not` | Ders notu yakın plan, kurşun kalem | Gemini | ☐ |
| 2 | `telefon-masa` | Masada flu ışık veren telefon, üstten | Gemini | ☐ |
| 3 | `pencere` | Pencere kulpunda el, keten perde | Gemini | ☐ |
| 4 | `oda-sayfalar` | Deniz arkadan pencere önünde, havada sayfalar | Gemini | ☐ |
| 5 | `kagit-doku` | Boş krem kâğıt dokusu | Gemini | ☐ |

## Promptlar

### 1 — `not`

Ders notu yakın plan, kurşun kalem · **Referans:** oda (filmdeki a1)

```text
Cinematic film still, photorealistic, close-up. Handwritten university lecture notes on lined paper on a wooden desk at night, a pencil resting diagonally on the page, a wide empty left margin on the page. Only the cool glow of a phone off-frame lights the paper. 85mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. The handwriting is illegible scribbles. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `telefon-masa`

Masada flu ışık veren telefon, üstten · **Referans:** oda

```text
Cinematic film still, photorealistic, top-down. A phone lying face-up on a wooden desk among lecture notes at night, the screen a soft blank glow with no readable content, lighting the paper around it. 50mm lens. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. No people visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 3 — `pencere`

Pencere kulpunda el, keten perde · **Referans:** oda

```text
Cinematic film still, photorealistic. Close shot of the hand of a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, grey hoodie sleeve, on the handle of a tall window at night, about to open it; a linen curtain beside the window, distant Ankara city lights outside. 50mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 4 — `oda-sayfalar`

Deniz arkadan pencere önünde, havada sayfalar · **Referans:** oda

```text
Cinematic film still, photorealistic. A small rented student room at night with the window wide open, the linen curtain billowing inward. Seen strictly from behind, a young woman in her early twenties, a university student, shoulder-length dark brown wavy hair loosely tied back, thin silver-rimmed glasses, wearing an oversized heather-grey hoodie, stands in front of the open window. Eight loose sheets of lecture notes float gently in the air around the room, caught by the breeze. Wide shot. 28mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 5 — `kagit-doku`

Boş krem kâğıt dokusu · **Referans:** —

```text
Flat top-down photograph of a single blank sheet of warm cream paper with a subtle natural fibre texture, filling the entire frame edge to edge, perfectly even soft light, no shadows, no folds, no lines, no text. 16:9, very high resolution.
```

## Notlar

- `oda` ve `omuz` filmden kopyalandı; yeniden üretme.
- `pencere` için klip: `The hand turns the handle and the window opens inward; the curtain billows. Nothing else moves.`

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
