---
type: kutuphane
tags: [seo, anahtar-kelime, icerik, sayfa-brief, ymyl, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[seo-dongusu]]", "[[08-yayin-guvenligi]]"]
---

# Anahtar kelime ve içerik

Üst not: [[00-seo-geo-standardi]]

## Döngü (Dulait'nin 6 skill'i, kasaya uyarlanmış)

```
money-keywords → page-brief → ship-page (diff kapısı) → weekly-seo (her pazartesi) → pattern-drip (haftada ≤1) → geo-rankings (3. aydan itibaren, aylık)
```

| Adım | Ne yapar | Çıktı |
|---|---|---|
| **money-keywords** | İlk 6 ay yalnız **ticari niyetli** kalıplar. Niyet SERP'ten okunur (blog + tanım = bilgi; hizmet/kategori/harita = ticari). Kelime değil **kalıp** ("<hizmet> + <şehir>", "<test> + nerede yapılır"). Ücretsiz kaynak: Google Suggest + `*` hilesi ("ankara * psikolog") + "Kullanıcılar bunları da sordu" | Kalıp tablosu: kalıp · örnek sorgular · niyet · hedef sayfa (var/yeni) |
| **page-brief** | Hedef sorguda ilk 3'ün **ortak bölümleri** + onlarda olmayan bir şey (gerçek fotoğraf, kendini değerlendirme soruları, kamu seçenekleri). Sayfa içi geri kalan çoğunlukla gürültüdür | `briefs/<kelime>.md`: H1, başlık, açıklama, H2 listesi, SSS, iç linkler (≥5 kaynak sayfa), kaynaklar |
| **ship-page** | Brief'ten yaz → diff kapısı → test → onay → yayın | [[08-yayin-guvenligi]] |
| **weekly-seo** | Search Console'un 6 sinyali (neredeyse orada, tıklanmıyor, düşüşte, hedefsiz, yanlış niyet, 7+ kelime). Son 60 günde düzenlenmiş sayfaya dokunulmaz | [[seo-dongusu]] |
| **pattern-drip** | Kalıbı ölçekle ama **haftada en fazla 1 sayfa** ve uzman kontrolüyle; "Bulundu – dizine eklenmedi" izlenir. Toplu benzer sayfa = "scaled content abuse" | Haftalık 1 sayfa |
| **geo-rankings** | AI'ın arayacağı "en iyi + kelime + yıl" sorgularında sıralanan listeleri çıkar, girmeye çalış | [[03-geo-yapay-zeka-aramasi]] |

Dulait ile Yaşar ayrıştığında kasa kararı:

| Konu | Karar |
|---|---|
| Sayfa başına kelime | **Tek niyet, tek sayfa**; birinci sıradaki URL'nin sıralandığı ikincil sorgular aynı sayfaya |
| İç link anchor'u | ≥5 bağlamsal link, tarif edici ve **çeşitli** anchor |
| "En iyi + yıl" başlığı | Marka izin veriyorsa ve yıl gerçekten yenileniyorsa; sağlık/hukukta hayır, yerine seçim rehberi |
| Link satın alma | Yok |
| Hız | Haftada ≤1 sayfa (YMYL'de uzman kontrolüyle) |

## Kullanıcının dili

- Sektörün değil kullanıcının kelimesi: "çocuk psikoloğu" (pedagog değil), "çift terapisi" (aramada böyle geçiyor; marka/hukuk izin veriyorsa).
- Her öneri yeni sayfa değildir. Soru: "Bu aramaları yapan kişi aynı sayfada mutlu olur mu?" Evetse aynı sayfaya bölüm/SSS.
- Suggest'te "fiyatları <yıl>" her kalıpta çıkıyorsa ücret bilgisi en büyük sayfa içi açıktır; ücret kararını müşteri verir.

## Sayfa yazım kuralları

- **İlk iki cümle cevap.** Sonra ayrıntı.
- Tek H1 birincil sorguyu içerir; H2'ler ilk 3'ün ortak bölümleri; SSS Suggest biçiminde.
- Metin içi iç linkler `[anchor](/yol)`; her yeni sayfaya ≥5 sayfadan link, para sayfaları header'da, uzun kuyruk footer'da.
- **Tazelik:** içerik değişince `updatedAt` güncellenir → görünür "Son güncelleme" + `dateModified` + `lastmod`. Yalnız tarih değiştirmek güncelleme değildir; başlıkta yıl varsa metin o yıl gerçekten gözden geçirilir (diff kapısı "bayat yıl"ı yakalar).
- **Yazı formatı:** basit bir markdown alt kümesi (`##` başlık, liste, kalın, `[link](/yol)`) hem React'te hem sunucu HTML'inde aynı ayrıştırıcıyla çizilir. Panelden yazan uzmana bu söz dizimi ipucu olarak gösterilir.
- Yer tutucu yazılar ("tam metin yakında") `noindex` ve sitemap dışı; metin gelince otomatik açılır.

## YMYL (sağlık, hukuk, finans) ek kuralları

- Yazar ve **kontrol eden uzman** görünür; hayali uzman yok; güvenilir dış kaynak gösterilir ([[02-schema-ve-varlik-seo#E-E-A-T sinyalleri (özellikle sağlık, hukuk, finans)]]).
- Tanı koyan, sonuç vaat eden, aciliyet yaratan sayfa yazılmaz ("depresyon testi" gibi "yanlış niyet" sorguları istese bile).
- Marka brief yasak kelimeleri başlık, açıklama ve SSS'te de geçerli. Psikoloji örneği: "en iyi", "ücretsiz", "tedavi", "hasta", "garanti", "hemen", "indirim", "7/24"; "terapi" kelimesi hukuk görüşüne bağlı.
- Taslaklar `taslaklar/` klasöründe bekler; uzman onayı gelmeden yayına girmez.

## Araçlar

- Google Suggest betiği: tohum listesi (`tohumlar.txt`) → her tohum + a–z + `*` → CSV. Ücretsiz ve yeterli.
- Search Console Performans dışa aktarma (sorgu + sayfa) ya da API (servis hesabı).
- Kasada: `/market seo`, [[ai-marketing-claude-paketi]]; dışarıda: claude-seo, marketingskills → [[claude-code-skilleri]].
