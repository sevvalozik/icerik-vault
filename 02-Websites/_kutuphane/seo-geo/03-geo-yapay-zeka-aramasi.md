---
type: kutuphane
tags: [geo, ai-arama, llms-txt, chatgpt, perplexity, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[seo-dongusu]]", "[[06-backlink-ve-atif]]"]
---

# GEO: yapay zekâ aramalarında görünmek

Üst not: [[00-seo-geo-standardi]]

## Mantık

- ChatGPT, Claude, Perplexity ve Gemini cevabı bilmediğinde **arama yapar** ve çıkan sayfaları alıntılar. Kullanıcının uzun sorusunu değil, "en iyi + para kelimesi + yıl" gibi kısa bir sorguyu arar (Dulait). Yani GEO büyük ölçüde o sorgudaki SEO'dur. Asıl kaldıraç **başkalarının listesinde** doğru bilgiyle yer almaktır.
- AI Overview için özel schema yoktur (Yaşar). Gereken: erişilebilir, soruyu ilk cümlede cevaplayan, güvenilir ve tutarlı içerik.
- ChatGPT araması ve Copilot kısmen **Bing** indeksinden beslenir → Bing Webmaster Tools + IndexNow zorunlu.
- Linksiz marka bahsetmeleri (haber, forum, YouTube) AI aramada değer kazanıyor.

## Sitede yapılacaklar

### 1. Botlara kapıyı aç
- AI arama botları JS çalıştırmaz: **ham HTML tam olmalı** ([[01-teknik-seo]]).
- Cloudflare: Security → Bots → "Block AI bots / AI Scrapers and Crawlers" **kapalı** ya da AI Crawl Control'de GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot "Allow". "Managed robots.txt" kapalı kalsın (kendi robots.txt'imiz geçerli olsun). Caching → **Crawler Hints açık**.
- Kontrol: `curl -A "Mozilla/5.0 (compatible; GPTBot/1.2)" https://site/llms.txt` → 200. (Humentis'te 403 çıktı; Cloudflare panelinden açılması müşteriye bırakıldı.)

### 2. `llms.txt` ve `llms-full.txt`
Dinamik üretilir (veritabanı değişince güncellenir), sitemap ile aynı kaynaktan:
- `llms.txt`: resmi ad satırı ("Resmi adı: …"), bir paragraf kurum özeti, adres ve iletişim, ana sayfalar, hizmetler, rehberler başlığı, kişiler listesi (ad – unvan – URL).
- `llms-full.txt`: her hizmetin tam metni ve SSS'leri; her kişi için kurum, bölüm, görüşme biçimi, eğitim, çalışma alanları, diğer adı ve "Diğer mesleki profilleri" (`sameAs` ile aynı liste); metin içi linkler mutlak URL.

### 3. Alıntılanabilir metin
- Her sayfanın **ilk iki cümlesi** soruyu doğrudan cevaplar ("X nedir / nerede yapılır / kim için").
- SSS soruları Google önerileri ve "Kullanıcılar bunları da sordu" kutusundaki biçimle yazılır.
- **Varlığa özel SSS:** kişi ve kurum sayfalarında "X hangi alanlarda çalışıyor?", "X ile online görüşme yapılabilir mi?", "X nerede?", "X hangi yaş gruplarıyla çalışıyor?", "X hangi üniversiteden mezun?", "X için nasıl randevu alınır?". Cevaplar yalnız kayıttaki veriden üretilir; veri yoksa soru üretilmez. Soru kalıbı adın arkasına ek gelmeyecek biçimde kurulur ("X ile", "X için"), Türkçe ünlü uyumu hatası çıkmaz.
- 7+ kelimelik Search Console sorguları ("eşimle sürekli aynı konuda tartışıyoruz ne yapmalıyım") SSS ya da yazı başlığı olur ([[seo-dongusu]]).
- Yıllı **seçim rehberi** ("<Şehir>'de <hizmet> nasıl seçilir? <Yıl> Rehberi"): sıralama yapmaz, ölçüt verir; Article + FAQPage; her yıl gerçekten gözden geçirilir. Marka "en iyi" ifadesini yasaklıyorsa "en iyi + yıl" sayfası yazılmaz, rehber yazılır.
- Gerçek tarih: görünür "Son güncelleme", `dateModified` ve `lastmod` aynı.

## Site dışında yapılacaklar

| Adım | Ne |
|---|---|
| Sorguları bul | "en iyi <hizmet> <şehir> <yıl>", "<hizmet> <şehir> tavsiye", "<test/ürün> <şehir> nerede yapılır" |
| Sıralanan listeleri çıkar | Her sorguda ilk 10'daki liste, dizin, pazar yeri, üretici sayfası → tabloya (sorgu · liste · tür · biz var mıyız · aksiyon) |
| Listeye gir | Dizinde kurum profili; liste sahibine kişisel e-posta (aşağıda); üretici "merkezler" sayfasına başvuru |
| Bilgiyi düzelt | Listedeki eski adres/telefon/ad → düzeltme talebi |

**Ulaşma e-postası iskeleti:** Liste başlığını ve somut bir ayrıntıyı anan bir açılış → kim olduğumuz ve ne yaptığımız (unvanlar açık) → doğru bilgileri paylaşma teklifi → "Ücretli yerleşim yapmıyoruz." E-postayı ekip kendisi gönderir; ücret istenip kabul edilirse link `rel="sponsored"` olmalı.

**Kırmızı çizgi:** Sahte forum girdisi, sahte yorum, "tanıdık hesabı" ile öneri yok. Sağlık ve hukukta hem gizli reklam hem güven kaybıdır.

## Aylık AI görünürlük testi

Ayın ilk pazartesi, oturumsuz ya da yeni sohbette ChatGPT (arama açık), Perplexity, Gemini, Google AI Mode ve Claude'a 6–8 soru sorulur:
1. "<Şehir>'de iyi bir <hizmet veren> önerir misin? <İlçe> civarında."
2. "<Şehir> <hizmet> tavsiyesi"
3. "<Ürün/test> <şehir>'de nerede yapılır?"
4. … (her para kalıbı için bir soru)
5. **Varlık kontrolü:** "<Kurumun resmi adı> nedir, nerededir?" → ad, adres, telefon doğru mu?
6. **Kişi kontrolü:** "<Ekip üyesi adı> kimdir, nerede çalışıyor?"

Kayıt: `08-Raporlar/<slug>/ai-gorunurluk-YYYY-AA.md` → her soru için: biz geçiyor muyuz, hangi URL'ler alıntılandı, bilgi doğru mu. Alıntılanan ama içinde olmadığımız liste "Site dışında" tablosuna eklenir.
