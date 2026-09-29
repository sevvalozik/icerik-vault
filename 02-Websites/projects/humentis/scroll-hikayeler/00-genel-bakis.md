---
type: website
framework: html
client: humentis
slug: humentis-scroll-hikayeler
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, psikolog]
related: ["[[humentis-bulunma-hikayesi]]", "[[00-Musteriler/humentis/marka-brief]]", "[[gecisler]]", "[[site-bolumleri]]", "[[sosyal-medya-ve-sunum]]"]
---

# Humentis — Scroll Hikâyeler (genel bakış)

**Ne:** Uzmanların kişisel sitelerinin girişinde, kaydırdıkça ilerleyen kısa bir hikâye. Hikâye bir "geçiş anında" biter ve ziyaretçi kendini sitenin ilgili bölümünde bulur (blog yazısı, hizmet sayfası, randevu).

**Kaynak:** [[humentis-bulunma-hikayesi]] kısa filmi ve hocaların mevcut reels metinleri ([[humentis-klinik-icerikleri]]).

**Düzen: konu bazlı.** Her çalışma alanının kendi klasörü var. Hoca kendi alanının klasörünü açar, oradaki hikâyelerden ve [[gecisler]]'den seçer. Seçimi o konu dosyasının en altındaki tabloya yazılır.

## Konular

| Konu | Tam hikâye | Fikir aşamasında |
|---|---|---|
| [[cift-terapisi]] | Kırılan Vazo | Dökülen Kahve, Buğulu Pencere, İki Fırça |
| [[sinav-ve-performans-kaygisi]] | Aynı Paragraf (site ara sürüm), Kapı (görsel hazır) | Sunumdan Önce |
| [[tukenmislik-ve-is-stresi]] | Motor Kapalı | Pazar Akşamı, Masadaki Bitki |
| [[kaygi-ve-cok-dusunmek]] | Provalar, Her Şey Yolunda, Miras | Ya Olursa? |
| [[iliskiler-ve-baglanma]] | Üç Nokta, Yarım Adım, Aynı Sahne (siteler hazır) | Okundu, Kusursuz Senaryo |
| [[ergen-ve-ebeveyn]] | İki Oda, Kapının İki Yüzü (site hazır) (+ Miras) | — |
| [[cocuk-gelisimi-ve-okula-hazirlik]] | Kule (site hazır) | — |
| [[dikkat-ve-odaklanma]] | Altyazı (site hazır) | Yarım Kalanlar, Ödev Masası |
| [[panik-ve-sosyal-kaygi]] | Boş Ekran (video bekleniyor) | Sıra Bende, Kapının Önü |
| [[mukemmeliyetcilik-ve-erteleme]] | Tuval (video bekleniyor) | — |
| [[evlilik-oncesi-ve-bosanma]] | Diş Fırçası, Yüzük (video bekleniyor) | — |
| [[ayrilik-ve-iliski-sonrasi]] | Dolap, Bagaj, Yatak (video bekleniyor) | — |
| [[aile-danismanligi]] | Sofra (site hazır) | — |
| [[yas-ve-kayip]] | Çay Bardağı (video bekleniyor) | Yarım Kalan Fincan |
| [[uyku-ve-stres]] | 04:12, Mutfak Işığı (video bekleniyor) | Saat 04:12 (eski fikir) |
| [[ozguven]] | Fotoğraf, Kıyafetler, Mikrofon, Dans Pisti (video bekleniyor) | Ayna |

**Tam hikâye** = sahne sahne scroll senaryosu, geçiş tarifi, açılan sayfanın metni ve görsel listesi hazır; Furkan Bey doğrudan kurabilir.
**Fikir** = kısa anlatım ve geçiş; hoca seçerse tam hikâyeye çevrilecek.

## Ortak dosyalar (`_ortak/`)

- [[teknik-spec]]: **siteyi kodlamak için şartname**. Claude'a bir hikâye dosyası + bu dosya verilince site doğrudan kurulur
- [[gecisler]]: her hikâyeye takılabilen 10 geçiş (G1–G10)
- [[site-bolumleri]]: filmden çıkan, sitenin tamamında kullanılabilecek bölümler (pencereler girişi, el yazısı randevu defteri, arama cümleleri duvarı…)
- [[sosyal-medya-ve-sunum]]: film karelerinden sosyal medya fikirleri ve hocalara sunum önerileri

## Klasör yapısı

```
scroll-hikayeler/
├── 00-genel-bakis.md
├── _ortak/  (teknik-spec, gecisler, site-bolumleri, sosyal-medya-ve-sunum)
├── cift-terapisi/               cift-terapisi.md + kirilan-vazo.md
├── sinav-ve-performans-kaygisi/ sinav-ve-performans-kaygisi.md + ayni-paragraf.md
├── tukenmislik-ve-is-stresi/    tukenmislik-ve-is-stresi.md + motor-kapali.md
└── … her konu kendi klasöründe (liste yukarıda)
```

Yeni konu eklerken: klasör + aynı adlı konu dosyası; fikir tam hikâyeye dönüşünce konu klasörüne ayrı dosya olarak eklenir ve konu dosyasındaki tabloda durumu ✅ yapılır.

## Ortak kurallar (her hikâyede geçerli)

- **Yüz yok.** Karakterler arkadan, omuz üstünden, eller ya da silüet. Karakter ve mekan kartları: [[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]].
- **Şiddet yok, kriz yok, ağlama yok.** Gerilim nesnelerle ve sessizlikle anlatılır. Kimse kimseye bir şey fırlatmaz.
- **Teşhis ya da tedavi vaadi yok.** Site metinleri "birlikte bakmak", "konuşmanın başka yolu" dilinde kalır (marka brief §4, §7).
- **Işık dramaturjisi:** hikâye gece ve soğuk ışıkta başlar, geçiş anında ilk sıcak ışık gelir, site bölümü gündüz ve krem zeminde açılır (logo paleti: petrol `#284C51`, krem `#F6EFDD`, altın `#CEAB69`).
- **Müzik:** gece bölümünde "emotional piano", geçiş anında "hope piano"ya yumuşak geçiş (film ile aynı mantık, dosyalar `03-Assets/audio/humentis/`).
- **Yazı:** ekran yazıları film altyazısı gibi, Source Serif 4. Arayüz metinleri Manrope.

## Tam hikâye dosyalarının yapısı (Furkan Bey için)

Her hikâye dosyasında aynı bölümler var:

1. **Künye:** karakter, konu, geçiş, hedef sayfa, tahmini scroll uzunluğu
2. **Hikâye (düz anlatım):** önce hikâyeyi bir kısa öykü gibi okumak için
3. **Scroll senaryosu:** sahne sahne; her sahnede scroll aralığı (%), görüntü, hareket, ekran yazısı, ses
4. **Geçiş anı:** animasyonun adım adım tarifi
5. **Açıldığı site bölümü:** başlık, ilk paragraf, CTA
6. **Alternatif geçişler:** hocanın seçebileceği diğer seçenekler
7. **Gerekli görseller:** filmde olanlar ve yeni üretilmesi gerekenler

Scroll yüzdeleri toplam hikâye uzunluğuna göre (0% = sayfanın başı, 100% = site bölümünün açıldığı an). Önerilen toplam uzunluk: masaüstünde yaklaşık 8–10 ekran boyu kaydırma.
