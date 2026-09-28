---
type: website
framework: html
client: humentis
slug: humentis-scroll-iliski-yarim-adim
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/RXdT63xJjmFu1rggn9dgaS"
tags: [website, humentis, scroll, hikaye, iliskiler, baglanma]
related: ["[[00-genel-bakis]]", "[[iliskiler-ve-baglanma]]", "[[teknik-spec]]", "[[scroll-yarim-adim-brief]]"]
---

# İlişkiler ve Bağlanma — "Yarım Adım"

> **Site hazır (ön gösterim):** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/yarim-adim/` · Canlı: https://claude.ai/artifact/RXdT63xJjmFu1rggn9dgaS
> Şevval tarafından onaylandı (28 Eylül 2026): mantık onaylı, videolar 720p ön gösterim; 1080p ile değişecek.

## 1. Künye

| | |
|---|---|
| Karakterler | Ela, 32 · Kerem, 34 (ikisi de ışığa karşı silüet; yüzler hiç görünmez) |
| Konu | Kaçıngan bağlanma: yakınlaştıkça uzaklaşmak |
| Duygusal çekirdek | Ela her yaklaştığında Kerem yarım adım geri çekiliyor; aradaki mesafe hiç değişmiyor. Sonunda ilk kez çekilmiyor. |
| Mekân | Alacakaranlıkta açık bir arazi, ufuk çizgisi; sabit geniş plan |
| Geçiş | Kerem'in Ela'ya yürüdüğü klipten sonra ekran krem zemine erir; başlık "Yakınlaştıkça uzaklaşıyorsanız" |
| Tahmini uzunluk | ~13 ekran boyu scroll |

## 2. Hikâye

Ela ile Kerem bir yıldır birlikte. Ela her yaklaştığında Kerem'in bir bahanesi oluyor. Martta "Bu gece kalsana" diyor, Kerem "Yarın erken kalkacağım" diyor. Nisanda "Seni seviyorum" diyor; Kerem bir an duraksıyor: "…Ben de. Bugün çok yoruldum." Haziranda "Annemle tanışır mısın?"; "Bu ara iş çok yoğun."

Her seferinde Ela yarım adım yaklaşıyor, Kerem yarım adım geri çekiliyor. Aradaki mesafe hiç değişmiyor.

Ekimde Ela evin anahtarını uzatıyor: "İstersen." Kerem yine geri çekilecekti. Ama bu sefer çekilmiyor. İlk kez o, Ela'ya doğru yürüyor.

## 3. Scroll senaryosu (kurgu)

Kamera hiç kıpırdamaz. Her klip scroll'a bağlı oynar; geri kaydırınca hareket geri gider. Aylar arasında kısa kararma.

| % | Klip (sn) | Ne oluyor | Yazı |
|---|---|---|---|
| 0–7 | adim (0) | İkisi karşılıklı duruyor | ortada: *Ela ile Kerem bir yıldır birlikte.* · köşede **MART** |
| 7–17 | adim (0.6→3.6) | Ela yarım adım yaklaşır | Ela'nın üstünde: *"Bu gece kalsana."* |
| 18–27 | geri (0→3.4) | Kerem yarım adım geri çekilir | Kerem'in üstünde: *"Yarın erken kalkacağım."* |
| 27–29 | — | kararma | **NİSAN** |
| 29–37 / 38–47 | adim / geri | aynı | *"Seni seviyorum."* / *"…Ben de. Bugün çok yoruldum."* |
| 47–49 | — | kararma | **HAZİRAN** |
| 49–57 / 58–67 | adim / geri | aynı | *"Annemle tanışır mısın?"* / *"Bu ara iş çok yoğun."* |
| 67–72 | geri (son kare) | durgun | alt: *Aradaki mesafe hiç değişmedi.* |
| 72–74 | — | kararma | **EKİM** |
| 74–80 | adim (0.6→3.6) | Ela yaklaşır | *"Evin anahtarı. İstersen."* |
| 80–84 | adim (son kare) | durgun | alt: *Kerem yine geri çekilecekti.* |
| 84–93 | yaklas (0→3.9) | **Kerem Ela'ya yürür** | alt (87–93): *Bu sefer çekilmedi.* |
| 94–100 | — | krem zemine erime | **Yakınlaştıkça uzaklaşıyorsanız** |

## 4. Açıldığı site bölümü

**Başlık:** Yakınlaştıkça uzaklaşıyorsanız

**İlk paragraf:** Bazı insanlar için yakınlık hem en çok istenen hem en çok korkulan şeydir. Biri yaklaştığında içeride bir alarm çalar: iş birden yoğunlaşır, yorgunluk bastırır, "biraz alana ihtiyacım var" cümlesi kendiliğinden gelir. Bu bir sevgisizlik değil, öğrenilmiş bir korunma biçimidir. Terapide o geri adımın ne zaman ve neden atıldığını birlikte fark eder, yerinde kalabilmenin yollarını ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Kaçıngan bağlanma nedir?
- Partneriniz hep uzaklaşıyorsa
- Çift olarak döngüyü birlikte fark etmek

**CTA:** Ön görüşme için randevu al

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. **Uygulaması hazır:** `scroll-siteler/iliskiler-ve-baglanma/yarim-adim/index.html`.

- **Görsel/video promptları:** [[scroll-yarim-adim-brief]]
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/yarim-adim/`
- **Video klasörü:** `03-Assets/images/humentis/scroll/iliskiler-ve-baglanma/yarim-adim/` → `adim.mp4`, `geri.mp4`, `yaklas.mp4` (şu an 720p ön gösterim)
- **Sahne tipi:** `kurgu` (bkz. şartname): `KURGU` dizisinde her satır `[başlangıç %, bitiş %, klip, klip başı sn, klip sonu sn]`; aralar kararma ile geçilir.
- **Replik konumu:** Ela'nın cümleleri kadrajın %24'ünde, Kerem'inkiler %68'inde, üstte. 1080p klipler gelince figür konumlarına göre ayarlanır.
