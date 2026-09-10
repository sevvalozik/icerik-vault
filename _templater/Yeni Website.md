<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
await tp.file.move("02-Websites/projects/" + musteriAdi);
%>
---
type: website
framework: html
client: "<% musteriAdi %>"
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
url: ""
tags: [website]
related: []
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
