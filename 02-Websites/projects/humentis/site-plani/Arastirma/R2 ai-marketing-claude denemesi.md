---
type: deneme
tags: [humentis, ai-marketing-claude, pazarlama-analizi]
tarih: 2026-09-30
---

# R2 · ai-marketing-claude paketi denemesi (Humentis)

Paket notu: [[ai-marketing-claude-paketi]]

**Site:** humentis.com.tr · **Tarih:** 30.09.2026 · **Genel puan: 54/100**
**Kullanılan komutlar:** `/market quick` (hızlı analiz) + `/market copy` (metin önerileri)
**İşletme türü (paketin tespiti):** Yerel hizmet işletmesi → Google İşletme Profili, yerel arama, yorumlar ve yol tarifi öncelikli.

> [!note] Veri kaynağı
> Site **canlı** açıldı (30.09.2026 10:30, uygulamanın tarayıcısı, mobil görünüm) ve sayfa metni, meta etiketler, `/api/specialists`, ham HTML ve robots/sitemap kontrol edildi. Çerez penceresinin onaydan önceki davranışı için 29.09 taraması da kullanıldı: [[Kanit - Site taramasi 2026-09-29]]. Paketin kendi kuralları Türkçe psikoloji sitesi için uyarlandı; aşağıdaki "Paketin önerip uygulamadıklarımız" bölümüne bak.

### Canlı kontrolde görülenler (30.09)
- **Takvim hâlâ boş:** 17 uzman, toplam 17 slot, **ileri tarihli slot 0**; en yeni slot 10 Eylül. 9 uzmanda hiç slot yok.
- **Ham HTML değişmedi:** `/`, `/bolumlerimiz`, `/uzmanlar` ve var olmayan bir adres aynı 4.404 baytlık sayfayı, aynı başlık ve canonical ile döndürüyor (hepsi 200).
- **Ölçüm etiketi yok:** sayfada Google Analytics / Ads (gtag, dataLayer) yok; sadece Cloudflare analitiği.
- **Yeni/olumlu:** `robots.txt` ve `sitemap.xml` var ve düzgün; randevu ve panel sayfaları taramaya kapalı.
- Onay verilmiş tarayıcıda Ara + WhatsApp alt barı görünüyor, telefon linki (`tel:+90552…`) 2 yerde, WhatsApp hazır mesajlı 3 yerde.
- İlk ekran sırası: header → sekmeler → **Podcast / Spotify bandı** → hero. Ana sayfada 7 Google yorumu (yıldızlı, kayan bant) ve "Humentis bir acil yardım veya kriz müdahale hizmeti değildir" notu var.
- Meta açıklama: "Randevu İçin — Psikolog ve Aile Danışmanlarının Bir Arada Olduğu Deneyimli Uzmanlarımız. Online ve Yüz Yüze Destek. Yetişkin, Çocuk-Ergen ve Aile Danışmanlığı." → "Ankara" geçmiyor.

---

## 1. Hızlı analiz (`/market quick`)

| Ölçüt | Puan | Neden |
|---|---|---|
| Başlık netliği | 7/10 | "Psikolojik destek için doğru uzmanı bulun." ne yapıldığını söylüyor; ama nerede (Ankara) ve hangi alanlar (aile, çift, çocuk) yok. |
| Çağrı butonları | 4/10 | Header'daki ve her uzman kartındaki "Randevu al" takvime gidiyor; 17 uzmanın hiçbirinde ileri tarihli slot yok (canlı, 30.09). Onaydan sonra Ara + WhatsApp alt barı iyi; ama 29.09 taramasına göre onay verilmeden görünmüyor. |
| Değer önerisi | 5/10 | "Kısa eşleştirme" (5 adımlı anket) gerçek bir fark; ama hizmet sayfası yok, `/bolumlerimiz` 169 kelime. |
| Güven | 7/10 | 17 uzman, unvanlarıyla; Google etiketli yorum bölümü; kurumsal kayıt ve yapılandırılmış veri (JSON-LD) var. |
| Mobil / teknik | 4/10 | Tüm sayfalar aynı boş HTML'i döndürüyor, ölçüm etiketi yok (canlı, 30.09); çerez penceresi onaya kadar sayfayı kilitliyor, açılış animasyonu 7,3 sn (29.09). Artı: robots.txt ve sitemap düzgün. |

**Güçlü 3 yön**
1. **Eşleştirme anketi:** "Hangi uzmana gideceğim?" kararsızlığını çözen, rakiplerde olmayan bir özellik.
2. **Geniş ve unvanlı kadro:** 17 uzman; klinik psikolog, aile danışmanı, çocuk gelişimi ayrımı net.
3. **Temel altyapı doğru:** onaylı reklamveren, yapılandırılmış veri, robots.txt + sitemap, iletişim sayfasında telefon + form + KVKK onayı, açık "kriz hizmeti değildir" notu.

**Düzeltilecek 3 şey (etkiye göre)**
1. **[Yüksek] Randevu butonu çıkmaz sokak.** Takvim dolana kadar "Randevu al" → WhatsApp'a yönlensin. → [[P0-01 Randevu akisi bos takvim]]
2. **[Yüksek] Temas yolları gizli.** Ara / WhatsApp çerez onayından bağımsız, ilk ekranda görünsün; telefon numarası sayfa metninde yazsın.
3. **[Yüksek] Google sayfaları göremiyor.** Hizmet sayfası yok ve her adres aynı boş HTML'i veriyor; "Ankara aile danışmanlığı" gibi aramalarda çıkacak sayfa yok. → site planı P1

---

## 2. Metin önerileri (`/market copy`, ana sayfa)

### Mevcut metin puanı: 27/50 (54/100)

| Boyut | Puan | Not |
|---|---|---|
| Açıklık | 7 | Ne yapıldığı anlaşılıyor. |
| İkna | 4 | "Neden Humentis?" cevabı yok; eşleştirme öne çıkmıyor. |
| Somutluk | 4 | Şehir, semt, alanlar, online/yüz yüze, seans süresi ilk ekranda yok. |
| Duygu | 6 | Sakin ve güven veren ton; "doğru uzman" ifadesi iyi. |
| Eylem | 6 | Hero'daki iki buton net; header butonu bozuk hedefe gidiyor. |

**Ses profili (korunmalı):** resmiyet 4/5 · duygu 2/5 · teknik dil 2/5 · mizah 1/5 · uzman otoritesi 4/5 → sakin, ciddi, uzman ama soğuk değil.

### Değer önerisi

| | Mevcut | Eksik mi? |
|---|---|---|
| Hedef kitle | Psikolojik destek arayan herkes | **Zayıf**: aile, çift, çocuk-ergen, yetişkin ayrımı ilk ekranda yok |
| Sorun | Belirtilmiyor | **Eksik** |
| Çözüm | Uzman eşleştirme + randevu | Var |
| Fark | 5 soruluk eşleştirme, 17 uzman | Var ama gömülü |
| Kanıt | Unvanlar, Google yorumları | Var |
| Yer | — | **Eksik**: "Ankara, Çankaya" hiç geçmiyor |

### Başlık alternatifleri

Mevcut: **"Psikolojik destek için doğru uzmanı bulun."**

1. **Ankara'da aile, çift ve bireysel danışmanlık: size uygun uzmanı birlikte bulalım** *(4U, yer + alan + fark)*
2. **Neyle başa çıkmaya çalışıyorsunuz? 5 soruda size uygun uzmanı önerelim** *(eşleştirmeyi öne çıkarır)*
3. **Çocuk, ergen, çift ve aile danışmanlığı · Çankaya'da yüz yüze ya da online** *(somut, arama dostu)*
4. **17 uzman, tek adres: Ankara'da psikolojik danışmanlık** *(kadroyu kanıt olarak kullanır)*
5. **Konuşmak zor geldiğinde ilk adımı kolaylaştırıyoruz** *(önce-sonra, yumuşak; alt başlıkla birlikte kullanılmalı)*

**Önerilen alt başlık:** "Uzman psikolog ve aile danışmanlarımızla Çankaya'da yüz yüze ya da online görüşme. Hangi uzmanın size uygun olduğunu bilmiyorsanız 5 kısa soruyla birlikte bulalım."

### Buton metinleri

| Yer | Önce | Sonra |
|---|---|---|
| Header | Randevu al *(boş takvime gidiyor)* | **WhatsApp'tan yazın** (takvim dolana kadar) → sonra "Randevu al" |
| Hero 1 | Uzmanları incele | Uzmanları incele *(iyi, kalsın)* |
| Hero 2 | Kısa eşleştirme | **Bana uygun uzmanı bul (5 soru)** |
| Sabit alt bar (mobil) | yok (onaydan sonra çıkıyor) | **Ara · WhatsApp** — her zaman görünür |

### Sayfa başlığı ve açıklaması (Google'da görünen)

- **Title — önce:** Özel Humentis Aile Danışma Merkezi
- **Title — sonra:** Ankara Aile Danışma Merkezi ve Psikolog | Humentis Çankaya
- **Description — sonra:** Çankaya'da uzman psikolog ve aile danışmanlarıyla bireysel, çift, aile, çocuk ve ergen danışmanlığı. Yüz yüze ya da online görüşme; 5 soruda size uygun uzmanı bulun.

---

## 3. Paketin önerip uygulamadıklarımız

Paket genel pazarlama mantığıyla yazılmış (SaaS / e-ticaret). Psikoloji sitesi için şu önerilerini **bilerek almadım**:

- **Aciliyet ve kıtlık** ("son 3 randevu", "hemen başlayın"): danışan üzerinde baskı; etik değil.
- **Korku / "acıyı büyüt" (PAS) başlıkları:** kaygılı birine sorununu daha büyük göstermek uygun değil.
- **Danışan yorumu, "önce-sonra" hikâyesi, sonuç vaadi:** gizlilik ve mesleki etik; ayrıca sağlık hizmeti tanıtım kuralları.
- **"İlk seans ücretsiz" gibi teşvik:** yasaklı.
- Sitedeki Google yorum bölümü mevcut; kaldırılıp kaldırılmayacağı Humentis'in kararı, bu denemede öneri olarak yazılmadı.

## 4. Paket hakkında değerlendirme

- **İyi:** düzenli puanlama, önce-sonra metin örnekleri, önceliklendirme. Yeni bir hocanın ya da rakibin sitesine hızlı bakış ve sunum için "mevcut durum" slaytı çıkarmada işe yarar.
- **Eksik:** Türkçe ve psikoloji etiği bilmiyor; aciliyet, korku, yorum gibi kalıpları varsayılan olarak öneriyor. Kasaya kurulursa yanına "psikoloji sitesi kuralları" notu eklenmeli.
- **Denenmeyenler:** tam denetim (`/market audit`, 5 paralel analizci), 30 günlük sosyal medya takvimi (`/market social`), teklif metni (`/market proposal`), PDF rapor.
