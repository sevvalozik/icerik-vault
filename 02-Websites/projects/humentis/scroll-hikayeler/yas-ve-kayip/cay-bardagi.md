---
type: website
framework: html
client: humentis
slug: humentis-scroll-yas-cay-bardagi
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, yas, kayip]
related: ["[[00-genel-bakis]]", "[[yas-ve-kayip]]", "[[teknik-spec]]", "[[scroll-cay-bardagi-brief]]"]
---

# Yas ve Kayıp — "Çay Bardağı"

> Şevval tarafından seçildi (28 Eylül 2026). Kural: **ekranda yazı yok**; her şey videodan anlaşılır, sadece sondaki site başlığı var. Hocalar: Solmaz Şenyüz, Sena Şimşek.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-cay-bardagi-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Yetmişli yaşlarda bir kadın. Sadece arkadan, omzu ve elleri görünür, yüz yok. |
| Konu | Yas: alışkanlığın, kaybı kalpten önce hatırlaması |
| Duygusal çekirdek | Kırk yıl boyunca her sabah iki bardak çay koydu. Bu sabah da koydu. |
| Mekân | Sabah, küçük bir mutfak; pencere kenarında iki kişilik masa. Karşıdaki boş sandalyenin arkasında bir erkek hırkası asılı. |
| Geçiş | Tek bardaktan yükselen buhara yaklaşma; buhar ve sabah ışığı ekranı doldurur, krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Sabah. Pencere kenarındaki küçük masada iki ince belli çay bardağı var. Kadın demlikten kendi bardağını dolduruyor. Sonra alışkanlıkla demliği karşıdaki bardağa uzatıyor ve eli havada kalıyor. Karşıdaki sandalye boş, arkasında bir erkek hırkası asılı. Demliği yavaşça bırakıyor ve boş bardağı kendine doğru çekiyor. Tek bardaktan buhar yükseliyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–10 | kurgu | `cay` 0 sn | Masa, iki boş bardak, hırkalı boş sandalye; kadın arkadan | — |
| 10–30 | kurgu | `cay` 0→3 sn | Kendi bardağına çay doldurur | — |
| 30–55 | kurgu | `cay` 3→6 sn | Demliği karşıdaki bardağa uzatır, eli havada kalır | — |
| 55–75 | kurgu | `cay` 6→son | Demliği bırakır, boş bardağı kendine doğru çeker | — |
| 75–100 | geçiş | son kare | Dolu bardaktan yükselen buhara yaklaşma, parlaklık artar, krem zemine erime | **Kaybın ardından günler eksik kalıyorsa** |

**Yazı yok.** 55–75 arası kasıtlı olarak yavaş: izleyici hırkayı ve boş bardağı kendisi fark etsin. İstenirse çok hafif bir kaşık-bardak sesi (varsayılan kapalı).

## 4. Açıldığı site bölümü

**Başlık:** Kaybın ardından günler eksik kalıyorsa

**İlk paragraf:** Sevdiğimiz birini kaybettiğimizde yas yalnızca büyük anlarda değil, en sıradan alışkanlıklarda da karşımıza çıkar: masaya fazladan konan bir bardak, çalmayan bir telefon, boş kalan bir sandalye. Yasın bir takvimi, "doğru" bir yaşanma biçimi yok. Terapide kaybınızla birlikte yaşamayı öğrenirken, onu anmanın ve hayata yeniden tutunmanın size uygun yollarını birlikte ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Yasın evreleri gerçekten sırayla mı yaşanır?
- "Artık geçmesi gerekmez miydi?" düşüncesi
- Yas sürecinde ne zaman destek almak iyi gelir?

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu`, son karede buhara yaklaşma (`transform-origin` = dolu bardağın üstü, `object-fit: cover` hesabıyla), bulanıklık, parlaklık, ışık katmanı, ardından krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/yas-ve-kayip/cay-bardagi/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/yas-ve-kayip/cay-bardagi/` → `kf-baslangic.jpg`, `cay.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — MUTFAK — SABAH` (yazı olmadığı için bu küçük bant bile istenirse kaldırılabilir)
- **Kurallar:** Yüz yok. Fotoğraf, çerçeve ya da isim gibi "açıklayıcı" nesne yok; kaybı sadece hırka ve boş bardak anlatır.
