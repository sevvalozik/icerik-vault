---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-ozguven-kiyafetler
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ozguven]
related: ["[[00-genel-bakis]]", "[[ozguven]]", "[[teknik-spec]]", "[[scroll-kiyafetler-brief]]"]
---

# Özgüven — "Kıyafetler"

> Şevval tarafından seçildi (28 Eylül 2026); özgüven için dört hikâyenin biri ([[fotograf]], [[kiyafetler]], [[mikrofon]], [[dans-pisti]]), hoca seçer. Kural: **ekranda yazı yok**, her şey videodan anlaşılır; sadece sondaki site başlığı var. Hocalar: Elif Silav, Zeynep Baltacı, Sena Şimşek, Beliz Kafalı.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-kiyafetler-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Yirmili yaşlarda bir kadın. Hep arkadan görünür; kadrajda ayna yok. |
| Konu | Özgüven |
| Duygusal çekirdek | Bu akşam bir davete gidecekti. Her kıyafet bir kusuru hatırlatıyor. Sonunda gitmiyor. |
| Mekân | Akşam, küçük bir yatak odası; yatak, açık dolap, yumuşak lamba ışığı |
| Geçiş | Yataktaki kıyafet yığınının en üstündeki krem renkli kumaşa yaklaşma; kumaş krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Akşam. Yatağın üstünde hazır bir çanta ve topuklu ayakkabılar var. Genç kadın dolaptan bir elbise çıkarıp üstüne tutuyor, bırakıp yatağa atıyor. Bir tane daha, bir tane daha. Yataktaki yığın büyüyor. Sonunda yığının kenarına oturuyor ve ayakkabılarını yavaşça çıkarıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–10 | kurgu | `kiyafetler` 0 sn | Oda, yatakta çanta ve ayakkabı; kadın dolabın önünde, arkadan | — |
| 10–55 | kurgu | `kiyafetler` 0→6 sn | Bir elbise tutar, atar; bir diğeri; yığın büyür | — |
| 55–78 | kurgu | `kiyafetler` 6→son | Yatağın kenarına oturur, ayakkabılarını çıkarır | — |
| 78–100 | geçiş | son kare | Yığının üstündeki krem kumaşa yaklaşma, krem zemine erime | **Aynaya her baktığınızda bir kusur buluyorsanız** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur; izleyici kendisi fark etsin.

## 4. Açıldığı site bölümü

**Başlık:** Aynaya her baktığınızda bir kusur buluyorsanız

**İlk paragraf:** Hazırlanırken her kıyafette başka bir kusur görmek, sonunda 'boş ver, gitmeyeyim' demek... Beden algısı ve özgüven, gitmek istediğimiz yerlerden bizi sessizce alıkoyabilir. Terapide kendinize bakışınızı yumuşatmanın ve hayatınızı 'daha iyi göründüğüm bir gün'e ertelememenin yollarını birlikte ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Beden algısı ve özgüven
- Kendimizle konuşma biçimimiz
- Kaçınmanın döngüsünü kırmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede yığının en üstündeki krem kumaşın yeri ölçülür; `transform-origin` o nokta, ölçek 1→10, bulanıklık ve parlaklık artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ozguven/kiyafetler/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ozguven/kiyafetler/` → `kf-baslangic.jpg`, `kiyafetler.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — YATAK ODASI — AKŞAM`
- **Kurallar:** Yüz yok; arka plandaki insanlar bulanık silüet. Okunur yazı ya da marka yok.
