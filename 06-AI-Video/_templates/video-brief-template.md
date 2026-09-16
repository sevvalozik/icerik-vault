---
type: video-brief
client: ""
slug: ""
kampanya: ""
platform: reels
oran: "9:16"
hedef_sure: "20-30 sn"
model_birincil: kling
model_yedek: veo
status: draft
date: 2026-09-16
tags: [ai-video, brief]
related: []
---

# {{Müşteri}} — {{Kampanya}} — AI Video Brief

> Doldurma sırası: 1 → 2 → 3 → 4 → 5. Prompt yazmadan önce [[prompt-formulu]] (30 sn'lik kontrol) ve [[kalite-kontrol]]. Ürün gerçekse [[tutarlilik-rehberi]] madde 1 (gerçek foto + I2V) zorunlu.

## 1. Amaç & mesaj

- **Tek cümlelik amaç:** (örn. "C vitamini serumunu 25 sn'lik reels'te doku + fayda + ritüelle tanıtmak")
- **İzleyici ne hissetsin / ne yapsın:** 
- **Platform / oran / süre:** Reels 9:16, 20–30 sn (3–5 klip × 8 sn)
- **Yayın tarihi:** 
- **Onay veren:** 

## 2. Marka çapası

- Marka brief: `[[00-Musteriler/<slug>/marka-brief]]`
- **AI Brief Bloğu** (brief'ten kopyala, değiştirme):

```text
(buraya yapıştır)
```

- **Grade satırı (EN):** 
- **Negatif liste (sektör):** [[negatif-promptlar]] → hangi bölüm

## 3. Ürün / karakter / mekan kartları (birebir kopyalanacak)

| Kart | EN metin | Referans görsel (I2V başlangıç karesi) |
|---|---|---|
| PRODUCT SHEET | `` | `03-Assets/images/<slug>/…` |
| CHARACTER SHEET (varsa) | `` | — |
| LOCATION SHEET | `` | — |

## 4. Kurgu planı

| # | Sn | Çekim | Amaç (hook/ürün/doku/kullanım/kanıt/kapanış) | Kaynak (AI / gerçek / post) | Model | Durum |
|---|---|---|---|---|---|---|
| 1 | 0–3 | | hook | AI | | ☐ |
| 2 | 3–9 | | ürün | AI I2V | | ☐ |
| 3 | 9–15 | | | | | ☐ |
| 4 | 15–21 | | | | | ☐ |
| 5 | 21–25 | logo + CTA | kapanış | post | — | ☐ |

**Ekran yazıları (post'ta, marka fontuyla):**
- 0–3 sn hook yazısı: 
- Orta: 
- Kapanış CTA: 

**Ses:** müzik (post'ta) / SFX (modelden) / seslendirme (ayrı üretim) — hangisi?

## 5. Shot promptları

### Shot 1 — {{ad}}

**Varyant A (güvenli)**
```text
[1 STİL] … [2 KONU: PRODUCT SHEET] … [3 AKSİYON] … [4 MEKAN] … [5 KAMERA] … [6 IŞIK] … [7 GRADE] … [8 ATMOSFER] … [9 SES] … [10 TEKNİK] …
```
**Negatif**
```text
```
**Varyant B (cesur)**
```text
```
- Model / mod: (örn. Kling 2.x Pro, I2V, relevance 0.6)
- Başlangıç karesi: 
- Süre / oran: 8 sn / 9:16

### Shot 2 — {{ad}}
(aynı yapı)

## 6. Post-prodüksiyon

- [ ] Klipler `03-Assets/videos/<slug>/` altına `<slug>-<kampanya>-s01-v1.mp4` adıyla
- [ ] Renk: tek LUT / preset (adı: )
- [ ] Yazı: font (brief → tipografi), hook üstte sabit (sessiz izleme)
- [ ] Logo end-card: `03-Assets/logos/<slug>/…`
- [ ] Müzik: (lisans notu)
- [ ] Altyazı manuel
- [ ] Dışa aktarım: 1080×1920, H.264, 30 fps (reels) — orijinal klipler 24 fps ise dönüşümü kontrol et

## 7. Üretim logu

| Tarih | Shot | Model / sürüm | Varyant | Seed | Dosya | Puan (1–5) | Not |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## 8. Durum & onay

- **Durum:** draft → uretimde → kurguda → onayda → yayinda
- **Müşteri geri bildirimi:** 
- **Öğrenilenler (bir sonraki brief'e taşınacak):** 
