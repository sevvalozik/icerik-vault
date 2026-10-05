---
type: kutuphane
tags: [seo, search-console, bing, indexnow, olcum, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[seo-dongusu]]", "[[04-kisi-adi-aramalari]]"]
---

# Ölçüm ve dizine ekleme

Üst not: [[00-seo-geo-standardi]]

Kod ne kadar iyi olursa olsun **Google sayfayı yeniden taramadan hiçbir şey değişmez.** Humentis'te sunucu HTML'i yayına girdikten 2 gün sonra Google'da hâlâ yalnız 15 eski sayfa vardı; 17 uzman profilinin hiçbiri dizinde değildi. Ad aramasında çıkmamanın sebebi sıralama değil, dizine girmemekti.

## 1. Kurulum (bir kez)

| Adım | Nasıl | Not |
|---|---|---|
| Search Console **Domain** mülkü | DNS TXT kaydı (`google-site-verification=…`) | Önce kontrol: `dig +short TXT alanadi.com` ve web kökünde `google*.html`. Doğrulama varsa mülk birinin hesabında duruyor; o hesabı bulun |
| Sitemap gönder | Search Console → Site haritaları → `sitemap.xml` | |
| Bing Webmaster Tools | "Search Console'dan içe aktar" | ChatGPT araması ve Copilot |
| IndexNow | Rastgele anahtar → `https://site/<anahtar>.txt` (içinde anahtar) + sunucuda ortam değişkeni | Bing, Yandex, Seznam, Naver. **Google'a gitmez** |
| Analitik | GA4 + Consent Mode v2; dönüşümler (randevu, arama, WhatsApp) **ilk açılış sayfasına göre** | KVKK metni önce güncellenir |

## 2. Her yayından sonra

1. **IndexNow:** değişen URL'ler ya da sitemap'in tamamı:
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" -X POST https://api.indexnow.org/indexnow \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d '{"host":"alanadi.com","key":"<anahtar>","keyLocation":"https://alanadi.com/<anahtar>.txt","urlList":["https://alanadi.com/..."]}'
   ```
   200/202 = kabul. İçerik paneli kayıt değişince otomatik bildirebilir.
2. **Search Console → URL denetimi** → yeni ya da önemli değişen sayfa → "Dizine eklenmesini iste". Günlük kota ~10 URL; önce para sayfaları ve kişi profilleri.
3. **Canlı testte** ("Canlı URL'yi test et") taranan HTML'de başlık ve gövde görünüyor mu, bak (gerçek Googlebot'un ne gördüğünün kanıtı).
4. 3–7 gün sonra: `site:alanadi.com/<klasor>/` ve marka/kişi adı aramaları.

## 3. Dizin kapsamı durumları

| Durum | Anlamı | Ne yapılır |
|---|---|---|
| Bulundu – şu anda dizine eklenmedi | Google adresi biliyor, taramayı ertelemiş | İç linkleri güçlendir, dizine eklenme iste; toplu yayını durdur, küçük partiler |
| Tarandı – şu anda dizine eklenmedi | Taradı ama değer görmedi | İçerik ince/kopya mı? Birleştir ya da güçlendir |
| Google, kullanıcıdan farklı bir standart sayfa seçti | Canonical çatışması | 301 ve canonical tutarlılığı |
| Soft 404 | 200 dönen boş sayfa | Gerçek 404 ya da içerik |
| noindex etiketi nedeniyle hariç | Bilinçli mi? | İnce sayfa kuralına bak |

## 4. Ritim

- **Haftalık (pazartesi):** Search Console 6 sinyal → [[seo-dongusu]]. Son 60 günde düzenlenen sayfaya dokunma.
- **Aylık:** kişi adı sorguları (Performans → sorgu "içerir: <soyad>"), AI görünürlük testi ([[03-geo-yapay-zeka-aramasi#Aylık AI görünürlük testi]]), backlink takip tablosu ([[06-backlink-ve-atif]]), NAP tablosu.
- **Üç aylık:** yıllı rehberlerin gerçek gözden geçirmesi, ince sayfa kuralı, çalışma alanı listelerinin budanması.

## 5. Hedef tablosu (rapora konur)

| Ölçüt | Başlangıç | 3. ay hedefi |
|---|---|---|
| Dizindeki sayfa (`site:`) | | Sitemap'teki URL sayısına yakın |
| Kişi adı sorgularında ilk 3'te olan profil | | Profillerin yarısı |
| Para kalıplarında ilk 10'da olan sayfa | | |
| Kuruma link veren dış profil | | |
| AI testinde doğru bilgiyle geçen soru | | |
| Organik giriş → temas/randevu | | |
