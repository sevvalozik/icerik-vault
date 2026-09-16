---
type: kod-projesi
client: "Hemshare"
status: active
date: 2026-09-16
tags: [hemshare, dernek, kod-projesi, flutter, aspnet]
related: []
---

# Hemshare — Dernek Yönetim Sistemi

## Proje Tanımı

HemShare, dernekler için üye ve yönetim sistemi. Flutter ile geliştirilmiş mobil/web uygulaması ve ASP.NET 9 Web API backend'inden oluşuyor. Ayrıca `hemshare-web/` altında React + TypeScript + Vite ile ayrı bir web projesi de var (muhtemelen tanıtım/yönetim paneli — netleştirilecek).

**Repo (kod, vault'ta DEĞİL):** https://github.com/biinci/Hemshare
**Yerel konum:** `~/Documents/Hemshare` (IcerikVault'un dışında — kural gereği kod projesi vault içine konmuyor, sadece bu özet/referans notu burada)

## Özellikler (README'den)

- Kullanıcı kimlik doğrulama — telefon + SMS doğrulama kodu
- Üye yönetimi — üyeler ve yöneticiler için ayrı paneller
- Etkinlik yönetimi — oluşturma, görüntüleme, katılım
- Duyuru yönetimi
- Ödeme yönetimi — aidat ve bağış takibi
- JWT tabanlı kimlik doğrulama

## Teknolojiler

**Backend:** ASP.NET 9, Entity Framework Core 9, SQL Server, JWT Authentication, Swagger/OpenAPI

**Frontend (Flutter):** Flutter 3.2.3+, Provider (state management), HTTP, Shared Preferences

**Frontend (hemshare-web, React):** React 18, TypeScript, Vite, MUI (Material UI), React Router, Playwright (e2e testler), Vitest

## Tasarım Sistemi

Repo içinde zaten kurulu bir tasarım sistemi var: `design/` klasöründe `foundations`, `tokens`, `primitives`, `patterns`, `icons`, `research` alt klasörleri. `hemshare-web` içindeki `npm run tokens:generate` / `tokens:check` komutları bu tasarım tokenlarını üretip doğruluyor. İleride bu projeden bir şey türetmek istersek (ör. tanıtım sitesi) buradaki token/foundation yapısı gerçek ve güncel referans olarak kullanılabilir.

## Dokümantasyon

`docs/` klasöründe geniş bir doküman seti var: mimari (`architecture/`), denetimler (`audits/`), geliştirme notları (`development/`), UI/UX (`ui-ux/`), yayın notları (`releases/`) ve tekil konu dosyaları (davet/ödeme akışları, ödeme entegrasyonları vb.). Bilal'e devir notu: `docs/kalan-isler-bilal-devir.md`.

## İkonlar

48 gerçek uygulama ikonu `03-Assets/icons/hemshare/` klasörüne kopyalandı (arayüzde kullanılan gerçek SVG dosyaları — search, home, members, finance, settings vb.).

## Ekip & Branch Stratejisi

- **Şevval** ve **Bilal** birlikte kodluyor, branch bazlı çalışıyorlar (PR ile main'e merge)
- Şevval'in aktif branch'i: `feature/uyelik-davet-hesap`
- Ayrıca `feature/finans-etkinlik-belge`, `feature/uyelik-davet-icerik` gibi başka aktif branch'ler de var
- Tasarım hedefi: klasik "yapay zeka yapmış gibi duran" kalıp tasarımlardan kaçınmak, özgün bir görünüm

## Durum

Web ve mobilin büyük çoğunluğu tamamlanmış, bazı modüllere yeni isterler geldi — aktif geliştirme sürüyor.
