---
type: website
framework: nextjs
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-22
url: "https://github.com/fsumbul/nefin-web"
tags: [website, scroll, motion, nefinbeauty, v2]
related: ["[[nefin-web-3d-plani]]", "[[nefin-sunum]]", "[[aylik-icerik-takvimi]]", "[[00-Musteriler/nefin-beauty/marka-brief]]", "[[05-Kod-Projeleri/nefin-beauty/nefin-web-proje-ozeti]]"]
---

# Nefin Web v2 — "Berrak": eksik analizi, plan ve geçiş promptu

> v1 (Faz 1) ayakta ama **temel seviye**: fade-up reveal + tek 3D hero. Bu not v1'in eksiklerini, müşteriye sunulan yönle (aylık içerik sunumu) hizalanmış v2 planını ve tekrar kullanılabilir **ileri seviye geçiş promptunu** içerir.

## 1. Kaynak analizi (vault, 22 Eylül 2026)

| Kaynak | Ne verdi |
|---|---|
| [[nefin-sunum]] + `01-Presentations/active/nefin-sunum/index.html` | Müşterinin gördüğü görsel dil: **espresso açılış + altın bokeh**, Bodoni italik vurgular (*Doku* ve his), harf aralıklı altın eyebrow'lar, ince altın çizgiler; slayt 9'da **"Web Sitesi Hero Örnekleri"** — tam ekran video, alttan koyu gradyan, "Günlük Bakım / Yoğun nem, kalıcı konfor / Şimdi Keşfet" ve "Yeni Sezon / Güneşte kalan cilt için / Koleksiyonu Keşfet". Hareket sözlüğü: `rise` (34px yukarı, `cubic-bezier(.2,.7,.2,1)`, 0.95 s), `fadein` 1.1 s, 0.7 s çapraz geçiş, altın **pulse** nokta, `backdrop-filter: blur(6px)` rozetler. |
| [[aylik-icerik-takvimi]] | Marka mesajı: *bakımın zarafeti, güvenilir içerik, bilimsel ve çok aşamalı kontrol, sürdürülebilir güzellik*. İletişim sırası **içerik → ihtiyaç → kullanım → ürün** (özellik doğrudan söylenmez). Ürün başına **onaylı hook cümleleri** (ör. "Tonik sadece ferahlatmak için değil.", "Işıltı istiyorsanız rutininizde bu adımı atlamayın."). Aktif vurguları: %15 lipozomal C, 24K altın, %1,5 retinol, SPF 50+ PA+++, peptit + kafein. |
| `01-Presentations/active/nefin-sunum/*.mp4|jpg` | **14 sıkıştırılmış klip** (gold, vitc, vitc2, ret, sun, cream, nemli, dokusu, drop, kopuk, cc, cilt [yatay], bg [bokeh], woman_foam) + poster kareleri; `n_*`, `p_*`, `c_*` yüksek kaliteli packshot/doku fotoğrafları (linen, tepsi, el, portakal). v1 bunların yalnızca 4'ünü kullanıyordu. |
| [[gorsel-log]] / [[video-log]] | Gerçek ürün fotoğrafları düşük çözünürlük ve eski bordo stil → **sunum packshot'ları** siteye esas alınacak. Retinol Supreme canlı katalogda yok (takvimde var) → sitede "yakında" değil, hiç gösterilmez. |
| [[00-Musteriler/nefin-beauty/marka-brief]] | Değişmedi. Yasaklar geçerli: tedavi iddiası yok, bordo/kadife yok, sert flaş yok. |
| Canlı katalog (`content/products.json`) | 13 ürün, fiyat, INCI — v1'de çekildi, doğrulandı. |

## 2. v1'in eksikleri (dürüst liste)

1. **Hero müşterinin gördüğüyle uyuşmuyor.** Sunumda tam ekran video + koyu gradyan + altın eyebrow gösterildi; v1 krem zemin + prosedürel (etiketsiz) 3D şişe. "Berrak ürün tanıtıcı" için kahraman **gerçek ürün** olmalı — 3D şişe bunu veremiyor.
2. **Scroll temel seviye.** Sadece görünürlükle fade-up; scroll'a bağlı tek hareket şişe dönüşü. Pinlenmiş sahne, scrub, paralaks, bölüm geçişi yok; krem bloklar arasında sert kesmeler.
3. **Şeffaflık/cam dili yok.** Düz kartlar, opak bölümler. Katman, derinlik, buzlu cam paneli yok.
4. **Editoryal ritim yok.** Sunumdaki italik Bodoni vurgular, ince altın çizgiler, harf aralıklı eyebrow'lar sitede yok; her bölüm aynı kalıp.
5. **Ürün görselleri zayıf.** Canlı sitedeki 500 px gri zeminli WebP'ler kullanılıyor; sunumun packshot'ları (krem/keten zemin) dururken.
6. **Ürün hikâyesi yok.** Takvimdeki onaylı hook cümleleri ve aktif vurguları (%15 C, 24K, SPF 50+) hiç yok; ürün rayı jenerik.
7. **Strateji akışı yok.** "İçerik → ihtiyaç → kullanım → ürün" sırası sayfada karşılığını bulmuyor; ihtiyaç (cilt endişesi) → ürün eşlemesi statik chip.
8. **Sosyal bağ yok.** "nefin + you" planlandı, yapılmadı; `instagram-feed.md` siteye bağlı değil.
9. **Hareket sözlüğü tutarsız.** Sunum `cubic-bezier(.2,.7,.2,1)` / 0.95 s; site jenerik 1 s ease.
10. **Açılış yok.** Sunum sinematik başlıyor; site direkt sayfa. Kısa, atlanabilir bir perde açılışı eksik.
11. **Header tek mod.** Koyu video üstünde okunmuyor; tema geçişi yok.
12. **Mobil hero bulanık** (şişe %50 opaklıkla metnin arkasında).
13. **Sayfa geçişi yok** (ürün sayfasına sert atlama), PDP düz.
14. **14 klipten 4'ü kullanılıyor.**

## 3. v2 konsepti: "Berrak"

Koyu, sinematik bir açılıştan (sunumla aynı dil) **ışığa** çıkan tek bir anlatı: espresso + altın bokeh → tam ekran ürün videosu → video küçülüp krem editoryal sayfaya "yerleşiyor" → ürün hikâyesi → doku → rutin → kanıt → ihtiyaç → sosyal → kapanışta yeniden koyu (kitap kapağı). Cam paneller (buzlu, 1 px ışık kenarı) video ve fotoğrafların **üstünde** durur; metin daima okunur.

**Motor:** Lenis (yumuşak scroll, mevcut) + **GSAP ScrollTrigger** (pin, scrub, tema geçişi; paket zaten kurulu). R3F hero'dan çıkar — kod PDP'de "3D görüntüle" için saklanır. Video-öncelikli yön müşteriye gösterilen yöndür.

### Bölümler ve geçişleri

| # | Bölüm | İçerik (kaynak) | Hareket |
|---|---|---|---|
| 0 | **Perde** (oturumda 1 kez, 1,4 s, atlanabilir) | espresso + `bg.mp4` bokeh, NEFIN wordmark harf aralığı 0.6em→0.26em | perde yukarı `clip-path` ile açılır, hero altından belirir |
| 1 | **Hero** | `gold.mp4` / `sun.mp4` iki kampanya (sunum slayt 9 metinleri birebir), 9 s çapraz geçiş | satır-maske metin (translateY 110%→0), altın pill CTA, cam "kaydır" göstergesi; header şeffaf/açık renk |
| 2 | **Işığa çıkış** (pin, 160 vh) | aynı video | scrub: video `scale 1→.58`, `border-radius 0→28px`, zemin espresso→krem, başlık yükselir; header tema krem'e döner |
| 3 | **Manifesto** | takvimdeki marka mesajı (birebir) | kelime kelime scrub reveal, italik Bodoni vurgu, altın çizgi çizilir |
| 4 | **Ürün hikâyesi** (pin, 4 bölüm) | vitc / gold / cream / sun — her birinde takvim hook'u + aktif rozetleri + fiyat + CTA | sol medya sabit, klipler 0,7 s çapraz geçiş; sağ bölümler kayar; altın pulse ilerleme noktaları |
| 5 | **Doku ve his** | dokusu, drop, kopuk, nemli, woman_foam | yatay sürükle-kaydır galeri, cam altyazılar, hover'da klip oynar; sunum slayt 8'in karşılığı |
| 6 | **Rutin** | 4 adım + ürün eşlemesi | SVG altın çizgi `stroke-dashoffset` ile scroll'da çizilir, adımlar sırayla belirir |
| 7 | **Kanıt (şeffaflık)** | `p_linen.jpg` üstünde **buzlu cam** panel; gerçek INCI listesi | panel `backdrop-filter` ile belirir, INCI satırları stagger |
| 8 | **İhtiyaç → ürün** | 6 cilt endişesi (canlı site) → filtrelenen ürün ızgarası | cam chip'ler; ızgara `View Transitions` ile yeniden dizilir (destek yoksa fade) |
| 9 | **Tüm ürünler** | 13 ürün, sunum packshot'ları | hover'da poster→klip, hafif manyetik CTA |
| 10 | **nefin + you** | `instagram-feed.md`'den derleme zamanı JSON (gönderi + hikaye kapakları) | 3'lü mozaik, hikaye halkaları; IG'ye bağlantı |
| 11 | **Hikâye** | Hakkımızda metni (birebir) | görsel paralaks (`y` scrub ±8%) |
| 12 | **Kapanış** | espresso + bokeh, bülten | tema koyuya döner; kitap kapağı |

Ürün sayfası: galeri (packshot + klip), cam bilgi paneli, akordeon; sayfa geçişi **View Transitions API** (destek yoksa 0,45 s fade). Header: `data-theme` body üzerinden, bölüm görünürlüğüyle değişir.

## 4. İleri seviye geçiş promptu (yeniden kullanılabilir)

> Aşağıdaki blok bir tasarımcıya, bir AI'ya ya da bu repoyu geliştirene verilebilir. Nefin'e özgü tokenlar içerir; başka müşteri için tokenları değiştir.

```
ROL: Lüks kozmetik markası için scroll-anlatılı, video-öncelikli, "berrak" bir web deneyimi tasarla/kodla.
MARKA TOKENLARI: krem #F6EFE4 · kum #EADBC8 · bej #CDBBA5 · altın #D9B36C · koyu altın #86622A ·
taupe #6B564B · kahve #3B2A22 · espresso #1E1410. Display: Bodoni Moda (400, italik vurgu). Gövde: Jost 300/400.
YASAKLAR: bordo/kadife, neon, siyah "gece kulübü" lüksü, sert flaş, tedavi iddiası, uydurma metin.

HAREKET SÖZLÜĞÜ (tek kaynak, her yerde aynı):
- ease-out-soft: cubic-bezier(.2,.7,.2,1)  → giriş hareketleri, 0.9–1.1 s
- ease-in-out-silk: cubic-bezier(.65,0,.35,1) → geçişler/scrub, 0.7 s
- stagger: 70 ms (metin satırı), 90 ms (kart), 40 ms (kelime)
- metin: satır-maske reveal (overflow hidden; satır translateY 110% → 0, opacity 0 → 1)
- görsel: clip-path inset(100% 0 0 0) → inset(0) + scale 1.06 → 1, 1.1 s
- cam panel: background rgba(246,239,228,.14); backdrop-filter blur(18px) saturate(1.2);
  border 1px rgba(255,255,255,.28); iç ışık: inset 0 1px 0 rgba(255,255,255,.35); radius 20px
- koyu üstünde metin: krem; ışık üstünde: espresso. Kontrast ≥ 4.5:1.
- altın pulse: box-shadow 0 0 0 0 rgba(217,179,108,.7) → 0 0 0 14px rgba(217,179,108,0), 2.2 s sonsuz

SCROLL KURALLARI:
- Lenis lerp .09; ScrollTrigger scrub 0.8 (yumuşatılmış), pin'lerde anticipatePin 1.
- Her pin en fazla 2.2 × viewport; kullanıcı asla "sıkışmış" hissetmez (scroll her zaman ilerler).
- Hero → içerik geçişi: video scale 1→.58, radius 0→28px, zemin espresso→krem, 160 vh boyunca.
- Tema geçişi: body[data-theme] bölüm %40 görünür olunca değişir; header rengi 0.5 s içinde uyar.
- Bölüm başlıkları: eyebrow (harf aralığı .22em, altın) → başlık (Bodoni) → lede; hepsi satır-maske.
- Sayfa geçişi: View Transitions API (0.45 s krem perde); destek yoksa opacity fade.

PERFORMANS/ERİŞİLEBİLİRLİK (pazarlık yok):
- Videolar: 1280p H.264 CRF 27, sessiz, poster WebP; görünürde yükle (preload none), ekrandan çıkınca durdur.
- İlk yük < 1.5 MB, LCP < 2 s; hero posteri LCP.
- prefers-reduced-motion: tüm scrub/pin kapalı, statik düzen, videolar poster olarak kalır.
- Klavye: tüm etkileşimler odaklanabilir; galeri ok tuşlarıyla gezilir.
- Metinler yalnızca müşteri kaynaklarından (katalog, takvim, Hakkımızda) — üretme.
```

## 5. Uygulama sırası

1. Sunum medyasını siteye al (`scripts/prepare-assets.mjs` → `deck` bölümü: 14 klip + posterler + packshot'lar).
2. Hareket altyapısı: GSAP + ScrollTrigger + Lenis senkronu (`lib/motion.ts`), tema yöneticisi, `TextReveal`, `Glass`, `Curtain`.
3. Yeni ana sayfa bölümleri (yukarıdaki 0–12), v1 bileşenleri yeniden kullanılır (ProductCard, Accordion, LazyVideo).
4. Ürün verisi zenginleştirme: `content/hooks.ts` — takvimdeki hook + aktif rozetleri ürün slug'ına eşlenir.
5. `content/instagram.json` — vault'tan derleme zamanı çekim (`scripts/sync-instagram.mjs`).
6. PDP yenileme + View Transitions.
7. Ölçüm (ilk yük, LCP), reduced-motion ve klavye testi; commit + push.

## 6. Yapılmayacaklar / notlar

- Sepet/ödeme yine yok (Faz 2–3); "Satın al" mevcut mağazaya gider.
- 3D şişe hero'dan kalkar; PDP'de opsiyonel görüntüleyici olarak kalır (kod silinmez).
- Retinol Supreme katalogda olmadığı için sitede yer almaz.
- Logo hâlâ geçici wordmark.
