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

> ⚠️ Faz 2'de (26.10, Furkan Bey: "admin panellerinin hepsini generalkilit-web formatında yapalım") yığın değişti; geçerli hali en alttaki **Faz 2** bölümünde. Aşağıdaki ilk hali kayıt için duruyor.

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
npm install && cp .env.example .env.local && npm run admin:create -- e-posta "Ad" admin   # faz 2 (admin:hash kaldırıldı)
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

## Faz 2 — generalkilit-web panel formatı (26.10.2026)

Kaynak: `fsumbul/generalkilit-web` (özel repo, Şevval'in GitHub hesabından okundu). Ajansın panel standardı: [[02-Websites/_kutuphane/admin-panel-standardi]].

- **Veritabanı:** `node:sqlite` (Node 22.5+), şema `lib/schema.sql` — generalkilit tabloları (users, sessions, leads, articles, visits, audit, settings) + bu siteye özel products, pages, redirects, media. `better-sqlite3`, `jose`, `bcryptjs`, `marked` kaldırıldı.
- **Oturum:** scrypt parola + TOTP 2FA (zorunlu), oturum DB'de (`ok_admin` çerezi), roller admin/editor/sales, denetim kaydı. Kullanıcı: `npm run admin:create` ya da panel → Kullanıcılar (geçici parola URL'de değil, 120 sn'lik çerezde gösterilir).
- **Panel modülleri:** Pano (+ Site sağlığı), Talepler (durum/atanan/not/CSV), Ziyaretçiler (çerezsiz sayım + dünya haritası), Rehber ve belgeler (Markdown editörü + SEO kapısı + SERP önizleme), Ürünler, Sayfalar, Medya, Arama motorları, Firma bilgileri, Yönlendirmeler, WordPress'ten aktar, Kullanıcılar, Hesabım.
- **Arama motorları ekranı** (Furkan Bey: "search console, bing master, indexnow, yandex webmaster … herkes hazırladığı sitenin ayarlarını bu panellerden yapacak"): GSC / Bing / Yandex doğrulama kodları → `<head>` meta, IndexNow anahtarı + tüm siteyi/tek adresi gönder + gönderim kaydı, canlı kontroller (site, robots, sitemap, 3 meta, anahtar dosyası, GPTBot erişimi). Ekip rehberi: [[02-Websites/_kutuphane/arama-motoru-panelleri]].
- **KVKK:** `lib/legal.ts` (kod sayfası, Firma bilgilerinden veri sorumlusu).
- **Kardeş site ürünleri:** `fixtures/kardes-site-urunleri.json` (16 ürün, kaynak URL'li); görseller içe aktarmada `data/uploads/kardes/<host>/` altına iner. Logolar telcom.com.tr'den.
- **generalkilit'ten bilinçli farklar:** düz adresler (`/<slug>/`, eski WP adresleri korunsun); yayındaki yazı kapı engeli yüzünden taslağa düşmez (uyarı olarak kalır); ürünler kodda değil DB'de; tek dil.

### Doğrulama (26.10.2026, yerel)

- `npm run build` temiz, `npm test` 11/11.
- `check:seo`: sitemap 24 adres, 404, 301, robots, AI botları, llms-full (38 KB), eski adres 301/410 tamam. 4 uyarı: General/Coral/Pios'a 4, Energy Saver'a 2 sayfadan iç link (hedef ≥5) — tam içe aktarmada ~35 rehber gelince tekrar ölçülecek.
- Uçtan uca: giriş → 2FA kurulumu → tüm panel ekranları 200, ürün ve yazı kaydı, GSC meta sitede, IndexNow anahtar dosyası, kullanıcı oluşturma, talep formu.
- Kod Şevval'in Mac'inde: `~/Projects/otelkapikilidi-web` (node_modules/.next/data hariç). Kurulum: README.
- 26.10.2026 15:20 — Tam içe aktarma Şevval'in Mac'inde tamamlandı: 21 ürün, 54 yazı (9 belge), 3 sayfa, 10 spam kategori 410. Düzeltilen iki hata: tablo dönüştürücü (turndown NodeList) ve PDF'lerin yazıya değil medya kütüphanesine bağlı olması (dosya adından belge yazısına eşleniyor; eşleşmeyen 7 PDF /belgeler/ "Diğer belgeler"de). ❓ TSE.pdf → TS EN 14846 yazısı eşleşmesi kontrol edilecek. Eski yazılarda kapak görseli yok.
- 26.10.2026 15:31 — TSE.pdf kontrol edildi: TSE uygunluk belgesi, ilgili standart TS EN 14846 (15.07.2013) → eşleşme doğru, ❓ kapandı.
- 26.10.2026 16:00 — Furkan Bey'den: otel referans listesi PDF (522 tesis, "hepsi güncel"), dolap kilidi referans PDF (70), **TELCOM 2026 Ekim kataloğu** (27 s.). `npm run katalog` (lib/apply-katalog.ts, fixtures/katalog-2026-10.json + referanslar.json): /referanslar/ sayfası (36 öne çıkan proje telcom.com.tr görselleriyle + il/ülke gruplu listeler, indekse açık), Energy Saver / Varlık sensörü / DK114–116 / DK119 açıklamaları, yeni ürün Couple doorbell ve General Slim, iletişimde 5 ofis. Panelde düzenlenmiş içeriğe dokunmaz.
- Katalog kararları: S820 / S910 akıllı kilitler eklenmedi (ev/villa ürünü, iki sayfa aynı metin → kopya içerik); 5 kapı kilidi modelinin katalog metni de birebir aynı (model farkı ❓ hâlâ açık); Couple görseli katalogdan (düşük çözünürlük ❓ fotoğraf istenecek); katalogdaki "rakiplerinde… tek … sistem" iddiaları alınmadı (marka kuralı).
