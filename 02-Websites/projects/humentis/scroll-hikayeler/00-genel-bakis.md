---
type: website
framework: html
client: humentis
slug: humentis-scroll-hikayeler
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, psikolog]
related: ["[[humentis-bulunma-hikayesi]]", "[[00-Musteriler/humentis/marka-brief]]", "[[hikaye-a-deniz-sinav-kaygisi]]", "[[hikaye-b-ece-cift]]", "[[hikaye-c-selim-tukenmislik]]"]
---

# Humentis — Scroll Hikâyeler (genel bakış)

**Ne:** Uzmanların kişisel sitelerinin girişinde, kaydırdıkça ilerleyen kısa bir hikâye. Hikâye bir "geçiş anında" biter ve ziyaretçi kendini sitenin ilgili bölümünde bulur (blog yazısı, hizmet sayfası, randevu).

**Kaynak:** [[humentis-bulunma-hikayesi]] kısa filmindeki üç karakter. Film bir sahne havuzu, buradaki her dosya o karakterlerden birinin uzun ve tek başına duran hikâyesi.

**Sunumda:** Hocalara üç hikâye ve her birinin geçiş seçenekleri gösterilir. Her hoca kendi alanına uyan hikâyeyi ve geçişi seçer. Metinlerdeki "Uzman Adı" ve alan başlıkları o hocaya göre değişir.

## Hikâyeler

| Dosya | Karakter | Konu | Ana geçiş | Nereye açılır |
|---|---|---|---|---|
| [[hikaye-a-deniz-sinav-kaygisi]] | Deniz, 22 | Sınav ve performans kaygısı | Rüzgârla savrulan ders notları | Blog yazısı |
| [[hikaye-b-ece-cift]] | Ece, 34 | Çift terapisi | Kapı çarpar, raftaki vazo düşüp kırılır | Hizmet sayfası + randevu |
| [[hikaye-c-selim-tukenmislik]] | Selim, 41 | Tükenmişlik ve iş stresi | Telefon ekranının içine giriş | Kısa öz değerlendirme + ön görüşme |

Geçişlerin bilerek hepsi farklı: biri nesneyle, biri kırılmayla, biri ekranla. Her dosyada 1–2 alternatif geçiş de var, hoca seçsin diye.

## Ortak kurallar (her hikâyede geçerli)

- **Yüz yok.** Karakterler arkadan, omuz üstünden, eller ya da silüet. Karakter ve mekan kartları: [[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]].
- **Şiddet yok, kriz yok, ağlama yok.** Gerilim nesnelerle ve sessizlikle anlatılır. Kimse kimseye bir şey fırlatmaz.
- **Teşhis ya da tedavi vaadi yok.** Site metinleri "birlikte bakmak", "konuşmanın başka yolu" dilinde kalır (marka brief §4, §7).
- **Işık dramaturjisi:** hikâye gece ve soğuk ışıkta başlar, geçiş anında ilk sıcak ışık gelir, site bölümü gündüz ve krem zeminde açılır (logo paleti: petrol `#284C51`, krem `#F6EFDD`, altın `#CEAB69`).
- **Müzik:** gece bölümünde "emotional piano", geçiş anında "hope piano"ya yumuşak geçiş (film ile aynı mantık, dosyalar `03-Assets/audio/humentis/`).
- **Yazı:** ekran yazıları film altyazısı gibi, Source Serif 4. Arayüz metinleri Manrope.

## Dosyaların yapısı (Furkan Bey için)

Her hikâye dosyasında aynı bölümler var:

1. **Künye:** karakter, konu, geçiş, hedef sayfa, tahmini scroll uzunluğu
2. **Hikâye (düz anlatım):** önce hikâyeyi bir kısa öykü gibi okumak için
3. **Scroll senaryosu:** sahne sahne; her sahnede scroll aralığı (%), görüntü, hareket, ekran yazısı, ses
4. **Geçiş anı:** animasyonun adım adım tarifi
5. **Açıldığı site bölümü:** başlık, ilk paragraf, CTA
6. **Alternatif geçişler:** hocanın seçebileceği diğer seçenekler
7. **Gerekli görseller:** filmde olanlar ve yeni üretilmesi gerekenler

Scroll yüzdeleri toplam hikâye uzunluğuna göre (0% = sayfanın başı, 100% = site bölümünün açıldığı an). Önerilen toplam uzunluk: masaüstünde yaklaşık 8–10 ekran boyu kaydırma.
