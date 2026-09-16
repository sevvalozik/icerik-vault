---
name: gorsel-brief
description: Bir müşteri için markaya özgü AI görsel brief'i (reels kapak, feed, web hero, sunum görseli veya video keyframe) ve üretime hazır promptlar üretir. Kullanım - /gorsel-brief <musteri-slug> "<kampanya>" [kullanim] . Görsel, kapak, hero, keyframe, Gemini/Midjourney prompt isteklerinde kullan.
---

# /gorsel-brief

Argümanlar: `<musteri-slug>`, `"<kampanya>"`, opsiyonel kullanım (`reels-kapak` | `feed` | `story` | `web-hero` | `sunum` | `keyframe`).

## Adımlar

1. `00-Musteriler/<slug>/marka-brief.md` oku (yoksa dur ve Yeni Müşteri şablonuna yönlendir). Çıkar: AI Brief Bloğu, grade satırı, ürün/mekan kartları, yasaklar, tipografi.
2. `07-AI-Gorsel/_kutuphane/gorsel-prompt-formulu.md` oku; `keyframe` kullanımıysa "Video için keyframe üretimi" bölümünü uygula (video oranı, hareket için boşluk, ürün net).
3. `03-Assets/images/<slug>/` içinde gerçek ürün/mekan fotoğrafı ve stil çapası (beğenilen kare) ara; varsa "yüklenecek referans" olarak yaz. Gerçek ürün varsa prompt "the uploaded product kept exactly the same" ile başlar.
4. `07-AI-Gorsel/_templates/gorsel-brief-template.md` yapısında `07-AI-Gorsel/<slug>/<kampanya-slug>-gorsel-brief.md` yaz. Her görsel için: kullanım, oran, kompozisyon notu (yazı gelecekse hangi tarafta negatif alan), İngilizce prompt (tür / konu / mekan / kompozisyon / kamera / ışık / grade / teknik / negatif), model + ayar.
5. `07-AI-Gorsel/<slug>/gorsel-log.md` yoksa oluştur; brief'i "Planlanan" olarak ekle.
6. Raporla: dosya yolu, görsel sayısı, model, eksikler.

## Kurallar
- Yazı ve logo prompt'a girmez; marka fontuyla post'ta.
- Sektör yasaklarını negatif listeye koy (marka brief → KESİNLİKLE OLMAYACAK).
- Uydurma yok; `❓ doğrulanacak`.
