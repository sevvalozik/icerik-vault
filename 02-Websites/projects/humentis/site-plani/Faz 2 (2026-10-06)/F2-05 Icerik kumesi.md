---
tags: [humentis, site, p1, icerik, geo, faz2]
oncelik: P1
durum: kismen
sahip: icerik + uzmanlar
tahmini_sure: "6 hafta, haftada 2 yazı"
son_tarih: 2026-11-17
bagli:
  - "[[P2-12 Icerik ve GEO]]"
  - "[[R2 Rakip kiyasi 2026-10-06]]"
  - "[[F2-04 Hizmet sayfalarini guclendir]]"
---

# F2-05 · İçerik kümesi

> [!warning] Durum
> - `/icerik` ana menüde ama boş: "Uzmanlarımızın yazıları hazırlanıyor."
> - Yayındaki tek rehber (`/ankara-psikolog-secimi`, ~2.200 kelime) bu listede görünmüyor.
> - Rakip CAN'de ~200 yazı var; çoğu "ankara psikolog" varyasyonu.

## Yapılacaklar
1. `/icerik` sayfası mevcut rehberi listelesin. Yazı sayısı 3'ü geçene kadar menüde "İçerikler" yerine "Rehber" tek linki de olur.
2. Aşağıdaki 12 yazı, haftada 2 tempo ile:

| # | Yazı | Hedef arama | Bağlanacağı sayfa |
|---|---|---|---|
| 1 | Ankara'da psikolog ücretleri neye göre değişir? | ankara psikolog fiyatları / ücretleri | `/ankara-psikolog` |
| 2 | İlk psikolojik danışma görüşmesi nasıl geçer? | ilk seans nasıl geçer | `/yetiskin-danismanligi` |
| 3 | Psikolog, psikiyatrist ve psikolojik danışman farkı | psikolog mu psikiyatrist mi | `/ankara-psikolog` |
| 4 | Online mı, yüz yüze mi? | online psikolog ankara | `/yetiskin-danismanligi` |
| 5 | Çocuğum için ne zaman destek almalıyım? | çocuk psikoloğuna ne zaman gidilir | `/cocuk-ergen-danismanligi` |
| 6 | Pedagog ile çocuk psikoloğu arasındaki fark | pedagog mu çocuk psikoloğu mu | `/cocuk-ergen-danismanligi` |
| 7 | Oyun danışmanlığı nedir, kimlere uygulanır? | ankara oyun terapisi | `/cocuk-ergen-danismanligi` |
| 8 | Ergenlik döneminde ebeveyn danışmanlığı | ergen psikoloğu ankara | `/cocuk-ergen-danismanligi` |
| 9 | Çift danışmanlığı kaç görüşme sürer, tek başına başvurulur mu? | çift terapisi ankara | `/cift-aile-danismanligi` |
| 10 | Evlilik öncesi danışmanlık nedir? | evlilik öncesi danışmanlık | `/cift-aile-danismanligi` |
| 11 | Sınav kaygısıyla nasıl çalışılır? | sınav kaygısı psikolog ankara | `/sinav-kariyer-danismanligi` |
| 12 | Dikkat testi hangi durumda istenir? MOXO, CAS ve WISC ne zaman? | dikkat eksikliği testi ankara | `/psikolojik-testler` |

3. **Her yazıda:**
   - yazar = uzman (profil linki), yayın ve güncelleme tarihi
   - ilk iki cümlede doğrudan cevap
   - en az bir hizmet sayfasına ve bir uzman profiline link
   - kaynak (dernek, yönetmelik, kitap); reklam diliyle yazılmayacak
4. **Podcast bölümleri:** her bölüm için özet + döküm sayfası. Ses içeriği botlar için görünmez; metni görünür.
5. **Yapılmayacak:** `ankara-psikolog-3/4/5` tipi kopya sayfalar; şehir/ilçe adını değiştirip aynı metni çoğaltmak.

## Kabul kriterleri
- [ ] `/icerik` yayınlanan tüm yazıları listeliyor ve sitemap'te
- [ ] 12 yazı yayında; her biri yazar profilli ve bir hizmet sayfasına bağlı
- [ ] Search Console'da hedef aramalarda gösterim başlıyor ([[F2-08 Olcum ve indeksleme]])

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

- ✅ `/icerik` yayındaki rehberi ("Ankara'da Psikolog Nasıl Seçilir?") "Rehberler" başlığıyla listeliyor. Sayfa artık **indekse açık** ve sitemap'te (44 URL). Yeni rehberler otomatik listelenir.
- ❓ 12 yazı: uzman yazar gerekli. Repoda (`docs/seo/taslaklar/`) uzman onayı bekleyen 4 taslak var: DEHB'li çocuğun arkadaşlıkları, güvenmediğin için mi kontrol ediyorsun, sürekli yorgun hissetmek, panik atak. Bunlar tablodaki konularla birlikte kullanılabilir.
- ❓ Podcast dökümleri: bölüm metinleri gerekli.
