---
type: kutuphane
tags: [ai-video, tutarlilik, marka, rehber]
date: 2026-09-16
---

# Tutarlılık Rehberi — "kuruma özgü" videonun sırrı

> AI video üretiminde en büyük sorun: aynı ürün/kişi/mekan her klipte biraz farklı çıkıyor. Bu dosya, 5 klipten oluşan bir reels'in tek bir markanın videosu gibi görünmesi için yapılacakları sıralar. Sıra önem sırasıdır.

## 1. Gerçek fotoğraf + image-to-video (en güçlü yöntem)

Metinle ürün tarif ettirmek yerine **gerçek ürün fotoğrafını başlangıç karesi** yap. Model şişeyi, etiketi, rengi görselden alır; sen sadece hareketi yazarsın.

**Akış:**
1. Ürünün temiz, iyi ışıklı fotoğrafı (`03-Assets/images/<slug>/`). Yoksa müşteriden iste; e-ticaret çekimi yeterli.
2. Sahneye yerleştir: Gemini görsel (Nano Banana) / Midjourney "omni-reference" / Runway References → `keep the product exactly the same, place it on cream linen over travertine, soft window light` → sahne görseli.
3. Sahne görselini Kling / Veo 3.1 / Runway'e ver → sadece hareket promptu.
4. Her klip için **aynı** ürün fotoğrafından türetilmiş sahne görseli kullan.

**Hareket promptu örneği (I2V):**
```text
The camera slowly pushes in toward the bottle. Soft window light shifts subtly as if a curtain moves. The product, its label and cap remain exactly the same. Nothing else changes.
```

## 2. Ürün kartı (product sheet) — birebir tekrar

Marka brief'teki `EN product sheet` her prompt'a **kelimesi kelimesine** kopyalanır. "amber glass dropper bottle" bir klipte "brown glass bottle" olursa model başka şişe çizer. Değişiklik gerekiyorsa önce brief'te değiştir, sonra tüm promptlarda.

## 3. Karakter kartı (character sheet) — insan varsa

Yüz tutarlılığı en zayıf halka. Kurallar:
- İsim verme, **fiziksel tarif** ver ve sabit tut: `a woman in her early 30s, olive skin, dark hair in a low bun, no makeup look, wearing a cream linen shirt, small gold hoop earrings`
- Kıyafeti, saçı, aksesuarı her klipte aynı yaz.
- Referans görsel desteği olan modeli seç (Veo 3.1 referans, Kling Elements, Runway References, Hailuo subject reference).
- Mümkünse **yüzü gösterme**: eller, omuz, arkadan, profil. Kozmetikte "hands and product" çekimi hem tutarlı hem daha premium durur.
- Kurucu/terapist gibi gerçek kişi → gerçek çekim. AI sadece B-roll.

## 4. Mekan kartı (location sheet)

Aynı mantık: `a calm private counselling room: a soft sage-green armchair, warm oak side table with a single plant, linen curtains diffusing daylight, cream walls` → her klipte aynı cümle. Mekan değişecekse "same room, different angle" yerine yeni bir mekan kartı yaz.

## 5. Kamera & ışık & grade üçlüsü sabit

Bir reels içinde:
- **Lens ailesi** sabit (hep makro+85mm; araya 24mm geniş açı girince "başka video" hissi).
- **Işık yönü** sabit (hep soldan pencere).
- **Grade satırı** sabit (marka brief → renk grade hedefi, birebir).
- Post'ta tek LUT / tek renk düzeltme preset'i → küçük farkları kapatır.

## 6. Kare zincirleme (first/last frame)

Süreklilik gereken yerde:
- Klip 1'in **son karesini** dışa aktar → Klip 2'nin **ilk karesi** yap (Kling start frame, Veo 3.1 first frame, Luma keyframe).
- Ya da başlangıç + bitiş karesini birlikte ver → model arayı doldurur (ürün A açısından B açısına).

## 7. Seed & versiyon

- Seed destekleyen modelde (Veo API, Runway, bazı ComfyUI akışları) beğenilen sonucun seed'ini logla.
- Aynı seed + küçük prompt değişikliği → benzer kompozisyon.
- Her üretimi brief'in **Üretim Logu** tablosuna işle: model, sürüm, prompt varyantı, seed, dosya yolu, puan. Bir ay sonra "şu güzel klibi nasıl yapmıştık" sorusunun cevabı burası.

## 8. Yazı, logo, ekran = post-prodüksiyon

- Logo: `03-Assets/logos/<slug>/` → CapCut/Premiere/After Effects'te end-card.
- Yazı: marka brief → tipografi (Nefin: Cambria/Calibri; Humentis: Source Serif 4/Manrope).
- Telefon/laptop ekranı: AI'ye `solid flat green screen` çizdir → gerçek ekran görüntüsünü chroma key ile bindir.
- Altyazı: platform otomatik altyazısı değil, marka fontuyla manuel (sessiz izlenme yüksek).

## 9. Reels için tutarlı kurgu iskeleti

| Sn | Klip | Kaynak | Tutarlılık çapası |
|---|---|---|---|
| 0–2 | Hook (makro doku / soru overlay) | AI | ürün kartı + grade |
| 2–8 | Hero ürün (push-in) | AI I2V (gerçek foto) | aynı foto |
| 8–14 | Kullanım (el + ürün) | AI veya gerçek | karakter kartı (eller) |
| 14–20 | Kanıt (INCI/uzman notu overlay) | AI mekan/doku | mekan kartı |
| 20–25 | Kapanış: logo + CTA | Post | logo dosyası + font |

## 10. Kontrol

Klipleri yan yana koy (CapCut'ta tek zaman çizgisi), sesi kapat, 2× hızda izle. Göz "başka video"ya atlıyorsa sorun: renk (grade), lens (ölçek), ışık yönü, ürün formu. Sırasıyla düzelt.
