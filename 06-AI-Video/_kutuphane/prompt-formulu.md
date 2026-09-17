---
type: kutuphane
tags: [ai-video, prompt, formul, rehber]
date: 2026-09-16
---

# AI Video Prompt Formülü (Master)

> Bu formül modelden bağımsızdır (Veo, Kling, Runway, Sora, Hailuo, Luma…). Model özel farklar için [[model-rehberi]]. Her prompt **İngilizce** yazılır (modeller İngilizce'de belirgin şekilde daha tutarlı); diyalog Türkçe olacaksa tırnak içinde Türkçe verilir. Türkçe açıklamalar sadece bizim notumuz.

## Altın kurallar (önce bunlar)

1. **Bir prompt = bir çekim = bir aksiyon.** 5–8 saniyelik klipte tek bir şey olur. "Sonra kamera döner, sonra ürün açılır, sonra…" → kurgu masasında birleşir, prompt'ta değil.
2. **Önemli şey en başa.** Modeller ilk cümleye daha çok ağırlık verir. Konu + aksiyon önce, teknik detay sonra.
3. **60–120 kelime.** Daha kısası belirsiz, daha uzunu çelişki üretir.
4. **Yazıyı, logoyu, etiketi modele bırakma.** AI metin üretmez, bozar. Prompt'a `no text, no logos, no captions` yaz; yazı ve logo post-prodüksiyonda marka fontuyla eklenir (bkz. marka brief → Tipografi).
5. **Markaya özgü ürün = gerçek fotoğraf + image-to-video.** Ürünün gerçek fotoğrafını başlangıç karesi yap; sadece hareketi prompt'la. Etiket böylece doğru kalır. (Detay: [[tutarlilik-rehberi]])
6. **Kamera ve konu hareketini ayrı cümlede yaz.** "The camera slowly pushes in" ≠ "the bottle slowly rotates". İkisini karıştırınca model birini atar.
7. **Çelişki yok.** "static shot" + "tracking"; "macro" + "wide landscape"; "golden hour" + "studio softbox" birlikte olmaz.
8. **Fizik anlat, sıfat sayma.** "beautiful, stunning, amazing, 8K" gibi kelimeler işe yaramaz. "a single drop falls, hits the surface, a slow ripple spreads outward" işe yarar.
9. **Ürün kartı birebir.** Marka brief'teki `EN product sheet` metnini her çekimde **aynı kelimelerle** tekrar et; değiştirirsen ürün değişir.
10. **Negatif listeyi unutma.** Model destekliyorsa ayrı alana, desteklemiyorsa prompt sonuna `Avoid: …` olarak (bkz. [[negatif-promptlar]]).

## Formül — 10 blok

Sıra önemlidir. Boş bırakabilirsin ama sıralamayı bozma.

```text
[1 STİL ÇAPASI]  Cinematic skincare commercial, photorealistic.
[2 KONU]         <product sheet verbatim> / <character sheet verbatim>
[3 AKSİYON]      A single golden drop falls from the pipette onto the travertine surface and spreads into a thin glossy ring.
[4 MEKAN]        On a cream linen cloth over pale travertine stone, a soft-focus orange slice in the background, morning.
[5 KAMERA]       Extreme close-up, macro 100mm lens, shallow depth of field, locked-off tripod. The camera does not move.
[6 IŞIK]         Soft warm window light from the left, gentle specular highlights on the glass, no harsh shadows.
[7 GÖRÜNÜM/GRADE] Warm cream and amber color grade, low contrast, slightly lifted blacks, subtle 35mm film grain.
[8 ATMOSFER]     Calm, luxurious, unhurried.
[9 SES]          (sadece sesli modellerde) Ambient: quiet room tone, a soft liquid drip. No music. No dialogue. No subtitles.
[10 TEKNİK]      9:16 vertical, 8 seconds, 24 fps, slow motion 120 fps feel.
[NEGATİF]        Avoid: text, logos, captions, watermark, extra fingers, distorted hands, bottle morphing, label changing, flicker, oversaturation, cool blue tint, people's faces.
```

### Blok blok açıklama

| Blok | Ne yazılır | Sık hata |
|---|---|---|
| 1 Stil çapası | Tür + gerçekçilik seviyesi: `cinematic commercial`, `documentary`, `editorial beauty film`, `photorealistic` / `3D render` / `stop motion` | Boş bırakınca model "genel YouTube" görünümü seçer |
| 2 Konu | Fiziksel, ölçülebilir tanım. Malzeme, renk, boyut, form. Marka adı yazma (etiketi bozar) | "our product" gibi belirsiz ifade |
| 3 Aksiyon | Tek fiil, fizikle: düşer, süzülür, döner, yayılır, buharlaşır | 3 aksiyon üst üste |
| 4 Mekan | Yüzey + arka plan + zaman + 1-2 prop. Marka brief'teki "props" listesinden | Prop enflasyonu (5+ obje → model karıştırır) |
| 5 Kamera | Çekim ölçeği + lens + DoF + hareket (veya "locked-off") — sözlük: [[kamera-ve-isik-sozlugu]] | Hareket belirtmemek (model rastgele zoom yapar) |
| 6 Işık | Yön + sertlik + renk sıcaklığı + özel efekt (caustics, rim light) | "good lighting" |
| 7 Görünüm | Marka brief → "Renk grade hedefi" satırı birebir + film/kamera referansı (`shot on ARRI Alexa`, `Kodak Portra palette`) | Marka paletiyle çelişen "teal & orange" |
| 8 Atmosfer | 2–3 duygu kelimesi, marka ses tonundan | Uzun şiirsel paragraf |
| 9 Ses | Veo 3 / Sora 2 / Kling 2.6+ gibi sesli modellerde: ortam sesi, SFX, müzik var/yok, diyalog. Post'ta müzik koyacaksan `No music` yaz. Veo'da diyalog varsa `(no subtitles)` ekle | Ses belirtmeyince rastgele müzik/altyazı basar |
| 10 Teknik | Oran, süre, fps, hız (slow motion/real time) | Modelin desteklemediği süreyi istemek |
| Negatif | [[negatif-promptlar]] → sektör listesi | Hiç yazmamak |

## Diyalog / konuşan insan (Veo 3, Sora 2, Kling sesli)

```text
A woman in her 30s with dark hair tied back, wearing a cream linen shirt, sits in a calm counselling room and looks directly into the camera. She says in Turkish, calmly: "Ne zaman hazır olursanız kapımız açık." Natural lip sync, soft daylight, medium close-up, static camera, 9:16. (no subtitles) No background music.
```

- Türkçe diyalogda dudak senkronu modelden modele değişir; **kurumsal yüz (kurucu, terapist) için gerçek çekim** tercih edilir, AI sadece B-roll yapar.
- Uzun metin okutma: 8 saniyeye en fazla 15–18 kelime Türkçe sığar.
- AI sesli anlatım gerekiyorsa: görüntüyü sessiz üret + seslendirmeyi ayrı üret (ElevenLabs vb.) + post'ta birleştir. Daha kontrollü.

## İki katmanlı yazım (kurgu → shot → prompt)

1. **Kurgu planı (TR):** 5–7 çekimlik liste; her çekimin amacı (hook / ürün / doku / kullanım / kapanış).
2. **Shot promptu (EN):** her satır yukarıdaki 10 blokla.
3. **Varyant:** her shot için 2 prompt varyantı (A: güvenli, B: cesur) → ikisini de üret, iyisini seç.

Şablon: [[video-brief-template]]. Sektöre göre hazır kurgular: [[sektor-receteleri]].

## Model tarzına göre aynı promptun 3 hali

**⚠️ Bilinen hata (17 Eylül 2026, test edildi):** Bu örnek denendiğinde pipette şişeden kaldırılırken şişenin camı içinde eski pipette'in "hayalet" silüeti kalıyor (bkz. `06-AI-Video/nefin-beauty/video-log.md` → "Vitamin C Serum — pipette damla makro"). Denerken şunu ekle: `"The pipette rod is fully and cleanly removed from the bottle neck — no trace, silhouette, or duplicate of the rod remains visible inside the bottle glass."`

**Veo 3.x / Sora 2 (düzyazı, doğal dil, ses dahil):**
```text
Cinematic skincare commercial, photorealistic. A 30 ml amber glass dropper bottle with a brushed gold collar and white pipette cap, minimal cream label with illegible text, filled with translucent golden-orange serum, stands on cream linen over pale travertine. A single golden drop falls from the raised pipette and lands beside the bottle, spreading into a thin glossy ring. Extreme close-up on a 100mm macro lens, shallow depth of field, the camera is locked off and does not move. Soft warm window light from the left with gentle specular highlights on the glass. Warm cream and amber color grade, low contrast, subtle film grain. Calm and luxurious. Audio: quiet room tone and a soft liquid drip, no music, no dialogue, no subtitles. 9:16, 8 seconds. No text, no logos, no hands, no faces.
```

**Kling / Hailuo (kısa, virgüllü, kamera komutu açık):**
```text
photorealistic skincare commercial, extreme close-up macro shot, a 30 ml amber glass dropper bottle with brushed gold collar and white pipette cap, minimal cream label, golden-orange serum, on cream linen over travertine, a single golden drop falls from the pipette and spreads into a glossy ring, static camera, 100mm macro, shallow depth of field, soft warm window light from the left, specular highlights on glass, warm cream and amber grade, low contrast, subtle film grain, slow motion
Negative: text, logo, watermark, hands, face, bottle morphing, label change, flicker, oversaturated, blue tint, blurry
```
(Hailuo "director" modunda kamera komutu köşeli parantezle: `[Static shot]`, `[Push in]`, `[Pan left]`, `[Tracking shot]`, `[Zoom in]`.)

**Runway Gen-4 (image-to-video: görsel zaten ürünü anlatır, prompt SADECE hareketi anlatır):**
```text
A single golden drop falls from the pipette and spreads into a thin glossy ring on the stone. The camera is locked off. Subtle slow motion. Everything else stays perfectly still.
```

## Prompt yazmadan önce 30 saniyelik kontrol

- [ ] Marka brief'i açtım, `AI Brief Bloğu` ve `product sheet` kopyaladım
- [ ] Tek aksiyon var
- [ ] Kamera hareketi yazılı (ya da "locked off")
- [ ] Grade satırı marka brief'ten
- [ ] `no text, no logos` var
- [ ] Süre/oran modelin desteklediği değer
- [ ] Negatif liste eklendi
- [ ] Ürün gerçekse başlangıç karesi olarak gerçek fotoğraf seçildi
