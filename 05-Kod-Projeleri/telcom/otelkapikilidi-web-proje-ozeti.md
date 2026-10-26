---
type: kod-projesi
client: "Telcom (otelkapikilidi.com)"
slug: telcom
status: active
date: 2026-10-26
repo: "❓ henüz GitHub reposu yok — kod Şevval'e zip olarak teslim edildi (otelkapikilidi-web)"
tags: [kod-projesi, website, nextjs, sqlite, admin-panel, seo, geo, telcom]
related: ["[[00-Musteriler/telcom/marka-brief]]", "[[02-Websites/projects/telcom/otelkapikilidi-web-sitesi]]", "[[08-Raporlar/telcom/seo-geo-denetim-2026-10-26]]"]
---

# Telcom — otelkapikilidi.com (kod projesi özeti)

> Kod vault'ta değil. Klasör: `otelkapikilidi-web` (README içinde kurulum, yayın, güvenlik). Repo açılınca bu notta güncellenecek.

## Yığın

- **Next.js 16** (App Router, sunucu tarafı HTML; her sayfa JS kapalıyken tam okunur) + **SQLite** (`better-sqlite3`, `data/site.db`).
- Yüklenen dosyalar `data/uploads/` (public/ değil; Next build sonrası eklenen dosyaları public'ten sunmaz) → `/uploads/[...path]` route'u.
- Panel oturumu: `ADMIN_USERS` (e-posta:bcrypt) + `AUTH_SECRET` (JWT çerezi, 8 saat). Giriş denemesi sınırı.
- Font: Manrope (npm `@fontsource`, kendi sunucusunda). Dış istek yok.

## Özellikler

- `lib/seo.ts` → `resolveSeo()` tek karar noktası (başlık ≤60, açıklama ≤155, canonical, robots, breadcrumb, JSON-LD `@graph`). İnce içerik kuralı: rehber ≥120, sayfa ≥60 kelime; altı noindex + sitemap dışı, içerik dolunca otomatik açılır.
- `proxy.ts` → www→çıplak 301, sonda `/` 301 (Next varsayılanı 308 kapatıldı), panel yönlendirmeleri 301/410, eski WP yolları 410, `/wp-content/uploads/*` → `/uploads/*` 301, IndexNow anahtar dosyası.
- İçe aktarıcı: Elementor/Gutenberg temizliği, gizli spam bloklarını silme, SSS ayıklama (WPR akordeon + "Sık Sorulan Sorular" H2/H3), ürün metninden teknik özellik tablosu, görsel boyut eki atma, Ürünler listesinden doğru ürün görseli, iç linkleri göreli yapma, GMT tarih, rapor `data/import-report.json`. Varsayılan: yalnız yeni kayıt ekler.
- Panel: ürün/yazı/sayfa (Markdown, SSS "S:/C:", teknik özellik "Özellik: Değer", SEO sayacı + arama önizlemesi), slug değişince otomatik 301, silinince listeye 301, teklif talepleri (+ `LEAD_WEBHOOK_URL`), medya, yönlendirmeler, firma bilgileri, IndexNow, "WordPress'ten aktar".
- İç link motoru (`lib/related.ts`): ürün ↔ rehber başlık eşleşmesi; rehberlerde ilgili ürünler sırası yazıya göre döner (her modele dengeli link).

## Komutlar

```bash
npm install && cp .env.example .env.local && npm run admin:hash -- "parola"
npm run import:wp      # canlı siteden (ağ gerekir)   | npm run seed: deneme verisi
npm run dev            # localhost:3000, panel /admin/
npm test               # 11 birim testi
npm run check:seo -- http://localhost:3000   # Bitti listesinin otomatik kısmı
```

## Tasarım sistemi

- Token: `03-Assets/logos/telcom/otelkapikilidi-tokens.css` (kaynak `app/globals.css`).
- Vault kontrol listesi: proje özeti ✅ · tokenlar ✅ · **logo dosyaları ❌** (müşteri vektör verecek; PNG içe aktarınca `data/uploads/2024/02/telcom.png`) · ikon seti: ayrı ikon kullanılmıyor (favicon `public/favicon.svg`, geçici "T" — gerçek logo gelince değişecek) · ekran görüntüleri ❌ (gerçek görsellerle içe aktarma sonrası alınacak; bu oturumdakiler yer tutucu görselli).

## Durum (26.10.2026)

- Build temiz; yerel denemede `check:seo` yalnız "ürünlere ≥5 sayfadan iç link" uyarısı verdi (deneme verisinde 1 rehber var; tam içe aktarmada ~35 rehberden link gelir — tekrar ölçülecek).
- Panel uçtan uca denendi: giriş, hatalı giriş, ürün kaydetme, slug değişince 301 ve geri alma, teklif formu → talep listesi.
- Yayında değil. Barındırma ❓.
