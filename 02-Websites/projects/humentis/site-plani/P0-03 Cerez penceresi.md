---
tags: [humentis, site, p0, kvkk]
oncelik: P0
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "2–3 saat"
son_tarih: 2026-10-01
bagli:
  - "[[P0-04 Ara ve WhatsApp butonlari]]"
  - "[[P0-06 Google tag ve donusumler]]"
---

# P0-03 · Çerez penceresi içeriği kilitliyor

> [!danger] Sorun
> - Animasyon bitince tam ekran `cookie-gate` açılıyor. Karar verilene kadar ana içerik `inert`, yani tıklanamıyor.
> - Ara/WhatsApp dock'u (`.social-dock`) ancak çerez kararı verildikten sonra görünüyor.
> - Sonuç: yeni ziyaretçi önce ~5 sn animasyon, sonra tam ekran çerez kararı görüyor. Ara/WhatsApp ancak ondan sonra çıkıyor.

## Yapılacaklar
1. Banner'ı **bloklamayan** alt şeride çevir. İçerik ve butonlar karar verilmeden kullanılabilsin; `inert` kalksın.
2. Ara/WhatsApp dock'unu çerez kararından bağımsız her zaman göster. `tel:` ve `wa.me` linkleri çerez gerektirmez.
3. KVKK tarafı korunsun: analitik/reklam etiketleri onay gelmeden yüklenmesin ya da çerez yazmasın (Consent Mode v2 varsayılanları `denied`, bkz. [[P0-06 Google tag ve donusumler]]).
4. "Tümünü kabul et" ve "Yalnızca zorunlu" eşit ağırlıkta kalsın (mevcut hâli iyi).

## Kabul kriterleri
- [ ] İlk ziyarette (localStorage boş) içerik ve Ara/WhatsApp çerez kararı olmadan tıklanabiliyor
- [ ] Banner mobil ekranın ≤%30'unu kaplıyor
- [ ] Onay yokken Google etiketleri çerez yazmıyor (DevTools → Application → Cookies)

## Test
- DevTools → Application → Local Storage → `humentis-cookie-consent-v1` anahtarını sil → sayfayı yenile → butonlara tıkla.
