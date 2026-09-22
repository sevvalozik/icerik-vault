---
type: kod-projesi
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-21
repo: "~/nefin-web (yerel; GitHub reposu henüz açılmadı)"
tags: [kod-projesi, website, 3d, nextjs, nefinbeauty]
related: ["[[02-Websites/projects/nefin-beauty/nefin-web-3d-plani]]", "[[00-Musteriler/nefin-beauty/marka-brief]]", "[[nefin-sunum]]"]
---

# Nefin Beauty — 3D Web Sitesi (kod projesi özeti)

> Kod vault'ta değil: `~/nefin-web`. Plan ve strateji: [[02-Websites/projects/nefin-beauty/nefin-web-3d-plani]].

## Durum: v2 "Berrak" (22 Eylül 2026) — repo `main` @ `80a0101`

Video-öncelikli scroll anlatısı: perde açılışı, sunumdaki iki kampanya hero'su, ışığa çıkış geçişi,
manifesto, ürün hikâyesi, doku galerisi, rutin çizgisi, cam INCI paneli, ihtiyaç→ürün filtresi,
nefin + you, koyu kapanış. Plan ve geçiş promptu: [[02-Websites/projects/nefin-beauty/nefin-web-v2-berrak-plani]].
Sepet/ödeme yok; "Satın al" mevcut mağazaya gidiyor. 3D şişe hero'dan çıktı (kod PDP için duruyor).

## Yığın

Next.js 16 (App Router) · TypeScript · GSAP ScrollTrigger + Lenis · React Three Fiber (yalnızca
PDP için saklı) · sharp/ffmpeg (varlık hazırlığı). Harici UI kütüphanesi ve CSS framework'ü yok; tasarım sistemi CSS değişkenleri.

## Tasarım sistemi

`01-Presentations/_themes/nefin-luxe-cream.css` tokenları koda alındı (krem `#F6EFE4`, soft altın
`#D9B36C`, espresso `#1E1410`; Bodoni Moda + Jost). Web için `desert-rose` emekliye ayrıldı.

## İçerik kaynağı (hiçbir metin üretilmedi)

| Veri | Kaynak | Komut |
|---|---|---|
| 13 ürün: ad, fiyat, faydalar, kullanım, INCI | canlı nefinbeauty.com | `python3 scripts/scrape-catalog.py` |
| Hakkımızda, cilt endişeleri | nefinbeauty.com/hakkimizda | `content/site.ts` (elle) |
| Videolar, editoryal görseller | `03-Assets/{images,videos}/nefin-beauty/` | `node scripts/prepare-assets.mjs` |
| 14 klip + 27 packshot (sunum) | `01-Presentations/active/nefin-sunum/` | aynı script, `deck` bölümü |
| Hook cümleleri, aktifler, hero metinleri | [[aylik-icerik-takvimi]], [[nefin-sunum]] | `content/hooks.ts` (birebir) |
| Instagram mozaiği | [[04-Sosyal-Medya-Icerik/nefin-beauty/instagram-feed]] | `node scripts/sync-instagram.mjs` |

Fiyatlar canlı siteyle birebir doğrulandı (ürünün kendi sepet bloğundan okunuyor; mega-menüdeki
benzer ürün fiyatlarıyla karışmaması için).

## 3D

Amber damlalıklı şişe **prosedürel** (LatheGeometry + MeshTransmissionMaterial), ürün
fotoğraflarındaki oranlardan. Müşteriden çok açılı stüdyo fotoğrafı gelince Blender glTF ile
değişecek. WebGL yok / `prefers-reduced-motion` / zayıf cihaz → sahne hiç yüklenmez, gerçek ürün
fotoğrafı gösterilir.

## Ölçüm

| | Canlı site | Yeni site |
|---|---|---|
| İlk yük | 13,7 MB | **559 KB** |
| İstek | 58 | 27 |
| Görsel yükü | 13,2 MB | 0 (hero 3D; görseller tembel) |

## Öğrenilenler

- **Krem zemin üzerinde amber cam görünmez.** MeshTransmissionMaterial zemini kırdığı için şişe
  kaybolmuştu; `attenuationDistance` düşürülüp tint güçlendirilerek siluet kazandırıldı.
- **Canvas'a kesin ölçü şart.** `place-items: center` ile shrink-to-fit olan kapsayıcıda R3F
  300×150 varsayılanına düşüyor ve sahne hiç görünmüyor.
- Tarayıcı paneli gizliyken rAF durduğu için 3D hiç çizilmiyor — hata sanılabilir, değil.
- Videolarda `autoPlay`, `preload="none"` olsa bile dosyayı ilk yükte indiriyor. Görünürlükle
  yükleyen `LazyVideo` ilk yükü 1,1 MB'tan 559 KB'a indirdi.

- **GSAP yPercent + CSS translateY çakışması:** CSS'teki `translateY(110%)` GSAP tarafından piksel `y`
  olarak okunup korunuyor; satır-maske tween'inde `y: 0` açıkça verilmeli (v2'de bulundu).
- Reveal tetikleyicisi IntersectionObserver; gizli sekmede beklemesi normal, hata değil.

## Sıradaki (plandaki Faz 2–3)

Medusa mı Shopify headless mi kararı → katalog/sepet → ödeme (iyzico), kargo, e-arşiv.
Bloklayıcılar: logo SVG, panel dökümü, ödeme/kargo hesapları, ürünlerin çok açılı fotoğrafları.
