---
type: gorsel-brief
client: "Humentis"
slug: humentis
kampanya: "Scroll hikâye — Kapı"
kullanim: "scroll site videosu (tek klip, scrub)"
oran: "16:9"
model_birincil: veo
status: draft
date: 2026-09-28
tags: [ai-video, brief, humentis, scroll, kapi, sinav-kaygisi]
related: ["[[kapi]]", "[[teknik-spec]]", "[[scroll-kule-brief]]", "[[scroll-altyazi-brief]]"]
---

# Humentis — Scroll: Kapı — Video Brief

> Hikâye: [[kapi]] · Kayıt: `03-Assets/images/humentis/scroll/sinav-ve-performans-kaygisi/kapi/`
> ✅ Başlangıç karesi hazır (Nano Banana 2): `kf-baslangic.jpg`. ⏳ Video üretilecek (Veo, 8 sn).

## Neden bu kadar sade?

Aynı sınav konusunda denenen iki fikir tutmadı. [[ayni-paragraf]] fazla karışık oldu: telefon, pencere, rüzgâr ve kâğıtlar bir arada. "Silgi" fikrinde (optik formu doldurup silmek) de küçük el ve nesne hareketleri AI'da bozuldu. Tutan videolarda ([[kule]], [[altyazi]]) hareket büyük ve tekti. Bu hikâye de öyle: sabit kamera, tek kişi, arkadan, tek büyük hareket.

## 1. Başlangıç karesi → `kf-baslangic.jpg` ✅

```text
Photorealistic film still. A quiet school or university corridor in soft morning light. A young adult student in a dark green jacket with a backpack on one shoulder stands in front of a closed wooden classroom door, seen from behind, slightly to the left of centre; their face is never visible. The door has a small frosted glass window with soft bright light behind it. Plain cream walls, a row of closed doors further down the corridor, a polished floor reflecting the light. Static camera at standing eye level, medium shot, the student from the knees up, the door clearly visible in front of them. Calm, muted colours, soft filmic grain, shallow depth of field. No text, no signs, no logos, no other people. 16:9.
```

Çıkan görselde kapı öğrencinin **sol yanında**, duvarın üstünde (buzlu cam ve pirinç kol solda). Video prompt'u buna göre yazıldı.

## 2. Video (Veo, 8 sn, başlangıç: `kf-baslangic.jpg`) → `kapi.mp4`

```text
Photorealistic film shot based exactly on the uploaded image. Same quiet corridor in soft morning light, same student in a green jacket with a grey backpack standing next to the wooden door on the left, seen from behind; their face is never visible.
Action, one person only:
0–3 s: the student slowly raises their left hand toward the brass door handle on the left, stops just before touching it, and holds it there, hesitating.
3–5 s: their shoulders rise with one slow, deep breath and then drop.
5–8 s: the hand takes the handle and pushes the door open inward; warm bright daylight spills out of the room through the doorway onto the corridor floor and the student.
Camera: completely static, locked-off, no pan, no zoom. Natural, subtle, realistic movement. Soft morning light, muted colours, soft filmic grain. No text, no signs, no logos, no sound.
Avoid: the student turning around, showing the face, other people, camera movement, the door or corridor changing shape.
```

Kapı açılınca içerisi fazla ayrıntılı çıkarsa (sıralar, insanlar) sorun değil. Sitede son kareye yaklaşılıyor ve içerisi aydınlığa dönüşüyor.

## Teslim

Videoyu klasöre `kapi.mp4` olarak koy (ya da masaüstündeki klasöre at). Scrub için yeniden kodlanır: `ffmpeg -i ham.mp4 -an -c:v libx264 -crf 21 -g 1 -pix_fmt yuv420p -movflags +faststart kapi.mp4`.
