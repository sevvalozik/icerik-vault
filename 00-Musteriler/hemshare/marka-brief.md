---
type: musteri
client: "Hemshare"
slug: hemshare
sektor: yazılım / dernek yönetim sistemi
status: active
date: 2026-09-16
tags: [musteri, marka-brief, hemshare, dernek, yazilim]
related: ["[[hemshare-proje-ozeti]]"]
---

# Hemshare — Marka Brief'i

> Kaynaklar: `05-Kod-Projeleri/hemshare/hemshare-proje-ozeti.md`, `03-Assets/logos/hemshare/` (PNG'lerden ölçülen renk), `99-Dashboard/ilham-linkleri.md` (dernek/üyelik Mobbin referansları). Tasarım sisteminin gerçek kaynağı repo'daki `design/` klasörü — buradaki değerler oradan **doğrulanmalı**.

## 1. Kimlik

| Alan | Değer |
|---|---|
| Resmi ad | HemShare (logo: "hemshare") |
| Kısa ad / slug | `hemshare` |
| Sektör | Yazılım — dernekler için üye & yönetim sistemi (mobil + web) |
| Konum | ❓ doğrulanacak |
| Kurucu / karar verici | ❓ doğrulanacak (geliştirme: Şevval + Bilal) |
| Web / sosyal | ❓ doğrulanacak |
| Ajans tarafı sorumlu | Şevval |

## 2. Konumlandırma & Vaat

- **Tek cümlelik konumlandırma:** ❓ doğrulanacak — çalışma önerisi: "Derneğin üye, etkinlik, duyuru ve aidat işlerini tek uygulamada, telefon numarasıyla giriş yapacak kadar basit tutan sistem."
- **Ürün vaadi:** Üye yönetimi, etkinlik, duyuru, aidat/bağış takibi, telefon + SMS doğrulama ile giriş.
- **Rakiplerden farkı:** ❓ doğrulanacak
- **Onaylı slogan:** yok

## 3. Hedef Kitle

- **Birincil:** Dernek yöneticileri (40–60, teknik olmayan), üye listesini Excel'de tutan.
- **İkincil:** Dernek üyeleri (uygulamayı kullanan taraf).
- **Karar anı:** Genel kurul öncesi üye/aidat kaosu; "üyelere tek tuşla duyuru" ihtiyacı.

## 4. Ses Tonu

| Böyle | Böyle DEĞİL |
|---|---|
| Güven veren, düzenli, kurumsal-sıcak | Startup jargonu, "devrim", İngilizce terim yığını |
| Somut fayda ("aidatı kim ödedi tek bakışta") | Soyut vizyon cümleleri |

- **Dil:** Türkçe
- **Hitap:** siz
- **Yasak:** "yapay zeka yapmış gibi duran" kalıp tasarım dili (mor gradyan, iç içe kart) — ekibin açık hedefi özgün görünüm.

## 5. Görsel Kimlik

### Logo dosyaları (`03-Assets/logos/hemshare/`)
- `hemshare-logo-lacivert.png` (2000×385, ana wordmark), `hemshare-logo-lacivert-alt.png` (2400×462), `hemshare-logo-beyaz.png` (2400×462, koyu zemin)
- `hemshare-ikon-lacivert.png`, `hemshare-ikon-beyaz.png`, `hemshare-ikon-lacivert-zemin.png` (1024×1024 — app ikonu / avatar)
- ❓ Vektör (SVG) hali repo'daki `design/` altında olmalı; vault'a kopyalanacak.

### Renk paleti

| Rol | Hex | Not |
|---|---|---|
| Lacivert (marka) | `#081840` | PNG logolardan ölçüldü — repo `design/tokens` ile doğrulanacak |
| Beyaz | `#F8F8F8` / `#FFFFFF` | ters logo, zemin |
| Vurgu | ❓ | repo tokenlarından alınacak |

### Tipografi
- ❓ doğrulanacak — repo `design/foundations` içinde tanımlı olmalı (web tarafı MUI kullanıyor; muhtemelen Roboto/Inter ailesi).
- **Video altyazı / overlay fontu:** ❓ (belirlenene kadar Inter)

### Görsel yön (fotoğraf / video)
- **Işık:** temiz, nötr-sıcak gün ışığı; ofis/dernek lokali.
- **Mekan / doku / props:** dernek toplantı masası, çay bardağı, telefon ekranında uygulama (ekran içeriği post-prodüksiyonda gerçek ekran görüntüsüyle değiştirilir — AI'ye **düz yeşil ekran** çizdirilir), üye kartları, etkinlik afişi.
- **İnsan var mı? Nasıl?:** Evet — çok kuşaklı, samimi topluluk hissi (Mobbin'deki Circle/Apollo hero'ları gibi). AI'de yüz gerekiyorsa uzak plan/grup; yakın plan portre gerçek çekim.
- **Renk grade hedefi (EN):** `clean neutral grade with deep navy shadows (#081840), bright but not blown highlights, medium contrast, natural skin tones`
- **KESİNLİKLE OLMAYACAK:** mor/pembe gradyan, "AI-slop" cam-morfizm kartlar, neon, stok el sıkışma.

## 6. Ürün Kartları

### Mobil uygulama (Flutter, iOS/Android)
- **EN product sheet:** `a modern smartphone held in hand, the screen is a solid flat green (#00FF00) placeholder for compositing, matte navy-blue phone case, no visible brand logos`
- **Modüller:** üye paneli, yönetici paneli, etkinlik, duyuru, aidat/bağış.

### Web paneli (React + MUI)
- **EN product sheet:** `a laptop on a wooden meeting table, screen shows a solid flat green placeholder, soft daylight from a window`

## 7. Yasal / Hassas Kurallar

- Gerçek üye verisi (isim, telefon) hiçbir görselde/videoda görünmez; demo verisi kullanılır.
- Dernek isimleri/logoları izin olmadan kullanılmaz.

## 8. Varlık Haritası

| Tür | Yol |
|---|---|
| Marka brief | `00-Musteriler/hemshare/marka-brief.md` (bu dosya) |
| Kod projesi özeti | `05-Kod-Projeleri/hemshare/hemshare-proje-ozeti.md` |
| Logolar | `03-Assets/logos/hemshare/` |
| Tasarım referansları | `99-Dashboard/ilham-linkleri.md` → "Dernek Projesine Özel Referanslar" |
| Repo (vault dışı) | https://github.com/biinci/Hemshare — `design/{foundations,tokens,primitives,patterns,icons,research}`, `docs/` |
| Sunum / website / video | henüz yok |

## 9. Rakipler & İlham

- Mobbin: Circle (topluluk hero + üye kartları), Patreon, Friends of Figma, Apollo, Notion for nonprofits, Polywork, Qatalog (bkz. ilham-linkleri)
- Çok adımlı üyelik formu: Cohere, Deputy

## 10. AI Brief Bloğu (kopyala-yapıştır)

```text
BRAND: HemShare — membership & management software for associations (NGOs/clubs), Türkiye. Mobile app (Flutter) + web panel.
POSITIONING: the calm, trustworthy system that replaces the association's Excel chaos: members, events, announcements, dues, donations.
AUDIENCE: non-technical association managers 40–60 and their members.
TONE: reassuring, orderly, warm-corporate, concrete benefits; never startup hype, never "AI-generated template" look.
PALETTE: brand navy #081840, white #F8F8F8, accent TBD (verify from design tokens).
TYPOGRAPHY (post-production only): TBD (verify from design foundations; Inter as interim).
VISUAL DIRECTION: real association meeting rooms, tea glasses, multi-generational community, phone/laptop with solid green screen for compositing real UI later.
COLOR GRADE: clean neutral, deep navy shadows, natural skin tones, medium contrast.
NEVER: AI-rendered text/logos/UI, purple-pink gradients, glassmorphism cards, neon, stock handshakes, real member data.
PRODUCT SHEET: a modern smartphone held in hand, screen is a solid flat green placeholder, matte navy case, no logos.
```

## 11. Açık Sorular / Eksikler

- [ ] Repo `design/tokens` içinden gerçek palet + font → bu brief'e işle
- [ ] SVG logo
- [ ] Konumlandırma cümlesi onayı
- [ ] Tanıtım sitesi kararı (hemshare-web tanıtım mı panel mi?)
