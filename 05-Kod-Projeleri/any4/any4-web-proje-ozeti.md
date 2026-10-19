---
type: kod-projesi
client: "any4"
slug: any4
status: active
date: 2026-10-19
repo: "https://github.com/fsumbul/any4-web (dal: sevval/duzenlemeler)"
tags: [kod-projesi, website, statik, html-css-js, motion, any4]
related: ["[[00-Musteriler/any4/marka-brief]]", "[[02-Websites/projects/any4/any4-web-sitesi]]"]
---

# any4 — Kurumsal web sitesi (kod projesi özeti)

> Kod vault'ta değil. Repo: `github.com/fsumbul/any4-web`. Yerel klasör: `~/any4-web` (Şevval'in Mac'i). Marka: [[00-Musteriler/any4/marka-brief]].

## Durum (19 Ekim 2026)

- Furkan Bey'in `main` dalı ilk sürüm (eski adıyla Verihane'den dönüşen sayfa). Tüm düzenlemeler ayrı dalda: **`sevval/duzenlemeler`**. `main`'e 27 commit önde, hepsi GitHub'a pushlandı. Son commit `f3323cd`: yeni logo.
- Merge kararı Furkan Bey'de. Fotoğraflar ve yazı tipleri repoda, dış bağlantı yok; dal olduğu gibi açılınca yerelde de birebir görünür.
- Yayında değil (alan adı yok).

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

| Bölüm | Ne yapıyor |
|---|---|
| Açılış (intro) | Oturumda bir kez: "any" yükselir, petrol top sağdan yuvarlanıp yanında durur, salınıp oturur, logo header'a uçar (~3,7 sn). Tıklama/tuş ile atlanır |
| Header | Büyük logo, ortada menü, TR / EN, "Proje başlat". Aşağı kaydırınca gizlenir, yukarıda geri gelir. Menü tıklaması başlığı tam hizalar |
| Hero | Kenetlenen iki satır "Her gün açılan / uygulamalar." + kısa açıklama + buton. Altında sola akan fotoğraf şeridi: kaydırınca hızlanır, sürüklenebilir |
| Seçili işler | Ada, Rota, Asistan (konsept). Fotoğraf + konuyu kapatmayan küçük telefon ekranı; tıklayınca detay paneli (`#ada` vb.) |
| Ne yapıyoruz | Sade akordiyon; fareyle üstüne gelince açılır (180 ms niyet gecikmesi), tıklama da çalışır, tek satır açık |
| Süreç | Dört sütun (Keşif, Tasarım, Geliştirme, Lansman) + süreler; üstteki çizgi görününce dolar, üstüne gelinen adıma kadar dolar; "Yayına kadar toplam 9–22 hafta" |
| Neden any4 | Başlık + kaydırdıkça kelime kelime dolan "aynı masada" cümlesi + iki madde |
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

## Karşılaşılan sorunlar ve çözümler

- **`.flow` ve `.st` sınıf çakışmaları** mobilde yatay taşmaya yol açtı. Sınıflar `.strip` ve `.pstep` olarak yeniden adlandırıldı.
- **Akordiyon Chrome'da hover ile açılmıyordu.** `<details>` ve `::details-content` geçişi takılıyordu. Buton + `grid-template-rows 0fr→1fr` ile yeniden yazıldı. Önbellek yüzünden eski CSS görünmesine karşı `?v=` eklendi.
- **Menü tıklamasından sonra header geri gelip başlığı örtüyordu.** `focusin` yalnızca `:focus-visible` iken çalışacak şekilde düzeltildi, link odaktan çıkarılıyor.
- **Hero'da "g, ç" alt uzantıları kesiliyordu.** Maskeye alt boşluk verildi.
- **Unsplash ağ erişimi kapalıydı.** Fotoğraflar tarayıcıdan zip olarak indirildi ve `assets/photos/` altına kondu; CSP'den unsplash kaldırıldı.

## Yapılacaklar

- [ ] Alan adı (`any4.app` yer tutucu): `grep -rl "any4\.app" . | xargs sed -i '' 's/any4\.app/yeni.com/g'`
- [ ] Form uç noktası, KVKK bağlantısı, sosyal medya (`sameAs`)
- [ ] Konsept işleri gerçek işlerle değiştirmek
- [ ] `llms.txt` ve README'deki eski logo / buton tarifini güncellemek
- [ ] Kullanılmayan Schibsted yazı tipi dosyalarını silmek
- [ ] Yayın sonrası: `02-Websites/_kutuphane/seo-geo/00-seo-geo-standardi.md` kontrol listesi, Search Console, Bing

## Görseller

`03-Assets/images/any4/ekran-goruntuleri/` (masaüstü bölümleri, tam sayfa, mobil, marka sayfası) · `03-Assets/logos/any4/`
