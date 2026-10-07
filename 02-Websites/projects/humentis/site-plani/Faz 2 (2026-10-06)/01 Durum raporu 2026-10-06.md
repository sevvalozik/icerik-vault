---
tags: [humentis, site, durum]
tarih: 2026-10-06
---

# Durum raporu (6 Ekim 2026)

> [!info] Bu taramanın yöntemi ve sınırı
> - Sitenin **JS çalışmadan dönen ham HTML'i** okundu: Google'ın ilk taramada, AI botlarının ise her zaman gördüğü hâl.
> - Sitemap, robots.txt, 40'a yakın sayfa, eski URL'ler ve olmayan bir URL tek tek istendi.
> - **Görülemeyenler:** JS davranışları (açılış animasyonu, çerez penceresi, sabit butonlar), `/randevu/` takvimi, script etiketleri (Google tag, schema). Bunlar [[F2-02 Canlida dogrulanacaklar]] notunda.
> - Google Ads, İşletme Profili ve admin panel verisi bu turda gelmedi.

## Bir haftada yapılanlar (doğrulandı)
- **Ön-render:** kontrol edilen 30'dan fazla sayfanın ham HTML'inde özgün title, description, canonical ve gövde metni var. Geçen hafta her sayfa aynı boş kabuktu.
- **8 hizmet sayfası:** `/ankara-psikolog`, `/yetiskin-danismanligi`, `/cocuk-ergen-danismanligi`, `/cift-aile-danismanligi`, `/sinav-kariyer-danismanligi`, `/psikolojik-testler`, MOXO ve WISC-IV alt sayfaları.
- **18 uzman profili:** temiz `ad-soyad` slug'ları, eski slug'lar yeni adrese yönleniyor, kartlar gerçek link.
- **İlk ekran (ham HTML'de):** header'da tıklanabilir telefon; hero'da "WhatsApp'tan yazın" ve "Bizi arayın"; Podcast bandı yok.
- **Adres** her sayfada "2159. SK." (İşletme Profili ile aynı). Sitede fiyat ve "prototip" metni yok.
- **Sitemap** 43 URL, yeni sayfalarda `lastmod` var. Olmayan URL gerçek **404** dönüyor.
- **Kariyer** sayfasında "Başvurular yalnızca form ve e-posta ile alınır" notu var.
- Bir rehber yazısı yayında: `/ankara-psikolog-secimi`.

## Görev durumu
| Görev | Durum | Not |
|---|---|---|
| [[P0-01 Randevu akisi bos takvim]] | ❓ doğrulanacak | Profil SSS'leri hâlâ "Randevu al düğmesiyle gün ve saat seçin" diyor |
| [[P0-02 Acilis animasyonu]] | ❓ doğrulanacak | JS davranışı |
| [[P0-03 Cerez penceresi]] | ❓ doğrulanacak | JS davranışı |
| [[P0-04 Ara ve WhatsApp butonlari]] | ✅ büyük ölçüde | Eksik: sayfa bazlı WhatsApp kaynak kodu |
| [[P0-05 Fiyat ve prototip metni]] | ✅ görünen kısımda | `/randevu/` görülemedi |
| [[P0-06 Google tag ve donusumler]] | ❓ doğrulanacak | Doğrulama meta etiketi yok; script'ler bu yöntemle görünmüyor |
| [[P1-07 Prerender ve meta]] | ✅ | Bir tutarsız yanıt görüldü, doğrulanacak: [[F2-01 Uzmanlar sayfasi eski kabuk]] |
| [[P1-08 Hizmet landing sayfalari]] | ✅ | Güçlendirme: [[F2-04 Hizmet sayfalarini guclendir]] |
| [[P1-09 Uzman profil sayfalari]] | ✅ / ⚠️ | Eksikler: [[F2-03 Uzman profili eksikleri]] |
| [[P1-10 Sitemap Search Console Bing]] | ⚠️ | Sitemap tamam; Search Console/Bing bilinmiyor → [[F2-08 Olcum ve indeksleme]] |
| [[P2-11 Schema ve NAP]] | ⚠️ | Adres düzeldi; schema görülemedi; dizinlerde çift adres |
| [[P2-12 Icerik ve GEO]] | ⚠️ başladı | 1 rehber var; `/icerik` boş → [[F2-05 Icerik kumesi]] |
| [[P2-13 Kariyer sayfasi ve telefon hatti]] | ✅ | |
| [[P2-14 Mevzuat kontrolu]] | ❌ açık | Yorumlar ana sayfada; biyografilerde "terapi/tedavi/hasta" |
| [[P3-15 Soft 404]] | ✅ | |
| A1–A3, G1, O1 | ❓ | Veri gelmedi → [[F2-09 Ads guncelleme]], [[F2-07 Harita yorum motoru]] |

## Faz 2 görevleri
| # | Görev | Öncelik |
|---|---|---|
| 1 | [[F2-01 Uzmanlar sayfasi eski kabuk]] | P0 |
| 2 | [[F2-02 Canlida dogrulanacaklar]] | P0 |
| 3 | [[F2-08 Olcum ve indeksleme]] | P0 |
| 4 | [[F2-09 Ads guncelleme]] | P0 |
| 5 | [[F2-03 Uzman profili eksikleri]] | P1 |
| 6 | [[F2-04 Hizmet sayfalarini guclendir]] | P1 |
| 7 | [[F2-05 Icerik kumesi]] | P1 |
| 8 | [[F2-06 Otorite ve dizinler]] | P1 |
| 9 | [[F2-07 Harita yorum motoru]] | P1 |
| 10 | [[F2-10 Yasal sayfalar ve galeri]] | P2 |

Yol haritası: [[Birinci sira plani]] · Rakip kıyası: [[R2 Rakip kiyasi 2026-10-06]]

## Güncelleme (7 Ekim 2026)

Faz 2 bulguları canlıda yeniden ölçüldü; koddan çözülebilenler düzeltilip yayına alındı (commit `5ac6cb5`, `74503c4`). Ayrıntı ve kanıtlar: [[site-plani-faz2-uygulama-2026-10-07]].

| Görev | 6 Ekim | 7 Ekim |
|---|---|---|
| [[F2-01 Uzmanlar sayfasi eski kabuk]] | ❓ | ✅ 20/20 doğru; uygulama ekranlarında canonical yok, hata olursa 503 + noindex |
| [[F2-02 Canlida dogrulanacaklar]] | ❓ | ⚠️ Çerez ✅, takvim ✅, görünen = ham HTML ✅; animasyon ❌ (ekip kararı, ~5,5 sn); Google etiketi ❌ (kimlik + KVKK bekliyor) |
| [[F2-03 Uzman profili eksikleri]] | yapılacak | ⚠️ Yer tutucu ✅, 18 title ✅, kişiye özgü SSS ✅, alan listesi kısaltıldı (görünümde); biyografi ve mevzuat uzman/hukukta |
| [[F2-04 Hizmet sayfalarini guclendir]] | yapılacak | ⚠️ WhatsApp kodları ✅, MOXO açıklaması ✅, kaynak linki zaten vardı; yazar, ücret, test derinliği, saat/kat, fotoğraf karar/içerik bekliyor |
| [[F2-05 Icerik kumesi]] | yapılacak | ⚠️ `/icerik` rehberi listeliyor ve indekste ✅; 12 yazı uzmanlarda (4 taslak hazır) |
| [[F2-06 Otorite ve dizinler]] | yapılacak | Envanter hazır; site dışı iş |
| [[F2-07 Harita yorum motoru]] | yapılacak | Site dışı iş |
| [[F2-08 Olcum ve indeksleme]] | yapılacak | ⚠️ Search Console doğrulaması var (DNS + HTML dosyası); dizine ekleme istekleri bekliyor; IndexNow ✅; hız ölçüldü (LCP 2,2–3,3 sn) |
| [[F2-09 Ads guncelleme]] | yapılacak | Hesap erişimi yok; `/uzmanlar` site bağlantısı için hazır |
| [[F2-10 Yasal sayfalar ve galeri]] | yapılacak | ⚠️ Yasal metinler ✅, galeri görselleri ✅, takma adresler zaten 301; saat/kat kararı ve 2+ yeni fotoğraf bekliyor |

**Düzeltme (6 Ekim raporuna):** "WhatsApp kaynak kodu eksik" bulgusu yalnız ham HTML için geçerliydi; React tarafında kodlar zaten çalışıyordu. Artık ikisi aynı.

