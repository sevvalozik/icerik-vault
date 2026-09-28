---
type: website
framework: html
client: humentis
slug: humentis-scroll-iliski-ayni-sahne
status: draft
date: 2026-09-28
url: "https://claude.ai/artifact/M2RNdrB9CgDiChr6TzRT9w"
tags: [website, humentis, scroll, hikaye, iliskiler, baglanma, tekrar]
related: ["[[00-genel-bakis]]", "[[iliskiler-ve-baglanma]]", "[[teknik-spec]]"]
---

# İlişkiler ve Bağlanma — "Aynı Sahne"

> **Site hazır:** `02-Websites/projects/humentis/scroll-siteler/iliskiler-ve-baglanma/ayni-sahne/` · Canlı: https://claude.ai/artifact/M2RNdrB9CgDiChr6TzRT9w
> Görsel ya da video gerekmiyor: senaryo sayfaları, klaket ve daktilo yazısı tamamen kodla çiziliyor.

## 1. Künye

| | |
|---|---|
| Karakterler | Selin; karşısında her çekimde başka biri (Can, Barış, Kaan). Kimse görünmez, sadece senaryo sayfası var. |
| Konu | Farklı ilişkilerde aynı kavganın tekrar etmesi (tekrar eden ilişki örüntüleri) |
| Duygusal çekirdek | Partner değişiyor, mutfak değişiyor; Selin'in replikleri hiç değişmiyor. Üçüncüde cümlenin ortasında durup bunu fark ediyor. |
| Mekân | Karanlık bir masa; üstünde üst üste binen film senaryosu sayfaları |
| Geçiş | Yarıda kalan sayfa krem zemine erir; başlık "Aynı hikâye neden tekrar ediyor?" |
| Tahmini uzunluk | **5 ekran boyu** (kısa kesim, ~25 sn) |

## 2. Hikâye

2019'da Selin, Can'a "Yine mi geç kaldın?" diyor. Can'ın bir bahanesi var. Selin "Sen beni hiç önemsemiyorsun" diyor, kapı kapanıyor.

2022'de karşısında Barış var, mutfak başka. Selin aynı cümleyle başlıyor, aynı cümleyle bitiriyor. Aynı kapı kapanıyor.

Bugün karşısında Kaan var. "Yine mi geç kaldın?" Kaan özür diliyor. Selin "Sen beni hiç…" diye başlıyor ve susuyor. Bu repliği daha önce söylediğini ilk kez fark ediyor.

## 3. Kısa kesim (bağlayıcı)

> Şartname §0: en fazla 5 ekran, en fazla 8 satır, ekranda tek satır. "Hikâyeyi geç →" ve ilerleme çizgisi her zaman var.

| % | Tip | Görsel / klip | Ne oluyor | Yazı |
|---|---|---|---|---|
| 0–4 | klaket | koyu perde | Klaket: SAHNE 12 · ÇEKİM 1 · 2019 · Selin ve Can | — |
| 4–30 | pages | senaryo sayfası 1 | Üç replik daktiloyla yazılır, sonra "Kapı kapanır." | SELİN: *Yine mi geç kaldın?* · CAN: *Toplantı uzadı, yazdım ya.* · SELİN: *Sen beni hiç önemsemiyorsun.* |
| 30–33 | klaket | koyu perde | ÇEKİM 2 · 2022 · Selin ve Barış | — |
| 33–52 | pages | sayfa 2, eskisinin üstüne biner | Aynı döngü, daha hızlı. Selin'in tekrar eden cümleleri altın çizgiyle işaretlenir. | BARIŞ: *Trafik vardı. Mesaj attım.* · kenarda: **Aynı mutfak değil. Aynı sahne.** (48–52) |
| 52–55 | klaket | koyu perde | ÇEKİM 3 · Bugün · Selin ve Kaan | — |
| 55–86 | pages | sayfa 3 | Kaan özür diler; Selin'in cümlesi "Sen beni hiç…" diye yarıda kalır. Sahne notu belirir. | KAAN: *Kusura bakma, işten çıkamadım.* · *Selin susar. Bu repliği daha önce söylediğini fark eder.* |
| 86–100 | geçiş | — | Sayfalar solar, krem zemine erime | **Aynı hikâye neden tekrar ediyor?** |

**Kısaltmada çıkarılanlar:** Dördüncü çekim (Onur, 2023), her sayfadaki ikinci replik çifti ("Yazdın. Tek kelime." / "Ne yazsaydım, roman mı?"), "Her seferinde biraz daha hızlı." ve "Selin ilk kez repliğini tamamlamadı." satırları çıkarıldı. Sahne notu aynı şeyi zaten söylüyor.

## 4. Açıldığı site bölümü

**Başlık:** Aynı hikâye neden tekrar ediyor?

**İlk paragraf:** Bazen partnerler değişir ama kavga aynı kalır. Aynı cümleler, aynı kırgınlık, aynı kapanan kapı. Bu bir şanssızlık ya da "hep yanlış insanı seçmek" değil; geçmişte öğrendiğimiz ilişki biçimlerinin, bugün farkında olmadan yeniden sahnelenmesidir. Terapide o sahneyi birlikte okur, repliği değiştirmenin yolunu ararız.

**Alt bölümler (metin uzmanla yazılacak):**
- Aynı kavga neden farklı ilişkilerde tekrar eder?
- Bağlanma örüntüleri ve tekrar zorlantısı
- Repliği değiştirmek: terapide neler yapıyoruz?

**CTA:** Ön görüşme için randevu al

## Kodlama için

> Bu bölüm [[teknik-spec]] ile birlikte okunur. **Uygulaması hazır:** `scroll-siteler/iliskiler-ve-baglanma/ayni-sahne/index.html`.

- **Toplam uzunluk:** 5 ekran boyu (`#hikaye` 600vh)
- **Sahne listesi:** §3 tablosu ile aynı.
- **Sahne tipi:** `pages` (senaryo sayfası). Sayfa Courier Prime, krem kâğıt; karakter adı ortada büyük harf, replik altında. Yeni sayfa geldikçe eskiler hafif dönerek geriye itilir, bulanıklaşır.
- **Klaket:** `KLAKET` dizisi `[başlangıç %, bitiş %, üst, büyük, alt]`; arkasında `#perde` koyu örtü (sayfalar okunmasın diye).
- **Veri:** `SELIN` sabit replikler; `CEKIM` dizisi `{yil, o (karşı taraf), ol [replik], a, b}`; son çekim `son` ayrı kurulur, son replik `Sen beni hiç…`.
- **Tekrar işareti:** 2. çekimden itibaren Selin'in önceki sayfalardakiyle aynı cümlesi yazılır yazılmaz altın alt çizgi (`.isaret`, inline-block `.soz`).
- **Görsel:** Yok. İstenirse arka plana mutfak masası üstten görünüm (yüz yok, iki kupa) eklenebilir.
- **Müzik:** Yok (daktilo sesi opsiyonel, varsayılan kapalı).
