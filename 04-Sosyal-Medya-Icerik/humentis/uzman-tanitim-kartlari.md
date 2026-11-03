---
type: sosyal-medya-icerik
client: "Humentis"
slug: humentis
platform: instagram-feed
format: post
status: onay-bekliyor
date: 2026-10-21
tags: [humentis, sosyal-medya, uzmanlar, tanitim-karti, kadro]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[uzmanlar-ve-konular]]", "[[hoca-teklifleri-2026-10]]", "[[ig-stil-karti]]"]
---

# Humentis — Uzman Tanıtım Kartları

## Künye

- **İstek (21 Ekim 2026):** Kullanıcının verdiği `Kitap1.xlsx` dosyasındaki 18 uzmanın fotoğrafları alınacak, tanıtım kartı hazırlanacak.
- **Çıktı:** her uzman için ayrı kart (18 adet) ve hepsini bir arada gösteren kadro kartı (1 adet). Instagram feed, 4:5, 1440×1800 JPG.
- **Sıra:** Excel'deki sıra korundu (01 Aybala Görkem Polat … 18 Miray Erciyas). Kadro kartındaki sıra da aynı.
- **Tasarım:** hesaptaki terapist kapağının (petrol zemin, kemerli çerçevede gerçek fotoğraf, altın unvan) 4:5 feed sürümü. İsimler Source Serif 4, diğer metinler Manrope (marka brief §5). Arka planda marka sembolü filigran olarak duruyor.

## Kaynaklar

- **İsim, unvan, alanlar:** canlı sitenin uzman listesi (`humentis.com.tr/api/specialists`, 21 Ekim 2026). "Danışmanlık alanları" kutucukları sitedeki `department` alanından alındı ve kısaltıldı: "Yetişkin Danışmanlığı" → "Yetişkin", "Çocuk-Ergen Danışmanlığı" → "Çocuk ve Ergen", "Çift, Aile ve Evlilik Danışmanlığı" → "Çift, Aile ve Evlilik". Teşhis içeren çalışma alanları bilerek karta konmadı (brief §7).
- **Fotoğraflar:** sitedeki uzman profillerinden, değiştirilmeden indirildi → `03-Assets/images/humentis/uzmanlar/` (18 dosya). Kırpma yüz konumuna göre yapıldı; yüz kutuları Apple Vision ile ölçüldü ve dolu HTML'deki `yuz` alanında duruyor.

## Dosyalar

| Ne | Yol |
|---|---|
| Kartlar (19 JPG) | `03-Assets/images/humentis/uzman-tanitim/humentis-uzman-01-…18-*.jpg`, `humentis-uzman-kadrosu.jpg` |
| Dolu HTML (metin buradan düzeltilir) | `04-Sosyal-Medya-Icerik/humentis/uzman-tanitim/uzman-tanitim-kartlari.html` (`?s=N` tek kart, 19 = kadro) |
| Şablon (yeniden kullanılabilir) | `04-Sosyal-Medya-Icerik/_sablonlar/humentis/uzman-karti-4x5.html`: tipler `uzman_kart`, `kadro_kart` |
| Ham fotoğraflar | `03-Assets/images/humentis/uzmanlar/<ad-soyad>.jpg/png` |

Yeniden üretmek için: dolu HTML'deki veri bloğunu düzelt, sonra `scripts/render-karusel.sh` ile render al (`1080x1350`, PNG verir). Bu seri JPG'ye çevrilip yukarıdaki adlarla kaydedildi.

## Karttaki yazımın siteden farkları

- **Unvan ayırıcıları tek tipe getirildi:** sitede ", " / " / " / " & " karışık. Kartlarda hepsi " & " (ör. "Klinik Psikolog, Aile Danışmanı" → "Klinik Psikolog & Aile Danışmanı"). Kelimeler aynı.
- **Aybala:** Excel'de "Aybala Polat", kartta sitedeki tam adı "Aybala Görkem Polat" kullanıldı.
- **Miray Erciyas:** sitenin unvan alanında yalnızca "Uzman" yazıyor. Kartta, sitedeki biyografisinin ilk cümlesinden alınan "Psikolog" kullanıldı. ❓ doğrulanacak; sitedeki unvan alanının da düzeltilmesi gerekiyor.
- **Hatice Kıykım:** sitede şu an "Psikolog" yazıyor. 28 Eylül'deki listede ([[uzmanlar-ve-konular]]) "Psikolog & Aile Danışmanı" idi. Kartta sitedeki güncel hali kullanıldı. ❓ doğrulanacak.

## Kalite notları

- Hatice Kıykım ve Elif Köden'in sitedeki fotoğrafları düşük çözünürlüklü. Hatice'nin kartı hafif yumuşak görünüyor; daha büyük bir fotoğraf gelirse kart yeniden basılmalı. (Elif Köden Excel listesinde yok, kart yapılmadı.)
- Ali Karaömerlioğlu'nun fotoğrafı vesikalık, bu yüzden kemer içinde diğerlerinden daha yakın duruyor.
- Aybala Görkem Polat'ın fotoğrafı video karesinden alınmış, yakada mikrofon görünüyor. Sitedeki fotoğrafı bu.

## Açık sorular

- [ ] ❓ Miray Erciyas ve Hatice Kıykım unvanları (yukarıda).
- [ ] Sitede olup Excel'de olmayan uzmanlar: **Elif Köden**, **Nimet Doğan** (Nimet Doğan'ın sitede fotoğrafı yok). Kadroya eklenecekler mi?
- [ ] Marka brief §11'deki "Terapist portreleri (onaylı)" maddesi: fotoğraflar sitede yayınlanmış olanlar, ama sosyal medyada kullanımı için uzmanların onayı alınmalı.
- [ ] Paylaşım biçimi: 18 tekli post mu, kadro kartı + karusel mi? Karar kullanıcıda.

## Açıklamalar: ilk 3 uzman (22 Ekim 2026)

Kullanıcı isteği: Excel sırasındaki ilk 3 uzman için Instagram açıklaması. Bilgiler yalnızca uzmanların site profillerinden alındı (eğitim, yaklaşım, çalışma konuları, dil). Klinik ve teşhis dili sadeleştirildi: ör. "Yaygın Anksiyete Bozukluğu" yerine "kaygı". Sitedeki hastane stajları, "yıllık deneyim" alanı ve yeme bozukluğu, bağımlılık, cinsel terapi gibi başlıklar bilerek yazılmadı (brief §4 ve §7). Sistemin düzeniyle her uzmana 3 seçenek hazırlandı: A standart, B kısa, C soruyla biten. Hashtag seti aynı.

### 01 · Aybala Görkem Polat

#### A — Standart
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Aybala Görkem Polat'ı tanıyalım.

Ergenler, yetişkinler, aileler ve çiftlerle yüz yüze ve online görüşmeler yapıyor. Bilişsel Davranışçı Terapi ve Sistemik Psikoterapi temelli çalışıyor. Şema Terapi, mindfulness temelli stres azaltma (MBSR) ve EMDR eğitimlerini de süreçlerine katıyor.

Kaygı ve panik, ilişkilerde bağlanma ve sınır koyma, yas ve kayıp, özgüven ve mükemmeliyetçilik çalıştığı konular arasında. Türkçe ve İngilizce görüşme yapabiliyor.

Çankaya Üniversitesi Psikoloji Bölümü'nü ve Konya Gıda ve Tarım Üniversitesi Klinik Psikoloji Yüksek Lisans Programı'nı yüksek şeref derecesiyle tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### B — Kısa
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Aybala Görkem Polat; ergenler, yetişkinler, aileler ve çiftlerle yüz yüze ve online görüşmeler yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Aybala Görkem Polat; ilişkilerde bağlanma ve sınır koyma, kaygı, özgüven ve mükemmeliyetçilik konularında Bilişsel Davranışçı Terapi ve Sistemik Psikoterapi temelli çalışıyor. Ergenler, yetişkinler, aileler ve çiftlerle yüz yüze ve online görüşüyor.

Sizce "hayır" demek bir ilişkiyi uzaklaştırır mı, yoksa korur mu?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

### 02 · Elif Silav

#### A — Standart
```text
Humentis'in kurucusu, Psikolog & Aile Danışmanı Elif Silav'ı tanıyalım.

Humentis'i aile danışmanlığı odaklı bir merkez olarak kurdu. Yetişkinlerle bireysel görüşmeler yapıyor; çiftlere, ailelere, evlilik öncesi ve boşanma sürecindeki kişilere eşlik ediyor. Ergen ve ebeveyn danışmanlığı da çalıştığı alanlar arasında.

Bilişsel Davranışçı Terapi temelli çalışıyor. Kaygı ve stres, özgüven, çift ve evlilik ilişkileri, aile içi iletişim üzerine yoğunlaşıyor.

Ankara Yıldırım Beyazıt Üniversitesi Psikoloji Bölümü mezunu. Aile danışmanlığı, çift terapisi ve ergen–ebeveyn danışmanlığı eğitimlerini tamamladı. Sivil toplum kuruluşlarında seminerler veriyor, kurumlara danışmanlık yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ailedanışmanı #çiftterapisi
```

#### B — Kısa
```text
Humentis'in kurucusu Psikolog & Aile Danışmanı Elif Silav; yetişkinlerle bireysel görüşmeler yapıyor, çiftlere ve ailelere eşlik ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ailedanışmanı #çiftterapisi
```

#### C — Soruyla biten
```text
Humentis'in kurucusu Psikolog & Aile Danışmanı Elif Silav; çift ve evlilik ilişkileri, aile içi iletişim, kaygı ve stres konularında Bilişsel Davranışçı Terapi temelli çalışıyor. Evlilik öncesi ve boşanma sürecindeki kişilere de eşlik ediyor.

Sizce bir ilişkide en zor konuşulan hangisi: ihtiyaçlar mı, kırgınlıklar mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ailedanışmanı #çiftterapisi
```

### 03 · Solmaz Şenyüz

#### A — Standart
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Solmaz Şenyüz'ü tanıyalım.

6 yaş ve üzeri çocuklar, ergenler ve yetişkinlerle çalışıyor. Bilişsel Davranışçı Terapi ve psikoeğitim yaklaşımlarından yararlanıyor. Kaygı, travma ve yas süreçleri ile kişilik değerlendirmesi başlıca çalışma alanları.

Çocuk ve ergen değerlendirmelerinde MOXO Dikkat Testi ve WISC-IV uygulayıcısı. Türkçe ve İngilizce görüşme yapabiliyor.

Girne Amerikan Üniversitesi İngilizce Psikoloji Bölümü'nü onur derecesiyle, Yakın Doğu Üniversitesi Klinik Psikoloji Yüksek Lisans Programı'nı yüksek onur derecesiyle tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### B — Kısa
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Solmaz Şenyüz; 6 yaş ve üzeri çocuklar, ergenler ve yetişkinlerle çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Solmaz Şenyüz; kaygı, travma ve yas süreçlerinde Bilişsel Davranışçı Terapi ve psikoeğitim yaklaşımlarıyla çalışıyor. 6 yaş ve üzeri çocuklar, ergenler ve yetişkinlerle görüşüyor.

Sizce kaygı bize ne zaman yardım eder, ne zaman yolumuzu keser?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

### Kontrol

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi uzmanın site profilinde var; uydurma yok.
- [ ] Uzmanların açıklamayı görüp onaylaması (özellikle eğitim ve dil bilgisi).

## Açıklamalar: 4–6. uzmanlar (23 Ekim 2026)

Kullanıcı isteği: "sonraki 3 hoca için prompt çıkar". İlk üç uzmanla aynı iş olarak anlaşıldı. Kurallar aynı: bilgiler 23 Ekim'de site profillerinden yeniden çekildi, teşhis dili sadeleştirildi, hastane stajları ve hassas başlıklar yazılmadı. Barış Can Kolçak psikolog değil, psikolojik danışman olduğu için onun setinde `#ankarapsikolog` yerine `#ankarapsikoloji` kullanıldı. Nurşen Arıcı'da "Uzman kadromuzdan Uzman…" tekrarına düşmemek için açılış "Kadromuzdan" ile yapıldı.

### 04 · Barış Can Kolçak

#### A — Standart
```text
Uzman kadromuzdan Psikolojik Danışman & Aile Danışmanı Barış Can Kolçak'ı tanıyalım.

Yetişkinlerle bireysel psikolojik danışmanlık ve aile danışmanlığı alanlarında çalışıyor. Kaygı ve stres, ilişki güçlükleri, travma sonrası uyum ve aile içi dinamikler üzerine yüz yüze ve online görüşmeler yapıyor.

Her bireyin kendine özgü olduğuna, tek bir yöntemin herkese aynı şekilde uymayacağına inanıyor. İlk görüşmeden itibaren güvene ve iş birliğine dayalı bir ilişki kurmayı önemsiyor. Bilişsel Davranışçı Terapi, Şema Terapi ve Kısa Çözüm Odaklı Terapi eğitimlerini kişinin ihtiyacına göre bir araya getiriyor.

TED Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümü mezunu.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #psikolojikdanışman #ailedanışmanı
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolojik Danışman & Aile Danışmanı Barış Can Kolçak; yetişkinlerle bireysel görüşmeler yapıyor, ailelerle çalışıyor. Yüz yüze ve online görüşüyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #psikolojikdanışman #ailedanışmanı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolojik Danışman & Aile Danışmanı Barış Can Kolçak; kaygı ve stres, ilişki güçlükleri ve aile içi dinamikler üzerine çalışıyor. Görüşmelerde, uygulanabilir hedefler ve başa çıkma yolları üzerinde danışanıyla birlikte ilerliyor.

Sizce değişim büyük kararlarla mı başlar, küçük adımlarla mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #psikolojikdanışman #ailedanışmanı
```

### 05 · Nurşen Arıcı

#### A — Standart
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Nurşen Arıcı'yı tanıyalım.

Çocuklar, ergenler, genç yetişkinler, aileler ve çiftlerle çalışıyor. Bilişsel Davranışçı Terapi ve oyun terapisi yaklaşımlarından yararlanıyor; kişinin gelişimsel ve duygusal ihtiyaçlarını bir bütün olarak ele alıyor.

Çocuk ve ergenlerde dikkat ve odaklanma, öğrenme güçlükleri, sınav kaygısı ve okul süreçleri, duygu düzenleme; genç yetişkinlerde kaygı ve stres, ilişkiler ve yaşam geçişleri; ailelerde ebeveyn–çocuk ilişkisi ve aile içi iletişim çalıştığı konular arasında. MOXO Dikkat Testi ve WISC-R uygulayıcısı.

Ufuk Üniversitesi Psikoloji Bölümü ve Genel Psikoloji Yüksek Lisans Programı'nın ardından Üsküdar Üniversitesi Klinik Psikoloji Yüksek Lisans Programı'nı tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #oyunterapisi
```

#### B — Kısa
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Nurşen Arıcı; çocuklar, ergenler, genç yetişkinler, aileler ve çiftlerle çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #oyunterapisi
```

#### C — Soruyla biten
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Nurşen Arıcı; çocuk ve ergenlerle Bilişsel Davranışçı Terapi ve oyun terapisi yaklaşımlarıyla çalışıyor. Dikkat, okul süreçleri, duygu düzenleme ve ebeveyn–çocuk ilişkisi başlıca konuları. Genç yetişkinler, aileler ve çiftlerle de görüşüyor.

Sizce bir çocuk duygularını en çok nasıl anlatır: sözle mi, oyunla mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #oyunterapisi
```

### 06 · Nazlı Şentürk

#### A — Standart
```text
Uzman kadromuzdan Klinik Psikolog Nazlı Şentürk'ü tanıyalım.

Çocuklar, ergenler ve yetişkinlerle Bilişsel Davranışçı Terapi temelli çalışıyor. Kaygı ve panik, duygu düzenleme, öz değer ve benlik algısı, ilişkiler ve bağlanma, ayrılık ve yas süreçleri çalıştığı konular arasında. Çocuk ve ergenlerle görüşmelerinde gelişim dönemini ve aile dinamiklerini birlikte gözetiyor.

Başkent Üniversitesi Psikoloji Bölümü'nün ardından klinik psikoloji yüksek lisansını İngiltere'de Bournemouth University'de Merit derecesiyle tamamladı. Londra'da 240 saatlik klinik staj yaptı. Türkçe ve İngilizce görüşme yapabiliyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #psikoterapi
```

#### B — Kısa
```text
Uzman kadromuzdan Klinik Psikolog Nazlı Şentürk; çocuklar, ergenler ve yetişkinlerle Bilişsel Davranışçı Terapi temelli çalışıyor. Türkçe ve İngilizce görüşme yapabiliyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #psikoterapi
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Klinik Psikolog Nazlı Şentürk; kaygı, duygu düzenleme, öz değer ve benlik algısı, ilişkiler ve bağlanma konularında Bilişsel Davranışçı Terapi temelli çalışıyor. Çocuklar, ergenler ve yetişkinlerle görüşüyor.

Sizce insan kendine, bir arkadaşına davrandığı kadar nazik davranabilir mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #psikoterapi
```

### Kontrol (4–6)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi uzmanın site profilinde var (23 Ekim 2026).
- [ ] Uzmanların açıklamayı görüp onaylaması.

## Açıklamalar: 7–9. uzmanlar (23 Ekim 2026)

Kurallar 1–6 ile aynı. Bilgiler 23 Ekim'de site profillerinden alındı. Ayşegül Keskingöz'deki "2007'den bu yana" ifadesi, biyografisindeki "2007'de uzmanlığını aldı, 19 senedir uzman psikolog" bilgisinden geliyor. Simge Kaya'nın biyografisindeki doğum yeri ve yılı ile annelik deneyimi kişisel bilgi olduğu için yazılmadı. Unvanında "Uzman" geçen üç kişide açılış "Kadromuzdan" ile yapıldı.

### 07 · Ayşegül Keskingöz

#### A — Standart
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Ayşegül Keskingöz'ü tanıyalım.

2007'den bu yana uzman psikolog olarak çalışıyor. Yetişkinlerle bireysel görüşmeler yapıyor; kaygı, stres ve öfke yönetimi, duygu düzenleme, özgüven ve duyguları ifade etme üzerine çalışıyor. Aile ve çift alanında evlilik öncesi danışmanlık, çiftler arasındaki iletişim, güven sorunları, ayrılık ve boşanma süreçlerinde eşlik ediyor.

Bilişsel Davranışçı Terapi ve Şema Terapi temelli, kişiye özgü bir süreç yürütüyor. Danışanın kendini tanımasını ve farkındalık kazanmasını önemsiyor. Türkçe ve İngilizce görüşme yapabiliyor.

ODTÜ Psikoloji Bölümü'nü yüksek şeref derecesiyle bitirdi, Ankara Üniversitesi'nde Uygulamalı Psikoloji yüksek lisansını tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### B — Kısa
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Ayşegül Keskingöz; yetişkinlerle bireysel görüşmeler yapıyor, çiftlere ve ailelere eşlik ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Kadromuzdan Uzman Klinik Psikolog & Aile Danışmanı Ayşegül Keskingöz; kaygı, stres, duygu düzenleme ve duyguları ifade etme üzerine Bilişsel Davranışçı Terapi ve Şema Terapi temelli çalışıyor. Çiftlerle iletişim, güven ve evlilik öncesi süreçlerde görüşüyor.

Sizce hangisi daha zor: bir duyguyu fark etmek mi, onu söze dökmek mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #ailedanışmanı
```

### 08 · Simge Kaya

#### A — Standart
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Simge Kaya'yı tanıyalım.

2013'ten bu yana 0–12 yaş çocuklar ve aileleriyle çalışıyor. Gelişimsel destek ve ebeveyn danışmanlığı veriyor; görüşmeler yüz yüze ya da online yapılabiliyor.

Yaklaşımını şöyle özetliyor: önce ebeveynlerin yoluna ışık tutmak, sonra o ışığı kendi içlerinde yaratıp kendi yollarını bulmalarına eşlik etmek.

Hacettepe Üniversitesi Çocuk Gelişimi Bölümü'nden mezun oldu, yüksek lisansını Ankara Üniversitesi Çocuk Gelişimi Bölümü'nde tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #ebeveynlik
```

#### B — Kısa
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Simge Kaya; 0–12 yaş çocuklar ve aileleriyle yüz yüze ve online çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #ebeveynlik
```

#### C — Soruyla biten
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Simge Kaya; 0–12 yaş çocuklar ve aileleriyle çalışıyor, gelişimsel destek ve ebeveyn danışmanlığı veriyor. Amacı ebeveynlerin kendi yollarını bulmalarına eşlik etmek.

Sizce ebeveynlikte hangisi daha zor: sınır koymak mı, sabırlı kalmak mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #ebeveynlik
```

### 09 · Müge Ertuğrul

#### A — Standart
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Müge Ertuğrul'u tanıyalım.

Psikoloji bilim uzmanı, çocuk gelişimi uzmanı ve okul öncesi öğretmeni. Çocukların gelişimsel, bilişsel, sosyal ve davranışsal özelliklerini bir bütün olarak değerlendiriyor; çocuğu ailesi, öğretmeni ve eğitim ortamıyla birlikte ele alıyor.

Özgül öğrenme güçlüğü, dikkat becerileri, uyum ve davranış, sosyal iletişim, duygu düzenleme, okul öncesi gelişim ve okula hazırlık çalıştığı başlıca konular. Ailelere danışmanlık veriyor; ailelere, öğretmenlere ve okullara yönelik seminerler düzenliyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #okulahazırlık
```

#### B — Kısa
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Müge Ertuğrul; öğrenme, dikkat, okul öncesi gelişim ve okula hazırlık konularında çocuklar ve aileleriyle çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #okulahazırlık
```

#### C — Soruyla biten
```text
Kadromuzdan Çocuk Gelişimi Uzmanı Müge Ertuğrul; öğrenme, dikkat, uyum ve okula hazırlık konularında çocukları ailesi, öğretmeni ve eğitim ortamıyla birlikte değerlendiriyor.

Sizce bir çocuğu tanımak için en çok kimi dinlemek gerekir: ailesini mi, öğretmenini mi, yoksa çocuğun kendisini mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikoloji #çocukgelişimi #okulahazırlık
```

### Kontrol (7–9)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Çocuk konuları yalnızca metinde geçiyor; görselde çocuk yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi uzmanın site profilinde var (23 Ekim 2026).
- [ ] Uzmanların açıklamayı görüp onaylaması.

## Açıklamalar: 10–12. uzmanlar (23 Ekim 2026)

Kurallar 1–9 ile aynı. Bilgiler 23 Ekim'de site profillerinden alındı. Hatice Kıykım'ın unvanı kartla aynı tutuldu ("Psikolog"; yukarıdaki ❓ hâlâ açık). Sena Şimşek'in sitedeki özet alanında ve biyografisinin ilk satırında hâlâ "Profil bilgileri yakında güncellenecek." yazıyor. Biyografinin geri kalanı dolu, açıklama oradan yazıldı. Bu satırın sitede silinmesi gerekiyor.

### 10 · Hatice Kıykım

#### A — Standart
```text
Uzman kadromuzdan Psikolog Hatice Kıykım'ı tanıyalım.

Yetişkinlerle bireysel görüşmeler ve çift danışmanlığı yapıyor. Bilişsel Davranışçı Terapi, Şema Terapi ve kanıta dayalı yaklaşımlardan yararlanıyor; süreci kişinin yaşam öyküsüne, ihtiyaçlarına ve hedeflerine göre planlıyor.

Kaygı ve aşırı düşünme, belirsizlikle baş etme ve kontrol ihtiyacı, erteleme ve mükemmeliyetçilik, özgüven ve duygu düzenleme çalıştığı konular arasında. İlişkilerde iletişim ve çatışma, güven ve kıskançlık, duygusal ihtiyaçları ifade etme ve tekrar eden döngüler üzerine de çalışıyor.

Başkent Üniversitesi Psikoloji Bölümü'nü onur derecesiyle bitirdi; TÜBİTAK bünyesindeki bilimsel araştırma projelerinde yer aldı. Evlilik ve çift terapisi ile EMDR eğitimlerini tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog Hatice Kıykım; yetişkinlerle bireysel görüşmeler ve çift danışmanlığı yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog Hatice Kıykım; kaygı ve aşırı düşünme, özgüven, duygu düzenleme ve ilişkilerde tekrar eden döngüler üzerine Bilişsel Davranışçı Terapi ve Şema Terapi temelli çalışıyor. Yetişkinlerle ve çiftlerle görüşüyor.

Sizce ilişkilerde aynı tartışmaya neden tekrar tekrar döneriz?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

### 11 · Irmak Tara Sığırcı

#### A — Standart
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Irmak Tara Sığırcı'yı tanıyalım.

Yetişkinler ve ergenlerle Bilişsel Davranışçı Terapi temelli çalışıyor. Şema Terapi, Kabul ve Kararlılık Terapisi (ACT) ve EMDR eğitimlerinden edindiği teknikleri kişinin ihtiyacına göre kullanıyor.

Kaygı ve stres, duygu düzenleme, özgüven ve öz değer, ilişkiler ve yaşam değişimleri çalıştığı konular arasında. Dikkat ve odaklanma güçlükleri, DEHB, erteleme ve zaman yönetimi özellikle ilgilendiği alanlar. Türkçe ve İngilizce görüşme yapabiliyor.

Atılım Üniversitesi Psikoloji Bölümü'nü ve İtalya'daki Pavia Üniversitesi'nde Psikoloji, Nörobilim ve İnsan Bilimleri yüksek lisansını onur derecesiyle tamamladı. Melbourne'daki Monash Üniversitesi'nde DEHB ve nörogelişimsel farklılıklar üzerine yürütülen araştırmalarda görev aldı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #dehb
```

#### B — Kısa
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Irmak Tara Sığırcı; yetişkinler ve ergenlerle Bilişsel Davranışçı Terapi temelli çalışıyor. Türkçe ve İngilizce görüşme yapabiliyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #dehb
```

#### C — Soruyla biten
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Irmak Tara Sığırcı; dikkat ve odaklanma, erteleme, kaygı, duygu düzenleme ve özgüven üzerine yetişkinler ve ergenlerle çalışıyor.

Sizce erteleme bir tembellik mi, yoksa başka bir şeyin işareti mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #dehb
```

### 12 · Sena Şimşek

#### A — Standart
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Sena Şimşek'i tanıyalım.

Her bireyin yaşam öyküsünün, duygularının ve ihtiyaçlarının kendine özgü olduğuna inanıyor. Kişiyi yalnızca yaşadığı sorunlar üzerinden değil, bir bütün olarak anlamayı ve güvenli, yargısız bir alan sunmayı önemsiyor.

Kaygı ve aşırı düşünme, özgüven, duygu düzenleme, ilişkilerde güven ve sınır koyma, mükemmeliyetçilik ve erteleme, stres ve tükenmişlik, yas ve kayıp süreçleri çalıştığı konular arasında. Bilişsel Davranışçı Terapi temelli çalışıyor.

Ufuk Üniversitesi Psikoloji Bölümü mezunu. Bilişsel Davranışçı Terapi ve aile danışmanlığı eğitimlerini tamamladı, süpervizyon eşliğinde uygulama deneyimi kazandı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Sena Şimşek; kaygı, özgüven, ilişkiler ve duygu düzenleme üzerine Bilişsel Davranışçı Terapi temelli çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Sena Şimşek; kaygı ve aşırı düşünme, özgüven, ilişkilerde güven ve sınır koyma üzerine çalışıyor. Kişiyi bir bütün olarak anlamayı ve yargısız bir alan sunmayı önemsiyor.

Sizce aşırı düşünmek bizi hazırlıklı mı tutar, yoksa yorar mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

### Kontrol (10–12)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi uzmanın site profilinde var (23 Ekim 2026).
- [ ] Uzmanların açıklamayı görüp onaylaması.
- [ ] Sena Şimşek'in sitedeki "Profil bilgileri yakında güncellenecek." satırının silinmesi (site işi).

## Değişiklik: Simge Kaya fotoğrafı (25 Ekim 2026)

- Kullanıcı Simge Kaya için yeni bir fotoğraf verdi: oyun odasında, elinde köpek kuklası. Fotoğrafta çocuk yok (brief §7). Dosya `03-Assets/images/humentis/uzmanlar/simge-kaya-oyun-odasi.jpg` (1125×2000). Sitedeki eski fotoğraf `simge-kaya.jpg` yerinde duruyor.
- `humentis-uzman-08-simge-kaya.jpg` bu fotoğrafla yeniden basıldı. Dolu HTML'de Simge'nin `foto`, `boyut` ve `yuz` alanları değişti. Kukla da kemere girsin diye `kadraj: {k: 0.17, ust: 0.2}` eklendi; varsayılan değerler k .25 ve ust .22.
- **Dikkat:** Kadro kartı (`humentis-uzman-kadrosu.jpg`) yeniden basılmadı, hâlâ eski fotoğrafı gösteriyor. Dolu HTML'den kadro kartı yeniden basılırsa Simge'nin karesi yeni fotoğrafla gelir.

## Açıklamalar: 13–15. uzmanlar (26 Ekim 2026)

Kurallar 1–12 ile aynı. Bilgiler 26 Ekim'de site profillerinden alındı. Hastane stajları ve Başak Kale'nin lisans projesinin konusu (flört şiddeti) yazılmadı (brief §7, kriz içerikleri). Başak Kale ve Zeynep Baltacı'nın yüksek lisansları sürüyor; açıklamada "devam ediyor" diye yazıldı.

### 13 · Başak Kale

#### A — Standart
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Başak Kale'yi tanıyalım.

Yetişkinlerle bireysel görüşmeler yapıyor, çiftlere ve ailelere eşlik ediyor. Öfke kontrolü, ilişki ve iletişim sorunları, sınır koyma, bağlanma, ayrılık ve ilişki sonrası süreçler, duygu düzenleme, mükemmeliyetçilik ve yaşam geçişleri üzerine çalışıyor.

Bilişsel Davranışçı Terapi temelli çalışıyor; Prof. Dr. Hakan Türkçapar'ın yürüttüğü Bilişsel Davranışçı Terapi Kuramsal Programı'nı, Millî Eğitim Bakanlığı onaylı aile danışmanlığı eğitimini ve dinamik psikoterapi eğitimini tamamladı.

Nevşehir Hacı Bektaş Veli Üniversitesi Psikoloji Bölümü'nü onur derecesiyle bitirdi; Konya Gıda ve Tarım Üniversitesi'nde klinik psikoloji yüksek lisansına devam ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Başak Kale; yetişkinlerle bireysel görüşmeler yapıyor, çiftlere ve ailelere eşlik ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog & Aile Danışmanı Başak Kale; öfke kontrolü, sınır koyma, ilişki ve iletişim sorunları ve duygu düzenleme üzerine Bilişsel Davranışçı Terapi temelli çalışıyor. Yetişkinlerle ve çiftlerle görüşüyor.

Sizce öfke çoğu zaman başka bir duygunun önünde mi durur?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

### 14 · Burcu Kayacan

#### A — Standart
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Burcu Kayacan'ı tanıyalım.

Çocuklar, ergenler, yetişkinler ve çiftlerle yüz yüze ve online görüşmeler yapıyor. Bilişsel Davranışçı Terapi, Şema Terapi, oyun terapisi ve aile danışmanlığı yöntemlerini kişinin yaşına, gelişim dönemine ve ihtiyacına göre bir arada kullanıyor.

Çocuklarla oyun terapisinde güvenli bir ifade alanı kurmayı önemsiyor. Çift görüşmelerinde iletişim, bağlanma ve çatışma dinamiklerini yapılandırılmış bir çerçevede ele alıyor. Klinik değerlendirmede MMPI ve çocuk değerlendirme testlerinden yararlanıyor.

İstanbul Bilim Üniversitesi Psikoloji Bölümü'nü tam burslu olarak yüksek dereceyle bitirdi, İstanbul Gelişim Üniversitesi'nde tezli klinik psikoloji yüksek lisansını tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #çiftterapisi
```

#### B — Kısa
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Burcu Kayacan; çocuklar, ergenler, yetişkinler ve çiftlerle yüz yüze ve online görüşmeler yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #çiftterapisi
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Klinik Psikolog & Aile Danışmanı Burcu Kayacan; çiftlerle iletişim, bağlanma ve çatışma dinamikleri üzerine çalışıyor. Çocuklar ve ergenlerle oyun terapisi ve Bilişsel Davranışçı Terapi yaklaşımlarıyla görüşüyor.

Sizce bir çift için hangisi daha zor: tartışmak mı, tartışmadan sonra yeniden yakınlaşmak mı?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #klinikpsikolog #çiftterapisi
```

### 15 · Zeynep Baltacı

#### A — Standart
```text
Uzman kadromuzdan Psikolog Zeynep Baltacı'yı tanıyalım.

Yetişkinlerle Bilişsel Davranışçı Terapi temelli çalışıyor ve bunu sanat temelli tekniklerle destekliyor. Sosyal kaygı ve panik, sınav ve akademik kaygı, öz güven ve öz saygı, kimlik ve benlik gelişimi, dikkat ve odaklanma, erteleme çalıştığı konular arasında. Türkçe ve İngilizce görüşme yapabiliyor.

Ufuk Üniversitesi Psikoloji Bölümü'nü bitirdi; Çankaya Üniversitesi'nde bilişsel psikoloji yüksek lisansına devam ediyor. Verona, Surrey, Bilkent ve ODTÜ'de araştırma asistanı olarak görev aldı. Bilişsel davranışçı terapi eğitimlerini DATEM'de Prof. Dr. Ebru Şalcıoğlu'ndan aldı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #sınavkaygısı
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog Zeynep Baltacı; yetişkinlerle Bilişsel Davranışçı Terapi temelli, sanat temelli tekniklerle desteklenen görüşmeler yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #sınavkaygısı
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog Zeynep Baltacı; sosyal kaygı, sınav ve akademik kaygı, öz güven ve erteleme üzerine yetişkinlerle çalışıyor. Bilişsel Davranışçı Terapiyi sanat temelli tekniklerle destekliyor.

Sizce kaygı en çok ne zaman sesini yükseltir: bir işe başlamadan önce mi, sonucu beklerken mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #sınavkaygısı
```

### Kontrol (13–15)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi uzmanın site profilinde var (26 Ekim 2026).
- [ ] Uzmanların açıklamayı görüp onaylaması.

## Açıklamalar: 16–18. uzmanlar (26 Ekim 2026)

Kurallar 1–15 ile aynı. Bilgiler 26 Ekim'de site profillerinden alındı. Sitede değişen iki şey var:
- **Zuhal Alver sitede artık yok.** Uzman listesi 20 kişiden 18'e düştü; Zuhal Alver ve Nimet Doğan çıkarılmış, profil sayfası ve API 404 veriyor. Zuhal Alver'in açıklaması 21 Ekim'de siteden alınan özet bilgiyle (unvan, alanlar, yöntemler) yazıldı. ❓ Paylaşmadan önce Humentis'te çalışmaya devam edip etmediği teyit edilmeli. Ayrılmışsa 16 numaralı kart ve kadro kartındaki karesi kullanılmamalı.
- **Miray Erciyas'ın unvanı sitede "Psikolog" olarak düzeltilmiş.** Kart zaten "Psikolog" yazıyordu; yukarıdaki ❓ kapandı. Biyografisine göre psikodinamik yaklaşımla çalışıyor, açıklama buna göre yazıldı. Sitenin "yöntemler" alanında BDT yazıyor.

Ali Karaömerlioğlu ve Miray Erciyas'ın sitedeki özet alanında hâlâ "Profil bilgileri yakında güncellenecek." yazıyor; biyografiler dolu. Ali Karaömerlioğlu'nun hastane deneyimi, gönüllü çalışmaları ve cinsel terapi eğitimi açıklamaya konmadı (brief §4 ve §7).

### 16 · Zuhal Alver (❓ sitede artık yok, önce teyit)

#### A — Standart
```text
Uzman kadromuzdan Psikolog Zuhal Alver'i tanıyalım.

Yetişkinlerle bireysel görüşmeler yapıyor; ergenler, aileler ve çiftlerle de çalışıyor. Bilişsel Davranışçı Terapi, oyun terapisi ve EMDR yaklaşımlarından yararlanıyor. Görüşmeler yüz yüze ya da online yapılabiliyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog Zuhal Alver; yetişkinler, ergenler, aileler ve çiftlerle yüz yüze ve online görüşmeler yapıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog Zuhal Alver; yetişkinler, ergenler, aileler ve çiftlerle Bilişsel Davranışçı Terapi, oyun terapisi ve EMDR yaklaşımlarıyla çalışıyor.

Sizce bir ailede herkesin aynı anda duyulması mümkün mü?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #çiftterapisi
```

### 17 · Ali Karaömerlioğlu

#### A — Standart
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Ali Karaömerlioğlu'nu tanıyalım.

Yetişkinler ve ergenlerle bireysel görüşmeler yapıyor, ailelere ve çiftlere eşlik ediyor. Bilişsel Davranışçı Terapi temelli çalışıyor. Şema Terapi'den özellikle erken dönem yaşantılar, temel inançlar, ilişki örüntüleri ve tekrarlayan döngüler üzerine çalışırken yararlanıyor. EMDR ve aile danışmanlığı eğitimlerini de tamamladı.

Kaygı ve stres, özgüven, sınav kaygısı, ilişkiler ve aile içi iletişim çalıştığı konular arasında.

Mersin Çağ Üniversitesi Psikoloji Bölümü'nü İngilizce eğitimle bitirdi; aynı üniversitede burslu olarak genel psikoloji yüksek lisansını tamamladı. Yüksek lisans tezinde sosyal medya bağımlılığı ile kişisel iyi oluş arasındaki ilişkiyi inceledi.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### B — Kısa
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Ali Karaömerlioğlu; yetişkinler ve ergenlerle bireysel görüşmeler yapıyor, ailelere ve çiftlere eşlik ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

#### C — Soruyla biten
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Ali Karaömerlioğlu; kaygı, özgüven, ilişkiler ve aile içi iletişim üzerine Bilişsel Davranışçı Terapi ve Şema Terapi temelli çalışıyor. Yüksek lisans tezinde sosyal medya bağımlılığı ile kişisel iyi oluş arasındaki ilişkiyi inceledi.

Sizce telefonu elimizden bırakmak neden bu kadar zor?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #ailedanışmanı
```

### 18 · Miray Erciyas

#### A — Standart
```text
Uzman kadromuzdan Psikolog Miray Erciyas'ı tanıyalım.

Çocuklar, ergenler ve yetişkinlerle psikodinamik yaklaşımla çalışıyor. Yaşanan güçlükleri yalnızca bugünkü belirtiler üzerinden değil; geçmiş deneyimler, ilişkiler ve kişinin iç dünyası çerçevesinde anlamaya odaklanıyor.

Çocuklarla oyun aracılığıyla çalışıyor; kaygı, uyum, dikkat ve kardeş kıskançlığı bu çalışmaların konuları arasında. Ergenlerle benlik algısı, aile ve arkadaş ilişkileri ve sınav kaygısı; yetişkinlerle kaygı, sosyal kaygı, yalnızlık, ilişkisel güçlükler ve öz değer üzerine görüşüyor.

Çankaya Üniversitesi Psikoloji Bölümü'nden mezun oldu. Oyun terapisi, çocuk değerlendirme testleri, Bilişsel Davranışçı Terapi ve Şema Terapi eğitimleri aldı; psikanaliz seminerlerine devam ediyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #oyunterapisi
```

#### B — Kısa
```text
Uzman kadromuzdan Psikolog Miray Erciyas; çocuklar, ergenler ve yetişkinlerle psikodinamik yaklaşımla çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #oyunterapisi
```

#### C — Soruyla biten
```text
Uzman kadromuzdan Psikolog Miray Erciyas; kaygı, yalnızlık, ilişkisel güçlükler ve öz değer üzerine psikodinamik yaklaşımla çalışıyor. Çocuklarla oyun aracılığıyla, ergenlerle ve yetişkinlerle bireysel görüşmelerle ilerliyor.

Sizce yalnızlık, kalabalığın içinde de hissedilir mi?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #psikolog #oyunterapisi
```

### Kontrol (16–18)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta / ücretsiz", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Ali Karaömerlioğlu ve Miray Erciyas'taki her bilgi site profilinde var (26 Ekim 2026). Zuhal Alver'inkiler 21 Ekim'de siteden alındı.
- [ ] ❓ Zuhal Alver'in Humentis'te çalışmaya devam edip etmediği.
- [ ] Uzmanların açıklamayı görüp onaylaması.

## Ek: Elif Köden kartı ve açıklaması (28 Ekim 2026)

- Kullanıcı isteği: Excel listesinde olmadığı için kartı yapılmamış olan Elif Köden'e de kart hazırlanması.
- **Kart:** `03-Assets/images/humentis/uzman-tanitim/humentis-uzman-19-elif-koden.jpg`. Fotoğraf sitedeki profil fotoğrafı (`03-Assets/images/humentis/uzmanlar/elif-koden.jpg`, 640×641). Düşük çözünürlüklü ama kartta belirgin bulanıklık yok; daha büyük bir fotoğraf gelirse yeniden basılmalı.
- **Dolu HTML:** Elif Köden slayt 20 olarak kadro kartının arkasına eklendi, böylece eski numaralar değişmedi (1–18 uzmanlar, 19 kadro). Unvan ayırıcısı diğerleri gibi "&" yapıldı; sitede "Uzman Psikolog, Aile Danışmanı" yazıyor.
- **Kadro kartı güncellenmedi:** Elif Köden kadro kartında yok. Dolu HTML'den kadro kartı yeniden basılırsa otomatik olarak eklenir (20 kişi olur, 6×3 ızgaraya sığmaz, ızgaranın düzenlenmesi gerekir).
- **Açıklama:** Bağımlılık danışmanlığı, sitede dört çalışma alanından biri ve özetinde geçtiği için A seçeneğinde tek cümleyle, sade dille yazıldı. Rehabilitasyon merkezi, yataklı psikiyatri deneyimi, cinsel terapi ve kısa acil psikoterapi eğitimleri yazılmadı (brief §4 ve §7). İstenirse bağımlılık cümlesi de çıkarılabilir.

### 19 · Elif Köden

#### A — Standart
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Elif Köden'i tanıyalım.

Çocuklar, ergenler, aileler ve çiftlerle çalışıyor. Çocuklarla deneyimsel oyun terapisinden, ergenlerle ağırlıklı olarak Bilişsel Davranışçı Terapi yaklaşımından yararlanıyor; bu çalışmaları gerektiğinde ebeveyn danışmanlığı ve aile görüşmeleriyle sürdürüyor. Çiftlerle duygu odaklı çift terapisi ve aile danışmanlığı eğitimleri doğrultusunda görüşüyor.

Kaygı ve korkular, okula uyum ve sınav kaygısı, akran ilişkileri, özgüven ve duygu düzenleme, ebeveyn–çocuk ilişkisi, aile içi iletişim, evlilik öncesi süreçler ve ayrılık döneminde aileye destek çalıştığı konular arasında. Bağımlılık alanında da bireylere ve ailelerine danışmanlık deneyimi var.

TED Üniversitesi Psikoloji Bölümü'nden mezun oldu, Ufuk Üniversitesi'nde genel psikoloji yüksek lisansını tamamladı.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #oyunterapisi #ailedanışmanı
```

#### B — Kısa
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Elif Köden; çocuklar, ergenler, aileler ve çiftlerle çalışıyor.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #oyunterapisi #ailedanışmanı
```

#### C — Soruyla biten
```text
Kadromuzdan Uzman Psikolog & Aile Danışmanı Elif Köden; çocuk ve ergenlerle oyun terapisi ve Bilişsel Davranışçı Terapi, çiftlerle duygu odaklı çift terapisi yaklaşımıyla çalışıyor. Ebeveyn–çocuk ilişkisi ve aile içi iletişim başlıca konuları.

Sizce ebeveynler arasındaki tutum farkını çocuk ne kadar hisseder?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #oyunterapisi #ailedanışmanı
```

### Kontrol (19)

- [x] Teşhis/tedavi vaadi, "en iyi / garanti / tedavi / hasta / ücretsiz", aciliyet ve danışan hikâyesi yok (brief §7).
- [x] Hitap "siz", kapanış "bizimle iletişime geçebilirsiniz", hashtag seti stil kartındaki gibi.
- [x] Her bilgi site profilinde var (28 Ekim 2026).
- [ ] Uzmanın kartı ve açıklamayı görüp onaylaması.

## Değişiklik: kadro kartı yeniden düzenlendi (1 Kasım 2026)

- Kullanıcı isteği: Zuhal Alver çıkarılsın, Elif Silav en başa gelsin, ardından Nazlı Şentürk, Nurşen Arıcı, Burcu Kayacan, Ayşegül Keskingöz gelsin, Elif Köden de listeye eklensin.
- **Yeni sıra (18 kişi):** Elif Silav · Nazlı Şentürk · Nurşen Arıcı · Burcu Kayacan · Ayşegül Keskingöz · Aybala Görkem Polat · Solmaz Şenyüz · Barış Can Kolçak · Simge Kaya · Müge Ertuğrul · Hatice Kıykım · Irmak Tara Sığırcı · Sena Şimşek · Başak Kale · Zeynep Baltacı · Ali Karaömerlioğlu · Miray Erciyas · Elif Köden. İlk beşten sonrası eski sırayla devam ediyor; Elif Köden sona eklendi.
- Simge Kaya kadroda da yeni (oyun odası) fotoğrafıyla görünüyor.
- `humentis-uzman-kadrosu.jpg` bu haliyle yeniden basıldı; Zuhal Alver'li eski hali silindi. 16 numaralı tekli kartı ve açıklaması yerinde duruyor, kullanılmayacak.
- **Şablon değişikliği** (`uzman-karti-4x5.html`, dolu HTML de güncel şablonla yeniden kuruldu): `kadro_kart`'a `sira` listesi eklendi; kim hangi sırada, kim yok buradan ayarlanıyor. Küçük kemer artık büyük kartın `kadraj` ayarını kullanmıyor, gerekirse `kadraj_mini` verilir. Simge'nin geniş büyük kart kırpması küçük karede yüzü çok küçültüyordu.

## Açıklama: kadro kartı (1 Kasım 2026)

Kurallar uzman açıklamalarıyla aynı. "Ankara'nın en büyük aile danışma merkezi" ifadesi brief'te geçiyor ama üstünlük iddiası olduğu için kullanılmadı (brief §7). Online görüşme her uzmanda teyitli olmadığı için yazılmadı. İsim sırası karttaki sırayla aynı.

### A — Standart
```text
Uzman kadromuzu tanıyalım.

Humentis'te yetişkin, çocuk, ergen, çift ve aile danışmanlığı aynı çatı altında. Psikolog, klinik psikolog, psikolojik danışman ve çocuk gelişimi uzmanlarından oluşan 18 kişilik ekibimizle, her danışanın kendi ihtiyacına uygun uzmanla buluşmasını önemsiyoruz.

Ekibimiz:
Elif Silav (kurucu) · Nazlı Şentürk · Nurşen Arıcı · Burcu Kayacan · Ayşegül Keskingöz · Aybala Görkem Polat · Solmaz Şenyüz · Barış Can Kolçak · Simge Kaya · Müge Ertuğrul · Hatice Kıykım · Irmak Tara Sığırcı · Sena Şimşek · Başak Kale · Zeynep Baltacı · Ali Karaömerlioğlu · Miray Erciyas · Elif Köden

Size uygun uzmanı birlikte belirlemek, randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr
📍 Çankaya, Ankara

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ankarapsikoloji #ailedanışmanı
```

### B — Kısa
```text
Uzman kadromuzu tanıyalım: yetişkin, çocuk, ergen, çift ve aile danışmanlığında 18 uzman, aynı çatı altında.

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ankarapsikoloji #ailedanışmanı
```

### C — Soruyla biten
```text
Uzman kadromuzu tanıyalım. Humentis'te yetişkin, çocuk, ergen, çift ve aile danışmanlığı aynı çatı altında; 18 kişilik ekibimizle her danışanın kendi ihtiyacına uygun uzmanla buluşmasını önemsiyoruz.

Sizce danışmanlık sürecinde uzmanla aradaki uyum ne kadar önemli?

Randevu ve bilgi için bizimle iletişime geçebilirsiniz.
📞 0552 898 95 45 · humentis.com.tr

#humentispsikoloji #humentisailedanışmamerkezi #ankarapsikolog #ankarapsikoloji #ailedanışmanı
```

## Görseller GitHub'da (3 Kasım 2026)

- Kullanıcı isteği: "bunları githuba pushla pcden sil". Bu işin görselleri (`03-Assets/images/humentis/uzmanlar/` altındaki site fotoğrafları ve dekupe, `uzman-tanitim/` altındaki 20 kart, "Anne, sıkıldım!" kapağı) notlar ve şablonlarla birlikte GitHub'da `humentis-uzman-kartlari` dalına gönderildi: https://github.com/sevvalozik/icerik-vault/tree/humentis-uzman-kartlari
- Görseller bilgisayardan kaldırıldı (Çöp Sepeti'ne taşındı). Notlar ve şablonlar kasada duruyor. Dal `main`e birleştirilmedi.
- Geri almak için: `git fetch origin && git checkout origin/humentis-uzman-kartlari -- 03-Assets/images/humentis/uzman-tanitim 03-Assets/images/humentis/uzmanlar 03-Assets/images/humentis/reels/humentis-anne-sikildim-kapak-uzman-site-1080x1920.jpg`
- Ham video (`~/Downloads/IMG_1259 2.mov`, 598 MB) GitHub'a konmadı (90 MB sınırı) ve o da Çöp Sepeti'ne taşındı.
