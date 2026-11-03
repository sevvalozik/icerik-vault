---
type: kod-projesi
client: "any4"
slug: any4
status: live
date: 2026-11-02
repo: "https://github.com/fsumbul/any4-web (dal: sevval/duzenlemeler)"
tags: [kod-projesi, website, statik, html-css-js, motion, any4]
related: ["[[00-Musteriler/any4/marka-brief]]", "[[02-Websites/projects/any4/any4-web-sitesi]]"]
---

# any4 — Kurumsal web sitesi (kod projesi özeti)

> Kod vault'ta değil. Repo: `github.com/fsumbul/any4-web`. Yerel klasör: `~/any4-web` (Şevval'in Mac'i). Marka: [[00-Musteriler/any4/marka-brief]].

## Durum (19 Ekim 2026)

- Furkan Bey'in `main` dalı ilk sürüm (eski adıyla Verihane'den dönüşen sayfa). Tüm düzenlemeler ayrı dalda: **`sevval/duzenlemeler`**. `main`'e 27 commit önde, hepsi GitHub'a pushlandı. Son commit `f3323cd`: yeni logo.
- Merge kararı Furkan Bey'de. Fotoğraflar ve yazı tipleri repoda, dış bağlantı yok; dal olduğu gibi açılınca yerelde de birebir görünür.
- Yayında değil. Alan adı: **any4labs.com** (19 Ekim 2026'da kesinleşti).

## Yayın (2 Kasım 2026) — https://any4labs.com

| | |
|---|---|
| Sunucu | 94.73.180.208 · Windows Server · IIS (paylaşılan; DECA, verihane.info vb. de burada) |
| IIS sitesi | `any4labs.com` — kendi uygulama havuzu (.NET yok), klasör `C:\inetpub\any4labs.com` |
| Adresler | any4labs.com + www (A kaydı → 94.73.180.208). http ve www, 301 ile `https://any4labs.com`'a (web.config, URL Rewrite) |
| SSL | Let's Encrypt (win-acme, `C:\wacs`), iletişim e-postası fsumbul@gmail.com, SNI. İlk sertifika 31.01.2027'ye kadar; yenileme 27.12.2026'dan sonra otomatik |
| Yenileme bağlaması | win-acme yeni sertifikayı siteye bağlamıyor (DECA'daki gibi) → zamanlanmış görev "any4labs.com sertifika baglama" her gün 05:15 `C:\inetpub\_any4-araclar\sertifika-bagla.ps1` çalıştırır, kayıt `sertifika-bagla.log` |
| Kurulum yolu | Repo `iis/`: `web.config`, `kur.ps1` (`-Kontrol` / kurulum / `-Https`), `sertifika-bagla.ps1`, `yayinla.sh`. Şevval'in Mac'inde SSH ayarı yok; paket (`bash iis/yayinla.sh paket`) RDP (Windows App) ile sunucuya kopyalanıp Yönetici PowerShell'de çalıştırıldı |

**Güncelleme:** son commit'ten paket → sunucuya kopyala → `kur.ps1` (klasör `/MIR` ile eşitlenir, kendi duman testini yapar). Yayın dalı şimdilik `sevval/duzenlemeler`; `main`'e alınması Furkan Bey'de.

Kurulumda karşılaşılanlar:
- RDP'de zip'i sürükle-bırak / kopyala-yapıştır pencereyi dondurdu; ikinci denemede kopyalandı. Sağlam yol: Windows App → Düzenle → Klasörler ile Mac klasörünü yönlendirmek.
- win-acme çıktısında kurulum adımı yok ("Store with CertificateStore"), https bağlamalarını betik ekledi.

## Güncelleme (3 Kasım 2026) — paket 15 yayında

- Google sonucu için: `favicon.ico` bağlantısı, WebSite `alternateName` (any4labs, any4labs.com). Site adı ve favicon Google'ın tarama sonrası kararıdır, zorlanamaz.
- SEO/GEO tarihleri (sitemap `lastmod`, `llms-full.txt` son güncelleme, şema `dateModified`) 2026-11-03. `mk_llmsfull.py` tarihi 2 Kasım'a sıfırlıyor; çalıştırınca elle düzeltmek gerekir.
- Vaka panelleri, canlı iş kartları, hizmet sahneleri, "Neden any4" sadeleştirmesi, bölüm sırası, silinen 2 SSS (aşağıda Sayfa yapısı).
- Şevval'in ilkesi bugün netleşti: emoji ve gösterişli hareket fazla olmasın, klasik ve ölçülü kalsın; nokta/animasyon motifi tekrarlanmasın; mümkün olan yerde az yazı.
- Sunucuya kurulum: `any4-yayin-paketi-15.zip`, `kur.ps1 -Kontrol` temiz, duman testi 17/17. IndexNow: TR `/` 202, EN `/en/` 200. Kod GitHub'da (`sevval/duzenlemeler`, PR #2 Furkan Bey'in onayında).
- `llms.txt` içinde hâlâ "Native or cross-platform?" satırı ve SSS yanıtında "9–22 hafta" var; site metninden kalktığı için istenirse temizlenir.
- Sahnelerde duran ölü kod/CSS (`.why__*`, `TV`, `WV`) temizlenebilir.

## Yığın

- Saf HTML + CSS + JavaScript. Framework, derleme adımı ve `npm install` yok.
- Tek CSS (`assets/css/main.css`, ~935 satır) ve tek ertelenmiş JS (`assets/js/main.js`, ~560 satır, kütüphanesiz).
- Sayfalar:
  - `index.html` (TR)
  - `en/index.html` (EN, hreflang)
  - `brand/index.html` (marka kiti)
  - `404.html`
- Yazı tipleri kendi sunucuda (`assets/fonts/`): Newsreader + Geist (woff2). Eski Schibsted Grotesk dosyaları kullanılmıyor ama hâlâ repoda.
- Barındırma: Netlify / Cloudflare Pages / GitHub Pages. `_headers` güvenlik başlıklarını ve CSP'yi taşıyor (inline script hash'li, `img-src 'self' data:`).
- CSS ve JS bağlantılarına önbellek kırıcı `?v=<md5>` ekleniyor.

## Yerelde açmak

```bash
cd ~/any4-web && python3 -m http.server 4173   # http://localhost:4173
```

## Sayfa yapısı

**Bölüm sırası (3 Kasım 2026):** Hero → Seçili işler → Süreç → Ne yapıyoruz → Neden any4 → Sık sorulanlar → İletişim. Menü: İşler, Süreç, Hizmetler, İletişim. Tablo sırası eski; güncel sıra bu satırdadır.

| Bölüm | Ne yapıyor |
|---|---|
| Açılış (intro) | Oturumda bir kez: "any" yükselir, petrol top sağdan yuvarlanıp yanında durur, salınıp oturur, logo header'a uçar (~3,7 sn). Tıklama/tuş ile atlanır |
| Header | Büyük logo, ortada menü, TR / EN, "Proje başlat". Aşağı kaydırınca gizlenir, yukarıda geri gelir. Menü tıklaması başlığı tam hizalar |
| Hero | Kenetlenen iki satır "Her gün açılan / uygulamalar." + kısa açıklama + buton. Altında sola akan fotoğraf şeridi: kaydırınca hızlanır, sürüklenebilir |
| Seçili işler | Ada, Rota, Asistan (konsept). Fotoğraflar yavaşça kayar; üstteki telefon ekranları canlı (dolu, hafifçe süzülür). Tıklayınca detay paneli: tek cümlelik hikâye, kendiliğinden oynayan mini demo (halka / rota / sohbet; dokununca durur), tek satır teknik not |
| Ne yapıyoruz | Akordiyon (hover/tıklama). Her panelde kısa cümle + araç çipleri + koyu, kendiliğinden oynayan üç sahne (mobil, tasarım, yapay zekâ). Kapalı panelde animasyon durur |
| Süreç | Dört sütun (Keşif, Tasarım, Geliştirme, Lansman) + süreler; üstteki çizgi görününce dolar. "Toplam 9–22 hafta" satırı kaldırıldı (3 Kasım) |
| Neden any4 | Üç küçük yuvarlak köşeli yazı kutusu (yalnız metin, görsel/animasyon yok): Aynı masada. · Her hafta yeni sürüm. · Kod sizin. Önceki denemeler (kelime kelime dolan cümle, görselli kartlar, hikâye bandı) beğenilmediği için sadeleştirildi |
| Sık sorulanlar | 5 soru, akordiyon + FAQPage şeması. Çıkarılanlar (3 Kasım): "Native mi Flutter mı?", "Uygulamaya yapay zekâ eklenir mi?" |
| İletişim | Petrol zemin, imleci izleyen yumuşak ışık, çizgisiz bilgi satırları, alt çizgili form, akan e-posta şeridi |
| Footer | Aynı petrol ton; büyük logo, top döngüsü (gel, 4,5 sn bekle, çık), üç kısa sütun |

## Teknik notlar

- **Tek rAF döngüsü.** Bütün sürekli hareketler tek `requestAnimationFrame` döngüsünde, `updaters` dizisiyle çalışır.
- **Görünme.** `revealIO` IntersectionObserver öğeye `.is-in` sınıfı ekler.
- **Logo geometrisi.** viewBox `3 40 214 77`; top `cx 186.5, cy 72.8, r 27.2`; 4'ün ölçeği 1.2089.
  - Header `<use>` etiketine `x/y/width/height` verilmeli, yoksa logo kırpılır.
  - Logo dosyalarını yeniden üreten betik, Claude oturumundaki `relogo.py`. Repoda yok; mantığı README'de.
- **Açılış zaman çizelgesi.** `main.js` içindeki `T` nesnesi: roll 300–2000, fly 2850–3650, end 3700 ms.
- **Footer top döngüsü.** IN 1500 / SETTLE 700 / REST 4500 / OUT 1300 / GAP 400 ms.
- **Hareket azaltma.** `prefers-reduced-motion` açıkken açılış ve tüm hareketler kapanır.
- **SEO / GEO:**
  - JSON-LD: Organization, WebSite, WebPage, HowTo, FAQPage
  - `sitemap.xml` (hreflang), `robots.txt` (yapay zekâ botlarına izinli), `llms.txt`
  - OG görselleri TR/EN, 1200×630
- **Form.** `data-endpoint` boşken e-posta uygulamasını açar. Formspree ya da backend bağlanınca doğrudan gönderir.

## Yayın öncesi kontrol (19 Ekim 2026)

20 maddelik "yayına hazır mı" listesine göre bakıldı. Var: özel 404 (yeni tasarımla yenilendi), meta title/description, ilk ekranda CTA, favicon, robots.txt, sitemap.xml, OG görselleri, mobil uyum, iletişim bilgileri, optimize görseller. Eklendi: işlerdeki fotoğraflara alt metin, form hata mesajları (alanın altında, sitenin fontuyla), "Gönderiliyor…" durumu, aydınlatma metni taslağı (TR/EN, `noindex`). Bilerek yok: sabit mobil CTA (lüks hissini bozar), çerez banner'ı (site çerez kullanmıyor). Bekleyen: analytics kararı (çerezsiz araç seçilirse banner gerekmez), kullanım koşulları (zorunlu değil).

## Karşılaşılan sorunlar ve çözümler

- **`.flow` ve `.st` sınıf çakışmaları** mobilde yatay taşmaya yol açtı. Sınıflar `.strip` ve `.pstep` olarak yeniden adlandırıldı.
- **Akordiyon Chrome'da hover ile açılmıyordu.** `<details>` ve `::details-content` geçişi takılıyordu. Buton + `grid-template-rows 0fr→1fr` ile yeniden yazıldı. Önbellek yüzünden eski CSS görünmesine karşı `?v=` eklendi.
- **Menü tıklamasından sonra header geri gelip başlığı örtüyordu.** `focusin` yalnızca `:focus-visible` iken çalışacak şekilde düzeltildi, link odaktan çıkarılıyor.
- **Hero'da "g, ç" alt uzantıları kesiliyordu.** Maskeye alt boşluk verildi.
- **Unsplash ağ erişimi kapalıydı.** Fotoğraflar tarayıcıdan zip olarak indirildi ve `assets/photos/` altına kondu; CSP'den unsplash kaldırıldı.

## Yapılacaklar

- [x] Alan adı **any4labs.com** işlendi (canonical, hreflang, sitemap, robots, JSON-LD, llms.txt, security.txt, e-postalar) — 19 Ekim 2026
- [ ] Form uç noktası, sosyal medya (`sameAs`)
- [ ] Aydınlatma metni taslağındaki sarı boşluklar (unvan, adres, MERSİS, sağlayıcılar, saklama süresi) + hukukçu onayı; sonra `noindex` kaldırılır
- [ ] Konsept işleri gerçek işlerle değiştirmek
- [ ] Kullanılmayan Schibsted yazı tipi dosyalarını silmek
- [ ] Yayın sonrası: `02-Websites/_kutuphane/seo-geo/00-seo-geo-standardi.md` kontrol listesi, Search Console, Bing

## Görseller

`03-Assets/images/any4/ekran-goruntuleri/` (masaüstü bölümleri, tam sayfa, mobil, marka sayfası) · `03-Assets/logos/any4/`
