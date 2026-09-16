---
type: dashboard
tags: [dashboard]
---

# Sosyal Medya İçerik Kataloğu

```dataview
TABLE client, status, date
FROM "04-Sosyal-Medya-Icerik"
WHERE type = "sosyal-medya-icerik"
SORT date DESC
```

## Taslaklar

```dataview
LIST
FROM "04-Sosyal-Medya-Icerik"
WHERE type = "sosyal-medya-icerik" AND status = "draft"
```
