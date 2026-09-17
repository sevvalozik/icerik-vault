---
type: video-log
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-16
tags: [ai-video, log, nefinbeauty]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[c-vitamini-serum-kampanya-brief]]"]
---

# Nefin Beauty — Video Logu

> `03-Assets/videos/nefin-beauty/` altındaki her dosyanın kaydı. **Bundan sonra üretilen her klip için prompt, model ve puan buraya yazılır** — yoksa "bunu nasıl yapmıştık" sorusu cevapsız kalır (mevcut 4 klipte olduğu gibi). Teknik veriler ffprobe ile ölçüldü (16 Eylül 2026).

## Mevcut klipler

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model | Prompt | Puan |
|---|---|---|---|---|---|---|---|---|
| `c_vitamini_serumunu_havuzda_ta.mp4` | 1280×720 (16:9) | 10 sn | 24 | var (AAC) | Havuz kenarında Vitamin C Serum şişesi, el pipetten damla bırakıyor, portakal dilimleri, arka planda şezlong; etiket okunaklı ("NEFIN cosmetics VITAMIN C SERUM") | ❓ (dosya adı Türkçe prompt'un kısaltması: "C vitamini serumunu havuzda ta…" → büyük ihtimalle Gemini/Veo) | ❓ kaydedilmemiş | 4 — ışık ve kompozisyon iyi; 16:9 olduğu için reels'te kırpma gerekir; etiket AI üretimi |
| `nefin_beauty_nin_c_vitamini_se.mp4` | 720×1280 (9:16) | 10 sn | 24 | var (AAC) | Makro: pipetten sarkan tek altın damla, krem zemin, sağ altta parıltı işareti (AI watermark benzeri) | ❓ (dosya adı: "Nefin Beauty'nin C vitamini se…") | ❓ | 4 — hook için ideal; sağ alttaki parıltı ikonunu post'ta kırp |
| `Bu_görseli_gerçekçi_sinematik (1).mp4` | 1280×720 (16:9) | 10 sn | 24 | var (AAC) | Model yüzüne CC krem sürüyor, solda "KUSURSUZ KAPATMA" yazısı, sağda krem sürüntüsü | ❓ (dosya adı: "Bu görseli gerçekçi sinematik…" → bir görselden image-to-video) | ❓ | 3 — yazı AI tarafından basılmış (marka fontu değil), yüz tutarlılığı riskli, 16:9 |
| `VIDEO-2026-09-09-16-12-08.mp4` | 480×800 (3:5) | 10 sn | 24 | yok | Telefon mockup'ında "Nefin Cosmetics" WhatsApp sohbeti (bot demo: Ürünlerimizi Gör / Siparişimi Takip Et / Kampanyalar) | ❓ (ekran kaydı/animasyon) | — | 3 — düşük çözünürlük; WhatsApp satış botu demosu, ürün reklamı değil |

## Gözlemler (bir sonraki üretime taşınacak)

1. **Prompt kaydı yok.** 4 klipten hiçbirinin promptu, modeli, ayarı bilinmiyor → bundan sonra her üretim [[video-brief-template]] → Üretim Logu'na.
2. **Oran karışık.** 2 klip 16:9, 1 klip 9:16, 1 klip 3:5. Reels için hepsi 9:16 üretilmeli; 16:9 → 9:16 kırpma ürünü kadrajdan çıkarıyor.
3. **Yazı modele bırakılmış** ("KUSURSUZ KAPATMA"). Marka fontu (Cambria/Calibri) değil; yeniden üretimde yazı post'ta.
4. **Etiket AI üretimi.** Havuz klibinde etiket okunaklı ama gerçek etiketle aynı olduğu doğrulanmadı; gerçek fotoğraf + I2V ile çözülür.
5. **Grade tutarsız.** Havuz (turkuaz-sıcak), makro (krem), CC krem (nötr-gri) farklı videolar gibi. Ortak grade satırı: marka brief.
6. **Ses.** 3 klipte model sesi var; kurguda tek müzikle değiştirilecek.

## Yeniden üretim planı

→ [[c-vitamini-serum-kampanya-brief]] (4 shot, promptlar hazır). Gerçek ürün fotoğrafı ve logo geldiğinde başlanır.

## Karma sonuçlu denemeler (kısmen başarılı, detaylı analiz)

### "Video-to-video recreation" — Daily Moisture Cream (17 Eylül 2026)

- **Dosya:** `03-Assets/videos/nefin-beauty/nefin-beauty-daily-moisture-cream-video-to-video-karma-v1.mp4`
- **Teknik:** Yeni bir yöntem — başka bir markanın (COSMED) gerçek reklam videosu **referans video** olarak yüklenip, "bu videoyu birebir, shot-by-shot yeniden oluştur, TEK değişken üründür" deniyor. Kamera hareketi, çoklu ürün sayısı/dizilimi, zamanlama, geçişler referans videodan **birebir** isteniyor — text prompt "DO NOT summarize/interpret/simplify, reference is the exact storyboard" diye ısrarla vurguluyor. Bu; önceki "model elinde ürün" reddedilen denemesinden farklı olarak, marka brief'teki "tek ürün hero" değil, **çoklu ürün / reklam filmi** tarzı bir kompozisyon hedefliyor.
- **Şevval'in saniye saniye gözlemi:**
  - **0-1 sn:** Ekrandaki boşlukların birden "tamamlandığı" bir görsel bug var (muhtemelen krem dokusu iç detaylarında bir tutarsızlık/morph).
  - **~3 sn:** Kamera çoklu ürünün etrafında dönüyor — **bu kısım sorunsuz, güzel**, hata yok.
  - **~5 sn:** Çoklu şişeden aniden tek şişeye geçiliyor — **bu istenen/beğenilen bir davranış** (çoklu → tek ürün hero geçişi).
  - **~8 sn:** Diğer kremler aniden geri "ışınlanıyor" (tek üründen tekrar çoklu ürüne dönüş ani ve fiziksel bir geçiş/mantık olmadan oluyor) — bu bizi **gerçeklikten uzaklaştırıyor**, AI videoların "gerçek kamerayla çekilmiş gibi" durması hedefiyle çelişiyor.
  - **8-10 sn:** Kremler geri geldikten sonra ana ürünle yanındaki diğer şişeler arasında **boyut/ölçek tutarsızlığı** oluşuyor, 10. saniyede net görülüyor (bazı kapaklar/şişeler belirgin şekilde farklı boyda).
- **Ek gözlem (Claude, görsel inceleme):** Şişeler tekrar çoğaldığında etiket yazısı da her kopyada farklı şekilde bozuluyor ("Hydration Comfort Nourishment" doğru kalan kopyalar var, ama "Hydrallen Comllon Noulthment" gibi hatalı kopyalar da aynı sahnede bir arada — yani tutarsızlık hem boyutta hem yazıda).
- **Kök neden (olası):** Referans videoda "aynı ürünün N kopyası" sahne geçişleri arasında obje kalıcılığı (object permanence) koruyordu (gerçek çekim); model bunu NEFIN ürününe uygularken sahne geçişlerinde (özellikle tek→çoklu dönüşünde) ürün sayısını/boyutunu/etiketini yeniden "icat ediyor", önceki karedeki tam haliyle eşleştiremiyor.
- **Puan:** Karma — kamera koreografisi ve çoklu-ürün-etrafında-dönme kısmı 5/5; sahne geçişlerinde obje kalıcılığı (ürün sayısı/boyut/etiket tutarlılığı) 2/5. Genel: 3/5, referans olarak tutulmaya değer (özellikle kamera hareketi + tek→çoklu geçiş kısmı için).
- **Bir dahaki sefere:** Bu teknik (referans video ile shot-by-shot recreation) tek ürün hero çekimlerinde iyi çalışıyor gibi duruyor (bkz. 5-8 sn arası); çoklu ürün sahnelerinde obje sayısı/boyut tutarlılığı için ek bir "kesin sayı ve tutarlı boyut" vurgusu prompt'a eklenmeli (ör. "the exact same 6 bottles, same relative sizes, must persist identically across every cut — do not regenerate them per shot").

**Kullanılan tam prompt:**
```text
RECREATE THE UPLOADED REFERENCE VIDEO AS CLOSELY AND LITERALLY AS POSSIBLE.
The uploaded video is the MASTER REFERENCE. I do NOT want a new skincare advertisement inspired by the reference. I want the SAME VIDEO recreated.
The only creative substitution is: REPLACE THE COSMED PRODUCT WITH NEFIN COSMETICS DAILY MOISTURE CREAM. EVERYTHING ELSE MUST FOLLOW THE REFERENCE VIDEO.

IMPORTANT: The reference video contains MULTIPLE COPIES OF THE SAME COSMED PRODUCT at the same time. Do NOT replace the entire sequence with one single NEFIN product. Where the reference shows multiple identical Cosmed tubes, recreate the SAME NUMBER OF PRODUCT COPIES using multiple identical NEFIN DAILY MOISTURE CREAM bottles — same relative positions, arrangement, scale relationships, overlap, perspective and movement.

PRODUCT REPLACEMENT: Use the uploaded NEFIN DAILY MOISTURE CREAM image as the exact reference. Preserve exactly: white cylindrical bottle, exact geometry/proportions, metallic gold cap, NEFIN logo, label, typography, text, colors. Do not redesign, change the cap/label/logo, or create different versions — all copies visually identical.

SHOT-BY-SHOT: Scene 1 cream texture macro (reference composition/timing). Scene 2 cream/tool interaction, same scale/movement/timing, cream behaves like real skincare not food. Scene 3 (CRITICAL) multi-product reveal — match reference count, arrangement, overlap, scale, depth, perspective. Scene 4 multi-product movement — same horizontal/camera/product movement, overlap, scale changes, motion blur; do not make bottles static/symmetrical. Scene 5 extreme product close-up, same frame percentage, realistic reflections, label physically consistent, no AI text distortion. Scene 6 return to cream texture, same visual language. Scene 7 second multi-product sequence, same count/arrangement/scale/movement. Scene 8 final texture/product movement following reference ending exactly.

CAMERA: match reference distance, height, perspective, push-in/pull-back, lateral/macro movement, framing, crop, speed, motion blur. No generic movements, no 360 rotation, no dramatic orbit, no random zooms, no floating product.

LIGHTING: bright soft white cream, gold cap realistic subtle highlights, no dramatic/blue/pink/burgundy lighting.

BACKGROUND: minimal cream-based environment only; white cream + multiple identical NEFIN bottles. No people, hands, faces, flowers, leaves, fruit, stones, water, bathroom, lab equipment, extra products, decorative props.

PHYSICS: correct proportions/perspective, realistic shadows/reflections/contact/overlap/depth/motion blur. No morphing, melting, stretching, bending, duplicated labels, changing logo/typography, product transformation between shots — same bottle visually consistent throughout.

MOST IMPORTANT: do not summarize/interpret/simplify the reference — recreate its visual sequence as literally as possible. Only change: Cosmed products → NEFIN Daily Moisture Cream, same count or scale relationships. Same overall duration and pacing as reference. Photorealistic, high-end skincare commercial, ultra-realistic macro texture, professional cinematography, natural motion blur, realistic materials/cream physics.
```

## Reddedilen denemeler

> Neden reddedildiği açıkça yazılır ki aynı hata tekrar üretilmesin. Dosyalar vault'a eklenmedi (kullanım değeri yok), sadece prompt + hata burada duruyor.

### "Website hero — model elinde ürün" promptu (16 Eylül 2026)

- **Ürün:** 24K Gold Tonic, model (kadın) elinde tutuyor, pencere kenarı, sabah ışığı, 16:9 web hero
- **Dosya:** `03-Assets/videos/nefin-beauty/reddedilen/nefin-beauty-gold-tonic-website-hero-reddedilen-v1.mp4` (referans için tutuluyor, üretimde kullanılmaz)
- **Denenme sayısı:** 2 (ikisinde de aynı sonuç)
- **Sorun:** Ürün videonun başında (ilk 3-4 saniye) elde/kadrajda hiç yok — model sadece yüzüne dokunuyor, elleri boş. Şişe ancak videonun ortasında (~4-5. saniye) aniden elde beliriyor; nereden geldiği/nasıl ele alındığı görünmüyor — "uçarak geldi ya da bir şekilde ışınlandı" hissi.
- **Kök neden (muhtemel):** Prompt'ta "the woman gently holds the exact NEFIN 24K GOLD TONIC bottle in her hand" yazıyor ama **"ürün en baştan, ilk karede zaten elinde olmalı"** diye açıkça belirtilmemiş — model bunu "sahneye sonradan girsin" diye yorumluyor.
- **Düzeltme (bir sonraki denemede kullan):** Aksiyon bloğuna şunu ekle: `"The bottle is already resting in her hand from the very first frame — it does not appear, fly in, or materialize partway through the shot."` Ayrıca kompozisyonu "elinde ürünle duruyor" diye sabit bir an olarak tarif et, "ürünü sahneye sokuyor/tanıtıyor" gibi bir aksiyon fiili kullanma.
- **Diğer gözlemler:** Görsel yön (ışık, mekan, cilt dokusu, palet) marka brief'e tamamen uygun ve başarılı — sadece ürünün elde beliriş anı sorunlu.
- **Puan:** 2 — görsel yön mükemmel ama ürün sürekliliği (continuity) hatası kullanılamaz kılıyor.

## Onaylı üretimler (beğenilenler)

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model / sürüm | Prompt | Puan |
|---|---|---|---|---|---|---|---|---|
| `nefin-beauty-gold-tonic-hero-v1.mp4` | 720×1280 (9:16) | 10 sn | 24 | var (AAC) | 24K Gold Tonic — sadece ürün (insan/el/yüz yok), makro cam+kapak detayı, altın tanecik dokusu, su damlası, hero açılış/kapanış, ivory/krem zemin, sıcak doğal ışık | Gemini video (muhtemelen Veo) | ↓ "Gold Tonic Hero — Onaylı Master Prompt" (aşağıda) | 5 — beğenildi, marka yönüyle (clean-girl, quiet luxury, no burgundy) tam uyumlu |
| `nefin-beauty-retinol-supreme-hero-v1.mp4` | 720×1280 (9:16) | 10 sn | 24 | yok (sessiz) | Retinol Supreme (gece kremi) — kapaklı kavanoz + su damlacıkları (condensation) makro açılış, üstten kremin dokusu, mavi spatula ile krem karıştırma/alma detayı | ❓ Gemini (prompt kaydedilmedi — aşağıda tahmini açıklama) | ↓ "Retinol Supreme Hero — Tahmini Açıklama (prompt orijinali kayıp)" | 5 — beğenildi |

### Gold Tonic Hero — Onaylı Master Prompt (16 Eylül 2026)

> Ürün-only hero video şablonu — insan/el/yüz yok, sadece ürün + doku + ışık. Referans görseli değiştirip başka Nefin ürünlerinde de kullanılabilir (product-agnostic yapı). Şevval'in beğendiği, onayladığı ilk video.

```text
Create a premium cinematic product film for NEFIN Cosmetics using the provided NEFIN skincare product image as the exact product reference.

IMPORTANT:
Keep the exact NEFIN product packaging from the reference image.
Do not redesign, replace, simplify or reinterpret the product.
Preserve the exact bottle/jar shape, proportions, cap, label, logo and packaging details.

The original background of the reference image must be completely ignored.
Do not use the burgundy/red background from the reference image.

CONCEPT:
Create a clean, modern, feminine skincare product film inspired by premium contemporary beauty brands such as MERIT Beauty and Face Formula.
The product itself is the only hero. Do NOT show a woman, face, hands, a person, or a model.
The entire video should focus exclusively on the NEFIN product and its texture.

VISUAL STYLE:
Clean girl skincare aesthetic. Quiet luxury. Modern minimal beauty. Fresh and sophisticated.
Soft natural daylight. Warm ivory and creamy tones. Minimal editorial product photography.
The visual atmosphere should feel bright, airy, fresh and expensive rather than dark or dramatic.

COLOR PALETTE:
Warm white, ivory, cream, very pale beige, soft champagne, transparent glass, natural warm gold accents from the product.
NO burgundy, NO red, NO dark brown background, NO black luxury aesthetic, NO dark dramatic studio background, NO saturated colors.

ENVIRONMENT:
Place the product on a beautiful minimal warm-white or ivory stone surface. Background very simple and softly blurred.
Subtle natural materials: matte ivory stone, soft cream ceramic, clear glass, white linen, very subtle water reflections.
Extremely uncluttered — no flowers, no leaves, no unnecessary decorative objects, no perfume-style props, no excessive luxury decorations.

LIGHTING:
Soft natural morning daylight from one side, large soft window-like light source, slowly moving across the product.
Beautiful but subtle highlights on the glass, metallic cap, product texture, packaging edges. Feels like real sunlight in a clean modern bathroom.
Soft shadows, subtle reflections underneath. NO dramatic spotlight, NO neon, NO strong lens flare, NO excessive glow.

CAMERA AND VIDEO STRUCTURE (cinematic sequence, extremely smooth macro camera movements):
SHOT 1 — HERO PRODUCT: complete product centered, perfectly sharp, camera slowly pushes in, daylight gradually reveals packaging.
SHOT 2 — MACRO DETAIL: extreme macro on glass edges, metallic cap, reflections, label texture; slow controlled movement.
SHOT 3 — PRODUCT TEXTURE: macro of the actual texture (cream = luxurious smooth surface catching soft light; rich, smooth, hydrated, realistic — not artificial/glossy).
SHOT 4 — WATER/FRESHNESS: extremely subtle water droplets on glass/surface, elegant and minimal, no dramatic splash, doesn't cover product.
SHOT 5 — GOLD DETAIL: natural gold packaging details catch sunlight, subtle warm golden reflection moving across surface — sophisticated and natural, not glittery/magical/excessive.
SHOT 6 — FINAL HERO: clean full-product composition, product alone on ivory surface, soft daylight, very slow subtle push-in, ends centered and beautifully lit.

MOTION: everything moves slowly — subtle camera movement, subtle light movement, subtle water movement.
NO fast cuts, NO aggressive transitions, NO spinning/floating/unnaturally rotating product, NO exaggerated zoom, NO camera shake. Product always feels physically grounded.

CAMERA: high-end cinema camera, macro beauty cinematography, shallow depth of field, very smooth focus transitions, realistic glass/metallic reflections, natural optical characteristics. Feels like it's physically moving around a real product in a professional studio. NOT CGI-looking.

PRODUCT ACCURACY: NEFIN product must remain visually identical to the reference — do not alter logo, brand name, label, typography, proportions, cap design, container shape. Do not invent additional text or replace the logo. Do not create a generic bottle. The reference image is authoritative.

OVERALL FEEL: clean morning skincare ritual + premium editorial beauty photography + quiet luxury + fresh hydrated skin + minimal modern bathroom + cinematic product macro photography. Should look like a real premium skincare campaign for a modern beauty website — sophisticated and expensive without being dark, flashy or overly luxurious.

NO PEOPLE. NO MODEL. NO HANDS. NO FACE. NO BODY.
NO TEXT OVERLAY. NO CAPTIONS. NO WATERMARK. NO ADDITIONAL LOGOS.

Create a seamless, elegant 10-12 second vertical product video suitable for a modern skincare website hero section.
```

## Yeni kayıt şablonu

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model / sürüm | Prompt (brief'teki shot no) | Seed | Puan |
|---|---|---|---|---|---|---|---|---|---|
| `nefin-<kampanya>-s01-v1.mp4` | 1080×1920 | 8 | 24 | yok | | | brief → Shot 1 / Varyant A | | |
