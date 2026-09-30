---
tags: [humentis, site, p0, donusum]
oncelik: P0
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "2–4 saat"
son_tarih: 2026-10-01
bagli:
  - "[[P0-03 Cerez penceresi]]"
  - "[[P0-01 Randevu akisi bos takvim]]"
  - "[[P0-06 Google tag ve donusumler]]"
---

# P0-04 · Ara / WhatsApp ilk ekranda, her sayfada

> [!danger] Sorun
> - Ana sayfa metninde telefon numarası yok.
> - Sabit WhatsApp linki sayfanın en altında (mobilde ~4.900 px aşağıda).
> - Header'daki "Randevu al" `/uzmanlar`'a gidiyor: 17 kişilik liste, ardından boş takvim.
> - Mobilde ilk ekranda, hero'dan önce Podcast/Spotify bandı var.
> - Hero CTA'ları "Uzmanları incele" ve "Kısa eşleştirme" (5 adımlı anket). İkisi de keşif eylemi, iletişim değil.

## Yapılacaklar
1. **Mobil sabit alt bar**, her sayfada ve çerez kararından bağımsız: `[Ara] [WhatsApp] [Randevu talebi]`.
2. **Header:** tıklanabilir "0552 898 95 45" (mobilde ikon + numara).
3. **Hero:** birincil CTA "WhatsApp'tan yazın", ikincil "Hemen arayın". "Uzmanları incele" üçüncü sıraya insin.
4. **"Randevu al":** kısa talep formuna gitsin ([[P0-01 Randevu akisi bos takvim]]), `/uzmanlar` listesine değil. ⚠️ *Düzeltme 30.09: randevu akışı uzman kartındaki pencereyle çalışıyor (P0-01 düzeltmesine bakın); bu madde yanlış varsayıma dayanıyor.*
5. **Podcast bandı:** landing page'lerde ve ana sayfanın ilk ekranında gösterilmesin; footer'a taşınsın.
6. **Kaynak takibi:** her sayfanın WhatsApp hazır metni farklı olsun ki Ahsen mesajın nereden geldiğini görsün.
   - Ana sayfa: `Merhaba, bilgi almak istiyorum. (web-ana)`
   - Çocuk/ergen: `Merhaba, çocuk/ergen danışmanlığı için bilgi almak istiyorum. (web-cocuk)`
   - Testler: `Merhaba, MOXO/WISC testi için bilgi almak istiyorum. (web-test)`
   - Çift/aile: `Merhaba, çift/aile danışmanlığı için bilgi almak istiyorum. (web-cift)`
   - Uzman profili: `Merhaba, <Ad Soyad> ile görüşmek istiyorum. (web-uzman)`
   - URL'de `gclid` varsa (reklamdan gelen ziyaret) koda `-g` eki: `(web-cocuk-g)`

## Kabul kriterleri
- [ ] 375×812'de her sayfanın ilk ekranında Ara ve WhatsApp görünüyor ve çerez kararı olmadan çalışıyor
- [ ] Header'da tıklanabilir telefon var
- [ ] Hero'nun birincil CTA'sı bir iletişim eylemi
- [ ] Podcast bandı landing page'lerde yok
- [ ] WhatsApp hazır metinleri sayfa bazında farklı; `gclid` varken `-g` eki geliyor
- [ ] `tel:` / `wa.me` tıklamaları event olarak ölçülüyor ([[P0-06 Google tag ve donusumler]])
