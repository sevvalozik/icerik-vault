---
tags: [humentis, site, p1, seo, kalite-puani]
oncelik: P1
durum: yapilacak
sahip: site-ekibi + icerik
tahmini_sure: "3–5 gün (içerik dahil)"
son_tarih: 2026-10-10
bagli:
  - "[[P1-07 Prerender ve meta]]"
  - "[[A2 Ads donusum ve ayarlar]]"
  - "[[P2-14 Mevzuat kontrolu]]"
---

# P1-08 · Hizmet landing page'leri (reklam gruplarına birebir)

> [!warning] Sorun
> - Route listesinde hizmet sayfası yok. `/bolumlerimiz` toplam 169 kelime; bölüm başlıklarının altında açıklama yok.
> - MOXO ve WISC yalnız uzman biyografilerinde geçiyor. Test reklam grubunun (₺539 harcama, MOXO/WISC aramaları) gideceği bir sayfa yok.
> - Google'ın "Açılış sayfası deneyimi" notu, puanı olan 26 anahtar kelimenin 25'inde "Ortalamanın altında".

## Sayfalar (öncelik = reklam harcaması)
| Reklam grubu | Yeni URL (öneri) | H1 (öneri) |
|---|---|---|
| ANK_Genel_Psikolog | `/ankara-psikolog` | Ankara'da Psikolog ve Aile Danışmanı |
| ANK_Test | `/psikolojik-testler`, `/psikolojik-testler/moxo-dikkat-testi`, `/psikolojik-testler/wisc-iv-zeka-testi` | MOXO Dikkat Testi – Ankara / WISC-IV Zeka Testi – Ankara |
| Çocuk_Ergen | `/cocuk-ergen-danismanligi` | Çocuk ve Ergen Danışmanlığı – Ankara |
| Çift_Aile | `/cift-aile-danismanligi` | Çift, Aile ve Evlilik Danışmanlığı – Ankara |

## Şablon (her sayfa)
1. **İlk ekran:** H1, tek cümle (ne ve kime), 3 buton (Ara / WhatsApp / Randevu talebi), "Çankaya · yüz yüze ve online".
2. **Kime uygun:** somut durumlar; tanı dili kullanılmaz.
3. **Süreç:** ilk görüşme nasıl geçer, süre, online/yüz yüze, ücret politikası ([[P0-05 Fiyat ve prototip metni]]).
4. **Bu alanda çalışan uzmanlar:** kart + profil linki ([[P1-09 Uzman profil sayfalari]]).
5. **SSS:** gerçek arama terimlerinden (örnekler aşağıda).
6. **Konum:** harita, adres, çalışma saatleri.
7. **Sayfada olmayacaklar:** intro animasyonu, podcast bandı, danışan yorumu; "en iyi", "garanti", "ücretsiz", "indirim", "tedavi", "hasta" ifadeleri ([[P2-14 Mevzuat kontrolu]]).

**SSS örnekleri (reklam arama terimlerinden)**
- **Genel:**
  - Ankara'da psikolog ücretleri neye göre değişir?
  - İlk görüşme nasıl geçer?
  - Online görüşme yüz yüzeyle aynı mı?
  - Psikolog, psikolojik danışman ve aile danışmanı arasındaki fark nedir?
- **Test:**
  - MOXO testi kaç yaşında yapılır, ne kadar sürer?
  - WISC-IV sonucu ne zaman verilir?
  - Teste nasıl hazırlanılır?
- **Çocuk/ergen:**
  - Çocuğum için ne zaman destek almalıyım?
  - Ebeveyn görüşmesi nasıl yapılır?
- **Çift/aile:**
  - Çift danışmanlığına tek başıma başvurabilir miyim?
  - Süreç kaç görüşme sürer?

> [!note] FAQ schema
> Opsiyonel. Google artık çoğu sitede SSS zengin sonucu göstermiyor, ama soru-cevap yapısı AI botlarının içeriği okumasına yardım eder.

## Kabul kriterleri
- [ ] 4 sayfa ve 2 test alt sayfası yayında; ham HTML'de her birinin kendi title, description, canonical ve H1'i var ([[P1-07 Prerender ve meta]])
- [ ] İlk ekranda (375×812) H1 ve 3 CTA görünüyor
- [ ] Her sayfada ≥400 kelime özgün içerik ve ≥4 SSS var
- [ ] PSI mobil LCP ≤2,5 sn
- [ ] Sayfalar sitemap'te ([[P1-10 Sitemap Search Console Bing]])
- [ ] URL listesi Ads'e iletildi ve reklamların Nihai URL'leri güncellendi ([[A2 Ads donusum ve ayarlar]])
