---
type: website
framework: html
client: "Deca Ventures"
slug: deca-ventures
status: draft
date: 2026-10-26
url: ""
tags: [website, logo, animasyon, acilis, deca-girisim, deca-ventures]
related: ["[[00-Musteriler/deca-ventures/marka-brief]]"]
---

# Deca Girişim — Logo ve Site Açılış Animasyonu

> **Ad değişikliği:** Deca Ventures'ın yeni adı **Deca Girişim** (Şevval, 26 Ekim 2026). Klasör slug'ı geçmiş dosyalarla bağı korumak için `deca-ventures` olarak kaldı.
>
> **Durum:** Şevval'in seçtiği tasarım (26 Ekim 2026). Müşteri onayı ❓ doğrulanacak.
>
> **Tasarım kanvası (Claude Design):** "Deca Girişim Logo" — artboard'lar: *Animasyon B · Gravür* (seçilen) ve *Gravür → sitedeki logo* (sitedeki hali). Kanvas özel; ekiple paylaşmak için kanvasın Share menüsünden paylaşılmalı.

![[03-Assets/images/deca-ventures/logo-acilis/animasyon-storyboard.png]]

## 1. Logo

- **Tip:** sadece yazı (wordmark), ayrı amblem yok. "DECA" hazır fonttan değil, harf harf çizildi: kalın gövde + kıl inceliğinde çizgiler (yüksek kontrast).
- **İmza detayı:** A harfinin ortasındaki yatay çizgi yok, yerine küçük bir **elmas** var.
- **Alt satır:** "GİRİŞİM" — Jost Light (300), geniş harf aralığı.
- **Denenip elenenler (tekrar önerme):** on yatay çizgiden oluşan D amblemi; gravür çift kontur D, mühür D, kesme taş D amblemleri; **altın renk** ("varoş duruyor" — Şevval).
- **İkon / favicon:** henüz yok, ayrıca karar verilecek ❓ (seçilen tasarımda yoktu, uydurulmasın).

### Dosyalar — `03-Assets/logos/deca-ventures/`

| Dosya | Ne zaman |
|---|---|
| `deca-girisim-logo-dikey-fildisi.svg` / `-fildisi-seffaf.png` | **Ana logo** — lacivert/koyu zemin; açılış animasyonunun son karesi |
| `deca-girisim-logo-dikey-lacivert-zemin.png` | Lacivert zemin dahil hazır görsel (sosyal medya, sunum kapağı) |
| `deca-girisim-logo-dikey-lacivert.svg` / `-lacivert-seffaf.png` | Açık zemin (beyaz, kağıt, döküman) |
| `deca-girisim-logo-yatay-fildisi.svg` / `-seffaf.png` | Site üst menüsü: DECA + ince çizgi + GİRİŞİM, koyu zemin |
| `deca-girisim-logo-yatay-lacivert.svg` / `-seffaf.png` | Aynısı, açık zemin |
| `deca-girisim-wordmark-fildisi.svg` / `-lacivert.svg` | Sadece DECA (küçük alanlar, imza) |

Tüm SVG'lerde yazılar vektöre çevrildi; font yüklü olmasa da aynı görünür.

## 2. Renk ve yazı (tasarım token'ları)

| Rol | Hex | Not |
|---|---|---|
| Zemin — gece laciverdi | `#0D1321` | açılış + site hero |
| Logo / ana metin — fildişi | `#ECE6DA` | |
| Elmas parıltısı | `#FFFAEE` | sadece A'daki elmas |
| GİRİŞİM / ikincil metin | `#C9C3B8` | |
| Gövde metni (lacivert üstünde) | `#B9C0CF` | |
| Etiket / muted | `#8E96A8` | |
| İnce ayırıcı çizgi | `#3A4256` | menüde DECA ile GİRİŞİM arası |
| Açık zemin varyantı | `#EEEAE2` | |

| Kullanım | Font |
|---|---|
| Logo | özel çizim (font değil) |
| GİRİŞİM, menü, gövde | **Jost** 300 / 400 (Google Fonts) |
| Site başlıkları | **Cormorant Garamond** 400 (Google Fonts) |

> Not: `marka-brief.md` §5'teki palet (`#050608`, mercan `#E63946`, Inter) eski decaventure.com sitesinden okunmuştu. Yeni kimlik bu nottaki palet; brief'e not düşüldü.

## 3. Açılış animasyonu — "Gravür" (~4 sn + menüye geçiş)

![[03-Assets/images/deca-ventures/logo-acilis/acilis-son-kare.png]]

| Zaman | Ne olur |
|---|---|
| 0 – 1,9 sn | Lacivert ekranda harflerin sadece kıl inceliğindeki dış hatları kalemle çiziliyormuş gibi sırayla belirir (D → E → C → A) |
| 1,4 – 2,9 sn | Harflerin içi aşağıdan yukarı mürekkep gibi dolar |
| 2,75 – 3,4 sn | A'daki elmas küçük bir sıçrayışla yerine oturur, altında GİRİŞİM belirir |
| 3,45 – 4,45 sn | GİRİŞİM söner, logo küçülerek sol üstteki menü yerine uçar |
| 4,3 sn → | Menü, hero başlığı ve buton belirir |

**Davranış kuralları:** sadece oturumdaki ilk ziyarette oynar · tıklama/tuş/kaydırma/dokunma ile atlanır · "hareketi azalt" açık olana hiç gösterilmez · video/GIF değil, HTML + CSS + SVG (birkaç KB).

**Çalışan önizleme / siteye taşınacak kod:** [[02-Websites/projects/deca-ventures/acilis-animasyonu.html]] — tarayıcıda açılır; `<style>`, `#deca-intro` katmanı ve `<script>` siteye kopyalanır, menüdeki logo `.site-logo` sınıfını taşımalı.

## 4. Sitedeki hali

![[03-Assets/images/deca-ventures/logo-acilis/site-ust-menu-logo.png]]

Menü, hero başlığı, açıklama ve buton metinleri **yer tutucu** — gerçek metin müşteriden ❓.

## 5. Açık işler

- [ ] Müşteri onayı (logo + animasyon)
- [ ] İkon / favicon kararı
- [ ] Sitenin gerçek metinleri (menü, hero, açıklama, buton)
- [ ] Sitenin hangi altyapıda yapılacağı (React / düz HTML / WordPress) — kod ona göre uyarlanacak
- [ ] Yeni ad "Deca Girişim" — alan adı ve LinkedIn de değişecek mi? ❓
