---
type: website
framework: html
client: humentis
slug: humentis-scroll-sinav-kapi
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, sinav-kaygisi, performans-kaygisi]
related: ["[[00-genel-bakis]]", "[[sinav-ve-performans-kaygisi]]", "[[teknik-spec]]", "[[scroll-kapi-brief]]", "[[ayni-paragraf]]"]
---

# Sınav ve Performans Kaygısı — "Kapı"

> Şevval tarafından seçildi (28 Eylül 2026). [[ayni-paragraf]] karışık bulununca yerine önerilen sade versiyon. Hocalar: Zeynep Baltacı, Sena Şimşek.
> **Durum:** Başlangıç görseli hazır (`kf-baslangic.jpg`). Video henüz üretilmedi. Üretilince site [[kule]] / [[altyazi]] motoruyla kurulacak.

## 1. Künye

| | |
|---|---|
| Karakter | Genç bir öğrenci, yeşil ceket, sırt çantası. Hep arkadan görünür, yüz yok. |
| Konu | Sınav ve performans kaygısı (sınav, sunum, iş görüşmesi): o kapının önündeki an |
| Duygusal çekirdek | Hazır, biliyor. Ama kapıyı açmak dünyanın en ağır işi gibi. Bir nefes alıyor ve açıyor. |
| Mekân | Sabah ışığında sessiz bir okul koridoru, buzlu camlı ahşap kapı |
| Geçiş | Kapı açılınca içeriden sıcak ışık taşar; kamera ışığa ilerler, aydınlık krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Sabah, boş bir koridor. Bir öğrenci sınav salonunun kapısının önünde duruyor. Eli kapı koluna uzanıyor, dokunmadan duruyor. Omuzları derin bir nefesle kalkıp iniyor. Sonra kolu tutup kapıyı açıyor ve içeriden ışık taşıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `kapi` 0 sn | Öğrenci kapının önünde duruyor | *Kapının önünde üç dakikadır duruyor.* (2–14) |
| 12–40 | kurgu | `kapi` 0→3 sn | Eli kola uzanır, dokunmadan durur | — |
| 40–58 | kurgu | `kapi` 3→5 sn | Derin bir nefes: omuzlar kalkar, iner | — |
| 58–78 | kurgu | `kapi` 5→son | Kolu tutar, kapıyı açar; ışık taşar | — |
| 76–100 | geçiş | son kare | Açılan kapının ışığına yaklaşma, ışık krem zemine döner | **Sınav yaklaştıkça nefesiniz daralıyorsa** |

## 4. Açıldığı site bölümü

[[ayni-paragraf]] §5 ile aynı blog yazısı: **Sınav yaklaştıkça nefesiniz daralıyorsa** (spot, ilk paragraf, alt bölümler ve CTA orada). Hoca sunum ya da iş görüşmesi kaygısına odaklanıyorsa başlık "Önemli bir an yaklaştıkça nefesiniz daralıyorsa" olabilir.

## Kodlama için

- **Motor:** [[kule]] ile aynı. Tek klip `kurgu`, sonda son kareye yaklaşma (`transform-origin` = kapı açıklığı, `object-fit: cover` hesabıyla), bulanıklık, parlaklık ve ışık katmanı, ardından krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/sinav-ve-performans-kaygisi/kapi/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/sinav-ve-performans-kaygisi/kapi/` → `kf-baslangic.jpg` (hazır), `kapi.mp4` (üretilecek)
- **Promptlar:** [[scroll-kapi-brief]]
- **Üst bant:** `İÇ MEKAN — OKUL KORİDORU — SABAH`
- **Yaklaşma hedefi:** video gelince son karede kapı açıklığının merkezi ölçülüp yazılacak.
