<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
await tp.file.move("01-Presentations/active/" + musteriAdi);
%>
---
type: presentation
marp: true
theme: dark-tech
client: "<% musteriAdi %>"
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [sunum]
related: []
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
