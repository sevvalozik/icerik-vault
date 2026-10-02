---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-10-02
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude, kod-dogrulamali]
related: ["[[00 Humentis Site Plani (MOC)]]", "[[R4 ek - icerik]]", "[[R4 ek - donusum]]", "[[R4 ek - rakip]]", "[[R4 ek - teknik]]", "[[R4 ek - strateji]]", "[[ai-marketing-claude-paketi]]"]
---

# R4 · Pazarlama denetimi (kod doğrulamalı): Humentis

**URL:** https://humentis.com.tr · **Tarih:** 30.09–02.10.2026 · **İşletme türü:** Yerel hizmet (aile danışma merkezi) + kurumsal hizmet (ÇDP)
**Genel pazarlama puanı: 44/100 (Not: D — büyük düzenleme gerekiyor)**

> [!info] Yöntem: paketin tamamı
> ai-marketing-claude `/market audit` akışı eksiksiz uygulandı:
> - **Keşif:** canlı site (gerçek tarayıcı, JS sonrası + ham HTML), canlı API, main kodu (`OmerBirol/humentis`, d185c77).
> - **Betikler:** `analyze_page.py` (Humentis 6 sayfa × ham/JS sonrası + 4 rakip) ve `competitor_scanner.py` (4 rakip). Ortamın internet erişimi olmadığı için sayfalar tarayıcıdan alınıp betiklere verildi; betik kodu değiştirilmedi.
> - **5 alt ajan:** market-content (+ market-copy), market-conversion (+ market-funnel, market-landing), market-competitive (+ market-competitors), market-technical (+ market-seo), market-strategy (+ market-brand). Ayrıntılı çıktılar ek notlarda.
> - **Marka kuralları:** Humentis brief §4 ve §7 paketin önerilerinden üstün tutuldu; uygulanmayan öneriler aşağıda listeli.

> [!warning] Sınırlar
> - Betikler İngilizce/SaaS anahtar kelimeleriyle yazılmış: Türkçe sitelerde CTA, fiyat ve yorum tespitleri güvenilir değil. Bu alanlar ajanlar tarafından HTML'den elle doğrulandı.
> - Doğrulanamayan: Google Ads verileri (175 tık ≈ 1 temas), telefonda söylenen fiyat, PageSpeed skorları, Google/harita sıralamaları, GBP istatistikleri, 29.09'da açık saat durumu.

## Yönetici özeti

Humentis'in randevu altyapısı çalışıyor: uzman kartındaki "Randevu al" penceresi 18 uzmanın her biri için 1 Ekim'den itibaren yaklaşık 860 açık saat gösteriyor, ödeme adımı yok. Linksiz eski `/randevu/<slug>` sayfası ise (ödeme adımı, prototip metni, geçmiş tarihli kayıtlar) ziyaretçinin yolunda değil.

Kayıp, ziyaretçinin bu pencereye ulaşana kadarki yolda ve sitenin söylediği ile yaptığı arasında. İlk ziyarette çerez perdesi sayfayı kilitliyor; Ara/WhatsApp barı ancak animasyon ve çerez kararından sonra çıkıyor; ana sayfada telefon yok. Güven tarafında site "her uzmanın kimliği kontrol edilir" diyor ama 18 uzmanın 10'unda kayıt boş ve hiçbir profilde doğrulama gösterilmiyor; "kriz sayfası her ekrandan erişilebilir" diyor ama `/kriz-destegi` ana sayfayı açıyor; SSS'de "Prototip aşamasında…" metni yayında.

Google tarafında sunucu her adreste aynı boş HTML'i döndürüyor, 18 uzman profiline hiçbir sayfadan link yok ve profiller sitemap'te yok. Rakipler (CAN 212 yazı, Optimum 106 il/ilçe sayfası) içerikte çok önde; Humentis'in 16 makalesinin hepsi yer tutucu.

Humentis'in elinde rakiplerde olmayan bir köşe var: **en geniş kadro (18), gerçek açık saatli takvim ve sakin, kurala uygun dil bir arada.** Rakiplerin üçü "ilk seans ücretsiz", "7/24" ya da sonuç iddialı yorumlarla çalışıyor. Bu fark bugün ilk ekranda ve Google'da görünmüyor.

**En çok fark yaratacak üç adım:**
1. İlk temas: çerez kilidini kaldırmak, telefonu/WhatsApp'ı ilk ekrana almak.
2. Güven vaatlerini gerçeğe eşitlemek: doğrulama cümlesi, kriz sayfası, prototip SSS, "talep" ↔ "oluşturuldu".
3. Görünürlük: prerender + profil linkleri + sitemap; ardından ölçüm (GA4/Ads + randevuda kaynak alanı).

## Puan dağılımı

| Kategori | Puan | Ağırlık | Ağırlıklı | Ana bulgu |
|---|---|---|---|---|
| İçerik ve mesaj | 52/100 | %25 | 13,0 | Ton ve biyografiler iyi; 16 yer tutucu makale, hero'da konum/fark yok |
| Dönüşüm | 42/100 | %20 | 8,4 | Pencere çalışıyor; önünde çerez kilidi, gecikme, 11 kararlık form |
| SEO ve görünürlük | 41/100 | %20 | 8,2 | Ham HTML boş kabuk; profiller linksiz ve sitemap dışı |
| Rekabet konumu | 44/100 | %15 | 6,6 | Benzersiz köşe var ama mesajda yok; içerik açığı büyük |
| Marka ve güven | 43/100 | %10 | 4,3 | Güven vaatleri canlıda karşılanmıyor |
| Büyüme ve strateji | 30/100 | %10 | 3,0 | Tek ücretli kanal, kaynak/dönüşüm ölçümü yok |
| **Toplam** | | **%100** | **43,5 → 44** | **Not: D** |

Betik puanları (0-10, ana sayfa): ham HTML 4,2 (CTA 1 — sunucu HTML'inde içerik yok), JS sonrası 6,8. Rakipler ham HTML: Vivere 7,2, Yaşam 7,2, CAN 5,8, Optimum 4,2.

## Hızlı kazanımlar (bu hafta)

1. **Çerez kilidini kaldır.** `inert` ve tam ekran perde kalksın; Ara/WhatsApp barı çerez kararından bağımsız görünsün; analitik yine onaya bağlı. (`App.tsx:288-298`) — *Dönüşüm, yüksek etki*
2. **Telefon ilk ekranda.** Header'da tıklanabilir numara; hero altında "Önce konuşmak isterseniz: 0552 898 95 45". Rakiplerin dördünde de üstte. — *Dönüşüm*
3. **Kriz sayfasını bağla.** `/kriz-destegi` → hazır `CrisisPage` (`App.tsx:279-280`); footer'da link. — *Güven, etik, SEO*
4. **SSS "Prototip aşamasında…" cevabını değiştir** (`data/institution.ts:345`): "İptal ve değişiklik koşulları randevunuz netleştirilirken sizinle paylaşılır." — *Güven*
5. **Doğrulama cümlesini veriye eşitle** (`data/institution.ts:84,90,93`): "Uzman bilgileri kurum tarafından kontrol edilir; kontrolü tamamlanan profiller işaretlidir." Profillerde doğrulama yalnız dolu kayıtta gösterilsin. — *Güven*
6. **Yer tutucu makaleleri listeden kaldır + noindex**; gerçek metin gelince otomatik geri dönsün. — *İçerik, SEO*
7. **Uzman kartlarını gerçek linke çevir** (`SpecialistDirectoryCard.tsx:25,34`, `HomeHero.tsx:148-159`; hazır `RouteLink`). Görünüm aynı, Google 18 profili keşfeder. — *SEO*
8. **Randevu formunda mesaj alanına not:** "Lütfen burada yaşadığınız konuyu ya da sağlık bilgisi paylaşmayın." (brief §7 KVKK; mesaj iki tabloya kaydediliyor: `api/index.ts:383,392`) — *Uyum*
9. **Canonical origin'i sabitle** (`pageMeta.ts:280` → `https://humentis.com.tr`); eski `dnmhmn.net.verihane.net` ve www host'ları açıksa kopya riski. — *SEO*

## Stratejik öneriler (bu ay)

1. **Talep mi, kesin randevu mu? — karar + tek dil.** Kayıt doğrudan `confirmed` açılıyor (`api/index.ts:385`), ana sayfa "ekibimiz sizi arar" diyor. Karar sonrası metinler ve başarı mesajı tekleşsin; onay e-postası/.ics eklensin (şu an yok).
2. **Seans çakışmasını düzelt.** Gün sonu "16:10" seansı 15:40 seansıyla çakışıyor ama ikisi de kesin alınabiliyor (`availability.ts:122-130`).
3. **Prerender + IIS kuralları.** Build sırasında Playwright ile rota bazlı HTML (title, description, canonical, temel içerik); IIS web.config'e "hazır HTML varsa onu ver", gerçek 404, host tekleştirme 301'leri. Ayrıntı: [[R4 ek - teknik]] P0-a.
4. **Ölçüm.** GA4 + Consent Mode v2 (KVKK: onaydan önce Google etiketi yok); dönüşümler `randevu_olusturuldu`, `tel_click`, `whatsapp_click`, `iletisim_formu`; randevu kaydına kaynak/UTM alanı. Birinci taraf ziyaret kaydı var ama randevuya bağlanmıyor.
5. **Form sadeleştirme.** Bölüm ve görüşme biçimi uzmana göre önseçili gelsin; API uyumsuz biçimi sessizce `offerings[0]`'a çevirmesin (`api/index.ts:367-369`); yaş/şehir isteğe bağlı; hata olunca ilk hatalı alana kaydır.
6. **Hero ve konumlandırma.** Yer + kapsam + ölçek ilk ekranda; podcast bandı hero altına; "Sabit kurum modeli" jargonu yerine fayda. Önerilen metinler: [[R4 ek - icerik]] (önce/sonra 1-2).
7. **Danışan yorumları bandı → kurumsal kanıt şeridi.** Kodda hazır ama kullanılmayan `InstitutionProofStrip`. Karar Humentis'in (P2-14).
8. **Performans.** Fontlar woff2 + Türkçe alt küme (Montserrat TTF 727 KB, Manrope 162 KB), profil fotoğrafları WebP (Elif Silav 611 KB), bölüm PNG'leri (852 KB), görsellere width/height, profil fotoğrafında `lazy` kaldırılsın.
9. **Schema tekilleştirme.** Her sayfada iki Organization bloğu; FAQPage yalnız SSS içeren sayfada.
10. **Kurumsal ÇDP metinleri brief'e uysun:** "fiziksel iyilik hali", "her an destek", "Önce/Sonra" grafiği, "1 birim → 5 birim" (`corporate.ts:19,36,130-131,166`).

## Uzun vadeli girişimler (bu çeyrek)

1. **Bölüm/hizmet sayfaları** (4 bölüm, sonra öncelikli temalar) — rakiplerde 5–12 hizmet sayfası var, Humentis'te 0.
2. **Uzman imzalı içerik (E-E-A-T):** 16 yer tutucuyu gerçek yazıya çevir; ayda 2–4 yazı; "uzman/merkez seçerken nelere bakılır" gibi tarafsız rehberler.
3. **Online ile Türkiye geneli:** her uzmanda büyük açık kapasite var; ölçüm kurulduktan sonra ayrı online sayfası (yurt dışı hukuki durumu doğrulanmalı).
4. **ÇDP satış hattı:** paket yapısı, İK'ya yönelik SSS, referans.
5. **"Merkezimiz" bandı:** brief'teki oda/çocuk odası/test odası (kurumla teyit edilerek) + galeriden kareler.

## Rakip karşılaştırması

| Boyut (1-10) | Humentis | CAN | Vivere | Yaşam | Optimum |
|---|---|---|---|---|---|
| Başlık netliği | 5 | 4 | 9 | 6 | 6 |
| Telefon/WhatsApp üstte | 2 | 9 | 6 | 9 | 9 |
| Hizmet sayfası | 1 (0 sayfa) | 9 (12) | 6 (6) | 8 (8) | 8 (5 + 106 yerel) |
| İçerik derinliği | 1 (0 gerçek yazı) | 9 (212) | 3 (3) | 6 (25) | 7 (26) |
| Kadro | 9 (18) | 8 (15) | 5 (5+) | 4 (5) | 3 (4, Ankara) |
| Gerçek açık saatli takvim | 9 | 3 | 2 | 3 | 2 |
| Brief §7 uyumu | 6 (yorum bandı, "tedavi") | 3 ("ilk seans ücretsiz") | 8 | 4 ("7/24") | 2 (sonuç iddialı yorumlar) |

Fiyatı açık gösteren rakip yok; Humentis'te de ziyaretçi fiyat görmüyor. Ayrıntı ve sitemap sayımları: [[R4 ek - rakip]].

## Gelir etkisi (varsayım)

Veri olmadan rakam verilmedi. Ölçüm kurulunca hesap: `aylık tıklama × (yeni temas oranı − mevcut temas oranı) × ilk görüşmeye dönüş oranı × seans ücreti`. Seans ücretleri API'de ₺1.450–2.100. Gerçek oranlar GA4 + randevu kaydındaki kaynak alanından alınmalı.

## Ekip kararları

| Konu | Durum |
|---|---|
| Açılış animasyonu (4,8 sn) | ✅ Karar verildi: kalıyor |
| Takvimin içinde bulunulan ayda açılması | ✅ Karar verildi: şimdilik değişmiyor |
| Danışan yorumları bandı | ⏳ Karar bekliyor (kurucular + hukuk, P2-14) |
| Talep mi kesin randevu mu | ⏳ Karar bekliyor |
| Sitede ücret/süre/iptal bilgisi | ⏳ Karar bekliyor (öneri: fiyat yazmadan "ücret ve görüşme koşulları" bloğu) |
| Resmi adres yazımı ("2159 CAD." / "2159. Cad." / "2159. Sk.") | ⏳ Karar bekliyor |
| Linksiz `/randevu/<slug>` sayfası | ⏳ Kaldır ya da `/uzmanlar`'a yönlendir |

## Marka kuralı gereği uygulanmayan paket önerileri

Aciliyet/kıtlık ("son X saat", sayaç), danışan yorumu ekleme/öne çıkarma, Review/AggregateRating schema, "ilk seans ücretsiz", "en iyi", "garanti", "tedavi", "7/24", PAS ("agitate") başlıklar, "[Rakip] alternatifi"/"vs" sayfaları, rakipten geçiş teklifi, yönlendirme ödülü, formda şikâyet/konu sorma, çıkış pop-up'ında teşvik, fiyatlı Offer schema.

## Ek bulgular (önceki raporlarda yoktu)

- `specialist-calendar-live.js` canlıda yükleniyor (`index.html`), repoda yok. `deploy-web-dist-live.ps1` IIS klasörünü silip kopyaladığı için bir sonraki deploy bu betiği sessizce kaldırabilir. Ne yaptığı ekiple teyit edilmeli.
- API'de kullanılmayan `nationalId` (T.C. kimlik no) alanı kabul ediliyor (`api/index.ts:1889`) — KVKK açısından kaldırılmalı.
- Footer "randevu platformu" diyor, Hakkımızda "pazaryeri mantığıyla değil" — konumlandırma çelişkisi.
- Profil verisi yüklenirken sayfa geçici olarak "noindex, nofollow" alıyor.

## Önceki taramalara göre doğrulananlar

29.09 taraması ve 30.09 ilk denetimdeki şu tespitler kodla düzeltildi ve bu raporda doğru hâliyle yer alıyor: randevu yolu (açık, ödemesiz), JS sonrası meta/schema (var), llms.txt/ai-catalog (yok, "geçersiz" değil), Galeri (dolu), fiyat (ziyaretçi görmüyor), stack (Express + IIS, ASP.NET değil), rakamlar (18 uzman, 10 doğrulamasız, makaleler 1–29 Ağustos), Optimum yorumları (Google 4.8/163 + dizinlerde 212), ölçüm (iç ziyaret/randevu kaydı var; Ads bağlantısı ve kaynak alanı yok).

## Ekler

- [[R4 ek - icerik]] — İçerik ve mesaj (52), önce/sonra metinler
- [[R4 ek - donusum]] — Dönüşüm (42), 8 adımlı huni, A/B hipotezleri
- [[R4 ek - rakip]] — Rekabet (44), sitemap sayımları, konumlandırma haritası
- [[R4 ek - teknik]] — SEO (41), prerender/IIS planı, schema, performans
- [[R4 ek - strateji]] — Marka/güven (43), büyüme (30), marka sesi rehberi
