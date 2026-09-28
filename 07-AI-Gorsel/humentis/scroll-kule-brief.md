---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kule"
kullanim: "scroll site videosu (kurgu)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, kule, cocuk-gelisimi]
related: ["[[kule]]", "[[teknik-spec]]", "[[scroll-yarim-adim-brief]]"]
---

# Humentis — Scroll: Kule — Video Brief

> Hikâye: [[kule]] · Kayıt: `03-Assets/images/humentis/scroll/cocuk-gelisimi-ve-okula-hazirlik/kule/`
> Hedef **1080p**, sessiz, sabit kamera. Kuralları Yarım Adım'dan öğrendik: bir klipte tek hareket, her klip bir öncekinin son karesinden başlar.

## Seçenek A: AI ile (Flow / Veo)

Sırayla üret. Her adımda bir önceki adımın son karesini "başlangıç görseli" olarak yükle.

| Sıra | Dosya | Başlangıç görseli | Ne oluyor |
|---|---|---|---|
| 1 | `kf-baslangic.jpg` | — (görsel) | Halıda iki katlı küçük kule, etrafta dağınık bloklar |
| 2 | `dizme.mp4` | `kf-baslangic.jpg` | El iki blok ekler, kule 4 kat olur |
| 3 | `yikilma.mp4` | `dizme`'nin son karesi | El 5. bloğu yamuk koyar, kule halıya yıkılır |
| 4 | `kf-yuksek.jpg` | `kf-baslangic.jpg` (aynı oda) | Geniş tabanlı, 7 katlı kule, en üst boş |
| 5 | `son-blok.mp4` | `kf-yuksek.jpg` | El en üste son bloğu koyar ve çekilir |

### 1. `kf-baslangic.jpg`
```text
Photorealistic film still. A real child's bedroom in soft daylight: a light wool rug on a wooden floor, a window on the upper right letting in warm morning sun, a few soft toys and a low shelf blurred in the background. On the rug, a small tower of two natural unpainted wooden blocks, and six more blocks scattered loosely around it. Camera very low, at rug level, side view, static; the tower in the centre-left of the frame with empty space above it. Warm, calm, muted natural colours, shallow depth of field, soft filmic grain. No people, no hands, no text, no logos, no brand names on toys. 16:9, 1080p.
```

### 2. `dizme.mp4`
```text
Photorealistic film shot based exactly on the uploaded image. Same child's bedroom, same rug, same low static side view.
Action: a small child's hand and forearm (about four years old) enters from the right edge of the frame, picks up one wooden block from the rug and places it on top of the tower, then picks up a second block and places it on top. The tower is now four blocks high. The hand stays near the tower. Only the hand and forearm are ever visible; no face, no body, no other person.
Camera: locked-off, no zoom, no pan. Lighting unchanged. Warm muted natural colours, soft filmic grain. 8 seconds, 1080p. No text, no logos, no sound.
```

### 3. `yikilma.mp4`
```text
Photorealistic film shot based exactly on the uploaded image. Same bedroom, same four-block tower, same small child's hand near it, same low static side view.
Action: the hand places a fifth block on top slightly off-centre. The tower wobbles for a moment, then topples sideways and the blocks tumble onto the rug. The hand pulls back out of frame to the right. The blocks come to rest scattered on the rug. Only the child's hand and forearm are ever visible; no face, no body.
Camera: locked-off, no zoom, no pan. Lighting unchanged. Warm muted natural colours, soft filmic grain. 6 seconds, 1080p. No text, no logos, no sound.
```

### 4. `kf-yuksek.jpg`
```text
Photorealistic film still based on the uploaded image: exactly the same child's bedroom, rug, window light and low static side view. On the rug now stands a taller tower of seven natural wooden blocks, carefully stacked, with a wider base of two blocks side by side. One last block lies on the rug next to it. No people, no hands, no text, no logos. 16:9, 1080p.
```

### 5. `son-blok.mp4`
```text
Photorealistic film shot based exactly on the uploaded image. Same bedroom, same tall seven-block tower, same low static side view.
Action: a small child's hand and forearm enters from the right, picks up the last block from the rug and slowly, carefully places it on the very top of the tower. The tower stays standing. The hand pauses for a second, then withdraws out of frame to the right. Only the hand and forearm are ever visible; no face, no body.
Camera: locked-off, no zoom, no pan. Warm morning light slightly brightening from the window. Warm muted natural colours, soft filmic grain. 7 seconds, 1080p. No text, no logos, no sound.
```

**Model zorlanırsa:**
- Kule dizilirken bloklar erir veya kayarsa `dizme`'yi tek bloğa indir. Tek blok yeterli, hikâyeyi yıkılma ve son blok taşıyor.
- El bir yetişkin eli gibi görünürse `a very small hand of a four-year-old child, chubby fingers` ekle.
- Yüz ya da beden kadraja girerse `extreme close framing on the rug, the child is entirely out of frame except for the hand` ekle.

## Seçenek B: Gerçek çekim (telefonla)

Bu hikâye gerçek çekimde AI'dan daha inandırıcı olur ve 15 dakika sürer:
- Telefonu halıya yakın, yatay olarak bir şeye dayayıp sabitle. 4K ya da 1080p, 30 fps kullan, pencere ışığı yandan gelsin.
- Tek çekimde çocuk blokları dizsin, kule yıkılsın, sonra yeniden kursun. Sadece eli kadrajda olsun, kadrajı halıya yakın tut.
- Çekimi ebeveyn izniyle, bir akraba ya da tanıdık çocuğuyla yap.
- Ham videoyu klasöre koy. Claude parçaları (`dizme`, `yikilma`, `son-blok`) kesip scrub için kodlar.

## Teslim

Dosyaları aynı adlarla klasöre koy ve Claude'a söyle. Videolar scrub için her karesi anahtar kare olacak şekilde yeniden kodlanır (`-g 1`) ve `KURGU` saniyeleri kliplerin süresine göre yazılır.
