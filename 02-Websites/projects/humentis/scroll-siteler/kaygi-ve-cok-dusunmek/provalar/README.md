---
type: website
framework: html
client: "Humentis"
slug: humentis-scroll-site-provalar
status: draft
date: 2026-09-28
url: ""
tags: [website, humentis, scroll, kaygi, site]
related: ["[[provalar]]", "[[teknik-spec]]"]
---

# Provalar — scroll site (ilk deneme)

Kaynak hikâye: [[provalar]] · Şartname: [[teknik-spec]]

## Açmak

Chrome'da `index.html`'i aç (internet açık olsun, fontlar Google Fonts'tan). Kaydır ya da sağ alttaki **▶ OYNAT** / `P`.

## Dosyalar

- `index.html`: scroll motoru (arka plan geçişleri, hayaletler, ışıkla silme, yazma efekti, müzik, geçiş, site bölümü)
- `hikaye.js`: bütün sahne verisi ve metinler; metin değiştirmek için sadece bu dosya

## Eksik görseller

Hepsi `03-Assets/images/humentis/scroll/kaygi-ve-cok-dusunmek/provalar/` altına:

- `oda-gece.jpg`, `oda-sabah.jpg`, `koridor.jpg`, `koridor-duvar.jpg`
- `nil-poz-1.png` … `nil-poz-6.png` (şeffaf arka planlı, arkadan ayakta Nil)

Görseller gelene kadar ışık tonunda yer tutucu ve silüet figürler görünür.

## Videolar (film hissi için)

Her arka plan karesi aynı adla `.mp4` olarak da konabilir; site fotoğraf yerine videoyu kullanır. Hareket promptları: `07-AI-Gorsel/humentis/scroll-provalar-brief.md`.

- `oda-gece.mp4`: loop · `oda-sabah.mp4`: scrub (ışık kaydırdıkça odaya yayılır) · `koridor.mp4`: scrub (kapıyı tıklatır, kapı açılır) · `koridor-duvar.mp4`: loop
- Scrub videoları özel ayarla kodlanmalı (her kare anahtar kare), bkz. [[teknik-spec]] §4b.

## Müzik

`03-Assets/audio/humentis/bulunma-muzik.mp3` (gece) → 64%'te `bulunma-sabah-1.mp3`. 58–64 arası tam sessizlik.
