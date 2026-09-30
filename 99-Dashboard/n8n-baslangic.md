---
type: readme
tags: [n8n, otomasyon, kurulum]
date: 2026-09-30
---

# n8n'e Başlama Notu

n8n: uygulamaları (Google Sheets, Drive, Instagram, WhatsApp, Gmail…) birbirine bağlayıp işleri kendiliğinden yaptıran otomasyon aracı. Akışlar kutucuklarla kuruluyor; hazır akış `.json` olarak içe aktarılabiliyor. Seçilmiş akışlar: [[otomasyon-secilmis-akislar]].

## Nerede çalıştıracağız?

| Seçenek | Aylık | Ne dahil | Ne zaman |
|---|---|---|---|
| n8n Cloud **Starter** | ~€24 | 2.500 çalışma, 5 eşzamanlı | Deneme ve birkaç müşteri için en kolayı; kurulum yok |
| n8n Cloud **Pro** | ~€60 | 10.000 çalışma, 20 eşzamanlı | Müşteri sayısı artınca |
| **Community Edition** (kendi sunucumuz) | Ücretsiz + sunucu (~€5–10 VPS) | Sınırsız çalışma | Teknik bakım yapabilecek biri varsa (Furkan Bey) |

Kaynak: [CloudZero n8n fiyatları 2026](https://www.cloudzero.com/blog/n8n-pricing/) — fiyatlar değişebilir, n8n.io/pricing'den teyit et. Yıllık ödemede ~%17 indirim var. Kullanılmayan çalışma hakkı sonraki aya devretmiyor. Yapay zekâ ajanlı akışlar (her mesaj bir çalışma) hakkı çok hızlı yer.

"Çalışma" = akışın bir kez tetiklenmesi. Örnek: günde 1 Instagram paylaşımı × 3 müşteri ≈ ayda 90 çalışma; Starter fazlasıyla yeter.

## Bağlantı için gerekenler

**Instagram paylaşımı (Graph API)**
- Hesap **Business veya Creator** olmalı (kişisel hesapla olmaz).
- Hesap bir **Facebook sayfasına bağlı** olmalı.
- Meta'da bir **uygulama** (developer hesabı) ve izinler; test dışı kullanım için Meta'nın uygulama incelemesi.
- API ile paylaşım sayısının günlük bir sınırı var; yüksek frekans için aralık bırakılmalı.
- Video/reels için dosyanın herkese açık bir linki gerekiyor → akışlarda genelde **Cloudinary** (ücretsiz katman yeter) ya da herkese açık Drive klasörü kullanılıyor.
- Kaynak: [Instagram Graph API 2026 rehberi](https://www.netrows.com/blog/instagram-graph-api-guide-2026)

**WhatsApp**
- Hazır akışların çoğu **Twilio** (ücretli, mesaj başı) ya da **WhatsApp Cloud API** (Meta Business doğrulaması + onaylı mesaj şablonları) kullanıyor.
- İşletme numarası ayrı olmalı; hocanın kişisel WhatsApp'ı bağlanmaz.

**Google (Sheets, Drive, Calendar, Gmail, Search Console, İşletme Profili)**
- OAuth ile bağlanıyor; hangi Google hesabının bağlanacağına karar ver (müşterinin mi, bizim ajans hesabımız mı). Search Console ve İşletme Profili için o mülke yetkimiz olmalı.

## Akış içe aktarırken

1. n8n.io'daki şablon sayfasında **Use workflow** ya da GitHub'daki `.json` → n8n'de **Import from file**.
2. Kırmızı uyarılı her kutuya kendi hesap bağlantını (credential) seç.
3. Tablo sütun adlarını şablondakiyle aynı yap ya da kutulardaki alan adlarını değiştir.
4. Önce **test hesabında / test tablosunda** elle çalıştır (Execute workflow), sonra zamanlamayı aç.
5. Paylaşım ve mesaj atan akışlarda başta bir **onay adımı** tut (Gmail/Slack onayı); güvenince kaldır.
6. Akışı dışa aktarıp (`.json`) bu kasaya yedekle: `05-Kod-Projeleri/<müşteri>/n8n/`.
