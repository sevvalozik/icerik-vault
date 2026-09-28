---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Yarım Adım"
kullanim: "scroll site videosu (kurgu)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, yarim-adim]
related: ["[[yarim-adim]]", "[[teknik-spec]]"]
---

# Humentis — Scroll: Yarım Adım — Video Brief

> Hikâye: [[yarim-adim]] · Kayıt: `03-Assets/images/humentis/scroll/iliskiler-ve-baglanma/yarim-adim/`
> Şu an sitede 720p ön gösterim klipleri var (Gemini). Final için aynı üç klip **1080p** üretilecek.

## Öğrenilenler (28 Eylül 2026)

- **Bir klipte sadece bir kişi hareket etsin.** "Kadın adım atar, adam geri çekilir" tek klipte istenince model ikisini aynı anda oynattı. Hareketi iki klibe bölmek çözdü.
- **Başlangıç karesi zinciri:** her klip bir öncekinin son karesiyle başlar (`kf-baslangic.jpg` → `adim` → `kf-a-son.jpg` → `geri`), böylece kadraj ve kişiler değişmez.
- **Ters oynatma işe yarıyor:** adamın kadına yürüdüğü klip tersten oynatılınca adam ona dönük hâlde geri çekiliyor (şu anki `geri.mp4` böyle).
- **Gemini uygulaması 720p veriyor**; tam ekranda yumuşak kalıyor. Final için Google Flow'da (Veo) 1080p indir ya da Topaz gibi bir araçla büyüt.

## Başlangıç karesi

`kf-baslangic.jpg` (klasörde hazır). Yeniden üretmek gerekirse:

```text
Cinematic film still, photorealistic. An open, empty landscape at dusk: a flat dark field, a hazy horizon, a pale grey-peach sky. On the left stands a woman in her early thirties in a knee-length dress; on the right, about four metres away, stands a man in his mid-thirties in a dark shirt and trousers. They face each other in profile. Both are completely dark backlit silhouettes; their faces are never visible. Wide static shot, camera at chest height, both figures in the lower two-thirds, lots of sky. Muted, low-saturation dusk tones, soft filmic grain. 16:9, 1080p. No text, no logos.
```

## Klipler (Veo / Flow, 1080p, sessiz, 5 sn)

| Dosya | Başlangıç karesi | Kim hareket ediyor | Mod |
|---|---|---|---|
| `adim.mp4` | `kf-baslangic.jpg` | sadece Ela | scrub |
| `geri.mp4` | `adim`'ın son karesi | sadece Kerem, geriye | scrub |
| `yaklas.mp4` | `kf-a-son.jpg` | sadece Kerem, Ela'ya doğru | scrub |

### `adim.mp4`
```text
Cinematic film shot, photorealistic, based exactly on the uploaded image. An open, empty landscape at dusk: a flat dark field, a hazy horizon, a pale grey-peach sky. On the left a woman in a knee-length dress; on the right a man in a dark shirt and trousers. They face each other in profile. Both are completely dark backlit silhouettes; faces never visible.
Action: only the woman moves. She takes one slow, hesitant step forward toward the man, then stops. The man stays completely motionless the entire time.
Camera: locked-off static camera, same framing, no zoom, no pan. Lighting and sky unchanged. Muted low-saturation dusk tones, soft filmic grain. 5 seconds, 1080p. No text, no logos, no sound, no other people.
```

### `geri.mp4`
```text
Cinematic film shot, photorealistic, based exactly on the uploaded image. Same dusk landscape, same two silhouettes facing each other in profile; faces never visible.
Action: only the man moves. He takes one half step backward, away from the woman, moving to the right, then stops, still facing her. He never walks toward her. The woman stays completely motionless the entire time.
Camera: locked-off static camera, same framing, no zoom, no pan. Lighting and sky unchanged. Muted low-saturation dusk tones, soft filmic grain. 5 seconds, 1080p. No text, no logos, no sound, no other people.
```
Adam yine öne yürürse kısa hâli: `The man steps backward, away from the woman. The woman does not move. Static camera, same framing. Dark silhouettes, faces never visible.`

### `yaklas.mp4`
```text
Cinematic film shot, photorealistic, based exactly on the uploaded image. Same dusk landscape, same two silhouettes facing each other in profile; faces never visible.
Action: only the man moves. After a brief pause he walks slowly toward the woman, two unhurried steps, and stops close to her. The woman stays completely still.
Camera: locked-off static camera, same framing, no zoom, no pan. Lighting and sky unchanged. Muted low-saturation dusk tones, soft filmic grain. 5 seconds, 1080p. No text, no logos, no sound, no other people.
```

## Teslim

Videoları aynı adlarla klasöre koy ve Claude'a söyle: scrub için her karesi anahtar kare olacak şekilde yeniden kodlanır ve kurgudaki saniyeler yeni kliplere göre ayarlanır.
