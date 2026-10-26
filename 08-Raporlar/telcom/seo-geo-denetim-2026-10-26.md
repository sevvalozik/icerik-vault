---
type: arastirma
client: "Telcom (otelkapikilidi.com)"
slug: telcom
rapor_turu: seo
status: draft
date: 2026-10-26
kaynak: "Claude (tarayıcıdan canlı site + WP REST API denetimi, 26.10.2026); yeni site: otelkapikilidi-web"
tags: [rapor, seo, geo, telcom, otelkapikilidi, wordpress, guvenlik]
related: ["[[00-Musteriler/telcom/marka-brief]]", "[[00-seo-geo-standardi]]", "[[02-Websites/projects/telcom/otelkapikilidi-web-sitesi]]", "[[05-Kod-Projeleri/telcom/otelkapikilidi-web-proje-ozeti]]"]
---

# Telcom — otelkapikilidi.com SEO/GEO denetimi ve yeni site

> Marka kuralı: `00-Musteriler/telcom/marka-brief.md` §4 ve §7 uygulandı (doğrulanmamış "lider" iddiası yeni başlık/açıklamalarda yok; fiyat rakamı yok).

## Özet

- **Sonuç:** Eski site içerik bakımından zengin (60 yazı, 15 sertifika PDF'i) ama **hacklenmiş**, teknik olarak dağınık ve kurum varlığı (Organization/LocalBusiness) tanımsız. Yeni site aynı adresleri koruyarak standarda göre kuruldu; yayın bekliyor.
- **En önemli 3 bulgu:** (1) Anasayfa gövdesine ekran dışına gizlenmiş Hollandaca casino linki enjekte edilmiş + 10 spam kategori açılmış (`/category/casino/` 200 dönüyor). (2) Schema'da kurum, adres, telefon yok; ürün sayfalarında Product yok; llms.txt yok. (3) İnce/kopya sayfalar dizine açık (örnek sayfa, boş WooCommerce sayfaları, ürün yazılarının kopyası iki sayfa).
- **İlk yapılacak 3 iş:** WordPress ve hosting parolalarını değiştirip hack'i temizlemek (müşteri/hosting); yeni siteyi demo olarak yayına alıp `npm run import:wp` ile tam içeriği aktarmak (Şevval); unvan, logo, KVKK metni, GBP linkini müşteriden almak.

## Yöntem ve veri kaynağı

- **İncelenen:** otelkapikilidi.com, 26.10.2026; Claude tarayıcısında sayfalar, `wp-json/wp/v2` (sayfa, yazı, medya, kategori), `robots.txt`, Yoast sitemap'leri, durum kodları (aynı origin `fetch`).
- **Ölçülemeyen:** Search Console / Bing verisi (erişim yok), `site:` ve marka aramaları (yapılmadı — CAPTCHA riskine girmeden müşteriyle birlikte yapılacak), Cloudflare/güvenlik duvarı AI bot erişimi (curl bu ortamdan siteye ulaşamadı), PageSpeed.

## Bulgular (eski site)

| # | Bulgu | Kanıt | Etki |
|---|---|---|---|
| 1 | **Hack / SEO spam**: anasayfada `position:absolute; left:-7566px` içinde fanobet-netherlands.nl casino linki | Elementor HTML widget, sayfa 9 içeriği | Yüksek (Google manuel işlem riski, güven) |
| 2 | Spam kategoriler: casino, Slottica, Big Bass Splash, Makispin, Rodeoslot, Bigclash, Andar Bahar Demo, Uncrossable Rush, Public, 222 (0 yazı) | `/wp-json/wp/v2/categories`; `/category/casino/` → 200 | Yüksek |
| 3 | WP kurulumunda "elementor-mcp-composer", "wp-abilities" eklentileri açık | `wp-json` namespace listesi | Orta (saldırı yüzeyi; yetkilisi bilmiyorsa kapatılmalı) |
| 4 | Kurum schema'sı yok (yalnız Yoast WebPage/WebSite/Breadcrumb) | anasayfa JSON-LD | Yüksek (GEO/varlık) |
| 5 | `llms.txt` yok | 404 | Orta |
| 6 | İnce sayfalar indekste: `sample-page`, `shop/cart/checkout-shop-wooshop-v2`, `general-otel-kapi-kilidi` ve `general-black-otel-kapi-kilidi` (ürün yazılarının kopyası) | 200 + page-sitemap | Orta |
| 7 | Sitemap'te `wpr_templates` ve `author` sitemap'leri | sitemap_index.xml | Düşük |
| 8 | Coral ürün sayfası Coral Black görselini gösteriyor | ürün yazısı 926 | Orta (kullanıcı) |
| 9 | Ürün meta açıklamaları kalıp: "General kilit markasının amiral kilitlerinden X…" (5 üründe aynı) | Yoast description | Orta |
| 10 | Tüm kapı kilidi modellerinde teknik metin birebir aynı | ürün yazıları | Orta (kopya içerik) |
| 11 | Kurumsal metinde güncel olmayan ifade: "22 yıldan bu yana" (1996 kuruluş → 30 yıl) ve iki farklı unvan | kurumsal sayfa | Düşük/Orta (NAP tutarlılığı) |
| 12 | İki farklı Facebook hesabına link | header/footer | Düşük (sameAs) |
| 13 | Yoast başlıklarının çoğu ≥60 karakter (ör. "DND MUR Nedir? (Otel DND / MUR Doorbell Sistemi) - Otel Kapı Kilidi") | yazı başlıkları | Orta |
| 14 | Olmayan sayfa gerçek 404 ✓, xmlrpc 405 ✓ | durum kodları | — |

## Yeni sitede yapılanlar (standart fazlarına göre)

**Faz 1 — Teknik:** sunucu HTML'i (her sayfa JS'siz tam), `resolveSeo()` tek karar noktası, başlık ≤60 / açıklama ≤155 (kelime sınırında), self canonical, 404'te canonical yok, sonda `/` ve www için 301, eski WP yolları 410, kopya sayfalar 301, ince içerik noindex + sitemap dışı (içerik dolunca otomatik açılır), dinamik sitemap (gerçek `lastmod` = WP `modified_gmt`, `image:image`), robots (panel/API kapalı, sitemap satırı), `security.txt`, SSS cevapları DOM'da.

**Faz 2 — Schema:** her sayfada tek `@graph`: Organization+LocalBusiness (unvan, adres, telefon, alan, sameAs, OfferCatalog), WebSite, sayfa türü (AboutPage/ContactPage/CollectionPage/ItemPage), BreadcrumbList, ürünlerde Product (marka, üretici, teknik özellik), rehberlerde BlogPosting, görünür SSS varsa FAQPage (metin birebir; `check:seo` karşılaştırıyor). Uydurma fiyat/puan yok. `hasMap` GBP linki girilince otomatik.

**Faz 3 — GEO:** `llms.txt` + `llms-full.txt` dinamik (ürün metinleri, teknik özellikler, SSS, mutlak linkler); robots'ta GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot açık; İngilizce rehberler `lang="en"`.

**Faz 4 — Yerel/NAP:** NAP tek kaynak (Firma bilgileri) → site, schema, llms.txt aynı yazım.

**İç link:** ürün sayfasında ilgili rehberler; rehberlerde ilgili ürün (dengeli sıralı) + diğer rehberler; footer'da tüm ürünler.

**Güvenlik:** spam bloklar taşınmıyor; spam kategori/URL'ler 410.

## "Bitti" kontrol listesi (yeni site, 26.10.2026 yerel deneme)

**Teknik**
- [x] Ham HTML'de sayfaya özel title, description, canonical, tek H1, gövde (`check:seo`)
- [x] Başlık ≤60, açıklama ≤155; marka geçiyor; yasak iddia yok — şehir ana sayfa açıklamasında
- [x] Olmayan adres 404, canonical yok
- [ ] `www` → çıplak ve `http` → `https` 301 (kod hazır; sunucu/Cloudflare'de yayında doğrulanacak)
- [x] İnce sayfalar noindex + sitemap dışı, otomatik açılma kuralı
- [x] Sitemap yalnız 200 + indekslenebilir + self-canonical; gerçek lastmod; görseller
- [x] robots.txt panel/API kapalı + Sitemap satırı
- [x] SSS DOM'da; başlık sırası (kartlar h2 altında h3)
- [ ] Her para sayfasına ≥5 sayfadan bağlamsal link — tam içe aktarmadan sonra `check:seo` ile ölçülecek (deneme verisinde 4)
- [x] Eşitlik testi: React ve sunucu HTML'i aynı render (SSR); FAQ/schema eşitliği `check:seo`'da

**Schema ve GEO**
- [x] Tek `@graph`; kurum, WebSite, sayfa türü, Breadcrumb, Product, BlogPosting, FAQPage
- [ ] `sameAs` / `hasMap` GBP (link müşteriden)
- [ ] Rich Results Test + validator.schema.org (yayından sonra)
- [x] llms.txt + llms-full.txt dinamik
- [ ] Cloudflare/güvenlik duvarı AI botlarını engellemiyor (`curl -A`) — yayında
- [x] "Son güncelleme" = dateModified = lastmod

**Yerel ve dış**
- [ ] NAP sitede/schema'da aynı ✓; GBP ve dizinlerde aynı mı ❓
- [ ] Backlink/atıf listesi (sonraki iş: telcom.com.tr, generalkilit.com karşılıklı linkler; tedarikçi/üretici dizinleri)

**Yayın ve ölçüm**
- [ ] Diff kapısı: eski 60 yazı + 10 sayfa → yeni sitede her URL için 200/301/410 listesi (içe aktarma raporu + `check:seo`)
- [ ] Yedek (`data/`), doğrulama, geri dönüş (DNS eski sunucuya)
- [ ] Search Console Domain mülkü, sitemap, "Dizine eklenmesini iste"
- [ ] Bing + IndexNow anahtarı (panelde üret)
- [ ] 1 hafta sonra `site:otelkapikilidi.com` ve marka araması

## Müşteriye / ekibe açık sorular

- Resmi unvan; vektör logo; GBP linki; resmi Facebook; KVKK metni; çalışma saatleri.
- Modeller arası teknik farklar; DND, Energy Saver, dolap kilidi için ürün bilgisi ve fotoğraf.
- Barındırma (Node destekli sunucu) ve WordPress'in kapatılma tarihi.
- WordPress'e kimler erişiyor? (Hack + bilinmeyen eklentiler)

## Marka kuralı gereği uygulanmayanlar

- Eski başlıktaki "Otel Kapı Kilit Sistemleri **Lideri**" yeni ana sayfa başlığında kullanılmadı (kanıt yok). Eski kurumsal metin müşterinin kendi cümlesi olarak aynen taşındı.
- Fiyat yazıları (ör. "Kartlı Kilit Sistemi Fiyatı (Aralık 2025)") içerik olarak taşındı; schema'ya fiyat eklenmedi.
