# İçerik Vault — AI Ajanı Talimatları

Bu klasör bir Obsidian vault'u: bir tasarım/içerik ajansının müşteri işlerini (sunum, website, sosyal medya, AI video/görsel) tuttuğu yer. Sen (Claude Code / Cowork / Claude Design) buradan **müşteriye özgü içerik üretirsin**. Kurallar aşağıda; kısa tut, uydurma, logla.

## Klasör haritası

| Klasör | Ne var | type değeri |
|---|---|---|
| `00-Inbox/` | kategorize edilmemiş hızlı notlar | — |
| `00-Musteriler/<slug>/marka-brief.md` | **her müşterinin tek doğruluk kaynağı** (palet, font, ton, ürün kartları, yasaklar, AI Brief Bloğu) | `musteri` |
| `01-Presentations/` | Marp/Keynote sunumlar; `_themes/` CSS temaları, `active/`, `archive/` | `presentation` |
| `02-Websites/` | site notları `projects/<slug>/`, `snippets/`, `dist/` (build çıktısı) | `website`, `snippet` |
| `03-Assets/{images,logos,videos}/<slug>/` | gerçek dosyalar (logo SVG, ürün fotoğrafı, üretilen klipler) | — |
| `04-Sosyal-Medya-Icerik/<slug>/` | reels/post metinleri, çekim notları | `sosyal-medya-icerik` |
| `05-Kod-Projeleri/<slug>/` | kod projelerinin **özet notu** (kod vault'ta değil) | `kod-projesi` |
| `06-AI-Video/` | `_kutuphane/` (prompt formülü, kamera sözlüğü, model rehberi, negatifler, tutarlılık, sektör reçeteleri, QC) · `_templates/` · `<slug>/` brief + `video-log.md` | `video-brief`, `video-log`, `kutuphane` |
| `07-AI-Gorsel/` | aynı yapı, görsel için | `gorsel-brief`, `gorsel-log` |
| `99-Dashboard/` | Dataview katalogları, çalışma prensipleri, ilham linkleri | `dashboard`, `readme` |
| `_templater/` | Obsidian Templater komutları (Yeni Müşteri / Video Brief / Görsel Brief / Sosyal Medya / Kod Projesi / Sunum / Website) | — |
| `scripts/` | `build-site.js`, `vault-check.js` | — |

## Bir işe başlamadan önce (sırayla)

1. `00-Musteriler/<slug>/marka-brief.md` oku. Yoksa önce onu oluştur (`00-Musteriler/_templates/marka-brief-template.md`) ve bilinmeyenleri `❓ doğrulanacak` bırak — **asla uydurma**.
2. İş türüne göre şablonu oku: video → `06-AI-Video/_templates/video-brief-template.md`; görsel → `07-AI-Gorsel/_templates/gorsel-brief-template.md`; reels metni → `04-Sosyal-Medya-Icerik/_templates/sosyal-medya-icerik-template.md`; sunum → `01-Presentations/_templates/sunum-template.md`; site → `02-Websites/_templates/website-template.md`.
3. Video/görsel işinde kütüphaneyi oku: `06-AI-Video/_kutuphane/prompt-formulu.md` (zorunlu), ilgili sektör reçetesi, `negatif-promptlar.md`, `tutarlilik-rehberi.md`. Model seçimi için `model-rehberi.md`.
4. Müşterinin mevcut işlerine bak: `99-Dashboard/musteri-katalogu.md` mantığıyla `01…07` altındaki `<slug>` klasörleri; `video-log.md` / `gorsel-log.md` içindeki "Öğrenilenler".
5. Örnek dolu brief'ler: `06-AI-Video/nefin-beauty/c-vitamini-serum-kampanya-brief.md`, `06-AI-Video/humentis/klinik-broll-brief.md`.

## Üretirken

- **Dil:** notlar ve açıklamalar Türkçe; AI video/görsel promptları **İngilizce**; Türkçe diyalog tırnak içinde.
- **Prompt kuralları:** tek çekim = tek aksiyon; ürün/mekan/karakter kartı brief'ten **birebir**; kamera hareketi + lens + ışık + grade satırı + `no text, no logos` + negatif liste; 60–120 kelime (Runway I2V: 20–50). Marka brief'teki "KESİNLİKLE OLMAYACAK" listesi negatif prompt'a girer.
- **Gerçek ürün/logo varsa** image-to-video / görsel düzenleme önerilir; kelimeyle tarif ettirme. Logo/yazı/ekran içeriği her zaman post-prodüksiyon.
- **Yasal:** kozmetikte tedavi iddiası yok; klinikte danışan/çocuk yok, hastane görünümü yok; gerçek kişi benzerliği istenmez. Brief'in 7. bölümü bağlayıcı.
- **Dosya yerleşimi:** çıktı notu `0X-<tür>/<slug>/` altına; frontmatter'da `type`, `client`, `slug`, `status`, `date`, `tags`, `related` zorunlu. Dosya adları ASCII kebab-case.
- **Log:** ürettiğin/önerdiğin her prompt brief'in "Shot promptları" bölümüne; üretilen dosya "Üretim logu"na ve `<slug>/video-log.md` (veya `gorsel-log.md`) tablosuna.
- **Mevcut bilgiye zarar verme:** notları yeniden yazma, ekle. Bir bilgiyi değiştiriyorsan neden değiştiğini aynı notta bir satırla belirt.
- **Vault'a konmayacaklar:** kod repoları (sadece özet), 90 MB üstü dosyalar (Google Drive → `99-Dashboard/bulut-depolama.md`), `.obsidian/workspace.json`.

## Sık istekler → nereye

| İstek | Yap |
|---|---|
| "X için reels videosu prompt'u yaz" | marka brief → `video-brief-template` doldur → `06-AI-Video/<slug>/<kampanya>-brief.md`; sektör reçetesinden kurgu; 2 varyant/shot |
| "X için görsel üret / kapak yap" | marka brief → `gorsel-brief-template` → `07-AI-Gorsel/<slug>/`; yazı için negatif alan bırak |
| "X için reels metni yaz" | marka brief (ton + yasaklar) → `sosyal-medya-icerik-template`; Humentis örneğindeki zaman kodlu yapı |
| "X için sunum" | `theme:` marka paletine en yakın CSS (`99-Dashboard/tema-katalogu.md`) veya müşteriye özel tema; Marp: `marp <dosya> --pptx` (`.marprc.yml` temaları bulur) |
| "X için site / landing" | marka brief + `02-Websites/_templates/website-template.md` + `snippets/`; Claude Design kullanılacaksa **AI Brief Bloğu**'nu prompt başına yapıştır |
| "yeni müşteri" | `00-Musteriler/<slug>/marka-brief.md` oluştur + `03-Assets/{images,logos,videos}/<slug>/` klasörleri |
| "vault'u kontrol et" | `node scripts/vault-check.js` |

## Claude Code skill'leri (`.claude/skills/`)

`/video-brief`, `/gorsel-brief`, `/icerik-paketi` — yukarıdaki akışları tek komutla yürütür; argüman olarak müşteri slug'ı ve kampanya adı alır.
