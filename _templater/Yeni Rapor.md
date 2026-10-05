<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const konu = await tp.system.prompt("Rapor adı (örn. SEO analizi, Rakip analizi)");
const tur = await tp.system.suggester(["seo","pazarlama","rakip","teknik","icerik","diger"],["seo","pazarlama","rakip","teknik","icerik","diger"]);
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
await tp.file.move("08-Raporlar/" + slug + "/" + slugify(konu) + "-" + tp.date.now("YYYY-MM-DD"));
-%>
---
type: arastirma
client: "<% musteriAdi %>"
slug: <% slug %>
rapor_turu: <% tur %>
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
kaynak: ""
tags: [rapor, <% tur %>, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

# <% musteriAdi %> — <% konu %>

> Marka kuralı: `00-Musteriler/<% slug %>/marka-brief.md` §4 ve §7, paketin/aracın varsayılan önerilerinden üstündür. Uygulanmayan öneriler en altta listelenir.

## Özet (5 satırı geçmesin)

- **Genel sonuç / puan:** 
- **En önemli 3 bulgu:** 
- **İlk yapılacak 3 iş:** 

## Yöntem ve veri kaynağı

- **Ne incelendi (URL, tarih, araç):** 
- **Ne ölçülemedi / doğrulanamadı:** 

## Bulgular

| # | Bulgu | Kanıt | Etki (Yüksek/Orta/Düşük) |
|---|---|---|---|
| 1 | | | |

## Öneriler (öncelik sırasıyla)

1. 

## Müşteriye / ekibe açık sorular

- 

## Marka kuralı gereği uygulanmayanlar

- 
