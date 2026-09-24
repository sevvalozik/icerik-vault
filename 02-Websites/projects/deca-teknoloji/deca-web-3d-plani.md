---
type: website
framework: nextjs
client: "DECA Teknoloji"
slug: deca-teknoloji
status: draft
date: 2026-09-24
url: "https://www.decateknoloji.com"
tags: [website, 3d, webgl, scroll, kurumsal, seo, decateknoloji]
related: ["[[00-Musteriler/deca-teknoloji/marka-brief]]", "[[02-Websites/projects/deca-teknoloji/web-sitesi-revizesi]]", "[[00-Musteriler/deca-teknoloji/kurumsal-katalog-rev4]]", "[[05-Kod-Projeleri/deca-teknoloji/deca-web-proje-ozeti]]"]
---

# DECA Teknoloji — 3D Scroll Kurumsal Site: Analiz ve Plan

> Karar: **Next.js 16 + GSAP ScrollTrigger + Lenis + Three.js (R3F)** — Nefin sitesiyle aynı yığın, ayrı repo `~/deca-web`. İçerik **yalnızca** katalog Rev4 + revize dokümanından; eksikler "içerik bekleniyor" olarak işaretli (uydurma yok).

## 1. Mevcut site (decateknoloji.com — 24 Eylül 2026)

| Konu | Durum | Yeni sitede |
|---|---|---|
| Konumlandırma | "Güvenilir sistem entegratörü", 4 hizmet (siber, ERP, yazılım, satış sonrası) | 10 faaliyet alanlı mühendislik & teknoloji şirketi (revize) |
| Görsel | **Hiç fotoğraf yok**; koyu zemin + ikon kartları | Görsel ağırlıklı: 24 katalog fotoğrafı, her alan için 2 görsel |
| Logo | Eski SVG logo | **Yeni logo** (vektörleştirildi) |
| Yapı | Ana sayfa · Çözümler & Ürünler · Hakkımızda · Referanslar · İletişim | Revize site haritası (6 ana başlık, 10 alt sayfa) |
| İddialar | 7/24 destek, 4 saat yanıt, 15+ girişim | Revizede yok → kaldırıldı (müşteri isterse teyitle geri gelir) |
| Korunan | Resmi ad "Deca Bilgi Teknolojileri A.Ş.", LinkedIn, çalışma saatleri, KVKK sayfaları | Alt bilgide |

## 2. Referans analizi

| | ASELSAN | Innova | DECA'ya aldığımız |
|---|---|---|---|
| Hero | Tam ekran ürün fotoğrafı + lacivert tint, geniş aralıklı başlık, slider | Koyu banner + ürün görseli | Tam ekran, lacivert gradyanlı **tek güçlü görsel** (slider yok — dikkat dağıtır) |
| Renk | Lacivert baskın | Beyaz + koyu lacivert | Lacivert `#001D3D` + beyaz + vurgu mavi `#1E88E5` |
| Güven | Rakam şeridi (ciro, ihracat, çalışan) | Başarı hikâyesi logoları | Doğrulanabilir sayılar (10 alan, 19 referans kurum) + logo şeridi |
| Çözümler | Savunma / Sivil ikili büyük kart | Sekmeli liste + ikon | 3 grup (Yazılım / Mühendislik / Simülasyon) büyük görsel kartlar |
| Footer | — | Koyu, devre çizgisi motifi | Koyu lacivert + noktalı dünya haritası (katalog motifi) |
| Hareket | Az | Az | **Fark burada:** scroll'a bağlı 3D anlatı |

## 3. Site haritası (revize → rota)

| Revize başlığı | Rota |
|---|---|
| Kurumsal açılış: Hakkımızda · Vizyon ve Misyon · Değerlerimiz · Kariyer | `/kurumsal` (#hakkimizda #vizyon-misyon #degerlerimiz) · `/kariyer` |
| Faaliyet alanları (10) | `/faaliyet-alanlari` + `/faaliyet-alanlari/[slug]` × 10 |
| Öne çıkan çözümler: Yazılım · Mühendislik · Simülasyon · Ürün detay · Demo talebi | `/cozumler` (#yazilim #muhendislik #simulasyon #demo-talebi) — ürün detayı = alan sayfaları |
| Referanslar: Referanslarımız · Projelerimiz · Başarı Hikâyeleri | `/referanslar` |
| Medya: Katalog ve Dokümanlar | `/medya` |
| İletişim: Bilgiler · Teklif Talebi · İş Birliği Başvurusu | `/iletisim` (#teklif-talebi #is-birligi) |

**Çözüm grupları** (katalog içeriğinin yeniden gruplanması, yeni iddia yok):
- **Yazılım Çözümleri:** Kurumsal yazılım & ERP · Siber güvenlik analizleri · YZ destekli kan analizi · Lojistik yazılımları · Karbon ayak izi sistemi
- **Mühendislik Sistemleri:** İHA/SİHA navigasyon & filo yönetimi · Ray-teker optimizasyonu & adaptif tork · Polimer eklemeli imalat · Nanoteknoloji su verimliliği
- **Simülasyon Uygulamaları:** VR savunma simülasyonları · Kuruma özel simülasyon · Eğitim simülasyonları + uygulamalı STEM atölyeleri

## 4. Hero görseli — "en etkili görsel" seçimi

**Seçilen: `03-savunma-iha-saha-operasyonu.jpg`** (katalog s.6, Savunma bölüm kapağı).

Gerekçe:
1. **Tek karede en çok yetkinlik:** uçan İHA/SİHA + insansız kara aracı + haberleşme antenli komuta aracı + saha ekibi + deniz platformu → "sahadan komuta merkezine entegre sistem" mesajı.
2. **Konumlandırmayla örtüşme:** Milli Teknoloji Hamlesi, savunma öncelikli referanslar (SSB, MSB, ASELSAN, BAYKAR, ROKETSAN, HAVELSAN, TEI) ve müşterinin ASELSAN'ı referans göstermesi.
3. **Aydınlık gökyüzü + doğal ışık** lacivert gradyan ve beyaz tipografiyle okunaklı kompozisyon veriyor; diğer adaylar (dağdaki tren, SOC) tek sektöre kilitleniyor.

Teknik not: görsel dikey (1024×1536). Masaüstünde tam ekrana basmak ~1,9× büyütme = yumuşak görüntü. Çözüm: **bölünmüş hero** — görsel sağda tam yükseklikte (ölçek ≤1,1× → keskin), scroll'da tam ekrana açılıp 3D düzlemde geri çekiliyor (hareket sırasında büyütme göze batmıyor). Mobilde dikey görsel doğrudan tam ekran. Alternatif hero'lar (kod içinde tek satırla değişir): `04-ulasim-tren-dag`, `05-siber-guvenlik-soc`.

## 5. Scroll anlatısı (ana sayfa)

| # | Bölüm | 3D / hareket | İçerik kaynağı |
|---|---|---|---|
| 1 | **Hero** "Mühendislikten Teknolojiye…" | Bölünmüş kadraj → scroll ile tam ekran → `rotateX` ile 3D geri çekilme; HUD köşe çizgileri, koordinat etiketi | revize §01 |
| 2 | **Kurumsal açılış** | WebGL **noktalı dünya küresi** (katalogdaki noktalı harita motifi), Ankara işaretli; metin kelime kelime aydınlanır | revize §01 + katalog Hakkımızda |
| 3 | **Değer · Teknoloji · Sürdürülebilir Gelecek** + 4 kurumsal öncelik | Kartlar derinlikten öne gelir | revize Hakkımızda |
| 4 | **Faaliyet alanları** (10) | **3D silindir galeri**: 10 alan görseli halka üzerinde, scroll ile döner; öndeki kart büyür, başlık + link | katalog |
| 5 | **Öne çıkan çözümler** | Üst üste binen tam ekran kartlar (sticky stack, arkadaki kart küçülüp kararır) | §3 gruplama |
| 6 | **Referanslar** | İki sıra sonsuz logo şeridi (ters yönlü) + sayılar | katalog s.26–27 |
| 7 | **Medya** | 3D katalog kapağı (hover/scroll ile açılır) → PDF indir | katalog |
| 8 | **İletişim CTA** | Lacivert kapanış, noktalı harita | katalog arka kapak |

`prefers-reduced-motion` → pin/3D yok, statik düzen. WebGL yoksa küre yerine statik noktalı harita görseli.

## 6. Tasarım sistemi

```
--navy-950 #000F22   en koyu zemin
--navy-900 #001D3D   logo laciverti (birincil)
--navy-700 #0B3563
--blue-500 #1E88E5   vurgu (katalog)
--ice-100  #DBE9F5   buz mavisi
--ice-50   #F4F8FC   açık zemin
--slate-500 #536B83  ikincil metin
--ink      #0B1726   gövde metni
Font: Archivo (değişken, wdth 100–125) + IBM Plex Mono
```

## 7. SEO

- Her alan sayfası: `<title>` = "{alan anahtar kelimesi} | {alan adı} — DECA Teknoloji", açıklama katalog metninden, H1 katalog başlığı, H2'lerde anahtar ifadeler, görsellerde anahtar kelimeli `alt`, görünür "Uzmanlık başlıkları" etiketleri.
- JSON-LD: `Organization` (ad, resmi ad, adres, e-posta, LinkedIn, `knowsAbout`), alan sayfalarında `Service` + `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, canonical, Open Graph görseli, `lang="tr"`.
- Anahtar kelime ↔ sayfa eşleşmesi: [[02-Websites/projects/deca-teknoloji/web-sitesi-revizesi]] §3.

## 8. Hedefler

| Metrik | Hedef |
|---|---|
| Ana sayfa ilk yük | < 1,5 MB (küre ve galeri tembel yüklenir) |
| LCP (mobil 4G) | < 2,5 sn (hero görseli `priority`, AVIF/WebP) |
| CLS | < 0,05 |
| Erişilebilirlik | WCAG 2.2 AA; tüm 3D içerik gerçek DOM linkleri, klavye ile gezilebilir |

## 9. Açık konular

Bkz. marka brief §11 (telefon, kariyer, projeler, ürün detayları, KVKK metinleri, form alıcısı, logo vektörü, kamu logosu izni). Formlar şu an doğrulama + `mailto:` ile info@decateknoloji.com'a gider; sunucu tarafı gönderim (Resend / kurum SMTP) kararı bekliyor.
