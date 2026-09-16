---
type: video-brief
client: "Nefin Beauty"
slug: nefin-beauty
kampanya: "Vitamin C Serum — lansman reels"
platform: reels
oran: "9:16"
hedef_sure: "25 sn"
model_birincil: kling
model_yedek: veo
status: draft
date: 2026-09-16
tags: [ai-video, brief, nefinbeauty, kozmetik, vitamin-c]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[06-AI-Video/nefin-beauty/video-log]]", "[[sektor-receteleri]]"]
---

# Nefin Beauty — Vitamin C Serum — AI Video Brief

> Bu brief, [[video-brief-template]]'in doldurulmuş **örnek** halidir. Mevcut 4 Nefin videosu (bkz. [[06-AI-Video/nefin-beauty/video-log]]) ayrı ayrı üretilmiş, birbirinden kopuk klipler; bu brief onları tek marka diliyle yeniden üretip 25 sn'lik bir reels'e bağlamak için yazıldı. Prompt'lar üretime hazır; `status: draft` çünkü henüz üretilmedi ve gerçek ürün fotoğrafı bekleniyor.

## 1. Amaç & mesaj

- **Tek cümlelik amaç:** Vitamin C Serum'u "aydınlık + ışıltı" vaadiyle, doku → ürün → içerik → ritüel akışında 25 sn'de tanıtmak.
- **İzleyici ne hissetsin / ne yapsın:** "Temiz, güvenilir, sabah rutinime girer" → profil linkine tıkla.
- **Platform / oran / süre:** Instagram Reels + TikTok, 9:16, 25 sn (4 AI klip + post kapanış)
- **Yayın tarihi:** ❓
- **Onay veren:** ❓ (Nefin karar verici)

## 2. Marka çapası

- Marka brief: [[00-Musteriler/nefin-beauty/marka-brief]]
- **AI Brief Bloğu:**

```text
BRAND: Nefin Beauty — skincare (serums, tonics, creams), Türkiye.
POSITIONING: clinical transparency meets a modern, accessible "clean-girl" aesthetic; proof + emotion side by side.
AUDIENCE: women 22–40 who buy skincare as a daily ritual, discover products through Reels/TikTok.
TONE: calm, precise, warm-editorial; never loud discount language, never medical cure claims.
PALETTE: background #E8D5C4 cream, headings #3A241C dark brown, body #7D6259 taupe, accents #96594A terracotta and #B87D6D dusty rose; product materials = amber glass + brushed gold.
TYPOGRAPHY (post-production only): headings Cambria (serif), body Calibri.
VISUAL DIRECTION: soft warm daylight, cream linen, travertine stone, wood, cotton pads, orange slices for vitamin C; hands and product only, no full faces in AI shots.
COLOR GRADE: warm cream and amber, soft highlights, low contrast, slightly lifted blacks, no cool blue tint.
NEVER: AI-rendered logos or readable text, burgundy velvet backdrops, purple/neon, black luxury-nightclub look, cure/treatment claims.
```

- **Grade satırı (EN):** `warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks, subtle 35mm film grain, no cool blue tint`
- **Negatif liste:** [[negatif-promptlar]] → Genel + Kozmetik

## 3. Kartlar

| Kart | EN metin | Referans görsel |
|---|---|---|
| PRODUCT SHEET | `a 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap, minimal cream label with fine serif lettering (label text kept blurred and illegible), filled with translucent golden-orange serum` | ❓ gerçek ürün fotoğrafı yok — geçici: `03-Assets/videos/nefin-beauty/c_vitamini_serumunu_havuzda_ta.mp4` 4. sn karesi (etiket zaten AI, referans olarak zayıf) |
| CHARACTER SHEET | `a woman's hands only, olive skin, short natural nails without polish, a thin gold ring on the right hand` | — |
| LOCATION SHEET | `cream linen cloth draped over pale travertine stone, soft-focus dried pampas stem, a fresh orange slice, morning window light from the left` | — |

## 4. Kurgu planı

| # | Sn | Çekim | Amaç | Kaynak | Model | Durum |
|---|---|---|---|---|---|---|
| 1 | 0–3 | Makro: damla düşer, halka yayılır | hook | AI | Kling Pro I2V (yedek Veo) | ☐ |
| 2 | 3–9 | Hero: 45° push-in, portakal dilimi ön planda | ürün | AI I2V | Kling | ☐ |
| 3 | 9–15 | Rack focus: portakal → şişe; su damlacıkları | içerik/fayda | AI | Veo 3.x (ışık için) | ☐ |
| 4 | 15–21 | Eller: 2 damla el üstüne, parmakla yayma | kullanım | AI | Kling I2V | ☐ |
| 5 | 21–25 | Logo + "Vitamin C Serum" + CTA | kapanış | post | — | ☐ |

**Ekran yazıları (post, Cambria başlık / Calibri alt):**
- 0–3: "Sabah ışığı, tek damla." (üstte sabit, sessiz izleme için)
- 9–15: "Vitamin C · aydınlık görünüm" (iddia değil, görünüm dili)
- 21–25: logo + "nefin" + "Profildeki linkten keşfet"

**Ses:** klipler sessiz üretilir (Kling) → post'ta hafif akustik müzik + SFX (damla). Veo klibi ses satırında `No music. Soft liquid drip only. No subtitles.`

## 5. Shot promptları

### Shot 1 — Makro damla (hook)

**Varyant A (güvenli, locked-off)**
```text
Cinematic skincare commercial, photorealistic. A 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap, minimal cream label with fine serif lettering (label text kept blurred and illegible), filled with translucent golden-orange serum. The glass pipette is raised just above the bottle mouth; a single translucent golden drop forms at its tip, hangs for a moment, then falls onto pale travertine beside the bottle and spreads into a thin glossy ring. Extreme close-up, 100mm macro lens, very shallow depth of field, locked-off camera, slow motion. Soft warm window light from the left, specular highlights on the glass and the drop, cream linen out of focus behind. Warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks, subtle 35mm film grain, no cool blue tint. Calm, precise, luxurious. No text, no logos, no hands, no face. 9:16, 8 seconds.
```
**Negatif**
```text
text, letters, captions, watermark, logo, hands, face, bottle morphing, label changing, cap changing shape, extra bottles, sparkles, glitter, lens flare, purple tint, blue tint, neon, burgundy, black background, harsh flash, flicker, blurry, oversaturated, cartoon, 3d render look
```
**Varyant B (cesur: içeriden ışık)**
```text
Cinematic skincare commercial, photorealistic. Extreme close-up of the raised glass pipette of an amber dropper bottle, backlit by warm morning sun so the golden-orange serum inside the pipette glows; a single drop stretches, detaches and falls in slow motion, catching a bright rim of light. 100mm macro, shallow depth of field, locked-off camera. Warm cream and amber grade, soft highlights, low contrast, subtle film grain. Bright, fresh, calm. No text, no logos, no hands, no glitter. 9:16, 8 seconds.
```
- Model / mod: Kling Pro, T2V (fotoğraf gelince I2V), relevance 0.6, 5 sn (kurguda 3 sn kullanılacak)
- Süre / oran: 5–8 sn / 9:16

### Shot 2 — Hero push-in

**Varyant A**
```text
Cinematic product hero shot, photorealistic. A 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap, minimal cream label with fine serif lettering (label text kept blurred and illegible), filled with translucent golden-orange serum, stands centered on cream linen cloth draped over pale travertine stone; a fresh orange slice rests slightly out of focus in the foreground left, a dried pampas stem soft in the background. The camera performs a slow dolly push-in from a 45-degree angle, 85mm lens, shallow depth of field; the bottle stays perfectly still. Soft diffused morning window light from the left with a subtle rim light outlining the bottle. Warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks, subtle 35mm film grain. Still, confident, premium. No text, no logos, no people. 9:16, 8 seconds.
```
**Negatif:** Shot 1 ile aynı.
**Varyant B (orbit)**
```text
Same scene. The camera slowly circles the bottle clockwise through about 90 degrees at eye level, 85mm lens, shallow depth of field; the bottle, its label and cap remain exactly the same throughout. Soft window light, warm cream and amber grade. No text, no logos, no people. 9:16, 8 seconds.
```
- Model / mod: Kling Pro **I2V** (gerçek ürün fotoğrafı → Gemini ile keten/traverten sahnesine yerleştir → başlangıç karesi). Fotoğraf gelene kadar üretme; T2V'de etiket her seferinde değişir.

### Shot 3 — Portakal → şişe rack focus (içerik)

**Varyant A**
```text
Editorial beauty film, photorealistic. A fresh orange slice with tiny water droplets beading on it rests on wet pale travertine in the foreground; behind it, slightly out of focus, a 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap, minimal cream label (text illegible), golden-orange serum. A slow rack focus shifts from the orange slice to the bottle. Close-up, 100mm macro lens, very shallow depth of field, locked-off camera. Bright morning window light from the left, soft caustic light reflections from a nearby water surface dancing gently on the stone. Warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks, subtle film grain. Audio: quiet room tone, a faint water ripple, no music, no dialogue, no subtitles. Fresh, clean, calm. No text, no logos, no hands. 9:16, 8 seconds.
```
- Model / mod: Veo 3.x (kostik ışık ve ses için), 9:16, 8 sn; yedek Kling.

### Shot 4 — Eller: uygulama

**Varyant A**
```text
Cinematic skincare commercial, photorealistic. A woman's hands only — olive skin, short natural nails without polish, a thin gold ring on the right hand. The right hand holds a 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap (label text illegible) and squeezes the pipette; two golden-orange drops fall onto the back of the left hand, and one fingertip slowly spreads the serum, leaving a soft glossy sheen. Close-up on hands only, no face in frame, 50mm lens, shallow depth of field, very subtle handheld movement. Soft warm window light from the left, cream linen background out of focus. Warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks, subtle film grain. Gentle, unhurried, ritual-like. Exactly five fingers on each hand, natural skin texture. No text, no logos, no face, no glitter. 9:16, 8 seconds.
```
**Negatif (insanlı ek):**
```text
face, extra fingers, missing fingers, fused fingers, deformed hands, nail polish, plastic skin, bottle morphing, label changing, text, logo, watermark, sparkles, glitter, blue tint, flicker
```
- Model / mod: Kling Pro I2V (Gemini ile "hands holding the bottle" sahne görseli → I2V). El sayısını tek elde tutan Varyant B: sadece sağ el şişeyi tutar, damla traverten yüzeye düşer.

## 6. Post-prodüksiyon

- [ ] Klipler → `03-Assets/videos/nefin-beauty/nefin-vitc-s01-v1.mp4` … `s04`
- [ ] Renk: tek preset "nefin-cream-amber" (CapCut/Premiere'de kaydet; sıcaklık +5, kontrast −10, siyahlar +5)
- [ ] Yazı: Cambria (hook), Calibri (alt); renk `#3A241C`, zemin gerektiğinde `#E8D5C4` %80
- [ ] Logo end-card: ❓ logo dosyası yok → müşteriden SVG/PNG
- [ ] Müzik: hafif akustik / lo-fi, lisanslı (Epidemic/Artlist) — not: platform müzik kütüphanesi ticari hesapta kısıtlı
- [ ] Altyazı manuel; hook video boyunca üstte sabit
- [ ] Dışa aktarım: 1080×1920, H.264, 30 fps

## 7. Üretim logu

| Tarih | Shot | Model / sürüm | Varyant | Seed | Dosya | Puan | Not |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | Henüz üretim yapılmadı. Önceki bağımsız klipler için bkz. video-log. |

## 8. Durum & onay

- **Durum:** draft (gerçek ürün fotoğrafı + logo bekleniyor)
- **Müşteri geri bildirimi:** —
- **Öğrenilenler:** Mevcut havuz klibinde (`c_vitamini_serumunu_havuzda_ta.mp4`) etiket okunaklı ama AI üretimi; gerçek etiketle uyuşmuyorsa marka için risk. Bu brief'te etiket bilinçli olarak bulanık tutuldu; okunaklı etiket sadece gerçek fotoğraf + I2V ile.
