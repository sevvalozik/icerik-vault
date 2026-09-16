---
type: video-brief
client: "Humentis"
slug: humentis
kampanya: "Klinik tanıtım — AI B-roll havuzu"
platform: reels
oran: "9:16"
hedef_sure: "6 klip × 8 sn (kurguda 2-4 sn parçalar)"
model_birincil: veo
model_yedek: kling
status: draft
date: 2026-09-16
tags: [ai-video, brief, humentis, klinik, b-roll]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[humentis-klinik-icerikleri]]", "[[06-AI-Video/humentis/video-log]]"]
---

# Humentis — Klinik Tanıtım — AI B-roll Brief

> Elif Silav'ın tanıtım videosu **gerçek çekim** ([[humentis-klinik-icerikleri]] → Çekim Notları). Oradaki "Ayrıca çekilecek B-roll" listesi (kapı açılışı, boş oda, pencere ışığı, koridor, bekleme alanı, test materyalleri, çocuk odası, dış cephe) gerçek çekimde zaman kalmazsa ya da terapist reels serisi için ortak havuz olarak **AI ile üretilir**. Kural: insan yok, danışan yok, çocuk yok, medikal obje yok. Gerçek klinik fotoğrafı geldiğinde promptlar mekana göre güncellenir (❓ bekleniyor).

## 1. Amaç & mesaj

- **Amaç:** "Kapımız açık, acelesi yok" hissini mekanla anlatan 6 klip; Elif Hoca'nın sesi üzerine ve 12 terapist reels'inin arasına girecek.
- **İzleyici ne hissetsin:** güvenli, sakin, ulaşılabilir; hastane değil.
- **Platform / oran / süre:** Reels/Stories 9:16; her klip 8 sn, kurguda 2–4 sn.
- **Onay veren:** Elif Silav ❓

## 2. Marka çapası

- Marka brief: [[00-Musteriler/humentis/marka-brief]]
- **Grade satırı (EN):** `muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness`
- **Negatif liste:** [[negatif-promptlar]] → Genel + Klinik/psikoloji

## 3. Kartlar

| Kart | EN metin |
|---|---|
| LOCATION SHEET (oda) | `a calm private counselling room: a soft sage-green armchair, warm oak side table with a single plant, linen curtains diffusing daylight, cream walls, no people` |
| LOCATION SHEET (koridor) | `a long cream corridor with a row of pale oak doors, each with a small brass number plate (numbers illegible), soft daylight from side windows, a single plant at the far end` |
| PALET İPUCU (prompt içinde) | `cream #F6EFDD walls, sage-green upholstery, oak wood, a single matte-gold detail` |

## 4. Kurgu planı (havuz — sıra kurguda belirlenir)

| # | Çekim | Elif Hoca metninde nereye | Model | Durum |
|---|---|---|---|---|
| 1 | Kapı açılışı, içeri giren ışık | "Ne zaman hazır olursanız kapımız açık" | Veo | ☐ |
| 2 | Boş danışma odası, koltuk (gimbal ileri) | "dinlemeyi bilen bir yer kuralım istedik" | Veo | ☐ |
| 3 | Keten perde + pencere ışığı (makro) | 2 sn'lik beklemeler | Kling | ☐ |
| 4 | Koridor + kapı numaraları (tracking) | "14 danışma odası" | Veo | ☐ |
| 5 | Bekleme alanı (geniş, boş) | "Hiç acelesi yok" | Veo | ☐ |
| 6 | Bitki yaprağı makro (botanik dil) | reels geçişleri | Kling | ☐ |

**Ekran yazıları:** yok (Elif Hoca'nın altyazısı Manrope ile post'ta). Kapanış kartı: logo animasyonu (mevcut) + adres + telefon (Source Serif 4).

**Ses:** Veo kliplerinde `Audio: quiet room tone only, no music, no dialogue, no subtitles` (Elif Hoca'nın sesi üstte olacak).

## 5. Shot promptları

### Shot 1 — Kapı açılışı
```text
Quiet documentary-style interior film, photorealistic. A pale oak door with a small brass number plate (illegible) opens slowly inward, and soft daylight spills across a cream corridor floor and wall, cream #F6EFDD walls, a hint of sage-green upholstery visible inside the room. No people; the door moves as if opened gently from inside. Medium shot, 35mm lens, locked-off camera, real-time speed. Soft overcast daylight, gentle volumetric light through the doorway, no dramatic shadows. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. Audio: quiet room tone and a soft door movement, no music, no dialogue, no subtitles. Calm, welcoming, unhurried. No text, no logos, no signage, no medical equipment. 9:16, 8 seconds.
```
**Negatif:** `people, faces, patients, children, hospital, medical equipment, white coat, pills, pastel pink, lavender, purple gradient, dramatic shadows, dark moody lighting, text, logo, watermark, flicker, warped walls, extra doors`

### Shot 2 — Boş danışma odası
```text
Quiet interior film, photorealistic. A calm private counselling room: a soft sage-green armchair, warm oak side table with a single plant, linen curtains diffusing daylight, cream walls, no people. The camera glides forward very slowly on a gimbal toward the empty armchair, 35mm lens, moderate depth of field. Soft daylight through the linen curtains, warm-neutral tone, no lamps on. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. Audio: quiet room tone only, no music, no dialogue, no subtitles. Safe, calm, private. No people, no text, no logos, no medical equipment, no clock. 9:16, 8 seconds.
```

### Shot 3 — Keten perde (Kling)
```text
photorealistic interior close-up, a linen curtain gently moving in a slight breeze, soft daylight diffusing through the fabric, a blurred sage-green armchair behind it, cream walls, 85mm lens, shallow depth of field, static camera, slow motion, muted warm-neutral grade, ivory highlights, low saturation, filmic softness, peaceful, no people, no text
Negative: people, face, hospital, medical, pink, lavender, purple, dramatic shadows, text, logo, watermark, flicker, warped fabric
```

### Shot 4 — Koridor
```text
Quiet interior film, photorealistic. A long cream corridor with a row of pale oak doors, each with a small brass number plate (numbers illegible), soft daylight from side windows, a single plant at the far end. Slow tracking shot moving forward along the corridor at a calm walking pace, 24mm lens, deep focus, camera height at chest level, perfectly stable. Even soft daylight, no harsh shadows. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. Audio: quiet room tone only, no music, no dialogue, no subtitles. Orderly, calm, spacious. No people, no text, no logos, no signage, no medical equipment. 9:16, 8 seconds.
```

### Shot 5 — Bekleme alanı
```text
Quiet interior film, photorealistic. A bright, empty waiting area: two sage-green fabric sofas, a low oak coffee table with a single ceramic cup and a small plant, cream walls, large windows with linen curtains, one matte-gold wall sconce switched off. The camera performs a very slow pan from left to right. 35mm lens, moderate depth of field. Soft overcast daylight. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. Audio: quiet room tone only, no music, no dialogue, no subtitles. Unhurried, welcoming. No people, no text, no logos, no magazines with readable covers, no medical equipment. 9:16, 8 seconds.
```

### Shot 6 — Botanik makro (Kling)
```text
photorealistic extreme close-up of soft green leaves of an indoor plant, soft daylight slowly moving across the leaves as a cloud passes, fine leaf vein detail, cream wall out of focus behind, 100mm macro, shallow depth of field, static camera, muted warm-neutral grade, low saturation, filmic softness, living, gentle, still, no text
Negative: people, hands, text, logo, watermark, flowers, pink, purple, oversaturated, flicker, morphing leaves
```

## 6. Post-prodüksiyon

- [ ] Klipler → `03-Assets/videos/humentis/humentis-broll-s01-v1.mp4` … `s06`
- [ ] Renk: tek preset "humentis-ivory-petrol"; gerçek çekimle (Elif Hoca) yan yana eşle
- [ ] Yazı: Elif Hoca altyazısı Manrope; kapanış Source Serif 4; renk `#284C51` üzerine `#F6EFDD`
- [ ] Logo: mevcut `humentis-logo-animasyonu.mp4` → 9:16 (krem dolgu) en sona; açılışta logo yok (çekim notu)
- [ ] Ses: Elif Hoca sesi + çok düşük ambient; müzik varsa sözsüz, yumuşak
- [ ] Danışan/çocuk görünmediği son kez kontrol

## 7. Üretim logu

| Tarih | Shot | Model / sürüm | Varyant | Seed | Dosya | Puan | Not |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## 8. Durum & onay

- **Durum:** draft — gerçek klinik fotoğrafları gelince mekan kartları güncellenecek (koltuk rengi, duvar tonu gerçekle eşleşmeli)
- **Öğrenilenler:** —
