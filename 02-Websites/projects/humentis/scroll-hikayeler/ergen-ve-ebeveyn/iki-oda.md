---
type: website
framework: html
client: humentis
slug: humentis-scroll-ergen-iki-oda
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ergen, ebeveyn]
related: ["[[00-genel-bakis]]", "[[ergen-ve-ebeveyn]]", "[[teknik-spec]]", "[[scroll-iki-oda-brief]]"]
---

# Ergen ve Ebeveyn — "İki Oda"

## 1. Künye

| | |
|---|---|
| Karakterler | Gül, 44, öğretmen · oğlu Arda, 15 (**hiç görünmez**: sadece odası, lambası, telefon ışığı, yazdığı cümleler) |
| Konu | Ergenlikte iletişim kopukluğu; kavgadan sonra ikisinin de adım atamaması |
| Duygusal çekirdek | Aynı şeyi hissediyorlar, aynı anda yazıyorlar, ikisi de göndermiyor. Aralarında sadece bir duvar var. |
| Geçiş | Kamera evin kesitinden geri çekilir; iki odayı ayıran duvar büyür ve sayfaya dönüşür |
| Açıldığı yer | Ergen–ebeveyn sayfası: "Aynı evde, iki ayrı dünya" |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye

Salı akşamı yemekte yine aynı şey oldu. Gül üçüncü kez "Telefonu bırak artık" dedi, Arda tabağını itip kalktı. Kapısını kapatmadan önce son cümlesi koridorda kaldı: "Sen beni hiç anlamıyorsun."

Şimdi saat on biri kırk geçiyor. Ev sessiz. Gül yatak odasında, yatağın kenarında oturuyor. Telefonunu açıyor, oğluna yazmaya başlıyor: *"Bugün sana bağırdığım için…"* Siliyor. Fazla resmi. *"Seni seviyorum ama…"* Siliyor. "Ama" her şeyi bozuyor.

Duvarın öbür tarafında, Arda'nın odasında masa lambası hâlâ açık. Onun telefonunun ışığı da yanıyor. O da yazıyor: *"Ben de öyle demek istemedim…"* Siliyor. *"Anne uyudun mu?"* Siliyor.

İkisi aynı anda yazıyor, aynı anda siliyor. Aralarında on beş santimlik bir duvar var ve ikisi de bunu bilmiyor.

Gül telefonu ters çeviriyor, başını duvara yaslıyor. Öbür tarafta lamba bir an sönüyor, sonra yeniden yanıyor. Arda da uyuyamıyor.

Kimse bir şey göndermiyor. Ama ikisi de aynı duvarın iki yanında, aynı cümleyi kuramamanın ağırlığıyla oturuyor.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–18 | kesit | kesit | Evin kesiti, iki oda ışıklı | *"Sen beni hiç anlamıyorsun."* (akşamdan kalan) |
| 18–45 | kesit + typing | iki-oda | İki tarafta aynı anda yazılıp silinir (tek tur) | sol: *"Bugün sana bağırdığım için…"* · sağ: *"Ben de öyle demek istemedim…"* |
| 45–60 | kesit | iki-oda | İki telefon da kararır | *İkisi de göndermedi.* |
| 60–75 | kesit | iki-oda-lamba-kapali → iki-oda | Sağ odada lamba söner, 1 sn sonra yeniden yanar | — |
| 75–100 | kesit (geçiş) | kesit | Kamera geri çekilir; duvar şeridi büyüyüp krem zemin olur | *Bazen aradaki mesafe bir duvar kadardır.* → **Aynı evde, iki ayrı dünya** |

**Kısaltmada çıkarılanlar:** Yemek odası hatırası, Gül'ün yakın planları ve ikinci yazma turu çıkarıldı; `gul-oda`, `duvar-gul` kullanılmıyor.

## 4. Geçiş anı

1. **(90%)** Geri çekilen kesitte, iki odayı ayıran duvar ince, krem bir dikey şerit olarak kalır; odalar kararır.
2. **(93%)** Şerit genişleyerek ekranı doldurur, krem zemin olur.
3. **(95%)** Ekran yazısı: *Bazen aradaki mesafe bir duvar kadardır.*
4. **(98–100%)** Yazı solar, site başlığı belirir: **"Aynı evde, iki ayrı dünya"**. Sol ve sağda, çok silik, iki cümlenin son hâli kalır ve kaybolur.

## 5. Açıldığı site bölümü

**Başlık:** Aynı evde, iki ayrı dünya

**İlk paragraf:** Ergenlikte çocuklar ebeveynlerinden uzaklaşıyormuş gibi görünür; çoğu zaman aslında yakınlığın biçimi değişiyordur. Tartışmalar sertleşir, cümleler kısalır, kapılar kapanır. Ama kapının iki tarafında da aynı yorgunluk, aynı özlem olabilir. Ebeveyn danışmanlığında amaç kimin haklı olduğunu bulmak değil; kurulamayan o ilk cümlenin yolunu açmaktır.

**Alt bölümler:**
- Ergenlikte iletişim neden bu kadar zorlaşır?
- Tartışmadan sonra ilk adımı kim atmalı?
- Ebeveyn görüşmesi: çocuğu getirmeden başlamak

**CTA:** Ebeveyn görüşmesi için randevu al
**İkincil:** Blog: "Kavgadan sonra ne söylemeli?"

## 6. Gerekli görseller

Bkz. [[scroll-iki-oda-brief]] (promptlar ve video promptları).

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur.

- **Görsel promptları:** [[scroll-iki-oda-brief]] (`07-AI-Gorsel/humentis/scroll-iki-oda-brief.md`)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ergen-ve-ebeveyn/iki-oda/`
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/ergen-ve-ebeveyn/iki-oda/`
- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)
- **Müzik:** 18%'de gece parçası; 78%'de sabah parçasına geçiş.

### Sahne listesi

§3 Kısa kesim tablosu birebir sahne listesidir (yüzde, tip, görsel, yazı).

### Özel davranışlar

- **Yeni tip `kesit`:** tek büyük görsel üzerinde kamera yolu. Sahne verisinde odak noktaları `{x%, y%, ölçek}` olarak verilir; kamera noktalar arasında scroll ile yumuşak geçer. Görsel 3:2 ya da daha geniş üretilir ki pan payı olsun.
- Sahne 4–5'te iki typing aynı anda: sol metin duvarın solunda, sağ metin sağında, alt hizada. Aynı hızda yazılıp aynı anda silinir.
- Arda hiçbir karede görünmez; sağ odada kişi olmadan sadece lamba ve telefon ışığı.

### Görsel dosyaları

- `kesit.jpg`: evin kesiti, gece, yan yana oda + yemek odası
- `iki-oda.jpg`: kesitte sadece iki yatak odası, aradaki duvar ortada
- `iki-oda-lamba-kapali.jpg`: aynısı, sağ odada lamba kapalı
- `gul-oda.jpg`: Gül arkadan yatağın kenarında
- `duvar-gul.jpg`: Gül başını duvara yaslamış
