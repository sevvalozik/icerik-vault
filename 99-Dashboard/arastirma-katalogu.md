---
type: dashboard
tags: [dashboard, arastirma, rapor]
---

# Araştırma ve Rapor Kataloğu

SEO, pazarlama, rakip ve teknik denetim raporlarının tek listesi. Yeni rapor: Templater → **Yeni Rapor** → `08-Raporlar/<slug>/` altında oluşur. Eski raporlar (ör. Humentis `site-plani/Arastirma`) yerinde kalır; `type: arastirma` olan her not buraya otomatik düşer.

## Tüm raporlar

```dataview
TABLE client, rapor_turu, status, date
FROM ""
WHERE type = "arastirma"
SORT date DESC
```

## Müşteriye göre sayı

```dataview
TABLE length(rows) AS Adet
FROM ""
WHERE type = "arastirma"
GROUP BY client
```

## Taslaklar

```dataview
LIST
FROM ""
WHERE type = "arastirma" AND status = "draft"
```

## Kural

Rapor notunun frontmatter'ında `type: arastirma`, `client`, `status`, `date` bulunmalı (`node scripts/vault-check.js` eksikleri listeler). Marka brief §4 ve §7, aracın önerilerinden üstündür.
