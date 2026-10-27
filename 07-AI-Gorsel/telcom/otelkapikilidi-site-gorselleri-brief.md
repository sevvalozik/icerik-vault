---
type: gorsel-brief
client: "Telcom"
slug: telcom
kampanya: "otelkapikilidi-site-gorselleri"
kullanim: "web-hero / web bölüm görseli"
oran: "16:9, 4:3, 4:5"
model_birincil: gemini
status: draft
date: 2026-10-27
tags: [ai-gorsel, brief, telcom, otelkapikilidi, website]
related: ["[[00-Musteriler/telcom/marka-brief]]", "[[05-Kod-Projeleri/telcom/otelkapikilidi-web-proje-ozeti]]", "[[gorsel-prompt-formulu]]"]
---

# Telcom — otelkapikilidi.com site görselleri — AI Görsel Brief

> Neden: Şevval, 27.10.2026: "görselleri aynısını mı kullanmalıyız?" Karar: kardeş sitelerin (generalkilit.com, telcom.com.tr) fotoğrafları bu sitede kalıcı olmayacak; aynı görsel üç sitede olunca siteler birbirinin kopyası gibi görünür, Google görsel aramada aynı resmin üç sahibi olur, bazılarının stok lisansı yeni alan adını kapsıyor mu bilinmiyor ❓. Şimdilik yer tutucu: telcom.com.tr `slider1` (açılış) ve `slider3` (oda). Bu brief'le üretilen görseller gelince yerlerine geçer; Telcom'un referans otellerden kurulum fotoğrafı gelirse ❓ (Furkan Bey'den istenecek) o daha önceliklidir.
> Formül: [[gorsel-prompt-formulu]] · Negatifler: [[negatif-promptlar]] (Genel + Kurumsal) · Ürün gerçek: **fotoğrafı yükle, tarif ettirme.**

## 1. Amaç

- **Nerede kullanılacak:** otelkapikilidi.com anasayfa açılışı (tam genişlik, metin solda lacivert geçişin üstünde), "Odayı tamamlayan sistemler" bölümü (4:3), ileride ürün aile sayfaları.
- **Kaç adet, hangi oran:** 5 görsel × 2 varyant (aşağıdaki liste).
- **Üstüne yazı gelecek mi:** Açılışta **evet, sol üçte bir**: orası koyu ve sade kalmalı (sitede lacivert geçiş zaten var, görselde ürün/el sağ yarıda). Diğerlerinde yazı yok.

## 2. Marka çapası

- Marka brief: [[00-Musteriler/telcom/marka-brief]] (27.10.2026 site yönü: sade, şık, lüks otellere hizmet veren; Telcom laciverti `#13263d`, açık taş `#f4f3f1`, ince pirinç vurgu `#a8875a`).
- **Grade satırı (EN):** `quiet luxury hotel photography, warm neutral evening light, soft contrast, deep navy-charcoal shadows, brushed steel highlights, low saturation, natural materials (walnut, oak, linen, travertine)`
- **Referans görsel (stil çapası):** sitedeki yer tutucu `public/gorsel/acilis-kapi.jpg` (kompozisyon), ışık için ❓ beğenilen lüks otel fotoğrafı seçilecek.
- **Negatif:** `text, letters, logo, watermark, brand names, competitor logos, people's faces, extra fingers, deformed hands, warped door, bent lock plate, extra handles, changed lock design, keypad on the lock, glowing neon, purple tint, blue cast, hdr glow, cartoon, 3d render look, cheap hotel, fluorescent light, clutter`

## 3. Kartlar

| Kart | EN metin | Yüklenecek dosya |
|---|---|---|
| PRODUCT SHEET — General | `the uploaded hotel RFID card door lock, kept exactly the same: tall brushed stainless steel escutcheon, dark card-reader window near the top, curved lever handle, mortise lock body hidden inside the door` | `data/uploads/2024/06/general-otel-kapi-kilidi.jpeg` (ya da General Black: `generalblack.jpeg`) |
| PRODUCT SHEET — Energy Saver | `the uploaded white hotel energy saver card switch, kept exactly the same, wall-mounted at shoulder height next to the room door` | `data/uploads/kardes/generalkilit.com/2022/10/energy-saver-on.png` |
| PRODUCT SHEET — Doorbell | `the uploaded black glass DND / make-up-room doorbell panel with a room number, kept exactly the same, mounted beside the door frame` | `data/uploads/kardes/generalkilit.com/2022/10/doorbell-1.png` (Would) |
| PRODUCT SHEET — Dolap | `the uploaded electronic keypad locker lock, kept exactly the same, on a wooden spa locker door` | `data/uploads/kardes/generalkilit.com/2022/10/sifreli-dolap-kilidi-2.png` (DK112) |
| LOCATION SHEET | `a quiet five-star hotel corridor with walnut veneer doors, warm sconces, soft carpet, travertine details; no people except a guest's hand` | — |

## 4. Görsel listesi

| # | Kullanım | Oran | Kompozisyon notu | Model | Durum |
|---|---|---|---|---|---|
| 1 | Anasayfa açılışı (masaüstü) | 16:9, ≥2400 px | Kapı + kilit + karta tutan el **sağ yarıda**, sol üçte bir koyu ve boş (başlık) | Gemini (Nano Banana Pro), ürün yükle | ☐ |
| 2 | Anasayfa açılışı (telefon) | 4:5 | Aynı sahne; kilit üst yarıda, alt yarı koyu ve boş (metin) | Gemini | ☐ |
| 3 | "Odayı tamamlayan sistemler" | 4:3 | Oda girişi: kapının iç yüzü, yanında energy saver, kart yuvada; arkada yatak yumuşak odakta | Gemini, energy saver yükle | ☐ |
| 4 | Doorbell (aile sayfası / ileride bant) | 4:3 | Koridordan oda kapısı, kapı yanında doorbell paneli, DND ışığı yanıyor | Gemini, doorbell yükle | ☐ |
| 5 | Dolap kilidi (aile sayfası) | 4:3 | Spa soyunma odası, ceviz dolap kapıları, bir kapıda tuş takımlı kilit | Gemini, DK112 yükle | ☐ |

## 5. Promptlar

### Görsel 1 — Açılış, kapıda kart (16:9)
```text
Quiet luxury hotel photograph, photorealistic. The uploaded hotel RFID card door lock kept exactly the same, mounted on a dark walnut veneer guest room door in a five-star hotel corridor. A guest's hand in a soft wool sleeve holds a plain white key card against the card-reader window. Composition: door, lock and hand on the right half; the left third is calm, dark, out-of-focus corridor wall for headline text. Eye-level, 50mm lens, shallow depth of field. Warm brass wall sconce light from the left, gentle reflection on the brushed steel. Warm neutral evening grade, soft contrast, deep navy-charcoal shadows, low saturation. 16:9, high resolution. No text, no logos, no brand names, no faces.
```
Varyant B: `…the hand is just lowering the card, a small green status light glows on the lock…` (LED rengi gerçek ürünle ❓ doğrulanmalı; emin değilsen LED'i hiç isteme).

### Görsel 2 — Açılış, telefon (4:5)
```text
Quiet luxury hotel photograph, photorealistic. The uploaded hotel RFID card door lock kept exactly the same on a dark walnut veneer guest room door, seen close, a guest's hand holding a plain white key card to the reader. Composition: lock and hand in the upper half; the lower half is dark, softly lit door surface and corridor shadow for text. Eye-level, 50mm lens, shallow depth of field. Warm sconce light from above left, brushed steel highlights. Warm neutral evening grade, deep navy-charcoal shadows, low saturation. 4:5, high resolution. No text, no logos, no faces.
```

### Görsel 3 — Oda girişi, energy saver (4:3)
```text
Quiet luxury hotel interior photograph, photorealistic. Inside a five-star guest room at the entrance: the back of the walnut room door on the left, and next to it the uploaded white energy saver card switch kept exactly the same, wall-mounted at shoulder height with a plain white key card inserted. Beyond, softly out of focus, a made bed with white linen, a travertine side table and a warm bedside lamp. Composition: energy saver at the right-third line, sharp; room soft. Eye-level, 35mm lens. Warm evening lamp light, soft contrast, low saturation, natural oak and linen tones. 4:3, high resolution. No text, no logos, no people.
```

### Görsel 4 — Koridor, doorbell (4:3)
```text
Quiet luxury hotel corridor photograph, photorealistic. A walnut veneer guest room door, and beside the door frame the uploaded black glass doorbell panel kept exactly the same, its do-not-disturb indicator softly lit. Soft carpet, warm brass sconces, travertine skirting, a long corridor fading out of focus. Composition: panel and door edge on the left third, corridor perspective to the right. Eye-level, 50mm lens, shallow depth of field. Warm evening light, soft contrast, deep navy-charcoal shadows, low saturation. 4:3, high resolution. No text, no room numbers, no logos, no people.
```
Not: panelde oda numarası **post-prodüksiyonda** (AI rakam yazmasın).

### Görsel 5 — Spa soyunma odası, dolap kilidi (4:3)
```text
Quiet luxury hotel spa changing room photograph, photorealistic. A row of tall walnut locker doors; on the nearest door the uploaded electronic keypad locker lock kept exactly the same, sharp. A folded white towel on a travertine bench, warm indirect light, steam-soft background. Composition: lock at the left-third line, lockers receding to the right. Eye-level, 50mm lens, shallow depth of field. Warm neutral grade, soft contrast, low saturation. 4:3, high resolution. No text, no numbers, no logos, no people.
```

## 6. Post

- [ ] Ürün aynı mı: kilit gövdesi, kol, okuyucu penceresi gerçek ürünle karşılaştırıldı (bkz. [[kalite-kontrol]]); değiştiyse görsel kullanılmaz
- [ ] Yazı/logo yok; gerekiyorsa post'ta
- [ ] Web'e: JPEG kalite 80, açılış 2400 px, diğerleri 1600 px; `public/gorsel/` dosya adları: `acilis-kapi.jpg` (1), `acilis-kapi-telefon.jpg` (2 — siteye `<picture>` ile bağlanacak), `oda.jpg` (3), `koridor-doorbell.jpg` (4), `spa-dolap.jpg` (5)
- [ ] Ham dosya: `03-Assets/images/telcom/telcom-otelkapikilidi-site-<kullanim>-01.png`
- [ ] Log'a işlendi: [[07-AI-Gorsel/telcom/gorsel-log]]

## 7. Üretim logu

| Tarih | # | Model | Prompt varyantı | Dosya | Puan | Not |
|---|---|---|---|---|---|---|
| | | | | | | |
