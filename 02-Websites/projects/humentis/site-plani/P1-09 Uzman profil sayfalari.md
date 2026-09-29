---
tags: [humentis, site, p1, seo, geo]
oncelik: P1
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "1–2 gün"
son_tarih: 2026-10-10
bagli:
  - "[[P1-07 Prerender ve meta]]"
  - "[[A1 Ads marka grubu]]"
  - "[[P2-12 Icerik ve GEO]]"
---

# P1-09 · Uzman profil sayfaları (17 uzman)

> [!warning] Sorun
> - `/uzmanlar`'da profiller `<button>`; `<a href>` yok. Google profil sayfalarını keşfedemiyor.
> - Kod `/uzmanlar/<slug>` route'unu destekliyor, ama bu sayfalara link de sitemap kaydı da yok.
> - İnsanlar psikoloğu adıyla arıyor: reklam arama terimlerinin 524'ünden 177'si kişi adı. Kendi uzmanlarımızın adları da geçiyor ("elif silav", "aybala görkem polat").
> - Slug'lar tutarsız: `psikolog-muge-ertugrul`, `uzm-klinik-psk-burcu-kayacan`, `klinik-psk-solmaz-senyuz`, `psik-dan-baris-can-kolcak`, `elif-silav`…

## Yapılacaklar
1. Slug standardı `ad-soyad` olsun (ör. `burcu-kayacan`); eski slug'lar 301 ile yönlensin.
2. Kartlar `<a href="/uzmanlar/<slug>">` olsun; tıklama davranışı aynı kalabilir.
3. **Profil sayfası (prerender'lı)**
   - title: "Ad Soyad — Unvan | Humentis Ankara"
   - H1 ad soyad; altında unvan, uzmanlık alanları, eğitim ve görüşme biçimi
   - Ara/WhatsApp ve talep formu
   - WhatsApp hazır metni: `Merhaba, <Ad Soyad> ile görüşmek istiyorum. (web-uzman)`
4. **Person schema:** `name`, `jobTitle`, `worksFor` (→ `https://humentis.com.tr/#organization`), `image`, `knowsAbout`, varsa `sameAs` (kişisel site, dizin profilleri).
5. Profilleri sitemap'e ekle.

## Kabul kriterleri
- [ ] 17 profil ham HTML'de içerikle geliyor ve sitemap'te
- [ ] Tüm slug'lar `ad-soyad` formatında; eski URL'ler 301 veriyor
- [ ] Schema validator Person'ı hatasız okuyor
- [ ] Her profilde Ara/WhatsApp ve talep formu var
