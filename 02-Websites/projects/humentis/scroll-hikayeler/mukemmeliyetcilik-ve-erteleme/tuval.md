---
type: website
framework: html
client: humentis
slug: humentis-scroll-mukemmeliyetcilik-tuval
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, mukemmeliyetcilik, erteleme]
related: ["[[00-genel-bakis]]", "[[mukemmeliyetcilik-ve-erteleme]]", "[[teknik-spec]]", "[[scroll-tuval-brief]]"]
---

# Mükemmeliyetçilik ve Erteleme — "Tuval"

> Şevval tarafından seçildi (28 Eylül 2026). Kural: **ekranda yazı yok**; sadece sondaki site başlığı var. Hocalar: Başak Kale, Sena Şimşek, Zeynep Baltacı.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-tuval-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Otuzlu yaşlarda biri, üstünde boyalı bir önlük. Hep arkadan ya da arka çaprazdan; yüz yok. |
| Konu | Mükemmeliyetçilik ve erteleme: "Kusursuz olmayacaksa hiç olmasın." |
| Duygusal çekirdek | Resim yapmayı seviyor. Ama her çizgi yeterince iyi değil. Tuval günlerdir boş. |
| Mekân | Gündüz, pencereli küçük bir oda ya da atölye; şövale, boş beyaz tuval, yerde buruşturulmuş eskiz kâğıtları |
| Geçiş | Silinip yine bembeyaz kalan tuvale yaklaşma; tuvalin beyazı ekranı doldurur, krem zemine döner. **Boş tuval, sitenin sayfası olur.** |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Pencereden gün ışığı giren küçük bir oda. Şövalede kocaman, bembeyaz bir tuval duruyor, yerde buruşturulmuş eskiz kâğıtları var. Biri tuvalin önünde duruyor, elinde fırça. Tuvale tek bir renkli çizgi çekiyor. Bir adım geri çekilip bakıyor. Sonra bir bezle çizgiyi siliyor. Tuval yine boş.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `tuval` 0 sn | Boş tuval, yerde buruşuk eskizler; kişi tuvalin önünde, arkadan | — |
| 12–40 | kurgu | `tuval` 0→3 sn | Fırçayla tek bir çizgi çeker | — |
| 40–55 | kurgu | `tuval` 3→5 sn | Bir adım geri çekilip bakar | — |
| 55–75 | kurgu | `tuval` 5→son | Bezle çizgiyi siler; tuval yine bembeyaz | — |
| 75–100 | geçiş | son kare | Boş tuvale yaklaşma; beyaz ekranı doldurur, krem zemine erime | **Kusursuz olmayacaksa hiç başlamıyorsanız** |

**Yazı yok.** İstenirse tekrar hissi kodla güçlendirilir: 12–55 arası (çiz → bak) iki kez oynatılır, ikincisi biraz daha hızlı; ardından silme.

## 4. Açıldığı site bölümü

**Başlık:** Kusursuz olmayacaksa hiç başlamıyorsanız

**İlk paragraf:** Bir işe başlamayı sürekli ertelemek çoğu zaman tembellikten değil, yeterince iyi yapamama korkusundan gelir. Çıta o kadar yüksektir ki ilk adım bile ağır gelir; yapılan her şey "daha iyi olmalıydı" sesiyle silinir. Terapide bu iç sesi tanır, "yeterince iyi"nin ne olduğunu birlikte yeniden tanımlar ve başlamayı kolaylaştıran küçük adımlar kurarız.

**Alt bölümler (metin uzmanla yazılacak):**
- Mükemmeliyetçilik ile yüksek standart arasındaki fark
- Erteleme neden bir tembellik değildir?
- "Yeterince iyi" ile barışmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede boş tuvale yaklaşma (`transform-origin` = tuvalin merkezi, `object-fit: cover` hesabıyla), ölçek 1→8, parlaklık artar, krem `#erime`. Tuvalin beyazından kremin rengine yumuşak geçiş.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/mukemmeliyetcilik-ve-erteleme/tuval/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/mukemmeliyetcilik-ve-erteleme/tuval/` → `kf-baslangic.jpg`, `tuval.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — ATÖLYE — GÜNDÜZ`
- **Kurallar:** Yüz yok. Tuvalde, çekilen tek çizgi dışında hiçbir şey yok.
