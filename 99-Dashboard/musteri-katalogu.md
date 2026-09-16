---
type: dashboard
tags: [dashboard, musteri]
---

# Müşteri Kataloğu

Her müşterinin tek doğruluk kaynağı `00-Musteriler/<slug>/marka-brief.md`. Klasörler iş türüne göre ayrı (sunum / site / sosyal medya / kod / AI video / AI görsel) ama bir müşterinin tüm işleri burada tek tabloda görünür.

## Marka brief'leri

```dataview
TABLE client, sektor, status, date
FROM "00-Musteriler"
WHERE type = "musteri"
SORT client ASC
```

## Tüm işler (müşteri → tür)

```dataview
TABLE client, type, status, date
FROM "01-Presentations" OR "02-Websites" OR "04-Sosyal-Medya-Icerik" OR "05-Kod-Projeleri" OR "06-AI-Video" OR "07-AI-Gorsel"
WHERE client
SORT client ASC, date DESC
```

## Tek müşteriye bak

Aşağıdaki sorguyu kopyala, `"Nefin Beauty"` yerine istediğin müşteri adını yaz:

```dataview
TABLE type, status, date
FROM "00-Musteriler" OR "01-Presentations" OR "02-Websites" OR "04-Sosyal-Medya-Icerik" OR "05-Kod-Projeleri" OR "06-AI-Video" OR "07-AI-Gorsel"
WHERE client = "Nefin Beauty"
SORT type ASC, date DESC
```

## Brief'i eksik olan müşteriler

Bir notta `client` var ama `00-Musteriler/` altında brief yoksa burada görünür (Templater → "Yeni Müşteri" ile aç):

```dataviewjs
const briefs = new Set(dv.pages('"00-Musteriler"').where(p => p.type == "musteri").map(p => p.client));
const all = dv.pages('"01-Presentations" OR "02-Websites" OR "04-Sosyal-Medya-Icerik" OR "05-Kod-Projeleri" OR "06-AI-Video" OR "07-AI-Gorsel"').where(p => p.client && !briefs.has(p.client));
const missing = [...new Set(all.map(p => p.client))];
dv.list(missing.length ? missing : ["— hepsi tamam —"]);
```
