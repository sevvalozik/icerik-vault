---
type: video-log
client: "Otoekspertiz Keçiören"
slug: otoekspertiz-kecioren
status: active
date: 2026-09-30
tags: [ai-video, log, otoekspertiz-kecioren]
related: ["[[00-Musteriler/otoekspertiz-kecioren/marka-brief]]", "[[gozle-degil-dogru-ekspertizle-brief]]"]
---

# Otoekspertiz Keçiören — Video Logu

> `03-Assets/videos/otoekspertiz-kecioren/` altındaki her dosyanın ve bütün AI üretimlerinin kaydı. **Bundan sonra üretilen her klip için prompt, model ve puan buraya yazılır.**

## Mevcut klipler (gerçek çekim, Eylül 2026)

Veriler 28 Eylül 2026'da dosyalardan okundu. Hepsi 1080×1920 (9:16) ve hepsinde arabam.com logosu görüntüye gömülü.

| Dosya | Süre | İçerik (önizleme karesi) | Kaynak | Not |
|---|---|---|---|---|
| `2026-09-12-boya-olcum.mp4` | 20,6 sn | Elde boya kalınlık ölçer beyaz kapıda, ekranda 130 okunuyor | gerçek çekim (telefon) | [[gozle-degil-dogru-ekspertizle-brief]] Shot 2'nin kaynağı. Logosuz ham hali ❓ |
| `2026-09-19-tramer-kaydi.mp4` | 18,3 sn | Koyu zeminde kırmızı blok üstünde "TRAMER" başlık kartı | gerçek çekim + grafik | — |
| `2026-09-25-yag-kacagi.mp4` | 27,5 sn | Siyah açılış karesi ve logo (içerik önizlemede görünmüyor) | gerçek çekim | — |
| `2026-09-30-yokus-kalkis-ve-kavrama.mp4` | 23,4 sn | Sürücü koltuğundan POV, sokak ve diğer araçlar | gerçek çekim | Plaka kontrolü ❓ (brief §7) |

## Planlanan

| Tarih | Brief | Çekimler | Model | Durum |
|---|---|---|---|---|
| 2026-09-30 | [[gozle-degil-dogru-ekspertizle-brief]] | 5 çekim + kapanış kartı (1 gerçek, 4 AI) | Veo 3.1 (yedek Kling; Shot 2 B için Runway I2V). Hızlı taslak için tek prompt: Sora 2 / Seedance | v1 üretildi (puan 2, aşağıda); v2'nin 6 sahnesi üretildi ve kurgu v1 hazır (24 sn), müşteri onayı bekleniyor |

## Gözlemler (bir sonraki üretime taşınacak)

1. **Rakam ve küçük yazı:** Eylül görsellerinde (büyük ihtimalle AI üretimi) kadran rakamları bozuk çıktı (5. görsel) ve küçük bir yazı lekelendi (9. görsel). Bu yüzden video promptlarında gösterge ya da ekran rakamı istenmiyor; rakam gereken yerde gerçek çekim kullanılıyor. Kaynak: [[eylul-2026-icerik-seti]] → QC.
2. **Otomotiv negatifleri:** Kütüphanede otomotiv reçetesi ve negatif listesi yok. "Gözle değil" brief'indeki otomotiv negatifleri (araç amblemi, plaka, gövde bozulması, havada duran araç, lift kolunun araca girmesi) üretimde işe yararsa [[negatif-promptlar]] dosyasına eklenecek. *(30 Eyl 2026: v1'deki hatalar üzerine "Otomotiv / ekspertiz" bölümü olarak eklendi.)*
3. **Çok sahneli tek prompt:** Veo'da tek bir 10 sn'lik klibe sıkışıyor. Veo'da sahne başına ayrı prompt kullanılır.
4. **Amblem ve yüz:** "Unbadged" ve "never a face" yazılmasına rağmen Veo gerçek bir modele benzeyen amblemli bir araç ve yüzü görünen bir teknisyen çizdi. Bunlara karşı hem pozitif cümle hem negatif madde gerekiyor (v2).
5. **Ekran rakamları:** Ekranı kameraya dönük bir cihaz tarif edilince model yazı ve rakam uyduruyor. Rakam içeren her şey ya gerçek çekimle ya da kadraj dışında tutularak çözülür.
6. **Lazer:** Ölçer sahnesinde "red LED line reflects in the paint" cümlesi, ölçerden çıkan bir lazer çizgisine dönüştü (v2 S2). Bu sahnede kırmızı vurgu cümlesi kullanılmamalı.
7. **Amblem (v2):** "Smooth blank grille" ile bile araç Tesla'ya benzedi ve bir sahnede kaputa "T" amblemi çizildi (S4). Aracın önünü gösteren çekimlerde kurguda büyütme/kırpma payı bırakılmalı.

## Kurguya girenler (30 Eylül 2026, onay bekliyor)

| Dosya | Süre | İçerik | Kurguda kullanılan | Puan | Not |
|---|---|---|---|---|---|
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s01-v2.mp4` | 8 sn | Beyaz sedan, kamera yandan yaklaşıyor | 0,3–4,3 sn | 5 | Amblem yok |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s02-v2.mp4` | 8 sn | Eldivenli el, boya ölçer | 2,0–6,0 sn | 4 | Gerçekte olmayan kırmızı lazer çizgisi |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s03-v2.mp4` | 8 sn | OBD konnektörü (kırmızı dilli) | 3,8–7,8 sn | 5 | Gösterge kadraj dışında |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s04-v2.mp4` | 8 sn | Liftte alt takım, fener | 2,5–6,5 sn, 1,3× büyütülmüş | 4 | Kaputtaki "T" amblemi kırpmayla kadraj dışında kaldı |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s05-v2.mp4` | 8 sn | Rapor dosyası tezgâhta | 3,8–7,8 sn | 4 | Yüz yok |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-s06-v2.mp4` | 8 sn | Kapanış: araç yandan | 3,0–7,0 sn | 5 | — |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-kurgu-v1.mp4` | 24 sn | Final kurgu: ekran yazıları, arabam.com logosu, CTA | — | — | Yerini v2 aldı |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-kurgu-v2.mp4` | 24 sn | Final kurgu v2: kapanışta şube logosu (gri kart) | — | — | Yerini v3 aldı |
| `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-kurgu-v3.mp4` | 24 sn | Final kurgu v3: şube logosu şeffaf zeminli, kenarlıksız | — | onay ❓ | 1080×1920, 30 fps, sesli, müzik yok. **Güncel sürüm** |

## Karma sonuçlu denemeler

### "Gözle değil, doğru ekspertizle" — tek prompt v1 (30 Eylül 2026)
- **Dosya:** `03-Assets/videos/otoekspertiz-kecioren/otoekspertiz-kecioren-gozle-degil-dogru-ekspertizle-tek-prompt-v1.mp4`. Kullanıcı Google Flow'dan indirdi; orijinali `~/Downloads/Car_in_dark_inspection_bay_20260930094331.mp4`.
- **Teknik:** 10 sn, 1080×1920, H.264 + AAC stereo. Model: Google Flow (Veo). Prompt: brief'teki "Alternatif: tek prompt".
- **İyi olanlar:** Siyah mekân, tepe ışığı, duvardaki kırmızı çizgi ve grade markaya uygun. Rapor sahnesinde eller ve dosya temiz, dosyada yazı yok.
- **Sorunlar (kareler tek tek incelendi):**
  - 5 sahne 10 sn'ye sıkıştı (sahne başına ~2 sn).
  - Izgarada ve jant göbeğinde Opel'e benzeyen bir amblem var.
  - Boya ölçerin ekranında bozuk yazı ve rakamlar var ("CUA/C DACABER" gibi).
  - OBD sahnesinde gösterge paneli rakamlarıyla görünüyor.
  - Lift sahnesinde yüzü açıkça görünen bir teknisyen var.
- **Puan:** 2 (yapısal sorun). Prompt yeniden yazıldı → brief'teki v2 bölümü.
- **Ses:** Müzik ya da konuşma olup olmadığı dinlenerek kontrol edilecek ❓

## Onaylı üretimler

(henüz yok)

## Reddedilen denemeler

(henüz yok)

## Yeni kayıt şablonu

| Tarih | Brief / shot | Model / sürüm | Varyant | Seed | Dosya | Puan (1–5) | Not |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
