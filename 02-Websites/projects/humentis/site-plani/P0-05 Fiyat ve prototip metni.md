---
tags: [humentis, site, p0, guven]
oncelik: P0
durum: karar-bekliyor
sahip: kurucular + site-ekibi
tahmini_sure: "1 saat + fiyat kararı"
son_tarih: 2026-10-01
bagli:
  - "[[O1 Operasyon musaitlik ve kayit]]"
---

# P0-05 · Fiyatlar ve "prototip" metni

> [!warning] Düzeltme (30.09.2026, main kodu ve canlı API ile doğrulandı)
> - Fiyat (`BookingSummary`, `BookingPage`) ve "bu prototipte" metni yalnızca `/randevu/<slug>` sayfasında görünüyor; bu sayfaya sitede link yok. 30.09'da ana sayfa, /uzmanlar, /hakkimizda, /iletisim, /ik/kariyer ve uzman profili tarandı: hiçbirinde ₺ ya da "prototip" yok. Yani normal ziyaretçi şu an sitede hiç fiyat görmüyor.
> - "Prototip aşamasında 24 saat öncesine kadar ücretsiz iptal…" cümlesi ayrıca SSS verisinde (`institutionFaq`, FAQPage schema) duruyor; düzeltilmeli.
> - Geçerli kalan: sitede fiyat gösterilip gösterilmeyeceği kararı.

> [!danger] Sorun
> - Randevu sayfalarındaki fiyatlar: ₺1.450 (çocuk gelişimi, 45 dk), ₺1.650, ₺1.800, ₺1.850, ₺1.950, ₺2.100 (50 dk). Kaynak: `/api/specialists` → `offerings[].totalPrice`.
> - Telefonda söylenen ücret ₺3.000–4.000 aralığında. Siteden gelen kişi telefonda yaklaşık iki katını duyuyor.
> - Randevu özetinde canlıda şu metin var: "…ücretsiz iptal varsayımı **bu prototipte** gösterilmektedir; nihai kurum politikası ayrıca onaylanmalıdır."

## Yapılacaklar
1. **Karar (kurucular): sitede fiyat gösterilecek mi?**
   - Evet → güncel fiyat listesiyle birebir aynı olsun.
   - Hayır → fiyat alanını kaldır; yerine "Ücret bilgisi için arayın / yazın" koy.
2. "prototip" geçen tüm metinleri kaldır; kurumun onayladığı iptal politikasını yaz.
3. Fiyat tek kaynaktan yönetilsin: uzman başına değil, hizmet tablosundan.

> [!warning] Not
> Gösterilen fiyatla istenen fiyatın farklı olması hem güveni bozar hem tüketici mevzuatı açısından risk yaratır.

## Kabul kriterleri
- [ ] Sitedeki her fiyat güncel listeyle aynı ya da fiyat alanı tamamen kaldırılmış
- [ ] Build çıktısında ve API yanıtlarında "prototip" kelimesi yok (`grep -ri prototip dist/`)
- [ ] İptal politikası metni kurucular tarafından onaylanmış
