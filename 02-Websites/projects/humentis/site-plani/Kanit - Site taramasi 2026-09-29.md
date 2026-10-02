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
- Backend Node.js/Express API, Windows IIS üzerinde (ARR reverse proxy). `x-powered-by: ASP.NET` başlığı IIS'ten geliyor; API yanıtında `Express, ARR/3.0, ASP.NET`. Önünde Cloudflare (`server: cloudflare`, Cloudflare Web Analytics beacon'ı var).
- Herkese açık API: `/api/specialists`, `/api/organization`. Uzman paneli `/uzman/panel/<slug>`, müsaitlik `/api/specialist-panel/<slug>/hour-blocks`.

## Uzman takvimleri
> [!info] Neye bakıldı, gerçek akış ne
> Bu bölüm `/api/specialists` içindeki eski `availability` alanını ve linksiz `/randevu/<slug>` sayfasını ölçüyor. Sitedeki gerçek randevu akışı bu veriyi kullanmıyor: uzman kartındaki "Randevu al" penceresi saatleri `/api/specialists/<slug>/open-slots`'tan alıyor (30.09 itibarıyla her uzmanda 1 Ekim'den itibaren ~860 açık saat). 29.09'da `open-slots` ölçülmedi. Ayrıntı: [[P0-01 Randevu akisi]].

- 29.09 ~02:50, `availability` alanı: 17 uzman; 8 uzmanda yalnız geçmiş tarihli kayıt (en yenisi 10.09), 9 uzmanda hiç kayıt yok.
- API'deki hizmet ücretleri (`offerings[].totalPrice`): ₺1.450 (Müge Ertuğrul, Simge Kaya), ₺1.650 (Göknur Yaman), ₺1.850 (Barış Can Kolçak, Elif Silav, Aybala Görkem Polat), ₺1.950 (Solmaz Şenyüz), ₺2.100 (Burcu Kayacan), diğerleri ₺1.800. Bu ücretler ziyaretçiye açık hiçbir sayfada gösterilmiyor; yalnız linksiz `/randevu/<slug>` sayfasında.
- Linksiz `/randevu/elif-silav` sayfasında eski kayıtlar (3 Eylül 10:00 / 14:00), "50 dk · ₺1.850" özeti ve "…ücretsiz iptal varsayımı bu prototipte gösterilmektedir…" metni var.

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
`/uzmanlar`'da uzman kartları `<button>` (29.09: 17, 30.09: 18 uzman). `<a href="/uzmanlar/...">` yok.

## Ölçüm
HTML'de, bundle'da ve `specialist-calendar-live.js`'te `googletagmanager`, `gtag`, `GTM-`, `G-`, `AW-` yok.

## İletişim sayfası
- Telefon (`tel:+905528989545`), e-posta, adres ve form var.
- Form alanları: ad soyad, e-posta, telefon, konu, mesaj, KVKK onayı.
- Adres sitede "MUSTAFA KEMAL MAH. 2159 **CAD.** NO: 4 İÇ KAPI NO:7 ÇANKAYA / ANKARA". Kurum kayıtlarında "2159. **Sk.**" geçiyor; hangisi resmiyse ona eşitlenmeli.

## Reklam Şeffaflık Merkezi (TR, herhangi bir zaman)
- `humentis.com.tr`: 1 reklam. Reklamveren "HUMENTIS ZİHİN TEKNOLOJİLERİ VE DAVRANIŞ BİLİMLERİ ANONİM ŞİRKETİ", **Onaylı**.
- `canpsikolojim.com`: **0 reklam**.
