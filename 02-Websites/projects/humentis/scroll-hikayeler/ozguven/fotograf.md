---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-ozguven-fotograf
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ozguven]
related: ["[[00-genel-bakis]]", "[[ozguven]]", "[[teknik-spec]]", "[[scroll-fotograf-brief]]"]
---

# Özgüven — "Fotoğraf"

> Şevval tarafından seçildi (28 Eylül 2026); özgüven için dört hikâyenin biri ([[fotograf]], [[kiyafetler]], [[mikrofon]], [[dans-pisti]]), hoca seçer. Kural: **ekranda yazı yok**, her şey videodan anlaşılır; sadece sondaki site başlığı var. Hocalar: Elif Silav, Zeynep Baltacı, Sena Şimşek, Beliz Kafalı.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-fotograf-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Bir genç kadın (Defne) ve beş arkadaşı. Hepsi gün batımına karşı silüet; yüz yok. Defne hep ön planda, omzunun arkasından görünür. |
| Konu | Özgüven |
| Duygusal çekirdek | Arkadaşları onu kadraja çağırıyor. O gülümseyip telefonu alıyor: 'Ben çekerim.' Hiçbir fotoğrafta yok. |
| Mekân | Gün batımında bir sahil ya da tepe; arkada turuncu gökyüzü |
| Geçiş | Deklanşöre basıldığı an ekran beyaz bir flaşla parlar; flaş krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Gün batımı. Beş arkadaş fotoğraf için yan yana diziliyor, kollarını birbirinin omzuna atıyorlar. Defne biraz geride, kenarda duruyor. Arkadaşlarından biri eliyle 'gel' işareti yapıyor. Defne başını sallıyor, telefonu kaldırıyor ve kadrajın dışında kalıyor. Arkadaşları poz veriyor. Deklanşör.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `fotograf` 0 sn | Arkadaşlar diziliyor, Defne kenarda (omuz üstü) | — |
| 12–40 | kurgu | `fotograf` 0→3 sn | Biri eliyle 'gel' işareti yapar | — |
| 40–60 | kurgu | `fotograf` 3→5 sn | Defne başını sallar, telefonu kaldırır, geri adım atar | — |
| 60–80 | kurgu | `fotograf` 5→son | Arkadaşlar poz verir; telefon ekranında silüetleri | — |
| 80–100 | geçiş | son kare | Deklanşör: beyaz flaş ekranı doldurur, krem zemine erir | **Hep kadrajın dışında kalıyorsanız** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur; izleyici kendisi fark etsin.

## 4. Açıldığı site bölümü

**Başlık:** Hep kadrajın dışında kalıyorsanız

**İlk paragraf:** Bazı insanlar hep fotoğrafı çeken, hep kenarda duran, hep 'ben olmasam da olur' diyen kişidir. Bu bazen tevazu gibi görünür; ama çoğu zaman görünür olmaktan, yer kaplamaktan duyulan bir çekingenliktir. Özgüvenle çalışırken kendinize yer açmanın, fotoğrafın içinde durabilmenin yollarını birlikte ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Öz değer ile özgüven arasındaki fark
- 'Ben olmasam da olur' düşüncesi nereden gelir?
- Görünür olmaya adım adım alışmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Deklanşör anı: yaklaşma yok; 80–86 arası kısa, keskin beyaz flaş (opaklık 0→1→0.85), ardından krem `#erime`. Flaşla birlikte çok hafif 'çek' sesi (varsayılan kapalı).
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ozguven/fotograf/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ozguven/fotograf/` → `kf-baslangic.jpg`, `fotograf.mp4` (üretilecek)
- **Üst bant:** `DIŞ MEKAN — SAHİL — GÜN BATIMI`
- **Kurallar:** Yüz yok; arka plandaki insanlar bulanık silüet. Okunur yazı ya da marka yok.
