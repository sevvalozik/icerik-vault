---
tags: [humentis, site, p1, seo, kalite-puani, faz2]
oncelik: P1
durum: kismen
sahip: icerik + site-ekibi
tahmini_sure: "3–4 gün"
son_tarih: 2026-10-17
bagli:
  - "[[P1-08 Hizmet landing sayfalari]]"
  - "[[R2 Rakip kiyasi 2026-10-06]]"
  - "[[P0-04 Ara ve WhatsApp butonlari]]"
---

# F2-04 · Hizmet sayfalarını güçlendir

Sayfalar yayında ve yapıları doğru (H1, bölümler, SSS, uzmanlar, "Son güncelleme"). Sıralanan rakip sayfalarla fark şuralarda:

## Bulgular
| Konu | Bizde | Sıralanan rakipte |
|---|---|---|
| MOXO sayfası | ~1.100 kelime, 6 SSS, fiyat yok | ~4.000 kelime, 40+ SSS, "2.500–3.500 TL" aralığı |
| WISC-IV sayfası | ~1.100 kelime, 7 SSS, fiyat yok | Başlıkta "2026 Fiyatları" olan sayfalar sıralanıyor |
| `/ankara-psikolog` | Uzman kartları ve SSS öncesi 6 paragraf | ~4.500 kelime, dizin puanları ("212 değerlendirme") |
| Yazar / gözden geçiren | Hiçbir sayfada yok | Çoğunda uzman adıyla |
| Ücret bilgisi | Hiç yok | Aralık ya da "neye göre değişir" bölümü |
| Çalışma saatleri | Yok | Var |

## Yapılacaklar
1. **Yazar satırı.** Her sayfada "İçeriği hazırlayan / gözden geçiren: Ad Soyad, Unvan" + profil linki + tarih.
2. **Ücret bölümü (kurucu kararı).** "ankara psikolog fiyatları" aranıyor; reklamda "ankara psikolog ücret" başlığı var. Üç seçenek:
   - aralık yaz
   - "ücret neye göre değişir + güncel bilgi için yazın" bölümü
   - hiçbir şey yazma (mevcut durum; bu sorgularda sıralanmayız)
3. **Test sayfalarını derinleştir** (dolgu değil, soru-cevap):
   - adım adım süreç, kim uygular, hangi yaşta hangi sürüm
   - rapor nasıl görünür, sonuç görüşmesi nasıl geçer
   - okul/RAM raporlarıyla ilişkisi, sık karıştırılan testler (WISC-R ve WISC-IV farkı zaten var)
   - SSS 15'e çıksın
4. **Pratik bilgiler.** Çalışma saatleri; bina adı ve kat (dizin profillerinde "Çam İş Merkezi, 3. kat" geçiyor); otopark/ulaşım; "Haritada aç".
5. **Görseller.** Test odası, çocuk odası, bekleme alanı fotoğrafları, alt metinli ve HTML içinde ([[F2-10 Yasal sayfalar ve galeri]]).
6. **Meta description.** MOXO'da kısa kalmış ("MOXO dikkat testi nedir, kaç yaşında yapılır, nasıl uygulanır?"). Şehir + eylem ekle.
7. **WhatsApp kaynak kodu.** Tüm sayfalarda metin aynı: "Merhaba, bilgi almak istiyorum." Sayfa kodu ekle ([[P0-04 Ara ve WhatsApp butonlari]] madde 6).
8. **Kaynaklar.** "Türk Psikologlar Derneği" tek satır ve linksiz. İlgili kaynağa link ver.
9. **Kısa geri arama formu (opsiyonel).** Ad + telefon + konu. Gece gelen ve aramak istemeyen ziyaretçi için.

## Kabul kriterleri
- [ ] 8 sayfada yazar/gözden geçiren satırı var
- [ ] Ücret kararı verildi ve uygulandı
- [ ] MOXO ve WISC-IV sayfalarında ≥15 SSS, süreç adımları ve en az 2 fotoğraf var
- [ ] Her sayfada çalışma saatleri ve bina/kat bilgisi var
- [ ] WhatsApp metinleri sayfa bazında farklı

## Durum (7 Ekim 2026)
Uygulama kaydı: [[site-plani-faz2-uygulama-2026-10-07]]

| # | Madde | Durum |
|---|---|---|
| 1 | Yazar / gözden geçiren | ❓ Kod hazır (`review` alanı doldurulunca sayfada "İçerik kontrolü: Ad Soyad, Unvan (tarih)" ve schema `reviewedBy`). Hangi uzmanın hangi sayfayı **gerçekten** okuduğu bilgisi gerekli; uydurulmadı. |
| 2 | Ücret bölümü | ❓ Kurucu kararı. |
| 3 | Test sayfalarını derinleştir | ❓ Uygulayıcı uzmanın yazması/onaylaması gerekiyor (YMYL). Teyitsiz sağlık bilgisi eklenmedi. |
| 4 | Pratik bilgiler | ❓ Çalışma saatleri (İşletme Profili'nde her gün 10–22, teyitsiz), bina adı/kat ("Çam İş Merkezi, 3. kat" kararı), otopark. "Haritada aç" iletişim sayfasında zaten var. |
| 5 | Görseller | ❓ Galerideki 6 fotoğrafın hepsi danışma odası; test odası / çocuk odası fotoğrafı yok, çekim gerekli. |
| 6 | MOXO meta description | ✅ "Ankara'da MOXO dikkat testi: nedir, kaç yaşında yapılır, nasıl uygulanır? Çankaya'daki merkezimizde…" |
| 7 | WhatsApp kaynak kodu | ✅ Sayfa bazlı metin + kod ham HTML'de de (React'te zaten vardı): `web-ana`, `web-ankara`, `web-cocuk`, `web-cift`, `web-yetiskin`, `web-kariyer`, `web-test`, `web-uzman`; reklamdan gelişte `-g` eki. |
| 8 | Kaynaklar | ✅ "Türk Psikologlar Derneği" ham HTML'de zaten linkli (`https://www.psikolog.org.tr/`); 6 Ekim taraması bunu görmemiş. |
| 9 | Geri arama formu | Yapılmadı (opsiyonel). |
