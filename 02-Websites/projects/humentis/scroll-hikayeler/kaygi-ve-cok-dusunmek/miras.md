---
type: website
framework: html
client: humentis
slug: humentis-scroll-kaygi-miras
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, hikaye, kaygi, aile]
related: ["[[00-genel-bakis]]", "[[kaygi-ve-cok-dusunmek]]", "[[ergen-ve-ebeveyn]]", "[[gecisler]]"]
---

# Kaygı — "Miras"

## 1. Künye

| | |
|---|---|
| Karakter | Elif, 38, mimar, 9 yaşında bir kız annesi (kız hiç görünmez) |
| Konu | Kuşaktan kuşağa geçen kaygı; ebeveyn kaygısı |
| Duygusal çekirdek | Bazı kaygılar bize ait değildir. Bizden önce başlar. |
| Geçiş | Aynı kapı, aynı cümle, üç kuşak. Son sahnede Elif farklı bir cümle kurar; zincir kırılır ve site o yeni cümleden açılır. |
| Açıldığı yer | Uzmanın kaygı / ebeveyn sayfası: "Bazı kaygılar bize ait değildir." |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |
| Uyduğu konular | Kaygı · Ergen ve ebeveyn · Aile danışmanlığı |

## 2. Hikâye

Pazartesi sabahı, 07:50. Elif kızını okul servisine yolcu ediyor. Kapıda durup arkasından sesleniyor: *"Dikkat et!"* Kapı kapanıyor.

Elif kapının önünde bir süre kalıyor. O iki kelime ağzından çıktığı anda tanıdık geldi. Sesi kendi sesi değildi sanki.

Otuz yıl önce, aynı saatte, başka bir kapıda annesi de ona aynı şeyi söylerdi. *"Dikkat et."* Sonra pencereden servisin köşeyi dönmesini izlerdi. Elif bunu hep sevgi sanmıştı. Belki öyleydi de. Ama o pencerenin arkasındaki kadının her sabah ne kadar korktuğunu şimdi, kendi kapısının önünde, ilk kez anlıyor.

Ve annesinin de bir kapısı vardı. Anneannesinin evinin ahşap kapısı. Elif anneannesinin sesini hatırlıyor: *"Aman dikkat et, kızım."* O kadar çok duyulmuş bir cümle ki, artık kimse ne demek olduğunu düşünmüyor. Üç kadın, üç kapı, aynı iki kelime. Ve üçünün de içinde, hiçbir zaman adı konmamış aynı korku.

Elif bu sabah ilk kez şunu soruyor: *Bu korku gerçekten benim mi?*

Ertesi sabah kapıda yine duruyor. Kızı ayakkabısını bağlıyor, çantasını alıyor. Elif ağzını açıyor ve bir an duraksıyor. Sonra başka bir şey söylüyor:

*"İyi eğlen."*

Kapı kapanıyor. Elif'in eli titriyor ama söyledi.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–18 | frame | kapi-bugun | Kapı kapanır | *"Dikkat et!"* |
| 18–36 | era | kapi-1994 | Bugünden 1994'e erime | *"Dikkat et."* · etiket 1994 |
| 36–54 | era | kapi-1963 | 1994'ten 1963'e erime | *"Aman dikkat et, kızım."* · etiket 1963 |
| 54–70 | triptych | üç kapı | Üç kare yan yana nefes alır | *Üç kadın. Aynı iki kelime.* |
| 70–90 | frame | kapi-bugun-sabah2 | Ertesi sabah; Elif duraksar | *"İyi eğlen."* (altın) |
| 90–100 | geçiş | — | Eski "Dikkat et"ler silik görünüp solar | **Bazı kaygılar bize ait değildir. Bizden önce başlar.** |

**Kısaltmada çıkarılanlar:** Pencere sahnesi ve "Kendi sesi değildi sanki" / "Bu korku gerçekten benim mi?" satırları çıkarıldı; `pencere-1994` kullanılmıyor.

## 4. Geçiş anı — "Yeni cümle"

1. **(90%)** Elif'in ağzından çıkan cümle film yazısı olarak belirir: *"İyi eğlen."* Diğer cümlelerden farklı renkte (altın `#CEAB69`).
2. **(93%)** Kapı kapanır. Bu sefer kapının kapanmasıyla ekran kararmaz, ışık artar.
3. **(95%)** Geri planda, üç kuşağın "Dikkat et" yazıları çok silik halde bir an görünür ve solar. Sadece altın "İyi eğlen." kalır.
4. **(98–100%)** Altın yazı küçülüp sitenin başlığının üstündeki ince bir etikete dönüşür; başlık belirir: **"Bazı kaygılar bize ait değildir. Bizden önce başlar."**

Geçiş, zincirin kırıldığı an. Site o yeni cümlenin devamı gibi açılır.

**Furkan Bey için not:** Üç dönemin kareleri aynı kadraj ve aynı kapı konumuyla üretilmeli ki "erime" geçişi (crossfade + çok hafif scale) kesintisiz dursun. Üçe bölünme `grid-template-columns: 1fr 1fr 1fr` ile, her panel kendi karesini `object-position` ile kapıya ortalar.

## 5. Açıldığı site bölümü

**Başlık:** Bazı kaygılar bize ait değildir. Bizden önce başlar.

**İlk paragraf:** Çocuklarımıza söylediğimiz bazı cümleler, bize söylenmiş cümlelerdir. Kaygı da bazen bir aile yadigârı gibi, kimse fark etmeden kuşaktan kuşağa geçer. Bunu fark etmek birini suçlamak değil; hangi korkunun gerçekten bugüne ait olduğunu, hangisinin sadece alışkanlıkla taşındığını ayırt edebilmektir.

**Alt bölümler:**
- Ebeveyn kaygısı çocuğa nasıl geçer?
- "Dikkat et" yerine ne söyleyebilirim?
- Ebeveyn görüşmesi: çocuğu getirmeden ilk adım

**CTA:** Ön görüşme için randevu al
**İkincil:** Blog: "Kendi annemizin cümlelerini neden tekrarlarız?"

## 6. Gerekli görseller

| Kod | İçerik |
|---|---|
| K3-kapi-bugun | Modern apartman dairesi girişi, içeriden; Elif arkadan (kart aşağıda); kapı aralık, sabah ışığı |
| K3-kapi-bugun-sabah2 | Aynı kadraj, daha aydınlık; kapıdan çıkan küçük bir sırt çantasının sadece kenarı |
| K3-kapi-1994 | Aynı kadraj, 1990'lar Türkiye: boyalı ahşap kapı, dantel perde, sıcak sarı ışık; 30'larında bir kadın arkadan (Elif'in annesi) |
| K3-pencere-1994 | Aynı dönem, kadın arkadan pencere önünde |
| K3-kapi-1963 | Aynı kadraj, 1960'lar Anadolu kasaba evi: çift kanatlı kalın ahşap kapı, taş zemin, soluk ışık; başörtülü bir kadın arkadan |

**Elif kartı (EN, taslak):** `a woman in her late thirties, an architect, shoulder-length wavy auburn hair, wearing a charcoal wool coat over a cream turtleneck` — yüz görünmez.

**Dikkat:** Kız hiçbir karede görünmez (ne yüz, ne el, ne silüet); sadece çantanın kenarı. Promptlara `no children, no child's hands, no child silhouette` eklenir. 1994 karesindeki anne 30'larında olmalı (Elif'in çocukluğu), 60'larında değil — üretimde dikkat.

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. Claude bu tabloyu `hikaye.js`'e birebir çevirir.

- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/kaygi-ve-cok-dusunmek/miras/`
- **Görsel promptları:** [[scroll-miras-brief]] (`07-AI-Gorsel/humentis/scroll-miras-brief.md`): karakter kartları ve her kare için hazır İngilizce prompt
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/miras/` (dosya adı = aşağıdaki "Görsel" sütunu + `.jpg`; aynı adla `.mp4` varsa klip oynar; yoksa yer tutucu)
- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)
- **Müzik:** 16%'da gece parçası, 72–80 arası ses 0, 90%'da sabah parçası.

### Sahne listesi

§3 Kısa kesim tablosu birebir sahne listesidir (yüzde, tip, görsel, yazı).

### Özel davranışlar

- `era`: üç dönem karesi aynı kadrajda; erime 1.5 ekran boyu scroll'a yayılır.
- "İyi eğlen." `color: #CEAB69`; geçişte küçülüp başlığın üstünde etiket olur (aynı DOM öğesi, `transform` ile).

### Görsel dosyaları

- `kapi-bugun.jpg`: modern daire girişi, içeriden; Elif arkadan; kapı aralık, sabah
- `kapi-bugun-sabah2.jpg`: aynı kadraj, daha aydınlık; kapıdan çıkan çantanın sadece kenarı
- `kapi-1994.jpg`: aynı kadraj, 1990'lar; 30'larında bir kadın arkadan
- `pencere-1994.jpg`: aynı dönem, kadın arkadan pencere önünde
- `kapi-1963.jpg`: aynı kadraj, 1960'lar kasaba evi; başörtülü kadın arkadan
