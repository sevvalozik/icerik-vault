---
name: instagram-onizleme
description: Bir müşterinin yayınlanmamış Instagram gönderilerini gerçek profil görünümünde önizler ve müşteriye gönderilecek tek dosya HTML üretir. Kullanım - /instagram-onizleme <musteri-slug> [--export] . Feed önizlemesi, ızgara planı, "bu gönderi feed'de nasıl durur", içerik takvimi ve müşteri onay dosyası isteklerinde kullan. İçerik (caption/görsel) ÜRETMEZ.
---

# /instagram-onizleme

Argümanlar: `<musteri-slug>` (örn. `nefin-beauty`), opsiyonel `--export` (sadece müşteri dosyasını derle, stüdyoyu açma).

## Ne yapar / yapmaz

- **Yapar:** kullanıcının verdiği görsel ve videoları profil ızgarasında gösterir, sıralar, caption/tarih/durum alanlarını saklar, takvime yerleştirir, tek dosya HTML üretir. Tek gönderi görünümünde video sesiyle oynar.
- **Yapmaz:** caption, hashtag, görsel veya kampanya fikri üretmez. Metin gerekiyorsa `/icerik-paketi`'ne yönlendir. Takipçi sayısı gibi gerçek verileri **uydurma** — kullanıcıdan al, bilinmiyorsa 0 bırak.

## Adımlar

1. `00-Musteriler/<slug>/marka-brief.md` oku (müşteri adı, palet, ton, yasaklar). Brief yoksa önce onu aç — vault kuralı.
2. `04-Sosyal-Medya-Icerik/<slug>/instagram-feed.md` var mı bak.
   - Yoksa: `_templater/Yeni Instagram Feed.md` yapısında oluştur ya da stüdyoyu açıp ilk kaydı oradan yaptır.
   - Varsa: gönderi sayısını, eksik caption/tarih alanlarını raporla.
3. Medya (jpg/png/webp/mp4/mov) `03-Assets/images/<slug>/instagram/` altında olmalı; logo/avatar da aynı yere yazılır (önizlemedeki avatara tıkla). Kullanıcı başka klasörden dosya verdiyse yolunu not düş, kopyalamayı kullanıcıya bırak (stüdyoya sürükleyince zaten oraya yazılır).
4. Stüdyoyu başlat: `node scripts/instagram-studio.js <slug>` → tarayıcıda açılır. Sunucu arka planda kalır; kullanıcıya adresi söyle (`http://127.0.0.1:4180/?slug=<slug>`).
5. Videolar: yüklenirken `<ad>-poster.jpg` üretilir (ffmpeg gerekir; yoksa ızgarada `<video>` elemanına düşer, yavaş görünebilir). Export'ta 1080p/CRF 28/AAC'ye sıkıştırılır — ses korunur, dosya ~3× küçülür.
6. `--export` verildiyse (veya kullanıcı "müşteriye göndereceğim" dediyse): `node scripts/build-instagram.js <slug>` → `04-Sosyal-Medya-Icerik/dist/<slug>-instagram.html`. Dosya boyutunu ve eksik görselleri raporla. 20 MB üstündeyse `--status=planlandi,yayinlandi` ile daralt.
7. `node scripts/vault-check.js` çalıştırıp kırık görsel yolu var mı bak (6. bölüm).

## Gönderi alanları

`- görsel:` · `- poster:` (video ilk karesi, ffmpeg ile otomatik) · `- tür:` (post/reels/carousel) · `- ek görseller:` (carousel) · `- tarih:` · `- durum:` · `- begeni:` · `- yorum:` · `- alt:` · `- begenen:` (facepile satırı: "X ve diğer kişiler beğendi") · `- yorum yazan:` + `- yorum metni:` (tek gönderi görünümündeki üst yorum) · `> ` ile caption. **Beğeni/yorum sayıları ve isimler uydurulmaz**, kullanıcıdan gelir.

## Kurallar

- Feed notunu elle yeniden yazma; `scripts/lib/feed-note.js` üzerinden oku/yaz — `## Gönderiler` dışındaki bölümler kullanıcıya aittir, korunur.
- Stüdyo açıkken nota dışarıdan yazma: sürüm kilidi (409) devreye girer ve kullanıcının sekmesindeki değişiklikler çakışır. Önce kullanıcıdan sekmeyi kaydetmesini/kapatmasını iste.
- Yayınlanmış gönderilerin sırasını değiştirme (stüdyodaki "Yayınlananları kilitle" kutusu bunun içindir).
