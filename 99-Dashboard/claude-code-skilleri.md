---
type: readme
tags: [claude-code, skill, agent-skills, tasarim, pazarlama, seo, video, obsidian]
date: 2026-09-30
---

# Claude Code Skill'leri

## Bunlara ne deniyor?

Resmî adı **Agent Skills** (Türkçede "skill" ya da "beceri paketi"). Her skill, içinde bir `SKILL.md` talimat dosyası (bazen betik ve şablonlar) olan bir klasör. Claude Code ilgili iş gelince o talimatı okuyup işi hep aynı düzen ve kalitede yapıyor. Birkaç skill'i bir arada dağıtan pakete **plugin** (eklenti), plugin'lerin listelendiği depoya **marketplace** deniyor.

- **Nereye kurulur:** kişisel → `~/.claude/skills/` (sadece o bilgisayar) · proje → kasadaki `.claude/skills/` (Git'le Furkan Bey'e de gider).
- **Nasıl kurulur (3 yol):**
  - `npx skills add <kullanıcı>/<depo>` → skill'i indirir ve kurar
  - Claude Code içinde `/plugin marketplace add <kullanıcı>/<depo>` → `/plugin install <ad>@<marketplace>`
  - Deponun kendi `install.sh` betiği (önce içine bak: sadece dosya kopyalıyor mu?)
- **Kurmadan önce:** skill'ler Claude'a talimat verir; bilinmeyen depodan kurarken `SKILL.md` ve betikler okunmalı (veri dışarı gönderiyor mu, beklenmedik komut çalıştırıyor mu).
- Kurulumdan sonra yeni bir Claude Code oturumu açılmalı.

Henüz kurulup denenenler ✅ ile işaretli. Diğer bilgiler depo sayfalarından (30 Eylül 2026).

## Kasada kendi yazdığımız skill'ler

`.claude/skills/` içinde: `gorsel-brief`, `icerik-paketi`, `instagram-onizleme`, `video-brief`.

Ayrıca kasaya kurulu: **ai-marketing-claude** (30.09.2026, kasaya uyarlandı → `/market`) ve **obsidian-skills** (30.09.2026) → `obsidian-markdown`, `obsidian-bases`, `json-canvas`, `obsidian-cli`, `defuddle`, `knap`.

## Obsidian (kasa için)

- ✅ **[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)** (49k⭐) — Obsidian'ın kurucusu Steph Ango'nun resmi paketi. Obsidian Markdown (`[[bağlantılar]]`, callout'lar), Bases (`.base` tablolar), JSON Canvas (`.canvas` panolar), Obsidian CLI; ayrıca Defuddle (web sayfasını temiz nota çevirir). Kasaya not yazdırırken hataları azaltır. **Kasaya kuruldu (30.09.2026)**; `defuddle` ve `knap` ilk kullanımda `npm install -g` ister. `npx skills add https://github.com/kepano/obsidian-skills`

## Pazarlama, içerik ve SEO

- ✅ **[zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude)** (2,7k⭐) — 15 görev: site denetimi, 30 günlük sosyal medya takvimi, müşteriye teklif, PDF rapor. **Denendi, işe yarıyor** → [[ai-marketing-claude-paketi]] (komutlar, psikoloji kuralları) · Humentis denemesi: [[R2 ai-marketing-claude denemesi]]
- **[AgriciDaniel/claude-blog](https://github.com/AgriciDaniel/claude-blog)** (2k⭐) — blog için baştan sona sistem: konu planı, taslak, yazım, Google ve yapay zekâ aramalarına uygunluk kontrolü. Hocaların blog yazıları için uygun.
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** (50,9k⭐) — 60 skill; ai-marketing'ten çok daha kapsamlı. Bize yarayanlar: `seo-audit`, `ai-seo`, `schema`, `site-architecture`, `programmatic-seo`, `social`, `copywriting`, `copy-editing`, `content-strategy`, `marketing-psychology`, `competitor-profiling`. Hoca siteleri planlanırken site mimarisi ve schema doğrudan kullanılır. `npx skills add coreyhaines31/marketingskills`
- **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** — claude-blog'un yazarından; 26 alt skill + 19 alt ajan: teknik SEO, **E-E-A-T** (Google'ın sağlık sitelerinde en çok baktığı uzmanlık/güven ölçütü), schema, yapay zekâ aramaları (GEO), **yerel SEO ve Google Haritalar**, PDF/Excel rapor. Hoca sitelerinde "uzman yazdı" güveni için birebir.

> [!warning] Psikoloji sitelerinde
> Pazarlama skill'leri genel (SaaS / e-ticaret) mantıkla yazılmış: aciliyet, danışan yorumu, "ücretsiz ilk seans" gibi kalıplar önerebilir. Kurallar: [[ai-marketing-claude-paketi#Psikoloji sitelerinde kullanırken (zorunlu)]]

## Video

- **HyperFrames** (53,4k⭐) — HTML/CSS'i birebir MP4'e çeviren çerçeve. Scroll sitelerini sunum için videoya kaydetme işinin hazır aracı. (Depo linki henüz doğrulanmadı; aşağıdaki listede var.)
- **[remotion-dev/skills](https://github.com/remotion-dev/skills)** (4,5k⭐) — kodla video yapma aracı Remotion'un resmi skill'leri: altyazılı reels, hareketli grafik, ürün tanıtımı. Nefin / Otoekspertiz reels'leri için. `npx skills add remotion-dev/skills`
- **[zhuyansen/awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills)** — 178 video skill/aracının listesi, her biri güvenlik notlu (OpenMontage, HyperFrames, Remotion, Vox Director…). ⚠️ Yüz değiştirme (face swap) araçları da var; bizim yüz kuralına ters, kullanılmaz.

## Tasarım ve arayüz (web / mobil)

hepsi gerçek ve kaliteli — özellikle Impeccable ve Taste-Skill tam da "AI gibi durmasın" isteğine birebir uyuyor:

- **[emilkowal.ski/skill](https://emilkowal.ski/skill)** — Emil Kowalski'nin (tanınmış bir design engineer, animasyon konusunda uzman) kendi skill seti. UI animasyonu, animasyon kalitesini denetleme, tasarımda "motion" fırsatlarını bulma gibi 9 skill içeriyor. `npx skills add emilkowalski/skill` ile kuruluyor (doğrulandı, sitede de aynı komut yazıyor). Kurulumu gösteren rehber video: [Instagram reel](https://www.instagram.com/reel/DclpZH7KQk1/).
- **[github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — 67k yıldız. Anthropic'in kendi frontend-design skill'inden geliştirilmiş. AI'ın ürettiği tasarımdaki klişeleri (mor gradyan, iç içe kartlar, hep aynı fontlar vb.) 61 kuralla tespit edip düzeltiyor. Claude Code dahil birçok araçla çalışıyor.
- **[github.com/leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill)** — 64.9k yıldız. AI'ın ürettiği arayüzlerin "şablon gibi" durmaması için tipografi/boşluk/hareket kurallarını güçlendiriyor; yumuşak/minimalist/brütalist gibi farklı stil varyantları var. React/Vue/Svelte ile uyumlu.
- **[github.com/kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles)** — 1000 yıldız. Motion/animasyon için "Create" (amaçlı hareket ile bileşen üretme) ve "Audit" (mevcut animasyonu denetleme) modları var; Emil Kowalski, Jakub Krehel, Jhey Tompkins'in tasarım felsefelerini birleştiriyor, anti-AI-slop kontrol listesi içeriyor. `npx skills add kylezantos/design-motion-principles` ile kuruluyor.

Web/mobil/tanıtım sitesi işleri için araştırdığımız, yıldız sayılarıyla:

- **[rampstackco/claude-skills](https://github.com/rampstackco/claude-skills)** (502⭐) — tüm site sürecini kapsayan skill paketi: marka kimliği, landing page metni, çok adımlı form tasarımı (üyelik formu için birebir uyuyor)
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** (126k⭐) — en büyük/popüler olan; 79 UI stili, web + mobil (Flutter/SwiftUI dahil) destekliyor
- **[ryanthedev/design-for-ai](https://github.com/ryanthedev/design-for-ai)** (258⭐) — tipografi/renk/kompozisyon temelleri
- **[funboy322/avoid-ai-design](https://github.com/funboy322/avoid-ai-design)** (57⭐) — "AI gibi duran" klişeleri (mor gradyan, hep aynı fontlar vb.) denetleyip düzeltiyor
- **[Koomook/claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills)** (22⭐) — özgün/sıradan olmayan frontend tasarımı için

### İleride (site yayına girdikten sonra)

- **[mardab96/landing-pages-claude-skills](https://github.com/mardab96/landing-pages-claude-skills)** (1⭐) — 26 farklı dönüşüm denetimi skill'i (CTA netliği, form sürtünmesi, güven sinyalleri vb.) — ilk sürüm için değil, site canlıya alındıktan sonra optimize etmek için

## Resmi ve büyük listeler

- **[anthropics/skills](https://github.com/anthropics/skills)** (177,5k⭐) — Anthropic'in resmi skill'leri: Word, PowerPoint, PDF, Excel, marka yönergeleri, frontend tasarım (Impeccable bundan türetildi). `/plugin marketplace add anthropics/skills`
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** (74,4k⭐) — büyük liste; Instagram, TikTok, Canva otomasyonu, görsel iyileştirme paketleri var.
- **[ithiria894/awesome-claude-code-workflows](https://github.com/ithiria894/awesome-claude-code-workflows)** (122⭐) — hazır iş akışı tarifleri; "Pazarlama ve içerik" bölümü var.

İlgili: [[ilham-linkleri]] · [[ai-marketing-claude-paketi]] · [[otomasyon-secilmis-akislar]]
