---
name: icerik-paketi
description: Bir müşteri için tek konudan tam sosyal medya paketi üretir - zaman kodlu reels metni + görsel plan + gerekiyorsa AI B-roll/kapak brief bağlantıları. Kullanım - /icerik-paketi <musteri-slug> "<konu>" [format] . Reels metni, post metni, içerik paketi, terapist/ürün videosu metni isteklerinde kullan.
---

# /icerik-paketi

Argümanlar: `<musteri-slug>`, `"<konu>"` (örn. "Sınır koymak", "Vitamin C Serum lansman"), opsiyonel format (`konusan-kisi` | `b-roll-seslendirme` | `urun` | `karusel`).

## Adımlar

1. `00-Musteriler/<slug>/marka-brief.md` oku → ses tonu tablosu, hitap, yasak kelimeler/iddialar, hedef kitle, yasal kurallar. Bunlar bağlayıcı.
2. Müşterinin mevcut metinlerine bak: `04-Sosyal-Medya-Icerik/<slug>/` (örn. Humentis'te 12 terapist metni) → dil/ritim tutarlılığı için 1–2 örnek oku.
3. `04-Sosyal-Medya-Icerik/_templates/sosyal-medya-icerik-template.md` yapısında `04-Sosyal-Medya-Icerik/<slug>/<konu-slug>.md` yaz:
   - Künye (platform, format, konuşan, tek cümlelik mesaj, tek CTA)
   - Zaman kodlu metin: hook (≤ 8 kelime, ekranda sabit) → sorun/merak → neden/içgörü → umut/çözüm → CTA
   - Görsel plan tablosu (sn / görüntü / kaynak: gerçek – AI B-roll – post)
   - Çekim notları (9:16, göz kameraya, 2 sn beklemeler, altyazı, logo sona)
   - Kontrol listesi (yasak iddia, tek CTA, kişi görünürlük kuralı)
4. Görsel planda AI B-roll veya kapak gerekiyorsa: mevcut brief var mı bak (`06-AI-Video/<slug>/`, `07-AI-Gorsel/<slug>/`); varsa shot numarasıyla bağla, yoksa kullanıcıya `/video-brief` veya `/gorsel-brief` öner (otomatik açma).
5. Raporla: dosya yolu, süre tahmini, bağlanan/önerilen brief'ler.

## Kurallar
- Kozmetikte tedavi/kesin sonuç iddiası yok; klinikte teşhis dili ve danışan hikâyesi yok.
- Marka brief'te hitap "siz" ise metin "siz"; mevcut seride farklıysa kullanıcıya sor.
- Mevcut notları silme; sadece ekle.
