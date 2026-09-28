---
type: website
framework: html
client: humentis
slug: humentis-scroll-ozguven-mikrofon
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ozguven]
related: ["[[00-genel-bakis]]", "[[ozguven]]", "[[teknik-spec]]", "[[scroll-mikrofon-brief]]"]
---

# Özgüven — "Mikrofon"

> Şevval tarafından seçildi (28 Eylül 2026); özgüven için dört hikâyenin biri ([[fotograf]], [[kiyafetler]], [[mikrofon]], [[dans-pisti]]), hoca seçer. Kural: **ekranda yazı yok**, her şey videodan anlaşılır; sadece sondaki site başlığı var. Hocalar: Elif Silav, Zeynep Baltacı, Sena Şimşek, Beliz Kafalı.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-mikrofon-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Genç bir adam, kucağında gitar. Hep arkadan görünür. Kafedeki diğer insanlar bulanık silüet. |
| Konu | Özgüven |
| Duygusal çekirdek | Şarkısı hazır, gitarı kucağında. Sahne boş, sıra onda. Kalkmıyor. |
| Mekân | Akşam, küçük bir kafede açık sahne gecesi; sahnede spot ışığı altında boş bir mikrofon |
| Geçiş | Boş mikrofonun üstündeki spot ışığına yaklaşma; sıcak ışık ekranı doldurur, krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Küçük bir kafede açık sahne gecesi. Sahnede, spot ışığının altında boş bir mikrofon duruyor. Arka masalardan birinde genç bir adam kucağındaki gitarı tutuyor. Sunucu sahnenin yanından ona doğru eliyle davet eder gibi işaret ediyor. Adam gitarın sapını biraz daha sıkı tutuyor, başını hafifçe sallıyor ve yerinden kalkmıyor. Mikrofon boş kalıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `mikrofon` 0 sn | Arka masada gitarlı adam (arkadan), ileride spot altında boş mikrofon | — |
| 12–45 | kurgu | `mikrofon` 0→4 sn | Sunucu ona eliyle davet işareti yapar | — |
| 45–72 | kurgu | `mikrofon` 4→son | Gitarı sıkıca tutar, başını sallar, kalkmaz | — |
| 72–100 | geçiş | son kare | Boş mikrofonun spot ışığına yaklaşma, krem zemine erime | **Söyleyecek sözünüz varken susuyorsanız** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur; izleyici kendisi fark etsin.

## 4. Açıldığı site bölümü

**Başlık:** Söyleyecek sözünüz varken susuyorsanız

**İlk paragraf:** Hazırsınız, biliyorsunuz, istiyorsunuz da; ama sıra size geldiğinde bir şey sizi yerinize bağlıyor. 'Ya beğenilmezse, ya rezil olursam' düşüncesi, sevdiğimiz şeyleri bile yapmamızı engelleyebilir. Özgüvenle çalışırken o sandalyeden kalkabilmenin, sesinizi duyurabilmenin yollarını birlikte ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Başarısızlık korkusu ve özgüven
- 'Herkes beni yargılayacak' düşüncesi
- Küçük adımlarla cesaret

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede spot ışığı altındaki mikrofonun üstü ölçülür; `transform-origin` o nokta, ölçek 1→9, parlaklık ve sıcak ışık katmanı artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ozguven/mikrofon/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ozguven/mikrofon/` → `kf-baslangic.jpg`, `mikrofon.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — KAFE — AÇIK SAHNE GECESİ`
- **Kurallar:** Yüz yok; arka plandaki insanlar bulanık silüet. Okunur yazı ya da marka yok.
