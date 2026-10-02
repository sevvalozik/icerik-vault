---
tags: [humentis, site, p0, donusum]
oncelik: P0
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "1–2 gün + karar"
son_tarih: 2026-10-10
bagli:
  - "[[O1 Operasyon musaitlik ve kayit]]"
  - "[[P0-06 Google tag ve donusumler]]"
  - "[[P0-04 Ara ve WhatsApp butonlari]]"
---

# P0-01 · Randevu akışı

> [!info] Akış nasıl çalışıyor (main kodu + canlı API, 30.09–02.10.2026)
> - Header'daki "Randevu al" `/uzmanlar` listesine gidiyor. Uzman kartındaki ve profildeki "Randevu al" bir pencere açıyor (`AppointmentRequestModal`): görüşme biçimi → bölüm → takvim (gün + saat) → ad, soyad, telefon, e-posta, danışan yaşı, şehir, mesaj (isteğe bağlı), KVKK → "Randevuyu oluştur" → "Randevunuz oluşturuldu". Ödeme adımı yok. Akış kodda 1 Eylül'den beri böyle.
> - Saatler `/api/specialists/<slug>/open-slots`'tan geliyor (admin panelindeki haftalık çalışma saatlerinden üretiliyor). 30.09 itibarıyla 18 uzmanın her birinde 1 Ekim'den itibaren ~860 açık saat var.
> - `/randevu/<slug>` (Saat → Bilgiler → Ödeme, eski `availability` verisi, fiyat ve "prototip" metni) sitede hiçbir yerden linkli olmayan eski bir sayfa; robots.txt'de kapalı.

> [!danger] Sorunlar
> - **Dil çelişkisi:** ana sayfa "Üç adımda randevu talebi gönderin… ekibimiz sizinle iletişime geçer" diyor; pencere "Randevunuz oluşturuldu" diyor ve kayıt doğrudan `confirmed` açılıyor (`apps/api/src/index.ts:385`). Onay e-postası / SMS yok.
> - **Seans çakışması:** gün sonu "kapanış seansı" (ör. 16:10) bir önceki seansla (15:40) çakışıyor; ikisi de kesin alınabiliyor (`apps/api/src/availability.ts:122-130`).
> - **Form sürtünmesi:** 11 karar; bölüm ve görüşme biçimi uzmana göre önseçili gelmiyor; API uyumsuz biçimi sessizce ilk hizmete çeviriyor (`index.ts:367-369`); yaş ve şehir zorunlu; hata olunca ilk hatalı alana kaydırılmıyor.
> - **KVKK:** serbest mesaj alanında "sağlık bilgisi paylaşmayın" uyarısı yok; mesaj iki tabloya kaydediliyor (`index.ts:383,392`).
> - **Takvim ay sonu:** takvim içinde bulunulan ayda açılıyor; ay sonunda seçilebilir gün kalmayınca boş görünüyor. ✅ *Ekip kararı: şimdilik değişmeyecek.*
> - **Linksiz eski sayfa:** `/randevu/<slug>` hâlâ erişilebilir.

## Yapılacaklar
1. **Karar (kurucular): randevu kesin mi, ekip arayıp mı onaylıyor?** Karara göre ana sayfa adımları, düğme ve başarı mesajı tek dile çekilsin. Onay e-postası / .ics eklensin.
2. **Seans çakışmasını düzelt:** kapanış seansı, önceki seansla çakışıyorsa üretilmesin.
3. **Form:** bölüm ve görüşme biçimi uzmana göre önseçili; API uyumsuz biçimi reddetsin; yaş/şehir isteğe bağlı (operasyon onayıyla); hata olunca ilk hatalı alana odaklan.
4. **Mesaj alanına not:** "Lütfen burada yaşadığınız konuyu ya da sağlık bilgisi paylaşmayın; bunları görüşmede konuşabiliriz."
5. **Bildirim:** her yeni randevu ≤1 dk içinde Ahsen'e düşsün (e-posta, mümkünse SMS); admin'de yeni kayıt listesi.
6. **Eski sayfa:** `/randevu/<slug>` kaldırılsın ya da `/uzmanlar/<slug>`'a yönlendirilsin.

## Kabul kriterleri
- [ ] Ana sayfa, düğme ve başarı mesajı aynı modeli anlatıyor (talep ya da kesin randevu)
- [ ] Çakışan saat üretilmiyor
- [ ] Mesaj alanında sağlık bilgisi uyarısı var
- [ ] Test randevusu ≤1 dk içinde Ahsen'e bildirim olarak düşüyor
- [ ] Başarılı randevu `randevu_olusturuldu` event'ini tetikliyor ([[P0-06 Google tag ve donusumler]])
- [ ] `/randevu/<slug>` açılmıyor ya da yönlendiriyor

Ayrıntı: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]] · [[R4 ek - donusum]]
