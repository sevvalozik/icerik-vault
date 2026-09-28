---
type: website
framework: html
client: humentis
slug: humentis-scroll-hikaye-a
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, sinav-kaygisi]
related: ["[[00-genel-bakis]]", "[[sinav-ve-performans-kaygisi]]", "[[humentis-bulunma-hikayesi]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]"]
---

# Sınav ve Performans Kaygısı — "Aynı Paragraf"

## 1. Künye

| | |
|---|---|
| Karakter | Deniz, 22, üniversite son sınıf (kart: DENİZ, brief'teki metin birebir) |
| Konu | Sınav ve performans kaygısı |
| Ana geçiş | Açılan pencereden giren rüzgâr ders notlarını savurur, sayfalar havada birleşip bir blog yazısına dönüşür |
| Açıldığı yer | Uzmanın blog yazısı: "Sınav yaklaştıkça nefesiniz daralıyorsa" |
| Tahmini uzunluk | ~8 ekran boyu scroll |

## 2. Hikâye (düz anlatım)

Saat biri elli. Sınava on dokuz gün var.

Deniz aynı paragrafı dokuzuncu kez okuyor. Kelimeleri tanıyor ama cümle bir türlü tutunmuyor. Sayfanın kenarına kurşun kalemle küçük bir çizgi daha çekiyor. Dokuz çizgi.

Telefonu masada titriyor. Sınıf grubu: *"Ben 4. üniteyi de bitirdim, yarın tekrar yapacağım."* Altına üç kişi alkış bırakmış. Deniz telefonu ters çeviriyor ama cümle çoktan içeri girmiş.

Göğsünde tanıdık bir sıkışma başlıyor. Önce hafif, sonra nefesin bir türlü sonuna varamadığı o his. Kalkıyor, pencereyi açıyor. Dışarıda Ankara'nın gece havası, uzakta birkaç ışık.

Soğuk hava içeri doluyor. Masadaki notlar kıpırdıyor, sonra bir sayfa havalanıyor, ardından bir tane daha. Deniz onları tutmaya çalışmıyor. İlk defa, bir şeyin elinden kaymasına izin veriyor.

Sayfalar odanın içinde yavaşça dönüyor. Ve bir an, hepsi aynı cümleye dönüşüyor gibi.

## 3. Scroll senaryosu

| % | Sahne | Görüntü / kamera | Hareket (scroll ile) | Ekran yazısı | Ses |
|---|---|---|---|---|---|
| 0–8 | Açılış | Oda, geniş, Deniz arkadan masada (film a1) | Işık yavaşça açılır | *01:50. Sınava 19 gün.* | Saat tik takı, çok hafif |
| 8–20 | Aynı paragraf | Ders notu yakın plan, kurşun kalem kenara çizgi çekiyor | Her scroll adımında bir çizgi eklenir (1'den 9'a) | *Aynı paragraf. Dokuzuncu kez.* | Kalem sesi |
| 20–30 | Grup mesajı | Masada titreyen telefon, ekran flu ışık | Mesaj satırı film yazısı gibi belirir, sonra telefon ters döner | *"Ben 4. üniteyi de bitirdim."* | Titreşim |
| 30–40 | Sıkışma | Omuz üstü; Deniz'in omuzları kalkıyor | Görüntü çok hafif daralır (vinyet kapanır), nefes ritmi | *Nefes. Yarım kalıyor.* | Nefes sesi, emotional piano girer |
| 40–48 | **Pencere** | Pencere, Deniz'in eli kulpta | Pencere scroll ile açılır; perde içeri doğru şişer | — | Dış ortam: uzak trafik, rüzgâr |
| 48–58 | **İlk sayfa** | Masa, notlar; bir sayfanın köşesi kalkıyor | Sayfa havalanır; kamera onu takip eder | *İlk kez, bir şeyin elinden kaymasına izin veriyor.* | Kâğıt hışırtısı |
| 58–72 | Savrulma | Oda, havada 8–10 sayfa yavaşça dönüyor | Sayfalar scroll ile döner; aralarından Deniz arkadan, pencere önünde | — | Rüzgâr + piyano |
| 72–86 | Birleşme başlar | Sayfalar kameraya doğru gelir | Aşağıda (§4) | — | Hope piano'ya geçiş |
| 86–100 | **GEÇİŞ** | Sayfalar üst üste binerek tek sayfa olur | Aşağıda (§4) | Sayfa üstünde: **Sınav ve performans kaygısı** | Hope piano |

## 4. Geçiş anı — "Sayfalar tek sayfa olur"

1. **(72%)** Havadaki sayfaların üzerindeki el yazısı notlar yavaşça solar; sayfalar boşalır.
2. **(78%)** Sayfalar kameraya doğru süzülür; en öndeki sayfa ekranın yarısını kaplar.
3. **(84%)** Diğer sayfalar onun arkasına, deste gibi hizalanarak kayar. Her biri yerine oturduğunda hafif bir "kâğıt" sesi.
4. **(90%)** Tek kalan sayfa ekranı doldurur. Gece ışığı sayfanın üzerinden çekilir, yerine sabah ışığı gelir (sayfa kremleşir, `#F6EFDD`).
5. **(95–100%)** Sayfada blog yazısının başlığı basılır gibi belirir. Kenarda, Deniz'in dokuz kurşun kalem çizgisi silik bir iz olarak kalır; bu tek detay hikâyeyi yazıya bağlar.

**Furkan Bey için not:** Sayfalar düz dikdörtgen `div`'ler (kâğıt dokusu arka plan görseli) ile CSS 3D dönüşümü yeterli; `transform: rotate3d` + scroll'a bağlı `translateZ`. Kalem çizgileri aynı SVG, 9 `path`, scroll'la sırayla çizilir.

## 5. Açıldığı site bölümü (blog yazısı)

**Başlık:** Sınav yaklaştıkça nefesiniz daralıyorsa

**Spot:** Bu bir zayıflık değil. Zihninizin sizi korumaya çalışma biçimi.

**İlk paragraf:** Aynı paragrafı defalarca okuyup hiçbir şey kalmadığını hissetmek, çoğu zaman çalışmamaktan değil fazla yüklenmekten gelir. Zihin, önemli bir şeyi kaybetme ihtimalini tehlike gibi algıladığında dikkat daralır, nefes kısalır, beden "kaç" moduna geçer. Bu yazıda bunun neden olduğunu ve o anda ne yapabileceğinizi anlatıyorum.

**Yazının bölümleri:**
- Kaygı neden tam da en çok ihtiyacınız olduğunda gelir?
- "Herkes benden ileride" düşüncesi
- Sınav haftası için küçük ama işe yarayan üç alışkanlık
- Ne zaman destek almak iyi gelir?

**CTA (yazının sonunda):** Bir görüşmede birlikte bakalım → Ön görüşme randevusu
**İkincil:** Uzman Adı hakkında

Kapanış satırı: *Deniz o gece yazıyı sonuna kadar okudu. Sonra ilk kez, kitabı kapatıp uyudu.*

## 6. Alternatif geçişler (hoca seçer)

**A2 — Kalem çizgisi.** Dokuzuncu çizgiden sonra kurşun kalem durmuyor; çizgi sayfanın dışına taşıyor, masada, odada uzuyor, sonunda bir dikdörtgen çizerek kapanıyor ve o dikdörtgenin içi sayfaya dönüşüyor. Daha grafik, daha "çizim" hissi.

**A3 — Telefon (filmdeki gibi).** Grup mesajından sonra Deniz telefonu tekrar çeviriyor ve arama yapıyor. Scroll ile kamera ekranın içine giriyor, ekranın ışığı büyüyüp sayfa oluyor. En tanıdık ama en az sürprizli seçenek.

## 7. Gerekli görseller

| Kod | Durum | İçerik |
|---|---|---|
| a1, a2, a3, a4 | Filmde var | Oda gecesi, telefon, eller, sabah |
| A-not | **Yeni** | Ders notu yakın plan, kurşun kalem, kenarda boşluk (çizgiler kodla çizilecek) |
| A-telefon-masa | **Yeni** | Masada titreyen, ekranı flu ışık veren telefon, üstten |
| A-pencere | **Yeni** | Pencere kulpunda el, keten perde, dışarıda gece (I2V: pencere açılır, perde şişer) |
| A-oda-sayfalar | **Yeni** | Geniş: Deniz arkadan pencere önünde, odada havada birkaç sayfa (I2V ile uçuşma) |
| A-kagit-doku | **Yeni** | Düz, boş krem kâğıt dokusu, yüksek çözünürlük (animasyondaki sayfalar için) |

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Claude bu tabloyu `hikaye.js`'e birebir çevirir.

- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/sinav-ve-performans-kaygisi/ayni-paragraf/`
- **Görsel promptları:** [[scroll-ayni-paragraf-brief]] (`07-AI-Gorsel/humentis/scroll-ayni-paragraf-brief.md`): karakter kartları ve her kare için hazır İngilizce prompt
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/sinav-ve-performans-kaygisi/ayni-paragraf/` (dosya adı = aşağıdaki "Görsel" sütunu + `.jpg`; aynı adla `.mp4` varsa klip oynar; yoksa yer tutucu)
- **Toplam uzunluk:** 8 ekran boyu
- **Müzik:** 30%'da gece parçası başlar, 72%'de sabah parçasına geçiş.

### Sahne listesi

| # | % | Tip | Görsel | Metin(ler) | Not |
|---|---|---|---|---|---|
| 1 | 0–8 | frame | oda | *01:50. Sınava 19 gün.* | Filmdeki a1 karesi kullanılabilir |
| 2 | 8–20 | frame | not | *Aynı paragraf. Dokuzuncu kez.* | 9 kurşun kalem çizgisi (SVG path) sırayla çizilir |
| 3 | 20–30 | frame | telefon-masa | *"Ben 4. üniteyi de bitirdim."* | Telefon titreşimi (CSS shake 2px), sonra ters döner |
| 4 | 30–40 | frame | omuz | *Nefes. Yarım kalıyor.* | Vinyet daralır; müzik 1 başlar |
| 5 | 40–48 | frame | pencere | — | Pencere klibi scroll'a bağlı |
| 6 | 48–58 | pages | oda-sayfalar | *İlk kez, bir şeyin elinden kaymasına izin veriyor.* | İlk sayfa havalanır |
| 7 | 58–72 | pages | oda-sayfalar | — | 8–10 sayfa 3D döner |
| 8 | 72–86 | pages | kagit-doku | — | Sayfalar kameraya gelir, deste olur; müzik 2'ye geçiş |
| 9 | 86–100 | pages | kagit-doku | **Sınav ve performans kaygısı** | Geçiş §4; kenarda 9 çizgi silik kalır |

### Özel davranışlar

- `pages`: kâğıtlar `kagit-doku.jpg` arka planlı div'ler; `transform: rotate3d()` + `translateZ` scroll'a bağlı.
- 9 çizgi aynı SVG, site bölümünde blog yazısının kenarında `opacity .25` ile kalır.

### Görsel dosyaları

- `oda.jpg`: geniş, Deniz arkadan masada (filmdeki a1 kopyalanabilir)
- `not.jpg`: ders notu yakın plan, kurşun kalem, kenarda boşluk
- `telefon-masa.jpg`: masada ekranı flu ışık veren telefon, üstten
- `omuz.jpg`: Deniz omuz üstü (filmdeki a2 kullanılabilir)
- `pencere.jpg`: pencere kulpunda el, keten perde (klip: açılır)
- `oda-sayfalar.jpg`: Deniz arkadan pencere önünde, havada birkaç sayfa
- `kagit-doku.jpg`: boş krem kâğıt dokusu, yüksek çözünürlük
