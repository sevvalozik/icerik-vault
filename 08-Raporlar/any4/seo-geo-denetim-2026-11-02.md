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
| 10 | Aydınlatma metni taslak hâliyle yayında | `/aydinlatma-metni/` sarı boşluklar | Yüksek (yasal) | ⏳ `noindex`; unvan/adres/MERSİS bekleniyor |

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
