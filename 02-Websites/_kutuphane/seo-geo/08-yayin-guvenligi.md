---
type: kutuphane
tags: [seo, yayin, diff-kapisi, deploy, test, website]
date: 2026-10-05
related: ["[[00-seo-geo-standardi]]", "[[07-anahtar-kelime-ve-icerik]]", "[[09-olcum-ve-dizine-ekleme]]"]
---

# Yayın güvenliği: diff kapısı, test, yedek, doğrulama

Üst not: [[00-seo-geo-standardi]]

> "Kapının hiçbir şey yakalamadığı gün, ona ihtiyacınızın kalmadığı gün değildir." Dulait'nin ajanı bir gün sayfaları yeniden yazarken sıralama tablolarını uyarı vermeden sildi; o günden beri her yayından önce kayıplar listeleniyor.

## 1. SEO envanteri ve diff kapısı

- **Envanter:** Her indekslenebilir sayfa için başlık, açıklama, H1, H2 listesi, SSS soruları, iç linkler, kaynaklar, kelime sayısı, `updatedAt`. Kodla üretilir ve depoda anlık görüntü olarak durur (`seo-inventory.json`).
- **Kapı** (`npm run seo:gate`): yeni envanteri eskisiyle karşılaştırır ve raporlar:
  - kaybolan H2, SSS, iç link, kaynak
  - %15'ten fazla kısalan metin
  - değişen başlık/açıklama
  - metni değişip `updatedAt`'i değişmeyen (ya da tersi) sayfa
  - başlıkta bayat yıl, kırık iç link, iç link eşiği altındaki para sayfası
- Kayıplar **kullanıcıya gösterilir**; ya geri getirilir ya bilinçli onaylanır (`--accept` anlık görüntüyü günceller).

## 2. Testler

- **Eşitlik testi:** React DOM'u ile sunucu HTML'inin başlık sırası ve kelimeleri (ana sayfa, hakkımızda, SSS, örnek profiller).
- SEO testleri: her rotanın başlığı ≤60, tek canonical, 404'te canonical/schema yok, JSON-LD türleri, FAQ metni = görünür metin, `sameAs` yalnız beklenen alan adları, sitemap'te noindex sayfa yok, görsel sitemap, iç link eşiği ve anchor çeşitliliği.
- Test ortamı notları (Humentis'ten): Vitest için Node 22; jsdom ortamında `node:fs` yok → JSON'u doğrudan import et; ESM-only paketi tsx ile çalıştırırken betik uzantısı `.mts`.
- Bilinen kırık test varsa rapora "önceden kırık, bu değişiklikle ilgisi yok" diye yazılır, gizlenmez.

## 3. Yayın sırası

1. **Yedek:** web kökü, sunucu yapılandırması (web.config / nginx), API derlemesi, veritabanı dökümü. Yedek yolu rapora yazılır.
2. **Şema değişikliği** varsa önce farkı gör; içinde `DROP` ya da veri silen ifade varsa **dur**. Yalnız ekleme ise uygula.
3. **API**: kaynak arşivi (`git archive`) → sunucuda derle → süreç yöneticisinde yalnız ilgili süreci yeniden başlat → **sağlık ucunu döngüyle bekle** (ilk açılış 10+ saniye sürebilir; beklemeden kontrol edilirse geçici 502 görülür).
4. **Web**: build çıktısını web köküne **üzerine kopyala**; kökü önce boşaltma (boşaltan betik yarıda kalırsa site 403 verir). Eski hash'li JS/CSS dosyaları bir süre kalsın (açık sekmeler bozulmasın). Doğrulama dosyaları (Google `google*.html`, IndexNow anahtarı), kullanıcı yüklemeleri ve sunucuya özel yapılandırma korunur.
5. **Doğrulama:** [[01-teknik-seo#Denetim komutları]] + birkaç sayfanın tarayıcıda açılışı + konsol hatası yok.
6. **Bildirim:** IndexNow ([[09-olcum-ve-dizine-ekleme]]).
7. **Geri dönüş** yolu (yedekten açma) yazılı ve önce açıp doğrulayan biçimde.

## 4. Sunucu ve paketleme dersleri

- macOS'ta tar paketine `._*` (AppleDouble) dosyaları girer ve Windows sunucuda betikleri bozar: `COPYFILE_DISABLE=1 tar --no-mac-metadata --exclude='._*'`.
- SFTP'si olmayan Windows OpenSSH'ta `scp -O` (eski protokol). Büyük veriyi `base64 | ssh powershell` ile stdin'den aktarma; takılır.
- Paylaşılan sunucuda yalnız kendi sürecine dokun (pm2'de başka uygulamalar olabilir).
- Canlı API repodan farklı olabilir (sunucuda elle eklenmiş uçlar). Yayından önce canlı kaynak indirilip farkı alınır, birleştirilir; yoksa uçlar kaybolur.

## 5. Canlı veritabanında veri düzeltme

Panel yoksa ya da toplu düzeltme gerekiyorsa:
- SQL dosyası **yerelde UTF-8** yazılır (sunucuda PowerShell ile üretilen dosyada tırnak ve Türkçe karakter bozuldu), MD5 alınır, sunucuya kopyalanıp MD5 doğrulanır, çalıştırılır, silinir.
- `WHERE` koşulu kimlik + **eski değer** içerir (`… WHERE id = 'x' AND methods = ARRAY[...eski...]`); kayıt bu arada değiştiyse güncelleme hiçbir şey yapmaz.
- `updatedAt` güncellenir (sitemap `lastmod` ve `dateModified` doğru kalsın). Önbellek süresi (ör. 60 sn) beklenir, sonra API ve ham HTML'den kontrol edilir.
- Aynı veri depodaki seed/örnek veride de düzeltilir (sonraki kurulumda geri dönmesin).

## 6. Yetki kuralları

- Commit, push, PR, canlıya yayın ve canlı veritabanına yazma **yalnız açık onayla**. Onay her adım için ayrıdır.
- `main`'e doğrudan push yok; branch + PR.
- Kişisel veri (danışan, müşteri) hiçbir rapora, log'a ve bildirime girmez.
