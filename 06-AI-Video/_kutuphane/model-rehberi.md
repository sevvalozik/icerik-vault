---
type: kutuphane
tags: [ai-video, model, veo, kling, runway, sora, rehber]
date: 2026-09-16
---

# AI Video Model Rehberi

> **Uyarı:** Bu tablo Eylül 2026 itibarıyla derlendi; sürümler aylık değişiyor. Bir modele oturmadan önce üretim ekranındaki güncel süre/oran/ses seçeneklerine bak. Aşağıdaki **prompt tarzı** ve **ne için iyi** sütunları sürümden bağımsız olarak geçerli kalır.

## Hızlı seçim

| İhtiyaç | Birinci tercih | Yedek |
|---|---|---|
| Ürün makro / doku (kozmetik) | Kling (image-to-video) | Veo 3.x |
| Sesli, diyaloglu sahne | Veo 3.x | Sora 2 |
| Gerçek ürün fotoğrafını canlandırma (etiket bozulmasın) | Kling I2V veya Runway Gen-4 | Veo 3.1 (referans görselle) |
| Mekan B-roll (klinik, ofis) | Veo 3.x | Luma Ray |
| Tek karakter, birden fazla çekimde aynı yüz | Veo 3.1 (referans) / Kling Elements / Runway References | — |
| Dramatik kamera hareketi (orbit, crash zoom, FPV) | Higgsfield preset | Kling kamera kontrolü |
| Görselden görsele geçiş (başlangıç → bitiş karesi) | Kling / Luma / Pika keyframes | Veo 3.1 first-last frame |
| Fizik ağırlıklı (sıvı, saç, kumaş) | Hailuo 02 / Kling | Sora 2 |
| Logo animasyonu | **AI değil** → After Effects / Canva / Keynote | image-to-video "gentle light sweep" (riskli) |

## Model kartları

### Google Veo 3 / 3.1 (Gemini uygulaması, Flow, Vertex AI)
- **Süre / format:** 8 sn; 16:9 ve 9:16; 720p–1080p (3.1'de 4K seçenekleri). Klip uzatma (extend) var.
- **Ses:** **Yerleşik** — diyalog, SFX, ortam sesi. Diyalogda `(no subtitles)` yazmazsan altyazı basabiliyor.
- **Girdi:** text-to-video, image-to-video, **referans görseller** ("ingredients": ürün/karakter/mekan görselleri → tutarlılık), ilk + son kare.
- **Negatif prompt:** API'de `negative_prompt`; arayüzde prompt sonuna `Avoid: …`.
- **Prompt tarzı:** Doğal düzyazı, sinema dili, 80–150 kelime. Ses satırını açıkça yaz.
- **Güçlü:** gerçekçilik, ışık, ses, mekan B-roll, diyalog. **Zayıf:** çok ince yazı, uzun metinli etiket, bazen fazla "reklam parlaklığı".
- **Türkçe diyalog:** çalışıyor ama dudak senkronu ve vurgu değişken; kısa cümle tut.

### Kling 2.x / 3.x (Kuaishou — klingai.com)
- **Süre / format:** 5 veya 10 sn; 16:9, 9:16, 1:1; 1080p. Standart / Professional mod (Pro daha tutarlı).
- **Ses:** yeni sürümlerde yerleşik ses/diyalog var; eski sürümlerde yok → post'ta ekle.
- **Girdi:** text-to-video, **image-to-video (en güçlü tarafı)**, başlangıç + bitiş karesi, **Elements** (birden fazla referans görselle karakter/ürün tutarlılığı), kamera kontrol presetleri, motion brush (1.x).
- **Negatif prompt:** **Ayrı alan var** → [[negatif-promptlar]] listesini buraya yapıştır.
- **Ayar:** "Creativity / Relevance" (CFG) kaydırıcısı — ürün işinde relevance'a yakın tut (0.5–0.7) ki prompt'a sadık kalsın.
- **Prompt tarzı:** Kısa, virgülle ayrılmış, kamera terimi açık. Ürün fotoğrafı yükle + sadece hareketi yaz.
- **Güçlü:** sıvı/doku fiziği, ürün sabitliği (I2V), fiyat. **Zayıf:** karmaşık diyalog, uzun anlatı.

### Runway Gen-4 / Gen-4 Turbo / Gen-4.5
- **Süre / format:** 5 veya 10 sn; 16:9, 9:16, 1:1, 4:3; 720p–1080p (upscale var).
- **Ses:** yok (Gen-4) → post'ta.
- **Girdi:** image-to-video merkezli; **References** (karakter/obje/mekan görselleri → aynı öğeyi farklı sahnede üret); Aleph (video-to-video düzenleme: sahneye obje ekle/çıkar, açı değiştir).
- **Negatif prompt:** yok → istemediğini pozitif ifadeyle dışla ("the label stays exactly the same").
- **Prompt tarzı:** **Görseli yeniden anlatma**, sadece hareketi yaz: "The camera slowly pushes in. The liquid gently swirls. Everything else remains still." 20–50 kelime.
- **Güçlü:** kontrollü, yavaş, "reklam kalitesi" hareket; ürün bozulmaz. **Zayıf:** hızlı/karmaşık aksiyon.

### OpenAI Sora 2 (sora.com, ChatGPT)
- **Süre / format:** 10–20 sn (Pro'da daha uzun); 16:9, 9:16; 1080p.
- **Ses:** yerleşik (diyalog, SFX, ortam). Storyboard modu ile çok çekimli kurgu tek promptta.
- **Girdi:** text, image; karakter "cameo" (izinli kişi).
- **Negatif prompt:** yok → `Avoid:` cümlesi.
- **Prompt tarzı:** Senaryo gibi; çekim çekim yazabilirsin ("Shot 1: … Shot 2: …"). Fizik ve süreklilik iyi.
- **Güçlü:** anlatı, çoklu çekim, gerçekçi fizik. **Zayıf:** ince ürün detayı, marka etiketi; Türkiye'de erişim/lisans durumunu kontrol et.

### Hailuo 02 / 2.3 (MiniMax — hailuoai.video)
- **Süre / format:** 6 veya 10 sn; 768p/1080p; 16:9, 9:16.
- **Ses:** yok (kontrol et).
- **Girdi:** text, image-to-video, "subject reference" (karakter tutarlılığı).
- **Kamera komutları:** köşeli parantez: `[Push in]`, `[Pull out]`, `[Pan left]`, `[Pan right]`, `[Tilt up]`, `[Tracking shot]`, `[Static shot]`, `[Zoom in]`, `[Shake]` — birden fazlası virgülle.
- **Prompt tarzı:** Kısa, aksiyon odaklı; kamera komutu başta.
- **Güçlü:** fizik, hareket doğallığı, hız. **Zayıf:** ince metin, uzun sahne.

### Luma Dream Machine (Ray 2 / Ray 3)
- **Süre / format:** 5–10 sn, uzatma; 16:9, 9:16, 1:1 vb.; Ray 3'te HDR.
- **Girdi:** text, image, **keyframes** (başlangıç + bitiş), loop, karakter referansı.
- **Prompt tarzı:** Doğal dil, orta uzunluk. "Enhance prompt" açıksa prompt'u kendisi genişletir (marka işinde kapat).
- **Güçlü:** yumuşak geçiş, keyframe morph, mekan. **Zayıf:** ürün etiketi sabitliği.

### Pika 2.x
- **Özellik:** Pikaframes (kare→kare geçiş, 10 sn'e kadar), Pikadditions (videoya obje ekleme), Pikaswaps.
- **Kullanım:** hızlı sosyal içerik, efekt; premium ürün reklamı için birinci tercih değil.

### Higgsfield
- **Özellik:** 50+ hazır kamera hareketi (crash zoom, 360 orbit, bullet time, dolly zoom, FPV drone, snorricam…), "Soul" görsel modeli, ürün/UGC şablonları.
- **Kullanım:** görsel yükle → preset seç → kısa prompt. Dramatik hook çekimleri için ideal.

### Midjourney Video (V1)
- **Özellik:** Midjourney görsellerini 5 sn canlandırır (21 sn'e kadar uzatma), low/high motion, manuel hareket promptu.
- **Kullanım:** stilize/illüstratif marka dili için; fotogerçekçi ürün için Kling/Veo daha iyi.

### Seedance (ByteDance — CapCut/Dreamina) ve Wan (Alibaba, açık kaynak)
- Seedance: çoklu çekim tek promptta, prompt sadakati yüksek; CapCut içinde erişilebilir → reels akışıyla uyumlu.
- Wan 2.x: açık kaynak, kendi sunucunda/ComfyUI'da; ses destekli sürümler var. Gizlilik gerektiren müşteri işlerinde seçenek.

## Google ekosistemi akışı (Nefin'de zaten kullanılan)

Ekip görselleri Gemini ile üretiyor (`Gemini_Generated_Image_*`). Bunu tutarlı bir hatta çevir:

1. **Görsel:** Gemini görsel modeli (Nano Banana / Nano Banana Pro) ile **gerçek ürün fotoğrafını yükleyip** yeni sahneye yerleştir ("keep the product exactly the same, place it on cream linen…") → etiket korunur.
2. **Video:** Aynı görseli Veo 3.1'e başlangıç karesi olarak ver, sadece hareketi prompt'la.
3. **Uzat:** 8 sn yetmezse extend; ya da son kareyi al → yeni klip.
4. **Kurgu:** CapCut/Premiere'de birleştir, marka fontuyla yazı, logo end-card, müzik.

Aynı akış Kling'de: Gemini görseli → Kling I2V (Pro) → CapCut.

## Ayar hatırlatmaları

- **Oran:** Reels/Stories/TikTok → 9:16. Web hero → 16:9. Feed → 1:1 veya 4:5 (16:9'dan kırp).
- **Süre:** hook 2–3 sn, toplam reels 15–35 sn → 3–6 klip.
- **Kalite modu:** ürün işinde daima en yüksek ("Pro", "Quality", "1080p"); "fast/turbo" sadece deneme.
- **Seed:** varsa (Veo API, Runway) beğendiğin sonucun seed'ini logla; küçük prompt değişikliklerinde aynı seed → benzer sonuç.
- **Prompt enhancer / auto-expand:** marka işinde **kapat**; kendi promptunu bozar.
