---
type: video-log
client: "Nefin Beauty"
slug: nefin-beauty
status: active
date: 2026-09-16
tags: [ai-video, log, nefinbeauty]
related: ["[[00-Musteriler/nefin-beauty/marka-brief]]", "[[c-vitamini-serum-kampanya-brief]]"]
---

# Nefin Beauty — Video Logu

> `03-Assets/videos/nefin-beauty/` altındaki her dosyanın kaydı. **Bundan sonra üretilen her klip için prompt, model ve puan buraya yazılır** — yoksa "bunu nasıl yapmıştık" sorusu cevapsız kalır (mevcut 4 klipte olduğu gibi). Teknik veriler ffprobe ile ölçüldü (16 Eylül 2026).

## Mevcut klipler

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model | Prompt | Puan |
|---|---|---|---|---|---|---|---|---|
| `c_vitamini_serumunu_havuzda_ta.mp4` | 1280×720 (16:9) | 10 sn | 24 | var (AAC) | Havuz kenarında Vitamin C Serum şişesi, el pipetten damla bırakıyor, portakal dilimleri, arka planda şezlong; etiket okunaklı ("NEFIN cosmetics VITAMIN C SERUM") | ❓ (dosya adı Türkçe prompt'un kısaltması: "C vitamini serumunu havuzda ta…" → büyük ihtimalle Gemini/Veo) | ❓ kaydedilmemiş | 4 — ışık ve kompozisyon iyi; 16:9 olduğu için reels'te kırpma gerekir; etiket AI üretimi |
| `nefin_beauty_nin_c_vitamini_se.mp4` | 720×1280 (9:16) | 10 sn | 24 | var (AAC) | Makro: pipetten sarkan tek altın damla, krem zemin, sağ altta parıltı işareti (AI watermark benzeri) | ❓ (dosya adı: "Nefin Beauty'nin C vitamini se…") | ❓ | 4 — hook için ideal; sağ alttaki parıltı ikonunu post'ta kırp |
| `Bu_görseli_gerçekçi_sinematik (1).mp4` | 1280×720 (16:9) | 10 sn | 24 | var (AAC) | Model yüzüne CC krem sürüyor, solda "KUSURSUZ KAPATMA" yazısı, sağda krem sürüntüsü | ❓ (dosya adı: "Bu görseli gerçekçi sinematik…" → bir görselden image-to-video) | ❓ | 3 — yazı AI tarafından basılmış (marka fontu değil), yüz tutarlılığı riskli, 16:9 |
| `VIDEO-2026-09-09-16-12-08.mp4` | 480×800 (3:5) | 10 sn | 24 | yok | Telefon mockup'ında "Nefin Cosmetics" WhatsApp sohbeti (bot demo: Ürünlerimizi Gör / Siparişimi Takip Et / Kampanyalar) | ❓ (ekran kaydı/animasyon) | — | 3 — düşük çözünürlük; WhatsApp satış botu demosu, ürün reklamı değil |

## Gözlemler (bir sonraki üretime taşınacak)

1. **Prompt kaydı yok.** 4 klipten hiçbirinin promptu, modeli, ayarı bilinmiyor → bundan sonra her üretim [[video-brief-template]] → Üretim Logu'na.
2. **Oran karışık.** 2 klip 16:9, 1 klip 9:16, 1 klip 3:5. Reels için hepsi 9:16 üretilmeli; 16:9 → 9:16 kırpma ürünü kadrajdan çıkarıyor.
3. **Yazı modele bırakılmış** ("KUSURSUZ KAPATMA"). Marka fontu (Cambria/Calibri) değil; yeniden üretimde yazı post'ta.
4. **Etiket AI üretimi.** Havuz klibinde etiket okunaklı ama gerçek etiketle aynı olduğu doğrulanmadı; gerçek fotoğraf + I2V ile çözülür.
5. **Grade tutarsız.** Havuz (turkuaz-sıcak), makro (krem), CC krem (nötr-gri) farklı videolar gibi. Ortak grade satırı: marka brief.
6. **Ses.** 3 klipte model sesi var; kurguda tek müzikle değiştirilecek.

## Yeniden üretim planı

→ [[c-vitamini-serum-kampanya-brief]] (4 shot, promptlar hazır). Gerçek ürün fotoğrafı ve logo geldiğinde başlanır.

## Yeni kayıt şablonu

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model / sürüm | Prompt (brief'teki shot no) | Seed | Puan |
|---|---|---|---|---|---|---|---|---|---|
| `nefin-<kampanya>-s01-v1.mp4` | 1080×1920 | 8 | 24 | yok | | | brief → Shot 1 / Varyant A | | |
