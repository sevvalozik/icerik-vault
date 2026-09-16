---
type: kod-projesi
client: "Humentis"
status: active
date: 2026-09-16
tags: [humentis, psikoloji, kod-projesi, marka-sistemi, react, monorepo]
related: []
---

# Humentis — Web Sitesi & Marka Sistemi

## Proje Tanımı

Humentis, web-first bir "psikoloji ağı" (online psikolog platformu) — tek Humentis kurumu altında uzman psikolog ağı. Monorepo yapısında: React (Vite) frontend, Node.js + Express API, Prisma + PostgreSQL veritabanı.

**Repo (kod, vault'ta DEĞİL):** https://github.com/biinci/Psikoloji
**Yerel konum:** `~/Documents/Psikoloji` (IcerikVault dışında — kural gereği)

## Monorepo Yapısı

```
apps/web/           React frontend (Vite)
apps/api/           Node.js + Express API
packages/domain/    Paylaşılan TypeScript domain modelleri
packages/db/        Prisma + PostgreSQL şeması
brand/              Marka sistemi (aşağıda detaylı)
```

## Kurumsal Sayfalar (Modül 1)

- `/hakkimizda` — kurum hikâyesi, güven, bakım okuryazarlığı
- `/ekibimiz` — psikolog kadrosu
- `/calisma-alanlari` — konu/departman routing
- `/klinikler` — şube listesi
- `/icerik` — uzman makaleleri (Modül 9)
- `/admin` — operasyon konsolu (Modül 8)
- `/uzman/panel/:slug` — uzman paneli (Modül 7)

## Marka Yönü (ÇOK DETAYLI — brand/ klasöründe hazır)

Bu proje diğerlerinden farklı olarak **zaten tam bir marka sistemi araştırmasıyla geliyor** — tahmin/ilham toplamaya gerek yok, gerçek onaylı kararlar var:

- **Konumlandırma:** "İnsan sıcaklığı, doğrulanmış uzmanlık, görünür erişim" — pastel wellness klişesi DEĞİL, "sakin altyapı" (calm infrastructure)
- **Slogan (onaylı):** İnsan odaklı • zihinsel esenlik
- **Ürün vaadi:** Kontrol edilmiş uzman bilgileri. Gerçek müsaitlik. Açık veri sınırları.
- **Logo:** iki profil + ağaç sembolü, özel HUMENTIS wordmark
- **Renk paleti:** petrol (`--hu-teal-600: #14736a`), adaçayı, zeytin, mat altın (`--hu-gold-500: #bf8844`), sıcak kömür, krem/ivory (`--hu-ivory-50: #f8f5ed`)
- **Fontlar:** Başlık — Source Serif 4; Gövde — Manrope; Logo destek fontu — Montserrat
- **Görsel yön:** gerçek insan fotoğrafı birincil, botanik illüstrasyon ikincil
- **İkon sistemi:** 24px ızgara, 1.75px yuvarlatılmış çizgi

**4 farklı arayüz modu var** (aynı marka, farklı iş): Marka/İçerik (sıcak, editoryal) → Arama/Randevu (kompakt, işlevsel) → Güven/Onay (katmanlı açıklama) → Kriz (yüksek kontrast, süslemesiz, hızlı yönlendirme).

## Vault'a Aktarılan Gerçek Varlıklar (`03-Assets/logos/humentis/`)

Repo'daki `brand/assets/final/` klasöründeki üretim-hazır SVG dosyaları buraya kopyalandı:

- `humentis-lockup-vertical.svg` / `-mono.svg` / `-reversed.svg` / `-on-petrol.svg` — dikey logo varyasyonları
- `humentis-lockup-horizontal.svg` / `-mono.svg` / `-header.svg` — yatay logo varyasyonları
- `humentis-mark-gradient.svg` / `-mono.svg` — sadece sembol
- `humentis-favicon.svg` — favicon
- `humentis-tokens.css` — renk/font/spacing/radius/shadow/motion tokenları (uygulamaya hazır CSS değişkenleri)
- `03-Assets/icons/humentis/` — arayüzde kullanılan 15 ikonun gerçek SVG'leri (kod içindeki `Icon.tsx` bileşeninden üretildi: arrow-right, calendar, check, chevron, filter, heart, info, language, location, lock, mail, search, shield, video — 24px ızgara, 1.75px stroke, ICON-SYSTEM.md kuralına uygun)
- `humentis-logo-dikey-mono.pdf` — Şevval'in elle gönderdiği PDF versiyonu (aynı varlığın PDF hali)

Bu SVG + CSS token dosyaları, ileride "bu tasarımdan bir şey oluştur" dediğimizde gerçek/güvenilir girdi olacak — link değil, gerçek dosya.

## Repo İçindeki Diğer Önemli Dokümanlar (kod tarafında, referans için)

- `brand/brand-strategy.md` — pozisyonlama, mimari, ses tonu, ürün prensipleri (v1.1, 27 Ağustos 2026)
- `brand/BRAND-STATUS.md` — onaylanan kararlar + sonraki aşamaya bırakılanlar (ana sayfa tasarım sistemi, uzman kartı/profili, randevu akışı henüz yapılmadı)
- `brand/research-synthesis.md` — 2026 psikoloji ürün pazarı araştırma özeti
- `brand/LOGO-GUIDELINES.md`, `ICON-SYSTEM.md`, `IMAGE-DIRECTION.md`, `FONT-NOTES.md` — detay kurallar
- `brand/brand-board.html` — interaktif görsel marka panosu (tarayıcıda açılabilir)
- `output/pdf/humentis-web-brand-system.pdf` — derlenmiş tam marka sistemi PDF'i (5.7 MB, vault'a eklenmedi — Google Drive'a konabilir gerekirse)

## Önemli Not

README'de açıkça belirtiliyor: bu çalışma marka/ürün tasarım yönü, henüz **tamamlanmış bir isim tescili, hukuki/klinik kapsam, KVKK, güvenlik veya erişilebilirlik incelemesi değil** — canlıya çıkmadan önce bunların doğrulanması gerekiyor.

## Durum

Marka temeli onaylanmış ve tamamlanmış. Sıradaki aşama: bu temeli ürün UI sistemine uygulamak (ana sayfa tasarım sistemi, uzman kartı/profili, randevu akışı, form/buton/durum component sistemi).
