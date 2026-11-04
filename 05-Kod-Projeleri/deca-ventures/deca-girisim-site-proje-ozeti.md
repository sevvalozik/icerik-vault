---
type: kod-projesi
client: "Deca Ventures"
slug: deca-ventures
status: active
date: 2026-11-04
tags: [kod-projesi, website, deca-girisim]
related: ["[[seo-geo-denetim-2026-11-04]]", "[[instagram-ilk-paket]]"]
---

# Deca Girişim — web sitesi (decagirisim.com)

## Proje Tanımı

Deca Ventures'ın yeni adı Deca Girişim için yeni kurumsal site. 4 Kasım 2026'da müşterinin kendi Windows/IIS sunucusunda yayına alındı. Eski ASP.NET sitesinin (`decaventure`) yerine geçti; eski site silinmeden yedek olarak duruyor.

**Repo (kod, vault'ta DEĞİL):** https://github.com/sevvalozik/deca-girisim-site (özel; 4 Kasım 2026'da `main` dalına yüklendi). Not: `biinci/deca` adlı ayrı özel repo adından eski ASP.NET Deca sitesine ait olabilir; kontrol edilmedi.
**Yerel konum:** repoyu klonla; `README.md` güncelleme akışını anlatır. (Repo yüklenmeden önceki zip: `deca-site-kaynak.zip`.)
**Canlı klasör:** sunucuda `C:\decagirisim` (IIS sitesi `decagirisim`, uygulama havuzu `decagirisim`).

## Özellikler

- TR + EN ayrı sayfalar: ana sayfa, Modelimiz, Portföy, Haberler (yer tutucu, `noindex`), İletişim, 404.
- SEO + GEO: canonical, hreflang, JSON-LD, sitemap, robots, `llms.txt`, IndexNow (rapor: `08-Raporlar/deca-ventures/seo-geo-denetim-2026-11-04.md`).
- `web.config`: `.html` → temiz adres 301, `www`/`http` → `https://decagirisim.com`, `decaventure.com` → yeni site, gerçek 404.
- Portföy: 12 girişim; yalnız şirketin kendi sitesi doğrulananlar bağlı (any4, Hemshare, Kleaf, Acron).

## Teknolojiler

**Üretim:** Python 3 (yalnız standart kütüphane): `build.py` (TR), `build_en.py` (EN), `seo.py`, `build_seo_files.py`
**Frontend:** düz HTML + CSS + JS (`assets/`), yazı tipleri Google Fonts
**Sunucu:** Windows Server, IIS, URL Rewrite

## Güncelleme (özet)

1. `build.py` içindeki `PORTD` (portföy) / `URLS` (kart bağlantıları) düzenlenir, logo `assets/logos/<ad>.png`.
2. `python build.py && python build_en.py && python build_seo_files.py`
3. Değişen dosyalar sunucuda `C:\decagirisim` içine kopyalanır (yeniden başlatma yok).
4. Yeni Türkçe metin eklendiyse `build_en.py` çeviri listesine İngilizcesi, yeni girişim eklendiyse `build_seo_files.py`'deki listeye de eklenir.

## Dokümantasyon

- Repo içi: `README.md` (dosya haritası, güncelleme akışı, sunucu).
- SEO/GEO raporu: [[seo-geo-denetim-2026-11-04]].

## Ekip & Branch

- Yayını kuran: Şevval Özik. Güncellemeler bundan sonra Aydan Hanım'da.
- Sunucu erişimi (RDP) İbrahim Bey / Şevval'de; bilgiler vault'ta tutulmaz.

## Durum

- Canlı (4 Kasım 2026). Açık: Ephorix kartı (açıklama/sektör bekleniyor), Search Console kurulumu, yasal unvan ❓, adres detayları ❓, eski `decaventure` sitesinin bir hafta sonra durdurulması.
