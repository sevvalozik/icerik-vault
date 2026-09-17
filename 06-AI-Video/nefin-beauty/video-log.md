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

### Sunscreen — "suda yüzen ürün" konsepti (17 Eylül 2026)

- **Dosya:** `03-Assets/videos/nefin-beauty/nefin-beauty-sunscreen-floating-water-karma-v1.mp4`
- **Ürün:** NEFIN SUNSCREEN / "SUN Multi Protect Moisture SPF 50+" — marka brief'teki onaylı 4 üründen değil, "diğer ürünler ❓ doğrulanacak" listesindeki "Sun Cream SPF 50+" ile eşleşiyor (etiket bu üründe ilk kez net görüldü).
- **Konsept:** Ürün berrak suda ağırlıksız süzülüyor/yüzüyor, tek continuous shot, kamera yavaşça yaklaşıp hafif yanlamasına dönüyor.
- **Şevval'in değerlendirmesi:** "Aşırı gerçekçi gelmedi (yapay bir havuz ve su gibi) ama istediğim şeyi yerine getirmiş — sadece görsel olarak gelişmesi gerekiyor, onun dışında fena değil. Suyun içindeyken ürünün yazılarında hata var."
- **Claude'un görsel tespiti:** Su dokusu tekrar eden/kaplama (tiled) bir doku gibi görünüyor, üründe **gerçek bir su kırılması (refraction) veya optik etkileşim yok** — ürün suyun üzerine yapıştırılmış/composite edilmiş gibi duruyor, suyun İÇİNDEN görünmüyor. Bu yüzden "yapay havuz" hissi veriyor — gerçek su fiziği (ürünün suyla aynı ışıkta kırılması, hafif bulanıklaşması) eksik. Etiketin ikinci satırı ("SLDE AL BIONITE / ALAVTIONT REAELTE" gibi) tamamen anlamsız/bozuk çıkmış.
- **Kök neden:** Bu ürün için gerçek bir referans fotoğraf yok (marka brief'te "Sun Cream" doğrulanmamış) → model etiket metnini **uyduruyor** (bkz. genel kural: gerçek referans yoksa yazı güvenilmez). Su-ürün optik etkileşiminin eksikliği muhtemelen modelin "floating beneath the surface" tarif edilen sahneyi düz bir compositing olarak yorumlamasından kaynaklanıyor — refraction/distortion için daha açık ve teknik bir talep gerekebilir.
- **Puan:** Karma, 3/5 — konsept ve hareket istenen şekilde ama görsel gerçekçilik (su fiziği) ve etiket yazısı düzeltilmeli.
- **Bir dahaki sefere:** (1) Su-ürün etkileşimi için prompt'a şunun gibi daha teknik bir talep eklenebilir: `"the water in front of the bottle causes visible optical distortion and light refraction on the label, the product is genuinely submerged, not composited on top of the water"`. (2) Bu ürün için de gerçek bir referans fotoğrafı olmadığından yazı riskli — ya gerçek ürün fotoğrafı sağlanmalı ya da yazı post-prodüksiyonda eklenmeli.

### Vitamin C Serum — pipette damla makro (17 Eylül 2026)

- **Dosya:** `03-Assets/videos/nefin-beauty/nefin-beauty-vitamin-c-serum-pipette-drop-karma-v1.mp4`
- **Prompt:** `prompt-formulu.md`'deki hazır "Veo 3.x / Sora 2" örnek promptu birebir denendi (marka brief'in Vitamin C Serum product sheet'inden üretilmiş master örnek).
- **Şevval'in değerlendirmesi:** "Hatalı, şişenin içinde çubuğunu çıkarıyor ama çubuk içerde kalıyor. Damlatma kısmı güzel. Sıvının yayılması biraz daha gerçekçi olabilir ama."
- **Claude'un görsel tespiti:** Doğrulandı — pipette şişeden yukarı kaldırılırken, şişenin camı içinde **aynı pipette çubuğunun silueti/izi hâlâ görünüyor** (0.3-2 sn arası kareler) — sanki gerçek pipette dışarı çıkmış ama bir "hayalet" kopyası şişenin içinde kalmış. Damla oluşumu ve düşüşü (3-7 sn) gerçekten akıcı ve gerçekçi. Sıvının traverten üzerine yayılması (7-8 sn) düzgün bir daire gibi duruyor, gerçek bir sıvının düzensiz/organik kenarları eksik — Şevval'in "biraz daha gerçekçi olabilir" notuyla örtüşüyor.
- **Kök neden:** Prompt'ta pipette'in şişeden tamamen çıktığı açıkça belirtilmemiş; model muhtemelen "raised just above the bottle mouth" ifadesini şişenin içindeki eski pozisyonu da kısmen koruyarak yorumluyor.
- **Puan:** Karma, 3.5/5 — damla/düşüş kısmı 5/5, şişe-pipette ayrımı 2/5, sıvı yayılma gerçekçiliği 3.5/5.
- **Düzeltme (bir dahaki denemede):** Prompt'a ekle: `"The pipette rod is fully and cleanly removed from the bottle neck — no trace, silhouette, or duplicate of the rod remains visible inside the bottle glass."` Sıvı yayılması için: `"the liquid spreads into an organic, slightly irregular ring with natural surface tension, not a perfectly smooth circle."`
- **Not:** `prompt-formulu.md`'deki master örneğe bu bilinen hata için not düşüldü.

### "Cream Wave" — Daily Moisture Cream'in kremden ortaya çıkışı (17 Eylül 2026)

- **Dosya:** `03-Assets/videos/nefin-beauty/nefin-beauty-daily-moisture-cream-wave-reveal-karma-v1.mp4`
- **Konsept:** 0-5 sn arası salt krem dokusu makro çekimi (ürün yok), sonra kamera geri çekilip ürünün kremin içinden yavaşça ortaya çıkması isteniyor.
- **Şevval'in değerlendirmesi:** "Videonun ilk kısmı gayet güzel, kullanılabilir ama daha sonra ürün bir anda kremin içinden çıkıyor. Bu çok AI duruyor."
- **Claude'un görsel tespiti:** 0-5 sn arası krem dalgası gerçekten çok başarılı — pürüzsüz, gerçekçi, marka yönüyle tam uyumlu. Ama ~5.5-6 sn'de ürün **yavaş bir "ortaya çıkma" değil, ani bir "belirme"** ile geliyor — önce sadece altın kapak kremin ortasında beliriyor, hemen ardından (6.5-7 sn) şişenin tamamı zaten kremin üstünde duruyor. Prompt'un istediği "bottle slowly becomes visible from behind the flowing cream" / "naturally emerges" hissi yok, düz bir kesme/pop-up gibi. Etiket yazısı da burada yine hafif bozuk ("Hydration Comfort Nourishment" tam okunmuyor).
- **Bu, daha önce loglanan "ürün sürekliliği" sorununun bir varyasyonu:** model bir objeyi bir dokunun/ortamın İÇİNDEN kademeli olarak ortaya çıkarmakta zorlanıyor — ya hiç göstermiyor ya da anlık beliriyor, aradaki yumuşak geçişi üretemiyor. Daha önce (bkz. Gold Tonic "model elinde ürün" reddedileni) bu sorun elde tutma bağlamında görülmüştü; burada dokunun içinden çıkma bağlamında tekrarlıyor.
- **Puan:** Karma, 3.5/5 — krem dokusu kısmı (0-5 sn) tek başına 5/5 ve referans olarak çok değerli; ürün reveal'i 2/5.
- **Bir dahaki sefere:** (1) Krem dalgası kısmını AYNI prompttan kesip ayrı bir "sadece doku" klip olarak kullan (zaten kendi başına güzel, ürün reveal'iyle uğraşmaya gerek yok). (2) Ürünün kademeli ortaya çıkışı için modelden "kesme/geçiş" istemek yerine iki ayrı klip üretip kurguda (post-prodüksiyon) bir crossfade/wipe geçişiyle birleştirmek daha güvenilir olabilir — model bunu tek çekimde inandırıcı yapamıyor.

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
| `nefin-beauty-sunscreen-finger-application-v1.mp4` | 1280×720 (16:9) | Sunscreen (SUN Multi Protect Moisture) elde tutulup parmaga sikiliyor, urun parmak ucunda damlaciık/krem olarak beliriyor — marka brief'in "el + urun odakli, tam yuz yok" yonergesine uygun bir kullanim/how-to sahnesi | ❓ Gemini (prompt kaydedilmedi) | ❓ (prompt yok, sadece video var) | 4 — beğenildi, kucuk bir zamanlama notuyla |
| `nefin-beauty-retinol-supreme-hero-v1.mp4` | 720×1280 (9:16) | 10 sn | 24 | yok (sessiz) | Retinol Supreme (gece kremi) — kapaklı kavanoz + su damlacıkları (condensation) makro açılış, üstten kremin dokusu, mavi spatula ile krem karıştırma/alma detayı | ❓ Gemini (prompt kaydedilmedi — aşağıda tahmini açıklama) | ↓ "Retinol Supreme Hero — Tahmini Açıklama (prompt orijinali kayıp)" | 5 — beğenildi |

**Not — Sunscreen parmağa sıkma (17 Eylül 2026):** Şevval: "6-7. saniyede sıktıktan sonra geliyor güneş kremi, biraz daha senkron olmalı. Onun dışında çok hata göremedim." Şişe sıkma hareketi (basma jesti) ile kremin pompa ucunda görünmesi arasında hafif bir gecikme var — el+ürün kullanım sahnelerinde (sıkma/pompalama anı) bu senkron sorununa dikkat edilmeli, gerekirse prompt'a "the cream appears at the exact moment the pump is pressed, no delay" gibi bir vurgu eklenebilir. Genel olarak beğenildi, ürün prompt'u kayıtlı değil (sadece video var).

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
