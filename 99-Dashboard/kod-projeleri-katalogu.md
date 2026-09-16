---
type: dashboard
tags: [dashboard]
---

# Kod Projeleri Kataloğu

Not: Buradaki notlar sadece **özet/referans** — kodun kendisi vault'ta değil, her projenin kendi GitHub reposunda ve yerel klasöründe duruyor (bkz. her notun "Yerel konum" satırı).

```dataview
TABLE client, status, date
FROM "05-Kod-Projeleri"
WHERE type = "kod-projesi"
SORT date DESC
```
