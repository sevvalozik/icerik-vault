---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Motor Kapalı"
kullanim: "scroll site karesi"
oran: "16:9"
model_birincil: gemini
status: draft
date: 2026-09-28
tags: [ai-gorsel, brief, humentis, scroll, motor-kapali]
related: ["[[motor-kapali]]", "[[teknik-spec]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]", "[[gorsel-prompt-formulu]]"]
---

# Humentis — Scroll: Motor Kapalı — AI Görsel Brief

> Hikâye: [[motor-kapali]] · Şartname: [[teknik-spec]]
> **Kayıt klasörü:** `03-Assets/images/humentis/scroll/tukenmislik-ve-is-stresi/motor-kapali/` · Dosya adı = aşağıdaki kod + `.jpg` (hayalet figürler `.png`). Doğru adla konan görseli site kendiliğinden kullanır, kod değişmez.

## Nasıl üretilir

1. **Her kare için Gemini'de yeni sohbet** aç (aynı sohbette önceki görseli temel alıp bozuyor).
2. Önce karakterin **ilk karesini** üret, en iyisini seç. Sonraki karelerde onu **referans görsel olarak yükle** ve promptun başına şunu ekle: `Same person as the reference image, same clothes and hair.`
3. İndirirken Gemini'nin **indirme butonunu** kullan (sağ tık → kaydet küçük boyut indiriyor).
4. Gemini'de ayrı negatif alan yok; kural cümleleri promptun içinde. Kaçırırsa şu listeyi sona ekle: `Avoid: visible face, facial features, face in profile, face reflection, children, teenager, child's hands, crying, hospital, medical equipment, pills, text, letters, logo, watermark, readable screen, app interface, extra fingers, deformed hands, plastic skin, pastel pink, lavender, purple gradient, neon, horror lighting, cartoon, 3d render look`

## Karakter kartları (her promptta birebir)

- **SELIM:** `a man in his early forties, short dark hair greying at the temples, a neatly trimmed short beard, wearing a navy wool overcoat over a light blue shirt with a loosened dark tie`

## Filmden hazır kareler (üretme, zaten kopyalandı)

- `arka-koltuk.jpg` ← filmdeki `humentis-bulunma-c1.jpg`
- `el-telefon.jpg` ← filmdeki `humentis-bulunma-c2.jpg`

## Kareler

| # | Kod | Sahne | Model | Durum |
|---|---|---|---|---|
| 1 | `konsol` | Ön konsolda yanan telefon | Gemini | ☐ |
| 2 | `cam` | Ön camda yağmur damlaları, arkada otopark | Gemini | ☐ |

## Promptlar

### 1 — `konsol`

Ön konsolda yanan telefon · **Referans:** arka-koltuk (filmdeki c1)

```text
Cinematic film still, photorealistic, close-up. The centre console of a parked left-hand-drive car at night: a phone lies in the console tray, its screen lit with a soft blank glow and no readable content, lighting the dark dashboard around it; blurred car park lamps through the windscreen. No people visible. 85mm lens, shallow depth of field. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

### 2 — `cam`

Ön camda yağmur damlaları, arkada otopark · **Referans:** arka-koltuk

```text
Cinematic film still, photorealistic. View through the windscreen of a parked car at night, focus on rain droplets on the glass, behind them a soft blurred open-air office car park with cool white street lamps and a few parked cars. No people, no wipers moving. 50mm lens, shallow depth of field on the droplets. Cool blue-teal night grade, deep petrol-green shadows, soft practical light as the key light, low saturation, gentle contrast, dim but readable, never horror-dark, filmic grain. 16:9, high resolution, photorealistic. No text, no logos, no watermark, no readable screens.
```

## Notlar

- `arka-koltuk` ve `el-telefon` filmden kopyalandı (sol direksiyonlu yenilenmiş hâlleri).
- Alternatif geçişler seçilirse: silecek klibi `The wiper sweeps once across the windscreen. Nothing else moves.`

## Üretim logu

| Tarih | Kod | Model | Varyant | Puan | Not |
|---|---|---|---|---|---|
| | | | | | |
