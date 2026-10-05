# İçerik Vault — AI Ajanı Talimatları

Bu klasör bir Obsidian vault'u: bir tasarım/içerik ajansının müşteri işlerini (sunum, website, sosyal medya, AI video/görsel) tuttuğu yer. Sen (Claude Code / Cowork / Claude Design) buradan **müşteriye özgü içerik üretirsin**. Kurallar aşağıda; kısa tut, uydurma, logla.

## Klasör haritası

| Klasör | Ne var | type değeri |
|---|---|---|
| `00-Inbox/` | kategorize edilmemiş hızlı notlar | — |
| `00-Musteriler/<slug>/marka-brief.md` | **her müşterinin tek doğruluk kaynağı** (palet, font, ton, ürün kartları, yasaklar, AI Brief Bloğu) | `musteri` |
| `01-Presentations/` | Marp/Keynote sunumlar; `_themes/` CSS temaları, `active/`, `archive/` | `presentation` |
| `02-Websites/` | site notları `projects/<slug>/`, `snippets/`, `dist/` (build çıktısı); `_kutuphane/seo-geo/` (**SEO + GEO standardı**, her site için) | `website`, `snippet`, `kutuphane` |
| `03-Assets/{images,logos,videos}/<slug>/` | gerçek dosyalar (logo SVG, ürün fotoğrafı, üretilen klipler) | — |
| `04-Sosyal-Medya-Icerik/<slug>/` | reels/post metinleri, çekim notları, `instagram-feed.md` (profil önizlemesi) | `sosyal-medya-icerik`, `instagram-feed` |
| `05-Kod-Projeleri/<slug>/` | kod projelerinin **özet notu** (kod vault'ta değil) | `kod-projesi` |
| `06-AI-Video/` | `_kutuphane/` (prompt formülü, kamera sözlüğü, model rehberi, negatifler, tutarlılık, sektör reçeteleri, QC) · `_templates/` · `<slug>/` brief + `video-log.md` | `video-brief`, `video-log`, `kutuphane` |
| `07-AI-Gorsel/` | aynı yapı, görsel için | `gorsel-brief`, `gorsel-log` |
| `08-Raporlar/<slug>/` | SEO / pazarlama / rakip / teknik **denetim ve araştırma raporları** (dış skill paketlerinin çıktısı da buraya); `_templates/rapor-template.md`. Eski raporlar yerinde kalabilir, katalog `type`'a bakar | `arastirma` |
| `99-Dashboard/` | Dataview katalogları, çalışma prensipleri, ilham linkleri | `dashboard`, `readme` |
| `_templater/` | Obsidian Templater komutları (Yeni Müşteri / Video Brief / Görsel Brief / Sosyal Medya / Kod Projesi / Sunum / Website / Rapor) | — |
| `scripts/` | `build-site.js`, `vault-check.js`, `instagram-studio.js`, `build-instagram.js`, `lib/`, `instagram/` | — |

## Bir işe başlamadan önce (sırayla)

1. `00-Musteriler/<slug>/marka-brief.md` oku. Yoksa önce onu oluştur (`00-Musteriler/_templates/marka-brief-template.md`) ve bilinmeyenleri `❓ doğrulanacak` bırak — **asla uydurma**.
2. İş türüne göre şablonu oku: video → `06-AI-Video/_templates/video-brief-template.md`; görsel → `07-AI-Gorsel/_templates/gorsel-brief-template.md`; reels metni → `04-Sosyal-Medya-Icerik/_templates/sosyal-medya-icerik-template.md`; sunum → `01-Presentations/_templates/sunum-template.md`; site → `02-Websites/_templates/website-template.md`.
3. **Site işinde** (yeni site, revize, landing, devralınan site, "Google'da / ChatGPT'de çıkmıyoruz"): `02-Websites/_kutuphane/seo-geo/00-seo-geo-standardi.md` varsayılan standarttır; site, oradaki "Bitti" kontrol listesinden geçmeden bitmiş sayılmaz. Komut: `/seo-geo <slug> <site-url> [repo-yolu]`.
4. Video/görsel işinde kütüphaneyi oku: `06-AI-Video/_kutuphane/prompt-formulu.md` (zorunlu), ilgili sektör reçetesi, `negatif-promptlar.md`, `tutarlilik-rehberi.md`. Model seçimi için `model-rehberi.md`.
5. Müşterinin mevcut işlerine bak: `99-Dashboard/musteri-katalogu.md` mantığıyla `01…07` altındaki `<slug>` klasörleri; `video-log.md` / `gorsel-log.md` içindeki "Öğrenilenler".
6. Örnek dolu brief'ler: `06-AI-Video/nefin-beauty/c-vitamini-serum-kampanya-brief.md`, `06-AI-Video/humentis/klinik-broll-brief.md`.

## Üretirken

- **Dil:** notlar ve açıklamalar Türkçe; AI video/görsel promptları **İngilizce**; Türkçe diyalog tırnak içinde.
- **Prompt kuralları:** tek çekim = tek aksiyon; ürün/mekan/karakter kartı brief'ten **birebir**; kamera hareketi + lens + ışık + grade satırı + `no text, no logos` + negatif liste; 60–120 kelime (Runway I2V: 20–50). Marka brief'teki "KESİNLİKLE OLMAYACAK" listesi negatif prompt'a girer.
- **Gerçek ürün/logo varsa** image-to-video / görsel düzenleme önerilir; kelimeyle tarif ettirme. Logo/yazı/ekran içeriği her zaman post-prodüksiyon.
- **Yasal:** kozmetikte tedavi iddiası yok; klinikte danışan/çocuk yok, hastane görünümü yok; gerçek kişi benzerliği istenmez. Brief'in 7. bölümü bağlayıcı.
- **Dosya yerleşimi:** çıktı notu `0X-<tür>/<slug>/` altına (rapor/denetim → `08-Raporlar/<slug>/`); frontmatter'da `type`, `client`, `slug`, `status`, `date`, `tags`, `related` zorunlu. Dosya adları ASCII kebab-case.
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
| "X'in feed'i nasıl duracak / yayın öncesi önizleme / müşteriye göstereceğim" | `node scripts/instagram-studio.js <slug>` (stüdyo) → görsel/video sürükle, sırala, tarih ver, logoyu avatardan değiştir; müşteri dosyası için `node scripts/build-instagram.js <slug>`. Skill: `/instagram-onizleme`. **İçerik üretme**, sadece yerleştir |
| "yeni müşteri" | `00-Musteriler/<slug>/marka-brief.md` oluştur + `03-Assets/{images,logos,videos}/<slug>/` klasörleri |
| "X sitesinin SEO / GEO'su", "X'in sitesini Google ve ChatGPT'de görünür yap", "ismimizle aratınca çıkmıyoruz" | `/seo-geo <slug> <site-url> [repo-yolu]` → `02-Websites/_kutuphane/seo-geo/` (00 standart + 01–09) → rapor `08-Raporlar/<slug>/seo-geo-denetim-<tarih>.md`; örnek: `08-Raporlar/humentis/seo-geo-uygulama-2026-10-05.md` |
| "X için SEO / pazarlama / rakip raporu" (veya `/market audit`) | marka brief oku → Templater `Yeni Rapor` ya da `08-Raporlar/_templates/rapor-template.md` → `08-Raporlar/<slug>/<konu>-<tarih>.md`; `type: arastirma`. Liste: `99-Dashboard/arastirma-katalogu.md` |
| "vault'u kontrol et" | `node scripts/vault-check.js` |

## Claude Code skill'leri (`.claude/skills/`)

`/video-brief`, `/gorsel-brief`, `/icerik-paketi`, `/instagram-onizleme` — yukarıdaki akışları tek komutla yürütür; argüman olarak müşteri slug'ı ve kampanya adı alır. `/seo-geo` — bir müşteri sitesinde ileri seviye SEO + GEO + backlink çalışması (denetim → uygulama → güvenli yayın → dizine ekleme).

Obsidian biçimi için (kepano/obsidian-skills, MIT): `obsidian-markdown`, `obsidian-bases`, `json-canvas`, `obsidian-cli`, `defuddle`, `knap` — not, Bases tablosu ve Canvas yazarken otomatik devreye girer. Ayrıntı: `99-Dashboard/claude-code-skilleri.md`.

Pazarlama için (zubair-trabzada/ai-marketing-claude, MIT, kasaya uyarlandı): `/market` + 14 alt komut (`audit`, `quick`, `copy`, `seo`, `social`, `ads`, `competitors`, `proposal`, `report`…), 5 alt ajan `.claude/agents/`. Ayrıntı: `99-Dashboard/ai-marketing-claude-paketi.md`.

## Dış skill paketleri (genel kural)

Dışarıdan kurulan her skill paketi (pazarlama, SEO, tasarım, video…), belirli tek bir müşteri için yazılmamışsa **tüm müşteriler için ayrı ayrı** çalışır:

1. İşin hangi müşteri için olduğunu belirle; `00-Musteriler/<slug>/marka-brief.md` oku. Yoksa sor, uydurma.
2. Brief'teki **KESİNLİKLE OLMAYACAK** listesi, **Ses Tonu** ve **7. Yasal / Hassas Kurallar** paketin varsayılan önerilerinden üstündür. Paket bunlara ters bir şey önerirse uygulama, çıktıda "marka kuralı gereği uygulanmadı" diye belirt.
3. Çıktı Türkçe; dosyalar kasadaki müşteri klasörüne (kök dizine değil), frontmatter ve ASCII kebab-case adla.
4. Yeni paket kurarken: önce `SKILL.md` ve betikleri oku (veri dışarı gönderiyor mu?), sonra `99-Dashboard/claude-code-skilleri.md` notuna ekle.
