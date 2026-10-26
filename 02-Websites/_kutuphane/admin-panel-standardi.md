---
type: kutuphane
status: active
tags: [website, admin-panel, standart, nextjs, sqlite, guvenlik]
date: 2026-10-26
related: ["[[00-seo-geo-standardi]]", "[[arama-motoru-panelleri]]", "[[otelkapikilidi-web-proje-ozeti]]"]
---

# Admin panel standardı (her müşteri sitesi için)

> **Karar (Furkan Bey, 26.10.2026):** "Admin panellerinin hepsini bu formatta yapalım, tasarımı, içeriği vs." Referans repo: **`fsumbul/generalkilit-web`** (özel; ekip GitHub'dan davetle erişir). Yeni sitede panel sıfırdan tasarlanmaz, bu repodan taşınır. İlk uygulama: otelkapikilidi.com ([[otelkapikilidi-web-proje-ozeti]]).

## Yığın

- Next.js 16 App Router, sunucu tarafı HTML. `proxy.ts` (middleware değil).
- SQLite: `node:sqlite` (Node 22.5+), şema tek dosyada (`lib/schema.sql`). Yedeklenecek tek klasör `data/` (db + uploads).
- Font: DM Sans + IBM Plex Mono (`@fontsource`, kendi sunucusunda). Dış istek yok.
- Panel `/admin/` ayrı root layout (site stilleri karışmaz), `noindex` başlığı + robots `Disallow: /admin/`.

## Zorunlu modüller

| Modül | Ne | Kaynak dosya (generalkilit-web) |
|---|---|---|
| Giriş + 2FA | scrypt parola, TOTP zorunlu, DB'de oturum, giriş denemesi sınırı | `lib/auth.ts`, `app/admin/login` |
| Roller | admin (her şey), editor (içerik), sales (talepler) | `requireUser([...])` |
| Denetim kaydı | her kayıt/silme kim-ne-ne zaman | `audit()` |
| Pano | talep ve ziyaret özeti, açık SEO işleri | `app/admin/page.tsx` |
| Talepler | form → leads; durum, atanan, not, CSV, ziyaret geçmişi bağlantısı, e-posta bildirimi (Resend) | `lib/leads.ts`, `lib/mail.ts` |
| Ziyaretçiler | çerezsiz sayım (`/api/t`), ülke (geoip-country), dünya haritası | `lib/visits.ts`, `lib/visit-stats.ts` |
| Yazı editörü | Markdown + önizleme, SERP önizleme, SSS, kaynaklar, **SEO/GEO yayın kapısı** | `lib/article-seo.ts`, `components/admin/ArticleEditor.tsx` |
| Medya | yükleme, sharp ile webp + srcset | `lib/article-media.ts` |
| Firma bilgileri | NAP tek kaynak, logolar | `lib/settings.ts` |
| Yönlendirmeler | 301/410, slug değişince otomatik 301 | — |
| Kullanıcılar + Hesabım | ekle/rol/parola sıfırla/sil; 2FA ve parola değişimi | `app/admin/users`, `app/admin/account` |
| **Arama motorları** | GSC / Bing / Yandex doğrulama + IndexNow + canlı kontrol | [[arama-motoru-panelleri]] |

Siteye göre eklenenler (ör. otelkapikilidi: Ürünler, Sayfalar, WordPress'ten aktar) aynı görsel dilde, aynı `Shell` menüsüne eklenir.

## Güvenlik kuralları

- Parola, geçici parola, 2FA sırrı **URL'de ve logda olmaz** (geçici parola 120 sn'lik httpOnly çerezle bir kez gösterilir).
- Canlıda oturum çerezi `Secure`; yalnız yerel http denemesinde `INSECURE_COOKIE=1`.
- Formlarda bal küpü + zaman tuzağı + IP başına sınır.
- Panel, staging/demo'da da açık olabilir ama site `SITE_ENV=demo` ile noindex.

## Yayın kapısı (SEO/GEO)

Yeni yazı şu kontrollerden geçmeden yayına çıkmaz: başlık ≤60, açıklama 70–155, ilk paragraf doğrudan cevap, ≥1 kaynak, iç link, kapak + alt metin, abartı/kanıtsız kelime yok (ör. "sektör lideri", "lider marka", "pazar lideri"). Marka brief'teki yasak kelimeler listeye eklenir.

**İzinli sapma (devralınan site):** WordPress'ten taşınan ve zaten yayında olan yazı, ilgisiz bir düzeltmede kapı yüzünden taslağa düşürülmez (Google'daki adresini kaybetmesin); engeller uyarı olarak görünür. Sebep: otelkapikilidi geçişi, 26.10.2026.

## Yeni site kontrol listesi

- [ ] generalkilit-web'den `lib/` (auth, leads, mail, visits, article-seo, article-media, markdown), `components/admin/`, `app/admin/` taşındı
- [ ] Çerez adı ve TOTP etiketi siteye göre değişti (ör. `ok_admin`, "Telcom Panel")
- [ ] Mail gönderen alan adı siteninki
- [ ] `npm run admin:create` ile ekip kullanıcıları, herkes 2FA kurdu
- [ ] Arama motorları ekranında dört bağlantı yeşil ([[arama-motoru-panelleri]])
- [ ] README'de kurulum, yayın, yedek
