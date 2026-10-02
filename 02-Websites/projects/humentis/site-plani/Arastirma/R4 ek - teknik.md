---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]"]
---

> [!note] R4 eki · SEO ve görünürlük — ai-marketing-claude `market-technical` alt ajanının tam çıktısı. Ana rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

---
type: denetim-bolumu
client: "Humentis"
slug: humentis
status: taslak
date: 2026-10-02
tags: [humentis, pazarlama-denetimi, teknik-seo, market-technical]
related: ["[[marka-brief]]"]
---

# Humentis (humentis.com.tr): Teknik Pazarlama ve SEO Analizi

> Ajan: `market-technical` (5 paralel ajandan biri) + `market-seo` yöntemi. Kaynaklar: `EVIDENCE.md` (30.09.2026 ölçümleri), `humentis-audit-sayfalar-humentis.json` (`raw` = sunucu HTML'i, `rendered` = JS sonrası DOM, capturedAt 2026-09-30T15:50Z), `an-raw-*.json` / `an-ren-*.json`, main kodu `/home/claude/build/base/humentis`.
> Etiketler: **[CANLI]** = canlı ölçüm (EVIDENCE/JSON), **[KOD]** = repo dosya:satır, **[DOĞRULANAMADI]** = varsayım. PageSpeed/Lighthouse/CrUX ölçülmedi; puan uydurulmadı, performans yalnız dosya boyutlarıyla değerlendirildi.
> Marka kuralları (brief "KESİNLİKLE OLMAYACAK", §4, §7) paketin önerilerinden üstündür. Çakışan paket önerileri "marka kuralı gereği uygulanmadı" diye işaretlendi.
> Not: Bu ortamdan humentis.com.tr'ye doğrudan istek proxy tarafından 403 ile engellendi (02.10.2026); başlık (Cache-Control, sıkıştırma, www/eski host) kontrolleri bu yüzden doğrulanamadı.

## Genel Puan: 4,1/10 · SEO & Discoverability: **41/100**

| Boyut | Ağırlık | Puan | Temel bulgu |
|---|---|---|---|
| Sayfa Yapısı | %25 | 5/10 | JS sonrası her rotada kendi title/description/canonical ve tek H1 var; ama sunucu her adrese aynı 4.404 karakterlik kabuğu (aynı title + canonical `/`) döndürüyor ve hiçbir title'da "Ankara / psikolog" yok. |
| Taranabilirlik | %20 | 3/10 | 18 uzman profiline hiçbir `<a href>` yok ve sitemap'te de yoklar (yetim). Var olmayan adresler 200 dönüyor (soft 404). Sitemap'te 25 URL'nin 8'i kopya/yönlendiren/boş. |
| Performans | %15 | 4/10 | Cloudflare + 172 KB gzip JS makul; ama 727 KB TTF Montserrat, 162 KB TTF Manrope, 611 KB profil fotoğrafı, 546 KB PNG bölüm görseli, hiçbir `<img>`'de width/height yok, LCP adayı portrede `loading="lazy"`. |
| İçerik Mimarisi | %20 | 4/10 | Menü net; ama profiller link değil, 16 makale gövdesi 10 kelimelik yer tutucu, /kriz-destegi ana sayfayı açıyor, 4 grup kopya adres. |
| Schema & İzleme | %20 | 4/10 | Statik Organization/LocalBusiness ham HTML'de (iyi); ama her sayfada 2 ld+json bloğu (Organization kopyası), FAQPage tüm rotalarda, GA4/GTM/dönüşüm yok, onayda pazarlama kategorisi yok. |

Hesap: 5×0,25 + 3×0,20 + 4×0,15 + 4×0,20 + 4×0,20 = 4,05 → **41/100**.

---

## En önemli 5 bulgu (etkiye göre)

1. **Ham HTML boş kabuk; tüm rotalar aynı title/canonical/OG ile 200** [CANLI][KOD]. `raw` içindeki 9 HTML adresin (/, /uzmanlar, /hakkimizda, /iletisim, /bolumlerimiz, /uzmanlar/elif-silav, /pricing, /plans, /price) hepsi `status 200`, 4.404 karakter (4.502 bayt UTF-8), title "Özel Humentis Aile Danışma Merkezi", canonical `https://humentis.com.tr/`, gövde yalnız "Ana içeriğe geç" + `<div id="root">` (`apps/web/index.html:30,40-81`). JS sonrası title/description/canonical rotaya göre değişiyor (`app/pageMeta.ts:280-307`). Google render kuyruğundan sonra kurtarıyor; JS çalıştırmayanlar (WhatsApp/Instagram/Facebook link önizlemeleri, Bing'in bir kısmı, GPTBot/ClaudeBot/PerplexityBot) her uzman linkini ana sayfa başlığı ve `og-default.png` ile görüyor.
2. **18 uzman profili yetim** [CANLI][KOD]. Render edilmiş 6 sayfanın hiçbirinde `/uzmanlar/<slug>` href'i yok (sayım: 0). Kart foto ve isim `<button onClick={openProfile}>` (`ui/patterns/SpecialistDirectoryCard.tsx:25,34`), kurucu kartı `<button onClick={() => navigate(specialistProfilePath(...))}>` (`features/home/components/HomeHero.tsx:148-152`). `public/sitemap.xml` 25 URL, profil yok. Hazır `RouteLink` bileşeni gerçek `<a href>` üretip SPA içinde gezinmeyi koruyor (`ui/primitives/actions.tsx:52-64`).
3. **/kriz-destegi = ana sayfa, index edilebilir ve sitemap'te** [KOD]. `App.tsx:279-280` HomePage render ediyor; `pageMeta.ts:178-182` title "Kriz Desteği — Humentis", description "Acil durumlarda kullanabileceğiniz kriz destek bilgileri.", noIndex yok. Hazır `features/trust/CrisisPage.tsx` rotaya bağlı değil. Kopya içerik + marka §7 ihlali ("kriz hizmeti olmadığı açıkça yazılır, yönlendirme yapılır"): kriz araması yapan kişi randevu CTA'lı ana sayfaya düşer.
4. **Soft 404, kopya adresler ve host sızıntısı** [KOD]. IIS `SpaFallback` dosya olmayan her şeyi `/index.html`'e rewrite ediyor (`scripts/fix-webconfig-https.ps1:31-38`) → durum kodu hep 200; "Sayfa bulunamadı + noindex" yalnız JS'te (`pageMeta.ts:246-251`). Kendini canonical gösteren kopyalar: /icerik = /makaleler = /icerik/makaleler (`App.tsx:262-266`, `pageMeta.ts:115-129`), /merkez = /iletisim (`App.tsx:213`, `pageMeta.ts:90-94`; /hakkimizda /merkez'e linkliyor [CANLI]), /ik = /ik/staj (`App.tsx:221`). Profil verisi gelene kadar `/uzmanlar/<slug>` "Sayfa bulunamadı · noindex, nofollow" alıyor (`App.tsx:134-139` + `pageMeta.ts:194,246`). Ek: canonical `window.location.origin` ile kuruluyor (`pageMeta.ts:280`) ve aynı IIS sitesine `www.humentis.com.tr` ile eski host `dnmhmn.net.verihane.net` de bağlanıyor (`scripts/setup-humentis-com-tr.ps1:3-5,51-52`); web.config'te host-kanonikleştirme kuralı yok → bu host'lar açıksa site kendi host'unu canonical gösteren bir kopya olarak indekslenebilir (host'ların şu an yanıt verip vermediği [DOĞRULANAMADI]).
5. **Ölçüm yok** [KOD]. GA4, GTM, gtag/dataLayer, Ads dönüşümü, Meta Pixel yok. Yalnız birinci taraf ziyaret kaydı (`features/consent/useVisitTracker.ts:20-38`, analytics onayına bağlı; path + referrer) ve Cloudflare Web Analytics beacon'ı [CANLI rendered head]. Onay modeli yalnız `necessary` + `analytics` (`features/consent/consentStorage.ts:4-5`). Randevu/WhatsApp/telefon dönüşümleri hiçbir analitik/reklam aracına gitmiyor; SEO ve Ads getirisi ölçülemiyor.

---

## Dimension Scores ayrıntısı

### 1. Sayfa Yapısı (5/10)

| Sayfa | Title (JS sonrası) | Kar. | Desc. kar. | H1 | Canonical (JS) |
|---|---|---|---|---|---|
| / | Özel Humentis Aile Danışma Merkezi | 34 | 159 | Psikolojik destek için doğru uzmanı bulun. | / |
| /uzmanlar | Uzmanlarımız ve Randevu — Humentis | 34 | 107 | Uzmanlarımız | kendisi |
| /hakkimizda | Hakkımızda — Humentis | 21 | 88 | Özel Humentis Aile Danışma Merkezi | kendisi |
| /bolumlerimiz | Bölümlerimiz — Humentis | 23 | 93 | Bölümlerimiz | kendisi |
| /iletisim | İletişim ve Randevu — Humentis | 30 | 79 | İletişim | kendisi |
| /uzmanlar/elif-silav | Elif Silav · Kurucu Psikolog & Aile Danışmanı — Humentis | 56 | 280 | Elif Silav | kendisi |

Kaynak: `rendered` JSON + `an-ren-*.json`; kod `pageMeta.ts:26-183`. Her sayfada tek H1 (Pass).

- **Title (Needs Work):** Yer/hizmet anahtar kelimesi yok; rakiplerin dördünde de "Ankara Psikolog" / "Ankara Aile Danışmanlığı" var (EVIDENCE §Rakipler). 21-34 karakter, SERP alanı boşa gidiyor.
- **Description (Needs Work):** Ana sayfa "Randevu İçin —" ile açılıyor, Ankara yok (`index.html:9`, `pageMeta.ts:15-16`). /iletisim "şimdi yanınızdayız" (`pageMeta.ts:87`), /merkez ve /klinikler "Şimdi randevu al" (`pageMeta.ts:92,97`) → aciliyet/emir kipi, brief §4/§7 ile çelişiyor. Profil description'ı `summary` tamamı, 300'de kesiliyor (`pageMeta.ts:198,284`) → SERP'te ~155'te kırpılır.
- **Başlık hiyerarşisi (Needs Work):** Ana sayfada dönen uzman kartlarındaki isimler H2 ("Zuhal Alver", "Burcu Kayacan") ve bölüm başlıklarından önce geliyor [CANLI]. /uzmanlar ve /iletisim'de hiç H2 yok.
- **Görseller:** Alt metni eksik içerik görseli yok (betiğin "eksik alt" saydıkları `alt=""` dekoratif logolar). **width/height hiçbir `<img>`'de yok**: ana sayfa 0/10, /uzmanlar 0/22, /bolumlerimiz 0/9 [CANLI] → CLS riski. Dosya adları yanıltıcı: Çift-Aile bölümü `/departments/yetiskin-psikiyatri.png`, Çocuk-Ergen `cocuk-ergen-psikiyatri.png` (`data/institution.ts:245,251`); merkez psikiyatri hizmeti vermiyor (schema: "ilaç tedavisi kapsamında değildir").
- **URL (Pass):** Türkçe, kısa, tireli, küçük harf. Bölüm filtreleri `/uzmanlar?department=...` biçiminde (canonical /uzmanlar olduğu için zararsız).
- **Mobil (Pass):** `viewport` var (`index.html:5`), render 390 px. Çerez perdesi yasal onay penceresi sayılır.

**Önerilen title/description** (aciliyet, "en iyi", "tedavi", sonuç vaadi yok):

| Sayfa | Title | Description |
|---|---|---|
| / | Ankara Psikolog ve Aile Danışma Merkezi \| Özel Humentis (55) | Çankaya'da yetişkin, çocuk-ergen, çift ve aile danışmanlığı. Uzmanlarımızı ve görüşme biçimlerini inceleyin; yüz yüze ya da online randevu talebi gönderin. (155) |
| /uzmanlar | Psikolog ve Aile Danışmanı Kadromuz, Ankara \| Humentis (54) | Humentis bünyesindeki psikolog ve aile danışmanlarının unvanlarını, çalışma alanlarını ve görüşme biçimlerini inceleyin; uygun saat için talep gönderin. (152) |
| /bolumlerimiz | Yetişkin, Çocuk-Ergen, Çift ve Aile Danışmanlığı \| Humentis (59) | Aile ve Sosyal Hizmetler Bakanlığı ruhsatlı merkezimizde yetişkin, çocuk-ergen, çift-aile ve sınav-kariyer danışmanlığı; yüz yüze ve online görüşme. (148) |
| /hakkimizda | Hakkımızda – Ankara Aile Danışma Merkezi \| Humentis (51) | Aynı kurum çatısında çalışan psikolog ve aile danışmanları; kontrol edilmiş uzman bilgileri ve açık randevu süreciyle Çankaya'daki merkezimizi tanıyın. (150) |
| /iletisim | İletişim ve Ulaşım – Çankaya, Ankara \| Humentis (47) | Mustafa Kemal Mah., Çankaya/Ankara. Telefon, WhatsApp ve e-postayla ulaşabilirsiniz. Humentis bir kriz müdahale hizmeti değildir; acil durumda 112. (147) |
| Profil | `{Ad} – {Unvan}, Ankara \| Humentis` | `summary`'nin ilk cümlesi, kelime sınırında ≤155 karakter |

### 2. Taranabilirlik ve İndekslenebilirlik (3/10)

- **robots.txt (Pass)** [CANLI 175 bayt][KOD `public/robots.txt`]: `Allow: /`; Disallow /giris, /admin, /sistem, /uzman/panel, /randevu/; Sitemap satırı var; CSS/JS engellenmiyor.
- **sitemap.xml (Fail)** [CANLI][KOD `public/sitemap.xml`, 25 `<loc>`]: elle yazılmış, `lastmod` yok.
  - Eksik: 18 uzman profili.
  - Çıkmalı: /sss (JS ile `/#sss`'ye yönlenir, `App.tsx:73-84,225`), /kriz-destegi (şimdilik ana sayfa kopyası), /merkez (/iletisim kopyası), /makaleler ve /icerik/makaleler (/icerik kopyası), /ik (/ik/staj kopyası), /duyurular (boş [API]), /icerik/blog (içerik [DOĞRULANAMADI]).
- **Soft 404 (Fail):** Bulgu 4.
- **Yönlendirmeler (Fail):** /ekibimiz, /calisma-alanlari, /klinikler, /atolyeler, /randevularim, /sss yalnız istemci tarafında (`App.tsx:46-84`, `pushState`) → sunucu 301 yok, eski/dış link değeri aktarılmıyor.
- **Host kanonikleştirme (Needs Work):** Bulgu 4. `ForceHttps` var (`fix-webconfig-https.ps1:12-18`) ama www → apex ve eski host → apex 301'i yok.
- **noindex:** Yanlış noindex yok; tek risk profilin yükleme anı (Bulgu 4).
- **AI keşfi:** `/llms.txt` SPA kabuğunu dönüyor [CANLI]. Asıl sorun kabuğun boşluğu; llms.txt ikincil.
- **Hreflang:** TR/EN aynı URL'de localStorage ile (`i18n/LocaleContext.tsx`); EN indekslenmez. Ayrı EN URL açılmadıkça hreflang eklenmemeli (doğru tercih).
- **Search Console:** doğrulama dosyası `public/google713975ecba590d66.html` var; mülk erişimi ve sitemap gönderimi [DOĞRULANAMADI].

### 3. Performans (4/10, yalnız ölçülen boyutlar)

| Varlık | Ölçüm | Sorun | Düzeltme |
|---|---|---|---|
| Ana JS `index-CQ9qytuY.js` | 585 KB / 172 KB gzip [CANLI] | Admin, uzman paneli, BookingPage, Login statik import (`App.tsx:9-30`) | `React.lazy` + `Suspense` ile AdminPage, SpecialistPanelPage, BookingPage, ConfirmationPage, LoginPage, SystemPage ayrı chunk |
| Montserrat-Variable.ttf | 727 KB [CANLI]; repo 744.936 bayt (`brand/fonts/montserrat`) | TTF, subset yok; `tokens.css:27-32` | `@fontsource-variable/montserrat` (latin + latin-ext woff2, ~60-80 KB) ya da bu etiketlerde Manrope |
| Manrope-Variable.ttf | 162 KB [CANLI]; repo 165.420 bayt | TTF (`tokens.css:1-7`) | `@fontsource-variable/manrope` woff2 + `unicode-range` (Source Serif 4 zaten böyle: `tokens.css:9-24`) |
| /specialists/elif-silav.jpg | 611 KB [CANLI] | Ana sayfa hero, /uzmanlar, profil | WebP/AVIF, ~640/960 px, `srcset` |
| /departments/*.png | 546.055 + 306.297 bayt [KOD] | Fotoğraf PNG | WebP (~60-120 KB), dosya adı düzeltmesiyle birlikte |
| Diğer portreler | 57-169 KB JPG [KOD `public/specialists`] | | WebP + `srcset` |
| Portre `loading` | `loading="lazy"` sabit (`ui/patterns/SpecialistPortrait.tsx:18`) | Profil ve hero'da LCP adayı geç yüklenir | `priority` prop'u: profil/hero'da `loading="eager" fetchpriority="high"` |
| width/height | 0 görselde [CANLI] | CLS | `SpecialistPortrait`'e boyut ya da CSS `aspect-ratio` |
| Açılış perdesi | 4.800 ms `PageTransitionOverlay` [KOD] | LCP/FCP etkisi ölçülmedi | **Ekip kararı: kalacak.** Önce PSI/CrUX ölçümü; öneri yok |
| `/specialist-calendar-live.js?v=20260924c` | Canlı ham HTML'de `defer` [CANLI]; repoda hiçbir yerde yok [KOD] | Canlı `index.html` elle yamanmış; `deploy-web-dist-live.ps1:11-15` IIS klasörünü silip dist'i kopyaladığı için bir sonraki deploy bu etiketi kaldırır | Repoya alın (`apps/web/public/` + `index.html`) ya da işlevini React'e taşıyın |
| Önbellek/sıkıştırma | Cloudflare var; `Cache-Control` [DOĞRULANAMADI] | web.config'te `clientCache` yok | `/assets/` için `max-age=31536000, immutable`; `index.html` için `no-cache` |
| `x-powered-by: Express, ARR/3.0, ASP.NET` | [CANLI] | Güvenlik hijyeni | `apps/api/src/index.ts`: `app.disable("x-powered-by")`; web.config `<httpProtocol><customHeaders><remove name="X-Powered-By"/>` |

### 4. İçerik Mimarisi (4/10)

- **Navigasyon (Pass):** 10 menü öğesi, sağda "Randevu al" → /uzmanlar tek tık. Sayfa başına ~17 benzersiz iç sayfa linki (nav + footer) [CANLI]. Telefon ana sayfa/header/hero'da yok, yalnız /iletisim ve footer'da; sabit Ara/WhatsApp barı animasyon + çerez kararından sonra.
- **Profiller link değil:** Bulgu 2.
- **Bölüm sayfaları:** /bolumlerimiz tek sayfa, 169 kelime; "Yaşam temaları" (~24 madde) link değil; bölüm butonları `/uzmanlar?department=...` parametreli adrese gidiyor. Öneri: 4 kalıcı bölüm sayfası (`/bolumlerimiz/yetiskin-danismanligi`, `/cocuk-ergen-danismanligi`, `/cift-aile-evlilik-danismanligi`, `/sinav-kariyer-danismanligi`), her birinde 400-600 kelime, o bölümün uzmanlarına `<a href>`, bölüm SSS'si. "Ankara çift danışmanlığı / aile danışmanlığı / çocuk psikoloğu" niyetleri şu an tek bir 169 kelimelik sayfaya bağlı.
- **Makaleler:** 16 makale gövdesi `PLACEHOLDER` "Bu makale Humentis uzmanları tarafından hazırlanmaktadır. Tam metin yakında yayınlanacaktır." (`data/articlesCatalog.ts:5-6,25`), yazar "Humentis Uzman Ekibi", `type: "article"` + index (`pageMeta.ts:214-224`) → 16 ince sayfa. Tam metin gelene kadar noindex + sitemap dışı. `mesimsel-depresyon` slug yazım hatası [API] indekslenmeden düzeltilmeli.
- **Kriz:** Bulgu 3. `CrisisPage` bağlanıp footer'dan linklenmeli (şu an hiçbir render edilmiş sayfada /kriz-destegi linki yok [CANLI]).
- **Diğer:** Spotify linki `open.spotify.com/search/Humentis` aramasına gidiyor [CANLI]; NotFound metni "sen" hitabında (`features/system/NotFoundPage.tsx`), kurum hitabı "siz" (brief §4).

### 5. Schema & İzleme (4/10): tablolar aşağıda.

---

## SEO Quick Wins (her biri ≤ yarım gün)

1. **Uzman kartlarını gerçek linke çevir:** `SpecialistDirectoryCard.tsx:25,34` ve `HomeHero.tsx:148-159` içindeki `<button>` → `<a href={profileUrl}>` (RouteLink davranışıyla: sol tık `preventDefault` + `navigate`). Görünüm aynı kalır; Google 18 profili keşfeder. (Etki: yüksek)
2. **/kriz-destegi'yi `CrisisPage`'e bağla** (`App.tsx:279-280`), footer'a "Kriz durumunda" linki ekle. (Etki: yüksek, etik)
3. **Title/description'ları güncelle** (`pageMeta.ts:26-183` + `index.html:7-10,13-28`, `og:`/`twitter:` dahil) yukarıdaki tabloya göre; "şimdi yanınızdayız" / "Şimdi randevu al" kaldırılır. Profil description'ı ≤155 kelime sınırında kesilir.
4. **Sitemap'i düzelt** (geçici statik çözüm, kalıcısı aşağıda): 18 profil eklenir; /sss, /kriz-destegi (düzeltilene dek), /merkez, /makaleler, /icerik/makaleler, /ik, /duyurular çıkarılır; Search Console'a gönderilir.
5. **Yer tutucu makaleleri noindex yap:** `pageMeta.ts:218` dalında `article.content === PLACEHOLDER` (ya da `excerpt`ten ayrı bir `isPlaceholder` bayrağı) ise `noIndex: true`.
6. **Profil yüklenirken noindex basma:** `App.tsx`'te `loading` true iken `applyPageMeta` çağrısını atla ya da `resolvePageMeta`'ya `loading` geçip `/uzmanlar/*` için noindex yerine nötr meta döndür.
7. **Canonical origin'i sabitle:** `pageMeta.ts:280` → `origin = SITE_ORIGIN_DEFAULT` (her host'ta canonical humentis.com.tr).

## Technical Issues

| Sorun | Önem | Etki | Düzeltme |
|---|---|---|---|
| Ham HTML boş kabuk; tüm rotalarda aynı title/canonical/OG | Kritik | Sosyal önizlemeler, Bing, AI tarayıcıları yanlış/boş içerik görür; indeks Google render kuyruğuna bağlı | P0 build-time prerender + IIS rewrite (aşağıda) |
| 18 profil yetim (link + sitemap yok) | Kritik | Kişi adı aramalarında görünmeme | Quick win 1 + üretilen sitemap |
| /kriz-destegi = ana sayfa, index | Kritik | Kopya içerik; marka §7 / etik risk | Quick win 2 |
| Soft 404 (her adres 200) | Yüksek | Tarama bütçesi israfı, GSC "Soft 404" | IIS'te bilinmeyen yollar için gerçek 404 (aşağıda) |
| Kopya rotalar self-canonical, yönlendirmeler yalnız JS | Yüksek | Sinyal bölünmesi | IIS 301 kuralları (aşağıda) |
| www / eski host aynı siteye bağlı, canonical `window.location.origin` | Yüksek (host açıksa) | Tüm sitenin ikinci host'ta kopyası | Host 301 kuralı + quick win 7 |
| Profil yüklenirken geçici `noindex, nofollow` | Yüksek | API yavaşsa render anında profil noindex görülebilir | Quick win 6 (prerender'la tamamen kalkar) |
| GA4/dönüşüm yok, onayda marketing yok | Yüksek | SEO/Ads getirisi ölçülemiyor | İzleme planı |
| 2 ld+json bloğu, FAQPage her rotada | Orta | Tekrarlı/görünmeyen içerik işaretlemesi | Schema tekilleştirme |
| 727 KB + 162 KB TTF, 611 KB foto, 852 KB PNG, lazy LCP, width/height yok | Orta | LCP/CLS (ölçülmedi) | Performans tablosu |
| `MedicalBusiness` tipi | Orta | "Tedavi" algısı, düzenleyici risk (brief §7) | Hukuki/klinik incelemeye: önerilen `ProfessionalService` |
| 16 ince makale index'te | Orta | Düşük kalite sinyali | Quick win 5 |
| `specialist-calendar-live.js` canlıda var, repoda yok | Düşük | Sonraki deploy'da sessizce kaybolur | Repoya al |
| `x-powered-by` sızıntısı | Düşük | Güvenlik hijyeni | Kaldır |

---

## Bu stack'e göre somut düzeltmeler

Stack: Vite 8 + React 19 SPA (`apps/web/package.json`), Express API 127.0.0.1:3050, IIS (URL Rewrite + ARR) statik dist'i `C:\sites\psikoloji\iis`'ten sunuyor (`fix-webconfig-https.ps1:52`), önünde Cloudflare. Deploy script'i web.config'i koruyor (`deploy-web-dist-live.ps1:6-9,40-42`), yani web.config değişiklikleri şablona (`fix-webconfig-https.ps1`) ve canlıya ayrıca uygulanmalı.

### P0-a: Build-time prerender + IIS rewrite (1,5-2 gün)
Sunucuya yeni süreç eklemeden, IIS'in statik dosya mantığıyla çalışır.

1. **Prerender betiği** `apps/web/scripts/prerender.mjs` (Playwright zaten devDependency, `@playwright/test 1.62.1`):
   - `vite build` sonrası `vite preview` (4174) başlatılır; `/api` canlı ya da staging API'ye proxy'lenir.
   - Rota listesi: `ROUTE_META` içindeki indekslenebilir yollar + `GET /api/specialists` slug'ları (+ tam metni olan makaleler).
   - Her rota için sayfa açılmadan önce `localStorage`'a çerez kararı yazılır (`consentStorage` anahtarı, `analytics:false`) ve `prefers-reduced-motion: reduce` emüle edilir (`App.tsx:123-129` hızlı yolu → açılış perdesi snapshot'a girmez; ekip kararındaki animasyon gerçek ziyaretçide aynen kalır).
   - `document.title` beklenir, `#root` innerHTML + `<head>` meta/canonical/ld+json alınır, `dist/<yol>/index.html` olarak yazılır (`dist/uzmanlar/elif-silav/index.html`).
   - `package.json`: `"build": "tsc -b && vite build && node scripts/prerender.mjs"`.
   - `main.tsx` `createRoot` kullandığı için istemci DOM'u baştan çizer; hydration uyuşmazlığı riski yok (kısa bir yeniden çizim olur).
2. **IIS web.config** (`fix-webconfig-https.ps1` şablonuna, `SpaFallback`'ten önce):
   ```xml
   <rule name="CanonicalHost" stopProcessing="true">
     <match url="(.*)" />
     <conditions><add input="{HTTP_HOST}" pattern="^humentis\.com\.tr$" negate="true" /></conditions>
     <action type="Redirect" url="https://humentis.com.tr/{R:1}" redirectType="Permanent" />
   </rule>
   <rule name="LegacyAliases" stopProcessing="true">
     <match url="^(.+?)/?$" />
     <conditions><add input="{AliasMap:{R:1}}" pattern="(.+)" /></conditions>
     <action type="Redirect" url="https://humentis.com.tr{C:1}" redirectType="Permanent" appendQueryString="false" />
   </rule>
   <!-- <rewrite> içinde, <rules> dışında; haritada olmayan yol boş döner ve "(.+)" eşleşmez: -->
   <rewriteMaps><rewriteMap name="AliasMap">
     <add key="ekibimiz" value="/uzmanlar" /><add key="calisma-alanlari" value="/bolumlerimiz" />
     <add key="klinikler" value="/iletisim" /><add key="merkez" value="/iletisim" />
     <add key="makaleler" value="/icerik" /><add key="icerik/makaleler" value="/icerik" />
     <add key="ik" value="/ik/staj" /><add key="atolyeler" value="/duyurular" />
     <add key="randevularim" value="/" /><add key="sss" value="/#sss" />
   </rewriteMap></rewriteMaps>
   <rule name="Prerendered" stopProcessing="true">
     <match url="^(.+?)/?$" />
     <conditions><add input="{DOCUMENT_ROOT}/{R:1}/index.html" matchType="IsFile" /></conditions>
     <action type="Rewrite" url="/{R:1}/index.html" />
   </rule>
   ```
   (`CanonicalHost` LetsEncrypt kuralından sonra konmalı ki ACME doğrulaması bozulmasın.)
3. **Gerçek 404:** `SpaFallback`'in yerine yalnız SPA'ya ait ama prerender edilmemiş yollar (`^(giris|admin|sistem|uzman/panel|randevu|eslestirme)(/.*)?$`) `/index.html`'e rewrite edilir; kalan her şey `dist/404.html`'e (prerender betiği NotFound rotasından üretir) yönlenir ve durum kodu 404 olur:
   ```xml
   <httpErrors errorMode="Custom" existingResponse="Replace">
     <remove statusCode="404" /><error statusCode="404" path="/404.html" responseMode="ExecuteURL" />
   </httpErrors>
   ```
   Sonuç: /pricing, /olmayan-sayfa-123 → 404; silinen profil → 404 (bir sonraki build'de klasörü olmaz).
4. **Bilinen sınır:** Yeni uzman eklenince ya da profil değişince yeniden build gerekir. Değişim sıklığı düşükse kabul edilebilir; değilse P0-b.

### P0-b (alternatif/ek): Express "shell" ile meta enjeksiyonu (2-3 gün)
Prerender'ın build'e bağımlılığı sorun olursa: `SpaFallback` → `http://127.0.0.1:3050/__shell/{R:0}` rewrite, `<httpErrors existingResponse="PassThrough" />`; Express `dist/index.html`'i bir kez okur, `ROUTE_META` (`packages/`'a taşınıp web ile paylaşılır) ve DB'den profil verisiyle title/description/canonical/og/robots/JSON-LD enjekte eder; bilinmeyen yol ve olmayan slug için 404 döner. İçerik gövdesi boş kalır ama önizlemeler, canonical, durum kodları ve schema düzelir.

### P0-c: Üretilen sitemap (0,5 gün)
- Prerender betiği aynı rota listesinden `dist/sitemap.xml` yazar; `public/sitemap.xml` silinir. Profiller için `lastmod` = API'deki `updatedAt` (alan yoksa build tarihi değil, hiç yazılmaz; yanlış lastmod hiç olmamasından kötü). `changefreq`/`priority` yazılmaz.
- Dışarıda tutulanlar: alias rotalar, noindex rotalar, yer tutucu makaleler, boş /duyurular.
- Dinamik isteniyorsa Express `GET /sitemap.xml` + IIS `^sitemap\.xml$` → 3050 proxy kuralı.

### P1: Schema tekilleştirme (0,5 gün)
- `index.html:41` statik bloğa `id="humentis-jsonld"` verin: `applyStructuredData` (`structuredData.ts:131`) aynı elemanı bulup içeriğini değiştirir → sayfa başına tek blok.
- `buildSiteStructuredData` (`structuredData.ts:100-105`): FAQPage yalnız ana sayfada (SSS orada görünüyor); diğer rotalarda Organization + WebSite.
- Profilde Person'ı Organization @graph'ına ekleyin (şu an profil sayfasında Organization yalnız statik blokta kalıyor; tekilleştirme sonrası kaybolmasın) + `BreadcrumbList` (Ana sayfa › Uzmanlarımız › {Ad}).
- `sameAs`'ten kendi sitesi çıkarılsın (`structuredData.ts:35`, `clinicWebsiteUrl` = site adresi, `data/institution.ts:216`).
- `telephone`: `+90 552 898 95 45` (E.164) (`data/institution.ts:209`, `index.html`).
- `MedicalBusiness` → hukuki/klinik karar; önerilen `["Organization","LocalBusiness","ProfessionalService"]`.
- Bölüm sayfaları açılınca 4 `Service` düğümü (`provider` → `#organization`, `areaServed` Ankara). Fiyat sitede görünmediği için `offers` yok.
- `Person.hasCredential` yalnız `verification` dolu profillerde (10 profilde boş [API]).

### P1: GA4 + Consent Mode v2 (1 gün)
- `index.html` `<head>` başında (gtag yüklenmeden önce):
  ```html
  <script>
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
    gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
  <script>gtag('js',new Date());gtag('config','G-XXXXXXX',{send_page_view:false});</script>
  ```
- `consentStorage.ts`: `marketing: boolean` eklenir; `CookieBanner` "Analitik" ve "Pazarlama" ayrı onay; kararda `gtag('consent','update',{analytics_storage: a?'granted':'denied', ad_storage: m?..., ad_user_data: m?..., ad_personalization: m?...})` (`humentis:consent` olayı zaten var, `useVisitTracker.ts:36`).
- SPA sayfa görüntüleme: `App.tsx`'teki meta efektinde `gtag('event','page_view',{page_path: path, page_title: document.title})`.
- Olaylar: `randevu_talebi_olusturuldu` (parametre: `uzman_slug`, `gorusme_bicimi`), `iletisim_formu_gonderildi`, `kurumsal_talep_gonderildi`, `whatsapp_tik`, `telefon_tik`, `eslestirme_tamamlandi` (parametresiz).
- **KVKK sınırı (brief §7):** Olaylara bölüm, eşleştirme yanıtları ("Depresif hissetme…", "Cinsel yaşam…"), mesaj, yaş, şehir, ad/telefon **gönderilmez**. Eşleştirme sorularının hiçbiri hiçbir araca gitmez.
- Randevu kaydına `utm_source/medium/campaign` + ilk referrer alanı (şu an kaynak alanı görülmedi [KOD]). GBP web sitesi linkine `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Ads/Meta etiketleri yalnız `marketing` onayıyla.

### P2: Font ve görsel optimizasyonu (1 gün)
- `npm i @fontsource-variable/manrope @fontsource-variable/montserrat`; `tokens.css:1-7,27-32` TTF `@font-face`'leri, Source Serif 4'teki gibi latin + latin-ext woff2 dosyalarına `unicode-range` ile çevrilir; `font-display: swap`. Gövde fontu için `<link rel="preload" as="font" type="font/woff2" crossorigin>` (latin dosyası).
- Görseller: `sharp` ile build adımında (ya da API yükleme anında, `apps/api/src/photos.ts`) 320/640/960 px WebP üretimi; `SpecialistPortrait`'e `srcset`/`sizes`, `width`/`height`, `priority` prop'u.
- `/departments/*.png` → WebP ve doğru adlar (`cift-aile-evlilik.webp`, `cocuk-ergen.webp`), `data/institution.ts:245,251` güncellenir.
- Kod bölme (`React.lazy`) + web.config `clientCache` / Cloudflare cache kuralı (`/assets/*` immutable).
- Sonra ilk PSI/CrUX ölçümü alınır; açılış perdesi kararı bu veriyle ekiple yeniden konuşulabilir (karar verildi; öneri değil).

---

## Tracking Setup

| Araç | Durum | Not |
|---|---|---|
| Google Analytics 4 | ❌ | gtag/dataLayer yok [KOD][CANLI] |
| Google Tag Manager | ❌ | |
| Google Ads dönüşümü | ❌ | Ads'in aktif olduğu yalnız vault notunda [DOĞRULANAMADI] |
| Meta Pixel | ❌ | Pazarlama onay kategorisi olmadan eklenmemeli |
| Cloudflare Web Analytics | ✅ | `static.cloudflareinsights.com/beacon.min.js` (rendered head) [CANLI] |
| Birinci taraf ziyaret kaydı | ✅ | `useVisitTracker` path+query+referrer, analytics onayına bağlı; admin `/api/admin/visits` |
| Search Console | ✅ (muhtemel) | Doğrulama dosyası var; mülk/sitemap [DOĞRULANAMADI] |
| Cookie Consent | ✅ eksik | necessary + analytics; marketing ve Consent Mode v2 yok |

## Schema Markup

| Tip | Var mı | Kanıt | Öneri |
|---|---|---|---|
| Organization/LocalBusiness | ✅ ×2 | Statik `index.html:41-78` + JS `#humentis-jsonld` (`structuredData.ts:33-71`); her sayfada 2 ld+json [CANLI] | Tek blok (P1); E.164 telefon; `sameAs`'ten kendi site |
| MedicalBusiness | ⚠️ | aynı bloklar | Hukuki/klinik karar; `ProfessionalService` önerisi |
| WebSite | ✅ | `index.html:69-75` | SearchAction gereksiz (site içi arama yok) |
| Service | ❌ | | Bölüm sayfalarıyla, `offers`'sız |
| FAQPage | ⚠️ her rotada | `structuredData.ts:103` + `App.tsx` meta efekti | Yalnız ana sayfa; FAQ zengin sonucu 2023'ten beri çoğu siteye gösterilmiyor, beklenti düşük |
| Person (profil) | ✅ yalnız JS | `structuredData.ts:107-127` | Prerender ile ham HTML'e; BreadcrumbList ekle |
| BreadcrumbList | ❌ | | Profil + bölüm sayfaları |
| Article | ❌ | | Tam metin + gerçek yazar gelince |
| Review/AggregateRating | ❌ | | **Marka kuralı gereği uygulanmadı** (brief §7: danışan yorumu önerilmez). Ana sayfadaki "Danışan yorumları" bandının kendisi de §7 ile çelişiyor; içerik/güven ajanına bırakıldı. |

## Content Architecture Findings
- Navigasyon net, dönüşüm sayfası tek tıkta; ancak en değerli 18 sayfa (profiller) gezinme grafiğinde link olarak yok.
- Hizmet niyetli aramalar için ayrı bölüm sayfası yok; /bolumlerimiz 169 kelime ve parametreli /uzmanlar filtrelerine bağlanıyor.
- 16 makale yer tutucu; blog/podcast alt sayfaları içerik açısından [DOĞRULANAMADI]. İç linkleme yalnız nav+footer'dan ibaret, bağlamsal link (makale → bölüm → uzman) yok.
- Kopya rotalar (/merkez, /makaleler, /icerik/makaleler, /ik) ve /kriz-destegi hem sitemap'te hem kısmen iç linklerde (/hakkimizda → /merkez).

## Marka kuralı gereği uygulanmayan paket önerileri
- Review/AggregateRating schema ve yıldızlı zengin sonuç (danışan yorumu yasak).
- "Hemen / şimdi / son randevular" içeren meta açıklamalar ve CTA'lar (aciliyet yasak).
- "İlk seans ücretsiz", "en iyi psikolog" title kalıpları (rakiplerde var; brief §7 yasaklıyor).
- Fiyatlı `Offer` schema (fiyat sitede görünmüyor; görünmeyen içerik işaretlenmez).
- Dönüşüm olaylarına şikâyet/bölüm/eşleştirme yanıtı parametresi (KVKK özel nitelikli veri).

## Ekip kararı olanlar (öncelik listesinde "karar verildi")
- Açılış animasyonu (4.800 ms) kalacak; prerender snapshot'ı reduced-motion yoluyla alınarak SEO'dan ayrıştırıldı.
- Takvimin ay sonu davranışı şimdilik değişmeyecek (teknik SEO kapsamı dışında).

## Doğrulanamayanlar
- PageSpeed/Lighthouse/CrUX, LCP/CLS/INP değerleri (ölçülmedi).
- `Cache-Control`/sıkıştırma başlıkları; www ve `dnmhmn.net.verihane.net` host'larının şu an yanıt verip vermediği (bu ortamdan istek 403).
- Search Console erişimi, gönderilmiş sitemap, indeks kapsamı, sıralamalar.
- Google Ads verileri (175 tık, 524 terim / 177 kişi adı): yalnız vault notlarında, kullanılmadı.
- /icerik/blog ve /icerik/podcastler içerik doluluğu.
