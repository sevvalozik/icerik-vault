<%*
const musteriAdi = await tp.system.prompt("Müşteri adı (örn. Nefin Beauty)");
const sektor = await tp.system.prompt("Sektör (örn. kozmetik / cilt bakımı)");
const slug = musteriAdi.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
await tp.file.move("00-Musteriler/" + slug + "/marka-brief");
-%>
---
type: musteri
client: "<% musteriAdi %>"
slug: <% slug %>
sektor: <% sektor %>
status: active
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [musteri, marka-brief, <% slug.replace(/-/g,"") %>]
related: []
---

# <% musteriAdi %> — Marka Brief'i

> Bu müşteri için üretilen HER şeyin tek doğruluk kaynağı. Bilmediğin alanı boş bırakma; `❓ doğrulanacak` yaz ki AI uydurmasın. Tam şablon: `00-Musteriler/_templates/marka-brief-template.md`.

## 1. Kimlik

| Alan | Değer |
|---|---|
| Resmi ad | <% musteriAdi %> |
| Kısa ad / slug | `<% slug %>` |
| Sektör | <% sektor %> |
| Konum | ❓ doğrulanacak |
| Kurucu / karar verici | ❓ doğrulanacak |
| Web / sosyal | ❓ doğrulanacak |
| Ajans tarafı sorumlu | |

## 2. Konumlandırma & Vaat

- **Tek cümlelik konumlandırma:** 
- **Ürün/hizmet vaadi:** 
- **Rakiplerden farkı:** 
- **Onaylı slogan:** yok

## 3. Hedef Kitle

- **Birincil:** 
- **İkincil:** 
- **Karar anı:** 

## 4. Ses Tonu

| Böyle | Böyle DEĞİL |
|---|---|
| | |

- **Dil / hitap:** 
- **Yasak kelimeler / iddialar:** 

## 5. Görsel Kimlik

### Logo dosyaları
- `03-Assets/logos/<% slug %>/` — ❓ henüz yok

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
- **Video altyazı / overlay fontu (post-prodüksiyon):** 

### Görsel yön
- **Işık:** 
- **Mekan / doku / props:** 
- **İnsan var mı? Nasıl?:** 
- **Renk grade hedefi (EN):** 
- **KESİNLİKLE OLMAYACAK:** 

## 6. Ürün / Hizmet Kartları

### {{Ürün 1}}
- **EN product sheet:** ``
- **Fayda / kullanım:** 
- **Gerçek fotoğraf:** `03-Assets/images/<% slug %>/`

## 7. Yasal / Hassas Kurallar

- 

## 8. Varlık Haritası

| Tür | Yol |
|---|---|
| Marka brief | `00-Musteriler/<% slug %>/marka-brief.md` |
| Sunumlar | `01-Presentations/active/<% slug %>-*.md` |
| Website | `02-Websites/projects/<% slug %>/` |
| Görseller / logolar / videolar | `03-Assets/{images,logos,videos}/<% slug %>/` |
| Sosyal medya | `04-Sosyal-Medya-Icerik/<% slug %>/` |
| Kod projesi | `05-Kod-Projeleri/<% slug %>/` |
| AI video | `06-AI-Video/<% slug %>/` |
| AI görsel | `07-AI-Gorsel/<% slug %>/` |

## 9. Rakipler & İlham

- 

## 10. AI Brief Bloğu (kopyala-yapıştır)

```text
BRAND: <% musteriAdi %> — <% sektor %>.
POSITIONING: 
AUDIENCE: 
TONE: ; never 
PALETTE: background #, primary #, accent #, text #
TYPOGRAPHY (post-production only): headings , body 
VISUAL DIRECTION: 
COLOR GRADE: 
NEVER: AI-rendered text/logos, 
PRODUCT SHEET: 
```

## 11. Açık Sorular / Eksikler

- [ ] Logo dosyası
- [ ] Gerçek ürün/mekan fotoğrafları
- [ ] Palet + font onayı
