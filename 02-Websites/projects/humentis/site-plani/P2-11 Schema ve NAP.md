---
tags: [humentis, site, p2, seo, yerel]
oncelik: P2
durum: yapilacak
sahip: site-ekibi + kurucular
tahmini_sure: "2 saat"
son_tarih: 2026-10-20
bagli:
  - "[[G1 Google Isletme Profili]]"
---

# P2-11 · Schema ve adres (NAP) tutarlılığı

> [!note] Durum
> - JSON-LD zaten var (`Organization + LocalBusiness + MedicalBusiness`, ad "Özel Humentis Aile Danışma Merkezi"). Temel iyi.
> - **Adres tutarsız:** sitede "2159 **CAD.** No: 4 İç Kapı No: 7", kurum kayıtlarında "2159. **Sk.**". Hangisi resmiyse (ruhsat / vergi levhası) her yerde o yazılmalı.
> - `MedicalBusiness` tipi: merkez Sağlık Bakanlığı kurumu değil, Aile ve Sosyal Hizmetler Bakanlığı ruhsatlı. `ProfessionalService` + `LocalBusiness` daha tutarlı.

## Yapılacaklar
1. Resmi adresi netleştir ve her yerde birebir aynı yaz: site footer, iletişim sayfası, schema, GBP, Instagram, dizinler.
2. Schema alanları:
   - `name`: ruhsattaki ad
   - `alternateName`: ["Humentis", "Humentis Psikoloji"]
   - `address`, `geo`, `telephone`, `openingHoursSpecification`, `url`
   - `sameAs`: Instagram, GBP linki, Facebook
3. `MedicalBusiness` → `ProfessionalService`.

## Kabul kriterleri
- [ ] Adres her kanalda karakteri karakterine aynı
- [ ] Schema validator hatasız; `sameAs` GBP linkini içeriyor
