<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const projeAdi = await tp.system.prompt("Proje adı");
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
await tp.file.move("05-Kod-Projeleri/" + slug + "/" + slug + "-proje-ozeti");
-%>
---
type: kod-projesi
client: "<% musteriAdi %>"
slug: <% slug %>
status: active
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [kod-projesi, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

# <% musteriAdi %> — <% projeAdi %>

## Proje Tanımı

**Repo (kod, vault'ta DEĞİL):** 
**Yerel konum:** `~/Documents/` (kural: kod vault'a konmaz)

## Özellikler

- 

## Teknolojiler

**Backend:** 
**Frontend:** 
**Mobil:** 

## Tasarım Sistemi (varsa)

- Repo içi yol: 
- Vault'a kopyalanan varlıklar: `03-Assets/logos/<% slug %>/`
- Marka brief'e işlendi mi: ☐

## Dokümantasyon

- 

## Ekip & Branch

- 

## Durum

- 
