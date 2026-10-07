---
tags: [humentis, site, p2, kvkk, faz2]
oncelik: P2
durum: kismen
sahip: site-ekibi
tahmini_sure: "2–3 saat"
son_tarih: 2026-10-20
bagli:
  - "[[P1-07 Prerender ve meta]]"
  - "[[F2-04 Hizmet sayfalarini guclendir]]"
---

# F2-10 · Yasal sayfalar, galeri ve küçük temizlik

## Bulgular
1. **Yasal sayfaların ham HTML'i tek satır.**
   - `/gizlilik-politikasi`: yalnız "Özel Humentis gizlilik politikası."
   - `/cerez-politikasi`: yalnız "Özel Humentis çerez politikası."
   - `/kvkk`: başlık ve tek cümle.
   - Asıl metin JS ile geliyorsa kullanıcı görür ama botlar görmez. Metin hiç yoksa KVKK açısından eksik.
2. **`/galeri`:** ham HTML'de görsel yok. Fotoğraflar botlar için görünmez.
3. **`/iletisim`:** çalışma saatleri yok; form ham HTML'de yok.
4. **Takma adresler:** `/ekibimiz`, `/makaleler`, `/sss` içerik gösteriyor ve canonical doğru. 301 yönlendirme daha temiz olur.
5. **`/ik/kariyer` ve `/ik/staj`:** başvuru notu var; form ham HTML'de görünmüyor.

## Yapılacaklar
1. Yasal metinleri ön-render HTML'ine koy; "Son güncelleme" tarihi ekle. Çerez politikasında kullanılan araçları (Cloudflare Web Analytics, varsa Google etiketleri) adıyla yaz.
2. Galeri görsellerini `<img>` ve açıklayıcı `alt` ile HTML'e koy ("Humentis çocuk odası, Çankaya" gibi).
3. İletişim sayfasına çalışma saatleri, bina adı ve kat bilgisi.
4. Takma adresleri 301 yap.

## Kabul kriterleri
- [ ] Üç yasal sayfanın metni `curl` çıktısında okunuyor
- [ ] Galeri HTML'inde ≥8 görsel, hepsi alt metinli
- [ ] `/ekibimiz`, `/makaleler`, `/sss` 301 dönüyor

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

| # | Bulgu | Durum |
|---|---|---|
| 1 | Yasal sayfalar tek satır | ✅ Tam metin ham HTML'de, React ile aynı bölümler: KVKK 1.082, kullanım şartları 657, gizlilik 178, çerez 133 kelime. "Son güncelleme" tarihi eklendi (metnin sitede son değiştiği gün: KVKK 12 Eylül, diğerleri 1 Eylül 2026). Meta açıklamaları yazıldı. ❓ Çerez politikasında araç adları: Google etiketi henüz yok; GA4/Ads açılmadan önce hukukça güncellenmeli. |
| 2 | Galeri | ✅ 6 fotoğraf ham HTML'de `<img>` + alt metinle. Panelde açıklama yoksa alt metin "Özel Humentis Aile Danışma Merkezi, Çankaya – merkezden kare N". Açıklama önerileri raporda. "≥8 görsel" için 2+ yeni fotoğraf gerekli. |
| 3 | İletişim: saat, bina, kat | ❓ Karar/teyit bekliyor ([[F2-04 Hizmet sayfalarini guclendir]] madde 4). |
| 4 | Takma adresler | ✅ Zaten 301: `/ekibimiz` → `/uzmanlar`, `/makaleler` → `/icerik`, `/sss` → `/#sss`. |
| 5 | Kariyer/staj formu ham HTML'de | Yapılmadı (düşük öncelik). |

### Kabul kriterleri
- [x] Üç yasal sayfanın metni `curl` çıktısında okunuyor
- [ ] Galeri HTML'inde ≥8 görsel, hepsi alt metinli (6 görsel var, hepsi alt metinli)
- [x] `/ekibimiz`, `/makaleler`, `/sss` 301 dönüyor
