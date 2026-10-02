---
tags: [humentis, site, p0, hiz]
oncelik: P0
durum: karar-verildi
sahip: site-ekibi
tahmini_sure: "1 saat"
son_tarih: 2026-10-01
bagli:
  - "[[P0-03 Cerez penceresi]]"
---

# P0-02 · Açılış animasyonu (4,8 sn)

> [!success] Ekip kararı (30.09.2026)
> Animasyon kalacak; bu görev uygulanmayacak. Bulgu kayıt için duruyor.

> [!danger] Sorun
> - Her tam sayfa yüklemesinde `page-transition` logo animasyonu oynuyor: `var gn=4800` → `durationMs`, `useState(!0)`. Yedek zamanlayıcı 7,3 sn.
> - Yalnız `prefers-reduced-motion: reduce` olan cihazlarda 280 ms'de kapanıyor.
> - Reklamdan gelen herkes içeriği görmeden önce ~5 sn logo izliyor; üstüne JS indirme süresi ekleniyor.
>
> Kod referansı: [[Kanit - Site taramasi 2026-09-29#Açılış animasyonu (kod)]]

## Yapılacaklar
1. İlk yüklemede animasyonu kaldır: bileşen hiç render edilmesin ya da state `false` başlasın.
2. İstenirse yalnız site içi sayfa geçişlerinde, en fazla 300 ms olarak kalsın.
3. Animasyonun görsellerini (`markArrivalTreeToHuman`, `markGradient`, `markWordmark`) ilk ekranda yükleme.

## Kabul kriterleri
- [ ] Soğuk açılışta (mobil emülasyon, Fast 4G, CPU 4x) H1 ve CTA'lar ≤2,5 sn'de görünür ve tıklanabilir
- [ ] PageSpeed Insights (mobil): LCP ≤2,5 sn, TBT <200 ms
- [ ] İlk yüklemede `.page-transition` DOM'da yok

## Test
- DevTools → Performance → "Fast 4G" + CPU 4x → kayıt.
- https://pagespeed.web.dev/ → `humentis.com.tr` → Mobil.
