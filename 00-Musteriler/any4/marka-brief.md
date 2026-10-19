---
type: musteri
client: "any4"
slug: any4
sektor: dijital ürün stüdyosu (mobil uygulama, ürün tasarımı, yapay zekâ)
status: active
date: 2026-10-19
tags: [musteri, marka-brief, any4, mobil-uygulama, studyo]
related: ["[[05-Kod-Projeleri/any4/any4-web-proje-ozeti]]", "[[02-Websites/projects/any4/any4-web-sitesi]]"]
---

# any4 — Marka Brief'i

> Kaynaklar: `fsumbul/any4-web` reposu (`sevval/duzenlemeler` dalı): `README.md`, `llms.txt`, `brand/index.html`, `assets/css/main.css`. Logo 19 Ekim 2026'da yenilendi. Eski adı **Verihane**.

## İlk ilke

**Her şey sade, şık ve lüks hissettirmeli.** Bir öğe bunu bozuyorsa çıkarılır. Bütün tasarım kararları buna göre veriliyor.

## 1. Kimlik

| Alan | Değer |
|---|---|
| Ad | any4 (her zaman küçük harf) |
| Eski ad | Verihane |
| Sektör | Dijital ürün stüdyosu: iOS, Android, Flutter / React Native, ürün ve UX/UI tasarımı, yapay zekâ ve backend |
| Konum | Türkiye, uzaktan, Türkçe ve İngilizce |
| Kuruluş | 2026 |
| Karar verici | Furkan Bey (repo sahibi: fsumbul) |
| Ajans tarafı sorumlu | Şevval |
| Web | any4.app (yer tutucu, alan adı kesinleşmedi) · merhaba@any4.app |

## 2. Konumlandırma ve vaat

- **Tek cümle:** "any4 bir dijital ürün stüdyosu. Tasarımı, yazılımı ve yapay zekâyı tek ekipte topluyor, fikrinizi mağazaya kadar taşıyoruz."
- **Hero başlığı:** "Her gün açılan uygulamalar."
- **Farkı:** Strateji, tasarım ve yazılım aynı masada; haftalık demo; kaynak kod ve fikri mülkiyet müşteriye devredilir.
- **Süreç:** Keşif (1–2 hf) → Tasarım (2–4 hf) → Geliştirme (6–16 hf) → Lansman (sürekli). Yayına kadar toplam 9–22 hafta.

## 3. Hedef kitle

Girişimler (MVP), kurumsal şirketler (müşteri ve çalışan uygulamaları), fintek, sağlık, e-ticaret, eğitim, lojistik.

## 4. Ses tonu

| Böyle | Böyle DEĞİL |
|---|---|
| Kısa, sakin, net cümleler | Abartılı vaat, "dünyanın en iyi…" |
| Somut süre ve çıktı ("her hafta telefonunuzda yeni bir sürüm") | Jargon yığını |
| "Siz" hitabı | Emir kipiyle baskı |

## 5. Görsel kimlik

### Logo (`03-Assets/logos/any4/`)

- "any" kelimesi + hemen yanında, harflerle **aynı taban çizgisine oturan** petrol mavisi bir top; içinde beyaz italik serif "4". Topun çapı x-yüksekliğine eşit.
- Önceki logoda 4 "any"nin üstüne üs gibi zıplıyordu; 19 Ekim 2026'da top yanına yuvarlanıp duracak şekilde değiştirildi.
- Harfler path'e dönüştürüldü, yazı tipi yüklemez.
- Dosyalar:
  - `any4-logo.svg` (ana)
  - `any4-logo-small.svg` (header/küçük boyut, 4 daha kalın)
  - `any4-logo-light.svg` (koyu zemin)
  - `any4-logo-mono.svg` (tek renk)
  - `any4-mark.svg` / `any4-mark-512.png` (uygulama ikonu: mürekkep kare + petrol top)
  - `any4-mark-accent.svg`
  - `any4-favicon.svg` (yalnızca top)
  - PNG ikonlar: favicon-32, apple-touch-180, 192, 512, maskable-512
- **Logo hareketi:**
  - Açılışta top sağdan yuvarlanıp "y"nin yanında durur, sonra logo header'a uçar (~3,7 sn).
  - Footer'da top gelir, 4,5 sn bekler, yuvarlanıp çıkar ve döngü tekrar eder.

### Renkler

| Ad | Hex | Kullanım |
|---|---|---|
| Kâğıt | `#FFFFFF` | Zemin (saf beyaz) |
| Mürekkep | `#0E1B20` | Metin, butonlar |
| Petrol | `#1F5568` | Tek vurgu: logo topu, iletişim ve footer zemini |
| Koyu petrol | `#163F4D` | Basılı/koyu hal |
| Açık petrol | `#4E8A9C` | İkincil vurgu |
| Sis | `#E3ECEE` | Yüzey |
| Açık sis | `#F1F4F4` | Yüzey adımı |
| Gri metin | `#44535A` / `#66757B` | İkincil / üçüncül metin |

Token dosyası: `03-Assets/logos/any4/any4-tokens.css`.

### Tipografi

- **Başlık:** Newsreader (serif, opsz ekseni, ağırlık 400)
- **Metin ve arayüz:** Geist
- İkisi de açık lisanslı ve sitede kendi sunucudan yükleniyor.

### Tasarım kuralları

- Saf beyaz zemin, tek vurgu rengi (petrol).
- Butonlar kutu ya da hap değil: yazı + yanında logonun topunu andıran bir daire (ok ikonu). Üstüne gelince daire büyüyüp petrole döner.
- Başlık üstü küçük etiket, başlıkta tek kelime vurgusu ve gereksiz ayırıcı çizgi kullanılmaz.
- Bölümler arası boşluk her yerde aynı.
- Görsel tekrarı yok; site "görsel görsel dolmasın".
- Fotoğraflar Unsplash'ten (ücretsiz lisans), siteyle birlikte barındırılıyor.
- Hareket uzun ve yumuşak; `prefers-reduced-motion` açıksa hepsi kapanır.

### Görseller

`03-Assets/images/any4/` içinde:
- `fotograflar/`: hero şeridi (11 adet) + işler (3 adet)
- `og/`: paylaşım görselleri
- `ekran-goruntuleri/`: masaüstü bölümleri, tam sayfa, mobil ve marka sayfası

## 6. Hizmet kartları

| Hizmet | İçerik |
|---|---|
| Mobil uygulama | Native iOS / Android (Swift, SwiftUI, Kotlin, Compose), Flutter, React Native |
| Ürün ve arayüz tasarımı | Araştırma, akışlar, tıklanabilir prototip, tasarım sistemi (Figma) |
| Yapay zekâ ve backend | LLM entegrasyonu, cihaz üstü ML, API, Firebase / Supabase |
| Yayın ve büyüme | App Store / Google Play, ASO, analitik, A/B testi, bakım |

## 7. Yasal / hassas kurallar

- Seçili işler (Ada, Rota, Asistan) **konsept**; gerçek müşteri işi gibi sunulmaz, sitede "konsept çalışmalar" diye yazılı.
- Süre ve vaatler (9–22 hafta, "bir iş günü içinde dönüş") sektör ortalaması; any4 onaylamadan kesin taahhüt gibi kullanılmaz.
- Form verisi yalnızca talebe yanıt için; KVKK metni bağlanacak.
- Fotoğraflar yalnızca Unsplash lisanslı; gerçek kişi benzerliği istenen AI görseli yok.

## 8. Varlık haritası

| Ne | Nerede |
|---|---|
| Kod | `github.com/fsumbul/any4-web` (dal `sevval/duzenlemeler`), yerel `~/any4-web` |
| Kod özeti | [[05-Kod-Projeleri/any4/any4-web-proje-ozeti]] |
| Site notu | [[02-Websites/projects/any4/any4-web-sitesi]] |
| Logolar, ikonlar, token'lar | `03-Assets/logos/any4/` (+ `ikonlar/`, `any4-tokens.css`) |
| Fotoğraflar, OG, ekran görüntüleri | `03-Assets/images/any4/` |
| Marka kiti sayfası | Repoda `brand/index.html` (görüntüsü: `03-Assets/images/any4/ekran-goruntuleri/marka-sayfasi.jpg`) |

## 9. Rakipler ve ilham

❓ doğrulanacak. Hero için klasik "solda yazı, sağda simge" düzeni bilinçli olarak reddedildi; yerine kenetlenen iki satırlık başlık ve akan fotoğraf şeridi seçildi.

## 10. AI Brief Bloğu (kopyala-yapıştır)

```
Brand: any4 — digital product studio (mobile apps, product design, AI). Always lowercase "any4".
First principle: minimal, elegant, luxurious. Remove anything that breaks this.
Palette: white #FFFFFF base, ink #0E1B20, single accent petrol #1F5568, mist #E3ECEE.
Type: Newsreader (serif, regular) for headings, Geist for body and UI.
Logo: "any" + a petrol ball sitting on the baseline beside it, white italic serif "4" inside.
Buttons: text + a solid circle with a diagonal arrow; no boxes, no pills.
Imagery: real, natural photos of people working and using phones; no AI-looking app mockups.
Motion: long, soft ease-out; the ball rolls in and settles; respect reduced motion.
Avoid: eyebrow labels, single-word highlights in headlines, gradients, busy layouts.
```

## 11. Açık sorular / eksikler

- [ ] Alan adı (any4.app yer tutucu)
- [ ] Form uç noktası (Formspree ya da Furkan Bey'in backend'i)
- [ ] KVKK aydınlatma metni bağlantısı
- [ ] Sosyal medya hesapları
- [ ] Seçili işler (Ada, Rota, Asistan) konsept; gerçek işlerle değiştirilecek
- [ ] `llms.txt` hâlâ eski logoyu ("üs 4, any⁴") anlatıyor; yeni logoya göre güncellenmeli
