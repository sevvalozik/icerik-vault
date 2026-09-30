---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-iliski-uc-nokta
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/FsazzTMvqUVVpBGpz8WZ3n"
tags: [website, humentis, scroll, hikaye, iliskiler, baglanma]
related: ["[[00-genel-bakis]]", "[[iliskiler-ve-baglanma]]", "[[teknik-spec]]", "[[scroll-uc-nokta-brief]]"]
---

# İlişkiler ve Bağlanma — "Üç Nokta"

> **Site hazır:** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/uc-nokta/` · Canlı deneme: https://claude.ai/artifact/FsazzTMvqUVVpBGpz8WZ3n
> Şevval tarafından onaylandı (28 Eylül 2026). Bu hikâyede yazılar **gerçek bir mesajlaşma ekranında** akar.

## 1. Künye

| | |
|---|---|
| Karakterler | Zeynep, 29 · Emre (hiç görünmez; sadece mesajları) |
| Konu | Kaygılı bağlanma; cevap beklerken zihnin boşluğu felaketle doldurması |
| Duygusal çekirdek | Yapmadığı bir şey için üç özür taslağı yazmıştı. |
| Geçiş | Telefon küçülüp kaybolur; ekran krem zemine erir; başlık "Cevap gelene kadar…" |
| Açıldığı yer | İlişkiler ve bağlanma sayfası |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye

Salı akşamı, 21:02. Zeynep ile Emre üç haftadır görüşüyor. Bu akşam birlikte kahve içtiler, kafe kapanmadan son masayı kaptılar. Zeynep eve varınca "Vardım 🙂" yazdı. Sonra bir mesaj daha yazıyor: *"Bu akşam çok güzeldi, teşekkür ederim 🙂"* Gönderiyor.

Tek tik. Çift tik. Görüldü, 21:04. Emre'nin adının altında "yazıyor…" beliriyor. Sonra kayboluyor.

Saat 21:10. 21:25. 21:39. Zeynep'in zihni boşluğu doldurmaya başlıyor: *Sıkıldı. Fazla mı yazdım? Emoji koymasaydım. Başka biri var. Zaten hep böyle oluyor. Ben fazlayım.*

Mesajını daha umursamaz görünsün diye düzenliyor: *"Bu akşam güzeldi."* Sonra bir daha: *"İyi geceler."*

Mesaj kutusuna bir özür yazıyor, siliyor. Bir tane daha. Dört taslak.

22:03. Yeniden "yazıyor…". Ve cevap: *"Pardon, metrodaydım, şarjım da bitmek üzereydi 🙂"* · *"Ben de çok güzel buldum. Cumartesi yine?"*

Zeynep rahatlıyor. Sonra fark ediyor: yapmadığı bir şey için üç özür taslağı yazmıştı.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–8 | sohbet | — | Telefon belirir; eski mesajlar | *Salı. 21:02.* |
| 8–25 | sohbet | — | Mesaj yazılır, gönderilir; tik, çift tik, okundu; "yazıyor…" belirip kaybolur | — |
| 25–45 | sohbet | oda-gece | Saat 21:10 → 21:47; oda kararır; dışarıda düşünceler | *Sıkıldı.* → *Fazla mı yazdım?* → *Başka biri var.* |
| 45–65 | sohbet | — | Mesaj bir kez düzenlenir ("İyi geceler."); 3 özür taslağı yazılıp silinir | — |
| 65–82 | sohbet | — | "yazıyor…" → cevap | *"Pardon, metrodaydım 🙂 Cumartesi yine?"* |
| 82–100 | sohbet (geçiş) | — | Telefon küçülüp kaybolur | *Yapmadığı bir şey için üç özür taslağı yazmıştı.* → **Cevap gelene kadar…** |

**Kısaltmada çıkarılanlar:** "Görmüş.", "Mesajını iki kez düzenledi…" satırları, 3 düşünce ve 1 taslak çıkarıldı; iki cevap balonu teke indi.

## 4. Açıldığı site bölümü

**Başlık:** Cevap gelene kadar…

**İlk paragraf:** Birinden cevap beklerken zihin boşluğu kendi hikâyeleriyle doldurur. Sessizliği reddedilme, gecikmeyi ilgisizlik, kısa bir mesajı öfke gibi okur. Bağlanma kaygısı, yakınlık istediğimiz anda en yüksek sesle konuşur. Terapide amaç o sesi susturmak değil; ona inanmadan önce durup bakabilmektir.

**Alt bölümler (metin uzmanla yazılacak):**
- Bağlanma kaygısı nedir?
- Neden hep en kötüsünü düşünüyorum?
- İlişkide kendimi kaybetmeden yakın olmak

**CTA:** Ön görüşme için randevu al

## Kodlama için

- **Toplam uzunluk:** 5 ekran boyu (kısa kesim)

> Bu bölüm [[teknik-spec]] ile birlikte okunur. **Uygulaması hazır:** yeni bir şey kurmak yerine `scroll-siteler/iliskiler-ve-baglanma/uc-nokta/index.html` kullanılır.

- **Görsel promptları:** [[scroll-uc-nokta-brief]]
- **Çıktı klasörü:** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/uc-nokta/`
- **Görsel klasörü:** `03-Assets/images/humentis/scroll/iliskiler-ve-baglanma/uc-nokta/` (tek görsel: `oda-gece.jpg` ya da `.mp4`)
- **Sahne tipi:** `sohbet` (bkz. şartname). Mesajlar, tikler, "yazıyor…", "düzenlendi", "Görüldü" ve mesaj kutusu tamamen HTML/CSS.
- **Kural:** Uygulama markası taklit edilmez (WhatsApp yeşili/logosu yok); Humentis renkleri: benim balonum `#1f4a4f`, karşı taraf `#1c2729`, okundu tiki `#CEAB69`.
