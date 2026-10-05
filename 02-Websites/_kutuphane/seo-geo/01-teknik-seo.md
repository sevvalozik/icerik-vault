---
type: kutuphane
tags: [seo, teknik-seo, ssr, sitemap, canonical, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[08-yayin-guvenligi]]"]
---

# Teknik SEO: botun gördüğü sayfa

Üst not: [[00-seo-geo-standardi]]

## Denetim komutları

Her işe bu komutlarla başlanır, sonuçlar rapora yazılır. `SITE=https://alanadi.com` olarak ayarlayın.

```bash
UA="Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
# 1) Ham HTML'de sayfaya özel başlık, canonical ve robots var mı?
for p in / /hakkimizda /iletisim /<bir-hizmet> /<bir-profil>; do
  echo "== $p"; curl -s -A "$UA" "$SITE$p" | grep -oE '<title>[^<]*</title>|<link rel="canonical"[^>]*>|<meta name="robots"[^>]*>|<h1[^>]*>[^<]*'
done
# 2) Olmayan sayfa 404 mü? (200 ise "soft 404")
curl -s -o /dev/null -w "%{http_code}\n" "$SITE/olmayan-sayfa-123"
# 3) www ve http yönlendirmesi 301 mi, tek adımda mı?
curl -sI "https://www.${SITE#https://}/" | grep -iE "^HTTP|^location"
curl -sI "http://${SITE#https://}/" | grep -iE "^HTTP|^location"
# 4) Başlık başlıkları (X-Robots-Tag meta ile çelişmesin)
curl -sI -A "$UA" "$SITE/" | grep -iE "x-robots|cache|server"
# 5) Sitemap ve robots
curl -s "$SITE/sitemap.xml" | grep -c "<loc>"; curl -s "$SITE/robots.txt"
# 6) AI botları engelleniyor mu? (403 ise Cloudflare "Block AI bots")
for b in "GPTBot/1.2" "OAI-SearchBot/1.0" "ClaudeBot/1.0" "Claude-SearchBot/1.0" "PerplexityBot/1.0"; do
  printf "%s " "$b"; curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 (compatible; $b)" "$SITE/llms.txt"
done
# 7) Ham HTML'deki kelime sayısı (gövde boş mu?)
curl -s "$SITE/<sayfa>" | python3 -c "import sys,re;h=sys.stdin.read();t=re.sub(r'<script.*?</script>|<style.*?</style>|<[^>]+>',' ',h,flags=re.S);print(len(t.split()))"
```

Tarayıcıda: `site:alanadi.com` (kaç sayfa, hangi başlıklarla dizinde?), `site:alanadi.com/<klasor>/`, marka adı ve ekip üyelerinin adları. Google sonuçlarında eski başlık/adres görünüyorsa site uzun süredir yeniden taranmamıştır.

> **Humentis'te çıkan tablo (tipik SPA):** Ham HTML'de her adres ana sayfanın kopyasıydı, canonical hep `/`, gövde boştu, olmayan adresler 200 dönüyordu. Sonuç: Google'da 15 eski sayfa, ekip profillerinin hiçbiri yoktu.

## 1. Tek sayfalık uygulamalarda sunucu HTML'i

Seçenekler (en iyiden en basite):

| Yöntem | Ne zaman | Not |
|---|---|---|
| **Sunucu HTML'i (SSR benzeri)** | Veri veritabanından geliyor, sık değişiyor | Humentis yöntemi: Node, IIS/Nginx'in `index.html` şablonundaki `<!--seo:head-->` ve `<!--seo:body-->` yer tutucularını her istek için doldurur. React yine istemcide açılır. |
| Prerender (build anında) | İçerik az değişiyor | Her rota için statik HTML; veri değişince yeniden build |
| Statik dışa aktarma | Basit tanıtım sitesi | Next.js/Astro statik çıktı |

Kurallar:
- `resolvePageSeo(route, data)` gibi **tek bir fonksiyon** başlık, açıklama, canonical, robots ve JSON-LD'yi üretir. React (`useEffect` ile `<head>`) ve sunucu aynı fonksiyonu çağırır. Paylaşılan paket (`packages/seo`) ESM olarak derlenir.
- Gövde HTML'i de ortak kaynaktan üretilir (ör. `specialistMainHtml`, `homeMainHtml`). Metinler i18n dosyasından bir betikle üretilen ortak modüle alınır, iki yerde elle yazılmaz.
- **Eşitlik testi:** React'in DOM'u ile sunucu HTML'inin başlık sırası ve kelimeleri testte karşılaştırılır. Biri değişip diğeri unutulursa test kırılır.
- API yavaş açılırsa ya da şablon bulunamazsa statik `index.html`'e düşülür (site hiç kapanmaz). Sağlık ucu: `/health/seo` → `{"template":true}`.

## 2. Sayfa başına başlık, açıklama, canonical

- **Başlık:** ≤60 karakter (Türkçe karakterleri baytla değil karakterle sayın). Kalıplar:
  - Hizmet: `<Hizmet> <Şehir> – <İlçe> | <Marka>`
  - Kişi: `<Ad Soyad> – <Unvan>, <Şehir> | <Marka>`. Tek kelimelik unvana bölüm eklenir; uzunsa şehir, sonra marka düşer.
  - Rehber: `<Soru>? <Yıl> Rehberi` (yıl yalnız gerçekten yıllık gözden geçirilecekse)
- **Açıklama:** ≤155 karakter; ilk cümle cevabı verir; marka ve konum ("Marka, İlçe / Şehir") geçer; doğrulanmamış iddia yok.
- **Canonical:** Mutlak URL, kendine işaret eder; sorgu parametreleri atılır. **404 sayfasında canonical basılmaz.**
- **Tek H1**, sayfanın birincil sorgusunu içerir. Kart listelerinde kart başlıkları bölüm H2'sinin altında H3.

## 3. Durum kodları ve yönlendirmeler

- Olmayan adres gerçek **404** + `noindex`. SPA'nın "her şeye 200" davranışı soft 404 üretir.
- `www` → çıplak alan adı, `http` → `https`, eski URL'ler → yeni URL: **tek adımlı 301**. 302/307 Google'a yanlış canonical seçtirir (Agarwal dersi).
- Ad-soyad gibi okunur adres değişikliğinde eski kimlikli adresler (`/uzman/sp-007`) 301 ile yeni adrese gider.
- Silinen ama değeri olan sayfa en yakın sayfaya 301, değersizse 410/404.

## 4. noindex ve "index bloat"

İndekse açılmayanlar: boş liste sayfaları, "yakında" yazılan yer tutucular, iç arama, etiket sayfaları, içeriği eşiği geçmeyen profiller, giriş/panel/randevu adımları.
- **Otomatik açılma kuralı** kod içinde: ör. profil özeti ≥20 kelime ya da biyografi ≥60 kelime olunca `index`, sitemap'e girer. Böylece panelden içerik doldurulunca kimse kodu değiştirmez.
- Meta robots ile `X-Robots-Tag` başlığı aynı değeri taşır.

## 5. Sitemap ve robots

- Dinamik üretilir. Yalnız 200 dönen, indekslenebilir ve kendi canonical'ına işaret eden URL'ler girer.
- `lastmod` **gerçek** değişiklik tarihi: veritabanında `updatedAt` alanı, statik sayfalarda içerikteki `updatedAt`. Yalnız tarihi değiştirmek güncelleme değildir. `priority` ve `changefreq` Google tarafından yok sayılır.
- Görsel sitemap: profil fotoğrafları ve önemli görseller `<image:image><image:loc>…</image:loc><image:title>…</image:title></image:image>`. Kişi adı görsel aramalarında işe yarar.
- Kısa önbellek (ör. 10 dk). `robots.txt`: `Disallow: /admin`, `/panel`, `/api/`, `/giris`, randevu adımları; `Sitemap:` satırı.
- `/.well-known/security.txt` eklenir (iletişim + son geçerlilik tarihi).

## 6. İç linkler

- Her para sayfasına **en az 5 farklı sayfadan** metin içi link (test alt sayfalarına ≥4). Anchor'lar tarif edici ve **çeşitli**; hepsi birebir anahtar kelime olmasın (Yaşar).
- Metin içinde link için içerik formatı: `[tarif edici anchor](/yol)`. Aynı kaynak React'te `<a>`, sunucu HTML'inde `<a>`, JSON-LD'de temiz metin, `llms-full.txt`'te mutlak URL olur.
- Footer'da "Hizmetler" menüsü (para sayfaları), header'da ana kategoriler, sayfa sonunda "ilgili sayfalar" / "aynı bölümdeki diğer uzmanlar".
- Breadcrumb hem görünür hem `BreadcrumbList`.
- Kırık iç link ve yetim sayfa testte yakalanır.

## 7. Diğer

- SSS akordeonları: kapalı cevaplar DOM'da kalır (`hidden`), JS ile sonradan eklenmez.
- Görsellerde `alt` (kişi fotoğrafında ad soyad), `width`/`height`, ekran altı görsellerde `loading="lazy"`.
- Çok dilli sitede `hreflang` ve dil başına canonical; Türkçe dışı sayfalarda Türkçeye özel SSS üretilmez.
- 404 ve 5xx sayfalarında analitik olayı; yayın sonrası 502'yi önlemek için API yeniden başlatmada sağlık ucu döngüyle beklenir ([[08-yayin-guvenligi]]).
