---
type: presentation
marp: false
theme: desert-rose
client: "Nefin Beauty"
status: draft
date: 2026-09-09
tags: [sunum, nefinbeauty, kozmetik]
related: []
---

# Nefin Beauty — Web Yenileme Sunumu

## Dosyalar

`01-Presentations/active/nefin-beauty/` klasöründe:

- `son.key` — final Keynote sunumu (374 MB, orijinal/düzenlenebilir versiyon) — Google Drive: https://drive.google.com/file/d/1cNdx2OCHofq0mOgXdPsu2XMhD7zLgTnJ/view?usp=sharing
- `son-kucultulmus.key` — Keynote'un "Dosya Büyüklüğünü Azalt" özelliğiyle küçültülmüş versiyon (~91 MB) — git/paylaşım için bunu kullan, son.key'i git'e sokma (GitHub 100 MB limitine çok yakın kalıyor)
- `nefin-web-stratejisi.pptx` — rakip analizi temelli 10 slaytlık web stratejisi (Desert Rose temalı)
- `nefin-ilham-benchmarking.pptx` — 16 slaytlık ilham/benchmarking sunumu (rakip site ekran görüntüleri + çıkarımlar)

## Tema: Desert Rose

`01-Presentations/_themes/desert-rose.css` — nefin-web-stratejisi.pptx'ten çıkarılan gerçek renk/font değerleri:

- Zemin: `#E8D5C4` (krem/bej)
- Başlıklar: `#3A241C` / `#4A2F27` (koyu kahve, Cambria serif)
- Gövde metni: `#7D6259` (taupe)
- Vurgu: `#96594A` (toprak/terracotta), `#B87D6D` (gül kurusu)
- Fontlar: Cambria (başlık) + Calibri (gövde)

Benzer kozmetik/beauty projelerinde `theme: desert-rose` yazarak aynı paleti tekrar kullanabilirsin.

## Konumlandırma

Nefin, incelenen 3 ilham/rakip markanın (The Purest Solutions, Cosmed, Estée Lauder) kesişiminde konumlanıyor: **klinik şeffaflık + modern, ulaşılabilir "clean-girl" estetiği**. TPS hız/kampanya odaklı, Cosmed bilim/güven odaklı, Estée Lauder premium yaşam tarzı odaklı — Nefin üçünü birleştiriyor.

Genel UI/UX prensibi: her sayfada bir "kanıt" (INCI/uzman notu) + bir "duygu" (editoryal fotoğraf) unsuru yan yana.

## Site Mimarisi & İçerik Planı (yol haritası sırasıyla)

1. **Hero + net fiyatlandırma** — *Faz 1, hızlı* — Tek ürün odaklı hero görseli, net fayda cümlesi, okunaklı fiyat, tek güçlü CTA ("Keşfet"); kampanya şeridi hero'nun ALTINDA ayrı/modüler. İlham: The Purest Solutions (fiyat + kampanyayı tek bakışta veriyor).
2. **Ürün sayfası (PDP) akordeon + INCI şeffaflığı** — *Faz 1, yüksek etki* — Faydalar / Kullanım Şekli / İçindekiler akordeon yapısı; ilk ekranda sadece "Faydalar" açık; INCI listesi teknik bir tipografiyle güven versin. İlham: Cosmed.
3. **Rutin oluşturucu / çapraz satış** — *Faz 1, yüksek sepet değeri* — Her ürün sayfasında "Bu Rutinin Parçası" etiketi + tek tıkla tüm rutini sepete ekleme; numaralı adım ikonları, sahip olunanlar yeşil tikli. İlham: Cosmed'in "Arındırma → Serum → Nemlendirme → Koruma" 4 adımlı rejimi.
4. **Kişiselleştirme quiz'i ("Cilt Profili")** — *Faz 2* — En fazla 3 adım; cilt tipi + endişeye göre mini rutin önerisi; sonuç ekranı doğrudan "Sepete Ekle" ile bitiyor. İlham: TPS'in "Cilt Tipini Seç" + AI destekli cilt analizi.
5. **Hikaye & blog altyapısı** — *Faz 1-2, sürekli* — Ana sayfada scroll ile ulaşılan kısa bir "Hikayemiz" bölümü (kurucu mektubu tarzı) + düzenli blog takvimi (örn. leke, nem, altın/kolajen bilimi konuları — SEO + güven). İlham: Cosmed'in "1984 yılında başlayan bir kimya yolculuğu..." kurucu mektubu.
6. **Set / hediye (GWP) kurgusu** — *Faz 2-3* — Mevsimsel "Rutin Kiti" setleri + belirli sepet tutarı üstünde ücretsiz mini ürün; flat-lay set kompozisyonu; GWP eşiği sepette ilerleme çubuğuyla gösterilsin. İlham: Estée Lauder'ın seyahat çantalı hediye/set kurgusu.

## Görsel yön

Gemini ile üretilen erken konseptler (clean-girl paletiyle, bordo/kadife DEĞİL):

- Ürün + C Vitamini Serumu anlatımı
- Ürün ailesi vitrini
- Ana sayfa hero konsepti

`03-Assets/images/nefin-beauty/` klasöründe:

- 6 Gemini ile üretilmiş görsel (Gemini_Generated_Image_*)
- nefin_hero.png — seçilen hero görseli
- Ürün fotoğrafları: nefin_24k_gold_tonic.jpg, nefin_anti_acne_serum.jpg, nefin_daily_moisture_cream.jpg

## Videolar

`03-Assets/videos/nefin-beauty/` klasöründe 4 tanıtım/ürün videosu (mp4)

## Notlar

- Sitede Cosmed'in sağ alt köşesindeki hareketli/müzikli video vitrini widget'ı beğenildi, Nefin sitesine de eklenmesi isteniyor
- Sunum metinleri kısa/öz tutuldu, detay sözlü anlatılacak
- **Eksik/ileride tamamlanacak**: gerçek ürün açıklama metinleri (INCI listeleri, faydalar metni), kurucu hikayesi metni, kesin fiyatlandırma — şu an strateji/IA seviyesinde, final copywriting henüz yok
