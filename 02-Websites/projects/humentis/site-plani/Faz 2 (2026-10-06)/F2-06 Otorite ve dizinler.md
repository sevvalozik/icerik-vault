---
tags: [humentis, p1, seo, geo, otorite, faz2]
oncelik: P1
durum: yapilacak
sahip: kurucular + icerik
tahmini_sure: "1 hafta + süreklilik"
son_tarih: 2026-10-20
bagli:
  - "[[P2-11 Schema ve NAP]]"
  - "[[F2-03 Uzman profili eksikleri]]"
  - "[[Birinci sira plani]]"
---

# F2-06 · Otorite: bahsedilme, bağlantı, dizinler

> [!danger] Durum
> - Web aramasında "Humentis Psikoloji", "Özel Humentis Aile Danışma Merkezi" ve alan adı için site dışı sonuç çıkmadı. Marka aramasında rakip sayfalar ve dizinler listeleniyor.
> - Benzer adlı "Hümanis Psikoloji" (İstanbul) sonuçlarda çıkıyor: ad karışma riski.
> - Sayfa içi işler büyük ölçüde tamam. "Ankara psikolog" gibi rekabetli aramada sıralamayı artık bu madde belirler.

## Elde hazır olanlar (bu hafta)
1. **psikologelifsilav.com.tr**
   - Humentis'in telefonunu (0552 898 95 45) kullanıyor ama Humentis'i hiç anmıyor; "Randevu Alın" DoktorTakvimi'ne gidiyor.
   - Yapılacak: ana sayfa ve iletişimde "Özel Humentis Aile Danışma Merkezi" adı, adresi ve `humentis.com.tr/uzmanlar/elif-silav` linki.
   - Not: meta description'ında "ankara en iyi psikolog" ve "depresyon tedavisi" geçiyor; mevzuat açısından ayrıca bakılmalı.
2. **DoktorTakvimi – Elif Silav** (38 yorum)
   - İki adres listeli: Çukurambar (Alternatif Plaza) ve Humentis ("2159. Sokak, Çam İş Merkezi 4/7").
   - Humentis birincil olsun; eski adres kullanılmıyorsa kaldırılsın.
3. **Doktorsitesi – Göknur Yaman** (23 yorum)
   - Humentis Psikoloji ve Trio Psikoloji iki ayrı adres olarak duruyor. Güncel değilse düzeltilsin.
4. **Envanter:** 18 uzmanın tüm dış profilleri tek tabloda.

| Uzman | Platform | URL | Adres doğru mu | Humentis geçiyor mu | Site linki | Yorum |
|---|---|---|---|---|---|---|
| Elif Silav | DoktorTakvimi | … | iki adres | evet | yok | 38 |
| Göknur Yaman | Doktorsitesi | … | iki adres | evet | yok | 23 |
| … | | | | | | |

## Kurum profilleri
- DoktorTakvimi ve Doktorsitesi'nde kurum sayfası ("Humentis Psikoloji")
- Bing Places, Apple Business Connect, Yandex Haritalar, Yelp, Foursquare
- Hepsinde aynı ad, adres, telefon ve site ([[P2-11 Schema ve NAP]])

## Gerçek bağlantı kaynakları
- Uzmanların üniversite / dernek / eğitim kurumu profilleri
- Kurumsal hizmet (çalışan destek programı) verilen kurumların iş ortağı sayfaları
- Yerel basın ve semt siteleri (açılış, atölye, seminer haberi)
- Podcast platformlarındaki açıklamalar, Instagram ve Facebook profil linkleri
- Uzmanların konuk olduğu yayınlar ve yazılar

> [!warning] Yapılmayacak
> Satın alınmış bağlantı, link değişim ağları, sahte dizin paketleri. Yeni bir alan adında bunlar kazanımdan çok risk getirir.

## Kabul kriterleri
- [ ] Elif Hoca'nın kişisel sitesinde Humentis adı ve linki var
- [ ] Envanter tablosu 18 uzman için dolu; her profilde Humentis adresi ve mümkünse site linki var
- [ ] 5 kurum profili açıldı ve bilgiler birebir aynı
- [ ] Ayda en az 4 yeni gerçek bahsedilme / bağlantı

## Durum (7 Ekim 2026)
Site dışı iş; kodla yapılabilecek kısmı yapıldı. Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

- **Envanter hazır:** 18 uzmanın dış mesleki profilleri, platform bazında adres/Humentis/link durumu (humentis reposu `docs/seo/uzman-web-varligi.md`, PDF raporu).
- **5 Ekim Google tespiti:** 9 uzmanın kendi Google İşletme kartı var. Kartların "Web sitesi" düğmesi çoğunlukla doktortakvimi/doktorsitesi'ne gidiyor; Humentis profiline çevrilmeli → [[seo-geo-uygulama-2026-10-05]].
- **Sitede:** Kimliği kesin dış profiller Person `sameAs` ile bağlı; kurum `employee` ile 17 profile bağlı.
