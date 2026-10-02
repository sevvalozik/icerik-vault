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

# P0-05 · Ücret bilgisi ve "prototip" metni

> [!danger] Sorun
> - Ziyaretçi sitede hiçbir yerde ücret görmüyor (ana sayfa, /uzmanlar, profiller, /hakkimizda, /iletisim tarandı). Fiyat yalnız linksiz eski `/randevu/<slug>` sayfasında. API'deki ücretler: ₺1.450 (çocuk gelişimi, 45 dk), ₺1.650, ₺1.800, ₺1.850, ₺1.950, ₺2.100 (50 dk).
> - Seans süresi, ücret mantığı ve iptal/değişiklik kuralı da hiçbir yerde yazmıyor.
> - SSS'te "Randevumu iptal edebilir miyim?" cevabı canlıda: "Prototip aşamasında 24 saat öncesine kadar ücretsiz iptal gösterilir…" (`apps/web/src/data/institution.ts:345`; FAQPage schema'sına da giriyor).
> - Telefonda söylenen ücretin ₺3.000+ olduğu bilgisi doğrulanamadı.

## Yapılacaklar
1. **Karar (kurucular): sitede ücret gösterilecek mi?** İncelenen 4 rakibin hiçbiri fiyat göstermiyor.
   - Evet → güncel liste ile birebir aynı, tek kaynaktan (hizmet tablosu).
   - Hayır → fiyat yazmadan kısa bir "Ücret ve görüşme koşulları" bloğu: seans süresi, ücretin nasıl öğrenileceği, iptal/değişiklik kuralı.
2. SSS'teki "Prototip…" cevabını değiştir: "İptal ve değişiklik koşulları randevunuz netleştirilirken sizinle paylaşılır." (kurum onaylı iptal politikası gelene kadar).
3. Linksiz `/randevu/<slug>` sayfası kaldırılınca fiyat ve "prototip" metni koddan da çıkar ([[P0-01 Randevu akisi]]).

> [!warning] Not
> Gösterilen ücretle telefonda söylenenin farklı olması güveni bozar ve tüketici mevzuatı açısından risk yaratır. "İlk seans ücretsiz" gibi teşvikler marka brief §7 gereği kullanılmaz.

## Kabul kriterleri
- [ ] Ücret kararı yazılı; sitede ya güncel liste ya da "ücret ve görüşme koşulları" bloğu var
- [ ] Build çıktısında ve API yanıtlarında "prototip" kelimesi yok (`grep -ri prototip dist/`)
- [ ] İptal politikası metni kurucular tarafından onaylanmış
