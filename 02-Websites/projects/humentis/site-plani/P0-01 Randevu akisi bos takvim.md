---
tags: [humentis, site, p0, donusum]
oncelik: P0
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "0,5–1 gün (geçici çözüm 15 dk)"
son_tarih: 2026-10-01
bagli:
  - "[[O1 Operasyon musaitlik ve kayit]]"
  - "[[P0-06 Google tag ve donusumler]]"
  - "[[P0-04 Ara ve WhatsApp butonlari]]"
---

# P0-01 · Randevu akışı: boş takvim (çıkmaz sokak)

> [!danger] Sorun
> - "Randevu al" butonu (header'da ve her uzman kartında) `/uzmanlar` → `/randevu/<slug>` takvimine gidiyor.
> - 29.09.2026 itibarıyla **17 uzmanın hiçbirinde bugünden sonra slot yok.** 8 uzmanda yalnız geçmiş slot var (en yenisi 10 Eylül), 9 uzmanda hiç yok.
> - Elif Silav'ın takviminde yalnız 3 Eylül 10:00 ve 14:00 seçilebiliyor.
>
> Tablo: [[Kanit - Site taramasi 2026-09-29#Uzman takvimleri]]

> [!info] Neden P0
> Reklamdan gelen biri için sitedeki birincil eylem bu buton. Buton çıkmaz sokağa gittiği sürece reklam bütçesi temasa dönüşmez.

## Yapılacaklar
1. **Geçici çözüm (bugün, ~15 dk).** Tüm "Randevu al" butonlarını, talep modu gelene kadar WhatsApp hazır mesajlı linke yönlendir: `https://wa.me/905528989545?text=...` (uzman adıyla, bkz. [[P0-04 Ara ve WhatsApp butonlari]]).
2. **Talep modu.** Uzmanın ileri tarihli slotu yoksa tarih/saat adımını atla ve kısa bir form göster:
   - ad soyad, telefon, tercih (online / yüz yüze), uygun gün/saat aralığı, KVKK onayı
   - aynı ekranda büyük **Ara** ve **WhatsApp** butonları
3. **Sunucu tarafı filtre.** API geçmiş tarihli slot döndürmesin; geçmiş tarihe gelen talebi reddetsin.
4. **Bildirim.** Her talep ≤1 dk içinde Ahsen'e düşsün (e-posta + mümkünse SMS). Admin'de "yeni talepler" listesi ve okundu/aranıldı durumu olsun.
5. **Onay sayfası.** `/randevu/onay` şunu göstersin: "Ekibimiz mesai saatlerinde en geç X saat içinde dönüş yapar", yanında Ara/WhatsApp.
6. **Panel uyarısı.** Admin panelde "ileri tarihli slotu olmayan uzmanlar" uyarısı olsun. Operasyon tarafı: [[O1 Operasyon musaitlik ve kayit]].

## Kabul kriterleri
- [ ] 17 uzmanın hiçbirinde bugünden önceki tarih görünmüyor ve seçilemiyor (UI + API)
- [ ] İleri slotu olmayan uzmanda kullanıcı talep formunu ve Ara/WhatsApp'ı görüyor; çıkmaz ekran yok
- [ ] Test talebi ≤1 dk içinde Ahsen'e bildirim olarak düşüyor
- [ ] Başarılı talep `randevu_talebi` event'ini tetikliyor ([[P0-06 Google tag ve donusumler]])
- [ ] Onay sayfasında dönüş süresi ve Ara/WhatsApp var

## Test
- Kanıt notundaki 17 slug için `/randevu/<slug>`'ı mobilde aç.
- `GET /api/specialists` yanıtında geçmiş tarihli slot kalmamalı.
