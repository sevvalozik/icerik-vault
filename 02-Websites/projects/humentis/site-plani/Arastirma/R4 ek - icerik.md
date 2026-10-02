---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]"]
---

> [!note] R4 eki · İçerik ve mesaj — ai-marketing-claude `market-content` alt ajanının tam çıktısı. Ana rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

## İçerik ve Mesaj Analizi — Humentis (humentis.com.tr)

> Ajan: `market-content` (5 paralel ajandan biri) + `market-copy` yöntemi (önce/sonra). Tarih: 02.10.2026, kanıtlar 30.09.2026 ölçümleri.
> Marka kuralları: `00-Musteriler/humentis/marka-brief.md` — "KESİNLİKLE OLMAYACAK", §4 Ses Tonu, §7 Yasal/Hassas Kurallar paketin önerilerinden üstün tutuldu.
> Kaynak etiketleri: **[CANLI]** `audit/humentis-audit-sayfalar-humentis.json` → `rendered[url]` (JS sonrası DOM). **[KOD]** `/home/claude/build/base/humentis/apps/web/src/...` (yollar bu köke göre). **[API]** EVIDENCE.md'deki canlı API ölçümleri. **[RAKİP]** `audit/an-*.json` + EVIDENCE "Rakipler".
> İncelenen sayfalar: `/`, `/hakkimizda`, `/bolumlerimiz`, `/uzmanlar`, `/uzmanlar/elif-silav`, `/iletisim` (rendered) + `/icerik` makaleleri (API ve `apps/api/src/seed.ts`). Fiyat sayfası yok. Gerçek randevu akışı `AppointmentRequestModal` penceresi; linksiz `/randevu/<slug>` (BookingPage) değerlendirme dışı.

### Genel puan: 5,2/10 → **Content & Messaging: 52/100**

Çapraz kontrol (`market-copy` rubriği): Netlik 6 · İkna 5 · Somutluk 4 · Duygu 5 · Eylem 6 = **26/50 → 52/100**. İki yöntem aynı sonuca çıkıyor.

### Boyut puanları
| Boyut | Puan | Ana bulgu | Kaynak |
|---|---|---|---|
| Başlık netliği | 6/10 | H1 "Psikolojik destek için doğru uzmanı bulun." sakin ve anlaşılır, ama bir pazaryeri/dizin başlığı gibi okunuyor; yer (Çankaya/Ankara), 4 bölüm ve "aile danışma merkezi" farkı H1'de yok (kurum adı yalnız üstteki küçük etikette). Hero'nun üstünde Podcast/Spotify bandı ilk okunan metin oluyor. | [CANLI] `/`; [KOD] `i18n/messages.ts:97` |
| Değer önerisi | 5/10 | Asıl farklar (tek kurum, 4 bölüm, 18 uzman, kurum doğrulaması, Bakanlık ruhsatı) dağınık ve iç jargonla anlatılıyor ("Sabit kurum modeli"). Konumlandırma kendi içinde çelişiyor: Hakkımızda "Pazaryeri mantığıyla değil" derken altbilgi "…randevu platformu" diyor. Ana güven iddiası ("her uzmanın kimlik bilgisi kontrol edilir") veriyle tutmuyor. | [KOD] `messages.ts:36,115`; `data/institution.ts:64,90`; [API] verification |
| Metin ikna gücü | 5/10 | Ton markaya çok uygun (acele yok, kapsam dışı açık). Ama metin ziyaretçinin durumunu değil sistemi anlatıyor ("aynı sistem içinde görünür"). Sosyal kanıt olarak §7'nin önermediği "Danışan yorumları" kullanılıyor; markaya uygun alternatif (`InstitutionProofStrip`) kodda hazır ama kullanılmıyor. | [CANLI] `/`; [KOD] `features/home/HomePage.tsx`, `features/home/components/InstitutionProofStrip.tsx` |
| İçerik derinliği | 4/10 | 16/16 makale 10 kelimelik yer tutucu ve "published". `/bolumlerimiz` 169 kelime, bölüm açıklaması yok; kodda yazılmış 4 çalışma alanı metni (`workAreaDetails`) hiçbir yerde gösterilmiyor. Buna karşılık Hakkımızda (unvan farkları, kapsam) ve 17 profil (1.003–5.803 karakter biyografi) güçlü. | [API]; [KOD] `apps/api/src/seed.ts:292-307`, `data/institution.ts:234-294`; [CANLI] `/bolumlerimiz` |
| CTA etkinliği | 6/10 | CTA'lar açık ve baskısız ("Uzmanları incele", "Kısa eşleştirme", "Randevu al"). Ama dil çelişkili: ana sayfa "randevu talebi… ekibimiz sizinle iletişime geçer", pencere düğmesi "Randevuyu oluştur" ve sonuç "Randevunuz oluşturuldu". Hero'da birincil eylem randevu değil, inceleme. | [KOD] `messages.ts:127,454,471` |
| *(ek) Ses tonu uyumu* | *7/10* | Kurum sayfaları brief §4'e çok yakın; profiller ve etiketler değil ("Tedavi Alanı", "Borderline (Sınırda) Kişilik Bozukluğu", "tedavi süreci", "kanser hastalarına", "Online terapi gerçekleştiriyor"). Genel puana katılmadı, bilgi amaçlı. | [CANLI] `/uzmanlar/elif-silav`; [KOD] `messages.ts:355` |

**Ses profili (1–5):** Resmiyet 4 · Duygu 2 · Karmaşıklık 3 · Mizah 1 · Otorite 4. Brief'in istediği "sakin, yargısız, soru sorarak açan" tona göre duygu 1 puan düşük: kurum sayfaları doğru ama soğuk, ziyaretçiye hiç soru sorulmuyor (eşleştirme sayfası hariç). Öneriler bu profili koruyarak duyguyu 3'e çıkarmayı hedefliyor.

**Değer önerisi kanvası**
| Öğe | Sitede | Durum |
|---|---|---|
| Hedef kişi | "Psikolojik destek" arayan herkes; kitle sekmeleri (Tümü/Yetişkin/Çocuk-Ergen-Aile) | Kısmen — brief'teki "çok da büyük bir şeyim yok" diyen yetişkine seslenen tek cümle yok |
| Sorun | Yok (bilinçli olarak sorun büyütülmüyor — doğru) | Sorunu adlandıran sakin bir cümle de yok; "bu benim" anı makale başlıklarında var ama gövdeler boş |
| Çözüm | Uzmanları inceleyip talep gönderme | Var |
| Ayırt edici mekanizma | Tek kurum, 4 bölüm, kurum doğrulaması, unvan şeffaflığı | Var ama jargonla ve dağınık; ruhsat yalnız logo `alt` metninde |
| Ana fayda | Belirtilmemiş | **Eksik** |
| Kanıt | 18 profil, eğitim/sertifika, unvan farkları; + §7 dışı danışan yorumları | Kısmen; doğrulama verisi 10/18 profilde boş |

---

### Güçlü yanlar
1. **Ton markayla örtüşüyor ve kapsam dürüst.** Aciliyet, korku, "hemen" yok. "Humentis bir acil yardım veya kriz müdahale hizmeti değildir." ([CANLI] `/` SSS kenar notu) ve "Kapsam dışı: Acil kriz müdahalesi, ilaç tedavisi, adli değerlendirme, tıbbi tanı koyma…" ([KOD] `data/institution.ts:118-121`). Brief §7 "kriz hizmeti olmadığı açıkça yazılır" kuralı karşılanmış.
2. **"Unvan farklarını anlayın" rakiplerde olmayan bir güven içeriği.** Uzman / Klinik Psikolog / PDR farkı, kapsam ve "Tıbbi tanı koymaz; ilaç tedavisi uygulamaz" notları; doğrulamanın sınırı da dürüstçe yazılmış: "Tıbbi lisans veya devlet onayı anlamına gelmez." ([KOD] `data/institution.ts:97-116, 357`). Brief'teki "doğrulanmış uzmanlık + açık sınırlar" vaadinin en somut karşılığı.
3. **Baskısız seçim ve itiraz karşılama.** "Eşleştirme zorunlu değildir; doğrudan uzman seçerek de ilerleyebilirsiniz." ([CANLI] `/`). Eşleştirme soruları brief'in "soru sorarak açan" tonunda ("Şu sıralar sizi en çok zorlayan konu hangisi?", "Bu seçim tanı koymaz" — [KOD] `messages.ts` `matching`).
4. **Makale başlıkları hedef kitlenin dilinde.** "Bir türlü dinlenmiş hissetmiyorum, sürekli yorgunum.", "Neden hep aynı şeyleri yaşıyorum?", "Zorlandığında kendine yük mü, destek mi oluyorsun?" ([KOD] `apps/api/src/seed.ts:298-302`). Brief §3'teki "gece reels izlerken 'bu benim'" anına birebir uyuyor — sadece gövdeler yok.
5. **Profiller derin ve somut.** Elif Silav profilinde üniversite, 4 sertifika (kurum adıyla), staj ve çalışma geçmişi, yaklaşım (BDT) var ([CANLI] `/uzmanlar/elif-silav`); 17 profilde biyografi 1.003–5.803 karakter ([API]). §7'ye uygun sosyal kanıtın asıl kaynağı burası.

---

### Kritik düzeltmeler (yüksek etki, öncelik sırasıyla)
| # | Sorun | Kanıt | Öneri | Öncelik |
|---|---|---|---|---|
| 1 | **16 makalenin tamamı yer tutucu ama "yayında".** Gövde: "Bu makale Humentis uzmanları tarafından hazırlanmaktadır. Tam metin yakında yayınlanacaktır." Yazar "Humentis Uzman Ekibi", `authorSpecialistId: null`. Başlıklarda yazım hataları: "Başkalarının anlarken" (→ Başkalarını), slug `mesimsel-depresyon`, `zihnin-yanlis-alarimi`; DEHB yazısı `kaygi` konusuna bağlı. | [KOD] `apps/api/src/seed.ts:292-307`, `data/articlesCatalog.ts:6`; [API] | Yazılana kadar `status: "draft"`. Önce 4 yazı (her bölümden biri), uzman imzalı, 600–900 kelime; her yazının sonunda ilgili bölüm ve yazarın profiline bağlantı. Başlıklar korunur (zaten iyi). CAN Psikoloji'de 197 yazı var [RAKİP]; Humentis'in farkı hacim değil imzalı, dürüst içerik olmalı. | Yüksek |
| 2 | **En vurgulu güven iddiası veriyle çelişiyor.** "Kadrodaki her uzmanın kimlik bilgisi kurum tarafından kontrol edilir." / "Kimlik, diploma ve uzmanlık beyanları profilde açıkça gösterilir." Gerçekte 18 uzmanın 10'unda `verification` boş; kurucu profilinde "kontrol" kelimesi 0 kez geçiyor. | [KOD] `data/institution.ts:90,93`; [API]; [CANLI] `/uzmanlar/elif-silav` | Ya 18 profilin doğrulama verisi doldurulup profilde gösterilir, ya metin gerçeğe çekilir (Önce/Sonra 4). Brief'in konumlandırması ("doğrulanmış uzmanlık") bu cümleye dayanıyor; tutmazsa marka vaadi boşa düşer. | Yüksek |
| 3 | **Ana sayfanın 2. bölümü "Danışan yorumları" — §7 ile çelişiyor.** 7 elle seçilmiş 5 yıldızlı yorum, kaynağa bağlantı yok (kodda tanımlı "Google'da incele" CTA'sı kullanılmıyor). İkisi sonuç ima ediyor: "oğlumun kıskançlığı ciddi azaldı", "tükenme noktasında olduğum bu günlerde bana büyük bir ışık oldu". | [CANLI] `/`; [KOD] `data/googleReviews.ts:27,37`, `features/home/components/HomeGoogleReviews.tsx`, `messages.ts:113-114` | Brief §7: "Danışan yorumu, önce-sonra hikâyesi, sonuç vaadi önerilmez." Paketin "testimonial/yorum ekle" önerisi **marka kuralı gereği uygulanmadı**. Bant, kodda hazır duran `InstitutionProofStrip` ile değiştirilsin (Önce/Sonra 3). Bant müşteri kararıyla kalacaksa en azından sonuç ima eden 2 yorum çıkarılmalı ve "Google'da incele" bağlantısı eklenmeli — bu karar müşteriye (Elif Silav) bırakılmalı. | Yüksek |
| 4 | **Randevu dili çelişiyor; SSS'de canlıda "Prototip" ve "ücretsiz" var.** Ana sayfa: "Randevu talebi gönderin… ekibimiz sizinle iletişime geçer"; pencere: "Randevuyu oluştur" → "Randevunuz oluşturuldu… randevunuz kaydedildi". SSS: "Prototip aşamasında 24 saat öncesine kadar ücretsiz iptal gösterilir." | [KOD] `messages.ts:127,454,471-472`; `data/institution.ts:345` | Tek model seçilmeli (talep mi kesin randevu mu — operasyon teyidi gerekli). "Prototip" kaldırılmalı; "ücretsiz" brief §7'de yasak (Önce/Sonra 5–6). | Yüksek |
| 5 | **Kriz yönlendirmesi vaadi tutmuyor.** "Acil durumlar için giriş gerektirmeyen kriz destek sayfası her ekrandan erişilebilir." ve SSS "…kriz destek sayfamızı ziyaret edin." Oysa `/kriz-destegi` ana sayfayı açıyor, `faqCrisis` ("Acil destek bilgileri") anahtarı hiçbir bileşende kullanılmıyor, altbilgide kriz bağlantısı yok. | [KOD] `data/institution.ts:94,330`; `app/App.tsx:279-280`; `messages.ts:132` (tsx'te kullanım yok); [CANLI] `/` altbilgi | `features/trust/CrisisPage.tsx` rotaya bağlanıp SSS ve altbilgiye "Acil destek bilgileri" bağlantısı eklenmeli; yapılmayacaksa iki cümle düzeltilmeli. Brief §7'nin "kriz → yönlendirme" kuralı gereği içerik önceliği yüksek. | Yüksek |
| 6 | **Değer önerisi hero'da yok, konumlandırma kendi içinde çelişiyor.** H1 genel; farklar "Sabit kurum modeli / Aynı kurum çatısında çalışan uzmanlarımız." başlığıyla jargonla anlatılıyor. Hakkımızda "Pazaryeri mantığıyla değil" diyor, her sayfanın altbilgisi "…randevu platformu". Bakanlık ruhsatı görünür metin olarak hiçbir yerde yok. | [CANLI] `/`, `/bolumlerimiz` altbilgi; [KOD] `messages.ts:36,97,115-118`; `data/institution.ts:64` | Hero (Önce/Sonra 1), kurum bloğu (Önce/Sonra 2) ve altbilgi tanımı (Önce/Sonra 7) aynı cümleye hizalanmalı: "Çankaya'da, 4 bölümlü, Bakanlık ruhsatlı aile danışma merkezi". Ruhsat ifadesi müşteriden teyitle metne eklenmeli. Rakip Vivere H1'de yer + hizmeti söylüyor: "Ankara Psikolog ve Aile Danışmanlığı" [RAKİP `an-vivere.json`]. | Orta-Yüksek |
| 7 | **Bölümler sayfası içeriksiz; hazır içerik kullanılmıyor.** 4 başlık + "Bu bölümdeki uzmanlar"; ~24 "Yaşam teması" bağlantısız düz liste. `departmentDetails` içinde açıklama alanı yok; `workAreaDetails` (summary/signs/approach, 4 kayıt) hiçbir bileşende kullanılmıyor. | [CANLI] `/bolumlerimiz` (169 kelime); [KOD] `data/institution.ts:234-294` | Her bölüme 2–3 cümle "kimler için / ilk görüşmede ne olur / biçim" (Önce/Sonra 8). Temalar filtrelenmiş uzman listesine bağlansın. `workAreaDetails` yayınlanmadan önce §4'e göre elden geçirilsin ("Kaygı bozuklukları… psikoterapi", "signs" listesi tanı dili taşıyor). | Orta |
| 8 | **Profil dili §4/§7'ye aykırı ve tutarsız.** Elif Silav profilinde ~68 etiket, çoğu tanı dili ("Borderline (Sınırda) Kişilik Bozukluğu", "Majör Depresif Bozukluk", "Psikolojik Bozukluk"), tekrarlar ("Panik Bozukluğu"/"Panik Bozukluklar", 3 ayrı Dikkat Eksikliği varyantı), yetişkin bölümünde çocuk etiketleri ("Okul Başarısızlığı"). Unvan 3 biçimde: "Kurucu Psikolog & Aile Danışmanı" / "Kurucu, Psikolog / Aile Danışmanı" / biyografide "Uzman Psikolog". Biyografide "tedavi süreci", "kanser hastalarına"; filtre etiketi "Tedavi Alanı". | [CANLI] `/uzmanlar/elif-silav`, `/`; [KOD] `messages.ts:355` | Etiketleri 6–8 gündelik temaya indirin (Önce/Sonra 9), unvanı tek biçime sabitleyin (Hakkımızda unvan farkını anlattığı için kritik), "Tedavi Alanı" → "Çalışma alanı", "hasta" → "tanı almış kişiler". Biyografiler uzmanın kendi metni; değişiklik uzman onayıyla. | Orta |
| 9 | **Online görüşme için 4 farklı cümle.** "Online görüşme tüm kadroda" (ana sayfa), "Online görüşme tüm kadroda aktiftir" (şube notu), "uzman bazında değişir" (kurum hikâyesi), "uygun uzmanlarda sunulur" (GEO özeti/JSON-LD), "Her uzman iki seçeneği birden sunmayabilir" (SSS). | [KOD] `messages.ts:118`; `data/institution.ts:75,204,224`; [CANLI] FAQPage JSON-LD | Uzman verisine bakılıp tek doğru cümle seçilmeli ve her yerde aynı yazılmalı. Hangisinin doğru olduğu **doğrulanamadı**. | Orta |
| 10 | **Ücret ve görüşme süresi hiç yok; randevu formundaki serbest mesaj alanı şikâyet toplamaya açık.** Herkese açık sayfalarda ₺ yok (API ₺1.450–₺2.100). Pencerede "Mesajınız (isteğe bağlı)" alanı yönlendirmesiz. | [API][CANLI]; [KOD] `messages.ts:453` | Kararsız kitle için en büyük bilinmeyen ücret; brief fiyat yazmayı yasaklamıyor, rakiplerin hiçbiri yazmıyor [RAKİP] → fark yaratma fırsatı (güncel fiyat müşteriden teyit; telefonda ₺3.000+ söylendiği bilgisi **doğrulanamadı**). Mesaj alanına §7 (KVKK özel nitelikli veri) gereği yönlendirme metni eklenmeli (Önce/Sonra 10). | Orta |

---

### Önce/Sonra metin önerileri

Tümü brief §4 ve §7'ye göre yazıldı: aciliyet, "hemen", "en iyi", "ücretsiz", "garanti", "tedavi", "hasta", sonuç vaadi, danışan yorumu yok. Paketin PAS ("agitate"), 4U "urgent" ve "Claim My Spot" türü CTA önerileri **marka kuralı gereği uygulanmadı**. Brief'teki "Ankara'nın en büyük aile danışma merkezi" iddiası üstünlük bildirdiği ve sitede doğrulanamadığı için **kullanılmadı**.

#### 1: Ana sayfa — hero
**Önce:** "Özel Humentis Aile Danışma Merkezi" (etiket) / "Psikolojik destek için doğru uzmanı bulun." / "Uzmanlarımızı, bölümlerimizi ve görüşme biçimlerini tek yerde inceleyin." / CTA "Uzmanları incele" · "Kısa eşleştirme" ([CANLI] `/`; [KOD] `messages.ts:97-98`)
**Sonra:**
- Etiket: "Özel Humentis Aile Danışma Merkezi · Çankaya, Ankara"
- H1: "Kendiniz, çocuğunuz ya da ilişkiniz için sakin bir başlangıç."
- Lede: "Yetişkin, çocuk-ergen, çift-aile ve sınav-kariyer danışmanlığı aynı kurumda, 18 uzmanla. Uzmanların eğitimini ve görüşme biçimini inceleyin; hazır olduğunuzda talebinizi iletin."
- CTA: birincil "Uzmanları incele", ikincil "Nereden başlayacağımı bilmiyorum" (→ /eslestirme)

**Neden:** 5 saniye testi: yer, kurum türü, kapsam ve ölçek artık başlık bölgesinde. "Hazır olduğunuzda" brief'in "kapımız açık, acelesi yok" tonunu taşıyor; ikincil CTA kararsız ziyaretçinin kendi cümlesi. "18 uzman" API sayısı — kadro değişirse güncellenmeli (alternatif: sayı yerine "tek ekip").

#### 2: Ana sayfa — kurum bloğu
**Önce:** "Sabit kurum modeli" / "Aynı kurum çatısında çalışan uzmanlarımız." / "Uzman profili, bölüm ve görüşme biçimi aynı sistem içinde görünür. Online görüşme tüm kadroda; yüz yüze görüşme Ankara şubemizde gerçekleştirilir." ([KOD] `messages.ts:115-118`)
**Sonra:** "Neden tek kurum?" / "Aileniz için ayrı ayrı kapı çalmanız gerekmez." / "Kendiniz, çocuğunuz ya da ilişkiniz için başladığınız süreçte aynı kurumdaki farklı bölümlerin uzmanlarına ulaşabilirsiniz. Merkezimiz Çankaya'da; görüşmeler yüz yüze ya da online."
**Neden:** "Sabit kurum modeli" ve "aynı sistem" iç jargon; ziyaretçiye fayda olarak çevrildi. Online cümlesi Sorun 9 çözülene kadar genel tutuldu. **Teyit:** bölümler arası ortak planlama yapılıyorsa ("gerektiğinde birlikte planlanır") eklenebilir; Bakanlık ruhsatı cümlesi müşteri teyidiyle eklenmeli.

#### 3: Ana sayfa — "Danışan yorumları" bandının yerine (sosyal kanıt, §7 içinde)
**Önce:** "Google · Danışan yorumları" + "Çocuklarla çok güzel ilişki kuruyor, oğlumun kıskançlığı ciddi azaldı." ([CANLI] `/`)
**Sonra:** "Başvurmadan önce bilmek isteyebilecekleriniz" — kodda hazır `InstitutionProofStrip` yapısıyla 3 kart:
1. "Kurum tarafından kontrol — Uzmanlarımızın kimlik ve diploma bilgileri kurumca incelenir; kapsamı profilde yazar."
2. "Randevu talebi — Talebinizi iletin; ekibimiz sizi arayarak görüşmeyi netleştirir."
3. "Online ve yüz yüze — Her uzmanın sunduğu görüşme biçimi profilinde görünür."

**Neden:** §7'ye uygun sosyal kanıt danışanın sözü değil, kurumun doğrulanabilir süreçleri, uzman eğitimleri ve ruhsattır. Metinler `InstitutionProofStrip.tsx`'teki mevcut içerikten uyarlandı; 1. kart Sorun 2 çözülünce doğru olur. Paketin yorum/yıldız/puan önerileri **marka kuralı gereği uygulanmadı**.

#### 4: Hakkımızda — güven kanıtları
**Önce:** "Kadrodaki her uzmanın kimlik bilgisi kurum tarafından kontrol edilir." / "Kimlik, diploma ve uzmanlık beyanları profilde açıkça gösterilir." ([KOD] `data/institution.ts:90,93`)
**Sonra (veri tamamlanana kadar):** "Uzmanlarımızın kimlik ve diploma bilgilerini kurum olarak inceliyoruz. İnceleme tamamlanan profillerde 'Humentis tarafından kontrol edildi' notu ve kontrol tarihi yer alır."
**Neden:** İddia ile veri arasındaki boşluk kapanıyor; 18/18 tamamlanınca eski güçlü cümleye dönülebilir.

#### 5: Randevu penceresi — düğme, başarı mesajı, 3. adım (talep modeli seçilirse)
**Önce:** "Randevuyu oluştur" → "Randevunuz oluşturuldu" / "{name} ile {date} saat {time} randevunuz kaydedildi." ↔ "Seçtiğiniz uzman için talebinizi iletin; ekibimiz sizinle iletişime geçer." ([KOD] `messages.ts:127,454,471-472`)
**Sonra:** Düğme "Talebimi gönder" → "Talebiniz bize ulaştı" / "{name} ile {date}, saat {time} için talebinizi aldık. Ekibimiz sizi arayarak görüşmeyi kesinleştirecek."
**Neden:** Kişi ne bekleyeceğini bilmeli; "kesin randevu sandım, arandım" ya da tersi ilk temasta güven kaybettirir. Arama süresi ("1 iş günü içinde") müşteri teyidi olmadan yazılmamalı. Kesin randevu modeli seçilirse 3. adım metni ona göre değişmeli.

#### 6: SSS — "Randevumu iptal edebilir miyim?"
**Önce:** "Prototip aşamasında 24 saat öncesine kadar ücretsiz iptal gösterilir. Kesin iptal ve iade koşulları canlı hizmet öncesinde yayınlanacaktır." ([KOD] `data/institution.ts:345`)
**Sonra:** "Randevunuzu görüşmeden en az 24 saat önce 0552 898 95 45'i arayarak ya da WhatsApp'tan yazarak iptal edebilir veya erteleyebilirsiniz."
**Neden:** Canlı sitede "Prototip" güveni zedeliyor, "ücretsiz" §7'de yasak. Numara `data/institution.ts:209`. 24 saat kuralı ve ücret iadesi **müşteriden teyit** edilmeli.

#### 7: Altbilgi — kurum tanımı
**Önce:** "Uzmanlarımızın aynı çatı altında hem online hem yüz yüze hizmet sunduğu randevu platformu." ([KOD] `messages.ts:36`; her sayfada [CANLI])
**Sonra:** "Çankaya'da yetişkin, çocuk-ergen, çift-aile ve sınav-kariyer danışmanlığının aynı ekiple sunulduğu aile danışma merkezi."
**Neden:** "Platform" kelimesi Hakkımızda'daki "Pazaryeri mantığıyla değil" ile çelişiyor ve brief'in "fiziksel klinik + kurum" kimliğini zayıflatıyor. Her sayfada tekrarlandığı için en çok okunan tanım cümlesi bu.

#### 8: Bölümlerimiz — Yetişkin Danışmanlığı kartı (4 bölüm için şablon)
**Önce:** "Yetişkin Danışmanlığı" + "Bu bölümdeki uzmanlar" (açıklama yok) ([CANLI] `/bolumlerimiz`)
**Sonra:** "Yetişkin Danışmanlığı" / "Peki siz son zamanlarda en çok neyi taşımakta zorlanıyorsunuz? Kaygı, ilişkiler, iş yükü ya da adını tam koyamadığınız bir yorgunluk… Yetişkin danışmanlığında yaşadıklarınızı bir uzmanla, kendi hızınızda anlamlandırırsınız. İlk görüşmede başvuru nedeninizi ve beklentilerinizi konuşursunuz." / "Bu bölümdeki uzmanlar"
**Neden:** Brief §4'ün "soru sorarak açan" kalıbı; "çok büyük bir şeyim yok" eşiğini hedefliyor; sonuç vaadi yok. İlk görüşme cümlesi mevcut bölüm SSS'lerinden ([KOD] `data/departmentFaq.ts`). Çocuk-Ergen kartında soru ebeveyne yönelmeli ("Çocuğunuzda sizi düşündüren bir değişiklik mi var?").

#### 9: Profil — uzmanlık etiketleri ve filtre adı
**Önce:** "Tedavi Alanı" filtresi; etiketler "Borderline (Sınırda) Kişilik Bozukluğu · Majör Depresif Bozukluk · Panik Bozukluğu · Panik Bozukluklar · Psikolojik Bozukluk · …" (~68) ([KOD] `messages.ts:355`; [CANLI] `/uzmanlar/elif-silav`)
**Sonra:** "Çalışma alanı" filtresi; profil başına 6–8 tema: "Kaygı ve stres · İlişki ve evlilik · Aile içi iletişim · Boşanma süreci · Özgüven · Yas ve kayıp · Cinsel terapi"
**Neden:** Brief §4 "teşhis koyan dil" yok; tekrar eden ve birbirine benzeyen 68 etiket seçimi kolaylaştırmıyor, zorlaştırıyor. Etiketler `serviceCatalog` temalarıyla (`data/institution.ts:141+`) aynı sözlüğe bağlanırsa Bölümlerimiz → uzman listesi filtresi de çalışır. Uzman onayı gerekli.

#### 10: Randevu penceresi — mesaj alanı
**Önce:** "Mesajınız (isteğe bağlı)" ([KOD] `messages.ts:453`)
**Sonra:** Etiket "Not (isteğe bağlı)" + yardım metni: "Size ulaşabileceğimiz uygun saatleri ya da görüşmeyle ilgili sorunuzu yazabilirsiniz. Lütfen şikâyetinizi veya sağlık bilginizi buraya yazmayın; bunları uzmanınızla görüşmede konuşursunuz."
**Neden:** Brief §7: "Randevu/WhatsApp akışlarında danışanın şikâyeti veya tanısı kayda geçmez (KVKK özel nitelikli veri)." Serbest alan şu an bunu davet ediyor.

---

### Eksik öğeler
- **Görünür ruhsat cümlesi** ("Aile ve Sosyal Hizmetler Bakanlığı ruhsatlı aile danışma merkezi") — şu an yalnız logo `alt` metninde. [KOD] `app/AppShell.tsx`
- **Bölüm açıklamaları** ve temadan uzman listesine bağlantı. [CANLI] `/bolumlerimiz`
- **İmzalı makale gövdeleri** (0/16), yazar–profil bağlantısı. [API]
- **Ücret aralığı ve görüşme süresi** (süre sitede ve kodda **doğrulanamadı**).
- **Ana sayfada "İlk görüşmede ne olur?"** — içerik bölüm SSS'lerinde var, ana sayfada yok. [KOD] `data/departmentFaq.ts`
- **Çalışan kriz yönlendirme sayfası** ve altbilgi bağlantısı. [KOD] `app/App.tsx:279`
- **Eksik profil:** zuhal-alver biyografisi 0 karakter, yine de hero'daki dönen kartlarda gösteriliyor; 3 profilde uzmanlık etiketi 0. [API][CANLI] `/`
- **Mekân anlatımı:** 14 danışma odası, çocuk odası, test laboratuvarı yalnız brief'te; müşteri teyidiyle Hakkımızda/İletişim'e eklenebilir.
- **Kullanılmayan hazır içerik:** `InstitutionProofStrip`, `CarePaths` (online/yüz yüze kartları), `TeamPreview` bileşenleri ve `workAreaDetails` verisi hiçbir sayfada render edilmiyor. [KOD] `features/home/components/`, `data/institution.ts:261`

### Rakip karşılaştırması (içerik ve mesaj)
| Site | Başlık ve mesaj | Humentis için anlamı | Kaynak |
|---|---|---|---|
| Vivere | H1 "Ankara Psikolog ve Aile Danışmanlığı"; "İlk görüşme, adım adım", "Bilgi Merkezi"; §7 ihlali görülmedi | Konum ve tonu en yakın rakip; yer + ilk görüşme anlatımını öne alıyor | [RAKİP] `an-vivere.json` |
| CAN Psikoloji | "Sizin İçin Buradayız"; 197 blog; "ilk seans ücretsiz" | Blog hacmi yüksek; "ücretsiz" teşviki Humentis'te **marka kuralı gereği uygulanmaz** | [RAKİP] `an-can.json`, EVIDENCE |
| Yaşam Aile | "2008'den Beri Yanınızdayız"; "7/24 Destek" | Kuruluş/deneyim vurgusu uyarlanabilir; "7/24" Humentis'te yasak | [RAKİP] EVIDENCE |
| Optimum | "Ankara Psikolog (2026)…", sonuç iddialı yorumlar ("3-4 günde") | Örnek alınmamalı; §7'nin yasakladığı dil | [RAKİP] `an-optimum.json` |

Hiçbir rakip fiyat yazmıyor ve hiçbiri unvan farkını anlatmıyor — Humentis'in içerikte gerçek farkı bu ikisi olabilir.

### Uygulama sırası (etki / efor)
1. Makaleleri `draft`'a al; SSS "Prototip/ücretsiz" cümlesini düzelt; mesaj alanı yardım metni (az efor, yüksek risk azaltımı).
2. Doğrulama iddiası ↔ veri uyumu; kriz sayfası rotası (Sorun 2, 5).
3. Yorum bandı → `InstitutionProofStrip` (müşteri kararı gerekli).
4. Hero + kurum bloğu + altbilgi tanımını tek değer önerisine hizala; online cümlesini teke indir.
5. Bölüm açıklamaları; ilk 4 imzalı makale; profil etiketlerinin sadeleştirilmesi (uzman onayıyla).

*Ekip kararları (bu alanı doğrudan etkilemiyor, not için):* açılış animasyonu kalacak; takvimin ay sonu davranışı şimdilik değişmeyecek — **karar verildi**, öneri listesine alınmadı.

### Doğrulanamayanlar ve varsayımlar
- Online görüşmenin kapsamı (5 metin çelişiyor; uzman bazında API alanı incelenmedi).
- Talep mi kesin randevu mu (operasyon tarafı), geri arama süresi, iptal kuralı, görüşme süresi, güncel ücret (API ₺1.450–2.100; telefondaki ₺3.000+ doğrulanamadı).
- Bakanlık ruhsatının metinde kullanılacak tam ifadesi; 14 oda / çocuk odası / test laboratuvarı (yalnız brief'te).
- SSS "Gizlilik" sekmesindeki iptal cevabı akordeon kapalı olduğu için DOM'da yok; kaynak main kodu (`data/institution.ts:345`) + canlıdaki "Gizlilik" sekmesi.
- Gelir etkisi hesaplanmadı; Humentis'in Google Ads rakamları kullanılmadı.
