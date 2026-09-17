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

## Alakasız / muğlak prop'lar (görsel ve video)

Prompt'ta "a subtle glass element", "something suggesting freshness" gibi **muğlak** prop tarifleri model'i rastgele objeler (alakasız cam kase, tabak vb.) üretmeye itiyor. Prop her zaman marka brief'in onaylı listesinden **somut** seçilmeli: keten kumaş, traverten/mermer, terrazzo, ahşap, pamuk ped, portakal dilimi (C vitamini), altın tanecik (24K tonik), pampas otu, seramik vazo. Hiçbiri uymuyorsa prop hiç eklenmesin — sade zemin + ürün + ışık her zaman güvenli seçenek.

Negatif liste eki: `unrelated props, random decorative objects, unexplained glass elements, disconnected dish or bowl props`

Kaynak: Nefin 24K Gold Tonic "sabah ritüeli" görseli, cam kase objesi nedeniyle reddedildi (bkz. `07-AI-Gorsel/nefin-beauty/gorsel-log.md` → Reddedilen denemeler).

## Sıkma / pompalama anı ile ürünün görünmesi arasında gecikme

El ile ürün sıkma/pompalama sahnelerinde (losyon, güneş kremi vb.) basma jesti ile kremin pompa ucunda belirmesi arasında hafif senkron kayması olabiliyor. Pozitif takviye: `"the product appears at the exact moment the pump is pressed — no delay between the press gesture and the cream emerging."` Kaynak: `06-AI-Video/nefin-beauty/video-log.md` → Sunscreen parmağa sıkma notu.

## Pipette / uygulayıcı çubuğu şişeden tam çıkmıyor

Pipette şişeden kaldırılırken şişenin içinde eski çubuğun hayalet/silüet izi kalabiliyor. Ek negatif: `duplicate pipette rod visible inside bottle, ghost rod silhouette, pipette not fully removed from bottle neck`. Pozitif takviye: `"The pipette rod is fully and cleanly removed from the bottle neck — no trace or duplicate remains visible inside the bottle glass."` Kaynak: `06-AI-Video/nefin-beauty/video-log.md` → "Vitamin C Serum — pipette damla makro".

## Kompozisyon içinde tutarsız arka plan rengi (çoklu-bölge görseller)

Birden fazla dairesel/bölgesel görsel alanı olan kompozisyonlarda (ingredient story, ürün ailesi vitrini vb.) modeller kompozisyonun farklı yarılarını/bölgelerini farklı zemin tonlarında üretebiliyor — sonuçta görsel "dikişli" görünüyor, tek bir kompozisyon gibi durmuyor.

Pozitif takviye: `"the entire background must be a single continuous [renk] tone across the whole composition — no visible seam, gradient shift, or color difference between sections."`

Kaynak: Nefin Vitamin C+ Serum "ingredient story" denemesi, bkz. `07-AI-Gorsel/nefin-beauty/gorsel-log.md` → Karma sonuçlu görseller.

## Su / sıvı içinde ürün — gerçekçilik (compositing hissi)

Ürünü suda/sıvıda yüzerken gösteren promptlarda model, ürünü suyun üstüne **yapıştırılmış (composite) gibi** çiziyor — gerçek kırılma/refraction, suyun ürünü hafif bulanıklaştırması gibi optik etkiler eksik kalıyor, "yapay havuz" hissi veriyor. Sadece "floating in water" demek yetmiyor.

Pozitif takviye cümlesi (denenecek): `"the water in front of the bottle causes visible optical distortion and light refraction on the label — the product is genuinely submerged in the water, not composited on top of it."`

Negatif liste eki: `flat compositing look, product pasted on top of water, no optical interaction with water, no refraction through liquid, tiled or repeating water texture`

Kaynak: Nefin Sunscreen "suda yüzen ürün" denemesi, bkz. `06-AI-Video/nefin-beauty/video-log.md`.

## Çoklu ürün sahne-geçişi tutarlılığı (video-to-video recreation)

Referans video ile "shot-by-shot" yeniden üretimde tek ürün → çoklu ürün geçişleri (veya tam tersi) modelin ürün sayısını/boyutunu/etiketini **o an yeniden icat etmesine** yol açıyor — önceki karedeki şişelerle eşleşmiyor (boyut tutarsızlığı, farklı etiket hataları aynı sahnede bir arada). Kamera hareketi ve tek ürün sahneleri bu sorundan etkilenmiyor, sorun özellikle çoklu-obje sahne geçişlerinde çıkıyor.

Negatif liste eki: `inconsistent product scale between cuts, product count changing between shots, re-generated duplicate objects, mismatched label text across identical copies`

Pozitif takviye cümlesi (denenecek): `"The exact same N bottles, identical in size and label, must persist across every cut — do not regenerate or resize them per shot."`

Kaynak: Nefin Daily Moisture Cream "video-to-video recreation" (COSMED reklamı referans alınarak), bkz. `06-AI-Video/nefin-beauty/video-log.md` → Karma sonuçlu denemeler.

## Ürünün bir dokunun/ortamın içinden kademeli "ortaya çıkması"

Modeller bir objeyi (ürünü) kremin/suyun/kumun içinden yavaşça, inandırıcı şekilde ortaya çıkarmakta zayıf — ya göstermiyor ya da anlık/ani beliriyor ("pop-up" hissi), istenen yumuşak reveal'i üretemiyor. Tek çekimde bunu istemek yerine: (1) doku-only ve ürün-only'yi ayrı klip olarak üret, (2) post-prodüksiyonda crossfade/wipe ile birleştir. Tek çekimde denenecekse pozitif takviye: `"the product's emergence is extremely gradual, continuous and physically smooth — never a sudden appearance or cut."` (garanti değil, teknik olarak tek çekimde zor).

Kaynak: Nefin Daily Moisture Cream "Cream Wave" denemesi, bkz. `06-AI-Video/nefin-beauty/video-log.md`.

## Ürün sürekliliği (model elinde ürün olan çekimler)

Model ürünü elinde tutan sahnelerde ürün genelde sahneye "sonradan giriyor" (uçarak/ışınlanarak beliriyor). Bunu önlemek için negatif listeye ek olarak **pozitif cümle** şart:

```text
The product is already resting in her hand from the very first frame. It does not appear, fly in, teleport, or materialize partway through the shot.
```

Negatif liste tarafında da ekle: `product appearing mid-shot, product materializing in hand, discontinuous object appearance, product teleporting into frame`

Kaynak: Nefin 24K Gold Tonic "website hero" denemesi, 2 kez aynı hatayla sonuçlandı (bkz. `06-AI-Video/nefin-beauty/video-log.md` → Reddedilen denemeler).

## Sesli modeller (Veo / Sora) için ses negatifleri

Prompt'a pozitif cümle olarak yaz:
```text
No background music. No narration. No subtitles. No on-screen text. Only ambient room tone and the described sound effect.
```

## Çoklu-öğeli kompozisyonlarda tipografi ve ikon tutarlılığı (bileşen/fayda callout görselleri)

Birden fazla metin bloklu (başlık + alt liste + callout) ve birden fazla dairesel/ikon öğeli kompozit görsellerde modeller üç ayrı tutarlılık hatası yapıyor:

1. **Font karışıklığı:** Kompozisyonun farklı bölgeleri (ör. üst başlıklar vs. alt bileşen listesi) farklı font ailesi/ağırlık/case (büyük harf vs. normal) ile basılıyor — tek bir marka görseli gibi değil, birden fazla parçanın birleştirilmişi gibi duruyor.
2. **Jenerik/eşleşmeyen ikonlar:** Birden çok farklı bileşen/madde ismi listelendiğinde model genelde 2-3 jenerik ikonu tekrar kullanıyor veya birbirine çok benzer görseller üretiyor — her isim kendine özgü, tanınabilir bir görsele sahip olmuyor.
3. **Boyut/hizalama tutarsızlığı:** Aynı tipteki tekrarlayan öğeler (daireler, ikon kutuları) kompozisyon boyunca farklı çap/boyutta çıkıyor, tek bir grid'e oturmuyor.

Negatif liste eki: `inconsistent typography across composition, mixed font families in one image, mismatched text case, generic repeated icons, inconsistent icon sizing, unaligned circular elements, varying circle diameters`

Pozitif takviye cümleleri (denenecek):
```text
Use exactly one typeface family for ALL text in the composition — every headline and label must share the same font, weight, and case (all caps or all title case, never mixed).
Each labeled item must have its own distinct, recognizable icon — no generic or repeated icon reused across different ingredient/benefit names.
All circular callout icons must be rendered at exactly the same diameter and aligned to a single consistent grid — no size variation between them.
```

Kaynak: Nefin Daily Moisture Cream "cilt uygulama + bileşen-fayda editoryal görseli", bkz. `07-AI-Gorsel/nefin-beauty/gorsel-log.md` → Karma sonuçlu görseller.

## Nasıl kullanılır

1. Genel + sektör listesini birleştir (tekrarları sil).
2. Modele göre yerleştir (ayrı alan / `Avoid:` / pozitif cümle).
3. Üretimde yeni bir hata görürsen (örn. kapak rengi değişiyor) hem bu dosyaya hem brief'in üretim loguna ekle.
