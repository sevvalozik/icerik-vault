---
type: kutuphane
tags: [seo, geo, kisi-adi, profil-sayfasi, isletme-profili, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[02-schema-ve-varlik-seo]]", "[[05-yerel-seo-nap-isletme-profili]]", "[[06-backlink-ve-atif]]"]
---

# Kişi adı aramaları: "<ad soyad>" yazınca sitemizdeki profil

Üst not: [[00-seo-geo-standardi]]

Psikolog, doktor, avukat, danışman, eğitmen gibi **ekip üyelerinin adıyla aranan** her sitede uygulanır. Hedef: kişinin adı arandığında kurumun sitesindeki profil sayfası ilk sayfada, ideal olarak ilk 3'te; sağdaki bilgi kartında kurum sitesine bağlantı.

## Neden bugün dizinler önde?

Google, bir ada **en çok ve en tutarlı bağlanan** sayfaları öne çıkarır: randevu dizinleri (yıllardır dizinde, yorumlu, birbirine bağlı), kişinin kendi sitesi, Instagram, LinkedIn. Kurumun profil sayfası genelde (1) dizinde bile değildir, (2) hiçbir dış profilden link almaz.

## Önce teşhis (15 dakika)

1. `site:alanadi.com/<profil-klasoru>/` → profil sayfaları Google dizininde mi? **Yoksa sorun sıralama değil, dizine girmemedir.** Önce [[09-olcum-ve-dizine-ekleme]].
2. Her kişinin adını tırnaksız arayın; kaydedin:
   - Sağda **kendi İşletme kartı** var mı? Varsa adresi ve **"Web sitesi" düğmesinin gittiği adres** (tarayıcıda: `[...document.querySelectorAll('a')].filter(a=>/^Web sitesi$/.test(a.innerText.trim())).map(a=>a.href)`).
   - İlk 10'daki alan adları; bizim sitemiz kaçıncı?
   - **Ad çakışması:** aynı adlı başka biri (akademisyen, sporcu) ilk sayfayı dolduruyor mu? O kişi için hedef sorgu "<ad soyad> <meslek>" olur.
   - **Rekabet:** toplam sonuç çok azsa (ör. 5 sonuç) profil dizine girince en hızlı çıkacak ad odur.
3. Profil sayfasının ham HTML'i dolu mu, `index` mi, sitemap'te mi ([[01-teknik-seo#Denetim komutları]])?

## Sitede: profil sayfası standardı

| Bölüm | Kural |
|---|---|
| Başlık | `<Ad Soyad> – <Unvan>, <Şehir> \| <Marka>` (≤60 karakter) |
| Açıklama | Ad + unvan + çalışma alanı + "<Marka>, <İlçe> / <Şehir>" |
| H1 | Yalnız ad soyad; altında unvan |
| Bilgi kartları | Üniversite, uzmanlık, bölüm, yaş grubu, lokasyon, görüşme biçimi (yalnız gerçek veriden; ör. randevu kayıtlarındaki online/yüz yüze seçenekleri) |
| Özgeçmiş | Özet 20–35 kelime; biyografi ≥60 kelime, birinci ya da üçüncü tekil şahıs, tutarlı |
| Eğitim, deneyim, sertifikalar | Liste; deneyimde kurum + dönem |
| Çalışma alanları | **En fazla 12 odak alan.** 40–80 maddelik liste hem okura hem Google'a "her şey" der |
| Yöntemler | Tam adıyla: "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)", kısaltma tek başına bırakılmaz |
| Kişiye özel SSS | 6 soru ([[03-geo-yapay-zeka-aramasi#3. Alıntılanabilir metin]]), cevaplarda bölüm sayfalarına ve iletişime link |
| İlgili kişiler | "Aynı bölümdeki diğer uzmanlar" (4 profil) → profiller arası iç link |
| Doğrulama satırı | "Bilgileri kurum tarafından kontrol edildi. Son kontrol: tarih" (kayıt varsa) |
| Fotoğraf | Gerçek, net, `alt` = ad soyad; görsel sitemap'te |
| Schema | Person + ProfilePage + FAQPage + BreadcrumbList; `sameAs`, `alternateName`, `hasOccupation`; kurum `employee` ile kişiye bağlı ([[02-schema-ve-varlik-seo]]) |
| İç linkler | Ana sayfa, ekip listesi, ilgili hizmet sayfaları ve yazıların yazar satırı profile link verir |
| İnce profil | Özet/biyografi eşiği geçilmeden `noindex` (boş profil ad aramasında zaten çıkamaz) |

## Site dışında (asıl kaldıraç)

Öncelik sırası:
1. **Kişinin kendi Google İşletme kartı** (varsa): "Web sitesi" alanı → kurum sitesindeki profil adresi. Ad arandığında bağlantı, dizine eklenmeyi beklemeden kartta görünür. Kişinin kendi sitesi varsa site kalabilir; o zaman "Randevu bağlantısı" alanı profil adresine verilir. Kart adresi kurumun NAP'ıyla harfi harfine aynı (posta kodu dahil). **Bu alanı yalnız kart sahibi değiştirebilir** → kişiye 2 dakikalık talimat gönderilir.
2. **Kişinin kendi sitesi:** "Çalıştığım yer" bölümüne kurum adı + profil linki.
3. **Randevu dizinleri ve pazar yerleri** (doktortakvimi, doktorsitesi, Armut, Terappin vb.): adres olarak kurum, "web sitesi" alanına profil adresi. Yorum sayısı çok olan profil en değerlisidir.
4. Mesleki dernek, üniversite mezun sayfası, konuşmacı/yazar sayfaları.

Anchor: kişinin adı ya da "<Marka>". Kişiye gönderilecek not kısa olur: hangi platformda, hangi alan, hangi adres.

## Dizine alma ve ölçüm

- Search Console → URL denetimi → her profil için "Dizine eklenmesini iste" (günlük kota ~10 → ikiye bölün).
- Aylık: Search Console Performans → sorgu "içerir: <soyad>" → gösterim ve ortalama sıra. Hedef: kendi adı sorgusunda ilk 3.
- AI kontrolü: "<Ad Soyad> kimdir, nerede çalışıyor?" ([[03-geo-yapay-zeka-aramasi#Aylık AI görünürlük testi]]).

## Beklenti

- Dizine girdikten sonra rekabeti az olan adlarda birkaç hafta içinde ilk sayfa.
- Yıllardır güçlü dizin profilleri olan kişilerde ilk sayfa mümkün; 1. sıra dış profillerin kurum profiline link vermesiyle gelir.
- Kişi kurumdan ayrılınca: profil 301 ile ekip sayfasına, `sameAs` kaydı ve `employee` bağı kaldırılır.
