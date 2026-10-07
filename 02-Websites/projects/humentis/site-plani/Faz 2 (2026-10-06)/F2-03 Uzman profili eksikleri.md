---
tags: [humentis, site, p1, seo, faz2]
oncelik: P1
durum: kismen
sahip: site-ekibi + icerik
tahmini_sure: "1 gün"
son_tarih: 2026-10-13
bagli:
  - "[[P1-09 Uzman profil sayfalari]]"
  - "[[P2-14 Mevzuat kontrolu]]"
  - "[[F2-06 Otorite ve dizinler]]"
---

# F2-03 · Uzman profili eksikleri

18 profil yayında ve ham HTML'de içerikle geliyor. Kalan eksikler:

## Bulgular
1. **Kart özetinde yer tutucu.** `/uzmanlar` ve hizmet sayfalarındaki kartlarda "Profil bilgileri yakında güncellenecek." yazıyor: **Sena Şimşek, Ali Karaömerlioğlu, Beliz Kafalı**. Üçünün de profil sayfasında biyografi var; boş olan kart özet alanı.
2. **İnce profil.** Başak Kale: kart özeti yalnız unvan, biyografi ~85 kelime.
3. **Title şablonu tutarsız.**
   - "Nurşen Arıcı – Uzman Klinik Psikolog & Aile Danışmanı" (Ankara ve Humentis yok)
   - "Elif Silav – Kurucu Psikolog & Aile Danışmanı | Humentis" (Ankara yok)
   - Diğerleri: "Ad Soyad – Unvan, Ankara | Humentis"
4. **Şablon SSS.** Her profilde aynı 5–6 soru ("… hangi alanlarda çalışıyor?", "… nerede görüşme yapıyor?"). Kopya içerik değil ama katkısı düşük.
5. **Aşırı uzun alan listesi.** Ali Karaömerlioğlu profilinde 85 uzmanlık alanı sıralı.
6. **Mevzuat dili.** Biyografilerde "terapi", "tedavi", "hasta" ve tanı adları geçiyor (ör. Elif Silav: "terapi" 12, "tedavi" 2 kez). Artık Google'ın okuduğu HTML'de → [[P2-14 Mevzuat kontrolu]].
7. **Randevu cümlesi.** SSS'de "Bu sayfadaki 'Randevu al' düğmesiyle uygun bir gün ve saat seçebilir" yazıyor → [[F2-02 Canlida dogrulanacaklar]].

## Yapılacaklar
1. Üç uzmanın kart özetini doldur (1–2 cümle: kiminle, hangi konularda çalışır).
2. Title standardı: `Ad Soyad – Unvan, Ankara | Humentis`.
3. Her profile kişiye özgü 2 soru ekle (ör. çalıştığı yaş grubu, görüşme dili, kullandığı test).
4. Alan listelerini 10–12 maddeyle sınırla; tanı adları için kurucu/hukuk kararını uygula.
5. İnce biyografileri en az 150 kelimeye çıkar.
6. Person schema: `name`, `jobTitle`, `worksFor`, `image`, `alumniOf`, `knowsAbout`, `sameAs` (DoktorTakvimi / Doktorsitesi profilleri).

## Kabul kriterleri
- [ ] Sitede "yakında güncellenecek" ifadesi kalmadı
- [ ] 18 title aynı şablonda
- [ ] Her biyografi ≥150 kelime
- [ ] Schema validator 18 profilde Person'ı hatasız okuyor

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

| # | Bulgu | Durum |
|---|---|---|
| 1 | Kart özetinde yer tutucu | ✅ Sitede hiçbir yerde "yakında güncellenecek" yok. Özet yer tutucuysa kartta biyografinin ilk cümlesi gösteriliyor (ham HTML, React, `llms-full.txt`). **Kaynak hata da bulundu:** profil düzenleyicisi boş biyografiyi bu cümleyle önceden dolduruyordu; Sena Şimşek'in biyografisi bu cümleyle başlıyor. Düzenleyici düzeltildi, cümle gösterimde atılıyor. Panelden de silinmeli. Gerçek 1–2 cümlelik özetleri uzmanlar yazmalı: Sena Şimşek, Ali Karaömerlioğlu, Beliz Kafalı. |
| 2 | Başak Kale ince profil | ❓ İçerik uzmandan gelmeli (≥150 kelime). |
| 3 | Title şablonu | ✅ 18 profil `Ad Soyad – Unvan, Ankara \| Humentis`. Sığmayınca ikinci unvan düşer ("Elif Silav – Kurucu Psikolog, Ankara \| Humentis", "Nurşen Arıcı – Uzman Klinik Psikolog, Ankara \| Humentis"). |
| 4 | Şablon SSS | ✅ Kişiye özgü sorular yalnız gerçek veriden eklendi: "… hangi yaklaşımlarla çalışıyor?" (en az 2 yaklaşım girilmişse), "… hangi dillerde görüşme yapıyor?" (Türkçe dışında dil varsa), "… hangi psikolojik test eğitimlerini almıştır?" (sertifikalarda MOXO/WISC/MMPI/test geçiyorsa). Ör. Solmaz Şenyüz ve Aybala Görkem Polat 9 soru. Panelin tek varsayılan yaklaşımı soru üretmez. |
| 5 | Uzun alan listesi | ⚠️ Profilde ilk 12 alan görünür, kalanı "Diğer çalışma alanları (N)" altında (veri silinmedi). Asıl iş uzmanlarda, 10–12 odak alan seçimi: Ali Karaömerlioğlu 87, Elif Silav 68, Aybala Görkem Polat 51, Irmak Tara Sığırcı 42, Beliz Kafalı 27, Sena Şimşek 24, Elif Köden 21. |
| 6 | Mevzuat dili | ❓ Kurucu/hukuk kararı ([[P2-14 Mevzuat kontrolu]]). Biyografilere dokunulmadı. |
| 7 | Randevu cümlesi | ✅ Doğru: takvimde ileri tarihli saatler var ([[F2-02 Canlida dogrulanacaklar]] madde 3). |
| — | Person schema | ✅ `name`, `jobTitle`, `worksFor`, `image`, `alumniOf`, `knowsAbout`, `hasOccupation`, `sameAs` (yalnız kimliği kesin dış profiller) yayında. Rich Results Test ile tek tek doğrulanmadı. |

### Kabul kriterleri
- [x] Sitede "yakında güncellenecek" ifadesi kalmadı
- [x] 18 title aynı şablonda
- [ ] Her biyografi ≥150 kelime (uzman içeriği)
- [ ] Schema validator 18 profilde Person'ı hatasız okuyor (kod hazır; Rich Results Test ile kontrol edilecek)
