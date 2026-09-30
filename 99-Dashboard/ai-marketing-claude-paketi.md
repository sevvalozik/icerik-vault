---
type: readme
tags: [claude-code, skill, pazarlama, ai-marketing-claude]
date: 2026-09-30
---

# ai-marketing-claude paketi (Claude Code)

**Depo:** [zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) · 2,7k⭐ · MIT lisans
**Durum:** 30.09.2026'da bulut çalışma ortamına kurulup Humentis üzerinde denendi. Kasaya / bilgisayara henüz kurulmadı.
**Deneme sonucu:** [[R2 ai-marketing-claude denemesi]]

## Ne işe yarıyor?

Claude Code'a 15 hazır pazarlama komutu öğretiyor. Bir site adresi verince analiz eder, puanlar, önce-sonra metin örnekleriyle rapor çıkarır.

## Kurulum

```
curl -fsSL https://raw.githubusercontent.com/zubair-trabzada/ai-marketing-claude/main/install.sh | bash
```
Kurulum dosyası incelendi: sadece talimat dosyalarını `~/.claude/skills` ve `~/.claude/agents` altına kopyalıyor; 4 Python betiği yalnızca verilen sayfayı okuyor, dışarı veri göndermiyor. PDF rapor için `pip install reportlab` gerekiyor. Kurulumdan sonra yeni bir Claude Code oturumu açılmalı.

## Komutlar

| Komut | Ne yapar | Bizim için |
|---|---|---|
| `/market quick <url>` | 60 saniyelik ana sayfa puanı, 3 güçlü + 3 düzeltme | ✅ denendi; yeni hoca / rakip sitesine ilk bakış |
| `/market copy <url>` | Metin puanı, başlık alternatifleri, önce-sonra buton metinleri | ✅ denendi; hero ve meta başlık önerileri |
| `/market audit <url>` | 5 paralel analizci (içerik, dönüşüm, rakip, teknik, strateji) → puanlı tam rapor | En kapsamlı; müşteriye sunulabilir |
| `/market competitors <url>` | Rakip karşılaştırması | Humentis vs CAN / Yaşam Aile |
| `/market seo <url>` | SEO içerik denetimi | Hizmet sayfaları planıyla bağlantılı |
| `/market social <konu>` | 30 günlük sosyal medya takvimi | Hoca / kurum hesapları |
| `/market ads <url>` | Google ve Meta reklam metinleri | Humentis reklamları |
| `/market proposal <müşteri>` | Müşteri teklif metni | Hocalara kişisel site teklifi |
| `/market report` · `report-pdf` | Tüm analizleri tek rapor / PDF | Müşteriye gönderim |
| `/market brand <url>` | Marka sesi rehberi | Metinlerin aynı tonda yazılması |
| `/market funnel <url>` | Ziyaretçiden randevuya yol analizi | Randevu akışı |
| `/market landing <url>` | Tek sayfanın dönüşüm analizi | Hizmet sayfaları yapılınca |
| `/market emails <konu>` | E-posta dizileri | Daha çok Nefin gibi e-ticaret |
| `/market launch <ürün>` | Lansman planı | Nefin yeni ürün |

## Psikoloji sitelerinde kullanırken (zorunlu)

Paket genel pazarlama (SaaS / e-ticaret) mantığıyla yazılmış ve İngilizce. Komutu verirken şunu ekle: **"Çıktı Türkçe olsun; psikoloji / danışmanlık sitesi kurallarına uy."** Kurallar:

- Aciliyet ve kıtlık yok ("son 3 randevu", "hemen başlayın").
- Korku üzerinden başlık yok (PAS'ın "acıyı büyüt" adımı kullanılmaz).
- Danışan yorumu, önce-sonra hikâyesi, sonuç vaadi önerilmez.
- "İlk seans ücretsiz", "en iyi", "garanti", "tedavi", "hasta" yok.
- "7/24 destek" gibi kriz beklentisi yaratan ifade yok; kriz hizmeti olmadığı açıkça yazılır.

İleride kasaya kurulursa bu kurallar paketin `market/SKILL.md` dosyasının sonuna eklenmeli ki Furkan Bey de aynı sonucu alsın.

İlgili: [[claude-code-skilleri]] · [[ilham-linkleri]]
