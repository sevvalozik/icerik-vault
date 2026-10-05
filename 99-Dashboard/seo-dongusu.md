---
type: readme
tags: [seo, search-console, geo, icerik, yontem]
date: 2026-09-30
related: ["[[00 Humentis Site Plani (MOC)]]", "[[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]", "[[otomasyon-secilmis-akislar]]", "[[claude-code-skilleri]]"]
---

# SEO döngüsü: oku → düzelt → yaz → ölç

**Kaynak:** Neil Agarwal (@regalstreak), X makalesi "how we 47x'd our SEO in 2 weeks", 24.09.2026 — [tweet](https://x.com/regalstreak/status/2103014475947483462). Furkan Bey paylaştı (30.09.2026).
**Not:** Yazar, kendi ürünü Refix'i (@refix_ai) tanıtıyor; "2 haftada 47 kat" (haftada <5 tıklamadan 30.000 gösterime) iddiası doğrulanmadı ve tıklama ile gösterimi karşılaştırıyor (elma-armut). Yöntemin kendisi ise Refix olmadan elle uygulanabilir ve Google'ın kendi önerileriyle uyumlu.

## Ana fikir

SEO bir yazı sorunu değil, **karar** sorunu: hangi aramanın sayfayı hak ettiği, hangi sayfanın düzeltilmesi gerektiği, hangi anahtar kelimenin tuzak olduğu. Çözüm, Search Console'u her gün okuyan ve sadece işe yarayan sinyallere tepki veren bir döngü.

| Döngü adımı | Yapar | Yapmaz |
|---|---|---|
| Oku | Search Console'u düzenli kontrol eder | Aylık raporu bekler |
| Yargıla | Yalnız harekete değer olanı işaretler | Ham anahtar kelime listesi döker |
| Düzelt | Zaten görülen sayfaları yeniden yazar | Aynı konuya yeni sayfa açar |
| Yaz | Eksik olan sayfayı taslaklar | İnsan kontrolü olmadan yayınlar |

## 1. Search Console'da takip edilecek 6 sinyal

| Sinyal | Tanım | Ne yapılır |
|---|---|---|
| Neredeyse orada | Marka dışı sorguda sıralama 3–20 | Sıralanan sayfaya o sorgunun tam ifadesini içeren bir cümle ekle; sığmıyorsa yeni sayfa + ondan link |
| Tıklanmıyor | Gösterim > 500 ve TO < %0,5 | Tam sorguyu title, meta, URL, H1 ve ilk cümleye koy; cevabı ilk iki satırda ver; sayfa tipini kontrol et |
| Düşüşte | Tıklama haftalık %30 düştü | Sayfayı güncelle (bkz. 1 saatlik güncelleme) |
| Hedefsiz | Hiçbir sayfanın hedeflemediği sorguda sıralama var | O sorgu için sayfa yaz ya da mevcut sayfaya bölüm ekle |
| Yanlış niyet | Sorgunun niyeti ≠ sayfanın niyeti | Karşılaştırma isteyene karşılaştırma, "ne kadar" diyene hesaplayıcı; yazı değil |
| Yapay zekâ modu | 7+ kelimelik sorgular | Tam o ifadelerle sayfa/bölüm yaz |

Geri kalan her şey görmezden gelinir.

## 2. Önce zaten sıralanandan başla

- "Neredeyse orada" bedava trafik: Google sayfayı beğeniyor ama emin değil.
- **1 saatlik güncelleme:** en iyi sayfanın sorgularını dışa aktar → tam kapsanmayan kümeleri bul → 2–3 yeni H2 ekle → tarihi güncelle → Search Console'dan dizine eklenmeyi iste.

## 3. En önemli adım: tıklamayı sonuca bağla

Search Console kimin tıkladığını söyler, kimin kaldığını söylemez. Dönüşümleri **ilk açılış sayfasına göre** kır ve tıklamaların yanına koy:

| Sayfa | Tıklama | Dönüşüm | Yorum |
|---|---|---|---|
| /blog/populer-yazi | 400 | 0 | Kazanç gibi görünür, aslında sızıntı |
| /rehber/sikici-konu | 40 | 6 | Bunun gibi üç tane daha yaz |

"Sıralanan için değil, dönüşen için yaz."

## 4. Yazmadan önce düzelt

Tıklanmayan sayfanın kardeşe ihtiyacı yok; başlık, açıklama ve ilk cümlenin sorguya cevap vermesine ihtiyacı var. Sayfa tipi yanlışsa (butona ihtiyacı olana makale yazılmışsa) başlık düzeltmesi yetmez.

## 5. Kötü anahtar kelimeyi yazmadan öldür

- Yazmadan önce arama sonucunu aç, kimin sıralandığına bak; yanlış kitleyse vazgeç.
- Hacim kararı vermez, sadece sırayı belirler (yazara göre iki araç aynı sorguda 4 kat farklı hacim verdi).

## 6. Yapay zekânın baktığı yere yaz

- Search Console sorgu filtresine düzenli ifade: `(\b\w+\b\s){7,}` → 7+ kelimelik sorgular. Sayfaları bu tam ifadelerle kur.
- Yazara göre ChatGPT gezinirken arka planda 1–3 Google araması yapıyor; Perplexity aramalarını açıkça gösteriyor. Bunlar yeni anahtar kelimeler.
- **Bing:** ChatGPT araması ve Copilot kısmen Bing indeksinden besleniyor → Bing Webmaster Tools doğrulaması, her yayında **IndexNow** bildirimi, Bing'in yapay zekâ performans raporu.

## 7. En iyi sayfa en zayıfı taşısın

Tıklama alan güçlü bir sayfadan takılı kalmış ilgili sayfaya link ver; o tutunca linki bir sonrakine taşı, ayda bir döndür. Sadece gerçekten ilgili sayfalar; link spam'i ve yetim sayfa yok.

## Yazarın "farklı yapardık" dersleri

- **Döngüyü ilk günden çalıştır:** 3 ay veriyi okumadan yayın yapmışlar.
- **Yönlendirmeleri önce düzelt:** çıplak URL'ler 307 ile sonda eğik çizgili sürüme gidiyormuş, Google yanlış olanı canonical seçmiş. **301 ya da 308** kullan.
- **Toplu yayın yerine küçük partiler:** günde 3 sayfa basınca çoğu "keşfedildi, dizine eklenmedi"de kalmış. Küçük parti → dizine girmeyi izle → sonra ölçekle.
- SEO zor değil; sıkıcı ve geri bildirim geç geliyor, çoğu kişi tam işe yarayacakken bırakıyor.

---

## Bizim işlere uyarlama

### Humentis
Bu döngü Humentis'te **bugün çalışamaz**; önce ön koşullar:
1. **Search Console + Bing** (site planı [[P1-10 Sitemap Search Console Bing]]) — veri olmadan "oku" adımı yok. Bing maddesine IndexNow eklenmeli.
2. **Prerender + her sayfanın kendi canonical'ı** ([[P1-07 Prerender ve meta]]) — yazarın 307/canonical dersi Humentis'te daha ağır hâliyle var: ham HTML'de tüm sayfalar ana sayfayı canonical gösteriyor ([[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]).
3. **Ölçüm** ([[P0-06 Google tag ve donusumler]]) — 3. adım (tıklama → dönüşüm) için randevu talebi, WhatsApp ve telefon olaylarının **ilk açılış sayfasına göre** raporlanması gerekiyor. GA4'te "Açılış sayfası" boyutu + dönüşüm olayları.

Sonra döngü: haftalık 6 sinyal kontrolü → önce uzman profilleri ve bölüm sayfaları düzeltilir → 16 boş makale yerine, 7+ kelimelik gerçek sorgulara ("eşimle sürekli aynı konuda tartışıyoruz ne yapmalıyım" gibi) cevap veren uzman imzalı yazılar, küçük partilerle.

**Humentis kuralları geçerli:** sorgu ne olursa olsun başlıklarda "tedavi", "en iyi", aciliyet yok; tanı koyan sayfa tipi (ör. "depresyon testi") yazılmaz — "yanlış niyet" sinyali böyle bir sayfa istese de ([[ai-marketing-claude-paketi]], marka brief §7).

> **Durum (05.10.2026):** 2. ön koşul (sunucu HTML'i, sayfa başına canonical, gerçek 404, 301'ler) 03.10.2026'da canlıya alındı; sitemap, IndexNow ve llms.txt hazır. Search Console'da dizine ekleme istekleri ve Bing içe aktarma bekliyor. Kayıt: [[seo-geo-uygulama-2026-10-05]]. Tüm müşteriler için genel standart: [[00-seo-geo-standardi]].

### Nefin ve diğer müşteriler
Aynı döngü e-ticaret ve yerel işletmelerde de geçerli; "dönüşüm" Nefin'de satın alma, Otoekspertiz'de randevu/arama.

### Otomasyon ve araçlar
- **n8n:** haftalık Search Console raporu ve içerik eskimesi uyarısı akışları bu döngünün "oku" adımını otomatikleştirir → [[otomasyon-secilmis-akislar]] (madde 3). 6 sinyal bu akışlara filtre olarak eklenebilir.
- **Claude Code:** claude-seo (Search Console bağlantılı) ve marketingskills (`seo-audit`, `ai-seo`) → [[claude-code-skilleri]].
- **Refix:** yazarın ürünü; denenmedi. Ücret, veri erişimi ve KVKK açısından (özellikle sağlık müşterilerinde) incelenmeden bağlanmamalı.
