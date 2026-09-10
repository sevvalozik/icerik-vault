---
type: dashboard
tags: [dashboard, musteri]
---

# Müşteri Kataloğu

Klasörler iş türüne göre ayrı (Sunumlar / Websiteler) ama bir müşterinin tüm işlerini burada tek tabloda, birlikte görebilirsin.

```dataview
TABLE client, type, status, date
FROM "01-Presentations" OR "02-Websites"
WHERE client
SORT client ASC, date DESC
```

## Tek müşteriye bak

Belirli bir müşteriyi görmek için aşağıdaki sorguyu kopyala, `"Nefin Beauty"` yerine istediğin müşteri adını yaz:

```dataview
TABLE type, status, date
FROM "01-Presentations" OR "02-Websites"
WHERE client = "Nefin Beauty"
SORT date DESC
```
