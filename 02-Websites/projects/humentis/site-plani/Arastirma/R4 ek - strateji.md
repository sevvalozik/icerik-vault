---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]"]
---

> [!note] R4 eki · Marka, güven ve büyüme — ai-marketing-claude `market-strategy` alt ajanının tam çıktısı. Ana rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

---
type: denetim-alt-rapor
client: "Humentis"
slug: humentis
status: taslak
date: 2026-10-02
tags: [humentis, denetim, strateji, marka, guven, buyume]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[00 Humentis Site Plani (MOC)]]"]
---

# Humentis — Marka ve Büyüme Stratejisi Analizi (market-strategy + market-brand)

Kapsam: humentis.com.tr (30.09.2026 JS sonrası DOM, `humentis-audit-sayfalar-humentis.json`), main kodu `/home/claude/build/base/humentis` (yol kısaltması: `web/` = `apps/web/src/`, `api/` = `apps/api/src/`), EVIDENCE.md, rakip sayfa paketleri. Canlı API bu oturumda erişilemedi (proxy 403); API verileri EVIDENCE.md'deki 30.09 ölçümüdür.
Kullanılmayanlar: Google Ads rakamları (doğrulanmadı). Randevu akışı ve ücret bilgisi için kod esas alındı: gerçek akış `AppointmentRequestModal`, ~860 açık saat/uzman, ziyaretçiye açık sayfada ₺ yok.

---

## Puanlar

### Marka ve Güven Puanı: **43/100**
### Büyüme ve Strateji Puanı: **30/100**

(Hesap: her alt boyut 0-10; üç alt boyutun ortalaması × 10.)

### Marka değerlendirmesi
| Boyut | Puan | Ana bulgu |
|---|---|---|
| Marka tutarlılığı | 6/10 | Görsel sistem ve sakin, "siz"li ses tutarlı. Ancak site kendisiyle çelişiyor: "Pazaryeri mantığıyla değil" (`web/data/institution.ts:64`) ↔ footer "…hizmet sunduğu **randevu platformu**" (`web/i18n/messages.ts:36`); "Online görüşme tüm kadroda" (`messages.ts:118`, `institution.ts:204`) ↔ "online görüşme uygun uzmanlarda" (`institution.ts:224`, /hakkimizda lede) ↔ "Her uzman iki seçeneği birden sunmayabilir" (`institution.ts:305`). Onaylı slogan "İnsan odaklı • zihinsel esenlik" (`messages.ts:91`) hiçbir bileşende kullanılmıyor (`organization.slogan: ""`, `web/data/specialists.ts:7`). |
| Güven mimarisi | 4/10 | Güçlü temel: header+footer'da Aile ve Sosyal Hizmetler Bakanlığı logosu (`web/app/AppShell.tsx:77-80, 133-136`), kapsam/kapsam dışı, unvan farkları, KVKK, "kriz hizmeti değildir" uyarısı. Fakat üç güven vaadi canlıda karşılanmıyor (aşağıda "Güven mimarisi" bölümü): profil doğrulaması **hiçbir** profilde görünmüyor, kriz sayfası rotası ana sayfayı açıyor, ana sayfa SSS'inde "Prototip aşamasında… ücretsiz iptal" metni yayında. |
| Otorite sinyalleri | 3/10 | 16/16 makale "Tam metin yakında yayınlanacaktır" (10 kelime) [API]; podcast bandı Spotify **arama** sayfasına gidiyor (`web/data/socialChannels.ts:10,15`, `spotifyShowId: ""`) — gösteri varlığı doğrulanamadı; basın/ödül/konuşma yok; duyurular boş. Kurucu biyografisi ve 18 kişilik kadro tek gerçek otorite varlığı. |

### Büyüme değerlendirmesi
| Boyut | Puan | Ana bulgu |
|---|---|---|
| Fiyat stratejisi | 3/10 | Ziyaretçiye açık hiçbir sayfada ücret, seans süresi ya da iptal koşulu yok; sistemde ₺1.450–2.100 `offerings.totalPrice` var ama yalnız linksiz `/randevu/<slug>`'da [API][KOD]. Fiyatı göstermemek Ankara'da sektör normu (CAN, Vivere, Yaşam, Optimum'da fiyat yok) — sorun gizlilik değil, **politikasızlık**: tek "koşul" metni prototip iptal cümlesi (`institution.ts:345`). |
| Edinim kanalları | 3/10 | Görünen: Instagram (`socialChannels.ts:6`), WhatsApp/telefon, Google yorumları (elle seçilmiş, linksiz), podcast (doğrulanmadı), kurumsal sayfa. Organik arama fiilen kapalı (her URL'de aynı 4.404 bayt kabuk, hizmet sayfası yok, profiller sitemap'te yok) [CANLI]. Ölçüm etiketi yok; birinci taraf ziyaret kaydı UTM/kampanya tutmuyor ve randevuyla ilişkilendirilemiyor (`web/features/consent/useVisitTracker.ts:28-32`, `api/index.ts:129-142`). |
| Elde tutma ve genişleme | 3/10 | Yapısal genişleme potansiyeli yüksek (yetişkin → çift → çocuk/ergen → aile, kurumsal ÇDP aynı çatıda). Ancak randevu sonrası hiçbir otomatik temas yok: e-posta/SMS onayı ve hatırlatma altyapısı kodda yok (nodemailer/sms/İYS araması boş), pazarlama izni alınmıyor (randevu penceresinde yalnız KVKK kutusu, `AppointmentRequestModal.tsx:282`), bülten yok, duyurular boş. |

---

## Güven mimarisi: vaat ↔ gerçek (en kritik bölüm)

Konumlandırmanın kendisi "doğrulanmış uzmanlık" ve "kontrol edilmiş uzman bilgileri" (marka brief §2). Site bu vaadi yazıyor ama ispatlamıyor; bu, sıradan bir eksik sinyal değil, markanın merkez vaadini zayıflatan bir boşluk.

| Sitedeki vaat | Kaynak | Gerçek durum | Kaynak |
|---|---|---|---|
| "Kimlik ve diploma doğrulama… doğrulama kapsamı **her profilde açıkça belirtilir**." | `institution.ts:84` (/hakkimizda'da yayında) | Doğrulama bileşeni (`VerificationDisclosure`) yalnız /hakkimizda'daki genel güven bölümünde kullanılıyor (`TrustSection.tsx:35`); hiçbir uzman profili doğrulama göstermiyor. /uzmanlar/elif-silav DOM'unda "kontrol edildi" geçmiyor. | `grep VerificationDisclosure` → tek kullanım; [CANLI] |
| "Kimlik, diploma ve uzmanlık beyanları **profilde** açıkça gösterilir." | `institution.ts:93` | Aynı: profil sayfasında yok. Ayrıca 18 uzmanın 10'unda `verification` alanı boş. | [API] EVIDENCE |
| "Humentis tarafından kontrol edildi… Son kontrol: Ağustos 2026" rozeti | `web/i18n/content.ts:285-293` | Kişiye bağlı değil, sabit kodlu genel rozet; 10 boş kayıtla birlikte okunduğunda "herkes kontrol edildi" izlenimi veriyor ama veriyle desteklenmiyor. | [KOD] |
| "Acil durumlar için… kriz destek sayfası **her ekrandan erişilebilir**." | `institution.ts:94` | `/kriz-destegi` rotası `HomePage` döndürüyor (`web/app/App.tsx:279-280`); CrisisPage bağlı değil. SSS "kriz destek sayfamızı ziyaret edin" diyor (`institution.ts:330`). | [KOD] |
| "Randevu talebinizi ilettikten sonra ekibimiz sizinle iletişime geçer." | `institution.ts:65`, ana sayfa 3. adım | Pencere "Randevunuz oluşturuldu… randevunuz kaydedildi" diyor (`messages.ts:471-472`) ve kayıt doğrudan `status: "confirmed"` açılıyor (`api/index.ts:385`). Danışana onay e-postası/SMS'i gitmiyor. Danışan "kesinleşti mi, aranacak mıyım?" belirsizliğinde kalıyor. | [KOD] |
| "Pazarlama izni ayrı bir onam olarak istenir ve varsayılan olarak kapalıdır." | `institution.ts:83`, `:340` | Randevu, iletişim ve kurumsal formların hiçbirinde pazarlama izni alanı yok. Vaat doğru yönde ama uygulanmamış. | `AppointmentRequestModal.tsx`, `api/index.ts:1809-1851` |
| "Randevumu iptal edebilir miyim?" → "**Prototip** aşamasında 24 saat öncesine kadar **ücretsiz** iptal gösterilir. Kesin iptal ve iade koşulları canlı hizmet öncesinde yayınlanacaktır." | `institution.ts:345` → ana sayfa SSS "Gizlilik" grubu (`InstitutionFaq.tsx`) | Canlı sitede, ana sayfada açılabilir halde. Hem "prototip" hem brief'te yasak "ücretsiz" kelimesi; ayrıca "canlı hizmet öncesinde" ifadesi sitenin canlı hizmet vermediğini ima ediyor. (Not: bu, site planı P0-05'teki BookingPage iddiasından ayrı ve gerçek bir bulgu.) | [KOD] |
| "Danışan yorumları" (Google etiketli 7 yorum) | `web/data/googleReviews.ts` ("Elle seçilmiş"), `HomeGoogleReviews.tsx` | Kaynağa link yok (`googleReviewsCta` tanımlı, kullanılmıyor), yorumlar doğrulanamaz. İçerikte sonuç ifadeleri var ("oğlumun kıskançlığı ciddi azaldı"). Marka brief §7 danışan yorumu ve sonuç ifadesini yasaklıyor; site planı P2-14'te karar kurucular+hukukta. → **Karar bekliyor**, bu raporda yeni yorum/sosyal kanıt önerilmez. | [CANLI][KOD] |

Ek güven riskleri:
- `/api/appointment-requests` uç noktası `nationalId` (T.C. kimlik no) alanını kabul edip kaydediyor (`api/index.ts:74, 1889`); arayüzde alan yok. Kullanılmayan bir hassas veri kapısı; KVKK "amaçla sınırlılık" vaadiyle (`institution.ts:81-84`) çelişir. Kaldırılması önerilir (geliştirici kararı).
- Randevu penceresindeki serbest "Mesajınız (isteğe bağlı)" alanı (`messages.ts:453`, `AppointmentRequestModal.tsx:278`) danışanı şikâyet yazmaya davet edebilir; brief §7 "randevu akışında şikâyet/tanı kayda geçmez" diyor. Yardımcı metin önerisi: "Lütfen burada şikâyetinizi ya da sağlık bilginizi paylaşmayın; uygun zaman ve iletişim tercihinizi yazabilirsiniz."
- Uzman profillerinde uzun tanı listeleri (Elif Silav profilinde "Borderline (Sınırda) Kişilik Bozukluğu", "Kendine Zarar Verme", "Anoreksiya", "Majör Depresif Bozukluk"… [CANLI]) ve "psikoterapiyi sadece bir tedavi süreci olarak değil" ifadesi, brief §4 "teşhis koyan dil yok" ve kurumun kendi "Kapsam dışı: … tıbbi tanı koyma" çerçevesiyle (`institution.ts:120`) gerilim yaratıyor. İçerik kararı: tanı adı yerine yaşam teması dili ("kaygı ve çok düşünmek", "ilişkilerde güven").
- Kurumsal sayfada brief'le çelişen dört ifade (bkz. "Kurumsal ÇDP hattı").

Güven mimarisinde **çalışan** şeyler (korunmalı): Bakanlık logosu her sayfada; unvan farkları tablosu (Uzman / Klinik Psikolog / PDR, `institution.ts:97-116`); açık "kapsam dışı" listesi (`institution.ts:118-121`); "Doğrulama… tıbbi lisans veya devlet onayı anlamına gelmez" dürüst feragati (`institution.ts:357`); "Bu ifade hizmet sonucu garantisi değildir" (`messages.ts:193`). Bunlar rakiplerin hiçbirinde bu açıklıkta yok — doğru uygulanırsa gerçek farklılaştırıcı.

Eksik güven kanıtı: Bakanlık ruhsatı yalnız logo olarak var; ruhsat adı/numarası ya da "Aile ve Sosyal Hizmetler Bakanlığı izinli aile danışma merkezi" cümlesi metinde yok (`grep ruhsat` → sonuç yok). Brief'teki fiziksel farklılaştırıcılar (14 danışma odası, çocuk odası, test laboratuvarı, gözlem odaları) sitede hiç geçmiyor (`grep "danışma odası|test laboratuvar|oyun odası"` → yok); galeri 6 fotoğraf.

---

## Fiyat analizi

- **Mevcut yapı:** Ziyaretçiye ücret, seans süresi, ilk görüşmenin nasıl geçtiği, iptal/no-show politikası gösterilmiyor. Sistem fiyatları (₺1.450 / 1.650 / 1.800 / 1.850 / 1.950 / 2.100) yalnız linksiz, robots'ta kapalı eski BookingPage'de. Telefonda farklı fiyat söylendiği iddiası **doğrulanamadı**; sistem fiyatlarının güncel olup olmadığı da doğrulanamadı.
- **Güçlü yan:** Sektör normuna uygun; fiyatla yarışmıyor; brief'e uygun olarak "ücretsiz ilk seans" yok (CAN'de var: "Size özel ilk seans ücretsiz" — Humentis için **marka kuralı gereği uygulanmadı / önerilmez**).
- **Zayıf yan:** Ücret sorusu karar anındaki en büyük belirsizlik; site cevabı WhatsApp/telefona itiyor ve bu temasın kaynağı ölçülmüyor. Optimum gibi rakipler "ücretler neye göre değişir", "seanslar 40–50 dk" ve "ücret ve takvim bilgisi şeffaf biçimde paylaşılır" içeriğini yayınlıyor [rakip DOM]. Humentis'in "şeffaf randevu süreci" vaadi (`institution.ts:64`) bu alanda karşılıksız.
- **Öneri (fiyat göstermeden şeffaflık):**
  1. Tek "Ücret ve görüşme koşulları" bloğu (randevu penceresinin 1. adımında katlanabilir + /sss + gelecekteki hizmet sayfaları): seans süresi, ücretin unvan/bölüm/görüşme biçimine göre değiştiği, ücretin talep sonrası telefonda **yazılı olarak da** iletileceği, iptal/no-show kuralı. Prototip SSS metni (`institution.ts:345`) bununla değiştirilir.
  2. İç karar: fiyat listesi tek kaynakta (O1 maddesi 3); sistemdeki `offerings.totalPrice` ya güncellenir ya da kullanılmadığı netleşir. Sitede fiyat yayınlanacaksa "₺X'ten başlayan" aralık ile, unvan farkıyla açıklanarak — bu, kurucu kararıdır; fiyat yayınlamak zorunlu değil.
  3. Kurumsal ÇDP için paket mantığı (seans havuzu / kişi başı yıllık / eğitim+seans) — ücret yayınlanmadan "paket yapısı" anlatılabilir.
  4. İndirim, "ilk seans ücretsiz", kampanya, yönlendirme ödülü: **marka kuralı gereği uygulanmadı.**

---

## Kanal stratejisi

- **Aktif kanallar:** Instagram (@humentispsikoloji), WhatsApp + telefon (sabit bar, yalnız animasyon ve çerez kararından sonra), Google İşletme Profili (vault G1, performans verisi doğrulanmadı), Google Ads (vault; rakamlar kullanılmadı), kurumsal sayfa + form, Spotify podcast (gösteri doğrulanamadı).
- **Az kullanılan kanallar (potansiyel):**
  - **Organik arama / hizmet sayfaları:** kodda hizmet sayfası yok; prerender olmadan hiçbir içerik indekslenebilir değil. (Teknik ajan kapsamı; burada yalnız stratejik önemi: Ankara aramasında CAN 197 yazıyla önde [vault R1].)
  - **İçerik:** 16 soru başlıklı makale fikri brief'in "soru sorarak açan" sesine birebir uyuyor ("Neden hep aynı şeyleri yaşıyorum?", "Bir yanım istiyor, bir yanım istemiyor.") ama gövdeler boş. 12 metinlik terapist reels serisi ve "scroll hikâyeler" (vault `02-Websites/projects/humentis/scroll-hikayeler`) hazır içerik havuzu — siteye bağlanmamış.
  - **Uzman dış profilleri ve kişisel siteleri:** vault P2-12 (DoktorTakvimi/Doktorsitesi tutarlılığı, Elif Silav kişisel sitesinden link) — entity ve referans trafiği.
  - **Kurumsal (B2B):** sayfa ve form var, satış hattı yok (aşağıda).
  - **Online / Türkiye geneli:** sitenin hiçbir başlığı, açıklaması ya da sayfası Ankara dışındaki kişiye seslenmiyor (aşağıda).
- **Önerilen sonraki kanal: "Online psikolojik danışmanlık — Türkiye geneli".** Gerekçe: kapasite. 18 uzmanın her birinde ~860 açık saat var [API 30.09]; yüz yüze talep Çankaya'ya bağlı ve Ankara aramasında rekabet yoğun (CAN, Vivere, Yaşam, Optimum hepsi "Ankara psikolog" başlığıyla). Online görüşme kadroda yaygın (`teamProfiles.ts` her profilde `svc-*-online`) ve randevu formu zaten `city` alanı topluyor (`api/index.ts` booking, `clientCity`) — yani Ankara dışı talebin ölçümü için altyapı hazır. Ana sayfadaki yorumlardan biri yurt dışından online ebeveyn danışmanlığı anlatıyor ("Almanya'da yaşıyoruz…") — talep sinyali, ama bu yorumun pazarlamada kullanılması önerilmez (§7).

### Online ile Türkiye geneli (stratejik değerlendirme)
| Konu | Durum | Öneri |
|---|---|---|
| Mesaj | Title/description'da Ankara bile yok; online yalnız ikincil cümle ("Online görüşme tüm kadroda") ve kendisiyle çelişiyor. | Tek ve doğru cümle seçilsin (kadro verisine göre): "Yüz yüze görüşmeler Çankaya'da; online görüşme Türkiye'nin her yerinden." Tüm dosyalarda aynı (`institution.ts:204, 224, 305`, `messages.ts:118`, `content.ts:332`). |
| Sayfa | Online'a özel sayfa yok. | `/online-psikolojik-danismanlik`: nasıl bağlanılır, gizlilik/altyapı, hangi durumlarda yüz yüze önerilir (mevcut "travma ve ağır belirti alanlarında online çalışmanın uygunluğu ilk görüşmede değerlendirilir" cümlesi — `institution.ts:75` — burada çok değerli), online çalışan uzmanlar filtresi. |
| Ölçüm | `city` toplanıyor ama raporlanmıyor. | Admin'de randevuların şehir kırılımı (Ankara / Ankara dışı / yurt dışı). Kişisel veri değil, toplu sayı. |
| Hukuk | Yurt dışındaki danışana online hizmetin mevzuat/sigorta/fatura boyutu **doğrulanamadı**. | Yurt dışı vurgusu hukuk onayı gelmeden yapılmasın; Türkiye geneli ile başlansın. |
| Rekabet | Optimum "dünyanın neresinde olursanız olun" online konumlanmasını kullanıyor [rakip DOM]. | Humentis'in farkı: "aynı kurum çatısı + doğrulanmış uzman bilgisi" — online'da bu daha da kıymetli, çünkü danışan merkezi göremiyor. Güven mimarisi düzeltilmeden online kampanya yapılmamalı. |

### Kurumsal ÇDP hattı
- **Var olan:** /kurumsal (455 kelime), 4 adımlı süreç, gizlilik paragrafı (iyi: "Seans içeriği kuruma aktarılmaz…", `web/data/corporate.ts:68`), 6 eğitim başlığı, ayrı form (şirket adı zorunlu, çalışan sayısı, ilgilenilen hizmet; `CorporateContactForm.tsx`, kayıt `channel: "corporate"` `api/index.ts:1838-1846`).
- **Brief'le çelişen ifadeler (düzeltilmeli):**
  - "mental, **fiziksel** ve profesyonel iyilik hali" (`corporate.ts:19`) — Humentis fiziksel sağlık hizmeti sunmuyor; kapsam dışına taşan vaat.
  - "çalışanlara ve ailelerine **her an** destek sağlar" (`corporate.ts:36`) — "7/24" ile aynı kriz beklentisi; brief §7 yasaklıyor ve kurumun kendi "acil yardım değildir" çizgisiyle çelişiyor.
  - "**Önce / Sonra**" grafik etiketleri (`corporate.ts:130-131`) ve "%50/%55/%57 azalma" — brief'in önce-sonra / sonuç vaadi yasağına giriyor; kaynak gösterilmiş olsa da Humentis'in kendi sonucu gibi okunuyor.
  - "1 birim yatırım… ortalama 5 birim olarak dönebiliyor" (`corporate.ts:166`) + "4×" — kaynaklı ama sonuç vaadi tonu. Öneri: istatistikleri "Sektör araştırmaları ne diyor?" başlığı altında, Humentis'e atfetmeden, "Önce/Sonra" grafiği olmadan, tek cümlede ver.
  - "Ekiplerin **gerçekten kullanacağı akıllı** bir ÇDP" (`corporate.ts:32`) — markanın en iddialı cümlesi; diğer sayfaların ses tonundan sapıyor.
- **Satış hattındaki eksikler:** referans/kurum logosu yok (varsa ve izin alınırsa eklenir; yoksa uydurulmaz), indirilebilir program özeti (PDF) yok, paket yapısı yok, karar vericiye (İK) özel SSS yok (ör. "Kullanım raporunda neler olur?", "Çalışanın adı işverene gider mi?"), kurumsal talepler için takip/CRM durumu yok (admin'de iletişim mesajları içinde).
- **Gelir mantığı (varsayım):** Kurumsal yıllık değer = çalışan sayısı × kullanım oranı × kişi başı seans × seans ücreti (+ eğitim ücreti). Örnek, tamamen varsayım: 100 çalışan × %8 × 5 seans × ₺1.800 = ₺72.000/yıl tek sözleşme; seans dışı eğitim ayrı. Bireysel edinime göre tek temasla daha yüksek değer; ama satış döngüsü uzun (3–6 ay).
- **Kanal:** LinkedIn (kurucu ve kurum sayfası — mevcut değil/doğrulanamadı), İK toplulukları, Ankara'daki OSB/teknokent ağları, "Aile ve iş hayatı" / "Ebeveyn çalışanlar" eğitimleriyle kapı açma (aile danışma merkezi kimliğine uygun, rakiplerden farklı).

---

## Elde tutma ve genişleme

| Unsur | Durum | Kaynak |
|---|---|---|
| Randevu onayı | Ekranda "Randevunuz oluşturuldu"; e-posta/SMS/takvim dosyası yok. | `messages.ts:471`, kodda mail/sms yok |
| Hatırlatma | KVKK metni "hatırlatma" amacını sayıyor (`legalDocuments.ts:39,185`) ama altyapı yok. | [KOD] |
| İletişim izni (ETK/İYS) | Toplanmıyor; site "ayrı onam istenir" diyor. | `institution.ts:83` |
| Bülten / içerik aboneliği | Yok. | [KOD] |
| Duyurular | Boş. | [API] |
| Ölçüm → elde tutma | Ziyaret kaydı (path, locale, referrer) ile randevu kaydı arasında bağ yok; tekrar eden danışan oranı, bölümler arası geçiş görünmez. | `useVisitTracker.ts`, `api/index.ts:129-142` |
| Genişleme yolları | Yetişkin ↔ çift ↔ ebeveyn/çocuk aynı çatı (brief farkı); Sınav-Kariyer; kurumsal eğitim. Sitede bölüm sayfaları birbirine yönlendirmiyor; "Yaşam temaları" (~24 madde) link değil (EVIDENCE). | [CANLI] |

Gelir mantığı (varsayım): Danışan değeri = seans ücreti × ortalama seans sayısı. No-show/geç iptal maliyeti = boş kalan rezerve saat × ücret. Hatırlatma ve net iptal politikası no-show'u azaltır; oran Humentis için **ölçülmedi**. Örnek, varsayım: ayda 200 randevu, no-show %10 → %6'ya düşerse 8 seans × ₺1.800 = ₺14.400/ay korunur.

Not: elde tutma önerileri "danışanı geri çağırma" kampanyası değildir; marka tonu "kapımız açık, acelesi yok". İletişim yalnız izinle, bilgi amaçlı (yeni yazı, etkinlik, kurum duyurusu).

---

## Gelir fırsatları

### Hızlı kazanımlar (1-2 hafta)
| Fırsat | Efor | Beklenen etki |
|---|---|---|
| **Güven vaadini gerçeğe eşitle:** doğrulama kaydı dolu uzmanların profilinde `VerificationDisclosure` göster; 10 boş kayıt tamamlanana dek "her profilde" / "profilde açıkça gösterilir" cümlelerini (`institution.ts:84, 91-93`) "doğrulama süreci tamamlanan profillerde" diye düzelt; sabit "Ağustos 2026" rozetini (`content.ts:285-293`) kaldır ya da gerçek tarihe bağla. | Düşük | Yüksek (marka vaadinin merkezi). Gelir etkisi doğrudan ölçülemez; dönüşüm oranı üzerinden: ek randevu = ziyaret × Δdönüşüm × ücret (varsayım). |
| `/kriz-destegi` rotasını CrisisPage'e bağla (`App.tsx:279-280`) ya da "her ekrandan erişilebilir" vaadini kaldır. | Düşük | Güven/sorumluluk riski kapanır. |
| Ana sayfa SSS'indeki "Prototip… ücretsiz iptal" cevabını gerçek iptal kuralıyla değiştir (`institution.ts:345`). | Düşük | Güven; "canlı hizmet değil" izlenimini kaldırır. |
| Mesaj tutarlılığı: online cümlesi tekleştirilsin; footer "randevu platformu" → "aile danışma merkezi" (`messages.ts:36`); onaylı slogan header/footer'da kullanılsın (`messages.ts:91`). | Düşük | Orta (marka netliği). |
| Randevu sonrası metni gerçeğe uydur: "Randevunuz oluşturuldu" + "Ekibimiz mesai saatleri içinde sizi arayarak teyit edecektir; ücret ve görüşme koşullarını bu aramada iletiriz." | Düşük | Orta; ilk temasın belirsizliğini kapatır. |
| Kurumsal sayfadaki 5 ifadeyi düzelt (fiziksel, her an, Önce/Sonra, 1→5, "akıllı"). | Düşük | Orta (B2B güven + brief uyumu). |
| Mesaj alanına "şikâyet/sağlık bilgisi yazmayın" yardımcı metni; `nationalId` alanını API'den kaldır. | Düşük | Risk azaltma (KVKK). |
| Ruhsat cümlesi (Bakanlık izinli aile danışma merkezi) /hakkimizda ve footer'a metin olarak. | Düşük | Orta (güven). |
| — Paketin önerdiği aciliyet/kıtlık ("son saatler"), yeni danışan yorumları/puan rozeti, "ilk seans ücretsiz" | — | **Marka kuralı gereği uygulanmadı.** |

### Orta vade (1-3 ay)
| Fırsat | Efor | Beklenen etki |
|---|---|---|
| **Ölçüm ve atıf:** GA4/Ads dönüşümü (çerez onayına bağlı) + ziyaret kaydına `utm_*` ve oturum kimliği, randevu/iletişim kaydına "kaynak" alanı (UTM'den otomatik; danışana soru sorulacaksa yalnız "Bizi nereden duydunuz?" — şikâyet değil). | Orta | Yüksek dolaylı: kanal bütçesi kararları ancak bununla verilebilir. |
| "Ücret ve görüşme koşulları" bloğu + iptal/no-show politikası. | Düşük-Orta | Orta; temas → randevu oranı (varsayım formülü: Δoran × talep × ücret). |
| Online/Türkiye geneli sayfası + tutarlı mesaj + şehir kırılımı raporu. | Orta | Yüksek: atıl kapasiteyi Ankara dışına açar. Formül: ek online seans/ay × ortalama ücret (varsayım: 10 × ₺1.800 = ₺18.000/ay). |
| Onay + hatırlatma (e-posta/SMS; içerikte sağlık bilgisi yok) ve ayrı, varsayılan kapalı iletişim izni (İYS). | Orta | No-show azaltma (yukarıdaki formül). |
| 16 makalenin ilk 6'sını uzman imzasıyla doldur (brief'e uygun, soru açılışlı); uzman profiline ve ilgili bölüme bağla. Yazarı "Humentis Uzman Ekibi" yerine gerçek uzman. | Orta | Otorite + organik (prerender şartıyla). |
| Kurumsal: İK SSS'i, paket yapısı, indirilebilir program özeti, eğitim başlıklarına kısa açıklama. | Orta | B2B lead kalitesi. |

### Stratejik (3-6 ay)
| Fırsat | Efor | Beklenen etki |
|---|---|---|
| Hizmet/konu sayfaları + uzman profillerinin indekslenebilir hale gelmesi (prerender; teknik ajan kapsamı) — "scroll hikâyeler" ve reels havuzuyla beslenmesi. | Yüksek | Ücretli trafiğe bağımlılığı azaltır. |
| Kurumsal ÇDP satış hattı: hedef kurum listesi, LinkedIn kurucu sesi, 2-3 pilot kurum, kullanım özeti şablonu (kişiye özel olmayan). | Yüksek | Tek sözleşme = çok seans (varsayım formülü yukarıda). |
| Podcast'i doğrulanabilir gösteriye bağla (`spotifyShowId`), bölümleri makale/landing ile eşle; yoksa bandı kaldır. | Orta | Otorite. |
| Fiziksel farklılaştırıcıları görünür kıl: gerçek mekan fotoğrafları (çocuk odası boş, test odası kapalı kutularla — brief §5/§7), "aynı çatı altında tüm aile" anlatısı. | Orta | Rakiplerden ayrışma (Ankara'nın en büyüğü iddiası ancak doğrulanabilir veriyle kullanılır). |

### En büyük tek kaldıraç
**Atıl kapasiteyi doğru vaatle Türkiye geneline açmak** — ama sırası önemli: (1) güven vaadini gerçek yap (profil doğrulaması, kriz sayfası, prototip metni), (2) ölç (UTM + kaynak + GA4), (3) online sayfası ve tutarlı mesajla Ankara dışına aç. Kapasite zaten var (~860 açık saat/uzman); büyümenin kısıtı talep ve güven, takvim değil. Güven düzeltilmeden online'a trafik göndermek, merkezi göremeyen kişiye "doğrulanmış uzman" deyip doğrulamayı göstermemek demek.

---

## Marka sesi analizi (market-brand)

### Ses özeti
Humentis sitede sakin, resmi ("siz"), yargısız ve ölçülü bir **Rehber + Otorite** sesiyle konuşuyor; brief'in "sakin altyapı" konumlandırmasına büyük ölçüde uyuyor. Sapmalar iki uçta: uzman profillerinde tanı-ağırlıklı klinik dil, kurumsal sayfada iddialı satış dili. Brief'in imza tekniği "soru sorarak açmak" yalnız makale başlıklarında yaşıyor.

### Ses boyutları
```
Resmi                                     Samimi
|-------[3]-------------------------------|
Ciddi                                     Oyuncu
|----[2]----------------------------------|
Teknik                                    Sade
|------------------[6]--------------------|  (profiller: 3)
Çekingen                                  Cüretkâr
|----------[3]----------------------------|  (kurumsal: 6)
```
- **Resmi ↔ Samimi: 3/10.** "Psikolojik destek için doğru uzmanı bulun." / "Uzmanlarımızı, bölümlerimizi ve görüşme biçimlerini tek yerde inceleyin." / "Randevudan önce bilinmesi gerekenler." — "siz", tam cümleler, ünlem yok.
- **Ciddi ↔ Oyuncu: 2/10.** Mizah, emoji, ünlem yok; "Humentis bir acil yardım veya kriz müdahale hizmeti değildir."
- **Teknik ↔ Sade: 6/10 (kurum sayfaları), 3/10 (profiller).** Kurum: "Tıbbi tanı koymaz; ilaç tedavisi uygulamaz." açıklayıcı. Profil: "Distimik Bozukluk (Kronik Depresyon)", "Somatizasyon Bozukluğu", "Duygulanım Bozukluğu" açıklamasız liste.
- **Çekingen ↔ Cüretkâr: 3/10 (genel), 6/10 (kurumsal).** "Doğrulama… tıbbi lisans veya devlet onayı anlamına gelmez." ↔ "Ekiplerin gerçekten kullanacağı akıllı bir ÇDP", "İyi şirket, dengeli çalışanla mümkün."

### Kişilik
- Birincil: **Rehber** (unvan farkları, 3 adım, kapsam tablosu). İkincil: **Otorite** (kanıta dayalı, doğrulama). Uyum: Orta — Otorite iddiası kanıtlanmadığı için zayıflıyor; Rehber içeriği (makaleler) boş.

### Bağlama göre ton
| Bağlam | Ton | Örnek |
|---|---|---|
| Ana sayfa | Sakin, işlevsel | "Psikolojik destek için doğru uzmanı bulun." |
| Hakkımızda | Kurumsal, açıklayıcı | "Pazaryeri mantığıyla değil; kurumsal süreklilik…" |
| Uzman profili | Klinik, CV dili | "Kaygı Bozuklukları ve Çift Terapisi alanlarında derin bir uzmanlığa sahip…" |
| Kurumsal | İkna edici, iddialı | "Psikolojik destek yatırımlarınız ile çalışan üretkenliğini artırın" |
| Makale başlıkları | Soru açılışlı, sıcak | "Neden hep aynı şeyleri yaşıyorum?" |
| CTA | Nötr eylem | "Uzmanları incele", "Kısa eşleştirme", "Randevu al" |
| Başarı mesajı | Kısa, kesin | "Randevunuz oluşturuldu" |
| Sosyal (WhatsApp hazır metin) | Resmi | "Merhaba, Özel Humentis Aile Danışma Merkezi hakkında bilgi almak istiyorum." |

### Sözcük dağarcığı
- **Kullandıkları:** uzman, kurum çatısı, doğrulanmış, şeffaf, süreç, görüşme biçimi, bölüm, kanıta dayalı, destek, talep, gizlilik, kapsam.
- **Kaçındıkları (iyi):** "en iyi", "garanti", "hemen", "son fırsat".
- **Sızan yasaklılar:** "tedavi" (profil), "ücretsiz" + "prototip" (SSS), "her an destek", "Önce/Sonra" (kurumsal), "platform" (footer).
- **İmza:** "aynı kurum çatısı altında" (3+ yerde), "doğrulanmış uzman bilgisi". Slogan kullanılmıyor.

### Ses şeması
| Sesimiz BUDUR | Sesimiz BU DEĞİLDİR |
|---|---|
| Sakin | Kayıtsız |
| Açık sınırlı ("kapsam dışı: …") | Her şeyi vaat eden |
| Bilimsel ama sade | Tanı listesi |
| Soru soran, davet eden | Emir veren, acele ettiren |
| Kanıt gösteren | Kanıtsız iddia eden |

### Yap / Yapma
**Yap:** Her güven cümlesini bir ekrana bağla (doğrulama → profil rozeti). Terimi tek cümlede aç. Soru ile aç. Kapsam ve kapsam dışını birlikte söyle. Tek gerçek cümleyi her dosyada aynı kullan (online/yüz yüze).
**Yapma:** Tanı adlarını pazarlama dili olarak sıralama. "Platform" deme. Önce/sonra, yüzde azalma, "her an", "ücretsiz", "tedavi" kullanma. Danışan sözünü sonuç kanıtı olarak gösterme.

### Mesaj hiyerarşisi
- **Slogan (onaylı):** İnsan odaklı • zihinsel esenlik — sitede yok; header lockup altında ya da footer'da kullanılmalı.
- **Değer önermeleri:** (1) Tüm aile için tek kurum çatısı: yetişkin, çocuk-ergen, çift-aile, sınav-kariyer. (2) Bilgisi kurumca kontrol edilen uzmanlar — kapsamı profilde. (3) Gerçek müsaitlik: saati görerek talep gönderin. (4) Çankaya'da yüz yüze, Türkiye'nin her yerinden online.
- **Asansör konuşması (~60 kelime):** "Özel Humentis, Ankara Çankaya'da Aile ve Sosyal Hizmetler Bakanlığı ruhsatlı özel bir aile danışma merkezi. Yetişkin, çocuk-ergen, çift-aile ve sınav-kariyer alanlarında çalışan uzmanlarımız aynı çatı altında. Her uzmanın eğitimini ve görüşme biçimini profilinde görüp uygun saati seçebilirsiniz; yüz yüze Çankaya'da, online her yerden. Acil kriz hizmeti değiliz; planlı, sakin bir destek sunuyoruz."
- **Kurum metni (boilerplate) durumu:** `institutionGeoSummary` (`institution.ts:223-224`) iyi bir çekirdek; online cümlesi tekleştirilip ruhsat bilgisi eklenmeli.
- **Tam marka hikâyesi:** Kısmi — kurucu ve "neden aynı çatı" hikâyesi sitede anlatılmıyor.

### Ses örnekleri (brief'e uygun)
1. **Ana sayfa başlığı:** "Kime danışacağınızı birlikte netleştirelim." / alt satır: "Çankaya'da yüz yüze, Türkiye'nin her yerinden online."
2. **Hizmet paragrafı (Çift-Aile):** "Aynı konuyu her seferinde aynı yerde tıkanarak mı konuşuyorsunuz? Çift ve aile danışmanlığında amaç kimin haklı olduğunu bulmak değil, konuşmanın başka bir yolunu birlikte aramaktır. İsterseniz ilk görüşmeye tek başınıza da gelebilirsiniz."
3. **Makale girişi:** "Peki siz en çok kime hayır demekte zorlanıyorsunuz? Sınır koymak çoğu zaman bir cümle değil, bir alışkanlık değişikliğidir. Bu yazıda o alışkanlığın nereden geldiğine sakin bir bakış atıyoruz."
4. **Sosyal medya:** "Destek almak için 'yeterince büyük' bir sebep gerekmiyor. Uzmanlarımızın eğitimini ve çalışma alanlarını profillerinde inceleyebilirsiniz. Kapımız açık, acelesi yok."
5. **E-posta konu satırı (izinli bülten):** "Bu ay: 'Neden hep aynı şeyleri yaşıyorum?' sorusuna uzmanımızın yanıtı"
6. **CTA:** "Uygun saatleri görün" / "Uzmanı tanıyın"
7. **Hata mesajı:** "Seçtiğiniz saat az önce doldu. Aynı gün için başka bir saat seçebilir ya da bizi arayabilirsiniz: 0552 898 95 45."
8. **Teşekkür / onay:** "Talebiniz bize ulaştı. Ekibimiz mesai saatleri içinde sizi arayarak saati teyit edecek ve görüşme koşullarını paylaşacak. Bu arada bir sorunuz olursa WhatsApp'tan yazabilirsiniz."

### Rakip ses karşılaştırması (30.09 ana sayfalar)
| Boyut | Humentis | CAN | Vivere | Yaşam Aile | Optimum |
|---|---|---|---|---|---|
| Resmi↔Samimi | 3 | 6 | 3 | 5 | 4 |
| Ciddi↔Oyuncu | 2 | 3 | 2 | 3 | 3 |
| Teknik↔Sade | 6 | 6 | 5 | 6 | 5 |
| Çekingen↔Cüretkâr | 3 | 7 | 4 | 6 | 8 |
| Arketip | Rehber/Otorite | Dost ("Sizin İçin Buradayız") | Otorite (SEO) | Dost/köklü ("2008'den Beri Yanınızdayız") | Otorite/satış ("Ankara Psikolog (2026)") |
| Brief §7'ye göre risk | iç çelişkiler | "ilk seans ücretsiz", formda "Başvurma Nedeniz?" | görülmedi | "7/24 Destek" | sonuç iddialı yorumlar ("4 günde") |

**Boş alan:** Ankara'da "sakin, sınırlarını açık söyleyen, bilgisini kanıtlayan" ses kimsede yok; rakiplerin çoğu ya sıcak-dost ya da SEO-satış. Humentis bu alanı ancak vaatlerini ekranda kanıtlarsa sahiplenir. CAN'in "15 Profesyonel Uzman, 20.018+ Seans" gibi sayısal kanıtına karşı Humentis'in karşılığı danışan sayısı değil, **doğrulanmış kadro ve mekân** olmalı.

### Tutarlılık denetimi
| Kanal | Tutarlılık | Not |
|---|---|---|
| Ana sayfa | Çoğunlukla | Sakin; ama "Danışan yorumları" bölümü brief §7 ile çelişiyor (karar bekliyor). |
| Hakkımızda | Çoğunlukla | En güçlü sayfa; vaatler profillerde karşılıksız. |
| Uzman profilleri | Tutarsız | Tanı listesi, "tedavi", doğrulama yok. |
| Kurumsal | Tutarsız | Satış dili, önce/sonra, "her an". |
| Makaleler | Tutarlı (başlık) / boş (gövde) | Ses doğru, içerik yok. |
| Footer | Tutarsız | "randevu platformu". |
| Sosyal/e-posta | Doğrulanamadı | Instagram içeriği bu pakette yok; e-posta akışı yok. |

**Genel tutarlılık: 6/10.**

---

## Öncelik özeti (bu alan)
1. Doğrulama vaadi ↔ profil (Hızlı, Yüksek).
2. Kriz sayfası rotası ve prototip/ücretsiz SSS (Hızlı).
3. Mesaj tekleştirme (online, platform, slogan) ve randevu sonrası metin.
4. Kurumsal sayfa ifadeleri.
5. Ölçüm + kaynak alanı (orta vade önkoşulu).
6. Ücret ve görüşme koşulları bloğu.
7. Online/Türkiye geneli sayfası.
8. Onay/hatırlatma + iletişim izni.

Ekip kararları (bulgu olarak not, öncelikte değil): açılış animasyonu kalacak — **karar verildi**; takvimin ay sonu davranışı şimdilik değişmeyecek — **karar verildi**. Danışan yorumları bölümü — **karar bekliyor** (kurucular + hukuk, site planı P2-14).

Doğrulanamayanlar: Instagram/podcast içerik ve takipçi verisi, GBP performansı, gerçek seans ücretleri ve telefonda söylenen fiyat, no-show oranı, yurt dışı online hizmetin hukuki durumu, kurumsal müşteri/referans varlığı, Ankara'nın en büyük merkezi olduğu iddiası.
