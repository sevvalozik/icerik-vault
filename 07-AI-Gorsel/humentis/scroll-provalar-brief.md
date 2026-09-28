---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Provalar"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, provalar]
related: ["[[provalar]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Provalar — AI Görsel Brief

> Hikâye: [[provalar]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/provalar/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **NIL:** `a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `oda-gece` | Nil'in odası, gece, arkadan yatağın kenarında | Gemini | ☐ |
| 2 | `nil-poz-1` | Hayalet pozu 1: ayakta, birinin karşısında konuşur gibi | Gemini | ☐ |
| 3 | `nil-poz-2` | Hayalet pozu 2: başı öne eğik, kollar kavuşturulmuş | Gemini | ☐ |
| 4 | `nil-poz-3` | Hayalet pozu 3: bir eli ensesinde, duraksamış | Gemini | ☐ |
| 5 | `nil-poz-4` | Hayalet pozu 4: iki eli yanlarda, gergin, dimdik | Gemini | ☐ |
| 6 | `nil-poz-5` | Hayalet pozu 5: yarı dönük, bir adım geri çekilmiş | Gemini | ☐ |
| 7 | `nil-poz-6` | Hayalet pozu 6: elleri yüzüne götürmüş (arkadan) | Gemini | ☐ |
| 8 | `oda-sabah` | Aynı oda, şafak | Gemini | ☐ |
| 9 | `koridor` | Ofis koridoru, Nil arkadan kapıyı tıklatıyor | Gemini | ☐ |
| 10 | `koridor-duvar` | Nil sırtını duvara vermiş, yandan-arkadan | Gemini | ☐ |

## Promptlar

### 1 — `oda-gece`

Nil'in odası, gece, arkadan yatağın kenarında · **Referans:** —

```text
Cinematic film still, photorealistic. A modest bedroom in an Ankara apartment at night: a double bed with a rumpled linen duvet, a bedside table with a phone lying face-down, a closed wardrobe, a window with linen curtains and distant city lights. Seen strictly from behind, a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, sits on the edge of the bed, shoulders slightly hunched, hands in her lap. Wide shot, she is small at the lower centre of the frame, with a lot of empty floor space around her on both sides (for figures added later). 28mm lens, static camera. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `nil-poz-1`

Hayalet pozu 1: ayakta, birinin karşısında konuşur gibi · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen strictly from behind, standing upright, one hand slightly raised as if explaining something to someone in front of her. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, no shadows on the background, the whole figure visible from head to feet with space around it. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 3 — `nil-poz-2`

Hayalet pozu 2: başı öne eğik, kollar kavuşturulmuş · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen strictly from behind, standing with arms crossed tightly and head bowed forward. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, the whole figure visible from head to feet with space around it. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 4 — `nil-poz-3`

Hayalet pozu 3: bir eli ensesinde, duraksamış · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen strictly from behind, standing still, one hand rubbing the back of her neck, weight on one leg, as if hesitating. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, whole figure visible head to feet. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 5 — `nil-poz-4`

Hayalet pozu 4: iki eli yanlarda, gergin, dimdik · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen strictly from behind, standing very straight and tense, arms stiff at her sides, fists loosely clenched. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, whole figure visible head to feet. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 6 — `nil-poz-5`

Hayalet pozu 5: yarı dönük, bir adım geri çekilmiş · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen from behind and slightly to the side (back three-quarter view, face turned away and not visible), taking a small step backwards, one hand half-raised. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, whole figure visible head to feet. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 7 — `nil-poz-6`

Hayalet pozu 6: elleri yüzüne götürmüş (arkadan) · **Referans:** oda-gece

```text
Full-body photograph of a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, seen strictly from behind, standing with both hands raised to her face as if covering it, elbows out, shoulders lifted. Isolated on a plain seamless flat medium-grey studio background, even soft lighting, whole figure visible head to feet. 50mm lens, eye level. Low saturation. The face is never visible. Vertical 2:3, high resolution, photorealistic. No text, no logos, no props.
```

### 8 — `oda-sabah`

Aynı oda, şafak · **Referans:** oda-gece

```text
Edit this image. Keep the room, the camera position, the framing and the woman on the edge of the bed exactly the same. Change only the time of day: it is early dawn, pale blue-gold light enters through a narrow gap in the linen curtains from the left and falls in a soft diagonal across the floor. Everything else unchanged. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 9 — `koridor`

Ofis koridoru, Nil arkadan kapıyı tıklatıyor · **Referans:** oda-gece

```text
Cinematic film still, photorealistic. A calm modern office corridor in the morning: pale walls, light oak doors, soft daylight from a window at the end. Seen strictly from behind, a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers, stands at a closed oak office door, her right hand raised mid-knock, a notebook in her left hand. Medium shot, she is right of centre. 35mm lens, static camera at eye level. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 10 — `koridor-duvar`

Nil sırtını duvara vermiş, yandan-arkadan · **Referans:** oda-gece

```text
Cinematic film still, photorealistic. The same calm office corridor in morning daylight. a woman in her late twenties, a project manager, straight dark hair in a low ponytail, wearing a soft sage-green knit sweater and loose cream trousers leans with her back against the pale corridor wall right next to an oak door, head tilted back against the wall, eyes toward the ceiling; the camera sees her from the side and slightly behind so her face is hidden by her hair and shoulder. Medium shot, she is centred with empty corridor space on both sides. 50mm lens, shallow depth of field. Muted warm-neutral color grade, ivory highlights, deep petrol-green shadows, low saturation, gentle contrast, filmic softness. The face is never visible. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

## Notlar

- **Hayalet pozlarını şeffaf yap:** görseli Mac'te Önizleme ile aç → **Araçlar → Arka Planı Kaldır** → **Dosya → Dışa Aktar → PNG**. Adı `nil-poz-1.png` … `nil-poz-6.png`.
- `oda-gece`'de Nil'in etrafında boş zemin kalması önemli: hayaletler oraya yerleşiyor.
- `oda-sabah` bir düzenleme promptu: `oda-gece`yi yükleyip ver ki aynı oda kalsın.

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
