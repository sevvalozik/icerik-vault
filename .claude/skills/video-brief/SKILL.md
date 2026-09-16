---
name: video-brief
description: Bir müşteri için markaya özgü AI video brief'i (kurgu planı + üretime hazır shot promptları + negatif listeler + log tablosu) üretir. Kullanım - /video-brief <musteri-slug> "<kampanya adı>" [platform] . Reels, ürün lansmanı, klinik B-roll, kurumsal tanıtım gibi AI video isteklerinde kullan.
---

# /video-brief

Argümanlar: `<musteri-slug>` (örn. `nefin-beauty`), `"<kampanya>"`, opsiyonel platform (`reels` varsayılan; `web-hero`, `story`, `youtube`).

## Adımlar (sırayı bozma)

1. **Marka brief'i oku:** `00-Musteriler/<slug>/marka-brief.md`. Yoksa dur, kullanıcıya "önce Yeni Müşteri şablonuyla brief açılmalı" de ve `00-Musteriler/_templates/marka-brief-template.md`'yi göster. Brief'ten çıkar: AI Brief Bloğu, grade satırı, ürün/mekan/karakter kartları, KESİNLİKLE OLMAYACAK listesi, tipografi, logo yolu, yasal kurallar.
2. **Kütüphaneyi oku:** `06-AI-Video/_kutuphane/prompt-formulu.md`, `sektor-receteleri.md` (müşterinin sektörüne uyan bölüm), `negatif-promptlar.md` (genel + sektör), `tutarlilik-rehberi.md`. Model önerisi için `model-rehberi.md` → "Hızlı seçim".
3. **Geçmişe bak:** `06-AI-Video/<slug>/video-log.md` varsa "Gözlemler / Öğrenilenler" bölümünü uygula. `03-Assets/images/<slug>/` içinde gerçek ürün fotoğrafı var mı kontrol et; varsa I2V başlangıç karesi olarak yaz, yoksa "❓ gerçek fotoğraf bekleniyor" notu düş.
4. **Brief'i yaz:** `06-AI-Video/_templates/video-brief-template.md` yapısında, `06-AI-Video/<slug>/<kampanya-slug>-brief.md` dosyasına. Frontmatter: `type: video-brief`, `client`, `slug`, `kampanya`, `platform`, `oran`, `hedef_sure`, `model_birincil`, `model_yedek`, `status: draft`, `date` (bugün), `tags`, `related` (marka brief + video-log).
   - Kurgu planı: 4–6 shot (hook / ürün / doku-içerik / kullanım / kanıt / kapanış-post).
   - Her shot için **Varyant A (güvenli) + Varyant B (cesur)**, İngilizce, 10 blok sırasıyla, 60–120 kelime; kartlar birebir; kamera hareketi + lens + ışık + grade + `no text, no logos` + ses satırı (sesli modelde) + oran/süre.
   - Her shot'a negatif liste, model/mod, başlangıç karesi, süre/oran.
   - Ekran yazıları (post, marka fontu), ses planı, post-prodüksiyon checklist'i, boş üretim logu.
5. **Kalite kontrol:** `06-AI-Video/_kutuphane/kalite-kontrol.md` → A bölümünü promptlara uygula; çelişki ve yasak kelime taraması yap (Nefin: blue/purple/burgundy/sparkles; Humentis: hospital/medical/pink/lavender/people).
6. **Log dosyası:** `06-AI-Video/<slug>/video-log.md` yoksa oluştur (mevcut örnek: `06-AI-Video/nefin-beauty/video-log.md` yapısı) ve "Planlanan" bölümüne bu brief'i ekle.
7. **Kullanıcıya raporla:** dosya yolu, shot sayısı, önerilen model, eksik girdiler (fotoğraf, logo, onay).

## Kurallar
- Uydurma yok: brief'te olmayan renk/font/ürün özelliği icat etme; `❓ doğrulanacak` yaz.
- Yazı/logo/ekran içeriği prompt'a girmez (post-prodüksiyon).
- Mevcut notları silme; sadece ekle.
