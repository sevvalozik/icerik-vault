---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-sosyal-kaygi-bos-ekran
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, sosyal-kaygi]
related: ["[[00-genel-bakis]]", "[[panik-ve-sosyal-kaygi]]", "[[teknik-spec]]", "[[scroll-bos-ekran-brief]]"]
---

# Panik ve Sosyal Kaygı — "Boş Ekran"

> Şevval tarafından seçildi (28 Eylül 2026). Metro (panik) ve Asansör denendi; kaygıyı en iyi hissettiren bu bulundu. Hocalar: Aybala Görkem Polat, Zeynep Baltacı, Sena Şimşek, Elif Silav.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-bos-ekran-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Emre, yirmili yaşlarda. Hep omzunun arkasından görünür, yüzü hiç görünmez. |
| Konu | Sosyal kaygı: kalabalıkta görünmez olmaya çalışmak, telefona sığınmak |
| Duygusal çekirdek | Partide herkes eğleniyor. O köşede, telefonuna bakıyor gibi yapıyor. Ekran kapalı. |
| Mekân | Akşam, kalabalık bir ev partisi (doğum günü): sıcak ışıklar, arkada bulanık, gülüşen silüetler |
| Geçiş | Kapkara telefon ekranı ekranı doldurur, sonra ekran "açılır": içinden krem ışık yayılır ve sitenin başlığı telefon ekranında belirir gibi gelir. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Bir arkadaşının doğum günü partisi. Salon kalabalık, müzik var, herkes gülüşüyor. Emre'nin buradaki tek tanıdığı mutfakta. Emre salonun köşesinde duvara yaslanmış; bir elinde meyve suyu, öbür elinde telefonu. Başını eğmiş, ekrana bakıyor, arada başparmağı ekranın üstünde kayıyor, meşgul görünüyor. Kamera omzunun üstünden telefona yaklaşıyor: ekran kapkara. Hiçbir şey açık değil. Telefonunda hiçbir şey yoktu. Sadece bakacak bir yer lazımdı.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–15 | kurgu | `bos-ekran` 0 sn | Omuz üstünden: köşede Emre, arkada bulanık parti | *Tanıdığı tek kişi mutfakta.* (3–14) |
| 15–60 | kurgu | `bos-ekran` 0→son (scrub) | Kamera yavaşça omzunun üstünden telefona yaklaşır; başparmak ekranda kayar; ekranın kapalı olduğu görünür | — |
| 55–75 | durgun | son kare | Siyah ekran, yansımada partinin bulanık ışıkları | *Telefonunda hiçbir şey yoktu.* |
| 75–88 | geçiş | son kare | Siyah ekrana yaklaşma: ekran kadrajı doldurur, parti sesi (varsa) kısılır | — |
| 86–100 | geçiş | — | Ekran "açılır": siyahın ortasından krem ışık büyür, sayfa olur | **Kalabalıkta telefonunuza sığınıyorsanız** |

Müzik: partinin boğuk uğultusu gibi çok hafif bir ortam sesi (varsayılan kapalı, ses düğmesiyle açılır). Siyah ekrana yaklaşırken susar.

## 4. Açıldığı site bölümü

**Başlık:** Kalabalıkta telefonunuza sığınıyorsanız

**İlk paragraf:** Bir ortama girerken kalbinizin hızlandığını, ne diyeceğinizi kafanızda defalarca prova ettiğinizi, sonunda da en güvenli köşeye çekilip telefonunuza baktığınızı fark ediyor olabilirsiniz. Bu utangaçlıktan fazlası olabilir: "herkes bana bakıyor, yanlış bir şey söyleyeceğim" hissi insanı sevdiği ortamlardan bile uzaklaştırır. Sosyal kaygıyla çalışırken bu hissin nasıl işlediğini birlikte anlar, adım adım yeniden alan açarız.

**Alt bölümler (metin uzmanla yazılacak):**
- Sosyal kaygı ile utangaçlık arasındaki fark
- "Herkes bana bakıyor" düşüncesi
- Kaçınmanın kısa vadede rahatlatıp uzun vadede büyüttüğü döngü
- Terapide nasıl çalışıyoruz?

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[altyazi]] ile aynı: tek klip `kurgu`, son kareye yaklaşma (`transform-origin` = telefon ekranının merkezi, `object-fit: cover` hesabıyla). Fark: yaklaşma sonunda beyaza değil **siyaha** varılır (brightness düşer), sonra `#erime` içinden krem bir daire büyür (`clip-path: circle()` 0 → 150%), "ekran açıldı" hissi verir.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/panik-ve-sosyal-kaygi/bos-ekran/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/panik-ve-sosyal-kaygi/bos-ekran/` → `kf-baslangic.jpg`, `bos-ekran.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — EV PARTİSİ — GECE`
- **Kurallar:** Yüz yok. Emre hep omzunun arkasından; arkadaki insanlar tamamen bulanık silüet. Telefon ekranı kapalı ve siyah, en fazla yansıma var.
