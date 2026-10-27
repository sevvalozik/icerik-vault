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
- 27.10.2026 — verihane.info test yayını için paket (v7): paylaşılan IIS sunucusuna güvenli kurulum (port 3140, yalnız kendi süreci, X-Forwarded-Host), proxy arkası yönlendirme ve yükleme hataları düzeltildi, anasayfaya referans logoları + üst menüye Referanslar, makale editörüne OpenAI yazım asistanı ve SSS/meta/snippet algılama. Ayrıntı: [[admin-panel-standardi]] ekleri.
- 27.10.2026 16:16 — **verihane.info test yayını açıldı** (v7, kur.ps1: Uygulama 200, https 200). Dışarıdan kontrol: 15 sayfa 200, 404 gerçek, robots `Disallow: /`, sayfalar noindex, /admin → https://verihane.info/admin/login/, referans bandı ve menü tamam. kur.ps1 hatası (klasörler doğrudan hedefe kopyalanınca web.config kendi üstüne kopyalanıyordu) sunucuda düzeltildi, pakete de işlendi. OpenAI anahtarı bekleniyor.
- 27.10.2026 17:00 — **Tasarım revizyonu (v8), Furkan Bey:** "scroll kullanmayalım, yazı stili daha zarif olsun, oteller hitap ediyor, daha enterprise; açılış alanını daha şık yapalım; referans generalkilit.com". Yapılan: font Archivo → **DM Sans** (generalkilit ile aynı aile), başlıklar ince (300–500) ve dar harf aralığı kaldırıldı; anasayfa açılışı kaydırmalı kapı animasyonu (DoorScroll) yerine **sabit iki sütunlu giriş**: başlık + kısa açıklama + iki buton + üç kanıt (522 tesis · 56 il / 15 ülke · ISO 9001 / TSE / CE) ve sağda açık renk kapı panelinde kilit fotoğrafı, "1207" oda levhası. Oda sistemleri bölümündeki kaydırınca beliren efekt de kaldırıldı; sitede kaydırmaya bağlı hareket yok. İç sayfa başlıkları da ince. Kontrol: 85 sayfa tarandı sorunsuz, 1440/1280/1024/768/390 genişlikte taşma yok. Paket: `_dagitim/otelkapikilidi-verihane-test-2026-10-27-v8.zip` (md5 9c0e1baf…); sunucuda `guncelle.ps1 -Yeni` ile (data ve .env korunur). Mac'te kullanılmayan `components/home/DoorScroll.tsx`, `InView.tsx` silme izni olmadığı için duruyor (derlemeye etkisi yok).
- 27.10.2026 19:20 — **v9: sitenin tamamı generalkilit.com düzenine geçti** (Şevval/Furkan Bey: "sadece çok az kısmı değişmiş, siteyi genel olarak örnek al, daha enterprise"). Site artık panelle aynı generalkilit-web tabanını kullanıyor (`app/styles/tokens|base|article.css`), üstüne generalkilit'in `shell.css` (üst menü + mega menü + alt bilgi), `pages.css`, `home.css` kopyaları ve Telcom katmanı `telcom.css` (lacivert #13263d koyu ton, kırmızı yalnız menü alt çizgisi/minik işaret; eski `globals.css` kullanılmıyor). Anasayfa: taş zeminli açılış (ince başlık, büyük telefon, ortada ürün) → "Telcom" çizgili bölüm + ürün grupları akordeonu + rakamlar → her aile için lacivert panelli bant ve altında beyaz model kartları → ID serisi → PDF kapaklı 4 belge → gri tonlu referans logoları (sabit) → 3 rehber kartı → büyük telefon/e-posta, ofisler ve formlu iletişim bandı. İç sayfalar: açık gri başlık bandı; ürün sayfası generalkilit ürün düzeni (büyük görsel, ilk 4 teknik değer, teklif kutusu, aynı ailedeki modeller, alt teklif bandı); belgeler PDF ilk sayfası kapaklı (`public/gorsel/belge/`, `scripts/belge-kapak.sh`). Kaydırmaya bağlı hareket ve sayfa geçiş animasyonu yok; telefonda yana kaydırılan şerit yerine 2 sütun. Mobil menü `<details>` + `MenuCloser`.
- v9 kontrol: 86 sayfada başlık, açıklama, canonical, robots ve JSON-LD v8 ile birebir aynı; H1'ler aynı (yalnız General Slim'deki "kartlı otel kapı kilidi" tekrarı düzeldi); taramada 85 sayfa sorunsuz; form 3 sayfada gönderildi; `npm test` 21/21. Paket: `otelkapikilidi-verihane-test-2026-10-27-v9.zip` (md5 e6fe2d16…).
- ~~❓ Bant ve açılış fotoğrafları henüz yok~~ → 27.10.2026 19:50 kapandı (aşağıda v10).
- 27.10.2026 19:50 — **v10: fotoğraflar eklendi.** Şevval Mac'te `scripts/gorsel-indir.sh` çalıştırdı (15 dosya; ham hâlleri artık `_dagitim/gorsel-ham/`, script de oraya indiriyor). Seçilen ve küçültülen 6 görsel `public/gorsel/`: açılış zemini `zemin-acilis.jpg` (telcom.com.tr'nin açık gri çizgili zemini), açılış ürünü `general-black.webp` (şeffaf General Black), bantlar — kapı kilidi: otel odası + kilit (generalkilit HSU-9936), doorbell: telcom.com.tr doorbell-telcom, energy saver: telcom.com.tr slider3 (odada energy saver görünüyor; generalkilit'in oda fotoğrafı yerine), dolap: telcom.com.tr slider2 (ahşap dolapta tuş takımı; generalkilit'in "dolap" bandındaki fotoğraf aslında kartlı kapı kilidiydi). generalkilit'in yazılı açılış görseli (`general-otel.jpg`, metin içeriyor) kullanılmadı. Kontrol: SEO sinyalleri v8 ile aynı, tarama 85 sayfa sorunsuz, form 3 sayfada çalışıyor. Paket Mac'te `_dagitim/otelkapikilidi-verihane-test-2026-10-27-v10.zip` (md5 9d4c2b5e…, içerik listesi `_dagitim/tmp/v10-liste.txt`); kaynak Mac'e yazıldı.
- 27.10.2026 20:10 — **v11: kendi tasarım dili.** Şevval: "referans sitenin aynısını yapmışsın; referans alıp daha iyi yap", "sade, şık, lüks otellere hizmet veren kaliteli bir site". generalkilit'in kopyalanan stil dosyaları (`shell/pages/home/telcom.css`) çıkarıldı (Mac'te `_dagitim/eski-stil/`); yerine `app/styles/site.css` + yeni `home.css`. Önce açılış taslağı gösterildi, onaylandı. Anasayfa: tam genişlik otel kapısı sahnesi (metin solda lacivert geçişte) + açılışa binen kanıt levhası (522 tesis, 56 il / 15 ülke, zincir otel logoları) → "Odayı tamamlayan sistemler" (oda fotoğrafı + Kapıda / Kapı önünde / Oda içinde / Spa ve soyunma odalarında listesi) → kilit modelleri (taş zeminde 6'lı sıra) → ID serisi (lacivert) → proje kartlı referanslar → keşif / teklif / montaj / servis → kurumsal → 4 belge → 3 rehber → iletişim (lacivert, form). İç sayfalar beyaz başlık + ince çizgi; büyük harfli etiket yok; kaydırma efekti yok. Görseller: yalnız telcom.com.tr'nin iki fotoğrafı yer tutucu (generalkilit'inki çıkarıldı); kalıcı görseller için brief: [[07-AI-Gorsel/telcom/otelkapikilidi-site-gorselleri-brief]]. Kontrol: SEO sinyalleri v8 ile aynı (H2 "Odayı tamamlayan sistemler" geri geldi), tarama 85 sayfa, form 3 sayfa, `npm test` 21/21. Paket Mac'te `_dagitim/otelkapikilidi-verihane-test-2026-10-27-v11.zip` (md5 2541336a…).
- 27.10.2026 20:50 — **v12: seçilen konsept.** Şevval v11'i beğenmedi ("uğraşılmamış duruyor, lüks/elegant değil, açılışı sevmedim, referanslar sürekli dönsün, 'Projeniz nasıl ilerler' gereksiz"). Üç açılış taslağı gösterildi (A sessiz lüks, B ürün vitrini, C sinematik galeri; `scratchpad/konsept/`), seçim: **B + başlıklar Cormorant Garamond** (+ tam ekran sistem bölümleri, öne çıkan projeler, belgeler + kısa kurumsal). Anasayfa: koyu lacivert vitrinde ışık altında kilit, altındaki model adına tıklayınca kilit değişir (radyo + `:has()`, JS yok) ve üç teknik değer → sürekli akan 36 referans logosu (80 sn, üzerine gelince durur, "hareket azalt"ta durur; saydam logolar `public/gorsel/ref/`) → 4 tam ekran sahne (Kapıda / Kapı önünde / Oda içinde / Spa'da; telcom.com.tr fotoğrafları, yer tutucu) → 4 proje kartı → kurumsal + 4 belge → iletişim. Süreç ve ID serisi bölümleri çıktı (ID serisi kapı sahnesinin metninde). Kilit kesim görselleri `public/gorsel/kesim/` (stüdyo fotoğraflarından zemin temizlendi). Not: anasayfadan "Odayı tamamlayan sistemler", "ID serisi", "Otel kilidi seçerken" H2'leri ve rehber iç linkleri kalktı ❓ SEO için rehber bağlantısı geri eklenebilir. Kontrol: başlık/açıklama/schema aynı, tarama 85 sayfa, form 3 sayfa. Paket `_dagitim/otelkapikilidi-verihane-test-2026-10-27-v12.zip` (md5 e4467554…).
