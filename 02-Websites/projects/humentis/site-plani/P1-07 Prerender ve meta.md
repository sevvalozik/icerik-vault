---
tags: [humentis, site, p1, seo, geo]
oncelik: P1
durum: yapilacak
sahip: site-ekibi
tahmini_sure: "2–4 gün"
son_tarih: 2026-10-10
bagli:
  - "[[P1-08 Hizmet landing sayfalari]]"
  - "[[P1-09 Uzman profil sayfalari]]"
  - "[[P1-10 Sitemap Search Console Bing]]"
---

# P1-07 · Prerender + route bazlı meta ve canonical

> [!warning] Sorun
> - JS çalışmadan dönen HTML her route'ta aynı:
>   - title "Özel Humentis Aile Danışma Merkezi", aynı description
>   - `canonical = https://humentis.com.tr/`
>   - gövde metni yalnız "Ana içeriğe geç"
> - JS birkaç saniye sonra bunları route'a göre değiştiriyor. Google, JS ile mevcut canonical'ı değiştirmenin "beklenmedik sonuçlara" yol açabileceği konusunda uyarıyor.
> - JS çalıştırmayan botlar (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) 25 URL'nin hepsinde aynı boş sayfayı ve ana sayfaya işaret eden canonical'ı görüyor.
> - Stack: React SPA (Vite) + ASP.NET + Cloudflare. ⚠️ *Düzeltme 30.09: Node.js/Express API + Windows IIS (ARR ile API'ye reverse proxy) + Cloudflare. `x-powered-by: ASP.NET` başlığı IIS'ten geliyor; API yanıtında `Express, ARR/3.0, ASP.NET` görünüyor. Uygulama ASP.NET değil. Aşağıdaki "ASP.NET" adımları IIS web.config kuralı (hazır HTML varsa onu ver, yoksa SPA fallback) ya da Express ile yapılmalı.*
>
> Ayrıntı: [[Kanit - Site taramasi 2026-09-29#Ham HTML (JS olmadan)]]

## Seçenekler
1. **Build-time prerender (önerilen)**
   - Public route'lar için build'de statik HTML üret: `/`, hizmet sayfaları, `/uzmanlar`, `/uzmanlar/<slug>`, `/bolumlerimiz`, `/iletisim`, `/sss`, makaleler.
   - Araç: Vite prerender eklentisi ya da Playwright ile kendi script'iniz. Route listesi sabit route'lar + `/api/specialists`'ten gelsin.
   - ASP.NET, istek path'ine karşılık gelen prerender HTML'i serve etsin; yoksa SPA fallback.
   - React `hydrateRoot` ile devralsın.
2. **Ara çözüm (~1 gün)**
   - ASP.NET middleware `index.html`'i route'a göre şablonlasın: `<title>`, description, canonical, `og:*`, JSON-LD ve kısa bir statik içerik bloğu (H1 + 2 paragraf + iletişim).
   - Meta sorununu çözer; AI botları için içerik yine sınırlı kalır.
3. **Tam SSR** (Next.js ya da React Router framework mode): büyük refactor, şimdilik gerekmiyor.

## Kabul kriterleri
- [ ] `curl -s https://humentis.com.tr/uzmanlar | grep -o "<title>.*</title>"` route'a özel title döndürüyor
- [ ] Her public route'un ham HTML'inde kendi canonical'ı var; sayfada tek canonical tag var ve JS onu değiştirmiyor
- [ ] `curl -s https://humentis.com.tr/bolumlerimiz | sed 's/<[^>]*>//g' | wc -w` > 150
- [ ] Search Console → URL Denetimi → "Taranan sayfayı görüntüle" HTML'inde içerik var
- [ ] Rich Results Test schema'yı hatasız okuyor
