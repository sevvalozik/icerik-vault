---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]"]
---

> [!note] R4 eki · Rekabet konumu — ai-marketing-claude `market-competitive` alt ajanının tam çıktısı. Ana rapor: [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

---
type: audit-bolum
client: "Humentis"
slug: humentis
status: draft
date: 2026-10-02
tags: [humentis, market-audit, rakip, konumlandirma]
related: ["[[marka-brief]]", "[[R1 Rakip analizi CAN Psikoloji]]"]
---

# Rekabetçi Konumlandırma Analizi — Humentis (humentis.com.tr)

> Ajan: `market-competitive` (+ `market-competitors` yöntemi). Tarih: 02.10.2026.
> Kaynaklar: `humentis-audit-sayfalar-{can,vivere,yasam,optimum}.json` (30.09 ham HTML, robots, sitemap), `humentis-audit-sayfalar-humentis.json` (rendered), `EVIDENCE.md`, main kodu `/home/claude/build/base/humentis`, alt sitemap'ler 02.10'da WebFetch ile çekildi (curl proxy'de 403 verdi). Listeler `scratchpad/comp/can-posts.txt` ve `opt-pages.txt` dosyalarında `wc -l` ile sayıldı.
> Kural: Marka brief'i (§4 Ses Tonu, §5 KESİNLİKLE OLMAYACAK, §7 Yasal/Hassas) paketin önerilerinden üstündür. Uygulanmayan paket önerileri "marka kuralı gereği uygulanmadı" diye işaretlendi.

## Competitive Positioning: **44 / 100**

(5 boyut × 10 puan = 50 üzerinden 22, ×2 → 100'lük ölçek.)

| Boyut | Puan | Ana bulgu |
|---|---|---|
| Konumlandırma netliği | 5/10 | H1 "Psikolojik destek için doğru uzmanı bulun." her rakibin ya da bir dizin sitesinin de söyleyebileceği bir cümle. H1'de Ankara/Çankaya, "aile danışma merkezi" ve 18 uzman yok. Asıl farklar ("Sabit kurum modeli", doğrulama, 4 bölüm) ancak 3.–4. ekranda başlıyor (rendered `/`). |
| Fiyat rekabeti | 4/10 | Rakiplerin dördü de fiyat göstermiyor, Humentis de göstermiyor; burada pazarla eşit. Ancak CAN (`/ankara-psikolog-ucretleri-2026-…`, `/ankara-psikolog-fiyatlari` ×3) ve Optimum (`/ankara-psikolog-seans-ucretleri/`) "ücret" aramasını içerikle karşılıyor; Humentis'te bu soruya yanıt veren tek satır yok. API'de ₺1.450–2.100 var ama yalnız linksiz `/randevu/<slug>` sayfasında görünüyor (EVIDENCE). |
| Özellik mesajı | 6/10 | Rakipler arasında **gerçek takvimden saat seçilen randevu** yalnız Humentis'te var (CAN: popup form; Vivere: "Randevu Talebi" + telefon; Yaşam: "en geç 12 saat içinde sizi arayacağız"; Optimum: 0850 hattı). Eşleştirme, doğrulama paneli, podcast ve kurumsal program da var. Ancak header'da telefon yok, fiziksel merkez (14 oda, çocuk odası, test laboratuvarı) sitede hiç anlatılmıyor, "18 uzman" yalnız `/uzmanlar`'da yazıyor. |
| Pazar farkındalığı | 5/10 | `/hakkimizda`: "Pazaryeri mantığıyla değil; kurumsal süreklilik, doğrulanmış uzman bilgisi…". Bu, dizinlere (Doktortakvimi/Doktorsitesi) karşı örtük ama doğru bir duruş. "Neden Humentis" bloğu ve unvan farkları tablosu var. Ancak bunlar ana sayfada değil; karşılaştırma/rehber içeriği de yok. |
| İçerik otoritesi | 2/10 | `/icerik`'teki 16 makalenin hepsi 10 kelimelik yer tutucu ("Tam metin yakında yayınlanacaktır"); gerçek yazı 0. Rakipler: CAN ~212, Optimum 26 yazı + ~170 yerel sayfa, Yaşam 25, Vivere 3. Podcast tek gerçek içerik varlığı. |

---

## Rakipler

| Rakip | Tür | Güçlü yanı | Zayıf yanı |
|---|---|---|---|
| **CAN Psikoloji** (canpsikolojim.com) | Doğrudan (Ankara, çok uzmanlı merkez) | Arama hacmi: post-sitemap'te 212 yazı, 100'ü Ankara/Çankaya/Çukurambar slug'lı; 12 hizmet sayfası; 8 online test; header'da tıklanabilir telefon; "15 Uzman · 20,018+ seans saati" sayaçları | Kopya/ince sayfalar (`ankara-psikolog-2/3/4/5`, `-fiyatlari-2/3` gibi 18 numaralı tekrar); 34 slug'da "bozukluğu/cinsel/tedavi"; "Size özel ilk seans ücretsiz", "Yılın Uzman Psikolojik Danışmanı Ödülü"; H1 "Ana Sayfa"; schema'da LocalBusiness yok |
| **Vivere** (viverepsikoloji.com) | Doğrudan, **en yakın ikiz** (Çankaya/Kavaklıdere, "Özel … Aile Danışmanlık Merkezi", sakin ton) | Net H1 "Ankara Psikolog ve Aile Danışmanlığı"; "Kendim için / İlişkim için / Çocuğum için" girişi; "İlk görüşme, adım adım"; "Mekânımız" bölümü (danışma odası, çocuk oyun odası); schema'da AggregateRating 4.9/200 + FAQPage + Article; robots.txt AI botlarına açık | Küçük kadro (5 danışman + müdür + asistan); Bilgi Merkezi'nde 3 yazı; sitemap'te 6 hizmet sayfası; online randevu takvimi yok |
| **Yaşam Aile** (yasamailedanismanligi.com) | Doğrudan (Çankaya, 2008'den beri) | Kıdem ("2008'den Beri Yanınızdayız"); 8 hizmet sayfası (EMDR, evlilik öncesi, cinsel danışmanlık dahil); 3 test sayfası; 25 blog yazısı (son lastmod 2026-06-08); WhatsApp + telefon üstte | Wix, 420 kelimelik ana sayfa, H1 yok; "7/24 Destek", "hızlı sonuç" vaadi; 5 kişilik ekip |
| **Optimum** (optimumpsikoloji.com.tr/ankara) | Doğrudan + çok şehirli zincir (Ankara, Konya, Antalya; franchise) | Yerel SEO makinesi: page-sitemap 172 URL, 106'sı `<il/ilçe>-psikolog/pedagog`, 35'i Ankara/Çayyolu; ana sayfa 9.620 kelime; yorumlar: Google 4.8/163 (Trustindex) + 212 dizin yorumu (146 Doktortakvimi + 66 Doktorsitesi) | Ankara'da 4 psikolog; sonuç iddialı danışan yorumları ("4 günde çözdük"), "tedavi" ×39, "Ankara Ücretsiz Psikolog" H2; JSON-LD yok |
| **Doktortakvimi / Doktorsitesi** | Dolaylı (dizin/pazaryeri) | "çankaya aile danışma merkezi psikolog" ve "ankara psikolog merkezi çankaya" aramalarında ilk sonuçların tamamı bu iki dizin (WebSearch, 02.10); yorum sayısı görünür ("259 görüş") | Fiyat göstermiyor (Doktortakvimi Ankara/psikoloji 1. sayfa, WebFetch 02.10); kurum değil kişi satıyor. Humentis uzmanlarının bu dizinlerde profili olup olmadığı **doğrulanamadı** |

> Not: EVIDENCE.md'de Optimum için yazan "4.8/212" iki ayrı kaynağın birleşimi. Sayfada Google 4.8/163, dizinlerde 212 değerlendirme yazıyor.
> Ek güçlü Çankaya rakibi aramasında (3 sorgu) organik ilk sayfayı dizinler kapladı, yeni bir merkez sitesi çıkmadı. Harita (GBP) sıralaması **doğrulanamadı**.

## Konumlandırma karşılaştırması

| Boyut | **Humentis** | CAN | Vivere | Yaşam | Optimum |
|---|---|---|---|---|---|
| Title | "Özel Humentis Aile Danışma Merkezi" (Ankara yok) | "Ankara Psikolog - Can Psikoloji Merkezi" | "Özel Vivere Aile Danışmanlık Merkezi - Ankara Psikolog - Çankaya Psikolog…" | "Ankara Aile Danışmanlığı & EMDR…" | "Ankara Psikolog (2026) Optimum Psikoloji Kadromuz" |
| Ana mesaj (H1) | "Psikolojik destek için doğru uzmanı bulun." | H1 "Ana Sayfa", H2 "Sizin İçin Buradayız" | "Ankara Psikolog ve Aile Danışmanlığı — Anlaşılmakla başlayan bir yolculuk" | H1 yok; "2008'den Beri Yanınızdayız" | "Ankara Psikolog (2026)…" |
| Hedef kitle | Yetişkin / Çocuk-Ergen-Aile sekmeleri; 4 bölüm (Sınav-Kariyer dahil) | Geniş (bireysel, cinsel, bağımlılık, diyetisyen) | Kendim / İlişkim / Çocuğum | Aile, çift, evlilik öncesi | Yetişkin, çift, cinsel terapi ağırlıklı |
| Kadro (sitede) | **18 uzman** (yalnız `/uzmanlar`'da yazıyor) | "15 Uzman" (ana sayfada 11 kart) | 5 danışman + 2 idari | 5 | Ankara'da 4 |
| Fiyat | Gizli (API ₺1.450–2.100) | Gizli; "ilk seans ücretsiz" | Gizli | Gizli | Gizli; ücret blogu var |
| Randevu | **Gerçek takvim + form, ödeme yok** | Popup form + telefon | Telefon / WhatsApp / talep | Form → "12 saatte ararız" | 0850 + WhatsApp |
| Sosyal kanıt | Ana sayfada 7 "Google" danışan yorumu (tekrarlı bant); toplam puan/sayı yok; Bakanlık logosu header'da | Ödül, sayaçlar, kurum logoları (Aile ve Adalet Bakanlığı "referans" olarak) | Google profiline yönlendirme; schema 4.9/200 | Kıdem (2008) | 4.8/163 + 212 dizin yorumu, uzun yorum duvarı |
| Ayırt edici | Sabit kurum modeli, doğrulanmış uzman bilgisi, eşleştirme, podcast, kurumsal program | Hacim + teşvik | Sakin, mahremiyet ve etik ilkeleri; mekân | EMDR + kıdem | Çok şehir, yerel sayfalar |
| İçerik | 0 gerçek yazı (16 yer tutucu), podcast | ~212 yazı, 8 test | 3 yazı | 25 yazı, 3 test sayfası | 26 yazı + ~170 yerel sayfa, videolar |
| Brief §7 ile uyum (Humentis kuralı rakibe uygulansa) | Kısmen: danışan yorumları ve sonuç ima eden bir yorum ("oğlumun kıskançlığı ciddi azaldı") var | İhlal: ücretsiz, ödül, "tedavi" | Uyumlu görünüyor | İhlal: 7/24, "hızlı sonuç" | İhlal: sonuç vaatli yorumlar, "tedavi", "ücretsiz" |

### Konumlandırma haritası (eksenler bu sektöre göre: Hacim/erişim ↔ Özen/güven, Tek uzman odaklı ↔ Kurum odaklı)

```
                     KURUM ODAKLI
                          |
        Vivere            |      HUMENTIS (hedef: kurum + güven + erişim)
   (sakin, küçük kadro)   |      bugün: mesajda henüz görünmüyor
                          |
 ÖZEN/GÜVEN ──────────────┼────────────────── HACİM/ERİŞİM
                          |
        Yaşam (kıdem)     |      CAN (içerik hacmi, teşvik)
                          |      Optimum (yerel sayfa, yorum duvarı)
                          |      Doktortakvimi/Doktorsitesi (dizin)
                     TEK UZMAN / KİŞİ ODAKLI
```

Sağ üst köşe (büyük kurum kadrosu + doğrulanmış bilgi + gerçek müsaitlik) boş. Humentis'in ürünü bu köşeye uyuyor, ama sitesindeki ilk ekran mesajı henüz buraya oturmuyor.

---

## İçerik ve SEO açığı (sitemap'lerden sayıldı)

| Ölçüt | Humentis | CAN | Vivere | Yaşam | Optimum |
|---|---|---|---|---|---|
| Sitemap URL | 25 (lastmod yok; profil yok; `/sss`, `/kriz-destegi` ana sayfayı açıyor) | post 212 + page 20 + service 12 | 25 | blog 25 + sayfa 28 | page 172 + post 26 |
| Hizmet sayfası | 0 ayrı URL (4 bölüm tek sayfada, 169 kelime) | 12 | 6 (`/ankara-…-danismanligi`) | 8 | Ankara için ~10 (`/ankara-emdr-terapisi`, `/ankara-aile-danismani-…`) |
| Uzman profili sitemap'te | 0 (18 profil var ama yok) | ~10 (yazı olarak) | 8 | 5 | 6 |
| Blog/yazı | 0 gerçek | ~212 | 3 | 25 | 26 |
| Test sayfası | 0 | 8 | 0 | 3 | 0 |
| Schema | Organization (çift), Person, FAQPage | WebPage/WebSite | ProfessionalService, AggregateRating, FAQPage, Article | LocalBusiness | yok |

**Rakiplerin işlediği, Humentis'in içeriğinde olmayan konular (≥2 rakip):**
1. **İlk görüşme nasıl geçer / sürecin adımları**: CAN (birden çok yazı), Vivere (SSS + "adım adım"), Yaşam. Humentis'te 3 adım var ama yalnız randevu mekaniği anlatılıyor, görüşmenin kendisi anlatılmıyor.
2. **Unvan farkları (psikolog / klinik psikolog / psikiyatrist / PDR)**: CAN, Optimum. Humentis'in `/hakkimizda`'daki "Bakım okuryazarlığı" bloğu rakiplerden daha iyi; bunu ayrı ve aranabilir bir sayfaya dönüştürmek gerekiyor.
3. **Çift terapisine ne zaman başvurulur / evlilik öncesi danışmanlık**: CAN, Yaşam.
4. **Ergenlerde davranış değişimi, okula uyum**: CAN, Yaşam, Optimum.
5. **EMDR**: Yaşam, Optimum, CAN. Humentis uzman profillerinde EMDR eğitimi var (`apps/api/src/seed.ts`, `teamProfiles.ts`) ama ayrı bir sayfası yok.
6. **Seans ücretini etkileyen faktörler**: CAN, Optimum. Rakam vermeden, süreç ve şeffaflık diliyle yazılabilir.
7. **Sınav kaygısı / kariyer**: CAN. Humentis'te bunun için ayrı bir bölüm var (rakipler arasında tek) ama içeriği yok.

**Kopyalanmayacaklar:** Numaralı kopya sayfalar (`ankara-psikolog-3/4/5`), il/ilçe kapı sayfaları (Optimum'un 106 sayfası; Humentis'in tek şubesi var), tanı çağrıştıran self-testler, "en iyi psikolog" slug'ları ("en iyi" brief'te yasak), "bozukluğu/tedavisi" odaklı başlıklar (§7: tedavi/teşhis dili).

---

## SWOT — Humentis (rakip zekâsından)

- **Güçlü:** En büyük kadro (18, rakiplerin en fazla 15'i); gerçek müsaitlikle randevu (rakiplerde yok); doğrulama paneli ve unvan okuryazarlığı (rakiplerde yok); 4 bölüm + kurumsal program (rakipler arasında yalnız Optimum'da benzer sayfa var: `/kurumsal-danismanlik-ve-kocluk/`); podcast; header'da Bakanlık logosu; brief §7 ile en uyumlu dil (Vivere ile birlikte).
- **Zayıf:** İçerik hacmi 0; ham HTML boş (SPA). Rakiplerin dördü de statik HTML veriyor, bu yüzden tarayıcı ve yapay zekâ motorları onları okuyor, Humentis'i okumuyor (EVIDENCE: her URL aynı 4.404 bayt). Ana sayfada telefon yok. Fiziksel merkez anlatılmıyor. Sitemap'te profil yok. "Kadrodaki her uzmanın kimlik bilgisi… kontrol edilir" (`/hakkimizda`) deniyor, ama 18 uzmanın 10'unda `verification` alanı boş (API). Bu güven iddiası çelişkili.
- **Fırsat:** "Kurum + güven + erişim" köşesi boş. Rakiplerin üçü brief'in yasakladığı taktiklere yaslanıyor (ücretsiz seans, 7/24, sonuç vaadi), bu da sakin ve şeffaf duruşun öne çıkmasını sağlar. Dizinlerin ilk sayfayı tuttuğu aramada kurum anlatısı ("tek uzman değil, ekip") ayrışır.
- **Tehdit:** Vivere aynı ilçede, aynı tonda ve teknik olarak daha olgun (schema, AggregateRating, AI bot izni). Humentis'in sakin tonu tek başına fark yaratmıyor. CAN'in içerik hacmi "ankara psikolog" kümesini kapatmış durumda. Optimum'un yorum duvarı sosyal kanıt beklentisini yükseltiyor; Humentis bununla aynı silahla yarışamaz (marka kuralı).

---

## Fırsatlar

1. **Boş köşeyi H1'e taşı: "Çankaya'da 18 uzmanlı aile danışma merkezi"**. H1 ve title'a Ankara/Çankaya + "aile danışma merkezi" + kadro büyüklüğü + 4 bölüm girmeli. Örnek (ton §4'e uygun, üstünlük iddiası yok): *H1:* "Ankara Çankaya'da yetişkin, çocuk, çift ve aile danışmanlığı tek çatı altında" / *Alt satır:* "18 uzman, aynı kurum, açık takvim. Size uygun uzmanı seçin ya da kısa eşleştirmeyle başlayın." Brief'teki "Ankara'nın en büyük aile danışma merkezi" ifadesi üstünlük iddiası olduğu için kullanılmamalı ("en iyi" yasağının ruhuna aykırı ve doğrulanamaz); yerine ölçülebilir olgular (18 uzman, 14 oda) yazılmalı.
2. **Görünür müsaitliği öne çıkar.** Rakiplerin hiçbiri "boş saati şimdi görün" diyemiyor (onlarda form/telefon → geri arama). Hero'da tek satır yeterli: "Uzmanların açık saatlerini görerek randevu talebi oluşturun." Aciliyet dili kullanılmamalı ("son saatler" gibi; marka kuralı).
3. **Mekânı anlat (Vivere'nin güçlü yanını büyük ölçekle karşıla).** Brief: 14 danışma odası, çocuk odası, test laboratuvarı, gözlem odaları. Sitede bunların hiçbiri yok; `/galeri`'de 6 fotoğraf var. Ana sayfaya "Merkezimiz" bandı eklenmeli: oda sayısı + çocuk odası + 3 fotoğraf (danışan yok, §7).
4. **Doğrulamayı gerçek yap, sonra öne çıkar.** "Doğrulanmış uzman bilgisi" rakiplerde olmayan bir farktır, ama 10/18 profilde boş. Önce veriyi tamamla, sonra her kartta "Kimlik · Diploma · Son kontrol" rozeti göster. Eksik kaldıkça `/hakkimizda` metni bir risk.
5. **"Bakım okuryazarlığı" içerik kümesi.** Rakiplerin hacim yarışına girmeden, yüksek niyetli 8–10 rehber yazılmalı: unvan farkları, ilk görüşme nasıl geçer, çift danışmanlığına ne zaman, ergenle konuşmak, EMDR nedir (uygun uzman varsa), seans ücretini neler belirler, online mı yüz yüze mi, aile danışma merkezi nedir (Bakanlık ruhsatı ne demek). Her yazı ilgili bölüm ve uzmana bağlanmalı. Önce 16 yer tutucu makale yayından kalkmalı ya da doldurulmalı; şu an rakiplere göre "boş" görünüyor.
6. **Bölüm başına ayrı URL.** `/bolumlerimiz/yetiskin`, `/cocuk-ergen`, `/cift-aile-evlilik`, `/sinav-kariyer` (Vivere'nin `ankara-…-danismanligi` modeli). Sınav-Kariyer, dört rakip arasında yalnız Humentis'te ayrı bölüm; sahiplenilebilir bir alan.
7. **Kurumsal program bir kanal farkı.** Rakiplerden yalnız Optimum'un kurumsal koçluk sayfası var. `/kurumsal` sitemap'te mevcut; ana sayfada görünür bir kısa bant ile işveren aramalarına cevap verir.
8. **Sosyal kanıtı uyumlu hâle getir.** Ana sayfadaki "Danışan yorumları" bandı brief §7 ile çelişiyor (danışan yorumu önerilmez; "oğlumun kıskançlığı ciddi azaldı" sonuç ima ediyor). Bu karar ekibe ait. Önerilen alternatif: yorum metni yerine Google profil bağlantısı + kurum olguları (ruhsat, kadro, oda sayısı, uzman başına eğitim). Vivere de yorum metni göstermeden yalnız Google profiline yönlendiriyor.

## Paket önerilerinden uygulanmayanlar

- **"[Rakip] Alternatifi" / "[Rakip] vs Humentis" sayfaları**: uygulanmadı. Sağlık hizmetinde rakibi adıyla karşılaştırmak üstünlük iddiası doğurur; brief §4/§7 ve sektör etiğiyle çelişir. Yerine tarafsız "Uzman/merkez seçerken nelere bakılır" rehberi önerildi (Fırsat 5).
- **Switching narrative (danışan geçiş hikâyesi, geçiş teklifi/indirimi)**: marka kuralı gereği uygulanmadı (danışan hikâyesi, teşvik yasak).
- **"İlk seans ücretsiz" karşı teklifi (CAN'e yanıt)**: marka kuralı gereği uygulanmadı.
- **Yorum duvarı / puan rozeti yarışı (Optimum'a yanıt)**: marka kuralı gereği uygulanmadı (danışan yorumu, sonuç vaadi).
- **Online self-test sayfaları (CAN, Yaşam)**: önerilmedi. Tanı çağrıştırır (§7) ve form şikâyet/tanı toplar (KVKK özel nitelikli veri).
- **İl/ilçe kapı sayfaları (Optimum modeli)**: önerilmedi. Tek şube, ince sayfa riski.

## Önerilen aksiyonlar

- [ ] H1/title/description'a "Ankara Çankaya", "aile danışma merkezi", "18 uzman", 4 bölüm (Fırsat 1). Ön koşul: ham HTML'e sayfa başına meta (teknik ajanla ortak; SPA sorunu).
- [ ] Header'a tıklanabilir telefon (rakiplerin dördünde de var; EVIDENCE: Humentis'te yalnız `/iletisim`'de).
- [ ] Hero'ya "açık saatleri görerek randevu" satırı (Fırsat 2).
- [ ] 10 eksik `verification` kaydını tamamla; ardından kartlara doğrulama rozeti (Fırsat 4).
- [ ] Ana sayfaya "Merkezimiz" bandı: 14 oda, çocuk odası, test odası + galeriden 3 kare (Fırsat 3). Oda sayıları brief'ten alındı; sitede yayınlamadan önce kurumla teyit edilmeli.
- [ ] 16 yer tutucu makaleyi kaldır/doldur; 8–10 "bakım okuryazarlığı" rehberi (Fırsat 5).
- [ ] Bölüm başına URL + sitemap'e 18 uzman profili (Fırsat 6).
- [ ] Danışan yorumu bandı için ekip kararı (Fırsat 8).
- [ ] İzleme: rakip sitemap'lerini ayda bir say (CAN post-sitemap, Vivere bilgi-merkezi, Yaşam blog-posts); Reklam Şeffaflık Merkezi'ne aylık bak (R1 notuna göre CAN'in reklamı yok; bu oturumda **doğrulanmadı**); Vivere'nin Google yorum sayısını (şu an schema'da 200) not et.

## Doğrulanamayanlar

Google harita sıralamaları ve GBP yorum sayıları (Vivere 4.9/200 yalnız kendi schema'sından; Humentis'in Google puanı sitede yok), rakip seans ücretleri, sosyal medya takipçi sayıları, rakip reklam harcamaları, Humentis uzmanlarının dizinlerdeki varlığı, CAN'in ~780 harita yorumu (R1 notu). Alt sitemap sayımları WebFetch çıktısından elle sayıldı (CAN post-sitemap için araç özeti "175" dedi ama döktüğü liste 212 satır; tabloda liste sayısı kullanıldı, ±birkaç hata payı olabilir).
