<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const slug = musteriAdi.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
await tp.file.move("02-Websites/projects/" + slug + "/" + slug + "-site");
-%>
---
type: website
framework: html
client: "<% musteriAdi %>"
slug: <% slug %>
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
url: ""
tags: [website, <% slug.replace(/-/g,"") %>]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

## Hero

Başlık: 
Alt başlık: 
CTA buton metni: 

## Features

- Özellik 1
- Özellik 2
- Özellik 3

## Footer

İletişim / sosyal medya linkleri
