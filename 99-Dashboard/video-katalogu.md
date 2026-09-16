---
type: dashboard
tags: [dashboard, ai-video]
---

# AI Video Kataloğu

`06-AI-Video/` altındaki brief ve loglar. Prompt kütüphanesi: `06-AI-Video/_kutuphane/` — [[prompt-formulu]] · [[kamera-ve-isik-sozlugu]] · [[model-rehberi]] · [[negatif-promptlar]] · [[tutarlilik-rehberi]] · [[sektor-receteleri]] · [[kalite-kontrol]]

## Brief'ler

```dataview
TABLE client, kampanya, platform, oran, model_birincil, status, date
FROM "06-AI-Video"
WHERE type = "video-brief"
SORT date DESC
```

## Üretimde / kurguda olanlar

```dataview
LIST
FROM "06-AI-Video"
WHERE type = "video-brief" AND (status = "uretimde" OR status = "kurguda" OR status = "onayda")
```

## Video logları (müşteri başına)

```dataview
TABLE client, date
FROM "06-AI-Video"
WHERE type = "video-log"
SORT client ASC
```

## Görsel brief ve loglar

```dataview
TABLE client, kampanya, kullanim, oran, status, date
FROM "07-AI-Gorsel"
WHERE type = "gorsel-brief" OR type = "gorsel-log"
SORT date DESC
```
