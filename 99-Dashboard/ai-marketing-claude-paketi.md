---
type: readme
tags: [claude-code, skill, pazarlama, ai-marketing-claude]
date: 2026-09-30
---

# ai-marketing-claude paketi (Claude Code)

**Depo:** [zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) · 2,7k⭐ · MIT lisans
**Durum:** 30.09.2026'da denendi ve **kasaya kuruldu** (`.claude/skills/market*`, `.claude/agents/market-*`). Kasaya göre uyarlandı: her komut önce müşterinin marka brief'ini okur, yasaklarına uyar, Türkçe yazar, çıktıyı müşteri klasörüne kaydeder.
**Humentis denetimi (paketin tamamı, kod doğrulamalı):** [[R4 Pazarlama denetimi kod dogrulamali 2026-09-30]]

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

## Müşteri kuralları (tüm müşteriler)

Paket genel; hangi müşteri için çalışırsa o müşterinin `00-Musteriler/<slug>/marka-brief.md` yasaklarına uyar (kural: `CLAUDE.md` → "Dış skill paketleri"). Psikoloji / danışmanlık kuralları Humentis brief'inin **7. Yasal / Hassas Kurallar** bölümünde: aciliyet yok, korku başlığı yok, danışan yorumu yok, "ücretsiz ilk seans / en iyi / garanti / tedavi" yok, kriz beklentisi yaratan ifade yok.

İlgili: [[claude-code-skilleri]] · [[ilham-linkleri]]
