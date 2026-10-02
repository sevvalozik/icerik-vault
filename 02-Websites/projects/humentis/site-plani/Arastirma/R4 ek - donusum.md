---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]"]
---

> [!note] R4 eki · Dönüşüm — ai-marketing-claude `market-conversion` alt ajanının tam çıktısı. Ana rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

---
type: rapor
client: "Humentis"
slug: humentis
status: taslak
date: 2026-10-02
tags: [humentis, pazarlama-denetimi, donusum, cro, randevu-akisi, huni]
related: ["[[marka-brief]]"]
---

# Dönüşüm Optimizasyonu Analizi: humentis.com.tr

**Ajan:** market-conversion (5 paralel denetim ajanından biri) · **Tarih:** 02.10.2026 (kanıt paketi 30.09.2026)
**Yöntem:** `agents/market-conversion.md` + `skills/market-funnel` (adım başına 5 boyutlu puan) + `skills/market-landing` (7 bölümlü ana sayfa puanı, form, mobil ve hız denetimi).
**Kaynak etiketleri:** [KOD] = `/home/claude/build/base/humentis`. Web yolları `apps/web/src/`, API yolları `apps/api/src/` altındadır. [CANLI] = `humentis-audit-sayfalar-humentis.json` (JS sonrası DOM, 390 px). [API] = EVIDENCE.md'deki canlı API ölçümleri. [BRIEF] = `00-Musteriler/humentis/marka-brief.md`. [ÇIKARIM] = kod ve ölçümden türetilmiş, doğrudan görülmemiş.
**Marka kuralları:** Brief'in "KESİNLİKLE OLMAYACAK", §4 ve §7 bölümleri paketin önerilerinden önce gelir. Paketin önerdiği aciliyet/kıtlık, danışan yorumu ekleme, sonuç vaadi, "ücretsiz / en iyi / garanti / tedavi / hasta", 7/24, çıkış pop-up'ı ile teşvik ve formda şikâyet/konu sorma **marka kuralı gereği uygulanmadı**.
**Ölçüm:** Sitede GA4/GTM/Ads etiketi yok [CANLI]. Ziyaretten randevuya dönüşüm oranı ölçülemedi, bu yüzden oran verilmedi. Humentis'in Google Ads rakamları kullanılmadı. "%" ile verilen kayıp/artış oranları paketin genel kıyaslarıdır (Humentis verisi değil) ve öyle etiketlendi.

---

## Conversion Optimization: Genel Puan **4,2/10 → 42/100**

### Boyut Puanları

| Boyut | Puan | Temel bulgu |
|---|---|---|
| CTA Stratejisi | 6/10 | "Randevu al" başlıkta, kartlarda ve profilde tutarlı. Ama header CTA'sı pencereyi değil listeyi açıyor, profilde CTA yalnız en üstte, telefon/WhatsApp ise çerez kararından önce hiç görünmüyor |
| Sosyal Kanıt | 3/10 | Tek kanıt 7 maskeli "Danışan yorumu". Google'a bağlantısı yok, 5 yıldız koda sabit ve sonuç ifadeleri içeriyor (brief §7 ihlali). Hazır `InstitutionProofStrip` bileşeni hiçbir sayfada kullanılmıyor |
| Sürtünme (yüksek = az) | 4/10 | Üyelik ve ödeme yok, tek pencere var (iyi). Ama her ilk yüklemede 4,8 sn bekleme, siteyi kilitleyen çerez perdesi, 11 karar ve 6 zorunlu metin alanı var. Hata olunca ekran ilk hatalı alana kaydırılmıyor. Saatler yalnız hafta içi 09:00–16:10 |
| Güven Sinyalleri | 5/10 | KVKK, yasal sayfalar ve "kriz hizmeti değildir" notu var. Ama site kendi sözlerini tutmuyor: profilde doğrulama gösterilmiyor, kriz sayfası yok, SSS'de "Prototip aşamasında…" yazıyor ve onay e-postası/SMS'i yok |
| Aciliyet & Kıtlık | puanlanmadı | **Marka kuralı gereği uygulanmadı** (brief §7: "Aciliyet ve kıtlık yok"). Yerine marka uyumlu karşılığı puanlandı ↓ |
| *Belirsizlik giderme (ücret, süre, sonraki adım)* | 3/10 | Ücret ve süre hiçbir açık sayfada yok (API'de ₺1.450–2.100, 50 dk). "Talep" ile "randevu" dili birbiriyle çelişiyor. Randevudan sonra ne olacağı (adres, online bağlantı, teyit) söylenmiyor |

Hesap: (6 + 3 + 4 + 5 + 3) / 5 = 4,2, yani **42/100**. Not: 30.09 taslağı 46 vermişti. Bu sürümde koddan doğrulanan yeni sürtünmeler (hata kaydırması yok, saat hatasının "müsait saat yok" olarak görünmesi, yalnız mesai içi saatler, çakışan son seans, derin linkte de çalışan animasyon) sürtünmeyi 5'ten 4'e, sosyal kanıtı 4'ten 3'e indirdi.

**Ana sayfa landing CRO puanı (market-landing, ağırlıklı):** Hero 6 (%25) · Değer önerisi 5 (%20) · Sosyal kanıt 3 (%15) · Özellik/fayda 6 (%15) · İtiraz yönetimi 5 (%10) · CTA 6 (%10) · Footer 6 (%5). Toplam **52/100**.

---

## Dönüşüm Yolu Haritası (Conversion Path Map)

**Huni tipi:** Danışmanlık randevusu (Consultation Booking). Uzman takviminden kendi kendine randevu alınıyor, ödeme ve üyelik yok. İkincil dönüşümler: `tel:`, WhatsApp, /iletisim formu, /kurumsal formu.

```
[A] Reklam / arama sonucu
     title "Özel Humentis Aile Danışma Merkezi" · description "Randevu İçin — …" (Ankara yok)
     Ham HTML her adreste aynı 4.404 bayt kabuk; dönüşüm etiketi yok
  │
[B] Açılış (ilk yükleme, hangi adres olursa olsun: /, /uzmanlar, /uzmanlar/<slug>, /kvkk…)
  │
[C] Açılış animasyonu: tam ekran, 4.800 ms, atlanamaz (yedek zamanlayıcı ile en fazla 7.300 ms)   [KARAR VERİLDİ: kalıyor]
  │
[D] Çerez perdesi: içerik inert, gezinme engelli, scroll kilitli
  │       Ara / WhatsApp barı bu karar verilene kadar YOK
  │
[E] Hero: H1 "Psikolojik destek için doğru uzmanı bulun."
  │       CTA "Uzmanları incele" (birincil) · "Kısa eşleştirme" (ikincil) · sağda dönen 2'li uzman kartı + "Randevu al"
  │
  ├──> [E2] /eslestirme (5 soru) ──> /uzmanlar (filtreli; yanıtlar pencereye taşınmaz)
  │
[F] Uzman seçimi: /uzmanlar 18 kart (foto · ad · unvan · "Randevu al") ──> profil (tek CTA, en üstte)
  │
[G] AppointmentRequestModal (tek pencere, mobilde tek sütun, uzun kaydırma)
  │       1 Görüşme biçimi (varsayılan Online) · 2 Bölüm* (boş, 4 seçenek) · 3 Takvim (içinde bulunulan ay)  [ay davranışı: KARAR VERİLDİ]
  │       4 Ad* Soyad* Telefon* E-posta* Danışan yaşı* Şehir* · Mesaj (ops.) · KVKK* ──> "Randevuyu oluştur"
  │
[H] "Randevunuz oluşturuldu" + "İptal için: 0552 898 95 45"
          API kaydı doğrudan status "confirmed"; e-posta, SMS ya da bildirim yok
```

---

## Adım Adım Sürtünme Kanıtı (market-funnel 2.1: Netlik · Süreklilik · Motivasyon · Sürtünme · Güven)

### [A] Reklam / arama: **4,6/10** (N 5 · S 4 · M 4 · Sü 6 · G 5)
- Arama snippet'i: description "Randevu İçin — Psikolog ve Aile Danışmanlarının Bir Arada Olduğu…" Ankara/Çankaya geçmiyor (`apps/web/index.html` description meta). Rakiplerin hepsi title'da "Ankara" kullanıyor [EVIDENCE: Rakipler].
- Ham HTML her adreste aynı kabuk (title, canonical `/`, gövdede yalnız "Ana içeriğe geç") [CANLI]. JS çalıştırmayan önizlemeler (WhatsApp/Instagram link kartı, bazı tarayıcılar) her derin linki ana sayfa gibi gösteriyor. Uzman profili reklamı paylaşıldığında kart yanlış görünüyor.
- **Ölçüm sürtünmesi:** Google Ads/GA4 dönüşüm etiketi yok [CANLI]. `useVisitTracker` yalnız analitik çerez onayı verildiğinde sayfa yolunu (UTM/gclid dahil) kaydediyor (`features/consent/useVisitTracker.ts:24-32`). Randevu isteği (`api/client.ts` `BookAppointmentPayload`) kaynak/kampanya bilgisi taşımıyor. Hangi reklamın randevu getirdiği bilinemiyor ve Ads, teklif stratejisini randevuya göre optimize edemiyor.
- Reklamın hangi URL'ye gittiği **doğrulanamadı**.

### [B] Açılış: **4,4/10** (N 3 · S 5 · M 4 · Sü 4 · G 6)
- İlk boyada kabuktan başka içerik yok. Ana JS 585 KB (172 KB sıkıştırılmış), fontlar woff2 değil TTF (Montserrat 727 KB) [CANLI/EVIDENCE].
- Yavaş mobil bağlantıda bu süre animasyonun 4,8 sn'sinin üstüne ekleniyor. Animasyon görselleri yüklenmeden saat başlamıyor (`AnimatedBrandMark.tsx`, canvas yolu). Üst sınır yedek zamanlayıcının 7,3 sn'si (`app/PageTransitionOverlay.tsx:30`).

### [C] Açılış animasyonu: **3,8/10** (N 4 · S 5 · M 3 · Sü 2 · G 5). **Karar verildi: kalıyor**
- `HERO_ARRIVAL_MS = 4_800` (`features/home/components/AnimatedBrandMark.tsx:4`). `booting` her tam sayfa yüklemesinde `true` başlıyor (`app/App.tsx:113`) ve yola bakılmıyor. Kapanış koşulu yalnız animasyonun bitmesi (`App.tsx:293-299`). Atla butonu yok, `sessionStorage` ile "bir kez göster" yok. Yalnız `prefers-reduced-motion` kullanıcıları 280 ms görüyor (`App.tsx:118-124`).
- Sonuç olarak animasyon yalnız ana sayfada değil, reklam/paylaşım ile gelinen **profil derin linkinde** de oynuyor. Penceredeki "KVKK metnini oku" bağlantısı yeni sekme açıyor (`ui/patterns/KvkkConsentField.tsx:17`) ve o sekmede de 4,8 sn animasyon oynuyor.
- Paket kıyası (Humentis verisi değil): 3–5 sn gecikme yaklaşık %20 dönüşüm kaybıyla ilişkilendiriliyor.
- Karar korunarak yapılabilecekler (öneri, karar ekibin): animasyonun yalnız oturumdaki ilk ziyarette ve yalnız ana sayfada oynaması; derin link ve KVKK sekmesinde atlanması. Bu, animasyonu kaldırmak anlamına gelmez.

### [D] Çerez perdesi: **4,0/10** (N 6 · S 3 · M 3 · Sü 2 · G 6)
- Onay yokken tüm içerik `inert` (`App.tsx:186, 289`), `navigate()` engelli (`App.tsx:179`), `body overflow hidden` (`features/consent/CookieBanner.tsx:18-25`), tam ekran karartma `.cookie-gate` (`CookieBanner.tsx:33`; `styles/components.css:363`).
- **Ara/WhatsApp barı bu karara bağlı:** `{!booting && !minimal && !pendingConsent ? <SocialDock /> : null}` (`App.tsx:292`). `tel:` ve `wa.me` bağlantıları çerez kullanmıyor, ama karar verilmeden en düşük eşikli temas kanalı görünmüyor.
- Zorunlu çerez onaysız da çalışabildiği halde site analitik kararı için tamamen kilitleniyor. Hukuki gereklilik **doğrulanamadı** (KVKK danışmanıyla teyit edilmeli).
- İyi yan: "Yalnızca zorunlu" ilk ekranda, "Tümünü kabul et" ile yan yana duruyor (`CookieBanner.tsx:47-48`).

### [E] Hero: **5,6/10** (N 7 · S 6 · M 5 · Sü 5 · G 5)
- Mobil sıralama: header, kitle sekmeleri + Podcast bandı (`HomeHero.tsx:86-111`), hero. H1 ve CTA'lar podcast bandının altında kalıyor.
- CTA: "Uzmanları incele" → `/uzmanlar`, "Kısa eşleştirme" → `/eslestirme` (`HomeHero.tsx:127-128`). Netler ama değer odaklı değil, ve hero'da telefon yok (ana sayfada numara yalnız JSON-LD'de [CANLI]).
- Dönen uzman kartları 4 sn'de bir değişiyor (`HomeHero.tsx:17, 64-70`). Mobilde dokunmayla durmuyor; yalnız mouse/focus ile duruyor (`:135-140`). Kullanıcı bir kartı okurken kart kayabiliyor.
- Hero'dan hemen sonra brief §7'yi ihlal eden "Danışan yorumları" bandı geliyor (`HomePage.tsx:15`).

### [F] Uzman seçimi (liste + profil + eşleştirme): **5,2/10** (N 6 · S 6 · M 5 · Sü 5 · G 4)
- Kart yalnız foto, ad, unvan ve "Randevu al" içeriyor (`ui/patterns/SpecialistDirectoryCard.tsx:24-47`). Ad ve foto `<button>`, `<a href>` değil. Yeni sekmede açılamıyor, paylaşılamıyor. Kartta bölüm, görüşme biçimi ve doğrulama yok, bu yüzden 18 uzmanı karşılaştırmak için her profile tek tek girmek gerekiyor.
- Header "Randevu al" pencereyi değil `/uzmanlar`'ı açıyor (`app/AppShell.tsx:57, 93`). Randevu niyetiyle tıklayan kişiye bir karar adımı daha ekleniyor.
- Profilde CTA yalnız başlık kartında (`features/specialist/SpecialistProfilePage.tsx:66-71`). Altında uzun biyografi, eğitim, deneyim, sertifika ve çalışma alanları geliyor (`:91-133`), sonda ikinci CTA yok. `VerificationDisclosure` bileşeni var ama profilde kullanılmıyor. 10 uzmanda `verification` boş [API].
- Eşleştirme: 5 soru (`features/matching/MatchingPage.tsx:14-90`). "Kime?" sorusu 4. sırada. Yanıtlar pencereye taşınmıyor, bu yüzden bölüm ve yaş pencerede yeniden soruluyor. "Tanı koymaz, kayıt altına alınmaz" notu brief'e uygun (`i18n/messages.ts:370`).

### [G] Randevu penceresi: **4,6/10** (N 6 · S 5 · M 5 · Sü 3 · G 4)
Kanıtlı sürtünmeler:
1. **Bölüm yeniden soruluyor.** `departmentId: ""` boş başlıyor (`ui/patterns/AppointmentRequestModal.tsx:31`) ve uzmandan bağımsız olarak 4 bölümün hepsi listeleniyor (`:76-82`). `Specialist.department` alanı mevcut (`domain/types.ts:84`) ama kullanılmıyor. API de bölümün uzmana uygunluğunu denetlemiyor (`api index.ts:324`).
2. **Görüşme biçimi uzmana göre süzülmüyor.** Varsayılan "online" (`:32`). Uzmanın bu biçimde hizmeti yoksa API sessizce ilk hizmeti kullanıyor (`api index.ts:367-369`: `?? specialist.offerings[0]`). Danışan yüz yüze seçip online hizmete yazılabiliyor.
3. **11 karar, 6 zorunlu metin alanı.** Doğrulama `:41-62`'de, etiketler `messages.ts:438-454`'te. "Danışan yaşı*" ve "Şehir*" API'de de zorunlu (`api index.ts:299`). Yaş ve şehirde `autoComplete` yok (`:266-276`). Paket kıyası: her ek alan yaklaşık %7 kayıp.
4. **Hata olunca kaydırma yok.** `handleSubmit` hataları yazıp `return` ediyor (`:134-136`). İlk hatalı alana odak veya kaydırma yok. Mobilde "Randevuyu oluştur" en altta, "Bölüm seçin" hatası ise en üstte kalıyor. Kullanıcı dokununca görünürde hiçbir şey olmuyor.
5. **Saat yüklenemezse "müsait saat yok" yazıyor.** `fetchOpenSlots` hata verirse `slots=[]` oluyor (`:95-100`) ve "Müsait saat yok: Önümüzdeki günlerde açık randevu yok" uyarısı çıkıyor (`:220-223`, `messages.ts:444-445`). Ağ hatası, uzman dolu gibi görünüyor.
6. **Takvim içinde bulunulan ayda açılıyor** (`ui/patterns/BookingSlotPicker.tsx:42-43, 69-75`). Ay sonunda boş ay görünüyor. **Karar verildi: şimdilik değişmeyecek.**
7. **Saatler yalnız hafta içi gündüz.** Seed şablonu Pzt–Cum 09:00–17:00, 50 dk (`api seed.ts:486-500`). Üretici günde 10 slot veriyor (09:00 … 15:40 + 16:10 kapanış, `api availability.ts:110-136`). Canlıda uzman başına ~860 açık saat [API] ve 86 hafta içi günü × 10 = 860 [ÇIKARIM]. Bu, canlı takvimlerin şablon olduğunu gösteriyor. Hedef kitle çalışan 25–45 yaş [BRIEF §3] ama akşam ve cumartesi saati yok.
8. **Görsel çakışma riski (doğrulanmalı).** Ara/WhatsApp barı `z-index: 58`, pencere katmanı `40` (`styles/tokens.css:147-149`) ve pencere açıkken bar gizlenmiyor. Mobilde sağ altta penceredeki gönder düğmesinin üstüne binme olasılığı var. Kodla tespit edildi, ekranda ölçülmedi.
9. **Serbest "Mesajınız (isteğe bağlı)" alanı** (`:278`). Yönlendirme metni yok, danışan şikâyet ya da tanı yazabiliyor. Mesaj hem `appointment.clientNote`'a hem ayrı bir `appointmentRequest` kaydına yazılıyor (`api index.ts:383, 391-407`). Bu, brief §7'ye aykırı ("Randevu/WhatsApp akışlarında danışanın şikâyeti veya tanısı kayda geçmez") ve KVKK özel nitelikli veri riski taşıyor.
- İyi yanlar: ad, soyad, telefon ve e-postada `autoComplete` ve uygun `type`/`inputMode` var (`:245-265`). Ödeme, üyelik ve "prototip" metni yok.

### [H] "Randevunuz oluşturuldu": **4,5/10** (N 5 · S 4 · M — · Sü 6 · G 3)
- Ekran: "{name} ile {date} saat {time} randevunuz kaydedildi." + "İptal için: 0552…" (`AppointmentRequestModal.tsx:171-180`; `messages.ts:471-473`).
- API doğrudan `status: "confirmed"` yazıyor (`api index.ts:385`). `/api/appointments/book` (`:272-420`) içinde e-posta, SMS ya da bildirim yok. API'de e-posta/SMS kütüphanesi de yok (grep: nodemailer/sms yok).
- Adres (yüz yüze) ya da online bağlantının nasıl geleceği yazmıyor, takvime ekle seçeneği de yok.
- **Çelişki:** ana sayfa "Üç adımda randevu **talebi** gönderin… ekibimiz sizinle iletişime geçer" (`messages.ts:121, 127`). SSS: "Ekibimiz kısa sürede sizinle iletişime geçerek…" (`data/institution.ts:310`). Pencere ise "Randevunuz oluşturuldu" diyor.
- **Operasyonel risk:** son seans 16:10 ile 15:40 seansı çakışıyor (15:40–16:30 / 16:10–17:00). İkisi de açık listeleniyor (`availability.ts:110-136`) ve API yalnız aynı başlangıç saatini denetliyor (`index.ts:361`). Aynı uzmana çakışan iki "kesin" randevu yazılabiliyor. Asgari ön süre de yok: şu andan 1 dakika sonrası bile "kesin" alınabiliyor (`availability.ts:113`). Bunlar gelmeme ve güven sorunu doğurabilir.

---

## Huni Sızıntıları (Funnel Leaks Detected)

| Sızıntı noktası | Önem | Sorun | Çözüm |
|---|---|---|---|
| Reklam → Açılış (ölçüm) | **Kritik** | Dönüşüm etiketi yok, randevu kaynağı kaydedilmiyor | Birinci taraf olaylar (pencere açıldı / gün seçildi / gönderildi / tel: / WhatsApp), analitik onayına bağlı. Randevu kaydına `utm_source/campaign` (ilk ziyaretten, onaylıysa) eklenmeli. Ads için onaylı dönüşüm etiketi |
| Açılış → İlgi | **Yüksek** | 4,8 sn animasyon + tıklanamaz çerez perdesi. Telefon/WhatsApp gizli | Ara/WhatsApp barını `pendingConsent`'ten bağımsız göstermek. Çerez penceresini alt bant yapıp siteyi kilitlememek (hukuki teyitle). Animasyon: **karar verildi**. Yalnız derin link ve KVKK sekmesinde atlanması önerilir |
| İlgi → Değerlendirme | **Yüksek** | Sosyal kanıt marka kuralına aykırı ve doğrulanamaz. Kurumsal kanıt görünmüyor | "Danışan yorumları" bandını kaldırmak ve yerine (zaten yazılmış) `InstitutionProofStrip`'i metni düzelterek koymak |
| Değerlendirme → Niyet | **Yüksek** | Ücret/süre yok. "Talep mi randevu mu" çelişkili. SSS "Prototip…" diyor. Profilde doğrulama ve ikinci CTA yok | Tek dil. Profilde "Görüşme bilgileri" kartı (müşteri onayıyla ücret). Doğrulama rozeti yalnız dolu kayıtlarda. Profil sonunda ikinci CTA |
| Niyet → Dönüşüm | **Yüksek** | Bölüm yeniden soruluyor, biçim süzülmüyor, yaş/şehir zorunlu, hatada kaydırma yok, ağ hatası "müsait değil" gibi görünüyor | Bölüm/biçim önseçimi. Yaş/şehir isteğe bağlı ya da "Kim için?" seçimi. İlk hataya odak. Ayrı "Saatler yüklenemedi, lütfen tekrar deneyin / bizi arayın" durumu |
| Niyet → Dönüşüm | **Kritik (yasal/marka)** | Serbest mesaj alanı şikâyet/tanı toplamaya açık ve iki tabloya yazılıyor | Alanı kaldırmak ya da seçmeli "aranma zamanı" ile değiştirmek. Kalacaksa uyarı notu |
| Niyet → Dönüşüm | Orta | Yalnız hafta içi 09:00–16:10 | Uzmanların gerçek akşam/cumartesi saatleri admin panelinden girilmeli (operasyon). Ekip teyidi gerekiyor |
| Dönüşüm → Gelme | Orta | Onay mesajı yok, adres/online bilgisi yok, çakışan seans ve 1 dk ön süre | Onay e-postası + .ics. Kapanış seansının çakışması düzeltilmeli. Asgari ön süre (ör. 12–24 saat, ekip kararı) |

**Gelir etkisi (yalnız formül, varsayım):**
`Δ aylık ilk seans = Z × (o₁ − o₀)` · `Δ aylık gelir = Δ ilk seans × Ü × S`
Z = aylık ziyaret (bilinmiyor), o₀/o₁ = önce/sonra ziyaret→randevu oranı (bilinmiyor), Ü = seans ücreti (API'de ₺1.450–2.100), S = danışan başına ortalama seans (bilinmiyor).
*Varsayım örneği (gerçek veri değil):* Z = 1.000, o₀ = %1, o₁ = %1,3 olursa ayda +3 ilk seans eder; S = 1 için bu ₺4.350–6.300/ay demektir. Gerçek değer için önce ölçüm kurulmalı.

---

## Hızlı CRO Kazanımları (Quick CRO Wins, bu hafta)

1. **Ara/WhatsApp barını çerez kararından ayırmak.** `App.tsx:292` koşulundan `!pendingConsent` çıkarılmalı. Bar `inert` alanın dışında render ediliyor, ama `.cookie-gate` karartması `z-index: 69` ile barın (`58`) üstünde (`styles/tokens.css:148-149`, `components.css:363`); perde kalacaksa barın katmanı perdenin üstüne alınmalı ya da perde kaldırılmalı. Masaüstü header'da "Randevu al"ın yanına metin bağlantısı **"0552 898 95 45"**, hero altına küçük satır: **"Sorunuz mu var? Bizi arayabilir ya da WhatsApp'tan yazabilirsiniz."** Etiket düzeltmesi: "WhatsApp'ten sor" yerine **"WhatsApp'tan yazın"** (`messages.ts:67`; Türkçe ek uyumu "WhatsApp'tan"). Ölçüt: oturum başına tel:/WhatsApp tıklaması.
2. **Pencerede bölüm ve biçim önseçimi.** Uzmanın `department` değeri tekse seçili gelmeli, birden fazlaysa yalnız o bölümler listelenmeli. Görüşme biçimi yalnız uzmanın hizmetleri arasından sunulmalı ve API'deki `offerings[0]` geri düşüşü 400 hatasına çevrilmeli. Ölçüt: pencere açıldı → gönderildi.
3. **Gönderimde ilk hatalı alana kaydırma + ayrı yükleme hatası.** `handleSubmit` içinde ilk hatalı alanın `focus()`/`scrollIntoView` çağrısı. `fetchOpenSlots` hatasında **"Saatler şu anda yüklenemedi. Sayfayı yenileyebilir ya da 0552 898 95 45'i arayabilirsiniz."** yazmalı, "Müsait saat yok" değil. Ölçüt: gönder tıklaması → başarılı gönderim.
4. **Serbest mesaj alanı (marka/KVKK).** Önerilen yol: alanı kaldırıp yerine isteğe bağlı seçim koymak: **"Sizi hangi zaman aralığında arayabiliriz? Hafta içi gündüz / Hafta içi akşam / Fark etmez"**. Alan kalacaksa etiket "Not (isteğe bağlı)" olmalı ve altına **"Lütfen yaşadığınız durumun ayrıntılarını ya da sağlık bilgisi yazmayın; bunları görüşmede uzmanınızla konuşabilirsiniz."** eklenmeli. Aynı not /iletisim'deki zorunlu mesaj alanına da konmalı (`ui/patterns/ClinicContactForm.tsx:27-28`).
5. **Tek dil, tek gerçek.** Ekip seçmeli: kesin randevu mu, teyitli talep mi?
   - Teyit ediliyorsa (brief'in acele ettirmeyen tonuna daha yakın): başarı başlığı **"Randevu talebiniz alındı"**, gövde **"{name} ile {date}, saat {time} için talebinizi aldık. Ekibimiz bu saati teyit etmek için sizi arayacak."** API durumu `pending` olmalı.
   - Kesinse: ana sayfa **"Üç adımda randevunuzu oluşturun."** / "Uygun gün ve saati seçin; randevu bilgileriniz e-posta adresinize gönderilir." (e-posta kurulduktan sonra). SSS (`institution.ts:310`) ve /hakkimizda da aynı dile çekilmeli.
6. **Sosyal kanıt yerine kurumsal kanıt.** `HomePage.tsx:15` `HomeGoogleReviews` kaldırılıp yerine `InstitutionProofStrip` konmalı. İkinci maddenin metni 5. maddedeki karara göre güncellenmeli. Birinci madde ("Kimlik ve diploma bilgileri uzman profilinde açıklanır") ancak profilde doğrulama gösterilince doğru olur, o zamana kadar yazılmamalı. Önerilen şerit: **"Aile ve Sosyal Hizmetler Bakanlığı ruhsatlı aile danışma merkezi · 18 uzman, 4 bölüm · Çankaya'da yüz yüze, her yerden online"**. Rakamlar EVIDENCE'tan, yayından önce müşteriyle teyit edilmeli.
7. **Güven açıkları.** /kriz-destegi `CrisisPage`'e bağlanmalı (`App.tsx:279-280` şu an ana sayfayı açıyor). Footer'a "Acil destek bilgileri" eklenmeli (`messages.ts:43`'te metin hazır, hiçbir .tsx kullanmıyor). SSS iptal cevabı (`institution.ts:345` "Prototip aşamasında 24 saat öncesine kadar ücretsiz iptal…") **"Randevunuzu en geç 24 saat önce 0552 898 95 45'i arayarak iptal edebilir ya da başka bir güne alabilirsiniz."** olmalı (24 saat kuralı müşteriden teyit edilmeli, "ücretsiz" kullanılmadı). "Tedavi Alanı" ve "tedavi alanı seçerek" (`messages.ts:355, 362`) **"Çalışma alanı"** olmalı. Pazarlama onamı cümlesi (`institution.ts:340`, randevu adımında böyle bir onam yok) kaldırılmalı.

---

## A/B Test Hipotezleri

(Önce ölçüm kurulmalı. Trafik düşük olabileceği için bazıları A/B yerine tek karar olarak uygulanabilir. Etki aralıkları paketin genel kıyaslarıdır.)

1. **Hipotez:** Pencerede bölüm/biçim önseçili gelirse ve yaş/şehir isteğe bağlı olursa (karar sayısı 11'den 7–8'e iner), pencere açılışından gönderime geçiş artar, çünkü kaldırılan her zorunlu alan bir terk noktasını azaltır.
   **Metrik:** pencere açıldı → randevu oluşturuldu. **Beklenen etki:** paket kıyası, kaldırılan alan başına ~%7.
2. **Hipotez:** Ara/WhatsApp barı ilk ekranda (çerez kararından önce) görünürse ve header'da telefon yer alırsa, ilk oturumdaki temas artar, çünkü kararsız ziyaretçi için en düşük eşikli kanal açılışta görünür.
   **Metrik:** oturum başına tel:/WhatsApp tıklaması + o oturumdaki pencere açılışı (kanal yamyamlığını görmek için).
3. **Hipotez:** Profilde "Görüşme bilgileri" kartı (biçim, 50 dk, ücret) gösterilirse pencere → gönderim artar ve "ücret nedir" aramaları azalır, çünkü bütçe belirsizliği forma gelmeden giderilir. *Ücret yayını müşteri kararı.*
   **Metrik:** pencere → gönderim; ekibin "ücret sorusu" arama kaydı.
4. **Hipotez:** Profil sonunda ikinci CTA (**"{Ad} ile görüşmek isterseniz uygun bir gün seçebilirsiniz."** [Randevu al]) olursa profil → pencere açılışı artar, çünkü biyografiyi okuyan kişi yukarı kaydırmak zorunda kalmaz.
   **Metrik:** profil görüntüleme → pencere açılışı.
5. **Hipotez:** Animasyon derin linklerde ve aynı oturumdaki tekrar yüklemelerde atlanırsa (ana sayfa ilk ziyarette korunur, **karar verildi** çerçevesinde), profil reklam trafiğinde hemen çıkma azalır. Paket kıyası: 3–5 sn gecikme ≈ −%20.
   **Metrik:** derin link oturumlarında ilk etkileşime kadar geçen süre ve çıkış oranı. *Ekip kararını değiştirmez, yalnız kapsamını test eder; onay ekipte.*

---

## Eksik CRO Öğeleri (Missing CRO Elements, marka uyumlu)

- Huni ölçümü: pencere açıldı / gün seçildi / gönderildi / tel: / WhatsApp olayları; randevu kaydında kaynak/kampanya
- Çerezden bağımsız, ilk ekranda görünen telefon ve WhatsApp
- Bölüm/biçim önseçimi, hatada odak, ağ hatası durumu
- Profilde doğrulama gösterimi, "Görüşme bilgileri" (süre; ücret müşteri kararıyla) ve ikinci CTA; mobilde ekrandan çıkan CTA için ince sabit alt bar ("{Ad} · Randevu al", aciliyet içermeyen)
- Uzman kartında bölüm + görüşme biçimi satırı ve gerçek `<a href>` profil bağlantısı
- Onay e-postası, .ics, başarı ekranında adres (yüz yüze) / "bağlantı ayrıca iletilecek" (online)
- Kriz destek sayfası ve ona giden bağlantı (brief §7: "kriz hizmeti olmadığı açıkça yazılır")
- Kurumsal kanıt şeridi (bileşen hazır, kullanılmıyor)
- Gerçek çalışma saatleri (akşam/cumartesi varsa); kapanış seansı çakışması ve asgari ön süre düzeltmesi

## Öncelik Listesi

| Öncelik | İş | Çaba |
|---|---|---|
| **P1** | Mesaj alanı (Quick win 4), çerezden bağımsız Ara/WhatsApp (1), hata odağı + yükleme hatası (3), güven açıkları (7), yorum bandı → kurumsal şerit (6) | her biri < 1 gün |
| **P1** | Talep/randevu kararı ve tek dil (5); çakışan 16:10 seansı ve ön süre | karar + < 1 gün |
| **P2** | Bölüm/biçim önseçimi + API'de uyumsuz biçimi reddetme (2); yaş/şehir isteğe bağlı | 1–2 gün |
| **P2** | Huni ölçümü + randevuda kaynak alanı; onay e-postası/.ics | 2–4 gün |
| **P2** | Profil: doğrulama (yalnız dolu kayıtlar), ikinci CTA, mobil sabit bar; 10 uzmanın doğrulama kaydı (operasyon) | 1–3 gün |
| **P3** | Ücret/süre gösterimi (müşteri kararı); kart zenginleştirme; header CTA'sının hedefi; gerçek çalışma saatleri (operasyon) | değişken |
| ✅ **Karar verildi** | Açılış animasyonu (4,8 sn) **kalıyor**. Bulgu kayıt için yazıldı; yalnız kapsam (derin link/KVKK sekmesi) önerisi ekibin takdirinde | — |
| ✅ **Karar verildi** | Takvimin içinde bulunulan ayda açılması **şimdilik değişmeyecek**. Bulgu kayıt için yazıldı | — |
| ⛔ **Marka kuralı gereği uygulanmadı** | Aciliyet/kıtlık ("son X saat", sayaç, "X kişi bakıyor"), danışan yorumu ekleme/öne çıkarma, sonuç vaadi, "ilk seans ücretsiz", "en iyi", "garanti", "tedavi", 7/24, çıkış pop-up'ında teşvik, formda şikâyet/konu sorma | — |

## Doğrulanamayanlar / Varsayımlar

- Ziyaret, pencere açılışı ve randevu sayıları: GA4 yok, admin veritabanı okunmadı. Dönüşüm oranı verilmedi.
- Reklamların hedef URL'si ve Humentis Ads verileri kullanılmadı.
- Canlı takvimlerin şablon olduğu yalnız [ÇIKARIM] (860 = 86 hafta içi günü × 10 slot). Uzmanların gerçek çalışma saatleri ekiple teyit edilmeli.
- Ara/WhatsApp barının penceredeki gönder düğmesiyle mobilde çakışması kodla tespit edildi, ekranda ölçülmedi.
- Çerez perdesinin hukuki gerekliliği, iptal politikası (24 saat) ve ücretlerin güncelliği müşteri/KVKK danışmanıyla teyit edilmeli.
- Dokunma alanı boyutları ve pencerenin mobil kaydırma uzunluğu ölçülmedi.
