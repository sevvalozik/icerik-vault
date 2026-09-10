---
type: readme
tags: [meta]
---

# İçerik Vault — Kullanım Kılavuzu

Sunum ve website içeriklerini tek vault içinde, birbirine karışmadan yönetmek için kurulmuş yapı.

## Klasörler

- `00-Inbox/` — hızlı notlar, henüz kategorize edilmemiş
- `01-Presentations/` — sunumlar (`_templates`, `_themes`, `active`, `archive`)
- `02-Websites/` — website projeleri (`_templates`, `projects`, `snippets`, `dist` — build sonrası oluşur)
- `03-Assets/` — görseller, logolar
- `99-Dashboard/` — Dataview ile otomatik katalog sayfaları
- `_templater/` — Templater eklentisi için "Yeni Sunum" / "Yeni Website" komut şablonları
- `scripts/` — build otomasyonu (`build-site.js`)

## Kurulum (bir kereye mahsus)

1. Obsidian'da bu klasörü vault olarak aç: **Open folder as vault** → `IcerikVault` seç.
2. Ayarlar → Community plugins → **Dataview** ve **Templater** eklentilerini kur ve etkinleştir (Restricted mode'u kapatman gerekir).
3. Templater ayarlarında "Template folder location" alanına `_templater` yaz.
4. (Opsiyonel, sunumları .pptx/.pdf'e çevirmek için) Terminal'de: `npm install -g @marp-team/marp-cli`

## Yeni içerik oluşturma

- **Sunum**: Templater komut paletinden `Yeni Sunum` şablonunu çalıştır → müşteri adını gir → otomatik olarak `01-Presentations/active/` altına düşer.
- **Website**: aynı şekilde `Yeni Website` şablonunu çalıştır → `02-Websites/projects/` altına düşer.

Frontmatter'daki `type` alanı (`presentation` / `website`) Dataview sorgularının ve build script'lerinin dosyayı doğru tanıması için — silme.

## Dashboard

`99-Dashboard/sunum-katalogu.md` ve `99-Dashboard/website-katalogu.md` dosyaları tüm sunum/website notlarını durum, tarih, müşteri bilgisiyle otomatik listeler (Dataview eklentisi ile). `99-Dashboard/tema-katalogu.md` ise `01-Presentations/_themes/` altındaki tüm hazır temaları (theme-factory'den gelen 10 tema dahil) renk/kullanım alanı özetiyle listeler.

## Çıktı üretme

Sunumlar (Marp CLI kuruluysa):

```
marp 01-Presentations/active/*.md --pptx
marp 01-Presentations/active/*.md --pdf
```

Websiteler (Node.js gerekir, ek paket gerekmez):

```
node scripts/build-site.js
```

Bu komut `type: website` olan tüm notları `02-Websites/dist/` altına basit `.html` dosyaları olarak derler. Daha gelişmiş bir çıktı istersen (Astro/Hugo/Eleventy entegrasyonu gibi) `scripts/build-site.js` içindeki `simpleMarkdownToHtml` fonksiyonunu genişletebilir ya da `marked` gibi bir markdown kütüphanesi ekleyebilirsin.

## Çapraz bağlantı

Bir müşterinin hem sitesi hem sunumu varsa, ilgili notların frontmatter'ına ekle:

```yaml
related: ["[[musteri-a-landing]]"]
```
