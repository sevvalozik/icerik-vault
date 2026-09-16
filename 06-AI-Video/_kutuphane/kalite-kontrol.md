---
type: kutuphane
tags: [ai-video, kalite, kontrol-listesi]
date: 2026-09-16
---

# Kalite Kontrol Listesi (AI video)

> İki aşama: **üretmeden önce** (prompt) ve **ürettikten sonra** (klip). Her klip için puan ver (1–5) ve brief'in Üretim Logu'na işle. 4 ve üstü kurguya girer; 3 tekrar denenir; 1–2 prompt yeniden yazılır.

## A. Üretmeden önce — prompt kontrolü

**Marka**
- [ ] Marka brief açık, `AI Brief Bloğu` okundu
- [ ] Ürün/mekan/karakter kartı **birebir** kopyalandı
- [ ] Grade satırı brief'ten; marka paletiyle çelişen renk kelimesi yok (Nefin'de "blue/purple", Humentis'te "pink/lavender")
- [ ] "KESİNLİKLE OLMAYACAK" listesi negatif prompt'a girdi

**Yapı**
- [ ] Tek çekim, tek aksiyon
- [ ] Kamera hareketi yazılı (veya locked-off)
- [ ] Lens + alan derinliği var
- [ ] Işık yönü + sertliği var
- [ ] Süre/oran modelin desteklediği değer; reels için 9:16
- [ ] Ses satırı (sesli modelde): müzik var/yok, altyazı yok
- [ ] `no text, no logos` var
- [ ] Çelişki taraması yapıldı (static + tracking, macro + wide…)
- [ ] 60–120 kelime aralığında (Runway I2V: 20–50)

**Yasal / hassas**
- [ ] Tedavi/iyileştirme iddiası yok
- [ ] Gerçek kişi/ünlü benzerliği istenmiyor
- [ ] Çocuk / danışan / hasta yok (Humentis kuralı)
- [ ] Rakip ambalaj/logo yok

## B. Ürettikten sonra — klip kontrolü (sesi kapat, 0.5× hızda izle)

**Ürün / obje**
- [ ] Şişe formu baştan sona aynı (morph yok)
- [ ] Kapak/etiket rengi sabit
- [ ] Etiket yazısı okunmaz/bulanık ya da yok (bozuk harf varsa → post'ta maskele veya yeniden üret)
- [ ] Sıvı fiziği inandırıcı (camın içinden geçmiyor, yerçekimi doğru)
- [ ] Fazladan/duplike obje yok

**İnsan**
- [ ] Parmak sayısı 5, eklem doğal
- [ ] Yüz varsa: göz simetrisi, diş, cilt dokusu (plastik değil)
- [ ] Kıyafet/saç klip boyunca aynı
- [ ] Hareket "kayma" yapmıyor (ayak/el yüzeyde kayıyor mu?)

**Görüntü**
- [ ] Flicker / parlaklık titremesi yok
- [ ] Arka plan duvar/mobilya bükülmüyor
- [ ] Kamera hareketi istenen yönde ve hızda
- [ ] Renk grade markaya uygun (yan yana referans kareyle karşılaştır)
- [ ] Watermark/istenmeyen yazı yok
- [ ] Çözünürlük ve keskinlik yeterli (gerekirse upscale: Topaz / model içi upscale)

**Ses (sesli modelde)**
- [ ] İstenmeyen müzik yok
- [ ] Altyazı basılmamış
- [ ] Diyalog varsa dudak senkronu ve telaffuz kabul edilebilir

**Kurgu uyumu**
- [ ] Önceki/sonraki kliple lens ölçeği ve ışık yönü uyumlu
- [ ] Döngü/geçiş noktası var (ilk-son kare)

## C. Puanlama

| Puan | Anlamı | Aksiyon |
|---|---|---|
| 5 | Kurguya direkt | logla, seed'i kaydet |
| 4 | Küçük post düzeltmesiyle | logla |
| 3 | Yakın, tekrar üret (aynı prompt, farklı seed / 2–3 deneme) | varyant B'yi dene |
| 2 | Yapısal sorun (morph, yanlış ürün) | prompt'u yeniden yaz; I2V'ye geç |
| 1 | Konsept yanlış | brief'e dön |

## D. Sık hata → çözüm

| Belirti | Sebep | Çözüm |
|---|---|---|
| Etiket her karede değişiyor | text-to-video ile ürün tarif edilmiş | gerçek fotoğraf + I2V |
| Parıltı/glitter patlaması | "beauty" kelimesi | negatif: sparkles, glitter; pozitif: "no sparkle effects" |
| Rastgele zoom | kamera hareketi yazılmamış | "locked-off" veya net hareket |
| Altyazı bastı (Veo) | diyalog var, "(no subtitles)" yok | ekle |
| Mavi/soğuk ton | grade satırı yok | brief'ten grade + negatif "cool blue tint" |
| Hastane görünümü (Humentis) | "psychology/clinic" kelimesi | "counselling room", negatif: hospital, medical |
| Ekranda sahte UI | ekran içeriği modele bırakılmış | "solid flat green screen" |
| 6 parmak | el yakın planı | "exactly five fingers", el sayısını azalt, I2V |
| Klipler farklı video gibi | lens/ışık/grade değişken | [[tutarlilik-rehberi]] madde 5 |
