---
type: website
framework: html
client: humentis
slug: humentis-scroll-ayrilik-dolap
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ayrilik, iliski-sonrasi]
related: ["[[00-genel-bakis]]", "[[ayrilik-ve-iliski-sonrasi]]", "[[teknik-spec]]", "[[scroll-dolap-brief]]"]
---

# Ayrılık ve İlişki Sonrası — "Dolap"

> Şevval tarafından seçildi (28 Eylül 2026); üç hikâyeden biri ([[dolap]], [[bagaj]], [[yatak]]). Ton: **yetişkin** ayrılığı (birlikte yaşamış otuzlu–kırklı yaşlar), gençlik aşkı hissi yok. Kural: **ekranda yazı yok**. Hocalar: Başak Kale, Sena Şimşek (aldatılma).
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-dolap-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Otuzlu–kırklı yaşlarda bir yetişkin; sadece eli ve kolu görünür. |
| Konu | Ayrılık ve ilişki sonrası süreç |
| Duygusal çekirdek | Birlikte yaşadıkları evde dolabın yarısı boşaldı. Kendi kıyafetleriyle o boşluğu doldurmaya çalışıyor; kapanmıyor. |
| Mekân | Sabah, sade bir yatak odası; iki kapaklı ahşap gardırop |
| Geçiş | Gardırobun boş kalan arka duvarına (açık renk ahşap) yaklaşma; ahşap ve ışık krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Sabah. İki kapaklı bir gardırobun sol kapağı açılıyor: o taraf boş. Rayda sadece boş askılar var, bir ikisi hâlâ hafifçe sallanıyor. Bir el boş askıları tek tek toplayıp kenara alıyor. Sonra sağ taraftaki kendi kıyafetlerini askıyla birlikte boş tarafa doğru kaydırıyor. Kıyafetler yayılıyor ama boşluk kapanmıyor; rayın ortasında bir aralık kalıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `dolap` 0 sn | Kapalı gardırop | — |
| 12–35 | kurgu | `dolap` 0→3 sn | Sol kapak açılır: boş askılar, biri sallanıyor | — |
| 35–55 | kurgu | `dolap` 3→5 sn | El boş askıları toplayıp kenara alır | — |
| 55–78 | kurgu | `dolap` 5→son | Kendi kıyafetlerini boş tarafa kaydırır; aralık kapanmaz | — |
| 78–100 | geçiş | son kare | Raydaki boşluğun arkasındaki açık renk ahşaba yaklaşma, krem zemine erime | **Bir ilişkinin ardından boşluk kapanmıyorsa** |

**Yazı yok.**

## 4. Açıldığı site bölümü

**Başlık:** Bir ilişkinin ardından boşluk kapanmıyorsa

**İlk paragraf:** Birlikte kurulmuş bir hayat bittiğinde geriye yalnızca duygular değil, boş kalan yerler de kalır: dolabın yarısı, masanın öbür ucu, alışkanlıkların içindeki diğer kişi. Ayrılığın ardından yas tutmak, öfkelenmek, kendini suçlamak ya da hiçbir şey hissetmemek; hepsi bu sürecin parçası olabilir. Terapide bu boşlukla birlikte yaşamayı ve kendi hayatınızı yeniden kurmayı birlikte çalışırız.

**Alt bölümler (metin uzmanla yazılacak):**
- Ayrılık sonrası yas
- 'Neden olmadı?' sorusuyla baş etmek
- Aldatılma sonrası güveni yeniden kurmak
- Yeni bir düzene alışmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede raydaki boşluğun arkasındaki ahşap panelin ortası ölçülür; `transform-origin` o nokta, ölçek 1→8, parlaklık artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ayrilik-ve-iliski-sonrasi/dolap/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/dolap/` → `kf-baslangic.jpg`, `dolap.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — YATAK ODASI — SABAH`
- **Kurallar:** Yüz yok. Fotoğraf, çerçeve ya da okunur yazı yok; ayrılığı sadece boşalan yerler anlatır.
