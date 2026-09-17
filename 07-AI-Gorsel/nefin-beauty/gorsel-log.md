---
type: gorsel-log
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-16
tags: [ai-gorsel, log, nefinbeauty]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[c-vitamini-serum-kampanya-brief]]"]
---

# Nefin Beauty — Görsel Logu

> `03-Assets/images/nefin-beauty/` kaydı. Boyutlar ölçüldü (16 Eylül 2026). Promptlar kaydedilmemiş (❓); bundan sonra her üretim buraya işlenir.

## Onaylı görseller (beğenilenler)

| Dosya | Boyut / oran | İçerik | Model | Prompt | Puan |
|---|---|---|---|---|---|
| `nefin-beauty-gold-tonic-liquid-macro-v1.jpg` | 1696×2528 (~2:3 dikey) | 24K Gold Tonic sıvısının ekstrem makro çekimi — cam kenar, altın tanecikler süspansiyonda, ivory/şeffaf zemin, ürün "malzeme/ingredient" fotoğrafı gibi (şişe kadrajda yok) | Gemini görsel | ↓ "Gold Tonic Liquid Macro — Onaylı Prompt" (aşağıda) | 5 — beğenildi |
| `nefin-beauty-daily-moisture-cream-ecommerce-hero-v1.png` | 687×1024 (~2:3 dikey) | Daily Moisture Cream — tek başına, sade, e-ticaret ürün fotoğrafı; etiket yazısı kusursuz net (kamera çekimi gibi) | Gemini görsel | ↓ "MASTER E-Ticaret Ürün Fotoğrafı Prompt'u" (aşağıda) | 5 — beğenildi, marka için standart ürün fotoğrafı şablonu seçildi |

### Gold Tonic Liquid Macro — Onaylı Prompt (16 Eylül 2026)

> Şişe göstermeden, sadece sıvı + içindeki altın tanecikleri konu alan "ingredient photography" tarzı — ürün galerisi / detay görseli için. Malzeme fotoğrafçılığı hissi (bilimsel + lüks bir arada).

```text
Create a premium macro skincare texture photograph inspired by high-end Scandinavian beauty campaigns.

Use the uploaded NEFIN Cosmetics 24K GOLD TONIC as the exact visual reference for the liquid appearance.

Create an extreme close-up editorial image of the transparent golden tonic liquid.

Show delicate floating 24K-gold-like particles suspended naturally inside the translucent liquid.

The liquid should look fresh, lightweight, hydrated and luminous.

Use a soft warm ivory and transparent glass environment.

Very subtle champagne-gold reflections inside the liquid.

The composition should feel sophisticated, scientific, clean and luxurious at the same time.

Think premium skincare ingredient photography rather than a commercial advertisement.

Extremely realistic liquid physics. Natural suspended particles. Realistic refraction. Subtle highlights. Soft diffused daylight. Clean minimal background.

No bottle dominating the frame. No people. No hands. No skin. No flowers. No leaves. No colorful ingredients. No dark background. No burgundy. No red. No black. No artificial glitter explosion. No fantasy liquid. No excessive gold.

Vertical composition suitable for a product gallery.

Photorealistic macro skincare photography, ultra-realistic liquid texture, refined editorial aesthetic, subtle film grain.

No text. No typography. No watermark.
```

## Karma sonuçlu görseller (kısmen başarılı)

### Vitamin C+ Serum — "ingredient story" bilgi görseli (17 Eylül 2026)

- **Dosya:** `03-Assets/images/nefin-beauty/nefin-beauty-vitamin-c-serum-ingredient-story-v1.png`
- **Referans görsel (gerçek dosya, rakip marka):** `03-Assets/images/nefin-beauty/ilham-referanslar/the-purest-ingredient-infographic-referans.png` — The Purest markasının bir içerik/bileşen infografiği, sadece kompozisyon/sanat yönü referansı olarak kullanıldı (marka/logo/tipografi kopyalanmadı, brief'te zaten "Rakipler & İlham" bölümünde The Purest geçiyor).
- **Konsept:** Ürünün etrafında bileşen bilgisi anlatan dairesel makro görsellerle (Liposomal C, Hyaluronic Acid, Niacinamide, Vitamin C+) bilimsel/editoryal bir "ingredient story" kompozisyonu.
- **Şevval'in değerlendirmesi:** "Bu kısım gayet güzel olmuş. Ama sol taraf ve sağ tarafta arka plan rengi farklı gözüküyor ve benim verdiğim referans görselinden farklılık var. Ürün görselinin olmasını istememiştim ekstra olarak mesela."
- **Claude'un görsel tespiti:** Doğrulandı — kompozisyonun sol yarısı (Liposomal C + serum dokusu daireleri) sıcak/ivory tonlu bir zemin üzerinde, sağ yarısı (Hyaluronic Acid + Niacinamide daireleri) ise daha soğuk/düz beyaz bir zeminde duruyor — görselin ortasında net bir "dikiş" hissi var, tek bir kompozisyon gibi değil iki yarı birleştirilmiş gibi görünüyor. Referans görsel (The Purest) bu tutarsızlığı içermiyor, tek tip nötr zemin kullanıyor.
- **Önemli tercih notu:** Şevval, ürün şişesinin kompozisyonun ortasında yer almasını **istemediğini** belirtti — oysa bu deneme promptunda ürün açıkça "hero" olarak isteniyordu. Bu, bundan sonraki "ingredient story" tarzı görsellerde **varsayılan olarak ürün şişesi eklenmemesi gerektiği** şeklinde bir tercih değişikliği/netleşme olarak kaydedildi.
- **Puan:** Karma, 4/5 — konsept, tipografi ve bileşen dairelerinin kalitesi çok iyi; zemin tutarlılığı ve ürün dahil edilmesi düzeltilmeli.
- **Bir dahaki sefere:** (1) Prompt'a tüm kompozisyon için **tek, kesintisiz bir arka plan rengi** vurgusu ekle: `"the entire background must be a single continuous warm ivory tone across the whole composition — no visible seam or color shift between left and right halves."` (2) Ürün şişesini kompozisyondan çıkar, sadece bileşen daireleri + tipografi ile dene.

**Kullanılan prompt (özet, kritik kısımlar):** Ürün referans olarak korunacak (birebir), The Purest'in SADECE görsel mantığı/kompozisyon yapısı referans alınacak (marka/logo/tipografi kopyalanmayacak); 4-5 dairesel makro görsel bölgesi (Liposomal C, Hyaluronic Acid, Serum dokusu, Antioksidan/radiance), ince bağlayıcı çizgiler, modern sans-serif tipografi, sıcak ivory + şampanya/amber aksanlar, sadece marka brief'te onaylı iddialar kullanılacak (uydurma yüzde/iddia yok), 16:9, no people/hands/faces, no misspelled text. Tam prompt çok uzun (~500 satır) — orijinali bu konuşmada mevcut, gerekirse tekrar istenebilir.

### Daily Moisture Cream — cilt uygulama + bileşen-fayda editoryal görseli (17 Eylül 2026)

- **Dosya:** `03-Assets/images/nefin-beauty/nefin-beauty-daily-moisture-cream-ingredient-benefit-editorial-karma-v1.png`
- **Konsept:** Solda modelin yanağına krem süren eli (cilt uygulama anı), sağda ürün şişesi + krem dokusu büyütülmüş halde, her iki tarafta dairesel bileşen/fayda ikonları ve kısa fayda metinleri (Gün boyu nem desteği, Cildin nem bariyerini güçlendirmeye yardımcı, Esnek/pürüzsüz/doğal görünüm, E Vitamini + Allantoin, Argan/Badem/Kalendula/Shea/Jojoba Yağı + Aloe Vera) ve ürünün doku/his callout'ları (Yumuşak ve hafif doku, Hızlı emilim, Yağlı bir his bırakmaz).
- **Şevval'in değerlendirmesi:** "Bu gayet güzel olmuş ama ortadaki yağlar, vitaminler vs o kısımdaki yazı fontları farklı. Web sitesinde oluşturulacak tüm görsellerin yazı fontları aynı olmalı bütünlük açısından. Ve yağlar kısmındaki görselleri falan çok beğenemedim. Bir de boyut uyumsuzluğu var yukarıdan aşağıya olan yuvarlakların hepsinde."
- **Claude'un görsel tespiti:** Doğrulandı, üç ayrı sorun net görünüyor:
  1. **Font tutarsızlığı:** Üstteki 3 fayda başlığı ("GÜN BOYU NEM DESTEĞİ", "CİLDİN NEM BARİYERİNİ GÜÇLENDİRMEYE YARDIMCI", "ESNEK, PÜRÜZSÜZ VE DOĞAL GÖRÜNÜM") kalın/büyük harf bir sans-serif kullanıyor; hemen altındaki "E Vitamini / Allantoin" ve "Argan Yağı / Badem Yağı / Kalendula / Shea Yağı / Jojoba Yağı / Aloe Vera" listeleri ise farklı bir ağırlıkta/karakterde, büyük harf olmayan bir yazı tipiyle basılmış — tek bir kompozisyon içinde en az 2 farklı font ailesi/ağırlığı bir arada.
  2. **Yağlar bölümü ikon sorunu:** Sağdaki 7 dairesel ikondan sadece 3'ü (altın damla = muhtemelen bir yağ, turuncu çiçek = Kalendula, aloe yaprakları = Aloe Vera) ilgili bileşene görsel olarak karşılık geliyor; Argan Yağı, Badem Yağı, Shea Yağı, Jojoba Yağı ayrı ayrı listelenmiş olmasına rağmen kendilerine özgü bir ikonları yok — 6 farklı bileşen adına karşı yalnızca birkaç jenerik/örtüşen görsel var. Bu, ikonların "beğenilmeme" sebebinin sadece estetik değil, bileşen-ikon eşleşmesinin eksik/tutarsız olması olduğunu gösteriyor.
  3. **Boyut uyumsuzluğu:** Dairesel callout görselleri yukarıdan aşağıya gözle görülür şekilde farklı çaplarda — üstteki su damlası ve dokusal daireler birbirine yakın boyutta iken, alttaki yağ/aloe daireleri hem kendi aralarında hem üsttekilere göre büyüklük tutmuyor; tek bir dikey grid hizası yok.
- **Puan:** Karma, 3/5 — ana kompozisyon (model + ürün + genel layout) güçlü ama tipografi tutarlılığı, ikon-bileşen eşleşmesi ve daire boyutlandırması düzeltilmeden kullanılabilir değil.
- **Bir dahaki sefere:**
  1. Prompt'a tek tipografi vurgusu ekle: `"Use exactly one typeface family for ALL text in the composition — headlines and ingredient labels must share the same font, weight, and case (all caps or all title case, never mixed)."`
  2. Her bileşen için ayrı, o bileşene özgü somut ikon tarifi ver (jenerik "oil drop" yerine): `"Argan Yağı: a single amber argan oil drop with a visible argan nut fragment. Badem Yağı: a few whole almonds with one split open. Shea Yağı: a small ivory shea butter knob. Jojoba Yağı: a jojoba seed pod. Kalendula: a marigold/calendula flower. Aloe Vera: a cut aloe leaf showing the gel."` — 6 farklı bileşen, 6 farklı somut görsel referans, jenerik/tekrar eden ikon yok.
  3. Daire boyutu için: `"All circular ingredient callout icons must be rendered at exactly the same diameter and aligned to a single vertical grid — no size variation between them."`
- **Genel marka kuralı (brief'e eklendi):** "Web sitesi için üretilecek tüm AI görsellerinde yazı tipi tek ve tutarlı olmalı" — bkz. marka brief → Tipografi.

## Reddedilen denemeler

### "Gold Tonic — sabah ritüeli" görseli (16 Eylül 2026)

- **Dosya:** `03-Assets/images/nefin-beauty/reddedilen/nefin-beauty-gold-tonic-ritual-reddedilen-v1.png` (referans için tutuluyor, kullanılmaz)
- **Şişe/ürün kendisi:** başarılı — referansa sadık, ışık ve zemin marka yönüyle uyumlu
- **Sorun:** Şişenin yanına konan küçük cam kase/tabak benzeri obje görsel olarak **konuyla alakasız** duruyor — ne işe yaradığı belli değil, ürünle bağlantısı kurulmuyor
- **Kök neden:** Prompt'ta "a subtle translucent glass element suggesting hydration and freshness" gibi **muğlak** bir prop tarifi var — model bunu rastgele bir cam kaseye çeviriyor. Marka brief'in prop listesinde ("keten kumaş, traverten, terrazzo, ahşap, pamuk ped, portakal dilimi, altın tanecik, pampas otu") cam kase/tabak yok.
- **Düzeltme:** Prop'u muğlak tarif etme — ya marka brief'teki onaylı prop listesinden somut bir şey seç ("a folded cream linen cloth" gibi) ya da hiç prop ekleme, sadece ürün + zemin + ışık yeterli.
- **Puan:** 3 — ürün/ışık iyi ama yanındaki obje görseli zayıflatıyor

## AI üretimi (Gemini)

| Dosya | Boyut / oran | İçerik | Prompt | Kullanım / puan |
|---|---|---|---|---|
| `Gemini_Generated_Image_fqpt5kfqpt5kfqpt.png` | 2604×1632 (16:10) | Tam ürün ailesi (amber serumlar, tonik, krem, saşeler) keten + terrazzo + seramik vazo, pampas | ❓ | Ürün ailesi vitrini; 4/5 — ürün adedi çok, etiketler AI |
| `Gemini_Generated_Image_o93qqso93qqso93q.png` | 2604×1632 | Aynı sahnenin varyantı (ahşap masa) | ❓ | 4/5 |
| `Gemini_Generated_Image_uuhqycuuhqycuuhq.png` | 2604×1632 | Ürün ailesi, traverten zemin, "CC" kutu görünüyor | ❓ | 4/5 |
| `Gemini_Generated_Image_n99ji7n99ji7n99j.png` | 1301×816 (16:10) | "Nefin Cosmetics — Cildinizin Doğal Işıltısıyla Tanışın" hero konsepti, tonik + serum traverten üstünde, yazı AI | ❓ | Ana sayfa hero konsepti; yazı **onaysız slogan**, 3/5 (düşük çözünürlük) |
| `Gemini_Generated_Image_nqz1y7nqz1y7nqz1.jpeg` | 2752×1536 (16:9) | Hasır sepette 3 ürün, "NEFIN cosmetics" logo AI çizimi | ❓ | 3/5 — logo AI, kullanılmaz |
| `Gemini_Generated_Image_ogdjmvogdjmvogdj.jpeg` | 2750×1536 (16:9) | "Her Damlayla Parla — Vitamin C Gücü": el pipetle damla, portakal dilimi, ahşap | ❓ | Vitamin C anlatımı; 4/5 — yazı AI, slogan onaysız |
| `Gemini_Generated_Image_v6mmxav6mmxav6mm.jpeg` | 800×1304 (~9:15) | Telefonda "Nefin Cosmetics" WhatsApp sohbet mockup'ı (ürün kartları + fiyatlar) | ❓ | WhatsApp satış botu demosu; **fiyatlar/ürünler gerçek değil** |

## Gerçek / seçilmiş

| Dosya | Boyut | İçerik | Not |
|---|---|---|---|
| `nefin_hero.png` | 1280×803 | Seçilen hero (n99ji7 varyantının büyütülmüş hali gibi görünüyor) | Yazı AI; final hero'da yazı Cambria ile yeniden basılmalı |
| `nefin_24k_gold_tonic.jpg` | 403×1439 | Gerçek ürün: 24K Gold Tonic, bordo/kadife zemin | **Eski stil** (bordo yasak) — sadece form referansı; I2V için yeni krem-zemin çekim gerekli |
| `nefin_anti_acne_serum.jpg` | 280×700 | Gerçek ürün: Anti-Acne Serum, bordo zemin | aynı |
| `nefin_daily_moisture_cream.jpg` | 519×1382 | Gerçek ürün: Daily Moisture Cream (beyaz pompalı, altın kapak), bordo zemin | aynı |

## Gözlemler

1. Hiçbir görselin promptu yok → bundan sonra [[gorsel-brief-template]] ile.
2. Tüm AI görseller **yatay**; reels/story için 9:16 üretim yok. Video keyframe'leri 9:16 üretilmeli.
3. Gerçek ürün fotoğrafları düşük çözünürlük ve eski (bordo) stil. **Öncelik:** krem zeminde, yüksek çözünürlüklü, düz ürün çekimi (müşteriden ya da stüdyo) → her AI işinin temeli.
4. AI görsellerdeki yazı/slogan/logo onaysız; müşteriye gösterirken "taslak" ibaresi.

## Yeni kayıt şablonu

| Tarih | Dosya | Model | Prompt (brief → görsel no) | Oran | Kullanım | Puan |
|---|---|---|---|---|---|---|
| | `nefin-<kampanya>-kf01.png` | Gemini (Nano Banana Pro) | | 9:16 | video keyframe | |
