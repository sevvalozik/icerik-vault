---
type: arastirma
client: "any4"
slug: any4
rapor_turu: seo
status: draft
date: 2026-11-02
kaynak: "Claude (Şevval oturumu, 02.11.2026), /seo-geo standardı; yayındaki site https://any4labs.com tarayıcıdan ölçüldü, kod: fsumbul/any4-web (sevval/duzenlemeler)"
tags: [rapor, seo, geo, any4, yayin-oncesi]
related: ["[[00-Musteriler/any4/marka-brief]]", "[[00-seo-geo-standardi]]", "[[05-Kod-Projeleri/any4/any4-web-proje-ozeti]]", "[[02-Websites/projects/any4/any4-web-sitesi]]"]
---

# any4 — SEO + GEO denetimi ve düzeltmeler (2 Kasım 2026)

> Marka kuralı: `00-Musteriler/any4/marka-brief.md` §4 ve §7 uygulandı. "En iyi", abartılı vaat yok; işler "konsept" olarak işaretli; süreler "sektör ortalaması" diye yazılı.

## Özet

- **Sonuç:** Site ilk günden SEO/GEO temeliyle kuruldu ve aynı gün (02.11.2026) yayına alındı. Denetimde kod tarafında 5 eksik çıktı, beşi de düzeltildi; sunucuya bir sonraki pakette gidecek. Dizine ekleme henüz başlamadı (`site:any4labs.com` sonuç vermiyor, beklenen durum).
- **En önemli 3 bulgu:** (1) Başlıklar 60, açıklamalar 155 karakteri aşıyordu, Google kesecekti. (2) `llms-full.txt` ve sitemap'te güncel `lastmod` yoktu. (3) Search Console, Bing ve IndexNow kurulmamış; site Google'a hiç bildirilmedi.
- **İlk yapılacak 3 iş:** Düzeltme paketini sunucuya kurmak (Şevval, RDP) → Search Console'da Domain mülkü + sitemap (Furkan Bey'in Google hesabı) → IndexNow bildirimi ve Bing'e içe aktarma.

## Yöntem ve veri kaynağı

- **İncelenen:** https://any4labs.com ham HTML'i ve yanıt başlıkları (tarayıcıdan `fetch`, 02.11.2026), yerel derleme (`index.html`, `en/index.html`, `brand/`, `aydinlatma-metni/`, `en/privacy/`), `sitemap.xml`, `robots.txt`, `llms.txt`, JSON-LD.
- **Ölçülemeyen:** AI botlarının kullanıcı ajanıyla erişim (`curl -A`): bu oturumdan siteye curl atılamıyor, Şevval'in Mac'inden çalıştırılacak (aşağıda). Search Console verisi yok (mülk yok). Sunucuda Cloudflare yok, IIS doğrudan yanıt veriyor; bot engeli beklenmiyor.

## Bulgular

| # | Bulgu | Kanıt | Etki | Durum |
|---|---|---|---|---|
| 1 | TR başlık 68, EN 58 karakter; TR açıklama 167, EN 162 | `<title>` ve meta description uzunluk ölçümü | Orta | ✅ TR 52 / EN 45 karakter; açıklamalar 145 / 149 |
| 2 | Sitemap `lastmod` 2026-10-17 (yayın 2026-11-02) | `sitemap.xml` | Düşük | ✅ 2026-11-02 |
| 3 | `llms-full.txt` yok (404) | `fetch('/llms-full.txt')` → 404 | Orta (GEO) | ✅ Eklendi: hizmetler, süreç, neden any4, konsept işler, TR + EN; `llms.txt`'den bağlı |
| 4 | WebPage düğümünde `datePublished` / `dateModified` yok | JSON-LD | Düşük | ✅ 2026-11-02 |
| 5 | Statik dosyalar sıkıştırılmadan gidiyor, HSTS yok | Yanıt başlıkları: `content-encoding` boş, `strict-transport-security` boş | Düşük | ✅ `web.config`: statik sıkıştırma, HSTS 1 yıl (alt alan adları hariç) |
| 6 | IndexNow anahtarı yok | — | Orta (Bing/ChatGPT) | ✅ Anahtar dosyası köke eklendi; bildirim yayından sonra |
| 7 | Search Console / Bing Webmaster mülkü yok; site hiç bildirilmedi | `site:any4labs.com` boş | Yüksek | ⏳ Furkan Bey'in hesabıyla |
| 8 | Kurumda `sameAs`, `legalName`, Google İşletme Profili yok | JSON-LD `Organization` | Orta | ⏳ Unvan ve sosyal hesaplar Furkan Bey'den bekleniyor |
| 9 | Kurum türü `Organization` (LocalBusiness değil) | JSON-LD | — | Bilinçli: adres ve telefon yok, uzaktan çalışan stüdyo. Adres gelirse `ProfessionalService`'e geçilebilir |
| 10 | Aydınlatma metni taslak hâliyle yayında | `/aydinlatma-metni/` sarı boşluklar | Yüksek (yasal) | ✅ Unvan değişikliği olmadığı için şirket bilgisi yazılmadan tamamlandı (veri sorumlusu "any4" + e-posta); taslak uyarısı kaldırıldı. Unvan netleşince eklenecek; hukukçu kontrolü önerilir |

## "Bitti" kontrol listesi (02.11.2026 durumu)

**Teknik**
- [x] Her URL'nin ham HTML'inde kendine ait `<title>`, açıklama, canonical, tek H1 ve gövde var (statik site; ana sayfa 662 kelime TR, 772 EN)
- [x] Başlıklar ≤60, açıklamalar ≤155 (düzeltme paketiyle); marka geçiyor. Şehir yok: uzaktan çalışan stüdyo, adres yok
- [x] Olmayan adres 404, 404 sayfasında canonical yok, `noindex`
- [x] `www` → çıplak alan adı ve `http` → `https` 301, tek adım (sunucu duman testi + tarayıcıdan doğrulandı)
- [x] İnce sayfalar `noindex` ve sitemap dışında (aydınlatma metni, 404)
- [x] `sitemap.xml` yalnız 200 dönen, indekslenebilir 3 URL; `lastmod` güncel; OG görselleri `image:image`
- [x] `robots.txt` sitemap satırı var; panel/API/giriş sayfası yok
- [x] Başlık sırası mantıklı (bölümler h2, kartlar ve akordiyon h3). Sitede görünür SSS yok; SSS `llms.txt`'de
- [x] İç link: tek sayfalık site; header ve footer bölümlere bağlı. Para sayfası ana sayfa (yetim sayfa yok)
- [—] React eşitlik testi: uygulanmaz (saf HTML, React yok)

**Schema ve GEO**
- [x] JSON-LD tek `@graph`: Organization, WebSite, WebPage, HowTo; marka kitinde WebPage + BreadcrumbList. Sitede SSS yok → FAQPage yok
- [ ] `sameAs` ve `hasMap`: sosyal hesap ve İşletme Profili yok (Furkan Bey)
- [ ] Rich Results Test ve validator.schema.org: yayından sonra çalıştırılacak
- [x] `llms.txt` ve `llms-full.txt` var. Statik sitede "dinamik" üretim yok; ikisi de sayfa metninden üretiliyor, metin değişince yeniden üretilmeli
- [ ] AI botları `curl -A` ile 200: Şevval'in Mac'inden doğrulanacak (komut aşağıda)
- [x] İlk iki cümle soruyu cevaplıyor (hero açıklaması "any4 bir dijital ürün stüdyosu…"); `dateModified` gerçek tarih

**Yerel ve dış**
- [—] NAP: adres ve telefon yok, yalnız e-posta. Adres verilirse sitede, schema'da ve İşletme Profili'nde aynı yazılacak
- [—] Ekip dış profilleri: sitede ekip sayfası yok
- [ ] Backlink ve atıf listesi: yayından sonra (aşağıda öneriler)

**Yayın ve ölçüm**
- [x] Diff kapısı: başlık, açıklama, schema ve dosya listesi değişiklikleri bu raporda; kayıp yok
- [x] Yedek ve geri dönüş: kod GitHub'da (`sevval/duzenlemeler`, PR #2); sunucuda `kur.ps1` eski paketle yeniden çalıştırılarak geri dönülür
- [ ] Search Console Domain mülkü, sitemap gönderimi, "Dizine eklenmesini iste"
- [ ] Bing Webmaster (Search Console'dan içe aktarma) ve IndexNow bildirimi
- [ ] 1 hafta sonra `site:any4labs.com` ve "any4" marka araması

## Yapılanlar (kod; sunucuya bir sonraki paketle)

- `frag-tr/en.json` → başlık ve açıklama kısaltıldı (TR "any4 | Mobil Uygulama Tasarım ve Geliştirme Stüdyosu", EN "any4 | Mobile App Design & Development Studio"); WebPage'e `datePublished`/`dateModified`.
- `sitemap.xml` `lastmod` 2026-11-02.
- `llms-full.txt` (yeni) ve `llms.txt`'ye bağlantısı.
- IndexNow anahtar dosyası (`44cadbab0e3297d4401744408820d92e.txt`, kökte).
- `iis/web.config`: statik sıkıştırma, HSTS (`max-age=31536000`, alt alan adları hariç). `kur.ps1` duman testine `llms.txt`, `llms-full.txt`, `sitemap.xml` eklendi.

## Yapılacaklar (sorumlu)

| İş | Kimde | Not |
|---|---|---|
| Düzeltme paketini sunucuya kurmak | Şevval | RDP, `kur.ps1`; aydınlatma metni gelirse aynı pakette |
| AI bot erişim testi | Şevval (Mac Terminal) | `for b in GPTBot/1.2 OAI-SearchBot/1.0 ClaudeBot/1.0 Claude-SearchBot/1.0 PerplexityBot/1.0; do printf "%s " $b; curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 (compatible; $b)" https://any4labs.com/llms.txt; done` → hepsi 200 olmalı |
| IndexNow bildirimi | Şevval (Mac Terminal, kurulumdan sonra) | `curl -s -o /dev/null -w "%{http_code}\n" "https://api.indexnow.org/indexnow?url=https://any4labs.com/&key=44cadbab0e3297d4401744408820d92e"` |
| Search Console Domain mülkü + sitemap + "Dizine eklenmesini iste" (/, /en/) | Furkan Bey (Google hesabı) | Domain mülkü DNS TXT kaydı ister; DNS'i yöneten kişi ekler |
| Bing Webmaster: Search Console'dan içe aktarma | Furkan Bey | ChatGPT araması kısmen Bing'den beslenir |
| Rich Results Test, validator.schema.org | Şevval / Claude | Yayından sonra her sayfa türünden bir örnek |
| `legalName`, `sameAs` (LinkedIn, Instagram vb.) | Furkan Bey → Claude | Hesaplar açılınca schema ve `llms.txt`'ye |
| Google İşletme Profili | Furkan Bey | Adres göstermeden "hizmet bölgesi" işletmesi olarak açılabilir |
| 1 hafta sonra `site:` ve "any4" araması | Şevval | Sonuç bu rapora eklenir |

## Backlink ve atıf için ilk öneriler

- Ekibin kendi LinkedIn profillerinde "Çalıştığı yer: any4" ve site bağlantısı.
- Türkiye'deki ajans/stüdyo dizinleri (Clutch, DesignRush, GoodFirms gibi) — yalnız ücretsiz profil, doğru bilgiyle. Ücretli yerleşim yok.
- İlk gerçek müşteri işi yayınlandığında vaka çalışması + müşterinin sitesinden "geliştirici" atfı.
- Link satın alma ve sahte yorum yok.

## Gerçekçi beklenti

- Yeni alan adı, sıfır otorite: "any4" marka aramasında dizine eklendikten sonra 1–3 hafta içinde çıkması beklenir. "mobil uygulama geliştirme" gibi rekabetçi kelimelerde site tek başına üst sıralara çıkmaz; otorite dış atıflarla gelir.
- Bir sayfa değiştikten sonra ölçmeden önce yaklaşık 60 gün beklenir.

## Marka kuralı gereği uygulanmayanlar

- "En iyi + yıl" sayfası ve iddialı karşılaştırma: brief §4 abartılı vaat yasağı.
- Konsept işler için `CreativeWork`/vaka schema'sı: gerçek müşteri işi gibi okunmaması için eklenmedi (§7).

## Ek — Furkan Bey'in SEO + GEO raporu (2 Kasım 2026) ve uygulananlar

Furkan Bey ayrıca bir analiz raporu gönderdi (puanlar: teknik 9, AI erişimi 10, yapısal veri 6, performans 7, sayfa içi 4, içerik 2, E-E-A-T 2, otorite 0). Bot erişimini (GPTBot, ClaudeBot, PerplexityBot, Googlebot hepsi 200) o rapor doğruladı. Ondan gelen ve aynı gün uygulanan maddeler (sunucuya `any4-yayin-paketi-3.zip` ile):

- Başlık anahtar kelimeyle: TR "Mobil Uygulama Geliştirme · iOS, Android, Flutter | any4" (56), EN "Mobile App Development · iOS, Android, Flutter | any4" (53); açıklamalar ≤155.
- **Görünen başlık H1'in kendisi** (önceki sr-only H1 + aria-hidden satırlar kaldırıldı; tasarım aynı). Hero açıklamasına "mobil uygulama geliştirme".
- Vaka penceresindeki Ada/Rota/Asistan h2'leri kaldırıldı (`role="heading"`), başlık tekrarı yok.
- **Sık sorulanlar** bölümü (7 soru, TR/EN) + `FAQPage` şeması; `llms-full.txt`'ye de eklendi. "yapay zeka" (şapkasız) yazımı soruda geçiyor. MVP süresi süreçle tutarlı hâle getirildi (9–22 hafta; MVP ~2–3 ay).
- Görseller WebP (`<picture>`, JPEG yedekli), işlerde `srcset` + `width/height`; şeridin ikinci kopyası hep `lazy`. Fotoğraf yükü ~1,7 MB → ~0,5 MB (WebP).
- `/index.html` ve `/en/index.html` → 301 `/`, `/en/`; `favicon.ico`; CSS/JS/font önbelleği 1 yıl `immutable`, fotoğraflar 7 gün.

Bilinçli olarak yapılmayan / sonraya kalan:
- `x-default` TR'de kaldı (Türkiye pazarı öncelikli).
- 30/90 günlük içerik planı (hizmet sayfaları, /hakkimizda/, /mobil-uygulama-maliyeti/, rehberler, dizin kayıtları): gerçek fiyat aralığı, ekip ve unvan bilgisi Furkan Bey'den gelince.
- E-posta: sunucuya mail sunucusu kurulmadı (yeni IP'den giden posta spama düşer, paylaşılan sunucuda bakım yükü). Gmail tabanlı çözüm (Google Workspace / Zoho / yönlendirme) Şevval'de; MX + SPF + DKIM + DMARC kayıtları seçimden sonra.

## Güncelleme — 3 Kasım 2026

**Kurulum ve bildirim (kanıt):**
- Paket 15 sunucuya kuruldu; `kur.ps1 -Kontrol` temiz, duman testi 17/17 (ana sayfa başlığı ve SSS, yönlendirmeler, 404, `llms.txt`, `llms-full.txt`, `sitemap.xml`).
- IndexNow: `https://any4labs.com/` → 202, `/en/` → 200.
- Önceki "Düzeltme paketini sunucuya kurmak" ve "IndexNow bildirimi" maddeleri tamam.

**Google sonucu için (Furkan Bey'in ekran görüntüsü, alt bağlantılar):** `<link rel="icon" href="/favicon.ico" sizes="48x48">` eklendi; WebSite şemasına `alternateName` ["any4labs", "any4labs.com"]. Site adı, favicon ve alt bağlantılar Google'ın tarama sonrası kararıdır; zorlanamaz, Search Console'dan yeniden tarama istenebilir.

**İçerik değişiklikleri:** SSS 7 → 5 soru (FAQPage şeması da 5); "Native mi Flutter mı" ve "yapay zekâ eklenebilir mi" çıkarıldı. Süreç bölümündeki "toplam 9–22 hafta" satırı kalktı. `sitemap.xml` lastmod, `llms-full.txt` ve şema `dateModified` 2026-11-03. `llms.txt`'de çıkarılan "Native or cross-platform?" satırı hâlâ duruyor (sonraki pakette temizlenebilir).

**Hâlâ açık (Furkan Bey):** Search Console Domain mülkü (DNS TXT), sitemap gönderimi, "/" ve "/en/" için dizine ekleme isteği, Bing Webmaster içe aktarma, mail kararı (MX/SPF/DKIM/DMARC), `legalName` ve sosyal hesaplar (`sameAs`), Google İşletme Profili.
**Bir hafta sonra (Şevval):** `any4` ve `site:any4labs.com` aramalarına bakıp sonucu bu rapora eklemek.

