---
type: readme
tags: [kurallar, calisma-prensibi]
---

# Vault Çalışma Prensipleri

## 1. Kategorizasyon — projeler karışmasın

Her proje kendi klasöründe, kendi dosyalarıyla (görsel, readme, sunum, kod referansı vs.) durur. Örnek: Nefin Beauty'ye ait hiçbir dosya Hemshare (veya başka bir proje) klasörüyle karışmaz. Tip bazlı ana klasörler (01-Presentations, 02-Websites vs.) altında her proje kendi alt klasöründe izole tutulur.

## 2. Tasarım referansları: link ≠ görsel

Claude (Cowork/Design) ileride "şu tasarımdan bir site oluştur" gibi tek promptla iş yapacaksa, en güvenilir girdi:

- **Yazılı spec** — renk kodları, font, sayfa mimarisi, konumlandırma metni (zaten doğrudan okunabiliyor, en güçlü girdi)
- **Gerçek görsel dosyası** (screenshot, export edilmiş görsel) — vault'ta duruyorsa Claude direkt görebiliyor

**Harici linkler (Cosmed, Mobbin vs.) otomatik işlenmiyor** — Claude bir linke otomatik gidip tasarımı özümsemiş olmuyor, sadece not olarak duruyor. Linkler ilk aşamada ilham toplarken / manuel bakarken kullanılır, ama bir siteyi gerçekten üretmek istediğimizde o referansın **screenshot'unu** vault'a eklemek gerekir. Video kaydı yerine screenshot tercih edilir (video tasarım detayını Claude için güvenilir şekilde taşımıyor).

## 3. Yeni bir kod projesi eklerken kontrol listesi

Bir proje reposu incelendiğinde (Hemshare, Humentis gibi) şunların HEPSİ kontrol edilmeli, sadece logo yeterli değil:

- [ ] Proje özeti notu (tanım, tech stack, repo linki, ekip/branch bilgisi)
- [ ] Logo dosyaları (tüm varyasyonlar: mono/renkli/ters/zeminli)
- [ ] Renk/font/spacing tasarım tokenları (varsa `tokens.css` gibi dosyalar)
- [ ] **İkon seti** — hem ayrı SVG dosyası olarak duranlar hem de kod içinde (React component, path verisi vb.) tanımlı olup dosya olarak bulunmayanlar (bu durumda gerçek SVG dosyasına dönüştürülüp eklenmeli)
- [ ] Ekran görüntüleri / mockup'lar (varsa design/research klasörlerinde)
- [ ] İlgili dashboard kataloğuna otomatik yakalandığından emin ol (musteri-katalogu zaten genel; tip'e özel katalog yoksa oluştur)

Bu liste her yeni proje eklemesinde tekrar sorulmadan uygulanır.

## 4. Marka brief = tek doğruluk kaynağı

Her müşterinin `00-Musteriler/<slug>/marka-brief.md` dosyası vardır. Sunum, site, reels metni, AI video/görsel promptu — hepsi buradaki palet, font, ses tonu, ürün kartı ve yasaklardan beslenir. Bilinmeyen alan boş bırakılmaz, `❓ doğrulanacak` yazılır; AI (ve biz) onaysız bilgiyi gerçek gibi kullanmaz. Yeni müşteri: Templater → "Yeni Müşteri".

## 5. Her AI üretimi loglanır (prompt kaydı olmayan çıktı yoktur)

Üretilen her video/görsel için prompt, model/sürüm, ayar, seed (varsa), dosya yolu ve 1–5 puan ilgili brief'in **Üretim Logu** tablosuna ve müşterinin `video-log.md` / `gorsel-log.md` dosyasına yazılır. Nefin'in ilk 4 videosunun promptu kaydedilmediği için yeniden üretilemiyor — bu bir daha olmasın.

## 6. Yazı, logo ve ekran içeriği AI'ye bırakılmaz

AI video/görsel promptlarında `no text, no logos` standarttır. Yazı marka fontuyla, logo `03-Assets/logos/<slug>/` dosyasından, telefon/laptop ekranı gerçek ekran görüntüsüyle **post-prodüksiyonda** eklenir. Gerçek ürün varsa fotoğrafı yüklenir (image-to-video), kelimeyle tarif ettirilmez.

## 7. İsimlendirme

- Klasör ve dosya adları ASCII kebab-case: `nefin-beauty`, `c-vitamini-serum-kampanya-brief.md`. Türkçe karakter ve boşluk yok (Templater şablonları otomatik dönüştürür).
- Üretim dosyaları: `<slug>-<kampanya>-s01-v1.mp4` (s = shot, v = versiyon), keyframe görselleri `<slug>-<kampanya>-kf01.png`.
- Frontmatter'da `type`, `client`, `slug`, `status`, `date` zorunlu; `node scripts/vault-check.js` eksikleri listeler.

## 8. Üretim akışı

`Müşteri (marka brief)` → `Brief (video/görsel/sosyal şablonu)` → `Prompt (kütüphane formülü + kartlar)` → `Üretim (model)` → `Kalite kontrol + log` → `Post-prodüksiyon (yazı, logo, ses)` → `Yayın`. Cowork/Claude Code için adım adım talimat `CLAUDE.md` içinde.
