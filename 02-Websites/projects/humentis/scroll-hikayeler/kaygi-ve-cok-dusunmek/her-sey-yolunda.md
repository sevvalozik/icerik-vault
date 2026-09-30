---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-kaygi-her-sey-yolunda
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, kaygi]
related: ["[[00-genel-bakis]]", "[[kaygi-ve-cok-dusunmek]]", "[[gecisler]]"]
---

# Kaygı — "Her Şey Yolunda"

## 1. Künye

| | |
|---|---|
| Karakter | Can, 34, satış müdürü; herkesin "ne kadar rahat biri" dediği kişi |
| Konu | Görünmeyen (yüksek işlevli) kaygı |
| Duygusal çekirdek | Dışarıdan kimse fark etmiyor. Ama o biliyor. |
| Geçiş | Ekran baştan sona ikiye bölünmüş: solda dışarıdan görünen, sağda içeriden yaşanan. Sonunda orta çizgi kapanır, iki yarı birleşir, site açılır. |
| Açıldığı yer | Uzmanın kaygı sayfası: "Dışarıdan kimse fark etmiyor. Ama siz biliyorsunuz." |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye

Can'ı tanıyan herkes aynı şeyi söyler: "Onun hiçbir şeyi kafaya taktığını görmedim." Toplantılarda şakayla gerginliği dağıtan, arkadaş grubunda organizasyonu yapan, annesini her pazar arayan kişi o.

Perşembe sabahı, büyük müşteriye sunum yapıyor. Slaytlar kusursuz, sesi sakin, sorulara hazırlıklı. Sunum bitince alkış geliyor. Can gülümsüyor, teşekkür ediyor, çıkıyor ve doğruca tuvalete gidiyor. Kapıyı kilitliyor, ellerini lavabonun kenarına dayıyor ve iki dakika boyunca sadece nefes almaya çalışıyor. Sonra yüzüne su çarpıp geri dönüyor. Kimse bir şey fark etmiyor.

Akşam bir arkadaşının doğum günü var. Can pastanın mumlarını yakan kişi, herkesi güldüren kişi. Ama her yirmi dakikada bir telefonuna bakıyor: yarınki toplantının maili geldi mi, bir şey mi unuttu, sunumda yanlış bir şey mi söyledi. Gülerken bile bir kısmı başka yerde.

Gece eve dönerken annesi arıyor. "İyi misin oğlum, sesin yorgun geliyor." Can "İyiyim anne, her şey yolunda" diyor. Direksiyonu tutan eli beyazlamış.

Can kendi içinde neler olduğunu biliyor. Bilmediği şey, bunu birine anlatmanın mümkün olduğu.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–30 | split | alkis-dis / alkis-ic | Solda alkış, sağda kilitli tuvalette iki el | sol: *Alkış.* · sağ: *İki dakika. Sadece nefes.* |
| 30–55 | split | parti-dis / parti-ic | Solda mumlar ve kahkaha, sağda masanın altında telefon | sol: *Herkes gülüyor.* · sağ: *Yarınki mail geldi mi?* |
| 55–80 | split (merge başlar) | araba-dis / araba-ic | Solda direksiyonda rahat, sağda beyazlamış eklemler | sol: *"İyiyim anne, her şey yolunda."* |
| 80–100 | split (merge) | araba-dis + araba-ic | İki yarı üst üste biner | *Ama o biliyor.* → **Dışarıdan kimse fark etmiyor. Ama siz biliyorsunuz.** |

**Kısaltmada çıkarılanlar:** Sunum ve koridor sahneleri çıkarıldı; `sunum-*` ve `koridor-*` kareleri kullanılmıyor.

## 4. Geçiş anı — "İki yarı birleşir"

1. **(82%)** Orta çizgi scroll ile titreşir; iki yarının görüntüsü üst üste kaymaya başlar.
2. **(88%)** Sol ve sağ tamamen üst üste biner: direksiyondaki rahat Can ile eklemleri beyazlamış el aynı karede. İlk kez tek bir görüntü.
3. **(92%)** Ekran yazısı ortada: *Ama o biliyor.*
4. **(95%)** Görüntü krem zemine erir; orta çizgi yatay bir çizgiye döner ve başlığın altındaki ince hat olur.
5. **(98–100%)** Başlık belirir: **"Dışarıdan kimse fark etmiyor. Ama siz biliyorsunuz."**

Geçiş hikâyenin tezinin kendisi: iki hayat ancak biri onları birlikte görünce birleşir. Terapi o yer.

**Furkan Bey için not:** İki yarı iki ayrı `position: sticky` panel; her sahne için bir sol, bir sağ görsel. Birleşmede sağ panelin `clip-path` inset'i 50%'den 0'a, sol panelin opacity'si 1'den .5'e. Mobilde bölünme dikey değil yatay (üst: dışarıdan, alt: içeriden).

## 5. Açıldığı site bölümü

**Başlık:** Dışarıdan kimse fark etmiyor. Ama siz biliyorsunuz.

**İlk paragraf:** Kaygı her zaman görünür değildir. Bazen en sakin görünen, en çok iş yetiştiren, herkesin "ona bir şey olmaz" dediği kişidedir. İşlevini sürdürüyor olmanız, zorlanmadığınız anlamına gelmez. Buraya kadar okuduysanız, belki içeriden neler olduğunu anlatacak bir yere ihtiyacınız vardır.

**Alt bölümler:**
- "Yüksek işlevli kaygı" ne demek?
- Her şeyi idare ediyorken yardım istemek
- İlk görüşmede ne konuşuruz?

**CTA:** Ön görüşme için randevu al
**İkincil:** Blog: "Neden 'iyiyim' demek bu kadar kolay?"

## 6. Gerekli görseller

Her sahne için bir **dışarıdan** bir **içeriden** kare (toplam ~10). Karakter kartı:
`a man in his mid-thirties, a sales manager, short neat dark hair, clean-shaven, wearing a well-fitted navy suit jacket over a white shirt, no tie` — yüz görünmez.

| Kod | Dışarıdan | İçeriden |
|---|---|---|
| K2-sunum | Arkadan sunum, dinleyenler flu | Kürsüyü sıkan el, yakın |
| K2-alkis | Hafif eğilen Can, arkadan | Kilitli tuvalet, lavaboya dayanmış eller |
| K2-parti | Pastanın mumları, eller, kahkaha | Masanın altında yanan telefon, başparmak |
| K2-araba | Direksiyonda arkadan, gece | Eklemleri beyazlamış el, direksiyonda |

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Claude bu tabloyu `hikaye.js`'e birebir çevirir.

- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/kaygi-ve-cok-dusunmek/her-sey-yolunda/`
- **Görsel promptları:** [[scroll-her-sey-yolunda-brief]] (`07-AI-Gorsel/humentis/scroll-her-sey-yolunda-brief.md`): karakter kartları ve her kare için hazır İngilizce prompt
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/her-sey-yolunda/` (dosya adı = aşağıdaki "Görsel" sütunu + `.jpg`; aynı adla `.mp4` varsa klip oynar; yoksa yer tutucu)
- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)
- **Müzik:** 36%'da gece parçası çok alçak (ses .3); 82%'de sabah parçasına geçiş.

### Sahne listesi

§3 Kısa kesim tablosu birebir sahne listesidir (yüzde, tip, görsel, yazı).

### Özel davranışlar

- `split`: her satırda iki görsel (`-dis` sol, `-ic` sağ). Mobilde üst = dışarıdan, alt = içeriden.
- Panel başlıkları küçük etiket olarak: sol üstte "DIŞARIDAN", sağ üstte "İÇERİDEN" (Courier Prime, .6 opaklık).

### Görsel dosyaları

- `sunum-dis / sunum-ic.jpg`: arkadan sunum / kürsüyü sıkan el
- `alkis-dis / alkis-ic.jpg`: hafif eğilen Can / kilitli tuvalette lavaboya dayanmış eller
- `koridor-dis / koridor-ic.jpg`: gülümseyerek dönen Can arkadan / pantolona silinen ıslak eller
- `parti-dis / parti-ic.jpg`: pastanın mumları, eller, kahkaha / masanın altında yanan telefon
- `araba-dis / araba-ic.jpg`: direksiyonda arkadan, gece / eklemleri beyazlamış el
