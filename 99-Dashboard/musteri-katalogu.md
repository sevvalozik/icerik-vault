---
type: dashboard
tags: [dashboard, musteri]
---

# Müşteri Kataloğu

Klasörler iş türüne göre ayrı (Sunumlar / Websiteler) ama bir müşterinin tüm işlerini burada tek tabloda, birlikte görebilirsin.

```dataview
TABLE client, type, status, date
FROM ""
WHERE client
SORT client ASC, date DESC
```

Not: `FROM ""` tüm vault'u tarar, sadece frontmatter'ında `client` alanı olan notları listeler — yeni bir tip klasörü (05-Kod-Projeleri gibi) eklense bile bu sorguyu güncellemeye gerek kalmaz, otomatik yakalar.

## Tek müşteriye bak

Belirli bir müşteriyi görmek için aşağıdaki sorguyu kopyala, `"Nefin Beauty"` yerine istediğin müşteri adını yaz:

```dataview
TABLE type, status, date
FROM ""
WHERE client = "Nefin Beauty"
SORT date DESC
```
