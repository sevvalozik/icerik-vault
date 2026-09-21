---
type: presentation
marp: false
theme: nefin-luxe-cream
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-21
tags: [sunum, nefinbeauty, kozmetik, instagram, icerik-takvimi]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[aylik-icerik-takvimi]]", "[[06-AI-Video/nefin-beauty/video-log]]", "[[nefin-beauty-sunum]]"]
---

# Nefin Cosmetics — Aylık İçerik Planı Sunumu

Müşteriye "aylık takvime göre neler planladık, neler hazırladık" anlatan, tek sayfa HTML sunum. Web yenileme sunumundan ([[nefin-beauty-sunum]]) ayrı bir iştir.

## Dosyalar

`01-Presentations/active/nefin-sunum/`:

- `index.html` — sunumun kendisi. Tarayıcıda aç (video/görseller aynı klasörde olmalı).
- `build_deck2.py` — index.html'i üreten script (kaynak). Düzenleme burada yapılır, sonra çalıştırılır.
- `*.mp4` + aynı isimli `*.jpg` — sıkıştırılmış reels klipleri ve kapak kareleri.
- `p_*`, `n_*`, `c_*`, `img_collagen.jpg` — ürün fotoğrafları ve bilgi/doku görselleri.
- `nefin-reels-sesli.pptx` — reels'lerin sesli PowerPoint versiyonu.
- Orijinal (sıkıştırılmamış) kaynaklar: `03-Assets/videos/nefin-beauty/sunum-kaynak/` ve `03-Assets/images/nefin-beauty/sunum-kaynak/`.

Yayınlanmış link: https://claude.ai/artifact/1VMFvM7YGYB6QzqgWweG3n

## Kullanım

Tıkla veya ←/→ / Space ile ilerle, `F` tam ekran. Reels ve görsellere tıklayınca büyür; klipler orijinal sesle oynar. 1920×1080 sahne, ekrana ölçeklenir.

## Slayt sırası

1. Açılış: Aylık İçerik Planı
2. Ay bir bakışta: etkileşimli takvim (filtre: Reels / Carousel / Stories, hazır olanlar işaretli)
3. Hazırlananlar 1/2: Reels
4. Hazırlananlar 2/2: Reels
5. Ürün görselleri 1/2
6. Ürün görselleri 2/2
7. Bilgi görselleri (infografikler)
8. Doku ve his
9. Carousel klipleri (8. gün Yoğun Nemlendirici, 26. gün SPF 50+ Güneş Kremi, yatay video)
10. Kapanış: Teşekkürler · Sorular · Görüşler

Kapsam dışı: web sitesi yenileme içeriği. Humentis dosyaları bu sunumda kullanılmadı (ayrı müşteri).

## Tasarım tokenları (tema: `nefin-luxe-cream`)

- Renkler: krem `#F6EFE4`, kum `#EADBC8`, yumuşak bej `#CDBBA5`, soft altın `#D9B36C`, koyu altın `#86622A`, taupe `#6B564B`, kahve `#3B2A22`, espresso `#1E1410`.
- Fontlar: Bodoni Moda (başlık/display) + Jost (gövde).
- Stil: krem/fildişi/bej + soft altın + espresso, bordo/kadife yok, az metin, çok animasyon, gerçek video ve görsel.
- CSS: `01-Presentations/_themes/nefin-luxe-cream.css`

## Kaynak takvim

[[aylik-icerik-takvimi]] (`04-Sosyal-Medya-Icerik/nefin-beauty/`).

## Açık noktalar ❓ doğrulanacak

- Bazı görsellerin gün etiketi görsel içeriğine göre tahmin edildi (ör. 21. gün Leke, 3. ve 8. gün nemlendirici görselleri).
- "Serum", "Krem", "Ürün gamı" görsellerinin günü yok.
- Takvimde 9 Reels yazıyor, sunumda hazır Reels sayısı farklı olabilir.
- Reels'lerin üretim promptları kayıtlı değil, bkz. [[06-AI-Video/nefin-beauty/video-log]].
