---
type: dashboard
tags: [dashboard]
---

# Sunum Kataloğu

```dataview
TABLE client, status, date, theme
FROM "01-Presentations"
WHERE type = "presentation"
SORT date DESC
```

## Taslaklar

```dataview
LIST
FROM "01-Presentations"
WHERE type = "presentation" AND status = "draft"
```
