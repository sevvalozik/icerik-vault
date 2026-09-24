---
type: kod-projesi
client: "DECA Teknoloji"
slug: deca-teknoloji
status: active
date: 2026-09-24
repo: "~/deca-web (yerel; git/GitHub reposu henüz açılmadı)"
demo: "https://decadefence.com (IIS, noindex)"
tags: [kod-projesi, website, 3d, scroll, nextjs, threejs, decateknoloji]
related: ["[[02-Websites/projects/deca-teknoloji/deca-web-3d-plani]]", "[[02-Websites/projects/deca-teknoloji/web-sitesi-revizesi]]", "[[00-Musteriler/deca-teknoloji/marka-brief]]", "[[00-Musteriler/deca-teknoloji/kurumsal-katalog-rev4]]"]
---

# DECA Teknoloji — 3D Scroll Kurumsal Site (kod projesi özeti)

> Kod vault'ta değil: `~/deca-web`. Plan ve kararlar: [[02-Websites/projects/deca-teknoloji/deca-web-3d-plani]]. Müşteri talebi: [[02-Websites/projects/deca-teknoloji/web-sitesi-revizesi]].

## Durum: v1 taslak (24 Eylül 2026) — müşteri önizlemesine hazır

`npm run build` temiz: **24 sayfa statik** üretiliyor (ana sayfa, 6 bölüm sayfası, 10 faaliyet alanı, KVKK, 404, sitemap, robots, ikon).

Revize talepleri:
- [x] **Logo değişti** — yeni logo vektörleştirildi (`Logo.tsx`, `currentColor`); favicon logodaki "D" glifinden.
- [x] **Hero'da en etkili görsel** — İHA/SİHA saha operasyonu (gerekçe: plan §4). HUD hedef işareti görseldeki İHA'ya kilitli.
- [x] **Görsel ağırlıklı** — 24 katalog fotoğrafı; her alan sayfasında dikey kapak + geniş detay görseli, mega menüde 10 görselli döşeme.
- [x] **Revize site haritası** birebir (6 ana başlık + alt başlıklar), ana sayfa sırası revize dokümanıyla aynı.
- [x] **SEO anahtar kelimeleri** — 11 grup, sayfa eşleşmesiyle `title/description/keywords`, görünür "Uzmanlık başlıkları", görsel `alt`'ları, JSON-LD (`Organization`, `Service`, `BreadcrumbList`), `sitemap.xml` (görsellerle), `robots.txt`.
- [x] **Scroll 3D** — aşağıda.

## Ana sayfa scroll anlatısı

| Bölüm | Teknik |
|---|---|
| Hero | Bölünmüş kadraj → scroll ile tam ekran → "Daha güvenli yarınlar için teknoloji" → sahne `rotateX` ile 3D geri çekilir (GSAP scrub, sticky) |
| Kurumsal açılış | **WebGL noktalı dünya küresi** (Three.js, 6.940 kara noktası, Natural Earth), scroll ile Ankara'ya döner; paragraf kelime kelime aydınlanır |
| Vizyon/Misyon · Değerlerimiz | Paralaks tam ekran görsel + 3D açılan cam kartlar; dev "Değer · Teknoloji · Sürdürülebilir Gelecek" şeridi scroll ile kayar |
| Faaliyet alanları | **CSS 3D silindir galeri** — 10 kapak halkada, pin + snap; öndeki kart öne çıkar; kartlar gerçek link (klavyeyle odaklanınca halka döner) |
| Öne çıkan çözümler | Üst üste binen sticky kartlar (alttaki geri çekilip kararır) |
| Referanslar | 19 logo, iki sıra ters yönlü sonsuz şerit + sayılar (10 alan / 19 kurum / Ankara) |
| Medya | 3D katalog kitabı: scroll ile kapak açılır → 9 MB PDF indirme |
| İletişim | Teklif / Demo / İş birliği |

Mobil ve `prefers-reduced-motion`: pin ve 3D yok; galeri yatay kaydırmalı kart dizisine döner; küre statik açıyla.

## Yayın — demo (24 Eylül 2026)

**Adres:** https://decadefence.com ve https://www.decadefence.com (http de açık) — ekip testleri için, **arama motorlarına kapalı** (`SITE_ENV=demo` → `noindex` + `robots.txt Disallow: /`).

| | |
|---|---|
| Sunucu | 94.73.180.208 · Windows Server 2019 · IIS 10 (decateknoloji.com ile aynı makine; 16 başka canlı site de burada) |
| IIS sitesi | `decateknoloji.com.demogiris` (kendi uygulama havuzu, .NET yok) |
| Klasör | `C:\inetpub\decateknoloji.com.demogiris` |
| Erişim | SSH anahtarı (`~/.ssh/config` → `Host deca`, Administrator). Sunucu parolalı SSH'a kapalı. 1433 SQL Server portu; yayında kullanılmıyor |
| SSL | Let's Encrypt (sunucudaki win-acme 2.2.9, `C:\wacs`), SNI bağlaması yalnız bu sitede; 23.12.2026'ya kadar geçerli. ⚠️ win-acme yenileme kaydının kurulum adımı **None** (diğer sitelerde IIS) → 18.11.2026'daki otomatik yenileme yeni sertifikayı alır ama bağlamaya işlemez; düzeltilmedi (sunucunun ortak win-acme ayarına dokunmak için onay bekleniyor). Geçici çözüm: yenilemeden sonra `iis/add-https.ps1` bağlamayı en yeni sertifikaya alır |
| Çıktı | Next.js statik export (`out/`, 406 dosya, ~30 MB paket) + `public/web.config` (MIME, 404, önbellek) |

**Güncelleme (tek komut):**

```bash
cd ~/deca-web && DEPLOY_USER=Administrator npm run deploy:demo
```

Betik derler, paketi `scp -O` ile yükler, `iis/deploy-iis.ps1` çalıştırır: önce tüm IIS sitelerini listeler ve hostname başka siteye bağlıysa **durur**; sonra yalnız kendi klasörünü `robocopy /MIR` ile günceller ve duman testi yapar. `--check` = değişiklik yapmadan kontrol. RDP ile elle kurulum için paket: `~/deca-web/iis-paket/` (KURULUM.txt).

**Canlıya (decateknoloji.com) geçişte:** `npm run build` (demo değil, indekslenebilir), SSL bağlaması, eski URL yönlendirmeleri için `iis/legacy-redirects.xml` (önce sunucuda URL Rewrite kurulu mu kontrol).

Yayında karşılaşılanlar:
- Windows OpenSSH 7.7 + macOS'un yeni SFTP tabanlı `scp`'si → "Connection closed"; `scp -O` gerekli.
- PowerShell `-File` ile virgüllü parametre dizi olmuyor; `[string]` tipli parametreye dizi geri atanınca tek metne birleşiyor → ilk denemede **yalnız bu yeni siteye** iki hatalı bağlama eklendi (`d`, `decadefence.com www.decadefence.com`), site başlamadı. Betik düzeltildi, hatalı bağlamalar kaldırıldı; diğer sitelere dokunulmadı.
- SSH oturumunda ilerleme çubukları "ReadConsoleOutput" hatası veriyor → `$ProgressPreference = 'SilentlyContinue'`.
- IIS `httpErrors` `ExecuteURL` modu olmayan sayfaya 200 döndürüyordu → `responseMode="File"` ile gerçek 404.
- win-acme `--installation iis` verilse de bu kayıt "None" kurulumla oluştu, https bağlaması eklenmedi → bağlamalar `iis/add-https.ps1` ile elle (SNI) eklendi. `--force` ile tekrar çalıştırmak kurulum ayarını değiştirmedi, yalnız ikinci bir sertifika aldı (ikisi de 23.12.2026'ya kadar geçerli).

## Yığın

Next.js 16.3 (App Router, Turbopack, **statik export** — hedef IIS) · TypeScript · GSAP ScrollTrigger + Lenis · Three.js (küre, saf; R3F kullanılmadı) · sharp (varlık hazırlığı). CSS Modules + CSS değişkenleri; UI kütüphanesi yok. Font: **Archivo** (genişlik ekseni → logonun geniş karakteri) + **IBM Plex Mono**.

## İçerik kaynağı (metin üretilmedi)

| Veri | Kaynak | Kodda |
|---|---|---|
| 10 alan: başlık, paragraf, maddeler, etiket | [[00-Musteriler/deca-teknoloji/kurumsal-katalog-rev4]] | `content/sectors.ts` |
| Kurumsal açılış, mühendislik anlayışı, öncelikler, vizyon/misyon, referans metni, lojistik alt sayfası | [[02-Websites/projects/deca-teknoloji/web-sitesi-revizesi]] | `content/about.ts`, `sectors.ts` (revision) |
| SEO kelimeleri | revize notu §3 | `content/seo.ts`, `sectors.ts` |
| Görseller, logolar, referans logoları | `03-Assets/{images,logos}/deca-teknoloji/` | `npm run assets` → `public/` |
| Kurum bilgileri (resmi ad, LinkedIn, çalışma saatleri) | canlı decateknoloji.com | `content/site.ts` |

Küçük yazım düzeltmeleri yapıldı (katalogdaki "yapay zeka" → "yapay zekâ", sürdürülebilirlik paragrafında "azaltmaya … kullanmak için" → "azaltmak … kullanmak için", "Farklı" → "farklı"); anlam değişmedi.

**Eksik içerik sayfada `<Pending>` kutusuyla işaretli** (yayın öncesi hepsi dolmalı): kariyer pozisyonları, Projelerimiz, Başarı Hikâyeleri, medya/basın, KVKK-gizlilik-çerez metinleri. Liste: marka brief §11.

## Formlar

Teklif / Demo / İş birliği / Kariyer — doğrulamalı, KVKK onay kutulu; şu an ziyaretçinin e-posta uygulamasında info@decateknoloji.com'a hazır ileti açıyor (`mailto`). Sunucu tarafı gönderim kararı bekliyor (Resend / kurum SMTP).

## Komutlar

```bash
cd ~/deca-web
npm run assets   # vault 03-Assets → public/ (+ og.jpg)
npm run globe    # küre verisi
npm run dev
npm run build
```

## Öğrenilenler

- **Dikey kaynak görseli tam ekran hero'ya basmak yumuşatıyor** (1024 px genişlik → 1440 px ekran ≈ 1,4×). Bölünmüş hero'da görsel ≤1,1× ölçekte keskin; tam ekrana açılış scroll hareketi sırasında olduğu için yumuşama göze batmıyor.
- **Maske animasyonlu başlıkta kelime boşluğu kayboluyor:** `inline-block` içindeki sondaki boşluk yutuluyor; boşluk span'in dışına alınmalı.
- **Pin'li bölümde yerleşim, ScrollTrigger oluşturulmadan önce uygulanmalı** (halka modu `data-mode` React render'ını beklemeden DOM'a yazıldı; yoksa pin yüksekliği liste düzenine göre ölçülüyor).
- Next 16'da `next/image` `priority` yerine `loading="eager"` + `fetchPriority="high"`; `PageProps` tipi yalnız `next dev/build` sonrası oluşuyor.
- `THREE.Clock` 0.186'da kullanımdan kalkıyor → `performance.now()`.
- **next.config `redirects` eşleştirmesi büyük/küçük harfe duyarsız:** `/Kvkk`→`/kvkk` kendine yönlenip döngü yaptı; birebir yazım kontrolü `proxy.ts`'e taşındı.

## Sıradaki

1. Ekip testleri (https://decadefence.com) → geri bildirim.
1a. decadefence.com sertifika yenilemesinin kurulum adımını IIS yap (18.11.2026'dan önce).
2. Eksik içerikler (brief §11) — özellikle telefon, projeler, gerçek ürün fotoğrafları, KVKK metinleri.
3. Form gönderimi (sunucu tarafı) + çerez tercih paneli (analitik eklenecekse).
4. Lighthouse / Core Web Vitals ölçümü (henüz ölçülmedi).
5. İngilizce sürüm kararı.

Eski URL'ler (canlı siteden okundu) kalıcı yönlendiriliyor: `/Hakkimizda`→`/kurumsal`, `/Hizmetler`→`/faaliyet-alanlari`, `/Ortaklik`→`/iletisim#is-birligi`, `/Gizlilik`, `/Cerez`→`/kvkk#…` (`next.config.ts`); `/Iletisim`, `/Kvkk` → `proxy.ts` (config redirect'i harfe duyarsız olduğu için yeni `/iletisim`, `/kvkk` ile döngü yapıyordu).

