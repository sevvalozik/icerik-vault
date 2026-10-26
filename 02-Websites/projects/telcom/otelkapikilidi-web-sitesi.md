---
type: website
framework: nextjs
client: "Telcom (otelkapikilidi.com)"
slug: telcom
status: draft
date: 2026-10-26
url: "https://otelkapikilidi.com"
tags: [website, telcom, otelkapikilidi, seo, geo, admin-panel]
related: ["[[00-Musteriler/telcom/marka-brief]]", "[[05-Kod-Projeleri/telcom/otelkapikilidi-web-proje-ozeti]]", "[[08-Raporlar/telcom/seo-geo-denetim-2026-10-26]]", "[[00-seo-geo-standardi]]"]
---

# otelkapikilidi.com — yeni site (WordPress'ten geçiş + admin paneli)

> İş tanımı (Şevval, 26.10.2026): vault'taki SEO/GEO standardına göre yapılacak; admin paneli olacak; veriler aktif siteden çekilecek.

## Kararlar

- **Adresler korunur.** Eski WordPress'teki her ürün, rehber ve belge aynı adreste (`/<slug>/`, sonda `/`). Kopya sayfalar ve boş WooCommerce/örnek sayfalar 301/410.
- **Alan adı:** canonical `https://otelkapikilidi.com` (standart: www → çıplak, 301). Eski site www'liydi; geçişte Search Console'da Domain mülkü şart.
- **İçerik kaynağı:** WP REST API → içe aktarıcı (görseller ve 15 PDF dahil). Hack sırasında eklenen casino içerikleri taşınmaz.
- **Panel:** ürün, rehber/belge, sayfa, firma bilgileri (NAP tek kaynak), teklif talepleri, medya, yönlendirmeler, "WordPress'ten aktar".
- **Tasarım:** ürünün kendi malzemesi (fırçalanmış çelik + grafit) zemin; Telcom kırmızısı yalnız marka ve teklif eylemi. Tek akılda kalan öğe: hero'daki kapı panelinde kart okutulunca kırmızıdan yeşile dönen LED (bir kez, `prefers-reduced-motion`'da sabit).

## Sayfa yapısı

| Adres | Ne | Schema |
|---|---|---|
| `/` | Hero (kapı paneli), kapı kilidi modelleri, diğer sistemler, ID serisi, kurumsal paragraf, belgeler, son rehberler, teklif formu | Organization+LocalBusiness, WebSite, WebPage |
| `/urunler/` | Ailelere göre ürünler | CollectionPage + ItemList |
| `/<urun-slug>/` | Görsel, teknik özellik tablosu, açıklama, SSS, ilgili rehberler, teklif formu | ItemPage + Product (+FAQPage) |
| `/rehber/` | Konuya göre gruplu rehberler + İngilizce bölüm | CollectionPage |
| `/belgeler/` | ISO/TSE/CE belgeleri | CollectionPage |
| `/<yazi-slug>/` | Rehber/belge, PDF butonu, yan sütunda ilgili ürün + teklif + diğer rehberler | BlogPosting (+FAQPage) |
| `/kurumsal/` | Hakkımızda | AboutPage |
| `/iletisim/` | NAP (ayarlardan), WhatsApp, form, SSS | ContactPage + FAQPage |
| `/kvkk/` | KVKK aydınlatma metni (faz 2: dolu, kod sayfası) | WebPage |
| `/referanslar/` | Boşken noindex | — |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt` | Dinamik | — |

## Durum (26.10.2026)

- [x] Kod tamam, build temiz, birim testler (11) ve `check:seo` yerel denemede geçiyor (bkz. kod özeti).
- [x] Yerel deneme 3 ürün + 1 rehberle yapıldı (bu oturumun ağı canlı siteyi indiremiyor). **Tam içe aktarma Şevval'in Mac'inde:** `npm run import:wp`.
- [ ] Müşteriden: unvan, vektör logo, KVKK metni, GBP linki, DND/Energy Saver/dolap kilidi ürün içerikleri (marka brief §11).
  - *(faz 2)* Logo, KVKK taslağı ve 16 kardeş site ürünü eklendi; kalan: unvan teyidi (Furkan Bey), KVKK hukuk onayı, GBP, vektör logo.
- [ ] Barındırma kararı (Node çalıştırabilen sunucu: VPS / Plesk Node / Railway vb.) ❓
- [ ] Demo yayını (`SITE_ENV=demo`) → müşteri onayı → DNS geçişi → Search Console + Bing + IndexNow.

## Faz 2 kararları (26.10.2026, Furkan Bey'in talimatları)

- **Panel = generalkilit-web formatı** (tasarım, modüller, 2FA, talepler, ziyaretçiler, SEO kapısı). Ajans standardı oldu: [[02-Websites/_kutuphane/admin-panel-standardi]].
- **Arama motorları ekranı** eklendi (GSC, Bing, Yandex, IndexNow); her kişi kendi sitesinin bağlantılarını buradan kurar: [[02-Websites/_kutuphane/arama-motoru-panelleri]].
- Ürünler kardeş sitelerden (telcom.com.tr, generalkilit.com, sifrelidolapkilidi.com, otelkapikilidi.com.tr, kartlikilit.com.tr) — DND/doorbell, Energy Saver, varlık sensörü, DK111–DK119.
- KVKK generalkilit metninden bu siteye çevrildi; unvan künyeden (teyit bekliyor).
