---
type: kutuphane
tags: [seo, geo, website, yontem, rehber, kontrol-listesi]
date: 2026-10-05
related: ["[[seo-dongusu]]", "[[claude-code-skilleri]]", "[[seo-geo-uygulama-2026-10-05]]"]
---

# SEO + GEO ileri seviye standardı (her site için)

> **Bu not ne?** Humentis sitesinde 1–5 Ekim 2026'da uçtan uca yapılan SEO, GEO ve backlink çalışmasının, başka her siteye uygulanabilir hâle getirilmiş özeti. Yeni bir site yapılırken, devralınan bir site düzeltilirken ya da "Google'da çıkmıyoruz" denildiğinde **varsayılan standart budur**. Kısaltma yok: site bu listeden geçmeden "bitti" sayılmaz.
>
> **Öncelik sırası:** müşterinin `00-Musteriler/<slug>/marka-brief.md` dosyası (§4 yasak kelimeler, §7 yasal kurallar) bu standarttan üstündür. Çelişirse brief uygulanır, raporda "marka kuralı gereği uygulanmadı" yazılır.
>
> **Komut:** Claude Code'da `/seo-geo <musteri-slug> <site-url veya repo yolu>` (skill: `.claude/skills/seo-geo/`).

## Altı ilke

1. **Ham HTML = tarayıcıda görünen sayfa.** Googlebot JS'i geç ve eksik çalıştırır; ChatGPT, Claude ve Perplexity'nin arama botları **hiç çalıştırmaz**. Tek sayfalık uygulamada (React/Vite SPA) sunucu tarafı HTML, prerender ya da statik çıktı şart.
2. **Tek karar noktası.** Başlık, açıklama, canonical, robots ve schema **tek fonksiyondan** üretilir. İstemci ve sunucu aynı fonksiyonu çağırır; iki ayrı metin yazılmaz.
3. **Görünmeyeni işaretleme, doğrulanmamışı iddia etme.** Schema yalnız sayfada görünen bilgiyi taşır. Yorum, puan, fiyat ve "online/yüz yüze" gibi iddialar yalnız gerçek veriden gelir.
4. **Tek niyet, tek sayfa. Önce düzelt, sonra yaz.** Yeni sayfa açmadan önce mevcut sayfa o niyete cevap veriyor mu bakılır.
5. **Dizine girmeyen sayfa yoktur.** Her yayından sonra Search Console, Bing ve IndexNow bildirimi yapılır, `site:` ile kontrol edilir.
6. **Diff kapısı.** Yayından önce "eskide olup yenide olmayan" her şey (başlık, SSS, iç link, kaynak, metin) listelenir ve onaylanır.

## Çalışma sırası

| Faz | İş | Not |
|---|---|---|
| 0 | **Denetim**: ham HTML, durum kodları, yönlendirmeler, `site:` sonucu, marka ve kişi adı aramaları, Search Console ve Bing durumu | [[01-teknik-seo#Denetim komutları]] |
| 1 | **Teknik temel**: sunucu HTML'i, sayfa başına başlık/açıklama/canonical, gerçek 404, 301'ler, noindex, sitemap, robots | [[01-teknik-seo]] |
| 2 | **Schema ve varlık**: tek `@graph`, kurum, kişi, sayfa türleri | [[02-schema-ve-varlik-seo]] |
| 3 | **GEO**: AI botlarına erişim, llms.txt, cevabı başta veren metin, varlığa özel SSS | [[03-geo-yapay-zeka-aramasi]] |
| 4 | **Yerel SEO**: tek NAP yazımı, Google İşletme Profili, dizinler | [[05-yerel-seo-nap-isletme-profili]] |
| 5 | **Anahtar kelime ve içerik**: para kalıpları, sayfa brief'i, haftalık en fazla 1 sayfa | [[07-anahtar-kelime-ve-icerik]] |
| 6 | **Kişi adı aramaları**: ekip/uzman/doktor/avukat sayfası olan sitelerde | [[04-kisi-adi-aramalari]] |
| 7 | **Backlink ve atıf**: önce kendi insanlarının profilleri, sonra dizinler, sonra kazanılan linkler | [[06-backlink-ve-atif]] |
| 8 | **Yayın güvenliği**: diff kapısı, eşitlik testi, yedek, doğrulama, geri dönüş | [[08-yayin-guvenligi]] |
| 9 | **Ölçüm ve dizine ekleme**: Search Console, Bing, IndexNow, haftalık döngü, aylık AI testi | [[09-olcum-ve-dizine-ekleme]] · [[seo-dongusu]] |

## "Bitti" kontrol listesi

Rapora kopyalanır, her madde kanıtla (komut çıktısı, ekran görüntüsü) işaretlenir.

**Teknik**
- [ ] Her URL'nin **ham HTML'inde** kendine ait `<title>`, meta description, canonical, tek H1 ve gövde metni var (JS kapalıyken sayfa okunuyor)
- [ ] Başlıklar ≤60 karakter, açıklamalar ≤155 karakter; marka ve şehir geçiyor; yasak kelime yok
- [ ] Olmayan adres **404** dönüyor (200 değil) ve 404 sayfasında canonical yok
- [ ] `www` → çıplak alan adı ve `http` → `https` **301**; eski adresler 301 ile yenisine (302/307 değil)
- [ ] İnce sayfalar (boş liste, "yakında" yazıları, iç arama, etiket, boş profil) `noindex` ve sitemap dışında; içerik gelince otomatik açılıyor
- [ ] `sitemap.xml` yalnız 200 dönen, indekslenebilir, kendi canonical'ına işaret eden URL'leri içeriyor; `lastmod` gerçek değişiklik tarihi; görseller `image:image` ile
- [ ] `robots.txt` panel/API/giriş sayfalarını kapatıyor ve sitemap satırı var
- [ ] SSS cevapları DOM'da (kapalı akordeon `hidden` olabilir, silinemez); başlık sırası mantıklı (kartlar h2 altında h3)
- [ ] Her para sayfasına en az 5 farklı sayfadan, tarif edici ve çeşitli anchor'la bağlamsal iç link var; yetim sayfa yok; footer'da hizmet menüsü var
- [ ] Sunucu HTML'i ile React çıktısının başlıkları ve metni testle karşılaştırılıyor (eşitlik testi)

**Schema ve GEO**
- [ ] JSON-LD tek `@graph`: kurum (LocalBusiness/ProfessionalService ya da uygun tür), WebSite, WebPage türevi, BreadcrumbList; kişi sayfalarında Person + ProfilePage; SSS'li sayfalarda FAQPage
- [ ] Kurumun `sameAs` ve `hasMap` alanında Google İşletme Profili (CID linki) var
- [ ] Rich Results Test ve Schema.org doğrulayıcısında hata yok
- [ ] `llms.txt` ve `llms-full.txt` dinamik üretiliyor (kurum özeti, hizmetler, kişiler, rehberler, iletişim)
- [ ] Cloudflare ya da güvenlik duvarı OAI-SearchBot, GPTBot, ClaudeBot, Claude-SearchBot ve PerplexityBot'u engellemiyor (`curl -A` ile 200)
- [ ] Her sayfanın ilk iki cümlesi soruyu doğrudan cevaplıyor; "Son güncelleme" ve `dateModified` gerçek tarih

**Yerel ve dış**
- [ ] Ad, adres ve telefon (NAP) sitede, schema'da, İşletme Profili'nde ve dizinlerde **harfi harfine aynı** (posta kodu dahil)
- [ ] Ekip üyelerinin dış profilleri listelendi; her birinin "web sitesi" alanı kendi site profil sayfasına işaret ediyor ya da bunun için iş açıldı
- [ ] Backlink ve atıf listesi önceliklendirildi; satın alınan link yok

**Yayın ve ölçüm**
- [ ] Diff kapısı geçti; kayıplar ya geri getirildi ya da onaylandı
- [ ] Yedek alındı; yayından sonra doğrulama komutları çalıştı; geri dönüş yolu yazılı
- [ ] Search Console'da Domain mülkü doğrulandı, sitemap gönderildi, önemli sayfalar için "Dizine eklenmesini iste" yapıldı
- [ ] Bing Webmaster Tools'a Search Console'dan içe aktarıldı; IndexNow anahtarı yayında ve bildirim gönderildi
- [ ] 1 hafta sonra `site:alanadi` ve marka/kişi adı aramaları tekrar kontrol edildi ve rapora yazıldı

## Gerçekçi beklenti

- Kod tarafı 1–2 haftada biter. Google'da görünür etki indekslendikten sonra 2–8 hafta sürer.
- Zayıf domainde kusursuz sayfa, rekabetçi kelimede 40. sırada kalabilir (Dulait). Sayfa otoriteyi düzeltmez, yalnız boşa harcanmasını önler. Otorite dışarıdan gelir: [[06-backlink-ve-atif]].
- Bir sayfa değiştikten sonra ölçmeden önce yaklaşık 60 gün beklenir; bu sürede aynı sayfaya tekrar dokunulmaz.
- Kişi adı aramalarında en hızlı kazanç sitede değil, kişinin kendi Google İşletme kartının "Web sitesi" alanındadır: [[04-kisi-adi-aramalari]].

## Kaynaklar

- **Nicholas Dulait**, "My chief of SEO, claude code opus 5.5" (X, 28.09.2026): 6 skill (money-keywords, page-brief, ship-page + diff kapısı, weekly-seo, pattern-drip, geo-rankings) → [[07-anahtar-kelime-ve-icerik]], [[08-yayin-guvenligi]], [[03-geo-yapay-zeka-aramasi]].
- **Hasan Yaşar**, "SEO Öğreniyorum" 27 gün (X serisi, 2026): sitemap, iç link, eski içerik, index bloat ve backlink kuralları → [[01-teknik-seo]], [[06-backlink-ve-atif]].
- **Neil Agarwal**, "how we 47x'd our SEO in 2 weeks" (X, 24.09.2026): Search Console döngüsü → [[seo-dongusu]].
- **Uygulama kaydı:** Humentis, 1–5 Ekim 2026 → [[seo-geo-uygulama-2026-10-05]].
