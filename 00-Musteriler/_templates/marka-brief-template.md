---
type: musteri
client: ""
slug: ""
sektor: ""
status: active
date: 2026-09-16
tags: [musteri, marka-brief]
related: []
---

# {{Müşteri Adı}} — Marka Brief'i

> **Bu dosya ne işe yarar?** Bu müşteri için üretilen HER şeyin (sunum, site, reels metni, AI video/görsel promptu) tek doğruluk kaynağı. Claude/Cowork/Claude Design bir işe başlamadan önce ilk bunu okur. Bilmediğin alanı boş bırakma; `❓ doğrulanacak` yaz ki AI uydurmasın.

## 1. Kimlik

| Alan | Değer |
|---|---|
| Resmi ad | |
| Kısa ad / slug | `` (klasör adlarında kullanılan ASCII kısa ad, örn. `nefin-beauty`) |
| Sektör | |
| Konum | |
| Kurucu / karar verici | |
| Web / sosyal | |
| Ajans tarafı sorumlu | |

## 2. Konumlandırma & Vaat

- **Tek cümlelik konumlandırma:** 
- **Ürün/hizmet vaadi:** 
- **Rakiplerden farkı:** 
- **Onaylı slogan:** (yoksa "yok" yaz; AI'nin ürettiği geçici sloganları buraya onaysız yazma)

## 3. Hedef Kitle

- **Birincil:** yaş, cinsiyet, gelir, motivasyon
- **İkincil:** 
- **Karar anı:** insanlar bu markayı ne zaman/neden arar?

## 4. Ses Tonu

| Böyle | Böyle DEĞİL |
|---|---|
| | |

- **Dil:** Türkçe / İngilizce / ikisi
- **Hitap:** sen / siz
- **Yasak kelimeler / iddialar:** 

## 5. Görsel Kimlik

### Logo dosyaları
- `03-Assets/logos/<slug>/...` — hangi varyant nerede kullanılır

### Renk paleti

| Rol | Hex | Not |
|---|---|---|
| Zemin | | |
| Birincil | | |
| Vurgu | | |
| Metin | | |

### Tipografi
- **Başlık:** 
- **Gövde:** 
- **Video altyazı / overlay fontu:** (AI video üretiminde yazı ASLA modele bırakılmaz, post-prodüksiyonda bu fontla eklenir)

### Görsel yön (fotoğraf / video)
- **Işık:** 
- **Mekan / doku / props:** 
- **İnsan var mı? Nasıl?:** 
- **Renk grade hedefi:** (AI video promptlarında "color grade" satırına giden cümle)
- **KESİNLİKLE OLMAYACAK:** 

## 6. Ürün / Hizmet Kartları (prompt'a girecek fiziksel tanımlar)

> Her ürün için AI'nin göremediği ama bilmesi gereken şeyleri yaz: şişe formu, kapak, renk, etiket, doku, koku/his. Bu kart AI video promptlarına **birebir kopyalanır**.

### {{Ürün 1}}
- **EN product sheet (kopyala-yapıştır):** `a 30 ml amber glass dropper bottle with a brushed gold cap and a minimal cream label`
- **Fayda / kullanım:** 
- **Gerçek fotoğraf:** `03-Assets/images/<slug>/...` (varsa image-to-video için başlangıç karesi olarak kullanılır)

## 7. Yasal / Hassas Kurallar

- Sağlık/kozmetik iddiaları: 
- Kişi görünürlüğü (danışan, çocuk, çalışan): 
- KVKK / izin: 
- Kullanılmayacak rakip/marka öğeleri: 

## 8. Varlık Haritası (bu müşteriye ait her şey nerede?)

| Tür | Yol |
|---|---|
| Marka brief | `00-Musteriler/<slug>/marka-brief.md` |
| Sunumlar | `01-Presentations/active/<slug>-*.md` + `01-Presentations/active/<slug>/` |
| Website | `02-Websites/projects/<slug>/` |
| Görseller / logolar / videolar | `03-Assets/{images,logos,videos}/<slug>/` |
| Sosyal medya metinleri | `04-Sosyal-Medya-Icerik/<slug>/` |
| Kod projesi özeti | `05-Kod-Projeleri/<slug>/` |
| AI video brief + log | `06-AI-Video/<slug>/` |
| AI görsel brief + log | `07-AI-Gorsel/<slug>/` |
| Ağır dosyalar (Drive) | link |

## 9. Rakipler & İlham

- 

## 10. AI Brief Bloğu (kopyala-yapıştır)

> Cowork / Claude Design / Veo / Kling'e tek seferde marka bağlamı vermek için. İngilizce tutulur çünkü üretim modelleri İngilizce prompt'ta daha tutarlı. 10 satırı geçmesin.

```text
BRAND: <name> — <sector>, <city>.
POSITIONING: <one sentence>.
AUDIENCE: <who>.
TONE: <3 adjectives>; never <2 things>.
PALETTE: background #......, primary #......, accent #......, text #......
TYPOGRAPHY (post-production only): headings <font>, body <font>.
VISUAL DIRECTION: <light, materials, environment, people yes/no>.
COLOR GRADE: <warm/cool, contrast, saturation>.
NEVER: <AI-rendered text/logos, forbidden claims, forbidden styles>.
PRODUCT SHEET: <verbatim physical description of hero product>.
```

## 11. Açık Sorular / Eksikler

- [ ] 
