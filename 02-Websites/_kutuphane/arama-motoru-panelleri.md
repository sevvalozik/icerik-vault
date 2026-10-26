---
type: kutuphane
status: active
tags: [website, seo, search-console, bing, yandex, indexnow, ekip-rehberi]
date: 2026-10-26
related: ["[[09-olcum-ve-dizine-ekleme]]", "[[admin-panel-standardi]]", "[[00-seo-geo-standardi]]"]
---

# Arama motoru panelleri — ekip rehberi

> **Kural (Furkan Bey, 26.10.2026):** "Search Console, Bing Webmaster, IndexNow, Yandex Webmaster — herkes hazırladığı sitenin ayarlarını bu panellerden yapacak." Siteyi kim yaptıysa yayın günü dört bağlantıyı o kurar. Sitenin yönetim panelinde **Arama motorları** ekranı bunun için var ([[admin-panel-standardi]]). Ölçüm döngüsü: [[09-olcum-ve-dizine-ekleme]].

## Sıra (yayın günü, ~30 dk)

| # | Panel | Nasıl | Sitedeki karşılığı |
|---|---|---|---|
| 1 | **Google Search Console** | **Alan adı (Domain)** mülkü → DNS TXT kaydı (önerilen). DNS yoksa URL öneki + "HTML etiketi" | Panel → Arama motorları → `google-site-verification` değeri (tüm `<meta>` etiketini yapıştırmak da olur) |
| 2 | Sitemap | GSC → Site haritaları → `https://alanadi/sitemap.xml` | — |
| 3 | **Bing Webmaster Tools** | "Search Console'dan içe aktar" (doğrulama + sitemap birlikte gelir). Olmazsa HTML meta | `msvalidate.01` değeri |
| 4 | **Yandex Webmaster** | Site ekle → "Meta tag" → Check; Indexing → Sitemap files | `yandex-verification` değeri |
| 5 | **IndexNow** | Panelde "Anahtar üret" → anahtar dosyası `/<anahtar>.txt` kendiliğinden yayında → "Tüm siteyi gönder" | Bing, Yandex, Seznam, Naver'e gider. Google IndexNow kullanmaz |
| 6 | Kullanıcılar | GSC ve Bing'de Furkan Bey + müşteri "Sahip" | — |
| 7 | Kontrol | Panelin "Durum" tablosu: 8 satır **Tamam** | — |

Panelde kaydedilen her ürün/yazı/sayfa canlı ortamda IndexNow ile otomatik bildirilir. Demo/staging'de (`SITE_ENV=demo`) gönderim yapılmaz.

## Neden dördü birden

- **Google:** trafiğin çoğu; Gemini ve AI Overviews da Google dizininden.
- **Bing:** ChatGPT araması ve Copilot Bing dizinini kullanır → GEO için Google kadar önemli.
- **Yandex:** Rusça/Türkçe ve Kafkasya/Orta Asya trafiği (otel müşterileri); IndexNow ortağı.
- **IndexNow:** yeni/değişen adres dakikalar içinde Bing/Yandex'te; tarama beklemez.

## Sık hatalar

- Doğrulama kodu yapıştırıldı ama Cloudflare/önbellek eski HTML'i veriyor → önbelleği temizle, panelde "Durum"u yenile.
- IndexNow 403/422: anahtar dosyası canlı alan adında açılmıyor (www/çıplak farkı, Cloudflare kuralı).
- "GPTBot llms.txt'e erişemiyor (403)": Cloudflare "Block AI bots" açık → kapat (standart: AI botlarına izin).
- Eski sitenin GSC mülkü başka birinin hesabında: `dig +short TXT alanadi` ile mevcut doğrulamayı bul, sahibini öğren; yeni mülk açmak geçmiş veriyi getirmez.

## Sonra

- 3–7 gün: `site:alanadi`, marka adı araması; GSC → Sayfalar raporu.
- Her pazartesi: GSC + Bing performans, dizine eklenmeyenler.
- Ayda bir: ChatGPT / Perplexity / Gemini'de sektör sorusuyla AI görünürlük testi → `08-Raporlar/<slug>/`.
