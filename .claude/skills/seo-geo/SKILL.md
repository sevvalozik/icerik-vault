---
name: seo-geo
description: Bir müşteri sitesinde ileri seviye SEO + GEO + backlink çalışmasını kasadaki standarda göre yürütür (denetim → teknik düzeltme → schema → GEO → yerel/NAP → kişi adı aramaları → backlink planı → güvenli yayın → dizine ekleme). Kullanım - /seo-geo <musteri-slug> <site-url> [repo-yolu] . Yeni site yayına çıkmadan önce, devralınan sitede, "Google'da / ChatGPT'de çıkmıyoruz" şikâyetinde ve aylık kontrolde kullan.
---

# /seo-geo

Argümanlar: `<musteri-slug>` (örn. `humentis`), `<site-url>` (örn. `https://humentis.com.tr`), opsiyonel `<repo-yolu>` (kod değişikliği yapılacaksa; kod kasada değil, kendi reposunda).

## Adımlar (sırayı bozma)

1. **Marka brief'i oku:** `00-Musteriler/<slug>/marka-brief.md`. Yoksa dur ve kullanıcıya "önce Yeni Müşteri şablonuyla brief açılmalı" de. Çıkar: resmi ad, adres/telefon yazımı, yasak kelimeler (§4), yasal/hassas kurallar (§7), sektör (YMYL mi?).
2. **Standardı oku:** `02-Websites/_kutuphane/seo-geo/00-seo-geo-standardi.md` ve iş fazına göre ilgili notlar (01–09). Önceki rapor varsa `08-Raporlar/<slug>/` içindeki son SEO/GEO raporunu ve açık işlerini oku.
3. **Denetim (faz 0):** `01-teknik-seo.md` → "Denetim komutları" bölümündeki komutları çalıştır; ayrıca `site:` sonucu, marka adı ve (varsa) ekip üyelerinin ad aramaları, AI bot erişimi, Search Console doğrulama izi (`dig TXT`, `google*.html`). Google araması CAPTCHA çıkarırsa **atlatma**, kullanıcıya söyle.
4. **Rapor iskeleti:** `08-Raporlar/_templates/rapor-template.md` yapısında `08-Raporlar/<slug>/seo-geo-denetim-<YYYY-MM-DD>.md` (`type: arastirma`, `rapor_turu: seo`, `status: draft`). Bulgular tablosu kanıtla (komut çıktısı); standarttaki "Bitti kontrol listesi"ni rapora kopyala ve mevcut durumu işaretle.
5. **Uygulama (repo verildiyse):** standarttaki faz sırasıyla (1 teknik → 2 schema → 3 GEO → 4 yerel → 5 içerik → 6 kişi adları). Kurallar:
   - Tek karar noktası: başlık/açıklama/canonical/schema tek fonksiyondan; React ve sunucu HTML'i aynı kaynaktan.
   - Görünmeyeni işaretleme; doğrulanmamış iddia yazma; `sameAs` yalnız kimliği kesin profiller.
   - Brief yasak kelimeleri başlık, açıklama ve SSS'te de geçerli.
   - Her değişiklikten sonra testler + diff kapısı (`08-yayin-guvenligi.md`). Kayıpları kullanıcıya göster.
6. **Site dışı işler:** NAP tablosu (`05`), ekip dış profilleri ve kişi kartları (`04`, `06`), GEO listeleri (`03`) → raporda **sorumlu kişiyle** (müşteri, uzman, geliştirici) yapılacaklar listesi. Kişisel veri (telefon, e-posta, kişisel sosyal medya, yorum metni) rapora girmez.
7. **Yayın ve dizine ekleme:** yalnız kullanıcı açıkça onaylarsa (commit, push, canlıya alma, canlı veritabanı ayrı ayrı onay). Sonra IndexNow + Search Console "Dizine eklenmesini iste" + 3–7 gün sonra `site:` kontrolü (`09`).
8. **Kaydet ve raporla:** raporu tamamla (`status: tamamlandi` ya da açık işlerle `draft`), `99-Dashboard/arastirma-katalogu.md` otomatik listeler. Kullanıcıya: rapor yolu, yapılanlar, kanıtlar, açık işler (kimde), gerçekçi beklenti.

## Kurallar

- Uydurma yok: bilinmeyen adres, saat, fiyat, unvan → `❓ doğrulanacak`.
- Marka brief §4/§7 standarttan üstündür; uygulanmayan öneri raporda "marka kuralı gereği uygulanmadı".
- Link satın alma, sahte yorum, sahte forum girdisi önerilmez.
- Mevcut notları silme; sadece ekle. Kod kasaya konmaz (yalnız özet: `05-Kod-Projeleri/<slug>/`).
- Örnek tam uygulama: `08-Raporlar/humentis/seo-geo-uygulama-2026-10-05.md`.
