<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const slug = musteriAdi.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
await tp.file.move("01-Presentations/active/" + slug + "-sunum");
-%>
---
type: presentation
marp: true
theme: dark-tech
client: "<% musteriAdi %>"
slug: <% slug %>
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [sunum, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

<!-- _class: lead -->
# <% musteriAdi %>
## Alt başlık

---

## Ajanda

- Giriş
- Problem / İhtiyaç
- Çözüm
- Demo / Örnekler
- Zaman Çizelgesi
- Soru & Cevap

---

## Kapanış

Teşekkürler — iletişim bilgileri
