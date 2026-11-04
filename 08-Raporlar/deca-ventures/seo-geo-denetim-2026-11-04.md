---
type: arastirma
client: "Deca Ventures"
slug: deca-ventures
rapor_turu: seo
status: draft
date: 2026-11-04
kaynak: "Claude (seo-geo skill, vault standardı 00–09); canlı site/Search Console erişimi yok"
tags: [rapor, seo, geo, deca-girisim, yayin-oncesi]
related: ["[[00-Musteriler/deca-ventures/marka-brief]]", "[[02-Websites/_kutuphane/seo-geo/00-seo-geo-standardi]]", "[[08-Raporlar/humentis/seo-geo-uygulama-2026-10-05]]"]
---

# Deca Girişim — SEO + GEO (yayın öncesi uygulama)

> Marka kuralı: `00-Musteriler/deca-ventures/marka-brief.md` §4 ve §7 standarttan üstündür. Bu çalışmada: "en iyi / Türkiye'nin 1 numarası" gibi süperlatif yok, getiri/rakam iddiası yok, sitedeki gibi Pre-Seed/Seed ifadesi kullanılmadı, portföy şirketleri için schema/öneri üretilmedi (§7: her biri için ayrı izin).

## Özet

- **Alan adı (4 Kas 2026, müşteri):** **decagirisim.com**. Tüm canonical/sitemap/llms/IndexNow bu alanla üretildi. **Eski decaventure.com'dan yeni siteye sayfa sayfa 301 şart** (ad değişikliği; eski sitenin değerini taşır).
- **Durum:** Yeni site (TR + EN, 5 sayfa) **yayına hazır hâle getirildi**: sayfa başına başlık/açıklama/canonical, TR↔EN `hreflang`, Open Graph, tek `@graph` JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt` + `llms-full.txt`, 404 sayfası, IndexNow anahtar dosyası. Sayfaların görünür metni değişmedi (önce/sonra karşılaştırma eşit).
- **Önemli bulgular:** (1) Eski head'de her sayfada yalnızca "X — Deca Girişim" başlığı ve açıklama vardı; canonical, hreflang, schema, OG yoktu. (2) Haberler sayfası örnek içerik (kurgusal yazar/tarih, tek tek yazı sayfası yok): **noindex** yapıldı. (3) Canlı alan adı ve adres/e-posta teyitleri bekliyor.
- **İlk yapılacak 3 iş (yayın günü):** ① alan adını teyit et (`seo.py` → `SITE`) ve dosyaları yayına al; ② sunucuda `.html` → temiz URL 301'leri, olmayan adreste gerçek 404, `www`/`http` 301; ③ Search Console + Bing + IndexNow bildirimi.

## Yöntem ve veri kaynağı

- **İncelendi:** `/home/claude/deca-site` (statik kaynak: `build.py`, `build_en.py`), üretilen 5 TR + 5 EN HTML (ham HTML = görünen sayfa, JS gerekmiyor).
- **Ölçülemedi / doğrulanamadı:** Canlı site ve `site:` sonucu, Search Console/Bing durumu, `curl` ile durum kodları ve AI bot erişimi (bu oturumdan canlı siteye erişim yok, eski decaventure.com WebFetch izin listesinde değil), Rich Results Test (canlı URL ister). Aşağıdaki "canlıda doğrula" maddeleri yayından sonra yapılacak.

## Bulgular (önce → sonra)

| # | Bulgu | Kanıt | Etki |
|---|---|---|---|
| 1 | Başlıklar şablon ("Ana sayfa — Deca Girişim"), hizmet/konum/niyet yok | eski `<title>` çıktısı | Yüksek |
| 2 | canonical, hreflang, OG, schema yok; TR ve EN sayfalar birbirini bilmiyor | eski head | Yüksek |
| 3 | Haberler: örnek yazılar, yazar adları kurgusal, yazı sayfası yok | `haberler.html` (230 kelime, 4 kart) | Orta |
| 4 | robots/sitemap/llms/404/OG görseli yok | dosya listesi | Yüksek |
| 5 | Sayfalar ince (181–255 kelime), SSS yok | kelime sayımı | Orta |
| 6 | Başlık sırası: h1 → h3 (model, portföy), footer h4 | başlık listesi | Düşük |
| 7 | Adres tek yazımla tutarlı (footer, iletişim); telefon yok, posta kodu yok | grep | — |
| 8 | Kökte eski `deca-girisim.html` (6 KB) artığı var | dizin | Düşük (yayına alınmamalı) |

## Yapılanlar

**Tek karar noktası: `seo.py`** (başlık ≤60, açıklama ≤155 karakter testle zorlanır; alan adı, URL biçimi, `lastmod`, indekslenme kuralı tek yerde). `build.py` (TR) ve `build_en.py` (EN) aynı fonksiyondan besleniyor.

| Sayfa | TR başlık | Robots |
|---|---|---|
| Ana sayfa | Deca Girişim \| Girişim Stüdyosu, Ankara ve İstanbul | index |
| Modelimiz | Modelimiz: Fikirden Çıkışa 6 Aşama \| Deca Girişim | index |
| Portföy | Portföy: Yatırım Yaptığımız Girişimler \| Deca Girişim | index |
| İletişim | İletişim ve Başvuru \| Deca Girişim | index |
| Haberler | Haberler \| Deca Girişim | **noindex,follow** (gerçek yazı gelince `INDEX` bayrağı açılır, sitemap'e kendiliğinden girer) |

- **URL biçimi:** `/`, `/model`, `/portfoy`, `/iletisim`; EN: `/en/`, `/en/model` … (`CLEAN=False` yaparsan `.html`). Sitemap, canonical ve llms.txt aynı tablodan.
- **JSON-LD (tek `@graph`):** `Organization` (ad Deca Girişim, `alternateName` Deca Ventures, adres, LinkedIn `sameAs`, logo), `WebSite`, sayfa türü (`WebPage`/`CollectionPage`/`ContactPage`), `BreadcrumbList`; `dateModified` = sitemap `lastmod` = `UPDATED`. **Konmayanlar:** telefon/e-posta (teyitsiz), `aggregateRating`, portföy şirketleri, FAQPage (sitede görünür SSS yok).
- **GEO:** `llms.txt` ve `llms-full.txt` (kurum özeti, adres, 6 aşama, sitedeki bilgilerden kısa SSS, portföy listesi, İngilizce özet). Her sayfanın açıklaması soruyu ilk cümlede cevaplıyor. `robots.txt` AI arama botlarını engellemiyor.
- **Sitemap:** yalnız indekslenebilir 8 URL (4 TR + 4 EN), her birinde TR/EN/x-default alternates, ana sayfada görsel.
- **404.html:** noindex, canonical/schema yok. **IndexNow anahtarı:** `a40767e17f525e4e07f3bf8c468c346a.txt` (kök dizinde, içinde anahtarın kendisi).
- **Diff kapısı:** önce/sonra görünür metin karşılaştırması 10 sayfada **eşit** (yalnız head değişti); kayıp yok. JSON-LD'ler `json.loads` ile geçerli.

## "Bitti" kontrol listesi

**Teknik**
- [x] Ham HTML'de sayfaya özel title, description, canonical, tek H1, gövde var (statik çıktı)
- [x] Başlıklar ≤60, açıklamalar ≤155; marka ve şehir geçiyor; yasak kelime yok (test)
- [ ] Olmayan adres gerçek **404** döner, 404'te canonical yok → sayfa hazır; **sunucu yapılandırması yayında** ⏳ (geliştirici)
- [ ] `www` → çıplak alan, `http` → `https`, `/x.html` → `/x` 301 ⏳ (geliştirici/Cloudflare)
- [x] İnce/örnek sayfa (Haberler) noindex ve sitemap dışında; açma bayrağı hazır
- [x] `sitemap.xml` yalnız indekslenebilir URL, gerçek `lastmod`, hreflang alternates, görsel
- [x] `robots.txt` + sitemap satırı
- [ ] SSS cevapları DOM'da → **sitede SSS yok** (tasarım sadeliği; öneri aşağıda)
- [ ] İç link eşiği → 5 sayfalık sitede para sayfası kavramı yok; menü + footer + CTA'lar her sayfayı bağlıyor, yetim sayfa yok
- [x] Eşitlik testi → statik HTML (React/SSR yok), uygulanmaz

**Schema ve GEO**
- [x] Tek `@graph`: Organization, WebSite, sayfa türü, BreadcrumbList
- [ ] `hasMap`/`sameAs` İşletme Profili → profil henüz yok ⏳ (müşteri)
- [ ] Rich Results Test + validator.schema.org → canlı URL gerekir ⏳ (yayın sonrası, 5 dk)
- [x] `llms.txt` ve `llms-full.txt` (statik; içerik değişince `build_seo_files.py` ile yenilenir)
- [ ] AI botları (`curl -A GPTBot …` → 200) → canlıda doğrula ⏳; Cloudflare "Block AI bots" kapalı olmalı
- [x] İlk iki cümle soruyu cevaplıyor; `dateModified` gerçek (`UPDATED`)

**Yerel ve dış**
- [x] NAP: site (footer, iletişim), schema ve llms.txt'te adres **aynı yazım** (telefon yok, posta kodu ❓)
- [ ] Google İşletme Profili / Bing Places ⏳ (müşteri)
- [ ] Backlink/atıf planı ⏳ (aşağıda)

**Yayın ve ölçüm**
- [x] Diff kapısı geçti, kayıp yok
- [ ] Yedek + doğrulama komutları + geri dönüş yolu ⏳ (yayın günü)
- [ ] Search Console Domain mülkü, sitemap gönderimi, ana sayfa + model + portföy + iletişim için "Dizine eklenmesini iste" ⏳
- [ ] Bing Webmaster (Search Console'dan içe aktar) + IndexNow ping ⏳
- [ ] 1 hafta sonra `site:` + marka adı ("Deca Girişim", "Deca Ventures") kontrolü ⏳

## Yayın günü komutları (canlıdan sonra)

```bash
SITE=https://decagirisim.com
UA="Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
for p in / /model /portfoy /iletisim /en/ /en/model; do echo "== $p"; curl -s -A "$UA" "$SITE$p" | grep -oE '<title>[^<]*</title>|<link rel="canonical"[^>]*>|<meta name="robots"[^>]*>|<h1[^>]*>[^<]*'; done
curl -s -o /dev/null -w "404 testi: %{http_code}\n" "$SITE/olmayan-sayfa-123"
curl -sI "https://www.${SITE#https://}/" | grep -iE "^HTTP|^location"; curl -sI "http://${SITE#https://}/" | grep -iE "^HTTP|^location"
for b in GPTBot/1.2 OAI-SearchBot/1.0 ClaudeBot/1.0 Claude-SearchBot/1.0 PerplexityBot/1.0; do printf "%s " $b; curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 (compatible; $b)" $SITE/llms.txt; done
curl -s -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json; charset=utf-8' \
  -d '{"host":"decagirisim.com","key":"a40767e17f525e4e07f3bf8c468c346a","keyLocation":"https://decagirisim.com/a40767e17f525e4e07f3bf8c468c346a.txt","urlList":["https://decagirisim.com/","https://decagirisim.com/model","https://decagirisim.com/portfoy","https://decagirisim.com/iletisim","https://decagirisim.com/en/","https://decagirisim.com/en/model","https://decagirisim.com/en/portfoy","https://decagirisim.com/en/iletisim"]}'
```

## Site dışı işler (kimde)

| İş | Kim | Not |
|---|---|---|
| Alan adı teyidi (`decagirisim.com` yeni alan mı) | Müşteri (İbrahim Bey) / Şevval | `seo.py` → `SITE`, sonra `python3 build.py && python3 build_en.py && python3 build_seo_files.py` |
| Eski sitedeki URL'ler → yeni URL 301 haritası | Geliştirici | eski sitede /Model gibi adresler olabilir; eski adres listesi gerekli ❓ |
| Search Console Domain mülkü (DNS TXT), Bing, IndexNow ping | Şevval + DNS sahibi | önce `dig +short TXT decaventure.com` ile mevcut doğrulama var mı bak |
| Google İşletme Profili + Bing Places (adres tek yazım) | Müşteri | fiziksel ofis var (Çankaya); kategori: girişim sermayesi / danışmanlık ❓ |
| LinkedIn şirket sayfası adı/URL'si "Deca Girişim" olarak güncelle, web sitesi alanı yeni site | Müşteri | `sameAs` ile aynı sayfa (`/company/decaventures/` teyit) |
| Ad değişikliği duyurusu: "Deca Ventures artık Deca Girişim" (LinkedIn, Instagram, basın) | Şevval + müşteri | eski adla aramalarda yeni kurum bağlansın diye schema'da `alternateName` var |
| Dış atıf: portföy şirketlerinin kendi sitelerinden "Deca Girişim portföyü" bağlantısı | Portföy şirketleri | önce izin (brief §7); satın alınmış link yok |
| Instagram/LinkedIn profillerinde web sitesi alanı | Şevval | bio bağlantısı yeni site |

## Öneriler (öncelik sırasıyla)

1. **Yayın öncesi (bugün):** alan adı + temiz URL yönlendirmeleri + 404'ün gerçek 404 dönmesi + `www`/`https` 301'leri.
2. **Yayından hemen sonra:** Search Console, Bing, IndexNow; canlı doğrulama komutları.
3. **İçerik (haftalık en fazla 1 sayfa, ince sayfa kuralı):** Haberler'e *gerçek* ilk yazı geldiğinde `seo.py` → `INDEX['*']['haberler']=1` ve yazı başına ayrı URL + `Article` schema. Önerilen ilk iki konu: "Venture studio nedir, klasik VC'den farkı ne?" ve "Girişim stüdyosu ile hızlandırıcı arasındaki fark" (para sorguları; "en iyi" ifadesi kullanılmaz). Pre-Seed/Seed ifadesi sitede kullanılmıyor, kullanıcı aramalarında geçse de kopyada bırakma kararı korunur.
4. **Görünür SSS (kısa):** Modelimiz sayfasının altına 4–5 soru ("Deca Girişim nedir?", "Nasıl başvurulur?", "İlk görüşmeye ne zaman dönülür?") + `FAQPage` schema. Bu, GEO'da en yüksek getirili ek; tasarım sadeliği için müşteri/Şevval kararı ❓.
5. **Başlık sırası düzeltmesi (düşük):** model/portföy kart başlıklarını h2 yap (CSS seçicileri birlikte güncellenir); footer başlıkları h4 → p/h2.
6. **Favicon / uygulama ikonu:** henüz karar yok (logo notunda ❓); tarayıcı `/favicon.ico` isteyip 404 alır. İkon kararı sonrası eklenir.
7. **Aylık AI görünürlük testi:** ayın ilk pazartesi, "Deca Girişim nedir/nerede?", "Deca Ventures yeni adı nedir?", "Ankara girişim stüdyosu" soruları → `08-Raporlar/deca-ventures/ai-gorunurluk-YYYY-AA.md`.

## Gerçekçi beklenti

- Kod/teknik taraf bugün tamam. Google'da yeni başlıkların ve TR/EN eşleşmesinin görünmesi dizine eklendikten sonra **2–8 hafta**; marka adı aramaları ("Deca Girişim") ilk günlerde değil, kurum adı dizine girince oturur. "Deca Ventures" eski adıyla aramalarda eski site bir süre ön planda kalabilir.
- Zayıf/yeni içerikli 4 sayfalık siteyle rekabetçi kelimelerde ("girişim sermayesi", "venture studio") ilk sayfa beklenmemeli; otorite dış atıflardan gelir (LinkedIn, portföy siteleri, basın, dizinler).
- Haberler gerçek içerikle açılmadan indekslenmeyecek (bilinçli).

## Müşteriye / ekibe açık sorular

- [ ] Canlı alan adı: `decagirisim.com`? (brief: tek resmi alan; ad değişince değişti mi?)
- [ ] Hukuki ünvan: footer "Deca Girişim A.Ş." (müşteri isteği) mı, brief'teki "Deca İleri Teknolojiler A.Ş." mi? (`legalName` şu an Deca Girişim A.Ş.)
- [ ] Posta kodu, telefon, İstanbul ofis adresi; `ventures@` ve `investors@` adresleri doğru ve aktif mi?
- [ ] Eski sitenin (ASP.NET Razor) URL listesi: hangi adresler 301 olacak?
- [ ] Portföy şirketleri isim/logo izni (brief §7): yazılı onay var mı?
- [ ] 20+ / 50+ / 8+ ve "4 hafta karar süreci" teyidi (sitede var; llms.txt'ye bilerek **konmadı**).

## Razor'a taşıma notu

Gerçek site ASP.NET Razor (decaventure.com). Statik çıktıdan taşırken: (1) her sayfanın `<!--seo-->…<!--/seo-->` bloğunu `_Layout.cshtml` head'ine sayfa başına model/ViewData ile bas (başlık, açıklama, canonical, robots, hreflang, OG, JSON-LD hepsi bu blokta; değerler `seo.py` tablosunda); (2) `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, IndexNow dosyası ve `assets/*.png` wwwroot köküne; (3) rotalar `seo.py`'deki `PATH` ile aynı olmalı (`/model`, `/en/model` …), `.html` istekleri bu adreslere 301; (4) 404 görünümü `404.html` içeriği, HTTP durumu gerçek 404.

## Dosyalar (kod vault'ta değil; kaynak: `/home/claude/deca-site`)

`seo.py` · `build.py` · `build_en.py` · `build_seo_files.py` · `robots.txt` · `sitemap.xml` · `llms.txt` · `llms-full.txt` · `404.html` · `a40767e17f525e4e07f3bf8c468c346a.txt` · `assets/og-deca.png` (1200×630) · `assets/logo-deca-girisim.png` (600×600). **Yayına alınmayacak:** `deca-girisim.html` (eski artık), `README.md`, `*.py`.
