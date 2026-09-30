---
tags: [humentis, site, kanit]
tarih: 2026-09-29
saat: 02:40–03:05 TSİ
---

# Kanıt: site taraması (29.09.2026)

**Yöntem**
- Canlı site mobil emülasyonda açıldı (375×812, Android Chrome UA).
- JS çalışmadan dönen ham HTML `fetch` ile alındı.
- Herkese açık `/api/specialists` yanıtı ve `index-CQ9qytuY.js` bundle'ı incelendi.
- Hiçbir form gönderilmedi. Çerez penceresinde "Yalnızca zorunlu" seçildi.

## Altyapı
- React SPA (Vite build: `/assets/index-CQ9qytuY.js`, ~576 KB sıkıştırılmamış JS; ilk yüklemede ~904 KB transfer).
- Backend ASP.NET (`x-powered-by: ASP.NET`). ⚠️ *Düzeltme 30.09: Node.js/Express API + Windows IIS (ARR ile API'ye reverse proxy) + Cloudflare. `x-powered-by: ASP.NET` başlığı IIS'ten geliyor; API yanıtında `Express, ARR/3.0, ASP.NET` görünüyor. Uygulama ASP.NET değil.* Önünde Cloudflare (`server: cloudflare`, Cloudflare Web Analytics beacon'ı var).
- Herkese açık API: `/api/specialists`, `/api/organization`. Uzman paneli `/uzman/panel/<slug>`, müsaitlik `/api/specialist-panel/<slug>/hour-blocks`.

## Uzman takvimleri
`/api/specialists` yanıtı (29.09.2026 ~02:50). 17 uzman; **ileri tarihli slot: 0**. 8 uzmanda yalnız geçmiş slot var (en yenisi 10.09), 9 uzmanda hiç slot yok.

| Uzman | Unvan | Slug | Sitedeki fiyat (₺) | Slot sayısı | Son slot | İleri tarihli slot |
|---|---|---|---|---|---|---|
| Müge Ertuğrul | Çocuk Gelişimi Uzmanı | `psikolog-muge-ertugrul` | 1.450 | 2 | 30.08 16:30 | 0 |
| Zuhal Alver | Psikolog | `zuhal-alver` | 1.800 | 0 | - | 0 |
| Burcu Kayacan | Klinik Psikolog, Aile Danışmanı | `uzm-klinik-psk-burcu-kayacan` | 2.100 | 2 | 01.09 15:00 | 0 |
| Başak Kale | Psikolog & Aile Danışmanı | `basak-kale` | 1.800 | 0 | - | 0 |
| Solmaz Şenyüz | Klinik Psikolog, Aile Danışmanı | `klinik-psk-solmaz-senyuz` | 1.950 | 2 | 02.09 16:00 | 0 |
| Barış Can Kolçak | Psikolojik Danışman, Aile Danışmanı | `psik-dan-baris-can-kolcak` | 1.850 | 3 | 29.08 11:00 | 0 |
| Göknur Yaman | Psikolog, Aile Danışmanı | `psikolog-goknur-yaman` | 1.650 | 2 | 29.08 14:30 | 0 |
| Elif Silav | Kurucu Psikolog & Aile Danışmanı | `elif-silav` | 1.850 | 2 | 03.09 14:00 | 0 |
| Elif Köden | Uzman Psikolog, Aile Danışmanı | `elif-koden` | 1.800 | 0 | - | 0 |
| Simge Kaya | Çocuk Gelişimi Uzmanı | `simge-kaya` | 1.450 | 2 | 10.09 14:00 | 0 |
| Irmak Tara Sığırcı | Uzman Psikolog & Aile Danışmanı | `irmak-tara-sigirci` | 1.800 | 0 | - | 0 |
| Zeynep Baltacı | Psikolog | `zeynep-baltaci` | 1.800 | 0 | - | 0 |
| Sena Şimşek | Psikolog & Aile Danışmanı | `sena-simsek` | 1.800 | 0 | - | 0 |
| Ali Karaömerlioğlu | Uzman Psikolog / Aile Danışmanı | `ali-karaomerlioglu` | 1.800 | 0 | - | 0 |
| Aybala Görkem Polat | Klinik Psikolog & Aile Danışmanı | `klinik-psk-aybala-gorkem-polat` | 1.850 | 2 | 04.09 15:00 | 0 |
| Beliz Kafalı | Psikolog - Aile Danışmanı | `beliz-kafali` | 1.800 | 0 | - | 0 |
| Hatice Kıykım | Psikolog & Aile Danışmanı | `hatice-kiykim` | 1.800 | 0 | - | 0 |

`/randevu/elif-silav` sayfasında yalnız **3 Eylül Perşembe 10:00 (Online) / 14:00 (Yüz yüze)** seçilebiliyor. Özet kutusunda: "50 dk · ₺1.850".

Randevu özetindeki canlı metin:
> "Randevudan 24 saat öncesine kadar ücretsiz iptal varsayımı bu prototipte gösterilmektedir; nihai kurum politikası ayrıca onaylanmalıdır."

## Açılış animasyonu (kod)
- `var gn=4800` → `En=gn` → `(Dn,{playId:0,durationMs:En,onComplete:()=>u(!1)})`
- `[c,u]=useState(!0)`: her tam yüklemede `true` başlıyor. Yedek zamanlayıcı `t+2500` (7,3 sn).
- `prefers-reduced-motion: reduce` varsa 280 ms'de kapanıyor.

## Çerez penceresi (kod)
- Onay `localStorage["humentis-cookie-consent-v1"]` içinde tutuluyor. Onay yoksa `f=true` ve `y=f&&!Mn(m)` → içerik sarmalayıcısı `inert` (tıklanamaz).
- Gözlem: onay verilmeden önce ana sayfada `.social-dock` (Ara / WhatsApp) yok ve `tel:` linki yok. Onaydan sonra dock görünüyor (Ara + "WhatsApp'ten sor").

## Ana sayfa (mobil, onay öncesi)
- İlk ekranın sırası: header ("Randevu al" → `/uzmanlar`), sekmeler, **Humentis Podcast / Spotify bandı**, ardından hero.
- H1: "Psikolojik destek için doğru uzmanı bulun."
- Hero CTA'ları: "Uzmanları incele", "Kısa eşleştirme" (5 adımlı anket).
- Sayfa metninde telefon numarası yok. Tek WhatsApp linki y≈4.918 px'te (sayfa yüksekliği 5.896 px).
- "Danışan yorumları" bölümü var (GOOGLE etiketli, yıldızlı).

## Ham HTML (JS olmadan)
- `/`, `/bolumlerimiz`, `/uzmanlar`, `/eslestirme`, `/iletisim` ve var olmayan `/olmayan-sayfa-123` aynı 4.404 baytlık `index.html`'i döndürüyor. Hepsi HTTP 200.
- Her birinde:
  - title "Özel Humentis Aile Danışma Merkezi"
  - aynı description
  - `canonical = https://humentis.com.tr/`
  - gövde metni yalnız "Ana içeriğe geç"
- JS birkaç saniye sonra title, description ve canonical'ı route'a göre değiştiriyor (ör. `/uzmanlar` → "Uzmanlarımız ve Randevu — Humentis", canonical `/uzmanlar`). Google, JS ile mevcut canonical'ı değiştirmenin "beklenmedik sonuçlara" yol açabileceği konusunda uyarıyor.
- JSON-LD var: `@type: [Organization, LocalBusiness, MedicalBusiness]`.

## Route'lar (bundle'daki router)
- `/`, `/uzmanlar`, `/uzmanlar/<slug>`, `/randevu/<slug>`, `/randevu/onay`, `/randevularim`, `/eslestirme`
- `/hakkimizda`, `/merkez`, `/klinikler`, `/ekibimiz`, `/bolumlerimiz`, `/calisma-alanlari`, `/galeri`
- `/ik`, `/ik/staj`, `/ik/kariyer`, `/sss`, `/sss/*`, `/duyurular`, `/atolyeler`, `/kurumsal`, `/kurumsal/iletisim`, `/iletisim`
- Politika sayfaları, `/giris`, `/uzman/panel`, `/admin`, `/icerik/*`, `/makaleler/*`, `/kriz-destegi`, `/sistem`

**Hizmet sayfası yok.** `/bolumlerimiz` toplam 169 kelime; 4 bölüm başlığının altında yalnız "Bu bölümdeki uzmanlar" yazıyor. MOXO ve WISC yalnız uzman biyografilerinde geçiyor.

## Uzman listesi
`/uzmanlar`'da 17 uzman kartı `<button>`. `<a href="/uzmanlar/...">` yok.

## Ölçüm
HTML'de, bundle'da ve `specialist-calendar-live.js`'te `googletagmanager`, `gtag`, `GTM-`, `G-`, `AW-` yok.

## İletişim sayfası
- Telefon (`tel:+905528989545`), e-posta, adres ve form var.
- Form alanları: ad soyad, e-posta, telefon, konu, mesaj, KVKK onayı.
- Adres sitede "MUSTAFA KEMAL MAH. 2159 **CAD.** NO: 4 İÇ KAPI NO:7 ÇANKAYA / ANKARA". Kurum kayıtlarında "2159. **Sk.**" geçiyor; hangisi resmiyse ona eşitlenmeli.

## Reklam Şeffaflık Merkezi (TR, herhangi bir zaman)
- `humentis.com.tr`: 1 reklam. Reklamveren "HUMENTIS ZİHİN TEKNOLOJİLERİ VE DAVRANIŞ BİLİMLERİ ANONİM ŞİRKETİ", **Onaylı**.
- `canpsikolojim.com`: **0 reklam**.
