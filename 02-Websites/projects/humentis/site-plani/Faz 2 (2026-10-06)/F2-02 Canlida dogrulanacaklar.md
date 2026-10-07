---
tags: [humentis, site, p0, dogrulama, faz2]
oncelik: P0
durum: kismen
sahip: site-ekibi + kurucular
tahmini_sure: "15 dk"
son_tarih: 2026-10-07
bagli:
  - "[[P0-01 Randevu akisi bos takvim]]"
  - "[[P0-02 Acilis animasyonu]]"
  - "[[P0-03 Cerez penceresi]]"
  - "[[P0-06 Google tag ve donusumler]]"
---

# F2-02 · Canlıda doğrulanacaklar

Bunlar JS davranışı olduğu için ham HTML taramasında görünmüyor. Telefonda **gizli sekmede** (çerezsiz) test edilir.

## 1. Açılış animasyonu → [[P0-02 Acilis animasyonu]]
- [ ] `humentis.com.tr` açılınca içerik ve "WhatsApp'tan yazın" butonu **2–3 sn içinde** görünüyor
- [ ] Logo animasyonu ya yok ya da 0,3 sn'den kısa
- Geçen hafta: 4,8 sn sabit animasyon vardı.

## 2. Çerez penceresi → [[P0-03 Cerez penceresi]]
- [ ] Çerez seçimi yapmadan sayfa kaydırılabiliyor ve "WhatsApp'tan yazın" / "Bizi arayın" tıklanabiliyor
- [ ] Banner ekranın üçte birinden küçük
- Geçen hafta: tam ekran pencere, içerik kilitliydi.

## 3. Randevu takvimi → [[P0-01 Randevu akisi bos takvim]]
- [ ] Üç farklı uzman profilinde "Randevu al"a basınca **bugünden sonraki** saatler ya da kısa talep formu çıkıyor
- [ ] Geçmiş tarih görünmüyor
- [ ] Test talebi Ahsen'e 1 dk içinde düşüyor
- Geçen hafta: 17 uzmanda ileri tarihli saat yoktu. Profil SSS'leri hâlâ "Randevu al düğmesiyle uygun bir gün ve saat seçebilir" diyor; takvim boşsa bu cümle yanlış vaat olur.

## 4. Google etiketi → [[P0-06 Google tag ve donusumler]]
- [ ] Masaüstünde sayfa kaynağında (Ctrl+U) ya da çerez onayından sonra Network sekmesinde `googletagmanager` görünüyor
- [ ] Tag Assistant'ta `tel_click`, `whatsapp_click`, `randevu_talebi`, `iletisim_formu` event'leri tetikleniyor
- [ ] Google Ads → Hedefler → Dönüşümler'de 4 işlem "Kaydediliyor"
- Geçen hafta: sitede hiç Google etiketi yoktu.

## 5. Görünen sayfa ile ham HTML aynı mı
- [ ] Ana sayfada görünen başlık: "Kendiniz, çocuğunuz ya da ilişkiniz için Ankara'da sakin bir başlangıç."
- [ ] İlk ekranda Podcast bandı yok; "WhatsApp'tan yazın" ve "Bizi arayın" butonları var
- [ ] `/ankara-psikolog` ve MOXO sayfasında görünen metin, sayfa kaynağındaki metinle aynı
- Neden: botlara giden HTML ile kullanıcının gördüğü sayfa farklıysa Google bunu yanıltıcı içerik sayabilir.

> [!tip] Sonuçları buraya yazın
> Her maddenin yanına tarih ve ekran görüntüsü ekleyin; geçmeyen madde ilgili P0 notunda açık kalır.

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

| # | Madde | Sonuç |
|---|---|---|
| 1 | Açılış animasyonu | ❌ **Geçmiyor, ekip kararıyla.** Logo animasyonu her tam sayfa yüklemesinde hâlâ ~5,5 sn ekranı kaplıyor (ölçüm: `.page-transition` 0,4–5,0 sn arası DOM'da, 5,5 sn'de kalkıyor). WhatsApp/Ara düğmeleri ve çerez bandı bundan sonra görünüyor. [[P0-02 Acilis animasyonu]] notunda 30.09.2026 ekip kararı: "Animasyon kalacak". Bu yüzden değiştirilmedi. Maliyeti: Lighthouse mobil LCP ana sayfa 3,1 sn, `/ankara-psikolog` 3,3 sn (hedef ≤2,5). Kararın reklam trafiği açısından yeniden konuşulması önerilir. |
| 2 | Çerez penceresi | ✅ Kilitlemiyor (sayfa kayıyor). Ekranın %25'i (375×812'de 206 px), alt kısımda. |
| 3 | Randevu takvimi | ✅ 18 uzmanın hepsinde bugünden sonraki saatler var (ilk boş saat 7 Ekim 10:40). ⚠️ 17 uzmanda **aynı varsayılan çizelge** (hafta içi 09:00–17:00, 50 dk) görünüyor; gerçek çalışma saatleri operasyondan teyit edilmeli ([[O1 Operasyon musaitlik ve kayit]]). Test talebinin Ahsen'e düşmesi denenmedi (canlıya sahte talep gönderilmedi). |
| 4 | Google etiketi | ❌ Canlı derlemede GA4 / Ads kimliği yok. Etiket kodu hazır (`VITE_GA4_ID`, `VITE_GOOGLE_ADS_ID` boş olduğu için hiç yüklenmiyor). Gerekenler: GA4 ölçüm kimliği, Ads dönüşüm kimliği/etiketleri ve önce KVKK + çerez metninin hukukça güncellenmesi. Sonra tek derlemeyle açılır. |
| 5 | Görünen = ham HTML | ✅ Ana sayfa başlığı aynı, ilk ekranda Podcast bandı yok. WhatsApp hazır metinleri artık ham HTML'de de kaynak kodlu (`web-ana`, `web-ankara`, `web-test`…). |
