---
type: snippet
tags: [website, footer, any4, imza, backlink]
date: 2026-11-02
related: ["[[00-Musteriler/any4/marka-brief]]", "[[02-Websites/_kutuphane/seo-geo/06-backlink-ve-atif]]", "[[08-Raporlar/any4/seo-geo-denetim-2026-11-02]]"]
---

# "Product by any4" imzası (müşteri sitelerinin footer'ı)

> Furkan Bey'in kararı (2 Kasım 2026): hazırladığımız her sitenin altına "Product by any4" yazıp any4labs.com'a link veriyoruz. Amaç hem reklam hem any4 için gerçek backlink ve atıf (Furkan Bey'in SEO raporunda otorite 0/10 idi).

## Kurallar

- **Yer:** footer'ın en alt satırı, telif satırının karşısı (sağ) ya da altı. Sade, küçük (12–13 px), sitenin kendi metin rengiyle (`currentColor`); müşterinin tasarımını bozmaz.
- **Yalnız marka adı:** bağlantı metni "Product by any4". "Mobil uygulama geliştirme" gibi anahtar kelimeli bağlantı metni kullanılmaz; yüzlerce sayfada tekrarlanan anahtar kelimeli footer linki Google'da link şeması sayılır.
- **Link:** `https://any4labs.com/` + `utm_source=<müşteri-alanadı>&utm_medium=referral&utm_campaign=imza` (analytics kurulunca hangi siteden ziyaretçi geldiği görülür). `rel="noopener"`, `nofollow` yok.
- **Müşteri onayı:** sözleşmede ya da yazılı olarak "footer'da geliştirici imzası yer alır" maddesi; müşteri istemezse kaldırılır. Hassas sektörlerde (sağlık, hukuk) özellikle sorulur.
- **Admin panelleri / backend:** kendi yazdığımız panellerde giriş ekranının altına ve panel footer'ına aynı imza (link aynı, `utm_campaign=panel`).
- **Karşılık:** imza konan her site, müşteri onay verirse any4labs.com'da "İşler" bölümüne gerçek iş olarak eklenir (konsept işlerin yerine).

## HTML

```html
<a class="any4-credit" href="https://any4labs.com/?utm_source=SITE_ALANADI&amp;utm_medium=referral&amp;utm_campaign=imza" target="_blank" rel="noopener" aria-label="Product by any4">
  <span class="any4-credit__text">Product by</span>
  <svg class="any4-credit__logo" viewBox="3 40 214 77" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22.4 101.2Q14.1 101.2 9.15 97.4Q4.2 93.6 4.2 86.7Q4.2 79.9 8.35 76Q12.5 72.1 21.2 70.4L39.5 66.9Q39.5 54.6 28 54.6Q22.9 54.6 20 56.9Q17.1 59.2 16 63.5L5.1 62.8Q6.6 54.8 12.55 50.2Q18.5 45.6 28 45.6Q38.8 45.6 44.45 51.35Q50.1 57.1 50.1 67.5V88.2Q50.1 90.1 50.75 90.85Q51.4 91.6 52.9 91.6H54.8V100Q53.4 100.3 50.9 100.3Q46.4 100.3 43.75 98.45Q41.1 96.6 40.4 92.1V91.8Q38.4 96 33.5 98.6Q28.6 101.2 22.4 101.2ZM24.1 92.8Q31.3 92.8 35.4 88.7Q39.5 84.6 39.5 78.3V74.9L23.9 77.9Q19.1 78.8 17.15 80.75Q15.2 82.7 15.2 85.7Q15.2 89.1 17.55 90.95Q19.9 92.8 24.1 92.8Z M58 100V46.8H67.7L67.9 56.1Q70 50.6 74.3 48.1Q78.6 45.6 84.1 45.6Q90 45.6 94 48.25Q98 50.9 100.05 55.45Q102.1 60 102.1 65.8V100H91.5V69Q91.5 62 89.15 58.25Q86.8 54.5 81.2 54.5Q75.5 54.5 72.05 58.25Q68.6 62 68.6 69V100Z M114.1 115V106.3H120.6Q123.3 106.3 124.6 105.5Q125.9 104.7 126.6 102.8L128.3 98.4H125L105.8 46.8H117L131.6 88.6L145.5 46.8H156.8L135.6 106.2Q134 110.8 130.85 112.9Q127.7 115 122.1 115Z"/><circle cx="186.5" cy="72.8" r="27.2" fill="#1F5568"/><path fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round" transform="translate(186.5 72.8) scale(1.2089) translate(-181.8 -30)" d="M177.72 43.5Q177.15 43.5 177.15 43.12Q177.15 42.71 177.72 42.64L179.48 42.41Q180.3 42.3 180.6 42.02Q180.9 41.74 181.05 41.02L182.18 36.19Q182.29 35.62 181.73 35.62H174.12Q173.52 35.62 173.52 35.17Q173.52 34.95 173.69 34.69Q173.85 34.42 174.12 34.05L187.09 16.88Q187.35 16.5 187.77 16.5H188.52Q188.82 16.5 188.87 16.67Q188.93 16.84 188.7 17.14L176.07 33Q175.69 33.52 176.22 33.52H182.29Q182.78 33.52 182.89 33.08L184.62 25.65Q184.73 25.28 185.14 25.05L186.6 24.26Q186.9 24.07 187.07 24.19Q187.24 24.3 187.17 24.6L185.25 33Q185.14 33.52 185.63 33.52H187.28Q187.77 33.52 187.65 33.98L187.35 35.17Q187.24 35.62 186.79 35.62H185.14Q184.62 35.62 184.5 36.15L183.38 41.02Q183.23 41.81 183.4 42.09Q183.57 42.38 184.32 42.49L184.99 42.6Q185.33 42.64 185.44 42.77Q185.55 42.9 185.55 43.05Q185.55 43.5 184.88 43.5Z"/></svg>
</a>
```

`SITE_ALANADI` yerine müşterinin alan adı (ör. `humentis.com.tr`).

## CSS

```css
.any4-credit { display: inline-flex; align-items: center; gap: .45em; color: inherit; font-size: 12px; line-height: 1; letter-spacing: .01em; text-decoration: none; opacity: .7; transition: opacity .3s; }
.any4-credit:hover, .any4-credit:focus-visible { opacity: 1; }
.any4-credit__logo { height: 1.25em; width: auto; display: block; }
```

## React / Next.js

```tsx
export function Any4Credit({ site }: { site: string }) {
  const href = `https://any4labs.com/?utm_source=${site}&utm_medium=referral&utm_campaign=imza`;
  return (
    <a className="any4-credit" href={href} target="_blank" rel="noopener" aria-label="Product by any4">
      <span className="any4-credit__text">Product by</span>
      {/* SVG: yukarıdaki HTML'deki <svg> içeriği, class → className, fill-rule vb. camelCase */}
    </a>
  );
}
```

Görünüm: `03-Assets/images/any4/imza-ornek.png` (açık, koyu ve krem zeminde).

## Uygulanacak siteler

| Site | Durum | Not |
|---|---|---|
| any4labs.com | — | Kendi sitemiz |
| humentis.com.tr | ⏳ | Müşteri onayı; sağlık sektörü |
| nefinbeauty.com (v2) | ⏳ | |
| decateknoloji.com (demo: decadefence.com) | ⏳ | |
| otelkapikilidi.com (Telcom) | ⏳ | Admin panelinde de |
| ❓ diğer | | |
