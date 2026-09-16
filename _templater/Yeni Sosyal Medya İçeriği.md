<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const icerikAdi = await tp.system.prompt("İçerik adı (örn. Sınır koymak reels)");
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
await tp.file.move("04-Sosyal-Medya-Icerik/" + slug + "/" + slugify(icerikAdi));
-%>
---
type: sosyal-medya-icerik
client: "<% musteriAdi %>"
slug: <% slug %>
platform: reels
format: "konusan-kisi / b-roll-seslendirme / urun / karusel"
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [sosyal-medya, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

# <% musteriAdi %> — <% icerikAdi %>

> Marka brief'inin ses tonu + yasak iddialar bölümünü okumadan metin yazma.

## Künye

- **Platform / format:** Reels 9:16 · 30–60 sn
- **Konuşan / seslendiren:** 
- **Hedef mesaj (tek cümle):** 
- **CTA:** 
- **Yayın tarihi:** 

## Metin (zaman kodlu)

**[0–3 sn] Hook (ekranda sabit):**
"…"

**[3–15 sn] Sorun / merak:**
"…"

**[15–35 sn] Neden / içgörü:**
"…"

**[35–50 sn] Umut / çözüm çerçevesi:**
"…"

**[50–60 sn] CTA:**
"…"

## Görsel plan

| Sn | Görüntü | Kaynak (gerçek / AI B-roll / post) | Not |
|---|---|---|---|
| 0–3 | | | hook yazısı üstte |

## Çekim notları

- 9:16, göz kameraya, cümle aralarında 2 sn, 3–4 tekrar, altyazı zorunlu, logo sona.

## Kontrol

- [ ] Yasak iddia yok
- [ ] Hook ≤ 8 kelime
- [ ] Tek CTA
- [ ] Kişi görünürlük kuralına uygun
