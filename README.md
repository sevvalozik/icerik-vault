---
type: readme
tags: [meta]
---

# İçerik Vault — Kullanım Kılavuzu

Ajansın müşteri işlerini (sunum, website, sosyal medya metni, AI video/görsel) tek vault içinde, müşteri bazında izole tutmak ve Claude (Code / Cowork / Design) ile **müşteriye özgü içeriği hızlı üretmek** için kurulmuş yapı.

## Klasörler

- `00-Inbox/` — hızlı notlar, henüz kategorize edilmemiş
- `00-Musteriler/<slug>/marka-brief.md` — **her müşterinin tek doğruluk kaynağı** (kimlik, ton, palet, font, ürün kartları, yasaklar, AI Brief Bloğu). Şablon: `_templates/marka-brief-template.md`
- `01-Presentations/` — sunumlar (`_templates`, `_themes` [12 Marp CSS + Keynote .kth], `active`, `archive`)
- `02-Websites/` — website notları (`_templates`, `projects/<slug>/`, `snippets`, `dist` — build sonrası)
- `03-Assets/{images,logos,videos}/<slug>/` — gerçek dosyalar: logolar, ürün fotoğrafları, üretilen klipler
- `04-Sosyal-Medya-Icerik/<slug>/` — reels/post metinleri, çekim notları (`_templates` içinde zaman kodlu şablon) ve `instagram-feed.md` (yayın öncesi profil önizlemesi; `dist/` build çıktısı)
- `05-Kod-Projeleri/<slug>/` — kod projelerinin **özet notu**; kod vault'a konmaz
- `06-AI-Video/` — AI video üretim sistemi: `_kutuphane/` (prompt formülü, kamera/ışık sözlüğü, model rehberi, negatif promptlar, tutarlılık rehberi, sektör reçeteleri, kalite kontrol), `_templates/video-brief-template.md`, `<slug>/` brief'ler + `video-log.md`
- `07-AI-Gorsel/` — aynı yapı görsel için (`gorsel-prompt-formulu.md`, `gorsel-brief-template.md`, `<slug>/gorsel-log.md`)
- `99-Dashboard/` — Dataview katalogları (müşteri, sunum, website, video, içerik, tema), çalışma prensipleri, bulut depolama, ilham linkleri
- `_templater/` — Templater komutları: **Yeni Müşteri · Yeni Video Brief · Yeni Görsel Brief · Yeni Sosyal Medya İçeriği · Yeni Kod Projesi · Yeni Sunum · Yeni Website**
- `scripts/` — `build-site.js` (site notlarını HTML'e derler), `vault-check.js` (frontmatter + büyük dosya + kırık görsel kontrolü), `instagram-studio.js` (Instagram profil önizleme stüdyosu), `build-instagram.js` (müşteriye gönderilecek tek dosya HTML), `lib/` (ortak yardımcılar), `instagram/` (önizleme arayüzü)
- `CLAUDE.md` / `AGENTS.md` — AI ajanları için talimat (Claude Code otomatik okur; Cowork'te ilk mesajda "CLAUDE.md'yi oku" de)
- `.claude/skills/` — Claude Code komutları: `/video-brief`, `/gorsel-brief`, `/icerik-paketi`, `/instagram-onizleme`

## Kurulum (bir kereye mahsus)

1. Obsidian'da bu klasörü vault olarak aç: **Open folder as vault**.
2. Ayarlar → Community plugins → **Dataview** ve **Templater** etkin (Restricted mode kapalı). Dataview ayarlarında "Enable JavaScript queries" açık olmalı (müşteri kataloğundaki eksik-brief listesi için).
3. Templater → "Template folder location" = `_templater`.
4. (Opsiyonel) Sunumları .pptx/.pdf'e çevirmek için: `npm install -g @marp-team/marp-cli`
5. (Opsiyonel) `node scripts/vault-check.js` — Node.js gerekir, paket gerekmez.

## Üretim akışı

```
Müşteri (marka brief)  →  Brief (video / görsel / sosyal / sunum / site şablonu)
      →  Prompt (kütüphane formülü + brief'teki kartlar)  →  Üretim (Kling / Veo / Gemini …)
      →  Kalite kontrol + log  →  Post-prodüksiyon (yazı, logo, ses marka fontuyla)  →  Yayın
```

1. **Yeni müşteri:** Templater → `Yeni Müşteri` → `00-Musteriler/<slug>/marka-brief.md` oluşur. Bilinmeyenleri `❓ doğrulanacak` bırak. Logo/ürün fotoğraflarını `03-Assets/…/<slug>/` altına koy.
2. **AI video:** Templater → `Yeni Video Brief` → `06-AI-Video/<slug>/<kampanya>-brief.md`. Kurgu için `06-AI-Video/_kutuphane/sektor-receteleri.md`, prompt için `prompt-formulu.md`. Dolu örnek: `06-AI-Video/nefin-beauty/c-vitamini-serum-kampanya-brief.md`.
3. **AI görsel / keyframe:** Templater → `Yeni Görsel Brief`. Gerçek ürün varsa fotoğrafını yükle, tarif ettirme.
4. **Reels metni:** Templater → `Yeni Sosyal Medya İçeriği` (zaman kodlu hook/sorun/içgörü/CTA yapısı).
5. **Claude ile:** Cowork'te vault klasörünü seç → "Nefin için Vitamin C Serum reels brief'i hazırla" de. Claude `CLAUDE.md`'deki sıraya göre marka brief'i, şablonu ve kütüphaneyi okuyup brief'i doğru klasöre yazar. Claude Code'da `/video-brief nefin-beauty "Vitamin C Serum"`.
6. **Claude Design ile:** marka brief'in 10. bölümündeki **AI Brief Bloğu**'nu prompt'un başına yapıştır; logo SVG ve palet hex'leri oradan.
7. **Log:** üretilen her klip/görsel → brief'in Üretim Logu + `<slug>/video-log.md` / `gorsel-log.md`. Prompt kaydı olmayan çıktı yok.

## Dashboard

- `99-Dashboard/musteri-katalogu.md` — tüm müşteriler ve işleri; brief'i eksik müşteriler
- `sunum-katalogu.md`, `website-katalogu.md`, `video-katalogu.md`, `icerik-katalogu.md`, `tema-katalogu.md`
- `calisma-prensipleri.md` — 7 kural (kategorizasyon, link ≠ görsel, marka brief, log, yazı/logo post'ta, isimlendirme, akış)

## Çıktı üretme

Sunumlar (Marp CLI kuruluysa; `.marprc.yml` tema klasörünü otomatik ekler, çıktı `01-Presentations/_export/`):

```
marp 01-Presentations/active/nefin-beauty-sunum.md --pptx
marp 01-Presentations/active/nefin-beauty-sunum.md --pdf
```

Websiteler (Node.js gerekir, ek paket gerekmez):

```
node scripts/build-site.js
```

`02-Websites/projects/` altındaki (alt klasörler dahil) `type: website` notlarını `02-Websites/dist/` altına HTML olarak derler. Marka brief'inde `slug` eşleşiyorsa paletteki zemin/metin renklerini CSS değişkeni olarak sayfaya yazar.

Instagram profil önizlemesi (yayınlamadan önce feed'i görmek ve müşteriye göstermek):

```
node scripts/instagram-studio.js nefin-beauty     # stüdyo: 127.0.0.1:4180
node scripts/build-instagram.js nefin-beauty      # müşteri dosyası: 04-Sosyal-Medya-Icerik/dist/
```

Stüdyoda görsel **ve videoları** (jpg · png · webp · mp4 · mov) telefon önizlemesine sürükle → `03-Assets/images/<slug>/instagram/` altına yazılır, sıra/caption/tarih `04-Sosyal-Medya-Icerik/<slug>/instagram-feed.md` notunda tutulur. Logoyu değiştirmek için önizlemedeki avatara tıkla ya da üstüne dosya bırak. Videolara ffmpeg ile otomatik poster karesi üretilir (`<ad>-poster.jpg`), böylece ızgarada anında görünürler; export'ta videolar 1080p'ye sıkıştırılır, ses korunur. Izgarada sürükleyerek sırala; bir gönderiye tıklayınca tek gönderi görünümü açılır (video **sesiyle** oynar, altında sonraki gönderiler akar). Takvim sekmesinde yayın gününü belirle. "Müşteri dosyası üret" tek dosya HTML çıkarır: görseller gömülü, internet gerekmez, WhatsApp/e-posta ile gönderilir. Not Obsidian'dan da düzenlenebilir; stüdyo açıkken dışarıdan değişiklik olursa üzerine yazmaz, uyarır.

Vault kontrolü:

```
node scripts/vault-check.js
```

Eksik frontmatter alanı, `client` olup marka brief'i olmayan not, 90 MB üstü dosya ve promptu kaydedilmemiş (`❓`) log satırlarını listeler.

## Ağır dosyalar

100 MB üstü dosyalar (orijinal Keynote, ham video, PSD) repoya girmez → Google Drive; yöntem `99-Dashboard/bulut-depolama.md`.

## Çapraz bağlantı

Her notun frontmatter'ında `related` alanı var; müşteri brief'ine `"[[00-Musteriler/<slug>/marka-brief]]"` ekle. Templater şablonları bunu otomatik yazar.
