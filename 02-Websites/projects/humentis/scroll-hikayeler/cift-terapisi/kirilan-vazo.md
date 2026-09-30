---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-hikaye-b
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, cift-terapisi]
related: ["[[00-genel-bakis]]", "[[cift-terapisi]]", "[[humentis-bulunma-hikayesi]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]"]
---

# Çift Terapisi — "Kırılan Vazo"

## 1. Künye

| | |
|---|---|
| Karakter | Ece, 34 (kart: ECE — brief'teki metin birebir) |
| Eşi | Mert, 36 — hiç tam görünmez: bir omuz, bir el, koridordaki gölgesi |
| Konu | Çift terapisi / iletişim kopukluğu |
| Ana geçiş | Kapı sertçe kapanır, raftaki vazo kendi kendine düşüp kırılır, parçalar sayfaya dönüşür |
| Açıldığı yer | Uzmanın "Çift terapisi" hizmet sayfası + ön görüşme randevusu |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye (düz anlatım)

Salı akşamı, saat dokuzu geçiyor. Masada iki tabak var. Birinden yenmiş, öbürüne dokunulmamış. Mert'in telefonu masanın kenarında ters duruyor, ekranı arada bir yanıp sönüyor.

Ece bir şey söylemeye hazırlanıyor. Günlerdir hazırlanıyor aslında. Cümleye "Seninle bir şey konuşmak istiyorum" diye başlayacak, sakin olacak, bu sefer sesini yükseltmeyecek.

"Yine mi?" diyor Mert, daha cümle bitmeden.

Sonrası hep aynı. Ece "Beni hiç dinlemiyorsun" diyor, Mert "Ben de yoruldum" diyor. İkisi de haklı, ikisi de yalnız. Sesler yükselmiyor aslında. Daha kötüsü, alçalıyor.

Mert kalkıyor, koridora yürüyor, çalışma odasının kapısını kapatıyor. Sert değil ama yumuşak da değil. O kadarı yetiyor. Raftaki vazo, düğünlerinde annesinin hediye ettiği mavi-krem vazo, titriyor, kenara kayıyor ve düşüyor.

Kırılma sesinden sonra ev çok sessiz.

Ece parçaların başına çömeliyor. İlk parçayı eline aldığında bir şeyi fark ediyor: kızgın değil. Sadece çok yorgun. Ve bunu kime anlatacağını bilmiyor.

Parçaları toplarken telefonu yanında duruyor. Ekranda yarım kalmış bir arama var, üç gün önce yazıp silmediği: "evliliğimizde artık konuşamıyoruz".

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–15 | frame | masa | Işık açılır; telefon bir kez yanar | *İki tabak. Biri hiç ısınmadı.* |
| 15–35 | frame | eller | Ece'nin kenetli elleri; replikler sırayla | *"Seninle bir şey konuşmak istiyorum."* → *"Yine mi?"* |
| 35–45 | frame (scrub) | kapi | Kapı kapanır | — |
| 45–55 | frame (scrub) | vazo | Vazo titrer, düşer (yavaşlar) | — |
| 55–75 | shards / frame | kirik → parca-el | Parçalar havada asılı; Ece bir parçayı alır | *Kızgın değil. Sadece çok yorgun.* |
| 75–100 | shards (geçiş) | — | Parçalar kintsugi çizgisiyle birleşip sayfa olur | **Aynı evde iki yabancı gibi hissediyorsanız** |

**Kısaltmada çıkarılanlar:** Koridor gölgesi ve yarım kalmış arama sahnesi çıkarıldı; `koridor` karesi üretilmese de olur.

## 4. Geçiş anı — "Parçalar sayfa olur"

1. **(86%)** Yerdeki parçalar tekrar havalanır. Hepsi aynı yöne değil, her biri kendi hızında döner (kaotik değil, yavaş).
2. **(89%)** Parçaların iç yüzleri kameraya döner. İçleri vazonun sırlı mavisi değil, krem kâğıt dokusu (`#F6EFDD`).
3. **(92%)** Parçalar birbirine yaklaşır; kırık kenarlar altın bir çizgiyle birleşir (kintsugi hissi, ince `#CEAB69` çizgi). Bu bir "onardık" vaadi değil, sadece parçaların bir araya gelmesi.
4. **(95%)** Birleşen yüzey düzleşir, ekranı doldurur ve bir sayfaya dönüşür. Altın çizgiler sayfada ince bir desen olarak kalır.
5. **(98–100%)** Arka plan geceden krem zemine geçer, sayfanın başlığı belirir. Kullanıcı artık sitenin içinde, normal scroll devam eder.

**Furkan Bey için not:** Parçalar 6–9 adet düz poligon olarak yeterli (SVG ya da canvas). Kırık vazo fotoğrafı ile poligonlar arasında kısa bir çapraz geçiş yapılırsa gerçek kırılmadan grafik parçalara atlama fark edilmez. Kintsugi çizgileri `stroke-dashoffset` animasyonu ile çizilebilir.

## 5. Açıldığı site bölümü

**Başlık:** Aynı evde iki yabancı gibi hissediyorsanız

**İlk paragraf:** Çoğu çift terapiye bir kavgadan sonra değil, kavganın bile anlamsızlaştığı bir sessizlikten sonra gelir. Konuşmaya çalışıp aynı yere varmak, iki tarafı da yorar. Çift terapisinde amaç kimin haklı olduğunu bulmak değil; birbirinizi yeniden duyabileceğiniz bir konuşma biçimini birlikte kurmaktır.

**Alt bölümler (sayfanın devamı):**
- Çift terapisine kimler gelir?
- İlk görüşmede ne olur?
- Tek başıma gelebilir miyim? (Evet: bazen bir taraf önce gelir.)

**CTA:** Ön görüşme için randevu al
**İkincil link:** Önce bir yazı okumak istiyorum → blog: "Kavga etmeyi bıraktığınızda ne olur?"

Kapanış satırı (sayfanın altında, hikâyeye dönüş): *Ece randevu formunu doldurduğunda, parçalar hâlâ bir kâğıt torbanın içindeydi. Atmadı.*

## 6. Alternatif geçişler (hoca seçer)

**B2 — Dökülen kahve.** Tartışmadan önce Ece iki fincan kahve koyuyor. Mert "Yine mi?" dediğinde elindeki fincan titriyor, masaya dökülüyor. Scroll ile leke yayılıyor; lekenin kenarları krem sayfanın kenarına dönüşüyor ve sayfa lekenin içinden açılıyor. Daha sakin, daha "iç" bir geçiş. Vazoya göre daha az dramatik.

**B3 — Buğulu pencere.** Kapı kapandıktan sonra Ece mutfak penceresine gidiyor. Cama nefesi vuruyor, buğu oluşuyor. Scroll ile buğunun içinden parmakla yazılmış gibi bir kelime beliriyor ("konuşmak"), sonra buğu çekilirken arkasında sayfa açılıyor.

## 7. Gerekli görseller

| Kod | Durum | İçerik |
|---|---|---|
| b1, b2, b3, b4 | Filmde var | Mutfak gecesi, arama, fark etme, sabah fincanları |
| B-masa | **Yeni** | Üstten yemek masası, iki tabak (biri dolu), ters telefon, gece |
| B-eller | **Yeni** | Ece arkadan, masada kenetli eller |
| B-koridor | **Yeni** | Koridor, duvarda uzaklaşan erkek gölgesi (kişi yok, sadece gölge) |
| B-kapi | **Yeni** | Çalışma odası kapısı, orta plan, kapanmak üzere (I2V ile kapanış klibi) |
| B-vazo | **Yeni** | Rafta mavi-krem seramik vazo, orta plan (I2V: titreyip düşer) |
| B-kirik | **Yeni** | Yerde kırık vazo parçaları, üstten, gece ışığı |
| B-parca-el | **Yeni** | Ece'nin alyanslı eli bir parçayı alıyor, yakın |

Promptlar üretime geçerken [[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]'e "Hikâye B" başlığıyla eklenecek (aynı karakter ve mekan kartları).

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Claude bu tabloyu `hikaye.js`'e birebir çevirir.

- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/cift-terapisi/kirilan-vazo/`
- **Görsel promptları:** [[scroll-kirilan-vazo-brief]] (`07-AI-Gorsel/humentis/scroll-kirilan-vazo-brief.md`): karakter kartları ve her kare için hazır İngilizce prompt
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/cift-terapisi/kirilan-vazo/` (dosya adı = aşağıdaki "Görsel" sütunu + `.jpg`; aynı adla `.mp4` varsa klip oynar; yoksa yer tutucu)
- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)
- **Müzik:** 86%'da gece parçası → sabah parçası (4 sn). 70%'ten önce müzik yok, sadece oda sesi.

### Sahne listesi

§3 Kısa kesim tablosu birebir sahne listesidir (yüzde, tip, görsel, yazı).

### Özel davranışlar

- `shards`: 7 poligon, iç yüzleri `#F6EFDD`; birleşme çizgileri `stroke: #CEAB69`, `stroke-dasharray` animasyonu.
- Kapı ve vazo sahneleri klip gerektirir; klip yoksa tek görsel + CSS `rotate`/`translateY` ile taklit.

### Görsel dosyaları

- `masa.jpg`: üstten yemek masası, iki tabak (biri dolu), ters telefon, gece
- `eller.jpg`: Ece arkadan, masada kenetli eller
- `koridor.jpg`: koridor, duvarda uzaklaşan erkek gölgesi
- `kapi.jpg`: çalışma odası kapısı, orta plan (klip: kapanır)
- `vazo.jpg`: rafta mavi-krem vazo (klip: titreyip düşer)
- `kirik.jpg`: yerde kırık vazo parçaları, üstten
- `parca-el.jpg`: Ece'nin alyanslı eli bir parçayı alıyor
