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
| Tahmini uzunluk | **4 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye (düz anlatım)

Saat biri elli. Sınava on dokuz gün var.

Deniz aynı paragrafı dokuzuncu kez okuyor. Kelimeleri tanıyor ama cümle bir türlü tutunmuyor. Sayfanın kenarına kurşun kalemle küçük bir çizgi daha çekiyor. Dokuz çizgi.

Telefonu masada titriyor. Sınıf grubu: *"Ben 4. üniteyi de bitirdim, yarın tekrar yapacağım."* Altına üç kişi alkış bırakmış. Deniz telefonu ters çeviriyor ama cümle çoktan içeri girmiş.

Göğsünde tanıdık bir sıkışma başlıyor. Önce hafif, sonra nefesin bir türlü sonuna varamadığı o his. Kalkıyor, pencereyi açıyor. Dışarıda Ankara'nın gece havası, uzakta birkaç ışık.

Soğuk hava içeri doluyor. Masadaki notlar kıpırdıyor, sonra bir sayfa havalanıyor, ardından bir tane daha. Deniz onları tutmaya çalışmıyor. İlk defa, bir şeyin elinden kaymasına izin veriyor.

Sayfalar odanın içinde yavaşça dönüyor. Ve bir an, hepsi aynı cümleye dönüşüyor gibi.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–20 | frame | oda → not | Kalem kenara 9 çizgi çeker | *Aynı paragraf. Dokuzuncu kez.* |
| 20–40 | frame | telefon-masa | Telefon titrer, ters döner | *"Ben 4. üniteyi de bitirdim."* |
| 40–55 | frame (scrub) | pencere | Pencere açılır, perde şişer | — |
| 55–75 | pages | oda-sayfalar | Sayfalar havalanıp savrulur | *İlk kez, bir şeyin elinden kaymasına izin veriyor.* |
| 75–100 | pages (geçiş) | kagit-doku | Sayfalar tek sayfada birleşir; kenarda 9 çizgi | **Sınav yaklaştıkça nefesiniz daralıyorsa** |

**Kısaltmada çıkarılanlar:** Omuz üstü nefes sahnesi çıkarıldı; `omuz` karesi kullanılmıyor.

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
- **Toplam uzunluk:** 4 ekran boyu (kısa kesim)
- **Müzik:** 30%'da gece parçası başlar, 72%'de sabah parçasına geçiş.

### Sahne listesi

§3 Kısa kesim tablosu birebir sahne listesidir (yüzde, tip, görsel, yazı).

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
