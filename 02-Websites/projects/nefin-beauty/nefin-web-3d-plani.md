---
type: website
framework: nextjs
client: "Nefin Beauty"
slug: nefin-beauty
status: draft
date: 2026-09-21
url: "https://nefinbeauty.com"
tags: [website, 3d, webgl, e-ticaret, nefinbeauty]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[nefin-beauty-sunum]]", "[[nefin-sunum]]", "[[04-Sosyal-Medya-Icerik/nefin-beauty/instagram-feed]]"]
---

# Nefin Beauty — 3D Scroll Web Sitesi: Analiz ve Plan

> Karar: **tam e-ticaret yenileme** · **gerçek WebGL 3D (Three.js)** · **logo SVG müşteriden istenecek** · **ayrı repo + Vercel**.
> Bu not strateji ve yol haritasıdır. Kod vault'a girmez; iş başlayınca `05-Kod-Projeleri/nefin-beauty/` altına özet not açılır.

## 1. Mevcut sitenin analizi (nefinbeauty.com — 21 Eylül 2026'da ölçüldü)

### Teknik

| Ölçüm | Değer | Yorum |
|---|---|---|
| Altyapı | Hazır TR e-ticaret teması, jQuery 3.5.1 + Swiper | Ajans: collectivepeople.com.tr. Modern framework yok |
| Sayfa ağırlığı | **13,7 MB** (13,2 MB'ı görsel) | Ana sayfa. Mobil veride kabul edilemez |
| İstek sayısı | 58 | — |
| Görsel sayısı | 43, 11'i WebP, 18'i lazy | Kalanı eager + JPEG |
| En büyük hata | **1920×2880 görseller 360 px'lik slota basılıyor** | ~8× fazla piksel. Tek başına ağırlığın kaynağı |
| Font | Montserrat | Marka fontu değil (brief: Bodoni Moda + Jost) |
| 3D / scroll animasyon | Yok | — |
| Video | Yok | Elde 20+ ürün videosu varken kullanılmıyor |

### Yapı

Hero slider → öne çıkan ürünler → ürün banner slider → set CTA → Instagram feed → akordeon (cilt endişeleri) → bülten → mega footer. Klasik şablon dizilimi; marka anlatısı yok.

### Estetik

Altın/bordo "lüks gece" yönü — **marka brief'inin 5. bölümündeki "KESİNLİKLE OLMAYACAK" listesiyle doğrudan çelişiyor** (bordo/kadife zemin, siyah lüks-gece estetiği). Yeni site bu yüzden sadece teknik değil, **yön değişimi** olacak: krem/fildişi + soft altın + espresso.

### İyi olan, korunacak

- **Ürün içerikleri artık gerçek ve güçlü.** PDP'lerde tam INCI listesi, aktif madde açıklamaları (C Vitamini, Alpha Arbutin, Niacinamide, HA, Panthenol, Glutathione, Propolis, Sea Buckthorn), kullanım talimatı var. Web yenileme sunumunda "eksik" denen copywriting **tamamlanmış** → marka brief'i bu yönde güncellenmeli.
- Fiyat + indirimli fiyat gösterimi net.
- Kategori kurgusu sade: Serumlar / Cilt Bakımı.
- Cilt endişesi akordeonu (Yaşlanma, Akne, Leke, Göz Çevresi, Kızarıklık, Kuruluk) — quiz'in hazır iskeleti.

### Ürünler (canlıdan)

24K Altın Tonik · Collagen (probiyotik/prebiyotik, 30 günlük) · CC Krem SPF 30+ (Alpha Arbutin & Kolajen) · Aktif Güneş Kremi SPF 50+ · Leke Karşıtı Serum 30 ml · (+ panelden tam katalog dökümü alınacak)

## 2. Hedef

Nefin'i "ucuz şablon e-ticaret" hissinden çıkarıp, **ürünün kendisinin kahraman olduğu** bir marka deneyimine taşımak: temiz krem zemin, gerçek 3D şişeler, scroll ile açılan bir anlatı, ve arkasında sorunsuz çalışan tam bir mağaza.

Ölçülebilir hedefler:

| Metrik | Bugün | Hedef |
|---|---|---|
| Ana sayfa ilk yük | 13,7 MB | **< 1,5 MB** (3D sonradan, tembel) |
| LCP (mobil, 4G) | ölçülmedi, ağır | **< 2,0 sn** |
| CLS | — | **< 0,05** |
| Lighthouse Performance (mobil) | — | **≥ 90** (3D sayfalar ≥ 80) |
| Erişilebilirlik | — | WCAG 2.2 AA, `prefers-reduced-motion` tam destek |

## 3. Tasarım sistemi

`01-Presentations/_themes/nefin-luxe-cream.css` **esas alınır** (eylül sunumunda müşteriye gösterildi, onaylı yön). Eski `desert-rose` paleti web için emekliye ayrılır; farkı nota düşülür.

```
--ink     #F6EFE4   krem (ana zemin)
--sand    #EADBC8   kum
--soft    #CDBBA5   yumuşak bej
--gold    #D9B36C   soft altın (vurgu)
--gold-deep #86622A koyu altın (metin vurgusu)
--taupe   #6B564B   gövde metni
--dark    #3B2A22   başlık
--espresso #1E1410  koyu bölüm zemini
```

Tipografi: **Bodoni Moda** (display) + **Jost** (gövde), `font-display: swap`, subset edilmiş woff2, self-host (Google Fonts CDN yok — gizlilik + hız).

Kural: her ekranda bir **kanıt** (INCI/aktif madde/uzman notu) + bir **duygu** (editoryal görsel/3D) yan yana. Bu, web yenileme sunumundaki konumlandırmanın doğrudan uygulaması.

## 4. 3D yaklaşımı (Three.js)

### Modelleme

5 ürün Blender'da, gerçek ürün fotoğraflarından modellenecek: amber cam damlalıklı şişe (30 ml), uzun amber tonik şişesi (150 ml), beyaz pompalı krem, CC krem tüpü, güneş kremi. Etiketler gerçek ürün fotoğrafından doku olarak çıkarılır — **yazı AI'ye ürettirilmez** (marka brief kuralı).

Çıktı: glTF 2.0, **Draco** mesh sıkıştırma + **KTX2/Basis** doku. Hedef: model başına **≤ 1,5 MB**.

### Sahne teknikleri

- **Cam kırılması:** `MeshTransmissionMaterial` (drei) — amber cam, kalınlık, dispersiyon. Mobilde `transmission` kapalı, sahte küp haritalı ucuz malzeme.
- **24K altın tanecikleri:** instanced particle + yavaş drift, tonik bölümünde.
- **Serum damlası:** damlalıktan düşen damla — fizik değil, zaman çizelgeli morph + refraction.
- **Krem dokusu:** displacement + normal map ile swatch yüzeyi.
- **Işık:** HDRI stüdyo ortamı (yumuşak pencere ışığı, sıcak) — marka brief'indeki "sert stüdyo flaşı yok" kuralı.

### Scroll motoru

**Lenis** (yumuşak scroll) + **GSAP ScrollTrigger** (pin + scrub). Kamera ve model animasyonları tek bir zaman çizelgesine bağlanır; scroll pozisyonu = zaman. React Three Fiber (R3F) + drei, Next.js içinde `dynamic(..., { ssr: false })` ile.

### Performans ve güvenlik ağı

- Hero'da **önce statik AVIF poster** (LCP bu), canvas hazır olunca çapraz geçişle devreye girer.
- `dpr` en fazla 2, mobilde 1,5; `powerPreference: high-performance`.
- Görünmeyen sahneler `frameloop="demand"` ile durur; sekme arkada ise render yok.
- **WebGL yoksa / `prefers-reduced-motion` açıksa**: tüm 3D bölümleri statik görsel + kısa video ile yerine geçer. Site 3D olmadan da eksiksiz çalışır.
- Düşük bellekli cihaz tespiti (`navigator.deviceMemory`, `hardwareConcurrency`) → hafif mod.

## 5. Scroll anlatısı (ana sayfa)

1. **Açılış** — krem zemin, logo, tek cümle vaat, yavaşça dönen serum şişesi. Tek CTA: "Keşfet". Fiyat yok, kampanya şeridi hero'nun **altında** (sunumdaki karar).
2. **Damla** — pipetten düşen damla; etrafında gerçek aktif maddeler belirir (C Vitamini, Alpha Arbutin, Niacinamide, Hyaluronik Asit). Kanıt burada başlar.
3. **Ürün ailesi** — yatay pinned scroll; şişeler sırayla kameraya döner, adları ve tek cümlelik faydaları gelir.
4. **Rutin** — Arındır → Serum → Nemlendir → Koru. Dört adım, her biri pinned; "Bu rutini sepete ekle" tek tıkla (sunumdaki 3. madde).
5. **Kanıt & şeffaflık** — sol editoryal fotoğraf, sağ INCI listesi teknik tipografiyle. Gerçek INCI verisi.
6. **Doku** — makro doku videosu scroll ile scrub; krem/jel/tonik.
7. **Setler & hediye** — flat-lay set kompozisyonu, GWP eşiği ilerleme çubuğu (Faz 3).
8. **nefin + you** — Instagram akışı. **Veri kaynağı: `04-Sosyal-Medya-Icerik/nefin-beauty/instagram-feed.md`** — önizleme stüdyosundaki feed doğrudan siteyi besler.
9. **Hikaye** — kurucu mektubu tonunda kısa bölüm (metin ❓ müşteriden).
10. **Kapanış** — bülten + footer.

## 6. E-ticaret mimarisi (tam yenileme)

### Önerilen yığın

| Katman | Seçim | Gerekçe |
|---|---|---|
| Önyüz | **Next.js 15 (App Router) + TypeScript** | SEO için SSR/ISR şart; R3F ile 3D aynı projede |
| 3D | React Three Fiber + drei + GSAP + Lenis | Yukarıdaki sahne planı |
| Mağaza çekirdeği | **Medusa v2** (kendi sunucumuzda) | Sepet, sipariş, stok, iade, kupon hazır; veri bizde; sipariş başına komisyon yok |
| Veritabanı | Postgres (Neon/Supabase) + Redis | Medusa gereksinimi |
| Ödeme | **iyzico** (alternatif PayTR) | TR 3D Secure, taksit, TRY |
| Kargo | Yurtiçi / Aras / MNG API + gönderi takibi | — |
| e-Arşiv fatura | Paraşüt / BizimHesap API | Yasal zorunluluk |
| Arama | Meilisearch (Medusa eklentisi) | Katalog büyüyünce |
| Barındırma | Önyüz **Vercel**, Medusa **Railway/Fly**, medya **Cloudflare R2 + Images** | — |
| Analitik | GA4 + Meta Pixel (mevcut pixel taşınır) + Vercel Analytics | — |

**Alternatif (daha az devops isteniyorsa):** Shopify headless (Storefront API) + iyzico app. Aylık ücret ve daha az kontrol karşılığında ödeme/fatura/stok yükü kalkar. **Faz 1 kodu başlamadan bu çatal netleşmeli** — önyüz her iki durumda da aynı, değişen veri katmanı.

### Sayfa envanteri

`/` (3D anlatı) · `/urunler` · `/kategori/[slug]` · `/urun/[slug]` (akordeon: Faydalar / Kullanım / İçindekiler + 3D ürün görüntüleyici + "Bu Rutinin Parçası") · `/setler` · `/cilt-profili` (quiz, Faz 3) · `/sepet` · `/odeme` · `/hesabim` (siparişler, adresler, istek listesi) · `/siparis/[id]` · `/blog`, `/blog/[slug]` · `/hakkimizda` · `/iletisim` · kurumsal metinler (mesafeli satış, iade, gizlilik, çerez, KVKK, üyelik)

## 7. Fazlar

**Faz 0 — Hazırlık (bloklayıcılar)**
Logo SVG talebi · mevcut panelden tam ürün/müşteri/sipariş dökümü · mevcut URL listesi (301 haritası için) · iyzico başvurusu · kargo sözleşmesi · e-arşiv entegratörü · ürünlerin çok açılı fotoğrafları (3D modelleme için) · GA4/Meta erişimleri.

**Faz 1 — Tasarım sistemi + marka sitesi**
Tasarım tokenları koda dökülür, tipografi self-host, bileşen kütüphanesi. Ana sayfa 3D anlatısı (1–5. bölümler) çalışır hâlde, gerçek içerikle. Vercel önizleme linki müşteriye gösterilir. *Bu fazın sonunda elde gösterilebilir bir şey var.*

**Faz 2 — Katalog ve ürün**
Medusa kurulumu, ürün göçü, `/urunler`, `/kategori`, PDP (akordeon + 3D görüntüleyici), arama, istek listesi.

**Faz 3 — Satış**
Sepet, üyelik, ödeme (3D Secure), kargo, e-arşiv, kupon/GWP, sipariş e-postaları, iade akışı, cilt profili quiz'i.

**Faz 4 — Göç ve yayın hazırlığı**
301 yönlendirme haritası (`/product-73` → yeni slug), sitemap, structured data (Product/Offer/BreadcrumbList), yasal metinler, KVKK/çerez izni (mevcut sitedeki çerez bandı yerine gerçek izin yönetimi), yük ve ödeme testleri, staging'de gerçek kartla test siparişi.

**Faz 5 — Yayın ve izleme**
DNS geçişi, canlı izleme (hata + performans), ilk hafta günlük kontrol, eski platformun kapatılma takvimi.

## 8. Riskler ve dürüst notlar

- **Tam e-ticaret yenileme, 3D siteden büyük bir iştir.** Ödeme, fatura, kargo, KVKK ve sipariş göçü teknik değil operasyonel risk taşır; canlı satış yapan bir mağaza kapatılıp yenisi açılıyor. Faz 1'in tek başına gösterilebilir olması bu yüzden önemli: iş uzarsa bile müşteride karşılığı olan bir çıktı olur.
- **3D, SEO ve performansın düşmanı olmamalı.** Ürün sayfalarında 3D tamamen isteğe bağlı bir katman (tıklayınca açılan görüntüleyici); ana sayfa dışında scroll animasyonu yok.
- **Logo olmadan 3D'de kabartma/animasyon yapılamaz.** Faz 1 tasarımı geçici wordmark ile ilerler; SVG gelmezse logo işi ayrı kalem olur.
- Mevcut ürün metinleri (INCI, faydalar) canlı siteden alınacak — **yeniden yazılmayacak**, sadece tipografiyle sunulacak. Kozmetik mevzuatı gereği tedavi iddiası eklenmez (marka brief 7. bölüm).
- 20+ AI video ve görsel vault'ta hazır; 3D bölümlerin fallback'leri ve doku bölümleri bunlarla beslenir, yeni üretim ihtiyacı sınırlı.

## 9. Doğrulama

- Her faz sonunda Vercel önizleme linki + Lighthouse (mobil) raporu.
- 3D: WebGL kapalı tarayıcıda, `prefers-reduced-motion: reduce` ile ve eski Android'de manuel test; hepsinde site eksiksiz çalışmalı.
- Performans bütçesi CI'da: ana sayfa ilk yük > 1,5 MB olursa build kırmızı.
- Ödeme: iyzico sandbox'ta başarılı/başarısız/3DS iptal senaryoları; canlıda 1 TL test siparişi.
- Göç: eski URL listesinin tamamı 301 veriyor mu diye otomatik tarama.

## 10. ❓ Müşteriden / karardan beklenenler

- Logo SVG (veya AI/PDF)
- Mevcut panel yönetici erişimi + tam katalog dökümü
- Medusa mı, Shopify headless mi (Faz 1 kodu başlamadan)
- Kurucu hikayesi metni
- Ürünlerin stüdyo fotoğrafları (3D modelleme referansı; ideali her üründen 6–8 açı)
- Alan adı/DNS ve mevcut hosting erişimi, geçiş tarihi
