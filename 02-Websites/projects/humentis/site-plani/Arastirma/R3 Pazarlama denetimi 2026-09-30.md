---
type: arastirma
client: "Humentis"
slug: humentis
status: tamamlandi
date: 2026-09-30
tags: [humentis, arastirma, pazarlama-denetimi, ai-marketing-claude]
related: ["[[seo-dongusu]]", "[[00 Humentis Site Plani (MOC)]]", "[[R2 ai-marketing-claude denemesi]]", "[[R1 Rakip analizi CAN Psikoloji]]", "[[ai-marketing-claude-paketi]]"]
---

# R3 · Pazarlama denetimi: Humentis (humentis.com.tr)

**Tarih:** 30.09.2026 · **Yöntem:** ai-marketing-claude `/market audit` (5 paralel analiz), kasaya uyarlanmış hâliyle
**İşletme türü:** Yerel hizmet işletmesi (aile danışma merkezi) + kurumsal hizmet (Çalışan Destek Programı)
**Genel pazarlama puanı: 39/100 (Not: F — kritik)**

> [!warning] Düzeltme (30.09.2026, main kodu ve canlı API ile doğrulandı)
> Bu rapor yalnızca canlı siteden yazıldı. Kodla karşılaştırınca şunlar yanlış çıktı:
> - **Randevu yolu:** "Randevu al → boş takvim → ödeme, 'prototip' notu" linksiz `/randevu/<slug>` sayfasına ait. Gerçek akış uzman kartındaki pencere; ödeme ve prototip yok, 30.09'da her uzmanda 1 Ekim'den itibaren açık saat var. Dönüşüm puanı ve yönetici özetindeki 1. sebep buna dayanıyor. Bkz. [[P0-01 Randevu akisi bos takvim]].
> - **Meta ve schema:** JS çalıştıktan sonra her rotada title/description/canonical değişiyor; profillerde Person, genel sayfalarda FAQPage schema var. Sorun yalnızca ham HTML'de.
> - **llms.txt / ai-catalog.json:** iki dosya da yok; adresler SPA HTML'ini döndürüyor.
> - **Galeri:** boş değil, 6 fotoğraf var.
> - **Fiyat:** yalnızca linksiz sayfada görünüyor; ziyaretçi sitede fiyat görmüyor ("şeffaf fiyat" avantajı fiilen yok).
> - **Stack:** ASP.NET değil, Node.js/Express + IIS.
> - Rakamlar: uzman 18, doğrulama kaydı olmayan 10, makale tarihleri 1–29 Ağustos.

> [!note] Veri kaynakları ve sınırlar
> - **Canlı site:** 30.09.2026 11:07–11:20 arası uygulamanın tarayıcısında açıldı (JavaScript çalışmış, gerçek ziyaretçinin gördüğü hâl). 15 sayfa, 16 makale, uzman API'si, sitemap/robots okundu. Form gönderilmedi.
> - **Dış veri:** PageSpeed Insights (mobil), web araması (Google değil), 4 rakip sitesi, kasadaki site planı ve 29.09 taraması, Google Ads verisi (site planından).
> - **Ölçülemeyenler:** gerçek trafik ve dönüşüm oranları (sitede ölçüm yok), Google İşletme Profili istatistikleri, Search Console. Rakip tablosundaki yıldızlı değerler tahmindir.
> - **Marka kuralları:** Humentis marka brief'inin 7. bölümü bu denetimde paketin varsayılan önerilerinden üstün tutuldu. Aciliyet, danışan yorumu, teşvik, "en iyi / tedavi / hasta / 7/24" içeren öneriler verilmedi.

---

## Yönetici özeti

Humentis'in elinde rakiplerinde olmayan gerçek farklar var: aynı çatı altında dört bölüm ve 17 uzman, sitede açık fiyat, unvan farklarını anlatan şeffaf bir Hakkımızda sayfası, "tanı koymaz" diyen bir eşleştirme akışı ve incelenen rakiplerin sitelerinde karşılığı görülmeyen bir kurumsal destek programı. Ton da marka brief'ine uygun: sakin, yargısız, kriz hizmeti olmadığını açıkça söyleyen bir site.

Ama bu farkların neredeyse hiçbiri ne danışan adayına ne de Google'a ulaşıyor. **Puanın 39 çıkmasının üç ana sebebi var:**

1. **Randevu yolu kapalı.** Reklamdan gelen 175 tıklama yaklaşık 1 temasa dönüşmüş. Mobilde sayfa 6,5 saniyede görünüyor, çerez penceresi içeriği kilitliyor, "Randevu al" ileri tarihli saati olmayan bir takvime gidiyor ve akış "talep" diye anlatılıp "ödeme" adımıyla bitiyor.
2. **Arama motoruna giden ham HTML her sayfada aynı ve boş.** Test edilen 4 adres (var olmayan bir sayfa dahil) aynı boş HTML'i, aynı başlık ve aynı canonical'la döndürüyor; Google'ın JavaScript'i çalıştırıp sayfaları ayrı ayrı dizine alması belirsiz. 17 uzman profili ve 16 makale sitemap'te yok. Kurucunun adıyla yapılan aramada Humentis'ten hiç bahsetmeyen eski kişisel sitesi çıkıyor.
3. **Sitenin kendi verisi vaatleriyle çelişiyor.** "Her uzmanın kimliği kontrol edilir" deniyor, 9 uzmanın doğrulama kaydı yok. 16 makale "yayınlanmış" görünüyor, hepsi "tam metin yakında" yazan boş sayfa. Canlı randevu ekranında "prototip" notu ve geçmiş bir tarih duruyor.

Site planı (P0–P3) bu sorunların yarısını zaten doğru tespit etmiş; bu denetim onu doğruluyor. Denetimin planda **olmayan** en önemli katkıları: boş içeriklerin ve doğrulama çelişkisinin güven etkisi, randevu akışındaki ödeme adımı, formlarda hassas veri riski, kurucunun eski sitesi ve dış listelemeler yüzünden isim trafiğinin kaçması, sitemap hataları ve iki önceliğin yükseltilmesi (P1-07 → P0, P3-15 → P1).

**En çok fark yaratacak üç adım:** (1) Randevu yolunu açmak: çerez kilidini kaldırmak, Ara/WhatsApp'ı her zaman görünür yapmak, "Randevu al"ı ödemesiz bir talep akışına ya da WhatsApp'a bağlamak. (2) Siteyi Google'a görünür yapmak: her sayfaya kendi HTML'ini ve meta bilgisini üretmek (prerender), uzman profillerini sitemap'e eklemek. (3) Vaatle veriyi eşitlemek: boş makaleleri kaldırmak, doğrulama ifadesini gerçeğe göre düzeltmek, fiyatı tek kaynaktan vermek.

**Tahmini etki:** Ölçüm olmadığı için aylık gelir hesabı yapılamıyor. Elimizdeki sayılarla: bugün 175 reklam tıklaması ≈ 1 temas (site fiyatıyla en fazla ~₺2.100 ilk görüşme geliri). Temas oranı %2–5'e ve temasların %30–50'si ilk görüşmeye çıkarsa aynı 175 tıklama **~₺1.500–9.200** ilk görüşme geliri üretir (site fiyatları ₺1.450–2.100 varsayıldı). Bu varsayımlar ölçüm kurulunca (P0-06) doğrulanmalı. Organik arama ve isimle gelen trafiğin geri kazanılması bunun dışındaki ek kazanç.

---

## Puan dağılımı

| Kategori | Puan | Ağırlık | Ağırlıklı | Ana bulgu |
|---|---|---|---|---|
| İçerik ve mesaj | 46/100 | %25 | 11,5 | Ton doğru; 16 makale boş, fark ve konum ilk ekranda yok |
| Dönüşüm | 33/100 | %20 | 6,6 | Randevu yolu kapalı; akış ödemeyle bitiyor; ölçüm yok |
| SEO ve görünürlük | 34/100 | %20 | 6,8 | Google her sayfayı aynı boş sayfa görüyor; isim aramaları başka sitelere gidiyor |
| Rekabet konumu | 36/100 | %15 | 5,4 | Farklar gerçek ama görünmüyor; temas ve hizmet sayfalarında rakipler önde |
| Marka ve güven | 50/100 | %10 | 5,0 | Güven mimarisi iyi kurulmuş, ama kendi verisiyle çelişiyor |
| Büyüme ve strateji | 40/100 | %10 | 4,0 | Tek kanal (reklam) kırık hunide; ÇDP ve uzman görünürlüğü kullanılmıyor |
| **Toplam** | | **%100** | **39/100** | |

```
İçerik ve mesaj     46  █████░░░░░
Dönüşüm             33  ███░░░░░░░
SEO ve görünürlük   34  ███░░░░░░░
Rekabet konumu      36  ████░░░░░░
Marka ve güven      50  █████░░░░░
Büyüme ve strateji  40  ████░░░░░░
```

> [!info] Neden hızlı analizden (54) düşük?
> R2'deki hızlı analiz yalnız ana sayfaya bakmıştı. Tam denetim iç sayfalara, makalelere, uzman verisine, sitemap'e ve hıza da baktı: boş içerik, SEO kabuğu ve doğrulama çelişkisi puanı aşağı çekti.

---

## Hızlı kazanımlar (bu hafta)

1. **Çerez penceresi içeriği kilitlemesin; Ara · WhatsApp · Randevu talebi alt barı her zaman görünsün.** (P0-03/04) WhatsApp hazır mesajı konu sormasın: "Merhaba, randevu hakkında bilgi almak istiyorum."
2. **"Randevu al" → takvim dolana kadar WhatsApp'a ya da ödemesiz talep formuna.** (P0-01) Header'daki metin "Randevu talebi" olsun; akış gerçekte talep, adı da öyle olsun.
3. **Açılış animasyonunu kaldır.** (P0-02) Mobil ilk görüntü 6,5 sn; bunun sebebi animasyon ile oluşturmayı engelleyen dosyaların birlikte etkisi (PSI tahmini tasarruf 4,66 sn).
4. **Canlı "prototip" metnini ve geçmiş tarihli saati kaldır; fiyatı tek kaynaktan ver.** (P0-05) Site, telefon ve WhatsApp aynı fiyatı söylesin; iptal koşulu kurum onaylayınca yazılsın.
5. **16 boş makaleyi, boş Blog/Galeri/Duyurular'ı yayından ve menüden kaldır.** (Yeni) "Tam metin yakında" yazan sayfalar hem ziyaretçiye hem Google'a "yarım site" sinyali veriyor.
6. **Hakkımızda'daki doğrulama cümlesini gerçeğe göre düzelt.** (Yeni) Önerilen ifade: "Uzman bilgileri kurum tarafından kontrol edilir; kontrolü tamamlanan profiller işaretlidir." (Genel "her uzman" iddiası, 9 kayıt tamamlanana kadar kullanılmaz.)
7. **Ana sayfa hero'suna konum ve farkı yaz; podcast bandını hero'nun altına al.** (Yeni) Örnek: üst satır "Çankaya, Ankara · Online ve yüz yüze", H1 "Yetişkin, çocuk, çift ve aile için psikolojik destek, aynı çatı altında."
8. **Google etiketi ve dönüşüm olayları.** (P0-06) Ana 4 dönüşüm: randevu talebi, iletişim formu, WhatsApp tıklaması, telefon tıklaması. Huni için ek olaylar: çerez onayı, eşleştirme başlangıç/bitiş.
9. **Çalışma saatlerini iletişim sayfasına, footer'a ve schema'ya ekle.** (Yeni) Hiçbir yerde yazmıyor.

## Stratejik öneriler (bu ay)

1. **Prerender + her sayfaya kendi title/description/canonical'ı; olmayan sayfalar gerçek 404.** P1-07 SEO açısından P0 önceliğinde, P3-15 (soft 404) aynı işle çözüldüğü için P1'e çekilmeli. Diğer bütün SEO işleri buna bağlı.
2. **Randevuyu iki adımlı, ödemesiz talebe çevir.** 1) görüşme biçimi + uygun gün aralığı, 2) ad, telefon, iletişim tercihi, KVKK onayı. Onay metni: "Mesai saatleri içinde sizi arayıp uygun saati birlikte belirleyeceğiz." Ödeme, saat netleşince.
3. **Formlardan hassas veri riskini kaldır.** Eşleştirmenin ilk sorusu "Kimin için destek arıyorsunuz?" olsun (konu seçimi yalnız tarayıcıda, kayda ve URL'ye yazılmadan). İletişim formu 4 alana insin, mesaj isteğe bağlı ve üstünde "sağlık bilgisi paylaşmayın" notu olsun. 5 adımlı eşleştirmenin bitişte ne yaptığı doğrulanmalı.
4. **İsim trafiğini geri al.** 17 statik uzman profili sitemap'e (P1-09/10); kurucunun eski sitesi psikologelifsilav.com.tr → Humentis profiline 301 ya da en azından "Humentis bünyesinde" + link; Doktortakvimi, Doktorsitesi, ankarapsikolog.org.tr kayıtlarında kurum adı, adres ve link; başka merkezdeki listeleme için kurucuya danış. Aynı kontrol 17 uzman için. Ads'te A1 (marka + uzman adı grubu) bununla birlikte açılsın.
5. **Sitemap temizliği.** 17 profil + yayınlanan makaleler eklensin; /sss ve /kriz-destegi gerçek sayfa olsun ya da çıkarılsın (kriz sayfası 112 yönlendirmesiyle gerçek bir sayfa olarak değerli); /merkez → /iletisim 301; /makaleler ve /icerik/makaleler tekilleştirilsin.
6. **Marka kuralı temizliği (P2-14'ün metin ayağı).** Ana sayfadaki Google yorum bandı brief §7 ile çelişiyor ("oğlumun kıskançlığı ciddi azaldı" gibi sonuç ifadeleri); öneri kaldırılması, nihai karar Humentis'in. Profillerdeki "tedavi" kelimesi ve tanı adlarıyla yazılan uzmanlık etiketleri hukuki/klinik dil incelemesinden geçsin.
7. **Bölüm sayfalarına giriş metni ve "yaşam temaları" iç linkleri.** Her bölümün altında bugün yalnız "Bu bölümdeki uzmanlar" yazıyor; 24 tema başlığı link değil. Önce 4 bölüm, sonra öncelikli 6–8 tema (arama hacmi Search Console/Ads verisiyle doğrulanmalı) için hizmet sayfası (P1-08).

## Uzun vadeli girişimler (bu çeyrek)

1. **Uzman imzalı içerik (E-E-A-T).** Her yazı adıyla bir uzman tarafından yazılsın, ikinci bir uzman incelesin, "son güncelleme" tarihi ve Person/Article schema'sı olsun. Ayda 2–4 gerçek yazı; konu kaynağı 24 yaşam teması. Sağlık, Google'ın en sıkı baktığı alan; imzasız ya da boş içerik sıralamada geri kalır.
2. **Uzman profil standardı.** Doğrulama belgesi, 1 ile 8–10 arası uzmanlık etiketi, deneyim yılı, fotoğraf, klinik dil kontrolü ve güncel müsaitlik tamamlanmadan profil yayına alınmasın.
3. **Kurumsal ÇDP'yi ikinci gelir hattı yapmak.** Teklif dokümanı, pilot kurum süreci, İK'ya yönelik atölye başlıkları ve ayrı talep ölçümü. Rakiplerde karşılığı görülmedi.
4. **Yerel görünürlük.** Google İşletme Profili (G1), adresin tek biçimde yazılması (bugün 3 farklı yazım: "2159 CAD.", "2159. Cad.", "2159. Sk."), dizin profillerinin tutarlı hâle gelmesi.
5. **Online hizmetle Türkiye geneli.** Tüm kadro online görüşme yapıyor; ayrı bir online görüşme sayfası ve konumlandırma.

---

## Site planıyla karşılaştırma

| Denetim bulgusu | Site planında | Durum |
|---|---|---|
| Boş takvim, animasyon, çerez kilidi, Ara/WhatsApp, fiyat/prototip, ölçüm | P0-01…P0-06 | **Doğrulandı**: boş takvim, prototip metni ve ölçüm yokluğu 30.09'da teyit edildi; animasyon, çerez kilidi ve telefon fiyatı 29.09 verisine dayanıyor |
| Prerender + route bazlı meta | P1-07 | Doğrulandı, **P0'a yükseltilmeli** |
| Soft 404 | P3-15 | Doğrulandı, **P1'e çekilmeli** |
| Hizmet sayfaları, uzman profilleri, sitemap + Search Console | P1-08/09/10 | Doğrulandı; sitemap'teki bozuk ve yinelenen URL'ler **eklenmeli** |
| Schema ve NAP | P2-11 | Doğrulandı; Person, FAQPage, BreadcrumbList, çalışma saatleri **eklenmeli**; adres 3 farklı yazımda |
| İçerik ve GEO | P2-12 | Doğrulandı; önce **16 boş makalenin kaldırılması** gerekiyor |
| Mevzuat kontrolü | P2-14 | Metin düzeyinde tarama **eklenmeli** (yorum bandı, "tedavi", tanı etiketleri) |
| Doğrulama vaadi ↔ 9 eksik kayıt | — | **Yeni** |
| Randevu akışında ödeme adımı ("talep" ↔ "ödeme") | — | **Yeni** |
| Eşleştirme/iletişim formunda hassas veri riski | — | **Yeni** |
| Kurucunun eski sitesi ve dış listelemeler | — | **Yeni** |
| Çalışma saatleri yok | — | **Yeni** |
| Fiyat politikası, ÇDP stratejisi, KPI planı, uzman profil standardı | — | **Yeni** |
| Güvenlik başlıkları, görsel optimizasyonu, llms.txt | — | **Yeni** (düşük öncelik) |

---

## Rakip karşılaştırması

| Boyut (1–10) | Humentis | CAN | Yaşam | Vivere | Optimum |
|---|---|---|---|---|---|
| Başlık netliği | 5 | 8 | 7 | 9 | 6 |
| Değer önerisi | 6 | 5 | 6 | 6 | 5 |
| Güven sinyalleri | 5 | 7* | 6* | 7 | 8 |
| Temas kolaylığı | 3 | 9 | 9 | 8 | 9 |
| Hizmet sayfaları | 2 | 9 | 8 | 7 | 5* |
| İçerik derinliği | 2 | 8* | 5* | 4 | 4* |
| Yerel/harita görünürlüğü | 2* | 9 | 5* | 6* | 8 |
| Mevzuat uyumu | 7 | 3 | 5 | 8 | 3 |
| **Toplam (/80)** | **32** | **58** | **51** | **55** | **48** |

\* Tahmin. CAN verileri 29.09 tarihli R1 analizine dayanıyor (sayfa bu oturumda açılamadı). Humentis'in en güçlü kalemi mevzuat uyumu (Vivere ile birlikte en temiz iki siteden biri); yorum bandı ve profil dili düzeltilince bu üstünlük netleşir.

---

## Tahmini etki özeti

| Öneri | Beklenen etki | Güven | Süre |
|---|---|---|---|
| Randevu yolunu açmak (çerez, sabit bar, talep akışı) | Temas oranı ~%0,6 → %2–5 (varsayım) | Orta | 1 hafta |
| Açılış animasyonunu ve engelleyen dosyaları düzeltmek | İlk görüntü ~6,5 sn → belirgin kısalma | Orta-yüksek | 1 saat – 1 gün |
| Prerender + meta + sitemap | Profil ve bölüm sayfalarının dizine girmesi; isimle aramalarda görünürlük | Yüksek | 2–4 gün |
| İsim trafiğini geri almak | İsimle aramaların (reklam terimlerinin 177/524'ü bir psikoloğun adı) Humentis profillerine inmesi | Orta | 2–4 hafta |
| Boş içeriği kaldırmak, doğrulamayı düzeltmek | Güven kaybının durması (ölçülemez) | Yüksek | 1–2 gün |
| Uzman imzalı içerik | Organik görünürlük (3–6 ayda) | Orta | Sürekli |

Parasal karşılık: 175 tıklama başına ~₺1.500–9.200 ilk görüşme geliri (bugün site fiyatıyla ≤ ~₺2.100; telefonda söylenen ₺3.000+ fiyat geçerliyse rakamlar yükselir). Aylık tıklama sayısı ve gerçek dönüşüm oranı ölçüm kurulunca hesaplanabilir.

---

## Sonraki adımlar

1. P0'ları (P0-01…P0-06) ve bu raporun "hızlı kazanımlar"ını birlikte canlıya almak; bunlar bitmeden reklam bütçesi artırılmasın.
2. Prerender işini (P1-07) P0 önceliğine almak ve sitemap'i düzeltmek.
3. Kurucuyla eski site ve dış listelemeler konusunu konuşmak; A1 reklam grubunu bununla birlikte açmak.
4. Search Console, Bing ve ölçüm kurulunca haftalık SEO döngüsünü başlatmak (Ek: Haftalık SEO döngüsü).

Önerilen devam komutları (kasada Claude Code ile): `/market copy` (bölüm ve profil metinleri), `/market funnel` (ölçüm kurulduktan sonra huni oranları), `/market competitors` (CAN verisinin güncellenmesi).

## Ek: Haftalık SEO döngüsü (Refix makalesinden uyarlama)

Furkan Bey'in paylaştığı Neil Agarwal (@regalstreak) makalesindeki yöntem ("oku → düzelt → yaz → ölç") bu raporun SEO önerilerini **nasıl sürdürüleceği** açısından tamamlıyor. Yöntemin tamamı: [[seo-dongusu]]. Makale yazarın kendi ürünü Refix'i tanıtıyor ve "2 haftada 47 kat" iddiası doğrulanmadı; yöntem elle, ücretsiz araçlarla uygulanabilir.

**Ön koşullar (bu rapordaki öneriler):** Search Console + Bing (P1-10), prerender ve sayfa başına canonical (P1-07), açılış sayfasına göre dönüşüm ölçümü (P0-06). Bunlar olmadan döngünün "oku" ve "ölç" adımları çalışmaz.

**Humentis'e eklenecekler**

| # | Makaledeki ilke | Humentis'te karşılığı | Öncelik |
|---|---|---|---|
| 1 | Yönlendirmeleri önce düzelt (307 değil 301/308; yanlış canonical) | /merkez → /iletisim, /makaleler ve /icerik/makaleler → tek adres, /icerik/mesimsel-depresyon → düzeltilmiş adres, kurucunun eski sitesi → profil: hepsi **301**. Tüm sayfaların ana sayfayı canonical göstermesi aynı dersin ağır hâli (P1-07). | P0/P1 |
| 2 | Tıklamayı sonuca bağla: dönüşümü ilk açılış sayfasına göre kır | GA4'te "açılış sayfası" boyutu × randevu talebi / WhatsApp / telefon olayları. Aylık KPI tablosuna "sayfa bazında tıklama → temas" satırı eklenir. 400 tıklayıp temas getirmeyen sayfa "sızıntı" sayılır. | P0-06 ile |
| 3 | Search Console'da 6 sinyali haftalık oku | Haftalık kontrol: sıralaması 3–20 olan marka dışı sorgular; 500+ gösterim ve %0,5 altı tıklama oranı; haftalık %30 düşüş; hiçbir sayfanın hedeflemediği sorgular; sayfa ile niyeti uyuşmayan sorgular; 7+ kelimelik sorgular. n8n'deki haftalık Search Console raporu akışına filtre olarak eklenebilir ([[otomasyon-secilmis-akislar]]). | Search Console kurulunca |
| 4 | Yazmadan önce düzelt | Önce uzman profilleri ve bölüm sayfaları: sorgu hangi sayfada görünüyorsa title, H1, ilk cümle ona göre. Yeni sayfa ancak sorgu mevcut sayfaya sığmıyorsa. | P1 |
| 5 | Yapay zekânın baktığı yere yaz: 7+ kelimelik sorgular | Search Console filtresi `(\b\w+\b\s){7,}`. Boş 16 makale yerine gerçek uzun sorgulara ("eşimle sürekli aynı konuda tartışıyoruz ne yapmalıyım" tipi) cevap veren, uzman imzalı yazılar. | P2-12 ile |
| 6 | Bing + IndexNow | Bing Webmaster Tools doğrulaması (P1-10'da var) + her yayında IndexNow bildirimi (P1-10'a eklendi). ChatGPT araması ve Copilot kısmen Bing indeksinden besleniyor. | P1 |
| 7 | Kötü anahtar kelimeyi yazmadan ele | Yazmadan önce arama sonucuna bakılır; sonuçlarda psikiyatri/ilaç, iş ilanı ya da test siteleri çıkıyorsa o sorgu için sayfa yazılmaz. Hacim sadece sırayı belirler. | Sürekli |
| 8 | Küçük partilerle yayın | Uzman profilleri ve yazılar 3–5'lik partilerle; her partiden sonra Search Console "Sayfalar" raporunda dizine girme izlenir. Günde çok sayfa basmak "keşfedildi, dizine eklenmedi"de bırakabilir. | P1–P2 |
| 9 | En iyi sayfa en zayıfı taşısın | Tıklama alan sayfadan (ör. en çok aranan uzman profili) ilgili ama takılı kalmış bir bölüm/tema sayfasına link; ayda bir döndürülür. "Yaşam temaları" iç link önerisiyle birlikte. | P2 |

**Humentis kuralları bu döngüde de geçerli:** "yanlış niyet" sinyali bir sorgu için test ya da tanı sayfası istese bile yazılmaz; başlıklara sorgu ne olursa olsun "tedavi", "en iyi" ya da aciliyet girmez. Refix gibi üçüncü taraf araçlar, sağlık verisi ve KVKK açısından incelenmeden siteye ya da Search Console'a bağlanmaz.

---

# Ayrıntılı analiz

Aşağıdaki bölümler beş analizin tam metnidir. Kanıtlarda geçen (01), (02), (03) atıfları veri notuna işaret eder: [[R3 veri - 2026-09-30]] (01 canlı site, 02 dış veri; 03 marka brief ve site planı).


## 1. İçerik ve mesaj

**Puan: 46/100.** Sitenin sesi doğru (sakin, yargısız, "tanı koymaz" dili var), ama içerik vitrin kadar: 16 makalenin 16'sı boş, bölüm sayfalarında açıklama yok, ana sayfa "neden Humentis" sorusunu cevaplamıyor ve bazı canlı metinler marka kurallarıyla çelişiyor.

| Boyut | Puan | Kısa gerekçe |
|---|---|---|
| Başlık netliği | 6/10 | Anlaşılır ama genel; Ankara/Çankaya ve "aynı çatı" farkı yok |
| Değer önerisi | 4/10 | En güçlü fark Hakkımızda'da gömülü; vaatler verilerle çelişiyor |
| İkna gücü | 5/10 | Ton doğru, ama itirazlara (fiyat, gizlilik, süreç) ana sayfada az yanıt |
| İçerik derinliği | 2/10 | Makale, blog, galeri, duyuru boş; bölümler tek satır |
| Çağrı (CTA) | 6/10 | "Uzmanları incele / Kısa eşleştirme" iyi; "Randevu al" boş takvime gidiyor |

### Bulgular

#### Güçlü yanlar
- **Ton marka brief'iyle uyumlu.** Eşleştirme: "Bu seçim tanı koymaz… Yanıtlarınız… kayıt altına alınmaz."; SSS: "Humentis bir acil yardım veya kriz müdahale hizmeti değildir."; Kurumsal: "Seans içeriği kuruma aktarılmaz". Bunlar güven veren, kural uyumlu cümleler.
- **Unvan açıklaması ve gizlilik taahhüdü** (Hakkımızda: Uzman / Klinik Psikolog / PDR farkı; "Pazarlama izni ayrı onam, varsayılan kapalı") incelenen rakip ana sayfalarında gözlenmeyen, şeffaflık odaklı içerik.
- **Kapanış CTA'sı** "Size uygun psikoloğu bulun ve randevu talebi gönderin." net, ancak emir kipinde; daha sakin bir alternatif Dönüşüm bölümünde önerildi.
- **Uzman biyografileri dolu** (1.003–5.803 karakter) — ham malzeme var.

#### Eksikler
1. **Boş içerik yayında.** "16 makalenin 16'sı da boş: 'Bu makale Humentis uzmanları tarafından hazırlanmaktadır. Tam metin yakında yayınlanacaktır.'" Ayrıca /icerik/blog "Henüz yayınlanmış blog yazısı bulunmuyor", Duyurular ve Galeri boş. Site planı P2-12 "ilk 10 yazı"yı öngörüyor ama boş sayfaların *şu an* menüde görünmesini ele almıyor; bu "yarım site" izlenimi doğrulanmış uzmanlık vaadini zayıflatıyor. Slug hatası da var: "/icerik/mesimsel-depresyon".
2. **Vaat ile veri çelişiyor.** Hakkımızda: "Kadrodaki her uzmanın kimlik bilgisi kurum tarafından kontrol edilir." — oysa "9 uzmanda kurum doğrulama kaydı 0". Marka vaadi "gerçek müsaitlik" — oysa "İLERİ TARİHLİ SLOT 0" (P0-01 ile örtüşüyor). Randevu ekranında "bu prototipte gösterilmektedir" metni (P0-05 ile örtüşüyor). Site planı doğrulama kaydı çelişkisini hiç anmıyor.
3. **Canlı metinde marka kuralı ihlalleri.** Elif Silav profili: "psikoterapiyi sadece bir tedavi süreci olarak değil"; uzmanlık listesi: "Kaygı Bozuklukları (Genel Anksiyete, Panik Atak, OKB)", "Depresyon". Kural: "teşhis/tedavi vaadi yok", "'tedavi' … kullanılmaz". P2-14 genel "mevzuat kontrolü" diyor; metin düzeyinde tarama planda yok.
4. **Google yorumları (tespit, karar müşterinin).** Ana sayfada 7 adet 5 yıldızlı yorum kayan bantta; biri sonuç anlatıyor: "oğlumun kıskançlığı ciddi azaldı", bir diğeri "Sınav sürecinde bana çok yardımcı oldu." Brief: "Danışan yorumu, önce-sonra hikâyesi, sonuç vaadi önerilmez." Yani mevcut bölüm brief ile çelişiyor. Kaldırmak ya da en azından sonuç ifadesi içerenleri çıkarmak müşterinin kararıdır; yeni yorum eklenmesi önerilmez.
5. **Farklılaşma gömülü.** Brief'teki fark "yetişkin, çocuk, ergen, çift, aile aynı çatı altında" ana sayfada yok; en güçlü cümle "Pazaryeri mantığıyla değil…" yalnız Hakkımızda'da. Ana sayfadaki "Sabit kurum modeli" başlığı ise ziyaretçi için jargon.
6. **Hero geç görünüyor ve konum yok.** Sıra: header → sekmeler → "Podcast/Spotify bandı" → hero. H1 "Psikolojik destek için doğru uzmanı bulun." Ankara/Çankaya geçmiyor; rakip Vivere H1'i "Ankara Psikolog ve Aile Danışmanlığı" diye açıyor.
7. **Meta metinler zayıf ve tek tip.** Title her sayfada "Özel Humentis Aile Danışma Merkezi"; description "Randevu İçin — Psikolog ve Aile…" ile bozuk bir cümleyle başlıyor ve "Ankara" içermiyor. (Route bazlı meta P1-07'de; aşağıda metin önerisi var.)
8. **Bölüm sayfaları içeriksiz.** "Her birinin altında yalnız 'Bu bölümdeki uzmanlar' linki"; "~24 konu adı … hiçbiri sayfa/link değil". P1-08 ayrı landing sayfalarını planlıyor; bölüm sayfasının kendi giriş metni planda yok.
9. **Uzman ↔ kurum bağı dışarıda kopuk.** Kurucunun kendi sitesi "Humentis'ten hiç bahsetmiyor"; aynı uzman başka merkezde de listeleniyor.

### Öneriler

#### Yüksek
**Y1 — Boş makaleleri hemen yayından çek (P2-12'yi hızlandırır).** 16 boş sayfayı ve boş Blog/Duyurular/Galeri menü öğelerini, içerik hazır olana kadar gizle. Sonra yazıları gruplar hâlinde yayınla; her yazıda gerçek yazar (uzman adı + unvan), gözden geçirme tarihi, kriz notu ve ilgili bölüm/uzman bağlantısı olsun. Konu kaynağı hazır: bölüm sayfasındaki 24 "yaşam teması". Slug'ı "mevsimsel-depresyon" olarak düzelt.
- Önce: "Bu makale Humentis uzmanları tarafından hazırlanmaktadır. Tam metin yakında yayınlanacaktır." · Yazar: "Humentis Uzman Ekibi"
- Sonra (giriş örneği): "Kış yaklaşınca enerjiniz düşüyor, sabahları kalkmak zorlaşıyor mu? Bu yazıda mevsim geçişlerinin ruh hâlimize nasıl yansıyabildiğini ve ne zaman bir uzmanla konuşmayı düşünebileceğinizi sade bir dille anlatıyoruz." · Yazar: "[Uzman adı], [unvan]"

**Y2 — Ana sayfa hero'su: konum + "aynı çatı" farkı, soru ile açılış.** Podcast bandını hero'nun altına al.
- Önce: H1 "Psikolojik destek için doğru uzmanı bulun." / "Uzmanlarımızı, bölümlerimizi ve görüşme biçimlerini tek yerde inceleyin."
- Sonra: Üst satır "Çankaya, Ankara · Online ve yüz yüze" / H1 "Yetişkin, çocuk, çift ve aile için psikolojik destek, aynı çatı altında." / Alt: "Konuşmak için büyük bir sebep gerekmez. 17 uzmanımızın alanlarını ve unvanlarını inceleyin, size uygun olanla kendi temponuzda görüşme planlayın." / CTA: "Uzmanları incele" · "Size uygun uzman (5 soru)"
- Neden: Konum ve fark ilk ekranda; ton brief'teki "kapımız açık, acelesi yok" ile uyumlu. ("Hemen randevu al" gibi aciliyet dili marka kuralı gereği önerilmedi.)

**Y3 — Vaat ile veriyi eşitle.** 9 uzmanın doğrulama kaydı tamamlanana kadar "Kadrodaki her uzmanın kimlik bilgisi kurum tarafından kontrol edilir." cümlesini ya doğrula ya da gerçeği yansıtan şu ifadeye çevir: "Uzman bilgileri kurum tarafından kontrol edilir; kontrolü tamamlanan profiller işaretlidir." (Genel "her uzman" iddiası, 9 kayıt tamamlanana kadar kullanılmaz.)

**Y4 — Teşhis/tedavi dilini metin düzeyinde tara (P2-14'ün içerik ayağı).**
- Önce: "psikoterapiyi sadece bir tedavi süreci olarak değil" → Sonra: "psikoterapiyi yalnızca bir destek süreci olarak değil"
- Önce: "Kaygı Bozuklukları (Genel Anksiyete, Panik Atak, OKB)", "Depresyon" → Sonra (eşleştirme sayfasının diliyle tutarlı): "Kaygı ve panik yaşantıları", "Depresif hissetme, isteksizlik". Klinik terimlerin uzman listesinde kalıp kalmayacağı hukuki incelemeyle kararlaştırılmalı.

#### Orta
**O1 — Meta title/description (P1-07 için metin).**
- Önce: title "Özel Humentis Aile Danışma Merkezi"; description "Randevu İçin — Psikolog ve Aile Danışmanlarının Bir Arada Olduğu Deneyimli Uzmanlarımız…"
- Sonra: title "Ankara Çankaya Psikolog ve Aile Danışmanlığı | Humentis"; description "Çankaya'da psikolog ve aile danışmanlarından oluşan 17 kişilik kadro. Yetişkin, çocuk-ergen, çift ve aile için online ve yüz yüze görüşme. Uzmanları inceleyin."
- Uzman sayfası kalıbı: "[Ad Soyad], [Unvan] – Ankara Çankaya | Humentis".

**O2 — Bölüm sayfası girişleri (P1-08 landing'lerinden bağımsız, bölüm sayfasının kendisi için).**
- Önce: yalnız "Bu bölümdeki uzmanlar"
- Sonra (Çift, Aile ve Evlilik): "Aynı konular üzerinde dönüp duruyor gibi mi hissediyorsunuz? Bu bölümde çiftler ve aileler, iletişimde tıkanan noktaları bir uzmanla birlikte keşfeder. Görüşmeler online ya da Çankaya'daki merkezimizde yapılır; kaç görüşme gerektiği ilk görüşmede birlikte konuşulur."
- 24 yaşam temasını ilgili yazıya veya bölüme bağla.

**O3 — Uzman profil girişi: 2 cümlelik özet.** Uzun özgeçmişin üstüne standart bir giriş koy.
- Önce: doğrudan uzun özgeçmiş (üniversite, stajlar, eğitimler).
- Sonra: "[Ad Soyad], [unvan]. [Yaş aralığı] ile [2–3 alan] konularında, [yaklaşım] ile çalışır. Online ve Çankaya'daki merkezimizde görüşme yapar." Uzmanların dış sitelerinde Humentis bağlantısının yer alması da tutarlılık için konuşulmalı.

**O4 — "Pazaryeri mantığıyla değil" farkını ana sayfaya taşı.** "Sabit kurum modeli" başlığı yerine: "Bir liste sitesi değiliz: uzmanlarımızla aynı kurumda, aynı ilkelerle çalışıyoruz." (Dış listelemelerle çelişmediği teyit edildikten sonra.)

#### Düşük
**D1 — Google yorumları için karar notu** (öncelik Yüksek'e çekildi, bkz. Yönetici özeti ve Stratejik öneri 6). Müşteriye iki seçenek sun: bölümü kaldırmak ya da sonuç ifadesi içeren yorumları ("kıskançlığı ciddi azaldı") çıkarmak. Yerine güven unsuru olarak zaten var olan ya da uyarlanabilecek cümleler kullanılabilir: "Seans içeriği kuruma aktarılmaz" (Kurumsal sayfa; bireysel görüşmeler için "görüşme içeriği gizli tutulur" gibi uyarlanabilir), unvan açıklamaları, "Bu seçim tanı koymaz".

**D2 — Kriz notunu görünür kıl.** /kriz-destegi linklenmiyor ve ana sayfayı açıyor. Brief'in kriz protokolüne göre kısa bir sayfa ya da footer notu hazırla (ör. "Humentis acil yardım hizmeti değildir. Acil bir durumda 112'yi arayın."). "7/24" türü ifade marka kuralı gereği önerilmedi.

**D3 — CTA dili.** Header/kartlardaki "Randevu al" → "Randevu talebi gönder" (sürecin gerçekte "talep" olduğunu anlatan, ana sayfadaki "Üç adımda randevu talebi gönderin" ile tutarlı ifade).


## 2. Dönüşüm

**Puan: 33/100**

Gerekçe (boyut puanları, ağırlıklı): CTA stratejisi 3/10 (×2,5) · Sosyal kanıt / güven kanıtı 4/10 (×1,5) · Sürtünme 2/10 (×3) · Güven sinyalleri 4/10 (×2) · Sakin davet uyumu 5/10 (×1; aciliyet/kıtlık marka kuralı gereği puanlanmadı, yerine "acele ettirmeyen davet" ölçüldü) → 32,5 ≈ 33 (yarım yukarı yuvarlandı). Kurumsal çerçeve (Hakkımızda'daki unvan açıklamaları, "Seans içeriği kuruma aktarılmaz", SSS'teki "acil yardım veya kriz müdahale hizmeti değildir") iyi; ancak ana dönüşüm yolu fiilen kırık: "Ads'ten 175 tıklama ≈ 1 temas".

### Bulgular

**Site planını doğrulayan bulgular (P0-01…P0-06 — yeni keşif değil, teyit):** takvimde "İLERİ TARİHLİ SLOT 0"; tek seçilebilir gün "3 Eylül Perşembe" (geçmiş); "…bu prototipte gösterilmektedir"; çerez penceresinde "içerik tıklanamaz (inert) ve Ara/WhatsApp barı görünmüyor"; mobil "FCP 6,5 sn"; "gtag/dataLayer/GTM yok". Hepsi doğrulandı; aşağıdakiler planda **eksik** olanlar.

1. **Eşleştirme ilk adımda özel nitelikli veri soruyor (KVKK).** "Şu sıralar sizi en çok zorlayan konu hangisi?" seçenekleri: "depresif hissetme", "travmatik yaşantılar", "cinsel yaşam". Sayfa "Yanıtlarınız… kayıt altına alınmaz" diyor; ancak 5 adımın nasıl bittiği (talep mi oluşuyor, sonuç URL'ye mi yazılıyor, form mu açılıyor) dosyalarda görünmüyor — **bitiş durumu doğrulanmalı**. Marka kuralı: "Randevu/WhatsApp akışlarında şikâyet/tanı kayda geçmez." Aynı risk İletişim formunda: "konu, mesaj" serbest metin alanları yönlendirme olmadan şikâyet toplamaya açık.
2. **Randevu akışı "talep" diye anlatılıp "ödeme" ile bitiyor.** Ana sayfa: "Üç adımda randevu talebi gönderin… ekibimiz sizinle iletişime geçer." Gerçek akış: "Saat → Bilgiler → Ödeme". "Aslında çok da büyük bir şeyim yok" diyen birincil kitle için ilk temasta ödeme en ağır sürtünme; mesaj–akış tutarsızlığı da güveni düşürüyor. P0-01'in geçici çözümü (WhatsApp) takvim sorununu kapatır, ödeme adımını kapatmaz.
3. **İlk 10 saniye (mobil, reklamdan gelen ziyaretçi):** ~6,5 sn boş ekran → çerez penceresi (içerik kilitli) → onaydan sonra sıra "header → sekmeler → Podcast/Spotify bandı → hero". H1 "Psikolojik destek için doğru uzmanı bulun." konum söylemiyor ("Ankara/Çankaya" yok); iki CTA "Uzmanları incele", "Kısa eşleştirme" — hiçbiri temas değil. Podcast bandı ziyaretçiyi hero'dan önce siteden dışarı (Spotify) yönlendiriyor.
4. **İsimle arayan ziyaretçi için yol yok.** "524 terimin 177'si doğrudan bir psikoloğun adı"; ancak profil sayfaları sitemap'te yok, arama "psikologelifsilav.com.tr … Humentis'ten hiç bahsetmiyor" ve aynı WhatsApp numarası üzerinden Doktortakvimi'ne gidiyor. Reklamın hangi sayfaya indiği dosyalarda yok — doğrulanmalı. Talep Humentis dışında dönüşüyor olabilir.
5. **CTA yakınındaki "kanıt" marka kuralına aykırı.** Ana sayfada "GOOGLE — Danışan yorumları": "oğlumun kıskançlığı ciddi azaldı", "Sınav sürecinde bana çok yardımcı oldu" — sonuç ifadesi içeren danışan yorumu. Marka kuralıyla çelişiyor → kaldırılması önerilir (nihai karar Humentis'in); yerine süreç temelli güven sinyali konabilir.
6. **Güven iddiası veriyle çelişiyor.** Hakkımızda "her uzmanın kimlik bilgisi kurum tarafından kontrol edilir"; API'de "9 uzmanda kurum doğrulama kaydı 0". Vaat "kontrol edilmiş uzman bilgileri" olduğu için bu en riskli güven açığı.
7. **Boş sayfalar menüde.** 16 makalenin 16'sı "Tam metin yakında yayınlanacaktır", Galeri "görsel yok", Duyurular boş, Blog boş; menüde ayrıca Staj/Kariyer. Karar aşamasındaki ziyaretçi boş sayfaya düşüyor.
8. **Beklenti bilgisi eksik:** "Çalışma saatleri yazmıyor"; formda yanıt süresi yok; fiyat yalnız randevu özetinde ("50 dk · ₺1.850"), profil kartında değil.

### Huni (reklam tıklaması → temas)

1. **Reklam tıklaması** (175) → açılış sayfası belirsiz; isimle aramaya özel sayfa yok. *Kayıp: orta-yüksek.*
2. **Yükleme** — 6,5 sn FCP (yavaş 4G). *Kayıp: yüksek (en büyük tek bekleme).*
3. **Çerez penceresi** — içerik inert, Ara/WhatsApp gizli. *Kayıp: yüksek.*
4. **İlk ekran** — podcast bandı, konumsuz H1, temas içermeyen CTA'lar. *Kayıp: orta.*
5. **Uzman seçimi / eşleştirme** — ilk soru hassas konu; bitişi belirsiz. *Kayıp: orta.*
6. **"Randevu al" → takvim** — ileri tarihli slot 0, geçmiş tarih, "prototip" notu. *Kayıp: kritik (yol burada biter).*
7. **Bilgiler → Ödeme** — ilk temasta ödeme. *Kayıp: yüksek.*
8. **Temas** (≈1) — yedek yol yalnız sabit bar (çerez onayından sonra) ve 6 alanlı İletişim formu.

Ölçüm olmadığı için adım bazlı oranlar bilinmiyor; kayıp dereceleri niteliksel.

**Etki tahmini (yalnız verilen sayılarla):** Bugün 175 tıklama ≈ 1 temas (~%0,6). *Varsayım A:* düzeltmelerle temas oranı %2–5 → 175 tıklamada 3,5–8,75 temas. *Varsayım B:* temasın %30–50'si ilk görüşmeye döner → ~1–4,4 görüşme × ₺1.450–2.100 = **175 tıklama başına ~₺1.500–9.200** ilk görüşme geliri (bugün ≤ ~₺2.100). Varsayımlar ölçümle (P0-06) doğrulanmalı.

### Öneriler

#### Yüksek
- **Randevuyu "talep"e çevir, ödemeyi kaldır.** Önce: Saat → Bilgiler → Ödeme. Sonra: 2 adım — (1) görüşme biçimi (Online / Yüz yüze) + uygun gün aralığı (hafta içi sabah/öğleden sonra/akşam); (2) ad, telefon, iletişim tercihi (Arama/WhatsApp), KVKK aydınlatma onayı. Onay metni: "Talebiniz bize ulaştı. Mesai saatleri içinde sizi arayıp uygun saati birlikte belirleyeceğiz." Ödeme, saat netleşince.
- **Form alanlarından şikâyet/tanıyı çıkar.** İletişim formu önce: ad, e-posta, telefon, konu, mesaj, KVKK (6). Sonra: ad, telefon *veya* e-posta, tercih edilen iletişim yolu, KVKK (4); mesaj alanı isteğe bağlı, üstünde: "Lütfen burada yaşadığınız konuyu ya da sağlık bilgisi paylaşmayın; bunları görüşmede konuşabiliriz."
- **Eşleştirme:** ilk adımı hassas konudan tercih sorusuna çevir. Önce: "Şu sıralar sizi en çok zorlayan konu hangisi?" Sonra: "Kimin için destek arıyorsunuz? Kendim / Çocuğum / Çiftimizle / Ailemizle" → "Görüşme biçimi?" → yaş grubu. Tema seçimi tutulacaksa yalnız istemcide, hiçbir talebe/URL'ye yazılmadan; bitiş ekranı uzman listesi + sakin CTA.
- **Çerez penceresi kilitlemesin, sabit bar hep görünsün** (P0-03/04'e ek somut hâl): Önce: onaysız bar yok. Sonra: alt sabit bar her zaman — "Ara" · "WhatsApp'tan yazın" · "Randevu talebi". WhatsApp hazır mesajı: "Merhaba, randevu hakkında bilgi almak istiyorum." (konu sormaz).
- **Danışan yorumları bandı:** brief §7 ile çelişiyor; kaldırılması önerilir (nihai karar Humentis'in). Yerine CTA yanında: "Uzman bilgileri kurum tarafından kontrol edilir; kontrolü tamamlanan profiller işaretlidir." (Genel "her uzman" iddiası, 9 kayıt tamamlanana kadar kullanılmaz.)

#### Orta
- **CTA metinleri:** Header "Randevu al" → "Randevu talebi"; hero ikincil CTA eklensin: "Önce konuşmak isterseniz: 0552 898 95 45". Kapanış: "Size uygun psikoloğu bulun ve randevu talebi gönderin." → "Hazır hissettiğinizde buradayız. Kapımız açık, acelesi yok." + "Randevu talebi" butonu. "Hemen randevu al" türü emir/aciliyet kullanılmaz.
- **Hero'yu öne al, konumu yaz:** podcast bandını hero'nun altına indir; alt başlık: "Ankara Çankaya'da yüz yüze, tüm kadroyla online destek."
- **İsimle arama için:** reklam ve arama ziyaretçisini ilgili uzman profiline indir (P1-09 ile birlikte); profil kartında fiyat ve süre ("50 dk · ₺1.850 · online ve yüz yüze aynı") CTA'nın hemen üstünde — P0-05 netleşince.
- **Beklenti:** çalışma saatleri ve "Talepleri mesai içinde yanıtlıyoruz" ifadesi iletişim, footer ve form onayında. CTA altında: "Bir acil yardım veya kriz hizmeti değiliz; acil durumda 112'yi arayın."

#### Düşük
- Boş Makaleler/Galeri/Duyurular/Blog'u içerik gelene dek menüden gizle; Staj/Kariyer'i footer'a taşı.
- Ölçüm kurulunca (P0-06) olaylar: `talep_gonder`, `iletisim_formu`, `whatsapp_tik`, `tel_tik` (4 ana dönüşüm) + huni için `cerez_onay`, `eslestirme_basla/bitir`; huni oranları bu listeye göre raporlanmalı.

**A/B hipotezi (ölçüm sonrası):** Hero'ya "Önce konuşmak isterseniz: [telefon]" ikincil CTA eklenirse tel_tik oranı artar, çünkü karar anında düşük bağlılıklı ilk adım sunar.


## 3. SEO ve görünürlük

### Puan: 34/100

| Boyut | Ağırlık | Puan | Gerekçe |
|---|---|---|---|
| Sayfa yapısı | %25 | 3/10 | Her URL aynı title/description/canonical (ana sayfa); ham HTML'de içerik yok (01) |
| Taranabilirlik | %20 | 3/10 | robots.txt ve sitemap var, ama 33 değerli URL sitemap'te yok; soft 404; bozuk sitemap URL'leri (01) |
| Performans | %15 | 4/10 | PSI mobil 60, FCP 6,5 sn, LCP 6,6 sn (02) |
| İçerik mimarisi | %20 | 3/10 | 16 makalenin 16'sı boş, "Yaşam temaları" linksiz, yinelenen sayfalar (01) |
| Schema ve ölçüm | %20 | 4/10 | Organization/LocalBusiness iyi; Person, FAQPage, Article yok; GA4/GTM yok (01) |

Ağırlıklı toplam 3,35/10. Temel neden, sitenin arama motoruna "tek sayfalık" görünmesi; Lighthouse SEO 100 bunu ölçmüyor (02).

### Bulgular

**B1. Ham HTML'de site tek bir ana sayfa gibi görünüyor (Kritik).** Ham HTML'de /, /bolumlerimiz, /uzmanlar ve /olmayan-sayfa-123 aynı 4.404 baytlık kabuk. Hepsi HTTP 200 dönüyor, hepsinin title'ı "Özel Humentis Aile Danışma Merkezi" ve canonical'ı `https://humentis.com.tr/`. Gövdede yalnızca "Ana içeriğe geç" yazıyor (01). JS çalıştıktan sonra da istemci içi geçişlerde meta değerleri değişmiyor. Canonical'ın hepsi ana sayfayı gösterdiği için Google, uzman ve bölüm sayfalarını ana sayfanın kopyası sayıp dizinden düşürebilir. (29.09 taramasında bazı sayfalarda başlığın JS ile sonradan değiştiği görülmüştü; Google'ın bunu ne ölçüde dikkate aldığı belirsiz.) Var olmayan sayfaların 200 dönmesi de soft 404'e yol açıyor.

**B2. Marka ve kurucu aramalarında trafik başka sitelere gidiyor (Kritik).** "Humentis psikoloji Ankara" aramasında site ilk sonuçlarda yok; Indeed, Doktorsitesi ve başka merkezler çıkıyor. "Elif Silav psikolog Ankara" aramasında ise psikologelifsilav.com.tr, triopsikoloji.com.tr ve ankarapsikolog.org.tr çıkıyor. psikologelifsilav.com.tr aynı WhatsApp numarasını (+905528989545) kullanıyor ama Humentis'ten hiç bahsetmiyor (02). Ads'teki 524 arama teriminin 177'si doğrudan bir psikoloğun adı (02). Yani talep var, fakat organik sonuçta /uzmanlar/<slug> sayfaları görünmüyor.

**B3. Sitemap hem eksik hem hatalı (Yüksek).** 17 uzman profili ve 16 makale sitemap'te yok. /sss ve /kriz-destegi sitemap'te var ama açınca ana sayfa geliyor. /merkez ile /iletisim aynı içeriği gösteriyor. /icerik, /makaleler ve /icerik/makaleler birbirinin yinelemesi. /galeri, /duyurular ve /icerik/blog boş (01).

**B4. İçerik ince ve yazarsız, YMYL açısından riskli (Yüksek).** 16 makalenin hepsi "Tam metin yakında yayınlanacaktır" yazan 24–28 kelimelik birer yer tutucu, yazarı da "Humentis Uzman Ekibi". Slug'da yazım hatası var: /icerik/mesimsel-depresyon. Bölümler sayfası 169 kelime; ~24 "Yaşam teması" başlığının hiçbiri sayfa ya da link değil (01).

**B5. E-E-A-T sinyalleri sitede var ama işaretlenmemiş (Orta-Yüksek).** Uzman biyografileri dolu (1.003–5.803 karakter) ve hepsinin fotoğrafı var, ancak Person/Physician schema yok. 9 uzmanın kurum doğrulama kaydı 0, oysa Hakkımızda sayfası "her uzmanın kimlik bilgisi kontrol edilir" diyor (01). Bu bir güven tutarsızlığı.

**B6. NAP ve yerel sinyaller tutarsız (Orta).** Adres üç farklı yazılıyor: sitede "2159 CAD.", schema'da "2159. Cad.", kurum kaydında "2159. Sk." (01). Çalışma saatleri hiçbir yerde yazmıyor. Meta description'da "Ankara" geçmiyor.

**B7. Performans ve teknik hijyen (Orta).** Oluşturmayı engelleyen istekler için tahmini tasarruf 4.660 ms. Görsellerde 908 KiB kazanç var, width/height tanımlı değil. Ana sayfadaki 10 görselin 4'ünde alt metni yok. PSI; CSP, HSTS, XFO/clickjacking, COOP ve Trusted Types için uyarı veriyor (eksik ya da zayıf yapılandırma). llms.txt önerilere uymuyor ve ai-catalog.json şeması geçersiz (01, 02).

### Mevcut site planının doğrulanması

- **P1-07 (prerender + route bazlı meta/canonical):** Doğru tespit, ama SEO açısından P0 düzeyinde. Diğer bütün SEO işleri buna bağlı.
- **P3-15 (soft 404):** Aynı prerender/sunucu işiyle çözülür, **P1'e çekilmeli**.
- **P1-09 ve P1-10:** Doğru. Eksiği, sitemap'teki bozuk ve yinelenen URL'lerin temizlenmesi.
- **P2-11 (schema, NAP):** Kapsamı dar kalıyor. Person, FAQPage ve BreadcrumbList eklenmeli.
- **P2-12 (içerik):** Doğru, ama önce boş makalelerin dizinden çıkarılması gerekiyor (aşağıda Ö4).
- **Planda hiç olmayanlar:** kurucunun eski sitesi ve dış listelemeler, yazar sayfaları, "Yaşam temaları" iç linkleri, görsel alt/boyut, güvenlik başlıkları.

### Öneriler (öncelik sırasıyla)

**Ö1 — Prerender/SSG ve route bazlı meta (P0, P1-07 + P3-15).** Her route statik HTML olarak üretilmeli (ör. vite-plugin-prerender ya da Cloudflare üzerinde prerender). Her sayfa kendi canonical'ını taşımalı. Tanımsız URL'ler gerçek 404 dönmeli. Title önerileri, marka kurallarına uygun şekilde ("en iyi", "tedavi", "hasta" ifadeleri kullanılmadan):

| Sayfa | Title | Description |
|---|---|---|
| Ana sayfa | Humentis Aile Danışma Merkezi \| Psikolog, Çankaya Ankara | Çankaya'da yetişkin, çocuk-ergen, çift ve aile danışmanlığı. Psikolog ve aile danışmanlarımızı inceleyin; online ya da yüz yüze görüşme talep edin. |
| /uzmanlar | Psikolog ve Aile Danışmanları \| Humentis Çankaya, Ankara | 17 uzmanın unvanını, eğitimini ve çalıştığı alanları inceleyin. Online ve Çankaya'daki merkezde yüz yüze görüşme seçenekleri. |
| /bolumlerimiz | Yetişkin, Çocuk-Ergen, Çift ve Aile Danışmanlığı \| Humentis | Dört bölümümüz ve çalıştığımız yaşam temaları: ilişkiler, tükenmişlik, yas, ebeveynlik, sınav ve kariyer. Ankara Çankaya ve online. |
| /uzmanlar/elif-silav | Elif Silav – {API'deki unvan} \| Humentis Ankara | {Unvan}, {üniversite}. Çalıştığı alanlar: {ilk 3 alan}. Çankaya'da yüz yüze ve online görüşme. |
| /iletisim | İletişim ve Yol Tarifi \| Humentis Aile Danışma Merkezi, Çankaya | Mustafa Kemal Mah., Çankaya/Ankara. Telefon 0552 898 95 45, e-posta ve yol tarifi. Randevu talebinizi buradan iletebilirsiniz. |

Unvanlar API'den otomatik alınmalı ve uydurulmamalı. /merkez sayfası /iletisim'e 301 ile yönlendirilmeli.

**Ö2 — Kurucu ve dış listelemeleri tek noktada birleştirme (P0/P1, planda yok).** psikologelifsilav.com.tr kurucunun kendi alan adıysa, ya /uzmanlar/elif-silav adresine 301 ile yönlendirilmeli ya da en azından "Humentis bünyesinde" ifadesi ve bir profil linki eklenmeli. Profil sayfasındaki Person schema'ya `sameAs` ile eski site, Doktortakvimi ve ankarapsikolog.org.tr eklenmeli. triopsikoloji.com.tr'deki kaydın güncel olup olmadığı müşteriye sorulmalı; çalışma devam etmiyorsa kaldırılması istenmeli. A1 (Ads'te marka ve uzman adı) organik tarafta bu adımla birlikte ele alınmalı.

**Ö3 — Sitemap düzeltmesi (P1, P1-10'a ek).** 17 uzman ve yayımlanan makaleler sitemap'e `lastmod` ile eklenmeli. /sss ve /kriz-destegi ya gerçek sayfa hâline getirilmeli ya da sitemap'ten çıkarılmalı. Kriz sayfası güvenlik açısından değerli; yönlendirme bilgisini içeren gerçek bir sayfa olarak yayımlanması öneriliyor. /merkez, /makaleler ve /icerik/makaleler çıkarılıp tek kanonik adres bırakılmalı. /galeri, /duyurular ve /icerik/blog içerik gelene kadar `noindex` yapılmalı. Ardından Search Console ve Bing'e gönderilmeli.

**Ö4 — Boş makaleleri dizinden çıkarma ve E-E-A-T ile yayımlama (P1, P2-12 önkoşulu).** 16 yer tutucu, yayımlanana kadar `noindex` ile işaretlenmeli ve listeden kaldırılmalı. Hatalı slug düzeltilmeli: /icerik/mesimsel-depresyon → 301 → /icerik/mevsimsel-depresyon. Her yayımlanan yazı adıyla bir uzman tarafından yazılmalı (yazar kutusu, unvan ve profil linki), içinde "İnceleyen: {uzman}" satırı ve "Son güncelleme" tarihi bulunmalı. Article schema'da `author` alanı bir Person'a, `reviewedBy` alanı inceleyen uzmana bağlanmalı.

**Ö5 — Schema genişletme (P2-11'e ek).** Profil sayfalarına Person eklenmeli: `jobTitle`, `alumniOf`, `worksFor` → Humentis, `knowsAbout`, `sameAs`. Physician tipi yalnızca hekimler için kullanılmalı, psikologlar için kullanılmamalı. /#sss için gerçek bir /sss sayfası açılıp FAQPage eklenmeli. Tüm alt sayfalara BreadcrumbList eklenmeli. LocalBusiness'a `openingHoursSpecification` ve `hasMap` eklenmeli. Review/AggregateRating **eklenmemeli**: marka kuralları danışan yorumunu yasaklıyor, Google da kurumun kendi sitesindeki yorumları öne çıkarmıyor. Doğrulama kaydı 0 olan 9 uzman için ya doğrulama tamamlanmalı ya da Hakkımızda'daki ifade düzeltilmeli.

**Ö6 — Yerel SEO (G1 ile bağlantılı).** Adres tek biçime indirilmeli (kurum kaydındaki resmi biçim neyse, sitede, schema'da, GBP'de ve dizinlerde aynısı). Çalışma saatleri sitede yayımlanmalı. GBP'deki web sitesi alanı ana sayfaya, randevu linki ise çalışan bir akışa yönlendirilmeli (P0-01 çözülene kadar WhatsApp). Doktortakvimi ve Doktorsitesi profillerinde aynı NAP bilgisi ve site linki bulunmalı.

**Ö7 — "Yaşam temaları" iç link ağı (P2, P1-08 ile).** Bölümler sayfasındaki ~24 tema, ilgili uzman filtresine ya da hizmet landing sayfasına link vermeli (ör. "Tükenmişlik" → /uzmanlar?tema=tukenmislik). Teşhis dili kullanılmaz.

**Ö8 — Performans ve hijyen (P2).** Kritik CSS inline verilmeli, JS `defer` ile yüklenmeli. Görseller WebP/AVIF formatına çevrilmeli, `width`/`height` ve `loading="lazy"` eklenmeli. Eksik 4 alt metin yazılmalı. Statik varlıklara uzun `Cache-Control` tanımlanmalı. Açılış animasyonu kaldırılmalı (P0-02). Güvenlik başlıkları (HSTS, `frame-ancestors`/XFO, CSP) Cloudflare kurallarıyla eklenmeli.

**Ö9 — AI keşfedilebilirliği (P3).** Kurum, bölümler, uzman listesi ve "kriz hizmeti değildir" notunu içeren sade bir llms.txt yazılmalı. Geçersiz ai-catalog.json düzeltilmeli ya da kaldırılmalı.

### Neden sağlık sitelerinde E-E-A-T önemli?

Google, sağlık gibi insanların hayatını doğrudan etkileyen konuları "YMYL" (Your Money or Your Life) olarak sınıflandırır ve bu sayfalara daha sıkı bakar. Sorduğu şey basittir: "Bu bilgiyi kim yazdı, bu konuda yetkin mi, gerçekten deneyimi var mı, kuruma güvenilebilir mi?" İmzasız, boş ya da "uzman ekibi" gibi belirsiz bir yazar adı taşıyan içerikler bu sorulara cevap veremez ve sıralamada geri kalır. Humentis'in elinde aslında güçlü bir kanıt var: adı, unvanı, eğitimi ve deneyimi belli 17 uzman. Bu bilgiler görünür profil sayfalarına, yazar kutularına ve schema'ya dönüştüğünde Google da danışan adayı da aynı şeyi görür: bilgiyi gerçek, doğrulanmış kişiler veriyor.


## 4. Rekabet konumu

**Puan: 36/100**

**Gerekçe:** Humentis'in, incelenen dört rakibin ana sayfalarında gözlenmeyen farkları var: aynı çatı altında dört bölümde 17 uzman, unvan farklarını anlatan metin, kurum doğrulaması vaadi, eşleştirme akışı, kurumsal ÇDP sayfası ve sitede açıkça yazılan fiyat (₺1.450–2.100). Ancak bu farklar ya Hakkımızda sayfasında kalıyor ya da arama motorunun göremediği bir SPA'nın içinde duruyor. Rakipler daha az şey sunuyor ama bunu daha iyi gösteriyor. Onlarda statik, taranabilir sayfalar, header'da telefon, 6–12 hizmet sayfası ve Haritalar/dizinlerde yüzlerce yorum var. Aşağıdaki tabloda Humentis 80 üzerinden 32 alıyor. Rakiplerin puanları 48–58 arasında. Mevzuat uyumundaki üstünlüğü tek güçlü kalem.

Kaynaklar: 01-site-canli.md, 02-dis-veri.md, 03-baglam.md. Ayrıca 30.09.2026'da Yaşam, Vivere ve Optimum ana sayfaları WebFetch ile kontrol edildi. CAN Psikoloji sayfası bu oturumda çekilemedi, bu yüzden CAN verileri R1 (29.09) analizine dayanıyor.

### Bulgular

**1. Konumlandırma var ama ilk ekranda görünmüyor.** Ana sayfanın H1'i "Psikolojik destek için doğru uzmanı bulun." Bu bir pazaryeri cümlesi gibi okunuyor. Oysa Hakkımızda'da "Pazaryeri mantığıyla değil…" yazıyor. İlk ekranda "Ankara/Çankaya", "aile danışma merkezi" ve "tüm aile aynı çatı altında" ifadelerinin hiçbiri yok. Meta description'da da "Ankara" geçmiyor. Title/canonical her sayfada aynı ("Özel Humentis Aile Danışma Merkezi"). Karşılaştırınca Vivere'nin H1'i yeri, hizmeti ve tonu tek satırda veriyor: "Ankara Psikolog ve Aile Danışmanlığı — Anlaşılmakla başlayan bir yolculuk." Yaşam da "2008'den Beri" ve 8 hizmet başlığıyla ne olduğunu hemen söylüyor.

**2. Gerçek farklar zayıf görünüyor ve bir kısmı veriyle çelişiyor.**
- *17 uzman / 4 bölüm:* Rakiplerde ekip 4 (Optimum), 5 (Yaşam) ve Vivere 6 kişi. En büyük somut fark bu, ama ana sayfada sayı olarak geçmiyor, yalnız /uzmanlar sayfasında "17 uzman" yazıyor.
- *Doğrulanmış kimlik:* Hakkımızda "her uzmanın kimlik bilgisi kurum tarafından kontrol edilir" diyor. API'de ise 9 uzmanın doğrulama kaydı 0. Bu açık kapanmadan iddia öne çıkarılırsa güven sinyali risk sinyaline döner.
- *Şeffaf fiyat:* İncelenen rakiplerde fiyat gözlenmedi (CAN ve Vivere için doğrulandı), bu Humentis için bir avantaj. Ancak telefonda ₺3.000+ söylenmesi (P0-05) ve "prototip" metni avantajı tersine çeviriyor.
- *Kurumsal ÇDP:* Rakiplerde karşılığı görülmedi. Sayfa iyi, ancak ana sayfadan görünür değil.

**3. Temas ve hizmet sayfalarında rakipler açık ara önde.** Dört rakipte de telefon ve WhatsApp kolayca erişilebilir (CAN'da header'da; diğerlerinde ana sayfada). Humentis'te "Randevu al" butonu, ileri tarihli slotu olmayan bir takvime gidiyor. Ara/WhatsApp barı çerez onayına kadar görünmüyor. Hizmet sayfası sayısı rakiplerde CAN 12, Yaşam 8, Vivere 6, Humentis 0. Bölümler sayfasında açıklama yok, ~24 "yaşam teması" ise link değil, düz başlık.

**4. İçerik ve dizin/harita görünürlüğü neredeyse yok.** 16 makalenin 16'sı "Tam metin yakında" yazan boş sayfa, blog da boş. CAN'da 197 yazı var (çoğu "ankara psikolog" varyasyonu). Yorum/harita tarafında CAN'da ~780 Haritalar yorumu, Optimum'da Doktortakvimi 146 + Doktorsitesi 66 yorum var (212, 5,0★; rakip analistinin taramasında Google'da ayrıca 4,8/160 görüldü, doğrulanmadı). "Humentis psikoloji Ankara" aramasında (Google dışı web araması) site ilk sonuçlarda çıkmıyor.

**5. Marka, kurucunun adına bağlı trafiği kaçırıyor.** Ads arama terimlerinin 177/524'ü uzman adı. "Elif Silav psikolog Ankara" aramasında kurucunun Humentis'ten hiç bahsetmeyen eski sitesi (psikologelifsilav.com.tr, Doktortakvimi randevulu), triopsikoloji.com.tr profili ve ankarapsikolog.org.tr çıkıyor. Humentis profil sayfası çıkmıyor. Bu, Humentis'in rakiplerden önce kapatması gereken kendi kaçağı.

**6. Mevzuat: rakiplerden iyi ama brief'le tam uyumlu değil.** Kriz hizmeti olmadığını söyleyen metin, "Bu seçim tanı koymaz" notu ve KVKK/pazarlama onamının varsayılan kapalı olması Vivere dışındaki rakiplerin önünde. Ancak brief'in 7. bölümüne göre üç sorun var:
- Ana sayfadaki "GOOGLE — Danışan yorumları" bandında sonuç içeren yorum var ("oğlumun kıskançlığı ciddi azaldı"). Brief'e göre danışan yorumu ve sonuç vaadi önerilmez.
- Profillerde "Kaygı Bozuklukları (…OKB)" ve "Depresyon" gibi teşhis etiketleri kullanılıyor.
- Elif Silav profilinde "tedavi" kelimesi geçiyor.

Rakiplerdeki ihlaller daha ağır. Yaşam'da "7/24 Destek" var. Optimum'da sonuç iddialı yorumlar var ("…4 günde"; 30.09 taraması). CAN'da "ilk seans ücretsiz" ve ödül iddiaları var.

### Karşılaştırma tablosu (1–10)

| Boyut | Humentis | CAN | Yaşam | Vivere | Optimum |
|---|---|---|---|---|---|
| Başlık netliği | 5 | 8 | 7 | 9 | 6 |
| Değer önerisi | 6 | 5 | 6 | 6 | 5 |
| Güven sinyalleri | 5 | 7* | 6* | 7 | 8 |
| Temas kolaylığı | 3 | 9 | 9 | 8 | 9 |
| Hizmet sayfaları | 2 | 9 | 8 | 7 | 5* |
| İçerik derinliği | 2 | 8* | 5* | 4 | 4* |
| Yerel/harita görünürlüğü | 2* | 9 | 5* | 6* | 8 |
| Mevzuat uyumu | 7 | 3 | 5 | 8 | 3 |
| **Toplam (/80)** | **32** | **58** | **51** | **55** | **48** |

\* Tahmin: sayfa sayımı ya da yorum sayısı doğrulanmadı, puan görünen sinyallere göre verildi.

Kısa gerekçeler:
- *Humentis, güven sinyalleri:* Özgeçmişler uzun, fotoğraflar tam, unvan açıklaması var. Buna karşılık 9 uzmanda doğrulama kaydı 0, makaleler boş, "prototip" metni duruyor.
- *CAN, içerik derinliği:* Hacim çok yüksek, kalite değişken ve anahtar kelime tekrarlı olduğu için 8 verildi.
- *Optimum, hizmet sayfaları:* Hizmetler kadro sayfasında listeleniyor, ayrı sayfa sayısı doğrulanmadı.
- *Humentis, yerel/harita:* Google İşletme Profili durumu açık (G1), aramada görünürlük gözlenmedi.
- *Vivere, mevzuat uyumu:* Sitede iddia ya da teşvik yok, en temiz rakip.

### Kopyala / kopyalama

**Kopyala (uyumlu biçimde):**
- Vivere tipi H1: yer, hizmet ve sakin bir alt cümle. Örnek: "Çankaya'da yetişkin, çocuk-ergen, çift ve aile danışmanlığı — aynı çatı altında, acelesi yok."
- Header'da tıklanabilir telefon ve WhatsApp (hazır mesajda şikâyet alanı olmadan).
- Her bölüm ve ana yaşam teması için ayrı, statik (prerender) hizmet sayfası: CAN/Yaşam'ın 8–12 sayfalık yapısı, ama tekil ve özgün içerikle.
- Uzman başına statik profil sayfası: Optimum'un kişi odaklı kadro sayfası mantığı.
- Yaşam'ın "2008'den beri" gibi *doğrulanabilir* kuruluş/deneyim bilgisi.
- Google İşletme Profili ve dizinlerde (Doktortakvimi, Doktorsitesi) doğal yorum akışı; yalnız G1 kurallarıyla: karşılık verilmez, yanıtlar danışanlığı teyit etmez, yorumlar sitede ve reklamda kullanılmaz.
- Vivere'nin bilgi merkezi tonu: az ama gerçek yazı.

**Kopyalama:**
- "İlk seans ücretsiz" ya da benzeri teşvikler.
- "En iyi", "yılın uzmanı", ödül iddiaları ve brief'teki doğrulanmamış "Ankara'nın en büyük" ifadesi.
- Sonuç içeren danışan yorumları ("…4 günde"). Humentis'in kendi yorum bandı da bu gerekçeyle kaldırılmalı (öneri; nihai karar Humentis'in).
- "7/24 Destek" ya da kriz beklentisi yaratan dil.
- İşletme adına anahtar kelime doldurmak ("… Ankara Psikolog Çankaya Psikolog").
- "ankara-psikolog-3/4/5" gibi kopya sayfalar (R1 notu), "(2026)" tarzı title hileleri.
- Tanı çağrıştıran online self-testler (R1 notu).

### Öneriler (öncelik sırasıyla)

1. **P0 — Temas eşitliği:** Header'a telefon ve WhatsApp eklenmeli, "Randevu al" butonu dolu takvime ya da WhatsApp'a gitmeli, çerez kilidi kaldırılmalı, fiyat/telefon tutarsızlığı giderilmeli. Rakiplerle aradaki en büyük ve en ucuz kapanacak fark bu.
2. **P0 — Farkı ilk ekrana taşımak:** H1/alt başlıkta Çankaya, dört bölüm, "17 uzman", "şeffaf ücret" ve "online + yüz yüze" yer almalı. Doğrulama iddiası, 9 eksik kayıt tamamlanana kadar "Uzman bilgileri kurum tarafından kontrol edilir; kontrolü tamamlanan profiller işaretlidir." ifadesiyle sınırlı tutulmalı. Kayıtlar tamamlanınca "doğrulanmış kadro" öne çıkarılabilir.
3. **P0 — Mevzuat temizliği:** Ana sayfadaki yorum bandının kaldırılması önerilir (nihai karar Humentis'in). Profillerdeki teşhis etiketleri "kaygıyla ilgili zorlanmalar" gibi destek diline çevrilmeli, "tedavi" kelimesi çıkarılmalı.
4. **P1 — İsim trafiğini geri almak:** 17 statik uzman profili hazırlanmalı. Kurucunun eski sitesi Humentis'e yönlendirilmeli ya da güncellenmeli, Doktortakvimi/başka merkez profilleri Humentis ile uyumlu hâle getirilmeli. Ads'te marka ve uzman adı grubu açılmalı (A1).
5. **P1 — Hizmet sayfaları:** Önce 4 bölüm sayfası, sonra öncelikli 6–8 tema (arama hacmi Search Console/Ads verisiyle doğrulanmalı) (çift, ergen, sınav, tükenmişlik, boşanma, ebeveynlik) için sayfa hazırlanmalı. "Aynı aile, farklı uzmanlar, tek koordinasyon" anlatısı incelenen rakiplerde gözlenmedi; bu sayfaların ortak omurgası olmalı.
6. **P1 — Yerel görünürlük:** Google İşletme Profili sahiplenilmeli, NAP (Cad./Sk.) tek biçime getirilmeli, dizin profilleri tutarlı hâle getirilmeli.
7. **P2 — İçerik:** 16 boş makale ya yayından kaldırılmalı ya da uzman imzalı gerçek metinle doldurulmalı. Boş sayfa, hiç içerik olmamasından daha kötü bir güven sinyali.
8. **P2 — Kurumsal ÇDP:** Ana sayfaya kısa bir blok eklenmeli. Bu alanda rakiplerde bir karşılığı görülmedi, sahiplenilebilecek bir niş.


## 5. Marka, güven ve büyüme

Kaynaklar: 01-site-canli.md (canlı site + API), 02-dis-veri.md (PSI, arama, Ads, rakipler), 03-baglam.md (marka brief §7 ve 29.09 site planı). Site planındaki P0–P3 maddeleri burada tekrar edilmez; yalnız doğrulanır ve eksik kalan stratejik katman eklenir.

### Marka ve Güven — Puan: 50/100

| Boyut | Puan | Kısa bulgu |
|---|---|---|
| Marka tutarlılığı | 6/10 | Hakkımızda ve Kurumsal sayfalarının sesi brief'e uygun ("Pazaryeri mantığıyla değil…", "Seans içeriği kuruma aktarılmaz"); ama canlı sitede "prototip" notu ve boş bölümler var |
| Güven mimarisi | 5/10 | Güven vaatleri güçlü, fakat bu vaatleri sitenin kendi verisi zayıflatıyor |
| Otorite sinyalleri | 4/10 | Podcast ve uzun uzman biyografileri var; makalelerin 16'sı da boş |

**Güçlü yanlar.** Sitede brief'teki "sakin altyapı" fikrini taşıyan sağlam bir temel var. Hakkımızda sayfası unvan farklarını (Uzman, Klinik Psikolog, PDR) açıklıyor, gizlilik taahhüdü veriyor ("Pazarlama izni ayrı onam, varsayılan kapalı"). SSS'de "Humentis bir acil yardım veya kriz müdahale hizmeti değildir" yazıyor. Eşleştirme akışında "Bu seçim tanı koymaz… kayıt altına alınmaz" notu bulunuyor. JSON-LD'de kriz ve ilaç tedavisinin kapsam dışı olduğu belirtilmiş. Bunlar incelenen rakip ana sayfalarında gözlenmedi: Yaşam "7/24 Destek" diyor, CAN "ilk seans ücretsiz" ve ödül iddiası kullanıyor, Optimum ise sonuç vaadi içeren yorum gösteriyor. Humentis'in etik konumu gerçek bir farklılaştırıcı olabilir.

**Açıklar (kanıtlarıyla).**
1. **Doğrulama vaadi ile verinin çelişmesi.** Hakkımızda "kadrodaki her uzmanın kimlik bilgisi kurum tarafından kontrol edilir" diyor. API'ye göre 17 uzmandan 9'unda doğrulama kaydı yok, 6'sında deneyim yılı 0–1, 2 uzmanda hiç uzmanlık etiketi yok, bir uzmanda ise 25 etiket var. Markanın ana vaadi "doğrulanmış uzmanlık" olduğu için en ciddi güven açığı bu.
2. **Yayınlanmış görünen boş içerik.** 16 makale 21–29 Ağustos 2026 tarihli ve "Humentis Uzman Ekibi" imzalı görünüyor, ama hepsi "Tam metin yakında yayınlanacaktır" metninden ibaret. Blog, Duyurular ve Galeri boş. Menüde bu boş bölümlere link var.
3. **Randevu akışında dürüstlük sorunu.** Seçilebilen tek gün geçmişte kalmış bir tarih (3 Eylül). Canlı metinde "bu prototipte gösterilmektedir" yazıyor. Fiyat sitede ₺1.450–2.100 (Elif Silav için ₺1.850), telefonda ise ₺3.000+ söyleniyor. P0-01 ve P0-05 bu sorunları kapsıyor, ancak fiyat konusunun bir *politika* olarak ele alınmadığını görüyoruz (aşağıda).
4. **Brief §7 ile çakışmalar.** Ana sayfada "GOOGLE — Danışan yorumları" bandında 7 yorum dönüyor, bunlardan biri sonuç iddiası taşıyor ("oğlumun kıskançlığı ciddi azaldı"). Brief danışan yorumlarını ve sonuç vaadini açıkça dışarıda bırakıyor. G1'deki "yorumlar reklamda kullanılmaz" kuralı var, ama sitede gösterim konusu planda yer almıyor. Uzman profilinde "tedavi" kelimesi ve teşhis dilinde etiketler geçiyor ("Kaygı Bozuklukları (… OKB)", "Depresyon"). Bunların klinik dil incelemesinden geçmesi gerekiyor (P2-14 ile birleştirilebilir).
5. **Marka sahipliği dağınık.** "Elif Silav psikolog Ankara" aramasında kurucunun eski sitesi psikologelifsilav.com.tr çıkıyor. Bu site Humentis'ten hiç bahsetmiyor, aynı WhatsApp numarasını kullanıyor ve randevuyu Doktortakvimi'ne yönlendiriyor. Kurucu ayrıca triopsikoloji.com.tr'de başka bir merkezin uzmanı olarak listeleniyor. "Humentis" aramasında ise iş ilanları öne çıkıyor. Adres de üç farklı şekilde yazılmış (2159 Cad. / 2159. Sk. / 2159. Cad.).

### Büyüme ve Strateji — Puan: 40/100

| Boyut | Puan | Kısa bulgu |
|---|---|---|
| Fiyat stratejisi | 4/10 | Fiyat sitede görünüyor (rakiplerde yok, bu bir avantaj) ama telefonla tutarsız; iptal politikası yazılı değil |
| Edinim kanalları | 3/10 | Görünen tek ölçülebilir kanal ücretli arama (Instagram ve podcast var ama trafik verisi yok) ve o da kırık bir hunide: 175 tıklamada ≈ 1 temas, dönüşüm izleme yok |
| Elde tutma ve genişleme | 5/10 | ÇDP sayfası, atölye rotası, podcast ve online hizmet var; ancak hiçbiri çalışan bir akışa bağlanmamış |

**İş modeli.** İki gelir hattı var: B2C seanslar (yetişkin, çocuk-ergen, çift/aile, sınav/kariyer; online ve yüz yüze aynı fiyat) ve B2B Çalışan Destek Programı. Kurumsal sayfa, gizlilik sınırı açıkça yazılmış iyi bir teklif içeriyor. Fakat ÇDP için ne fiyat mantığı, ne referans süreci, ne de ayrı bir ölçüm tanımlanmış. Online hizmetin tüm kadroda sunulması, Ankara dışına (Türkiye geneli) açılma imkânı veriyor. Meta description ve içerikler bunu da, Ankara'yı da hedeflemiyor.

**Asıl büyüme kaldıracı uzmanların kişisel görünürlüğü.** Ads arama terimlerinin 177/524'ü doğrudan bir psikoloğun adı. Yani talebin önemli bir kısmı uzman adı üzerinden geliyor; organik aramada bu talep kurucunun eski sitesine, Doktortakvimi'ne ve başka merkezlerin listelerine gidiyor olabilir. P1-09 (profil sayfaları) ve A1 (uzman adı reklam grubu) teknik tarafı çözüyor. Planda eksik olan, **dış varlıkların Humentis'te birleştirilmesi**.

**Ölçüm açığı.** GA4, GTM ve dataLayer yok, yalnız Cloudflare Web Analytics var (P0-06). Ancak planda hangi KPI'ların, hangi hedeflerle izleneceği tanımlanmamış. Etiketin kurulması tek başına yetmez.

**Rakip bağlamı.** CAN Psikoloji reklam vermeden 197 blog yazısı ve ~780 Haritalar yorumuyla organikte güçlü. Optimum'un dizinlerde 212 yorumu var. Humentis bu hacimle yarışmamalı. Doğrulanmış uzman bilgisi, şeffaf fiyat ve açık veri sınırlarıyla fark yaratmalı: brief'in vaadi tam olarak bu.

### Öncelikli öneriler (planda olmayanlar)

**Hemen (1–2 hafta, P0'larla birlikte)**
1. **Doğrulama vaadini veriyle eşitleyin.** 9 uzmanın doğrulama kaydı tamamlanana kadar Hakkımızda'daki "her uzman" ifadesini yumuşatın ya da doğrulanmış profillerde görünür bir "kurum tarafından kontrol edildi (tarih)" işareti gösterin. Efor düşük, güven etkisi yüksek.
2. **Boş içeriği yayından kaldırın.** 16 boş makaleyi, Galeri'yi ve Duyurular'ı gerçek içerik gelene kadar menüden ve listelerden çıkarın, içeriksiz yayın tarihlerini kaldırın.
3. **Ana sayfadaki Google yorum bandının kaldırılması önerilir** (brief §7; nihai karar Humentis'in). Yerine unvan açıklaması, gizlilik ilkeleri ve "kriz hizmeti değildir" notu gibi süreç temelli güven öğeleri koyun.
4. **Yazılı fiyat politikası çıkarın.** Tek bir fiyat kaynağı (site = telefon = WhatsApp), seans süresi, iptal koşulu ve ÇDP için ayrı fiyatlandırma ilkesi. Kurum onaylamadan "prototip" iptal metni yerine hiçbir koşul yazmayın.

**Orta vade (1–3 ay)**
5. **Kurucunun eski sitesini ve dış listeleri birleştirin.** psikologelifsilav.com.tr'yi Humentis profiline 301 ile yönlendirin ya da sayfada Humentis'i açıkça belirtin. Doktortakvimi, Doktorsitesi ve ankarapsikolog.org.tr kayıtlarında kurum adını, adresi ve linki güncelleyin. Başka bir merkezdeki listeleme için kurucuyla karar verin. Aynı denetimi 17 uzmanın tamamı için yapın.
6. **Uzman işe alım (onboarding) standardı.** Doğrulama belgesi, en az bir uzmanlık etiketi ile üst sınır (örneğin 8–10), deneyim yılı, fotoğraf, klinik dil kontrolü ve güncel müsaitlik. Bu şartlar tamamlanmadan profil yayına alınmasın.
7. **İçerik yönetişimi.** Her yazıda uzman yazarı ve ikinci uzman onayı olsun, yayın tarihi gerçek olsun, §7 kontrol listesi uygulansın. Ayda 2–4 gerçek yazı hedefi, P2-12'deki ilk 10 yazının üzerine eklenir. Podcast bölümleri uzman profillerine ve yazılara bağlansın.
8. **Ölçüm planı.** Aşağıdaki KPI tablosunu P0-06 kurulumunun kabul kriteri yapın.

**Stratejik (3–6 ay)**
9. **ÇDP'yi ikinci gelir hattı olarak kurun.** Kurumsal teklif dokümanı, pilot kurum süreci, İK'ya yönelik atölye başlıkları (stres, tükenmişlik, ebeveyn çalışanlar) ve ayrı bir talep formu ölçümü.
10. **Atölyeler ve seminerler.** Mevcut atölye rotası ve Duyurular bölümü, tarihli ve gerçek etkinliklerle doldurulsun. Bu, danışana ödül vermeden etik bir tekrar temas ve topluluk kanalı olur.
11. **Online hizmetle Türkiye geneline açılma.** Online görüşmeyi tanıtan ayrı bir sayfa, ayrı reklam konumlandırması ve teknik/gizlilik açıklaması.

Etik sınır: danışana yönlendirme ödülü, yorum karşılığı teşvik, "ilk seans ücretsiz", aciliyet dili ve manipülatif hatırlatma akışı önerilmez. Elde tutma yalnız randevu hatırlatması, yazılı iptal politikası ve isteğe bağlı (varsayılan kapalı) bülten üzerinden yürütülmeli.

### Aylık KPI tablosu

| KPI | Veri kaynağı |
|---|---|
| Randevu talebi + Ara + WhatsApp tıklaması (toplam ve kanal kırılımı) | GA4 olayları (P0-06 sonrası) |
| Ads tıklama başına temas oranı ve temas başı maliyet | Google Ads + GA4 dönüşüm içe aktarımı (A2) |
| Uzman adı + "Humentis" aramalarında gösterim/tıklama | Search Console (P1-10) |
| Uzman profil sayfalarının dizine girme sayısı (hedef 17/17) | Search Console kapsam raporu |
| İleri tarihli açık slot sayısı ve slotu olan uzman oranı | /api/specialists, O1 operasyon kaydı |
| Doğrulama kaydı olan uzman oranı (şu an 8/17) | Admin paneli / API |
| Yayınlanan gerçek makale ve podcast bölümü sayısı | CMS |
| GBP arama, yol tarifi ve telefon işlemleri | Google İşletme Profili istatistikleri (G1) |
| Telefonda verilen fiyatın siteyle uyumu (örnek kontrol) | Operasyon çağrı kaydı |
| ÇDP / kurumsal talep sayısı | Kurumsal form olayı (GA4) + CRM |
| İptal / gelmeme oranı (operasyonel, pazarlama hedefi değil) | Randevu sistemi |
