---
type: readme
tags: [n8n, otomasyon, workflow, humentis, nefin-beauty, otoekspertiz]
date: 2026-09-30
---

# Bizim İşler İçin Seçilmiş n8n Akışları

Binlerce hazır akış arasından müşterilerimize doğrudan uyanlar. Hepsi n8n'in resmi şablon sitesinden; sayfada **Use workflow** ile n8n'e kopyalanıyor. Henüz hiçbiri kurulmadı ve denenmedi (30 Eylül 2026). Kuruluma başlamadan önce: [[n8n-baslangic]]. Ham liste: [[n8n-workflow-kaynaklari]].

## Hoca siteleri (Humentis ve kişisel siteler)

**1. WhatsApp'tan randevu talebi → takvim + onay mesajı**
- [Klinik randevusu: WhatsApp, Google Calendar, Gmail](https://n8n.io/workflows/16680-book-and-confirm-clinic-appointments-with-whatsapp-google-calendar-and-gmail) — talep gelir, randevu numarası üretir, online ise Meet linki / yüz yüze ise adres ekler, uzmanın takvimine yazar, danışana ve uzmana onay atar, 24 saat önce hatırlatır. WhatsApp için Twilio gerekiyor.
- [Google Sheets'ten günlük WhatsApp hatırlatması](https://n8n.io/workflows/17000-send-daily-appointment-reminders-from-google-sheets-to-whatsapp) — daha basit: randevular tabloda, her gün hatırlatma gider.
- [WhatsApp randevu planlama + Google Calendar](https://n8n.io/workflows/5855-whatsapp-appointment-scheduling-with-google-calendar/)
- İlgili: [[P0-01 Randevu akisi]] — WhatsApp ve telefon taleplerini tabloya düşürmek temas kaydını ([[O1 Operasyon musaitlik ve kayit]]) kolaylaştırabilir.

**2. Google yorumlarına yanıt taslağı (onaylı)**
- [Google yorum yanıtı üret ve onaya sun](https://n8n.io/workflows/14360-generate-and-approve-google-review-replies-with-groq-ai-and-slack/) — yapay zekâ taslak yazar, biri onaylamadan yayınlanmaz.
- [Yorumları izle, günlük Gmail ile taslak gönder](https://n8n.io/workflows/14896-monitor-google-reviews-and-draft-gpt-4o-mini-replies-via-gmail-daily)
- [Google İşletme yanıtları + tablo takibi](https://n8n.io/workflows/11503-automate-google-my-business-responses-with-gemini-ai-and-google-sheets-tracking/)

**3. Haftalık Search Console raporu (hangi arama, hangi sayfa)**
- [Haftalık SEO raporu e-postayla](https://n8n.io/workflows/3712-automate-weekly-seo-reports-from-google-search-console-to-email/)
- [Anahtar kelime raporu + yapay zekâ yorumu](https://n8n.io/workflows/14892-send-weekly-seo-keyword-email-reports-with-google-search-console-gpt-4o-mini-and-gmail/)
- [İçerik eskimesi uyarısı](https://n8n.io/workflows/13838-detect-content-decay-from-google-search-console-and-alert-via-slack-and-email) — trafiği düşen blog yazısını haber verir; hoca bloglarının bakımı için.

> [!warning] Psikoloji işlerinde dikkat
> Randevu ve WhatsApp akışlarında danışanın **şikâyeti, tanısı, yaşadığı sorun** tabloya, takvim başlığına ya da mesaj şablonuna yazılmaz; sadece ad, telefon, tarih-saat, online/yüz yüze. Bu bilgiler KVKK'da özel nitelikli kişisel veri sayılıyor; aydınlatma metni ve açık rıza sitede olmalı. Yorum yanıtlarında da danışan olduğu teyit edilmez ("seansımızda…" gibi ifade yok).

## Nefin Beauty ve diğer sosyal medya hesapları

**4. Tablodan planlı Instagram paylaşımı**
- [Görselleri Sheets + Drive ile planla, yapay zekâ ile açıklama yaz](https://n8n.io/workflows/11964-schedule-and-auto-post-images-to-instagram-with-google-sheets-drive-and-ai-captions/)
- [Reels: Drive → Cloudinary → Instagram, tabloyu günceller](https://n8n.io/workflows/6217-automated-instagram-reels-posting-using-google-drive-cloudinary-and-sheets/)
- [Carousel paylaşımı](https://n8n.io/workflows/5833-automate-instagram-carousel-posts-with-google-sheets-drive-and-cloudinary/)
- [Instagram + Facebook tek tablodan](https://n8n.io/workflows/11930-auto-schedule-instagram-and-facebook-posts-from-google-sheets/)
- [Tüm içerik türleri (gönderi, reels, story)](https://n8n.io/workflows/4498-schedule-and-publish-all-instagram-content-types-with-facebook-graph-api/)
- [Video: Instagram, LinkedIn, TikTok birlikte](https://n8n.io/workflows/9786-schedule-and-auto-post-videos-to-instagram-linkedin-and-tiktok-with-google-sheets/) — Otoekspertiz reels'leri için de uyar.

Mantık hepsinde aynı: bir Google Sheets satırında tarih, açıklama ve Drive'daki dosya → n8n saati gelince paylaşır → satırı "paylaşıldı" yapar. Bizim aylık içerik planlarımız zaten tablo halinde, doğrudan bağlanabilir.

**5. Rakip / ilham takibi**
- [Instagram içerik takvimi üret (rakip analiziyle)](https://n8n.io/workflows/6977-auto-generate-instagram-content-schedule-with-gpt-4-apify-and-google-sheets/)
- [Peter-SB/n8n-ai-instagram-scraper](https://github.com/Peter-SB/n8n-ai-instagram-scraper) — Reels'leri toplayıp özetler ve kategorize eder.

## Öncelik önerisi

1. Planlı Instagram paylaşımı (4) — en çok zaman kazandıran, en az risk.
2. Haftalık Search Console raporu (3) — sadece okuma yapar, hiçbir şey yayınlamaz.
3. Randevu akışı (1) — değerli ama hassas veri; önce KVKK metni ve hocanın onayı.
4. Yorum yanıtları (2) — hep onaylı modda.
