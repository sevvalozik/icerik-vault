---
type: kod-projesi
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-21
repo: "https://github.com/fsumbul/nefin-web (özel; sevvalozik yazma yetkisiyle davetli)"
tags: [kod-projesi, website, 3d, nextjs, nefinbeauty]
related: ["[[02-Websites/projects/nefin-beauty/nefin-web-3d-plani]]", "[[00-Musteriler/nefin-beauty/marka-brief]]", "[[nefin-sunum]]"]
---

# Nefin Beauty — 3D Web Sitesi (kod projesi özeti)

> Kod vault'ta değil: `~/nefin-web` → https://github.com/fsumbul/nefin-web (özel repo). Plan ve strateji: [[02-Websites/projects/nefin-beauty/nefin-web-3d-plani]].

## Durum: Faz 1 tamam

Marka sitesi ayakta — 3D scroll hero, 13 ürünlük katalog, ürün detay sayfaları. Sepet/ödeme yok;
"Satın al" mevcut mağazaya gidiyor.

## Yığın

Next.js 16 (App Router) · TypeScript · React Three Fiber + drei · Lenis · sharp/ffmpeg (varlık
hazırlığı). Harici UI kütüphanesi ve CSS framework'ü yok; tasarım sistemi CSS değişkenleri.

## Tasarım sistemi

`01-Presentations/_themes/nefin-luxe-cream.css` tokenları koda alındı (krem `#F6EFE4`, soft altın
`#D9B36C`, espresso `#1E1410`; Bodoni Moda + Jost). Web için `desert-rose` emekliye ayrıldı.

## İçerik kaynağı (hiçbir metin üretilmedi)

| Veri | Kaynak | Komut |
|---|---|---|
| 13 ürün: ad, fiyat, faydalar, kullanım, INCI | canlı nefinbeauty.com | `python3 scripts/scrape-catalog.py` |
| Hakkımızda, cilt endişeleri | nefinbeauty.com/hakkimizda | `content/site.ts` (elle) |
| Videolar, editoryal görseller | `03-Assets/{images,videos}/nefin-beauty/` | `node scripts/prepare-assets.mjs` |

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

## Sıradaki (plandaki Faz 2–3)

Medusa mı Shopify headless mi kararı → katalog/sepet → ödeme (iyzico), kargo, e-arşiv.
Bloklayıcılar: logo SVG, panel dökümü, ödeme/kargo hesapları, ürünlerin çok açılı fotoğrafları.
