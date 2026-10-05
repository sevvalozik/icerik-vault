---
type: arastirma
client: "Humentis"
slug: humentis
rapor_turu: seo
status: tamamlandi
date: 2026-10-05
kaynak: "Claude Code (Furkan Bey oturumu, 02–05.10.2026); kod: OmerBirol/humentis, branch seo-geo-ileri-seviye (özel repo), docs/seo/"
tags: [rapor, seo, geo, backlink, humentis, uygulama]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[00-seo-geo-standardi]]", "[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]", "[[seo-dongusu]]", "[[humentis-proje-ozeti]]"]
---

# Humentis — SEO, GEO ve backlink uygulaması (2–5 Ekim 2026)

> Marka kuralı: `00-Musteriler/humentis/marka-brief.md` §4 ve §7 uygulandı ("en iyi", "ücretsiz", "tedavi", "hasta", "garanti", "hemen", "indirim", "7/24" yok; "terapi" başlıkta hukuk görüşüne bağlı). Bu çalışmadan çıkan genel standart: [[00-seo-geo-standardi]].

## Özet

- **Sonuç:** Site, botlara ana sayfanın kopyasını gösteren bir SPA'dan her sayfası kendi başlığı, canonical'ı, gövdesi ve schema'sıyla sunulan bir siteye geçti. 03.10.2026 15:51'den beri canlıda.
- **En önemli 3 bulgu:** (1) Ham HTML'de tüm sayfalar ana sayfanın kopyasıydı, canonical hep `/` → Google'da yalnız 15 eski sayfa var, 17 uzman profilinin hiçbiri dizinde değil. (2) Uzmanların dış profilleri (kişisel siteler, dizinler, 9 uzmanın kendi Google kartı) Humentis'e bağlanmıyor. (3) Cloudflare GPTBot ve ClaudeBot'u engelliyor.
- **İlk yapılacak 3 iş (müşteri tarafı):** Search Console'da 17 profil + hizmet sayfaları için "Dizine eklenmesini iste"; uzmanların kendi Google kartlarında "Web sitesi" alanını Humentis profiline çevirmek; Cloudflare'de AI botlarını açmak.

## Yöntem ve veri kaynağı

- **İncelenen:** humentis.com.tr ham HTML'i (curl, Googlebot kullanıcı ajanıyla), tarayıcı görünümü, Google `site:` ve uzman adı aramaları (05.10.2026), Google önerileri (34 tohum, 230 öneri), dış SEO denetim raporları (2 tur), 18 uzmanın dış mesleki profilleri.
- **Kaynak çerçeve:** Nicholas Dulait (6 skill), Hasan Yaşar ("SEO Öğreniyorum" 27 gün), Neil Agarwal ([[seo-dongusu]]).
- **Ölçülemeyen:** Search Console verisi (hesap erişimi yok), gerçek Googlebot görünümü (Search Console canlı testi gerekli).

## Yapılanlar (faz sırasıyla, hepsi canlıda)

**Teknik**
- Ortak SEO paketi: başlık, açıklama, canonical, robots ve JSON-LD tek fonksiyondan; React ve sunucu aynı kaynağı kullanıyor. Node, IIS'in `index.html` şablonunu her istekte dolduruyor.
- Ana sayfa, hakkımızda, hizmet sayfaları, rehber, yazılar ve 17 uzman profilinin ham HTML'i React görünümüyle aynı; eşitlik testi her derlemede denetliyor.
- Gerçek 404 (canonical'sız), `www` → çıplak alan adı ve `http` → `https` 301, eski adresler 301 (`/kariyer`, `/staj`, eski uzman adresleri).
- Boş içerik (yer tutucu yazılar, boş duyurular, podcast, içi boş profil) noindex; içerik gelince kendiliğinden açılıyor.
- Dinamik `sitemap.xml` (42 URL, gerçek `lastmod`, 17 profil fotoğrafı `image:image`), `robots.txt`, `security.txt`.
- Başlıklar ≤60 karakter; SSS cevapları DOM'da; kart başlıkları h3; footer'da "Hizmetler" menüsü; her para sayfasına ≥5 sayfadan bağlamsal iç link.

**Schema ve varlık**
- Tek `@graph`: LocalBusiness + ProfessionalService (adres "2159. Sk.", `hasMap` ve `sameAs` = Google İşletme Profili, `hasOfferCatalog`, 17 uzmana `employee`), WebSite, sayfa türleri, BreadcrumbList, Service, Article, FAQPage.
- Uzman profilleri: Person (`sameAs` yalnız kimliği kesin dış profiller, `alternateName`, `hasOccupation`, `alumniOf`, `knowsAbout` yöntemler dahil) + ProfilePage (`dateModified` gerçek).
- E-E-A-T: "Son güncelleme", `reviewedBy`/`lastReviewed` (alan doluysa), "Kaynaklar" → `citation`.

**GEO**
- Dinamik `llms.txt` ve `llms-full.txt` (resmi ad, hizmetler, rehberler, her uzmanın bölüm, eğitim, çalışma alanları ve diğer mesleki profilleri).
- Her uzman profilinde 6 soruluk uzmana özel SSS ("… hangi alanlarda çalışıyor?", "… online görüşme yapılabilir mi?", "… nerede görüşme yapıyor?" vb.).
- "Ankara'da Psikolog Nasıl Seçilir? 2026 Rehberi" (sıralama yapmayan, ölçüt veren seçim rehberi).
- 42 adres IndexNow'a bildirildi (05.10.2026, 200).

**İçerik ve anahtar kelime**
- Para kalıpları ve "tek niyet, tek sayfa" haritası; Suggest kaynaklı yeni SSS'ler; yazı biçimi (`##`, liste, kalın, iç link) sunucu ve React'te ortak; 4 yazı taslağı uzman onayı bekliyor.
- Bir uzmanın yöntem adları tam yazıldı (ör. "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)").

**Yayın güvenliği**
- Diff kapısı (`npm run seo:gate`), SEO envanteri, eşitlik ve SEO testleri, yedekli yayın betiği (inspect/backup/web/verify/rollback).
- İlk web yayınında macOS `._*` dosyaları yüzünden ~3–4 dk 403 oldu; betik "üzerine kopyala + önce doğrula" şeklinde düzeltildi. Bir API yeniden başlatmasında birkaç saniyelik 502 (yavaş açılış) → sağlık ucunu döngüyle bekleme kuralı.

## Google durumu (05.10.2026)

- `site:humentis.com.tr` → 15 sayfa, hepsi eski taramadan (eski adres yazımıyla). Profillerin hiçbiri dizinde değil. Teknik engel yok (200, `index, follow`, doğru canonical, sitemap'te). Sebep: yeniden tarama yapılmadı; IndexNow Google'a gitmiyor.
- Search Console doğrulaması mevcut (DNS TXT + HTML dosyası); mülkün hangi Google hesabında olduğu bulunmalı.
- Uzman adı aramalarında sağ kartta 9 uzmanın **kendi** İşletme kartı çıkıyor; çoğunun "Web sitesi" alanı doktortakvimi/doktorsitesi'ne gidiyor. Kartlarda üç farklı posta kodu ve bir yanlış sokak numarası var. Ayrıntılı liste özel repoda (`docs/seo/uzman-ad-aramasi.md`).
- Bir uzmanın adı aynı adlı bir akademisyenle çakışıyor (hedef sorgu "<ad> psikolog"); bir uzmanın adında toplam 5 sonuç var (en hızlı çıkacak ad).

## Öneriler ve açık işler (sorumluyla)

| # | İş | Sorumlu |
|---|---|---|
| 1 | Search Console: sitemap gönder; 17 profil + hizmet sayfaları + rehber için "Dizine eklenmesini iste" (iki güne bölünür) | Search Console hesabı olan kişi |
| 2 | Uzmanların kendi Google kartları: "Web sitesi" → `humentis.com.tr/uzmanlar/<ad-soyad>`; adres ve posta kodu kurumla aynı | Her uzman |
| 3 | Uzmanların dizin profilleri ve kişisel siteleri: adres Humentis, Humentis profiline link | Her uzman (liste özel repoda) |
| 4 | Cloudflare: AI botlarını engellemeyi kapat, Crawler Hints aç | Cloudflare hesabı olan kişi |
| 5 | Bing Webmaster Tools: Search Console'dan içe aktar | Aynı kişi |
| 6 | Yönetim panelinden profil tamamlama: 1 boş profil (noindex, adıyla aramada çıkamaz); yayındaki 17 profilden doğrulama kaydı eksik 9, mesleki deneyim eksik 14, özeti 20 kelimenin altında 10, çalışma alanı listesi 21–87 madde olan 7 (→ en fazla 12) | Operasyon + uzmanlar |
| 7 | Google Ads hedef adresleri `www`'suz | Ads ekibi |
| 8 | Karar bekleyenler: ücret bilgisi, "terapi" kelimesi, posta kodu (06530 / 06510), bina adı, içerik uzman kontrolü | Kurucular / hukuk |
| 9 | Kod: branch GitHub'a gönderilip PR açılacak (onay bekliyor) | Geliştirici |

## Dersler (standarda işlendi)

- SPA'da en büyük SEO açığı içerik değil ham HTML'dir; önce o kapanır ([[01-teknik-seo]]).
- "İsmimle aratınca çıkmıyor" şikâyetinin ilk sebebi genelde dizine girmemedir; ikinci sebebi dış profillerin kuruma bağlanmamasıdır. En hızlı kazanç kişinin kendi Google kartının "Web sitesi" alanı ([[04-kisi-adi-aramalari]]).
- Kod ve veritabanı ayrı yerde adres tutuyorsa ikisi birlikte düzeltilir ([[05-yerel-seo-nap-isletme-profili]]).
- Canlı sunucu repodan farklı olabilir; yayından önce fark alınır ([[08-yayin-guvenligi]]).

## Marka kuralı gereği uygulanmayanlar

- "En iyi psikolog Ankara 2026" tarzı sayfa (Dulait'nin GEO önerisi) → yerine sıralamasız seçim rehberi.
- Link satın alma ("iz bırakmadan") → yok; ücretli yerleşim olursa `rel="sponsored"`.
- Günde 1 sayfa → haftada en fazla 1 sayfa, uzman kontrolüyle.
- Başlıklarda "terapi" → hukuk görüşü gelene kadar yok.
