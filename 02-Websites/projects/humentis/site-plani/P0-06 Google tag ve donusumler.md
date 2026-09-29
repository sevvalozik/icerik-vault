---
tags: [humentis, site, p0, olcum, kvkk]
oncelik: P0
durum: yapilacak
sahip: site-ekibi + ads
tahmini_sure: "0,5–1 gün"
son_tarih: 2026-10-02
bagli:
  - "[[A2 Ads donusum ve ayarlar]]"
  - "[[P0-03 Cerez penceresi]]"
---

# P0-06 · Google etiketi ve dönüşüm ölçümü (şu an sıfır)

> [!danger] Sorun
> - HTML'de, `index-*.js` bundle'ında ve `specialist-calendar-live.js`'te `googletagmanager`, `gtag`, `GTM-`, `G-` ya da `AW-` yok. Sitede yalnız Cloudflare Web Analytics var.
> - Google Ads'te tüm satırlarda dönüşüm 0,00. Google hangi aramanın temas getirdiğini öğrenemiyor, biz de göremiyoruz.

## Yapılacaklar
1. **GTM container (ya da gtag.js) + Consent Mode v2**
   - `ad_storage`, `analytics_storage`, `ad_user_data`: varsayılan `denied`; onayla `granted`.
   - `ad_personalization`: **her durumda `denied`**. Psikolojik hizmetler Google'ın "kişiselleştirilmiş reklamda sağlık" politikası kapsamında; remarketing yok.
   - KVKK açısından en güvenlisi: onaydan önce Google etiketleri hiç yüklenmesin (basic consent mode). Advanced mode (onaysız, çerezsiz ping) için hukuk görüşü alın.
2. **GA4 mülkü.** SPA route değişimlerinde `page_view` tetiklensin: Enhanced Measurement → "Page changes based on browser history events" açık, ya da router'dan manuel.
3. **Event'ler**

| Event | Tetikleyici | Parametreler |
|---|---|---|
| `tel_click` | `a[href^="tel:"]` tıklaması | `page_path`, `placement` (header / dock / hero / sayfa) |
| `whatsapp_click` | `a[href*="wa.me"]` tıklaması | `page_path`, `placement` |
| `randevu_talebi` | talep API'si 2xx döndüğünde | `department` (genel / cocuk / cift / test), `mode` (online / yuzyuze) |
| `iletisim_formu` | iletişim formu API'si 2xx döndüğünde | `page_path` |

4. **Google Ads.** Hedefler → Dönüşümler: 4 event'i GA4'ten içe aktar ([[A2 Ads donusum ve ayarlar]]). GA4 ↔ Ads bağlantısını kur. GA4'te "Google sinyalleri" kapalı kalsın.
5. **Sağlık verisi gönderilmesin.** Eşleştirme anketinin cevapları (kaygı, depresyon vb.), serbest metin alanları ve uzman konu alanları hiçbir event'e girmesin. URL'lerde hassas parametre olmasın.

## Kabul kriterleri
- [ ] Tag Assistant: onaydan sonra her route değişiminde `page_view` tetikleniyor
- [ ] GA4 DebugView'da 4 event doğru parametrelerle görünüyor
- [ ] Google Ads → Dönüşümler'de 4 işlem 48 saat içinde "Kaydediliyor" durumunda
- [ ] Tag Assistant → Consent: `ad_personalization=denied` her durumda
- [ ] Eşleştirme cevapları hiçbir event'te yok
