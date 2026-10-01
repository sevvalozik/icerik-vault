---
type: video-log
client: "Humentis"
slug: humentis
status: active
date: 2026-09-16
tags: [ai-video, log, humentis]
related: ["[[00-Musteriler/humentis/marka-brief]]", "[[klinik-broll-brief]]"]
---

# Humentis — Video Logu

> `03-Assets/videos/humentis/` kaydı. Teknik veriler ffprobe ile ölçüldü (16 Eylül 2026).

## Mevcut klipler

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Kaynak | Puan |
|---|---|---|---|---|---|---|---|
| `humentis-logo-animasyonu.mp4` | 1080×1080 (1:1) | 6 sn | 60 | yok | Krem zeminde dikey lockup (iki profil + ağaç sembolü, "ÖZEL HUMENTIS AİLE DANIŞMA MERKEZİ") — logo net, bozulma yok | Motion tasarım (AI değil — vektör logodan) | 5 — reels kapanış kartı için 9:16'ya çevrilmeli (1:1 → üst-alt krem `#F6EFDD` dolgu) |
| `humentis-kafanizdaki-sesler-reels-ig.mp4` | 1080×1920 (9:16) | 57 sn | 30 | AAC stereo 48 kHz (kaynaktan kopya, yeniden kodlanmadı) | Terapist anlatımı ("Kafanızdaki sesler size mi ait?") + ayna çizim ara sahneleri, gömülü altyazı, logo kapanışı | Gerçek çekim kurgusu (60 fps, 6 Mbps kaynak) → Instagram Reels için yeniden kodlandı: H.264 High, ~10 Mbps, 30 fps, BT.709, faststart. Kaynağa göre PSNR 42–52 dB (AVFoundation ile ölçüldü, 30 Eylül 2026) | — |
| `humentis-kaygiyla-savasmak-reels-ig.mp4` | 1080×1920 (9:16) | 17,8 sn | 30 | AAC stereo 48 kHz 253 kbps (kaynaktan kopya; -14,5 LUFS, true peak -3,4 dBFS, dokunulmadı) | Rüzgârda uçuşan tül perde + pencere, "Kaygıyla savaşmak / kontrol etmeye çalıştıkça kaybedilen bir mücadeledir" yazısı, altta logo sembolü | Hazır kurgu (CapCut çıkışı: 9,2 Mbps, **tam aralık yuvj420p**, tüm video tek keyframe) → Instagram için: tam→TV renk aralığı (BT.709), hafif gürültü temizleme (hqdn3d) + hafif keskinleştirme (unsharp 0,35), H.264 High 4.1, CRF 17 (~7,4 Mbps), 2 sn GOP, faststart. Kaynağa göre SSIM 0,992 (1 Ekim 2026) | — |

## Planlanan

- Klinik tanıtım videosu (Elif Silav, gerçek çekim) için AI B-roll: [[klinik-broll-brief]]
- Terapist reels serisi (12 metin) için ortak B-roll havuzu: aynı brief'in klipleri tekrar kullanılır
- Logo animasyonu 9:16 versiyonu + isteğe bağlı ses (yumuşak tek nota / ambient)

## Yeni kayıt şablonu

| Dosya | Çözünürlük / oran | Süre | fps | Ses | İçerik | Model / sürüm | Prompt (brief → shot) | Seed | Puan |
|---|---|---|---|---|---|---|---|---|---|
| `humentis-broll-s01-v1.mp4` | 1080×1920 | 8 | 24 | yok | | | | | |
