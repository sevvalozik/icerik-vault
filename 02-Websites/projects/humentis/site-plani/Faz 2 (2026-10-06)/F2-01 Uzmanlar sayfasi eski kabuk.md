---
tags: [humentis, site, p0, seo, dogrulama, faz2]
oncelik: P0
durum: tamamlandi
sahip: site-ekibi
tahmini_sure: "10 dk test; gerekirse 1–2 saat"
son_tarih: 2026-10-08
bagli:
  - "[[P1-07 Prerender ve meta]]"
---

# F2-01 · `/uzmanlar`: tutarsız yanıt (önce doğrula)

> [!warning] Belirti
> 6 Ekim taramasında `https://humentis.com.tr/uzmanlar` adresi eski SPA kabuğunu döndürdü:
> - title "Özel Humentis Aile Danışma Merkezi", eski description
> - `canonical = https://humentis.com.tr/`
> - gövde yalnız "Ana içeriğe geç"
>
> Aynı sayfaya yapılan 6 farklı istek (`/uzmanlar/`, `?v=2`, `?v=3`, büyük harfli host, `:443`, `/ekibimiz`) yeni sayfayı döndürdü ("Psikolog ve Aile Danışmanı Kadromuz, Ankara | Humentis", 18 uzman).
>
> İki olasılık var: tarama aracının kendi önbelleği, ya da CDN'de / bir sunucu örneğinde kalmış eski kopya. Hangisi olduğu aşağıdaki testle 2 dakikada anlaşılır.

> [!info] Neden bakmaya değer
> `/uzmanlar` her sayfanın menüsünde ve reklamdaki "Ekibimiz" site bağlantısının hedefi. Bot eski kabuğu alırsa sayfayı boş görür ve canonical yüzünden ana sayfanın kopyası sayar.

## Test
```bash
for i in $(seq 20); do curl -s https://humentis.com.tr/uzmanlar | grep -o "<title>[^<]*"; done | sort | uniq -c
curl -sI https://humentis.com.tr/uzmanlar | grep -i -E "cf-cache-status|^age|cache-control"
```
- 20/20 yeni title → sorun yok, notu kapatın.
- Bir kez bile eski title çıkarsa aşağıdaki adımlar.

## Test başarısızsa
1. Cloudflare'de bu URL'yi (gerekirse tüm HTML'i) purge et; deploy sonrasına otomatik purge ekle.
2. HTML yanıtlarına `Cache-Control: no-cache` ya da kısa TTL ver.
3. Birden fazla sunucu örneği varsa hepsinin aynı build'de olduğunu doğrula.

## Her durumda (sertleştirme)
- Eski kabuk yalnız uygulama ekranlarında (`/admin`, `/giris`, `/uzman/panel`, `/randevu/*`) kullanılsın.
- Kabuğun içindeki eski title, description ve ana sayfaya giden `canonical` kaldırılsın; `noindex` eklensin. Sızarsa bile zarar vermesin.

## Kabul kriterleri
- [ ] 20 istekte 20 yeni title
- [ ] Sitemap'teki 43 URL aynı testten geçiyor
- [ ] Kabukta canonical yok, `noindex` var

## Durum (7 Ekim 2026) ✅
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

- **Test:** `/uzmanlar` 20 istekte 20 kez yeni başlığı döndürdü ("Psikolog ve Aile Danışmanı Kadromuz, Ankara | Humentis"). Yanıt başlıkları: `cache-control: no-cache`, `cf-cache-status: DYNAMIC` (Cloudflare HTML'i önbelleğe almıyor). 6 Ekim'deki eski kabuk büyük olasılıkla tarama aracının kendi önbelleğiydi.
- **Sitemap:** 44 URL'nin her biri istendi; hiçbiri eski kabuğu döndürmedi.
- **Sertleştirme (yayında):**
  - Uygulama ekranları (`/giris`, `/admin`, `/uzman/panel/*`, `/randevu/*`) `noindex, nofollow` ve artık **canonical taşımıyor**. Sunucu ve tarayıcı aynı kuralı kullanıyor.
  - Sayfa üretilemezse (veritabanı geçici olarak yanıt vermezse) sunucu **503 + Retry-After + noindex** döndürüyor. Botlar boş kabuğu sayfa diye almaz, sonra tekrar dener.

### Kabul kriterleri
- [x] 20 istekte 20 yeni title
- [x] Sitemap'teki URL'ler (44) aynı testten geçiyor
- [x] Kabukta canonical yok, `noindex` var
