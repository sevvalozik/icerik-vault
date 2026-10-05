---
type: kutuphane
tags: [seo, yerel-seo, nap, google-isletme-profili, haritalar, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[04-kisi-adi-aramalari]]", "[[06-backlink-ve-atif]]"]
---

# Yerel SEO: NAP ve Google İşletme Profili

Üst not: [[00-seo-geo-standardi]]

Fiziksel adresi olan her işletmede (klinik, merkez, mağaza, servis, şube) "<hizmet> <şehir>" aramalarının çoğu harita paketinde kazanılır. Harita paketi ve AI asistanları aynı soruyu sorar: **bu işletmenin adı, adresi ve telefonu her yerde aynı mı?**

## 1. Tek NAP yazımı (önce karar)

- Resmi ad, adres ve telefon **tek bir yazımla** belirlenir ve müşteriye onaylatılır: sokak mı cadde mi ("2159. Sk." ≠ "2159 Cad."), bina adı yazılacak mı, posta kodu hangisi, sabit hat mı mobil mi.
- Bu yazım tek kaynakta tutulur (`site.ts` gibi). Footer, iletişim sayfası, schema (`PostalAddress`), `llms.txt` ve veritabanındaki konum kaydı buradan beslenir. Veritabanında ayrı adres kaydı varsa o da güncellenir (Humentis'te kod düzelip veritabanı eski kalmıştı).
- Karar bekleyen alan raporda "❓ doğrulanacak" olarak kalır; uydurulmaz.

## 2. Google İşletme Profili (kurum kartı)

| Alan | Kural |
|---|---|
| Ad | Gerçek tabela adı; anahtar kelime eklenmez (Google yönergesi) |
| Kategori | Birincil = ana hizmet; ikincil kategoriler gerçek hizmetler |
| Adres, telefon | §1'deki yazımın aynısı |
| Web sitesi | Ana sayfa, UTM'li (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) |
| Randevu bağlantısı | Sitedeki randevu sayfası (dizin değil) |
| Hizmetler | Sitedeki hizmet sayfalarıyla aynı adlar |
| Çalışma saatleri | Teyitli; sitede ve schema'da (`openingHoursSpecification`) aynı |
| Fotoğraf | Gerçek mekân ve ekip; düzenli |
| Yorum | Gerçek müşterilerden, baskısız, sektör kurallarına uygun istenir; her yoruma kısa cevap |

Sitede: kurum schema'sına `hasMap` = `https://maps.google.com/?cid=<CID>` ve `sameAs` içine aynı link. CID, Haritalar'daki "Paylaş" linkinden ya da sayfa kaynağından alınır.

## 3. Ekip üyelerinin bireysel kartları

Psikolog, doktor, avukat gibi mesleklerde ekip üyelerinin **kendi** İşletme kartları olabilir (Humentis'te 17 uzmanın 9'unda vardı). Kontrol listesi:
- Kart adresi kurum adresiyle **harfi harfine** aynı mı? (Humentis'te bir kartta sokak numarası yanlış, kartlarda üç farklı posta kodu vardı.)
- "Web sitesi" düğmesi nereye gidiyor? Dizine gidiyorsa → kurum sitesindeki kişi profili. Ana sayfaya gidiyorsa → kişi profili.
- Kişinin kurumdan bağımsız başka bir muayenehanesi varsa o kart kalır; kurumda da çalışıyorsa randevu bağlantısı kurum profiline verilebilir.
Ayrıntı: [[04-kisi-adi-aramalari]].

## 4. Diğer harita ve dizinler

| Platform | Neden |
|---|---|
| Bing Places | İşletme Profili'nden içe aktarılır; ChatGPT ve Copilot Bing verisi kullanır |
| Apple Business Connect | Apple Haritalar, Siri |
| Yandex Business | Türkiye'de harita sonuçlarında görünüyor |
| Sektör dizinleri (doktortakvimi, doktorsitesi, Armut vb.) | Kurum profili + her ekip üyesinin profili; adres ve web sitesi alanları |
| Üretici/sertifika dizinleri | Ör. test cihazı üreticisinin "merkezler" sayfası |

## 5. NAP denetim tablosu

Her işte doldurulur, `08-Raporlar/<slug>/` altındaki rapora eklenir:

| Kaynak | Ad | Adres | Telefon | Web sitesi alanı | Sorun | Kim düzeltir |
|---|---|---|---|---|---|---|
| Site (footer, iletişim, schema) | | | | — | | Geliştirici |
| Google İşletme Profili | | | | | | İşletme sahibi |
| Bing / Apple / Yandex | | | | | | İşletme sahibi |
| Dizin X | | | | | | Profil sahibi |

Tipik sorunlar: eski adres (taşınma öncesi), farklı bina adı, 0850 çağrı merkezi numarası, kurum adının kısaltılmış/eski hâli, başka bir kurumun adresi, posta kodu farkı.
