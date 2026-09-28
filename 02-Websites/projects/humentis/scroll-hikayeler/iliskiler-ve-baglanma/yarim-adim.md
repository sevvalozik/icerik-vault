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
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye

Ela ile Kerem bir yıldır birlikte. Ela her yaklaştığında Kerem'in bir bahanesi oluyor. Martta "Bu gece kalsana" diyor, Kerem "Yarın erken kalkacağım" diyor. Nisanda "Seni seviyorum" diyor; Kerem bir an duraksıyor: "…Ben de. Bugün çok yoruldum." Haziranda "Annemle tanışır mısın?"; "Bu ara iş çok yoğun."

Her seferinde Ela yarım adım yaklaşıyor, Kerem yarım adım geri çekiliyor. Aradaki mesafe hiç değişmiyor.

Ekimde Ela evin anahtarını uzatıyor: "İstersen." Kerem yine geri çekilecekti. Ama bu sefer çekilmiyor. İlk kez o, Ela'ya doğru yürüyor.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–10 | kurgu | adim (0) | İkisi karşılıklı | köşede **MART** |
| 10–25 | kurgu | adim 0.6→3.6 · geri 0→3.4 | Ela yaklaşır, Kerem geri çekilir | *"Bu gece kalsana."* → *"Yarın erken kalkacağım."* |
| 25–28 | kararma | — | — | **NİSAN** |
| 28–45 | kurgu | adim · geri | Aynı döngü | *"Seni seviyorum."* → *"…Bugün çok yoruldum."* |
| 45–48 | kararma | — | — | **EKİM** |
| 48–62 | kurgu | adim 0.6→3.6 | Ela anahtarı uzatır | *"Evin anahtarı. İstersen."* |
| 62–88 | kurgu | yaklas 0→3.9 | Kerem ilk kez Ela'ya yürür | *Bu sefer çekilmedi.* |
| 88–100 | geçiş | — | Krem zemine erime | **Yakınlaştıkça uzaklaşıyorsanız** |

**Kısaltmada çıkarılanlar:** Üçüncü döngü (Haziran), giriş cümlesi ve "Aradaki mesafe hiç değişmedi" / "Kerem yine geri çekilecekti" satırları çıkarıldı.

## 4. Açıldığı site bölümü

**Başlık:** Yakınlaştıkça uzaklaşıyorsanız

**İlk paragraf:** Bazı insanlar için yakınlık hem en çok istenen hem en çok korkulan şeydir. Biri yaklaştığında içeride bir alarm çalar: iş birden yoğunlaşır, yorgunluk bastırır, "biraz alana ihtiyacım var" cümlesi kendiliğinden gelir. Bu bir sevgisizlik değil, öğrenilmiş bir korunma biçimidir. Terapide o geri adımın ne zaman ve neden atıldığını birlikte fark eder, yerinde kalabilmenin yollarını ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Kaçıngan bağlanma nedir?
- Partneriniz hep uzaklaşıyorsa
- Çift olarak döngüyü birlikte fark etmek

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)

> Bu bölüm [[teknik-spec]] ile birlikte okunur. **Uygulaması hazır:** `scroll-siteler/iliskiler-ve-baglanma/yarim-adim/index.html`.

- **Görsel/video promptları:** [[scroll-yarim-adim-brief]]
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/yarim-adim/`
- **Video klasörü:** `03-Assets/images/humentis/scroll/iliskiler-ve-baglanma/yarim-adim/` → `adim.mp4`, `geri.mp4`, `yaklas.mp4` (şu an 720p ön gösterim)
- **Sahne tipi:** `kurgu` (bkz. şartname): `KURGU` dizisinde her satır `[başlangıç %, bitiş %, klip, klip başı sn, klip sonu sn]`; aralar kararma ile geçilir.
- **Replik konumu:** Ela'nın cümleleri kadrajın %24'ünde, Kerem'inkiler %68'inde, üstte. 1080p klipler gelince figür konumlarına göre ayarlanır.
