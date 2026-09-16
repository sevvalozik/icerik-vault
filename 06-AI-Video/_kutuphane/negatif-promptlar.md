---
type: kutuphane
tags: [ai-video, negatif-prompt, rehber]
date: 2026-09-16
---

# Negatif Prompt Listeleri

> Kling'de ayrı "Negative prompt" alanına yapıştır. Veo'da (API) `negative_prompt`, arayüzde prompt sonuna `Avoid: …`. Runway/Sora'da negatif alan yok → pozitif cümleyle sabitle ("the label stays exactly the same", "no people in frame"). Negatif listeyi çok uzatma; 10–15 madde yeter, fazlası modelin dikkatini dağıtır.

## Genel (her işte)

```text
text, letters, captions, subtitles, watermark, logo, signature, ui elements, extra fingers, deformed hands, extra limbs, distorted face, blurry, out of focus, low resolution, flicker, frame jitter, morphing objects, duplicated objects, oversaturated, hdr glow, lens dirt, noise, cartoon, anime, 3d render look
```

## Kozmetik / ürün (Nefin tipi)

```text
bottle morphing, label changing, label text, cap changing shape, floating product, product melting, liquid clipping through glass, extra bottles, wrong bottle color, purple tint, neon, burgundy velvet, dark brown background, black background, black luxury nightclub aesthetic, harsh studio flash, dramatic spotlight, excessive glow, plastic skin, airbrushed face, glitter explosion, sparkles, lens flare, hands with wrong finger count, nail polish chipped, dirty surface, unnatural product rotation, exaggerated zoom, camera shake, fast cuts, perfume-style decorative props
```

Türkçe not (16 Eylül 2026): Nefin 24K Gold Tonic için beğenilen bir "ürün-only hero" video sonrası eklendi (bkz. `06-AI-Video/nefin-beauty/video-log.md` → Onaylı üretimler) — spotlight/glow/dramatik siyah zemin ve kamera sarsıntısı/hızlı kesme gibi maddeler oradaki onaylı promptun "NO" listesinden geldi.\n\nTürkçe not: "sparkles/glitter explosion" özellikle önemli — modeller kozmetik deyince otomatik parıltı efekti basıyor; Nefin'in "clean-girl" dili buna izin vermiyor. Altın tanecik (24K tonik) istiyorsan onu pozitif prompt'ta fiziksel tanımla: `fine gold flakes drifting slowly inside the liquid`.

## Klinik / psikoloji (Humentis tipi)

```text
people, faces, patients, children, crying, dramatic shadows, dark moody lighting, hospital, medical equipment, white coat, stethoscope, pills, syringe, pastel pink, lavender, purple gradient, stock photo smile, handshake, clipboard, text, logo, watermark, flicker, distorted furniture, warped walls, extra doors
```

Türkçe not: "medical/hospital" listesi kritik — model "psikoloji" duyunca hastane çizmeye meyilli. Humentis bir danışma merkezi, hastane değil.

## Kurumsal / yazılım (Hemshare tipi)

```text
text, ui, app screen content, icons, fake interface, logo, watermark, purple gradient, glassmorphism, neon, holographic, futuristic hud, robots, stock handshake, exaggerated smiles, extra fingers, distorted faces, duplicated people, blurry, flicker, low resolution
```

Türkçe not: Telefon/laptop ekranına AI arayüz çizdirme; `screen is a solid flat green placeholder` de, gerçek ekran görüntüsünü post'ta yerleştir.

## İnsanlı çekim (her sektör)

```text
extra fingers, missing fingers, fused fingers, deformed hands, extra limbs, distorted face, asymmetrical eyes, teeth artifacts, plastic skin, uncanny smile, face morphing, identity change between frames, clothing changing, hair changing color, duplicated person
```

## Sesli modeller (Veo / Sora) için ses negatifleri

Prompt'a pozitif cümle olarak yaz:
```text
No background music. No narration. No subtitles. No on-screen text. Only ambient room tone and the described sound effect.
```

## Nasıl kullanılır

1. Genel + sektör listesini birleştir (tekrarları sil).
2. Modele göre yerleştir (ayrı alan / `Avoid:` / pozitif cümle).
3. Üretimde yeni bir hata görürsen (örn. kapak rengi değişiyor) hem bu dosyaya hem brief'in üretim loguna ekle.
