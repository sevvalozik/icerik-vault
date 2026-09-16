---
type: kutuphane
tags: [ai-gorsel, prompt, formul, gemini, midjourney, rehber]
date: 2026-09-16
---

# AI Görsel Prompt Formülü

> Görsel üretimi videonun ön adımıdır: iyi bir **başlangıç karesi** = tutarlı video (bkz. [[tutarlilik-rehberi]]). Bu dosya hem bağımsız görsel (post, hero, kapak) hem de "video için keyframe" üretimini kapsar. Ekip şu ana kadar Gemini kullandı (`Gemini_Generated_Image_*`); akış Gemini merkezli yazıldı, diğer modeller için notlar altta.

## Altın kurallar

1. **Gerçek ürün → düzenleme, tarif → üretim.** Ürün varsa fotoğrafını yükle ve "keep the product exactly the same" de (Gemini görsel / Nano Banana bunu iyi yapar). Ürünü kelimeyle tarif ettirmek etiket/formu değiştirir.
2. **Yazı isteme.** Yeni nesil modeller (Nano Banana Pro, GPT Image) kısa yazıyı doğru basabiliyor ama marka fontunu bilmez. Yazı → Canva/Figma/Claude Design'da marka fontuyla.
3. **Tek kompozisyon, tek ışık.** Video promptundaki gibi: konu + mekan + kamera + ışık + grade + negatif.
4. **Oranı baştan seç.** Reels kapak 9:16, feed 4:5, hero 16:9, story 9:16, profil 1:1. Sonradan kırpmak kompozisyonu bozar.
5. **Referans görsel = stil çapası.** Beğenilen kareyi (vault'taki `nefin_hero.png` gibi) "match this lighting and palette" diye ver.

## Formül

```text
[1 TÜR]        Editorial product photograph / lifestyle photograph / flat lay / hero banner
[2 KONU]       <PRODUCT SHEET verbatim> (veya "the uploaded product, kept exactly the same")
[3 MEKAN]      on cream linen over pale travertine, a soft-focus orange slice, morning
[4 KOMPOZİSYON] centered, rule of thirds, negative space on the right for text overlay
[5 KAMERA]     45-degree angle, 85mm lens, shallow depth of field
[6 IŞIK]       soft warm window light from the left, subtle rim light
[7 GRADE]      <marka brief grade satırı>
[8 TEKNİK]     9:16, high resolution, photorealistic, natural skin texture
[NEGATİF]      no text, no logo, no watermark, no sparkles, no purple tint, no extra bottles
```

**Kopyalanabilir örnek (Nefin hero, yazı için sağda boşluk):**
```text
Editorial skincare product photograph, photorealistic. The uploaded product (a 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap) kept exactly the same, standing on cream linen draped over pale travertine, a fresh orange slice slightly out of focus in the foreground left, a dried pampas stem soft in the background. Composition: product on the left third, clean negative space on the right for text overlay. 45-degree angle, 85mm lens, shallow depth of field. Soft warm window light from the left with a subtle rim light. Warm cream and amber color grade, soft highlights, low contrast, slightly lifted blacks. 16:9, high resolution. No text, no logos, no watermark, no sparkles, no purple or blue tint, no extra bottles.
```

## Video için keyframe üretimi (görsel → video)

1. Görseli **video oranında** üret (9:16 için 9:16).
2. Kompozisyonda **hareket için yer bırak**: push-in yapılacaksa ürün merkezde ve küçük; orbit yapılacaksa ürün etrafında boş alan.
3. Ürün **tam net**, arka plan yumuşak → model neyi sabit tutacağını anlar.
4. Aynı sahnenin 2–3 varyantını üret (açı/ışık) → her biri ayrı video klibinin başlangıç karesi.
5. Dosya adı: `03-Assets/images/<slug>/<slug>-<kampanya>-kf01.png` (kf = keyframe) → video brief'te "Başlangıç karesi" satırına yaz.

## Model notları

| Model | Güçlü | Ürün koruma | Yazı | Not |
|---|---|---|---|---|
| Gemini görsel (Nano Banana / Nano Banana Pro) | Yüklenen ürünü sahneye taşıma, düzenleme, çoklu referans birleştirme, 4K (Pro) | **çok iyi** ("keep exactly the same") | iyi (Pro) | Ekibin mevcut aracı; Veo ile aynı ekosistem |
| Midjourney v7 | Estetik, ışık, editoryal his; `--oref` omni-reference ile ürün/karakter | orta-iyi | zayıf | Stil keşfi, mood board; `--ar 9:16 --style raw` |
| GPT Image (ChatGPT) | Talimat takibi, yazı, düzenleme | iyi | **iyi** | Kurumsal görsel, infografik taslağı |
| Flux (Kontext / Pro) | Düzenleme, açık kaynak seçenekleri | iyi | iyi | Kendi sunucunda gizlilik |
| Ideogram | Yazı/tipografi odaklı | orta | **çok iyi** | Poster/afiş taslağı (yine de marka fontu yok) |
| Adobe Firefly | Ticari lisans güvencesi | orta | orta | Müşteri "telif" sorarsa |

## Sektör kısayolları

- **Kozmetik:** `editorial skincare photograph`, `cream linen`, `travertine`, `soft window light`, `no sparkles`. Yüz gerekiyorsa `natural skin texture, no retouching look, no makeup look`.
- **Klinik / psikoloji:** `quiet interior photograph`, `sage-green armchair`, `linen curtains`, `no people`, negatif: `hospital, medical`.
- **Kurumsal / yazılım:** `documentary corporate photograph`, `solid green screen on the device`, `overcast daylight`, negatif: `purple gradient, glassmorphism, fake UI`.
- **Sunum kapağı / web hero:** `wide 16:9, generous negative space on the right/left for headline, single subject`.

## Log

Her üretilen görsel `07-AI-Gorsel/<slug>/gorsel-log.md`'ye: dosya, model, prompt, oran, kullanım yeri, puan.
