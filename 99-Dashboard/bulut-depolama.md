---
type: readme
tags: [bulut, git, kurulum]
---

# Bulut Depolama Mantığı

Git/GitHub'a **100 MB üstü dosyalar yüklenemiyor** (GitHub'ın sınırı). Bu yüzden ağır dosyaları (orijinal Keynote'lar, ham video, büyük PSD/AI dosyaları vb.) repoya koymuyoruz — onlar `.gitignore`'da tutuluyor ve yerine burada anlatılan yöntemle Google Drive'a konuyor.

## Neden Google Drive

- Zaten şirket/kişisel hesapta kullanılabilir durumda, ekstra ödeme/kurulum gerekmiyor.
- Bağlantı (link) paylaşımı kolay — not içine linki yapıştırmak yeterli.
- Obsidian/Git sadece metin ve küçük görselleri taşır; büyük binary dosyalar Drive'da kalır.

## Klasör yapısı (Drive tarafında)

Drive'da vault ile aynı isimde bir ana klasör açılması öneriliyor:

```
Google Drive/
  IcerikVault - Agir Dosyalar/
    nefin-beauty/
      son.key   (374 MB, orijinal Keynote)
    <yeni-musteri>/
      ...
```

## Nasıl yüklenir (manuel, 3 adım)

1. drive.google.com'u aç, "IcerikVault - Agir Dosyalar" adında bir klasör oluştur, içine proje adıyla alt klasör aç (örn. `nefin-beauty`).
2. Ağır dosyayı (örn. `son.key`) o alt klasöre sürükle-bırak ile yükle.
3. Dosyaya sağ tık → "Bağlantı al" (Get link) → linki kopyala.

## Sonra vault'a nasıl işlenir

Yüklenen dosyanın Drive linkini, ilgili proje notuna (örn. `01-Presentations/active/nefin-beauty-sunum.md`) şu şekilde ekle:

```
- `son.key` (374 MB, orijinal) — Google Drive: https://drive.google.com/file/d/1cNdx2OCHofq0mOgXdPsu2XMhD7zLgTnJ/view?usp=sharing
- `son-kucultulmus.key` (~91 MB) — git'te, direkt vault içinde
```

Böylece küçültülmüş/git'e sığan versiyon repo'dan gelir, orijinal ağır dosyaya ihtiyaç olursa Drive linkinden ulaşılır.

## Not

Claude bu adımı otomatik yapmayı denedi ama iki nedenden dolayı elle yapılması gerekiyor:
- Bağlı Google Drive entegrasyonunun yükleme (dosya oluşturma) izni yok, sadece okuma.
- Tarayıcı üzerinden Drive'a otomatik yükleme, güvenlik sebebiyle engellendi (hesap işlemlerine otomatik müdahale edilmiyor).

Bu yüzden yukarıdaki 3 adım elle yapılmalı — 5 dakikadan kısa sürer.
