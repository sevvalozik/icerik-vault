---
type: arastirma
client: "Humentis"
slug: humentis
rapor_turu: teknik
status: tamamlandi
date: 2026-10-07
kaynak: "Claude Code (Furkan Bey oturumu); canlı ölçüm (curl, tarayıcı, Lighthouse 12); kod: OmerBirol/humentis, commit 5ac6cb5 + 74503c4"
tags: [rapor, seo, geo, humentis, site-plani, faz2]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[01 Durum raporu 2026-10-06]]", "[[seo-geo-uygulama-2026-10-05]]", "[[00-seo-geo-standardi]]"]
---

# Humentis — Site planı Faz 2 uygulaması (7 Ekim 2026)

> Marka kuralı: `00-Musteriler/humentis/marka-brief.md` §4 ve §7 uygulandı. Biyografilerdeki "terapi / tedavi / hasta" dili ([[P2-14 Mevzuat kontrolu]]) hukuk kararı beklediği için değiştirilmedi.

## Özet

- **Sonuç:** Faz 2'deki 10 görevin koddan çözülebilen tüm maddeleri düzeltildi, yayına alındı ve canlıda doğrulandı. Kalanlar karar, içerik ya da hesap erişimi gerektiriyor.
- **En önemli 3 bulgu:**
  1. Açılış animasyonu her tam yüklemede ~5,5 sn sürüyor (ekip kararıyla duruyor). Mobil LCP ana sayfada 3,1 sn, `/ankara-psikolog`'da 3,3 sn.
  2. Sitede Google etiketi yok (GA4/Ads kimliği yok). Reklam dönüşümü hâlâ ölçülmüyor.
  3. Uzman profilleri Google dizininde değil; Search Console doğrulaması var ama dizine ekleme istekleri yapılmadı.
- **İlk yapılacak 3 iş:**
  1. Search Console'da sitemap gönderilmeli ve 15 öncelikli URL için dizine ekleme istenmeli.
  2. GA4 ve Ads kimlikleri verilmeli, KVKK ve çerez metni hukukça güncellenmeli, sonra etiket açılmalı.
  3. Animasyon kararı LCP verisiyle yeniden konuşulmalı.

## Yöntem ve veri kaynağı

- **İncelenen:** `humentis.com.tr` ham HTML'i (curl, Googlebot kullanıcı ajanı), sitemap'teki 44 URL, `/api/specialists/*/open-slots`, tarayıcıda 375×812 çerezsiz açılış, React görünümü (profil, `/icerik`, `/kvkk`, `/galeri`, `/giris`). Hız ölçümü Lighthouse 12 ile yapıldı (mobil, simüle yavaşlatma); PageSpeed API'nin günlük kotası doluydu.
- **Ölçülemeyen:**
  - Search Console ve Ads verisi (hesap erişimi yok).
  - Test randevu talebinin operasyona düşmesi (canlıya sahte talep gönderilmedi).
  - Rich Results Test (tek tek çalıştırılmadı).

## Yapılanlar (canlıda)

| Görev | Değişiklik | Kanıt (7 Ekim) |
|---|---|---|
| F2-01 | Uygulama ekranları canonical'sız noindex. Sayfa üretilemezse 503 + Retry-After + noindex | `/uzmanlar` 20/20 doğru başlık; `/giris` canonical 0 |
| F2-03 | Tek başlık şablonu `Ad Soyad – Unvan, Ankara \| Humentis` | 18 profil şablonda, hepsi ≤60 karakter |
| F2-03 | Kart özetinde yer tutucu yerine biyografinin ilk cümlesi | "yakında güncellenecek": `/uzmanlar`, hizmet sayfaları ve `llms-full.txt`'te 0 |
| F2-03 | Kaynak hata düzeltildi: düzenleyici boş biyografiyi yer tutucuyla dolduruyordu | Sena Şimşek profilinde yer tutucu yok |
| F2-03 | Kişiye özgü SSS: yaklaşımlar, diller, test eğitimleri (yalnız gerçek veriden) | Solmaz Şenyüz ve Aybala Görkem Polat 9 soru; Zeynep Baltacı +dil; Elif Köden +yaklaşım +test |
| F2-03 | Çalışma alanları: ilk 12 görünür, kalanı açılır listede | Ali Karaömerlioğlu: 12 + "Diğer çalışma alanları (75)" |
| F2-04 | WhatsApp hazır metni + kaynak kodu ham HTML'de (kural React ile ortak) | `/` web-ana, `/ankara-psikolog` web-ankara, MOXO web-test, profil web-uzman |
| F2-04 | MOXO meta açıklamasına "Ankara" | — |
| F2-05 | `/icerik` rehberleri listeliyor, indekste ve sitemap'te | robots `index, follow`; sitemap 44 URL |
| F2-10 | Yasal sayfalarda tam metin, "Son güncelleme" ve meta açıklama | KVKK 1.082, kullanım 657, gizlilik 178, çerez 133 kelime |
| F2-10 | Galeri görselleri `<img>` + alt metin | 6 görsel, hepsi alt metinli |
| F2-08 | IndexNow bildirimi | 44 URL, 200 |

Testler: 95 testten 94'ü geçiyor. Kalan 1 hata (`site-content` dört bölüm testi) bu çalışmadan önce de vardı. Diff kapısında kayıp yok; değişen yalnız 5 meta açıklaması.

## Doğrulanan ama değiştirilmeyenler

- **Çerez penceresi:** Kilitlemiyor, ekranın %25'i.
- **Randevu takvimi:** 18 uzmanda ileri tarihli saat var. ⚠️ 17 uzmanda aynı varsayılan çizelge görünüyor (hafta içi 09–17); gerçek saatler operasyondan teyit edilmeli.
- **Takma adresler:** `/ekibimiz`, `/makaleler`, `/sss` zaten 301 dönüyordu.
- **Kaynak linki:** "Türk Psikologlar Derneği" ham HTML'de zaten linkliydi.
- **6 Ekim taramasındaki iki bulgu:** "WhatsApp kodu yok" bulgusu yalnız ham HTML için geçerliydi, React'te kodlar çalışıyordu. `/uzmanlar` eski kabuk bulgusu tekrarlanmadı.

## Hız (Lighthouse 12, mobil)

| Sayfa | Skor | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|
| `/` | 91 | 3,1 sn | 1,3 sn | 120 ms | 0,031 |
| `/ankara-psikolog` | 85 | 3,3 sn | 3,3 sn | 0 ms | 0,02 |
| MOXO | 89 | 2,2 sn | 2,2 sn | 0 ms | 0,021 |

LCP öğesi React'in çizdiği başlık ya da giriş paragrafı. Sürenin büyük kısmı (2,2–2,7 sn) "render delay": sunucu HTML'i hazır, ama görünür içerik JS'in yüklenmesini bekliyor. Gerçek kullanıcıda buna ~5,5 sn'lik açılış animasyonu eklenir. Sunucu yanıtı (TTFB) 0,6–0,8 sn.

## Karar / içerik / erişim bekleyenler

| # | İş | Kimde |
|---|---|---|
| 1 | Search Console: mülkün sahibi olan hesapla sitemap gönderimi ve 15 URL için dizine ekleme isteği; Bing Webmaster | Hesap sahibi |
| 2 | GA4 + Ads kimlikleri, KVKK ve çerez metni güncellemesi (araç adlarıyla), sonra etiket | Kurucu + hukuk + Ads |
| 3 | Açılış animasyonu kararının LCP verisiyle yeniden değerlendirilmesi | Kurucular |
| 4 | Ücret bilgisi (aralık / "neye göre değişir" / hiç) | Kurucu |
| 5 | Hizmet sayfalarında yazar / gözden geçiren (gerçekten okuyan uzman ve tarih) | Uzmanlar |
| 6 | MOXO ve WISC-IV sayfalarına uygulayıcı uzmandan süreç, rapor ve SSS (15'e) | Uygulayıcı uzmanlar |
| 7 | Çalışma saatleri, bina adı ve kat, otopark bilgisi | Operasyon |
| 8 | Kart özeti (1–2 cümle): Sena Şimşek, Ali Karaömerlioğlu, Beliz Kafalı. Sena Şimşek'in biyografisinin başındaki yer tutucu cümle panelden silinmeli | Uzmanlar / panel |
| 9 | 10–12 odak alan seçimi: Ali 87, Elif Silav 68, Aybala 51, Irmak 42, Beliz 27, Sena 24, Elif Köden 21 alan | Uzmanlar |
| 10 | Başak Kale biyografisi ≥150 kelime | Uzman |
| 11 | Biyografilerde "terapi / tedavi / hasta" ve tanı adları | Hukuk |
| 12 | Gerçek çalışma saatlerinin takvime girilmesi (varsayılan 09–17 yerine) | Operasyon |
| 13 | Test odası ve çocuk odası fotoğrafları (galeri ≥8) | Kurucular |
| 14 | 12 yazılık içerik kümesi (4 taslak uzman onayında) | Uzmanlar |
| 15 | Ads: nihai URL'ler ve site bağlantıları ([[F2-09 Ads guncelleme]]) | Ads |

## Galeri açıklama önerileri (yönetim paneli → Galeri)

Fotoğraflar 7 Ekim'de incelendi; hepsi danışma odası. Açıklama girilince alt metin ve görsel başlığı olarak kullanılır.

| Sıra | Görsel | Önerilen açıklama |
|---|---|---|
| 1 | `/gallery/463766f7…jpg` | Danışma odası: tekli koltuk, abajur ve yuvarlak sehpa – Humentis, Çankaya |
| 2 | `/gallery/b076ef4b…jpg` | Pencere kenarında oturma grubu olan danışma odası – Humentis, Çankaya |
| 3 | `/gallery/dafb228b…jpg` | Kitaplıklı danışma odası ve tekli koltuk – Humentis, Çankaya |
| 4 | `/gallery/0e05f8e8…jpg` | Kitaplıklı danışma odası, geniş açı – Humentis, Çankaya |
| 5 | `/gallery/7c9c2993…jpg` | Köşe pencereli, geniş oturma gruplu görüşme odası – Humentis, Çankaya |
| 6 | `/gallery/0566c731…jpg` | Köşe pencereli görüşme odası, farklı açı – Humentis, Çankaya |

## Marka kuralı gereği uygulanmayanlar

- Biyografilerdeki mevzuat dili değiştirilmedi (hukuk kararı).
- Teyitsiz sağlık bilgisi (test süreleri, rapor içeriği) eklenmedi.
- Açılış animasyonu kaldırılmadı ([[P0-02 Acilis animasyonu]], 30.09.2026 ekip kararı).
