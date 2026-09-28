---
type: website
framework: html
client: humentis
slug: humentis-scroll-ayrilik-yatak
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ayrilik, iliski-sonrasi]
related: ["[[00-genel-bakis]]", "[[ayrilik-ve-iliski-sonrasi]]", "[[teknik-spec]]", "[[scroll-yatak-brief]]"]
---

# Ayrılık ve İlişki Sonrası — "Yatak"

> Şevval tarafından seçildi (28 Eylül 2026); üç hikâyeden biri ([[dolap]], [[bagaj]], [[yatak]]). Ton: **yetişkin** ayrılığı (birlikte yaşamış otuzlu–kırklı yaşlar), gençlik aşkı hissi yok. Kural: **ekranda yazı yok**. Hocalar: Başak Kale, Sena Şimşek (aldatılma).
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-yatak-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Otuzlu yaşlarda bir yetişkin. Hep arkadan ya da yandan, yüz yok. |
| Konu | Ayrılık ve ilişki sonrası süreç |
| Duygusal çekirdek | Aylardır yatağın hep kendi tarafında uyuyor. Bu sabah ikinci yastığı kaldırıyor ve kendi yastığını ortaya koyuyor. |
| Mekân | Sabah, aydınlık bir yatak odası; çift kişilik yatak, iki yastık, pencereden güneş |
| Geçiş | Yatağın ortasına konan yastığın üstündeki sabah güneşine yaklaşma; beyaz nevresim ve ışık krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Sabah. Güneş pencereden içeri doluyor. Çift kişilik yatağın bir tarafı dağınık, öbür tarafı hiç bozulmamış. Biri yatağı topluyor, yorganı düzeltiyor. Dokunulmamış taraftaki ikinci yastığı alıp dolaba kaldırıyor. Sonra kendi yastığını yatağın tam ortasına koyup düzeltiyor ve bir an durup bakıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `yatak` 0 sn | Bir tarafı dağınık, bir tarafı bozulmamış çift kişilik yatak | — |
| 12–38 | kurgu | `yatak` 0→3 sn | Yorganı düzeltir | — |
| 38–60 | kurgu | `yatak` 3→6 sn | İkinci yastığı alıp dolaba kaldırır | — |
| 60–80 | kurgu | `yatak` 6→son | Kendi yastığını yatağın ortasına koyar, durup bakar | — |
| 80–100 | geçiş | son kare | Ortadaki yastığın üstündeki sabah güneşine yaklaşma, krem zemine erime | **Ayrılığın ardından kendinize yeniden yer açmak** |

**Yazı yok.**

## 4. Açıldığı site bölümü

**Başlık:** Ayrılığın ardından kendinize yeniden yer açmak

**İlk paragraf:** Bir ilişkinin bitişi yalnızca bir kayıp değil, zamanla kendinize yeniden alan açmanın da başlangıcı olabilir. Bu geçiş kimi zaman aylar sürer; bazı sabahlar ağır, bazıları biraz daha hafif gelir. Terapide ayrılığın yasını tutarken bir yandan da kendi ihtiyaçlarınızı, sınırlarınızı ve yeni hayatınızı birlikte keşfederiz.

**Alt bölümler (metin uzmanla yazılacak):**
- Ayrılık sonrası iyileşme bir çizgi değildir
- Yalnızlık ile yalnız kalabilmek arasındaki fark
- Yeni bir ilişkiye ne zaman hazır olunur?

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede yatağın ortasındaki yastığın üstü ölçülür; `transform-origin` o nokta, ölçek 1→8, parlaklık ve güneş ışığı katmanı artar, krem `#erime`. Bu hikâyenin bitişi umutlu: ışık diğerlerinden daha sıcak.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ayrilik-ve-iliski-sonrasi/yatak/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ayrilik-ve-iliski-sonrasi/yatak/` → `kf-baslangic.jpg`, `yatak.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — YATAK ODASI — SABAH`
- **Kurallar:** Yüz yok. Fotoğraf, çerçeve ya da okunur yazı yok; ayrılığı sadece boşalan yerler anlatır.
