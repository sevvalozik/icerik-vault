---
type: website
framework: html
client: humentis
slug: humentis-scroll-aile-sofra
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/JA6qPca6YyueSojgzk2gr9"
tags: [website, humentis, scroll, hikaye, aile-danismanligi, iletisim]
related: ["[[00-genel-bakis]]", "[[aile-danismanligi]]", "[[teknik-spec]]", "[[scroll-sofra-brief]]"]
---

# Aile Danışmanlığı — "Sofra"

> Şevval tarafından seçildi (28 Eylül 2026). Telefonları bırakma sahnesi özellikle çıkarıldı: hikâye bir çözüm göstermiyor, sadece durumu gösteriyor. Hocalar: aile danışmanlarının hepsi (özellikle Beliz Kafalı, Barış Can Kolçak).
> **Durum (29 Eylül 2026):** Site hazır: `02-Websites/projects/humentis/scroll-siteler/aile-danismanligi/sofra/`. Video: `sofra.mp4` (Flow/Veo, 1080p, 8 sn). Flow, çocuk/ergen elleri tarif edilince "ihlal" verdi; dört yetişkin olarak üretildi. Buhar çıkarıldı. Geçiş, Şevval'in seçimiyle **tepedeki sarkıt lambaya** yükselme (ortadaki tabak/kapak değil).

## 1. Künye

| | |
|---|---|
| Karakterler | Bir aile, dört kişi: anne, baba, bir genç, bir çocuk. Sadece elleri ve kolları görünür, yüz yok. |
| Konu | Aile içi iletişim: aynı masada ama birbirinden uzak |
| Duygusal çekirdek | Kimse kavga etmiyor, kimse bir şey yapmıyor. Yemek soğuyor. |
| Mekân | Akşam, ev mutfağı ya da salon; kuşbakışı (tam üstten) çekilmiş yemek masası |
| Geçiş | Kamera masanın üstündeki sarkıt lambaya yükselir; lambanın ışığı krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Akşam yemeği hazır. Masada sıcak bir tencere, dört tabak. Masanın dört yanında dört çift el var ve her birinde bir telefon ışıldıyor. Başparmaklar kayıyor, kimse tabağına dokunmuyor. Tencereden yükselen buhar yavaş yavaş inceliyor, sonra kayboluyor. Yemek soğudu.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–15 | kurgu | `sofra` 0 sn | Kuşbakışı masa: tencereden buhar, dört el telefonda | — |
| 12–68 | kurgu | `sofra` 0→son (scrub) | Başparmaklar kayar, kimse yemeğe dokunmaz | *Aynı masada, dört ayrı oda.* (28–60) |
| 64–100 | geçiş | son kare | Tepedeki sarkıt lambaya yaklaşma (ölçek 1→8, hedef %50 / %16), parlaklık ve ışık artar, krem zemine erime | **Aynı evde, birbirinize uzak mı hissediyorsunuz?** |

## 4. Açıldığı site bölümü

**Başlık:** Aynı evde, birbirinize uzak mı hissediyorsunuz?

**İlk paragraf:** Bazen bir ailede büyük bir kavga yoktur; sadece herkes kendi köşesine çekilmiştir. Aynı masaya oturulur ama konuşulmaz, aynı evde yaşanır ama birbirini görmek zorlaşır. Aile danışmanlığında bu sessizliğin nereden geldiğini birlikte anlamaya, aile üyelerinin birbirine yeniden ulaşabileceği küçük ama gerçek yollar bulmaya çalışırız.

**Alt bölümler (metin uzmanla yazılacak):**
- Aile danışmanlığı ne zaman iyi gelir?
- Ekranlar, ergenler ve aile içi iletişim
- İlk görüşmede neler konuşuyoruz?

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu`, sonda son kareye yaklaşma (`transform-origin` = ortadaki boş tabak), bulanıklık, parlaklık, ışık katmanı, ardından krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/aile-danismanligi/sofra/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/aile-danismanligi/sofra/` → `kf-baslangic.jpg`, `sofra.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — AİLE EVİ — AKŞAM`
- **Kurallar:** Yüz yok; çocuğun sadece eli görünür (bkz. teknik-spec). Telefon ekranlarında okunur yazı ya da marka yok, sadece bulanık ışık.
