---
tags: [humentis, site, p1, seo, geo]
oncelik: P1
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "2 saat"
son_tarih: 2026-10-06
bagli:
  - "[[P1-07 Prerender ve meta]]"
---

# P1-10 · Sitemap, Search Console, Bing Webmaster

> [!warning] Sorun
> `sitemap.xml` 25 URL içeriyor: `lastmod` yok, hizmet ve uzman sayfaları yok.

## Yapılacaklar
1. **Dinamik sitemap.** ASP.NET'ten üretilsin (⚠️ *düzeltme 30.09: uygulama ASP.NET değil; build sırasında ya da Express API'den üretilmeli*): sabit sayfalar, hizmet sayfaları, 17 uzman ve makaleler; gerçek `lastmod` ile.
2. **Sitemap'e girmeyecekler:** `/giris`, `/admin`, `/sistem`, `/uzman/panel`, `/randevularim`.
3. **Search Console:** Domain mülkü (Cloudflare'de DNS TXT kaydı) → sitemap gönder.
4. **Bing Webmaster Tools:** Search Console'dan içe aktar → sitemap. Copilot ve kısmen ChatGPT araması Bing indeksinden besleniyor. Ek (30.09.2026): her yayında **IndexNow** bildirimi gönderilsin; ayrıntı [[seo-dongusu]].
5. **Cloudflare → Caching → Configuration → Crawler Hints:** açık olsun (IndexNow ile değişiklik bildirimi).

## Kabul kriterleri
- [ ] Search Console Domain mülkü doğrulandı; sitemap durumu "Başarılı"
- [ ] Bing Webmaster'da site doğrulandı; sitemap gönderildi
- [ ] Crawler Hints açık
- [ ] 30 gün içinde Search Console "Sayfalar" raporunda hizmet ve uzman sayfaları "Dizine eklendi"
