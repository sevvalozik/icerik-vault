---
tags: [humentis, site, moc]
olusturma: 2026-09-29
---

# Humentis Site Planı

> [!summary] Özet
> Site main kodu (d185c77) ve canlı API ile doğrulandı (30.09–02.10.2026). Tam rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]] (44/100).
> 1. **Randevu altyapısı çalışıyor ama dil ve form sorunlu.** Uzman kartındaki "Randevu al" penceresi her uzmanda ~860 açık saat gösteriyor, ödeme yok. Sorunlar: "talep" ↔ "oluşturuldu" çelişkisi, çakışan gün sonu seansı, 11 kararlık form, linksiz eski `/randevu/<slug>` sayfası.
> 2. **İlk açılışta gecikme.** 4,8 sn logo animasyonu (ekip kararı: kalıyor), ardından içeriği kilitleyen tam ekran çerez penceresi.
> 3. **Ara/WhatsApp geç görünüyor.** Bar ancak animasyon ve çerez kararından sonra çıkıyor; ana sayfada ve header'da telefon yok.
> 4. **Güven vaatleri canlıda karşılanmıyor.** "Her uzmanın kimliği kontrol edilir" (18 uzmanın 10'unda kayıt boş, profillerde doğrulama yok), `/kriz-destegi` ana sayfayı açıyor, SSS'de "Prototip aşamasında…" metni. Ziyaretçi sitede hiç fiyat görmüyor.
> 5. **Ölçüm yok.** GA4/Ads dönüşümü yok; randevu kaydında kaynak alanı yok. (Birinci taraf ziyaret kaydı var, randevuya bağlanmıyor.)
> 6. **Botlar sayfa ayırt edemiyor.** Ham HTML'de her sayfa aynı ve boş, canonical'lar ana sayfaya işaret ediyor. Hizmet sayfası yok, uzman profillerine link yok.

## Öncelik sırası
| # | Görev | Öncelik | Tahmini süre | Son tarih |
|---|---|---|---|---|
| 1 | [[P0-01 Randevu akisi\|Randevu akışı: dil, çakışma, form]] | P0 | 1–2 gün + karar | 2026-10-10 |
| 2 | [[P0-02 Acilis animasyonu\|Açılış animasyonu (4,8 sn)]] | karar: kalıyor | — | — |
| 3 | [[P0-03 Cerez penceresi\|Çerez penceresi içeriği kilitliyor]] | P0 | 2–3 saat | 2026-10-01 |
| 4 | [[P0-04 Ara ve WhatsApp butonlari\|Ara / WhatsApp ilk ekranda]] | P0 | 2–4 saat | 2026-10-01 |
| 5 | [[P0-05 Fiyat ve prototip metni\|Ücret bilgisi ve prototip metni]] | P0 | 1 saat + fiyat kararı | 2026-10-03 |
| 6 | [[P0-06 Google tag ve donusumler\|Google etiketi ve dönüşümler]] | P0 | 0,5–1 gün | 2026-10-02 |
| 7 | [[P1-07 Prerender ve meta\|Prerender + route bazlı meta/canonical]] | P1 | 2–4 gün | 2026-10-10 |
| 8 | [[P1-08 Hizmet landing sayfalari\|Hizmet landing page'leri]] | P1 | 3–5 gün (içerik dahil) | 2026-10-10 |
| 9 | [[P1-09 Uzman profil sayfalari\|Uzman profil sayfaları (18)]] | P1 | 1–2 gün | 2026-10-10 |
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
- [[seo-dongusu]] — P1-07/P1-10/P0-06 bitince uygulanacak haftalık SEO döngüsü (Humentis uyarlaması notun sonunda)
- [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]] — ai-marketing-claude paketinin tamamıyla (5 alt ajan + betikler), kod ve canlı API ile doğrulanmış denetim, 44/100 (02.10) · PDF: humentis-pazarlama-denetimi-r4.pdf

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
