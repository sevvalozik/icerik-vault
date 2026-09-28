---
type: presentation
client: humentis
slug: humentis-bulunma-hikayesi
status: draft
date: 2026-09-28
tags: [humentis, sunum, psikolog, web-sitesi, sosyal-medya, film, scroll]
related: ["[[marka-brief]]", "[[humentis-sunum-2026-09]]", "[[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]]"]
---

# Humentis — "Bulunma" (psikologa gösterilecek kısa film)

Amaç: her psikoloğa "kendi siteniz olsun mu?" sorusunu sordurmak. Anlatım kaydırmalı, sinematik bir kısa film: üç kurgusal kişi, üç gece, üç arama → hepsi aynı uzmanın sitesinde kendi derdini anlatan bir başlık bulur → sabah → randevu defteri dolar → dördüncü duvar: "Bu hikâyeler kurgusal. Ama her gün, birileri için gerçek oluyor. Sitenizin işi bu anı yaratmak."

- İlk deneme (telefon/tarayıcı çerçeveleri, sahte arama sonuçları, iç ses alıntıları) **reddedildi** — bu film arayüz göstermiyor; ekranlar boş ışık, metinler film yazısı gibi.

## Nasıl açılır / sunulur

- Dosya: `humentis-bulunma-hikayesi/film.html` → tarayıcıda aç (Chrome önerilir, internet açık olsun: fontlar Google Fonts'tan).
- **Kaydır** ya da sağ alttaki **▶ OYNAT** (veya `P`) → kendi hızında akar (~3 dk).
- `→ / boşluk`: sonraki sahne · `←`: önceki · `F`: tam ekran. Fare durunca kontroller kaybolur.
- 19 sahne: açılış → başlık → 3 gece → 3 arama → 3 fark etme → "Sonra sabah oldu." → 3 sabah → birleşme (uzman adı) → randevu defteri → dördüncü duvar → final soru + logo.

## Görseller

- 14 kare yuvası: `03-Assets/images/humentis/bulunma/humentis-bulunma-<kod>.jpg|png|webp` (aynı adla `.mp4` konursa klip oynar).
- Kare yoksa film çalışmaya devam eder; o sahnede ışık tonunda bir yer tutucu ve köşede "KARE A1 · görsel bekleniyor" notu görünür.
- Promptlar, karakter/mekan kartları, dosya adları: [[07-AI-Gorsel/humentis/bulunma-hikayesi-brief]].
- ⚠️ Marka brief'teki "AI'da danışan görünmez" kuralına **bilinçli istisna**: iç sunum, kurgusal yetişkin karakterler; kamuya açık kanallarda kullanılmaz (gerekçe brief §2'de).

## 21 uzmana kişiselleştirme

1. `humentis-bulunma-hikayesi/uzmanlar/genel.js` dosyasını kopyala → `uzmanlar/<uzman-slug>.js` (örn. `simge-kaya.js`).
2. İçinde sadece metinleri değiştir: `uzman.ad`, `unvan`, `sitesinden` ("Simge Kaya’nın sitesinden"), üç hikâyenin `alan` / `alinti` / arama cümlesi (uzmanın gerçek çalışma alanlarına göre), `defter.satirlar`.
3. Aç: `film.html?uzman=simge-kaya`.
4. Uzmana özel kare gerekirse (farklı alan, farklı karakter) `assetBase`'i `…/bulunma/<uzman-slug>/humentis-bulunma-` yap, sadece değişen kareleri o klasöre koy.

## Açık noktalar

- [ ] 14 karenin üretimi (Gemini) ve seçimi
- [ ] Defter karesi gelince `defter.alan` hizası kontrol
- [ ] Alıntı metinleri genel örnek — kişiselleştirmede uzmanın kendi cümleleriyle değişmeli (teşhis/tedavi vaadi yok kuralı geçerli)
- [ ] Final sorusu "Sizi arayanlar, sizi bulsun mu?" — onay
