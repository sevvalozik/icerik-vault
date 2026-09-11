---
type: dashboard
tags: [dashboard, tema]
---

# Tema Kataloğu

`01-Presentations/_themes/` klasöründeki hazır temalar. Bir sunum notunun frontmatter'ına `theme: <isim>` yazarak seçilir. Görsel örnekler için aynı klasördeki `theme-showcase.pdf`'e bakabilirsin.

| Tema (dosya adı) | Zemin | Vurgu | En uygun |
|---|---|---|---|
| `arctic-frost` | #fafafa | #4a6fa5 | Sağlık, teknoloji, temiz teknoloji, ilaç |
| `botanical-garden` | #f5f3ed | #f9a620 | Bahçe/gıda, çiftlik-sofra, botanik, doğal ürünler |
| `desert-rose` | #e8d5c4 | #96594a | Moda, güzellik/kozmetik, düğün, iç mimari (nefin-beauty'de kullanılan gerçek versiyon) |
| `forest-canopy` | #faf9f6 | #7d8471 | Çevre, sürdürülebilirlik, outdoor, wellness |
| `golden-hour` | #d4b896 | #f4a900 | Restoran, otelcilik, sonbahar kampanyaları, zanaat |
| `midnight-galaxy` | #2b1e3e (koyu) | #4a4e8f | Eğlence, oyun, gece hayatı, lüks marka, kreatif ajans |
| `modern-minimalist` | #ffffff | #708090 | Teknoloji, mimari, tasarım, modern iş teklifi |
| `ocean-depths` | #1a2332 (koyu) | #2d8b8b | Kurumsal, finans, danışmanlık, güven odaklı içerik |
| `sunset-boulevard` | #e9c46a | #e76f51 | Kreatif sunum, pazarlama, lifestyle, etkinlik |
| `tech-innovation` | #1e1e1e (koyu) | #0066ff | Tech startup, yazılım lansmanı, AI/ML, dijital dönüşüm |
| `dark-tech` | #0d1117 (koyu) | #58a6ff | Genel teknoloji/kurumsal (ilk oluşturulan tema) |
| `client-pitch` | #ffffff | #0066cc | Sade, kurumsal müşteri sunumları |

## Kaynak

10 temanın 4'ü (`arctic-frost` → `tech-innovation`) theme-factory skill'inden alındı. `desert-rose`, nefin-beauty projesindeki gerçek sunumdan (`nefin-web-stratejisi.pptx`) çıkarılan renk/font değerleriyle güncellendi, diğerleri skill'in orijinal renk paletini kullanıyor.

## Keynote Şablonları (native .kth)

Yukarıdaki tablo Marp/markdown tabanlı sunumlar için CSS temaları. Gerçek Keynote'ta (.key) çalışırken bunun yerine native Keynote tema dosyaları (.kth) kullanılır — aynı klasörde (`01-Presentations/_themes/`) duruyorlar.

| Tema dosyası | Kaynak | Nasıl kullanılır |
|---|---|---|
| `nefin-beauty-keynote-sablon.kth` | `son-kucultulmus.key`'den "Dosya → Temayı Kaydet..." ile çıkarıldı — sadece düzen/stil, Nefin'e özel içerik yok | Dosyaya çift tıkla → Keynote Tema Seçici'ye eklenir → "Yeni Belge" açarken bu temayı seçebilirsin |

Yeni bir müşteri için benzer bir görsel dil kullanmak istediğinde, boş bir sunumu bu temayla başlatıp üzerine kendi içeriğini yazman yeterli.
