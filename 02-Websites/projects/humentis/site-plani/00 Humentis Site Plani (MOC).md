---
tags: [humentis, site, moc]
olusturma: 2026-09-29
---

# Humentis Site Planı

> [!summary] Özet
> Google Ads'ten gelen 175 tıklama yaklaşık 1 temasa dönüştü. Sebep reklam değil, site. 29.09.2026 gecesi yapılan taramada bulunanlar ([[Kanit - Site taramasi 2026-09-29]]):
> 1. **Randevu takvimi boş.** 17 uzmanın hiçbirinde ileri tarihli saat yok; "Randevu al" butonu çıkmaz sokağa gidiyor. ⚠️ *Düzeltme 30.09: tarama `/randevu/<slug>` sayfasına ve eski `availability` alanına bakmış; bu sayfaya sitede link yok. Gerçek akış uzman kartındaki "Randevu al" penceresi ve saatleri `open-slots` API'sinden alıyor. Bkz. [[P0-01 Randevu akisi bos takvim]].*
> 2. **Her açılışta ~5 sn gecikme.** 4,8 sn logo animasyonu, ardından içeriği kilitleyen tam ekran çerez penceresi geliyor.
> 3. **Ara/WhatsApp geç görünüyor.** Butonlar ancak çerez seçiminden sonra çıkıyor; ana sayfa metninde telefon yok.
> 4. **Fiyat ve metin yanlış.** Sitede ₺1.450–2.100 fiyat var (telefonda ₺3.000+ söyleniyor) ve randevu sayfasında canlıda "prototip" yazıyor. ⚠️ *Düzeltme 30.09: fiyat ve "prototip" yalnızca linksiz `/randevu/<slug>` sayfasında; normal ziyaretçi sitede fiyat görmüyor. Bkz. [[P0-05 Fiyat ve prototip metni]].*
> 5. **Ölçüm yok.** Sitede Google etiketi yok; dönüşüm ölçülemiyor.
> 6. **Botlar sayfa ayırt edemiyor.** Ham HTML'de her sayfa aynı ve boş, canonical'lar ana sayfaya işaret ediyor. Hizmet sayfası ve bağlantılı uzman profili yok.

## Öncelik sırası
| # | Görev | Öncelik | Tahmini süre | Son tarih |
|---|---|---|---|---|
| 1 | [[P0-01 Randevu akisi bos takvim\|Randevu akışı: boş takvim]] | P0 | 0,5–1 gün (geçici çözüm 15 dk) | 2026-10-01 |
| 2 | [[P0-02 Acilis animasyonu\|Açılış animasyonu (4,8 sn)]] | P0 | 1 saat | 2026-10-01 |
| 3 | [[P0-03 Cerez penceresi\|Çerez penceresi içeriği kilitliyor]] | P0 | 2–3 saat | 2026-10-01 |
| 4 | [[P0-04 Ara ve WhatsApp butonlari\|Ara / WhatsApp ilk ekranda]] | P0 | 2–4 saat | 2026-10-01 |
| 5 | [[P0-05 Fiyat ve prototip metni\|Fiyatlar ve prototip metni]] | P0 | 1 saat + fiyat kararı | 2026-10-01 |
| 6 | [[P0-06 Google tag ve donusumler\|Google etiketi ve dönüşümler]] | P0 | 0,5–1 gün | 2026-10-02 |
| 7 | [[P1-07 Prerender ve meta\|Prerender + route bazlı meta/canonical]] | P1 | 2–4 gün | 2026-10-10 |
| 8 | [[P1-08 Hizmet landing sayfalari\|Hizmet landing page'leri]] | P1 | 3–5 gün (içerik dahil) | 2026-10-10 |
| 9 | [[P1-09 Uzman profil sayfalari\|Uzman profil sayfaları (17)]] | P1 | 1–2 gün | 2026-10-10 |
| 10 | [[P1-10 Sitemap Search Console Bing\|Sitemap + Search Console + Bing]] | P1 | 2 saat | 2026-10-06 |
| 11 | [[P2-11 Schema ve NAP\|Schema ve adres tutarlılığı]] | P2 | 2 saat | 2026-10-20 |
| 12 | [[P2-12 Icerik ve GEO\|İçerik ve GEO]] | P2 | sürekli (ilk 10 yazı 2 hafta) | 2026-10-20 |
| 13 | [[P2-13 Kariyer sayfasi ve telefon hatti\|Kariyer sayfası ve telefon hattı]] | P2 | 1 saat | 2026-10-06 |
| 14 | [[P2-14 Mevzuat kontrolu\|Site metinleri için mevzuat kontrolü]] | P2 | karar | 2026-10-10 |
| 15 | [[P3-15 Soft 404\|Soft 404]] | P3 | 2 saat | 2026-10-20 |

**Sıra mantığı**
- **P0:** reklam parası şu an bu yüzden boşa gidiyor. Bunlar bitmeden reklam bütçesi artırılmaz.
- **P1:** Kalite Puanı (açılış sayfası notu) ile SEO/GEO temeli.
- **P2:** büyüme ve hijyen.
- **P3:** teknik temizlik.

## Diğer ekipler
- [[A1 Ads marka grubu]]: Ads ekibi
- [[A2 Ads donusum ve ayarlar]]: Ads ekibi
- [[G1 Google Isletme Profili]]: kurucular / Ahsen
- [[O1 Operasyon musaitlik ve kayit]]: Ahsen / uzmanlar

## Araştırma
- [[R1 Rakip analizi CAN Psikoloji]]
- [[R2 ai-marketing-claude denemesi]] — pazarlama paketiyle hızlı analiz ve ana sayfa metin önerileri (30.09)
- [[seo-dongusu]] — P1-07/P1-10/P0-06 bitince uygulanacak haftalık SEO döngüsü (Humentis uyarlaması notun sonunda)
- [[R3 Pazarlama denetimi 2026-09-30]] — tam pazarlama denetimi, 39/100; site planını doğruluyor, planda olmayan bulgular ve öncelik değişiklikleri (P1-07 → P0, P3-15 → P1) · veri: [[R3 veri - 2026-09-30]]

## Her görev için "bitti" tanımı
- Mobilde test edildi: 375×812, Chrome DevTools "Fast 4G" + CPU 4x yavaşlatma.
- Kanıt (ekran görüntüsü ya da curl çıktısı) nota eklendi, `durum` alanı güncellendi.
- URL değiştiyse Ads ekibine haber verildi ([[A2 Ads donusum ve ayarlar]]).

## Dataview (eklenti kuruluysa)
```dataview
TABLE oncelik AS "Öncelik", durum AS "Durum", sahip AS "Sahip", son_tarih AS "Son tarih"
FROM #humentis
WHERE oncelik
SORT oncelik ASC, file.name ASC
```
