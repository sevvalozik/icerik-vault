---
type: dashboard
tags: [dashboard]
---

# Website Kataloğu

```dataview
TABLE client, status, url, date
FROM "02-Websites"
WHERE type = "website"
SORT date DESC
```

## Yayında Olanlar

```dataview
LIST
FROM "02-Websites"
WHERE type = "website" AND status = "live"
```
