---
type: kutuphane
tags: [seo, schema, json-ld, varlik-seo, e-e-a-t, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[04-kisi-adi-aramalari]]", "[[05-yerel-seo-nap-isletme-profili]]"]
---

# Schema ve varlık (entity) SEO

Üst not: [[00-seo-geo-standardi]]

Schema sıralamayı tek başına yükseltmez (Yaşar). İşe yaradığı yer: Google'ın ve AI motorlarının **kim, nerede, ne iş yapıyor, kimlerle bağlı** sorularını tek varlıkta birleştirmesi. Kural: **yalnız sayfada görünen ve doğrulanmış bilgi.**

## Yapı: tek `@graph`

Her sayfada tek `<script type="application/ld+json">` ve içinde `@graph` dizisi. Düğümler `@id` ile birbirine bağlanır (`https://site/#organization`, `https://site/uzmanlar/ad#person`). Sayfaya özel düğümler ortak düğümlere referans verir; aynı kurum her sayfada yeniden tanımlanmaz, aynı `@id` kullanılır.

| Düğüm | Nerede | Zorunlu alanlar |
|---|---|---|
| Kurum (`LocalBusiness` + uygun alt tür, ör. `ProfessionalService`, `MedicalBusiness`, `LegalService`, `Store`) | Her sayfa | `name`, `legalName`, `url`, `logo`, `image`, `telephone`, `address` (PostalAddress, sitedeki yazımın aynısı), `geo`, `hasMap` (İşletme Profili CID linki), `sameAs` (İşletme Profili, resmi sosyal hesaplar), `areaServed`, `hasOfferCatalog` (hizmetler), `employee` (indekslenen kişi sayfalarının `@id`'leri), `founder` |
| `WebSite` | Her sayfa | `name`, `url`, `publisher` → kurum, `inLanguage` |
| `WebPage` / `AboutPage` / `ContactPage` / `CollectionPage` | Sayfa türüne göre | `url`, `name`, `isPartOf` → WebSite, `about`, `dateModified` (gerçek), `breadcrumb` |
| `BreadcrumbList` | Kök dışı her sayfa | Görünür breadcrumb ile aynı adımlar |
| `Service` | Hizmet sayfası | `name`, `provider` → kurum, `areaServed`, `serviceType`; fiyat yalnız sitede yazıyorsa |
| `Article` / `BlogPosting` | Rehber ve yazı | `headline`, `author` → Person, `datePublished`, `dateModified`, `image`, `publisher` |
| `FAQPage` | Görünür SSS olan sayfa | Sorular ve cevaplar **birebir** görünen metin; cevaptaki iç linkler düz metne çevrilir |
| `ProfilePage` + `Person` | Ekip/uzman profili | Aşağıda |

## Kişi (Person) düğümü

```json
{
  "@type": "Person",
  "@id": "https://site/uzmanlar/ad-soyad#person",
  "name": "Ad Soyad",
  "alternateName": ["Dış platformlarda kullanılan ad (ör. evlilik soyadı)"],
  "jobTitle": "Klinik Psikolog",
  "hasOccupation": { "@type": "Occupation", "name": "Klinik Psikolog", "occupationLocation": { "@type": "City", "name": "Ankara" } },
  "worksFor": { "@id": "https://site/#organization" },
  "alumniOf": [{ "@type": "CollegeOrUniversity", "name": "X Üniversitesi" }],
  "knowsAbout": ["çalışma alanları", "kullandığı yöntemler"],
  "image": "https://site/foto.jpg",
  "url": "https://site/uzmanlar/ad-soyad",
  "mainEntityOfPage": "https://site/uzmanlar/ad-soyad",
  "sameAs": ["kimliği kesin doğrulanmış mesleki profiller"]
}
```

`ProfilePage` düğümü: `mainEntity` → Person, `dateModified` = kayıttaki `updatedAt`, `dateCreated` biliniyorsa.

### `sameAs` kuralı (önemli)

- Yalnız **"aynı kişi: kesin"** çıkan mesleki profiller: kişinin kendi sitesi, randevu dizinleri (doktortakvimi, doktorsitesi vb.), mesleki pazar yerleri, kendi YouTube kanalı, akademik profil.
- Konmayanlar: kişisel sosyal medya (kişi istemedikçe), başka kliniklerin ekip sayfaları, aynı adlı başka kişiler, kimliği belirsiz kayıtlar.
- Kimlik kontrolü: aynı unvan + aynı üniversite + aynı şehir/adres + aynı fotoğraf. İkisi tutmuyorsa eklenmez.
- Kaynak tek dosyada tutulur (ör. `specialistIdentity.ts`: slug → `sameAs`, `alternateNames`); kişi ayrılınca oradan silinir.

## E-E-A-T sinyalleri (özellikle sağlık, hukuk, finans)

- Sayfada görünür **yazar** ve **kontrol eden uzman**: `author`, `reviewedBy`, `lastReviewed`. Alan boşsa iddia basılmaz.
- **Kaynaklar** bölümü → `citation`. Hayali uzman ve uydurma kaynak yok.
- "Son güncelleme" satırı = `dateModified` = sitemap `lastmod`; üçü aynı veriden gelir.
- Kişi profilinde doğrulama bilgisi varsa ("Bilgileri kurum tarafından kontrol edildi. Son kontrol: tarih") görünür yazılır.

## Doğrulama

- Google Rich Results Test (her sayfa türünden bir örnek) ve validator.schema.org.
- Testte: her sayfada tek JSON-LD, `@graph` içinde beklenen türler, 404'te schema yok, FAQ metni görünür metinle aynı.
- Yasak: görünmeyen yorum/puan (`aggregateRating`), uydurma fiyat, sahte `sameAs`.
