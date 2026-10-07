---
tags: [humentis, site, p0, olcum, seo, faz2]
oncelik: P0
durum: kismen
sahip: site-ekibi
tahmini_sure: "2–3 saat"
son_tarih: 2026-10-08
bagli:
  - "[[P1-10 Sitemap Search Console Bing]]"
  - "[[P0-06 Google tag ve donusumler]]"
  - "[[F2-02 Canlida dogrulanacaklar]]"
---

# F2-08 · Ölçüm ve indeksleme

> [!warning] Durum
> - HTML'de `google-site-verification` ya da `msvalidate.01` etiketi yok. DNS ile doğrulandıysa sorun değil; durum bilinmiyor.
> - Yeni sayfalar 3 Ekim'de yayına girdi. Google'ın bunları dizine alıp almadığını yalnız Search Console gösterir.

## Yapılacaklar
1. **Search Console:** Domain mülkü (DNS TXT) → `sitemap.xml` gönder.
2. **URL Denetimi → "Dizine eklenmesini iste":** 8 hizmet sayfası, `/uzmanlar`, `/ankara-psikolog-secimi` ve en çok aranan 5 uzman profili.
3. **Bing Webmaster Tools:** Search Console'dan içe aktar; Cloudflare'de Crawler Hints açık.
4. **Haftalık rapor (pazartesi):** Search Console → Performans:
   - sorgular: `ankara psikolog`, `çocuk psikoloğu ankara`, `moxo testi`, `wisc`, `çift terapisi ankara`, `humentis`
   - metrikler: gösterim, tıklama, ortalama konum
   - Sayfalar raporu: "Dizine eklendi" / "Taranmış – dizine eklenmemiş" sayıları
5. **Google etiketi ve dönüşümler:** [[F2-02 Canlida dogrulanacaklar]] madde 4.
6. **WhatsApp kaynak kodları:** sayfa bazlı hazır metin; Ahsen kodu temas tablosuna yazsın.
7. **Hız:** PageSpeed Insights (mobil) → ana sayfa, `/ankara-psikolog`, MOXO sayfası. Hedef LCP ≤2,5 sn.

## Kabul kriterleri
- [ ] Search Console ve Bing'de site doğrulandı; sitemap "Başarılı"
- [ ] 15 öncelikli URL için dizin isteği gönderildi; 2 hafta içinde "Dizine eklendi"
- [ ] Haftalık rapor tablosu açıldı
- [ ] 3 sayfanın PSI mobil sonucu nota eklendi

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

- **Search Console doğrulaması:** Var. DNS'te `google-site-verification` TXT kaydı ve web kökünde `google713975ecba590d66.html` (200). Mülkün hangi Google hesabında olduğu bulunmalı; sitemap gönderimi ve "Dizine eklenmesini iste" bekliyor.
- **Google dizini (5 Ekim):** `site:humentis.com.tr` yalnız 15 eski sayfa; uzman profillerinin hiçbiri yok → dizine ekleme istekleri öncelikli.
- **Bing:** `msvalidate.01` yok, Bing Webmaster durumu bilinmiyor.
- **IndexNow:** ✅ 44 URL 7 Ekim'de bildirildi (200).
- **Hız (madde 7):** PageSpeed API kotası dolu olduğundan aynı motorla (Lighthouse 12, mobil, simüle yavaşlatma) ölçüldü:

| Sayfa | Skor | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|
| `/` | 91 | 3,1 sn | 1,3 sn | 120 ms | 0,031 |
| `/ankara-psikolog` | 85 | 3,3 sn | 3,3 sn | 0 ms | 0,02 |
| `/psikolojik-testler/moxo-dikkat-testi` | 89 | 2,2 sn | 2,2 sn | 0 ms | 0,021 |

  LCP öğesi React'in çizdiği H1/giriş paragrafı. Gecikmenin ~2,2–2,7 sn'si "render delay": sunucu HTML'i hazır olsa da görünür içerik JS yüklenip React çizene kadar bekliyor. Buna açılış animasyonu eklenir ([[F2-02 Canlida dogrulanacaklar]] madde 1). Sunucu yanıtı (TTFB) 0,6–0,8 sn. LCP ≤2,5 için iki yol var: animasyon kararının gözden geçirilmesi ya da React'in sunucu HTML'ini devralması (hidrasyon). İkincisi daha büyük bir geliştirme.
