---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-ozguven-dans-pisti
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, ozguven]
related: ["[[00-genel-bakis]]", "[[ozguven]]", "[[teknik-spec]]", "[[scroll-dans-pisti-brief]]"]
---

# Özgüven — "Dans Pisti"

> Şevval tarafından seçildi (28 Eylül 2026); özgüven için dört hikâyenin biri ([[fotograf]], [[kiyafetler]], [[mikrofon]], [[dans-pisti]]), hoca seçer. Kural: **ekranda yazı yok**, her şey videodan anlaşılır; sadece sondaki site başlığı var. Hocalar: Elif Silav, Zeynep Baltacı, Sena Şimşek, Beliz Kafalı.
> **Durum:** Video henüz üretilmedi. Promptlar: [[scroll-dans-pisti-brief]].

## 1. Künye

| | |
|---|---|
| Karakter | Genç bir kadın, elinde bir bardak. Kenarda, hep arkadan ve belden aşağısı da görünecek şekilde. Dans edenler ışıklar içinde silüet. |
| Konu | Özgüven |
| Duygusal çekirdek | Müzik içinde çalıyor: ayağı tempo tutuyor, omuzları sallanıyor. Ama piste bir adım bile atmıyor. |
| Mekân | Gece, bir düğün ya da parti salonu; dans pisti, renkli ışıklar, pistte dans eden silüetler |
| Geçiş | Pistin üstündeki ışıklardan birine yaklaşma; bulanık ışık (bokeh) büyür, krem zemine döner. |
| Tahmini uzunluk | **3 ekran boyu** (~20 sn) |

## 2. Hikâye

Bir düğün gecesi. Pistte herkes dans ediyor, ışıklar dönüyor. Pistin kenarında genç bir kadın duruyor, elinde bir bardak. Ayağı müziğe tempo tutuyor, omuzları hafifçe sallanıyor. Pistin ortası ona çok yakın. Bir adım atacak gibi oluyor, sonra ağırlığını geri veriyor. Kenarda kalıyor.

## 3. Kısa kesim (bağlayıcı)

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–12 | kurgu | `dans` 0 sn | Pist, dans eden silüetler; kenarda kadın, arkadan | — |
| 12–50 | kurgu | `dans` 0→5 sn | Ayağı tempo tutar, omuzları müzikle sallanır | — |
| 50–72 | kurgu | `dans` 5→son | Bir adım atacak gibi olur, geri çekilir, kenarda kalır | — |
| 72–100 | geçiş | son kare | Pistin ışıklarından birine yaklaşma, bokeh büyür, krem zemine erime | **Hep kenarda kalmaktan yorulduysanız** |

**Yazı yok.** Tereddüt anı bilerek yavaş tutulur; izleyici kendisi fark etsin.

## 4. Açıldığı site bölümü

**Başlık:** Hep kenarda kalmaktan yorulduysanız

**İlk paragraf:** İçinizden geliyor ama bir adım atamıyorsunuz: dans etmek, söz almak, 'ben de varım' demek. Utanma ve dikkat çekme korkusu, en keyifli anları bile kenardan izlememize neden olabilir. Özgüvenle çalışırken o adımı atmanızı zorlaştıran sesleri birlikte fark eder, kendinize daha nazik bir alan açarız.

**Alt bölümler (metin uzmanla yazılacak):**
- Utanç ve dikkat çekme korkusu
- İçimizdeki eleştirel ses
- Kendinize alan açmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Motor:** [[kule]] ile aynı: tek klip `kurgu` + son karede geçiş.
- **Geçiş ayrıntısı:** Son karede pistin üstündeki en parlak ışık noktası ölçülür; `transform-origin` o nokta, ölçek 1→10, bulanıklık ve parlaklık artar, krem `#erime`.
- **Toplam uzunluk:** 3 ekran boyu (`#hikaye` 400vh)
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/ozguven/dans-pisti/`
- **Görsel/video klasörü:** `03-Assets/images/humentis/scroll/ozguven/dans-pisti/` → `kf-baslangic.jpg`, `dans.mp4` (üretilecek)
- **Üst bant:** `İÇ MEKAN — DÜĞÜN SALONU — GECE`
- **Kurallar:** Yüz yok; arka plandaki insanlar bulanık silüet. Okunur yazı ya da marka yok.
