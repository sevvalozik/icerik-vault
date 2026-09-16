---
type: dashboard
tags: [dashboard, sosyal-medya, kod-projesi]
---

# Sosyal Medya & Kod Projesi Kataloğu

## Sosyal medya içerikleri

```dataview
TABLE client, platform, format, status, date
FROM "04-Sosyal-Medya-Icerik"
WHERE type = "sosyal-medya-icerik"
SORT date DESC
```

## Kod projeleri (sadece özet notlar; kod vault dışında)

```dataview
TABLE client, status, date
FROM "05-Kod-Projeleri"
WHERE type = "kod-projesi"
SORT client ASC
```

## Taslakta bekleyen her şey (tüm türler)

```dataview
TABLE type, client, date
FROM "01-Presentations" OR "02-Websites" OR "04-Sosyal-Medya-Icerik" OR "06-AI-Video" OR "07-AI-Gorsel"
WHERE status = "draft"
SORT date DESC
```
