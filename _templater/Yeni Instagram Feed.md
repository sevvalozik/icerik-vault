<%*
const musteriAdi = await tp.system.prompt("Müşteri adı");
const kullaniciAdi = await tp.system.prompt("Instagram kullanıcı adı (@ olmadan)");
const slugify = s => s.trim().toLowerCase()
  .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/i̇/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u")
  .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const slug = slugify(musteriAdi);
await tp.file.move("04-Sosyal-Medya-Icerik/" + slug + "/instagram-feed");
-%>
---
type: instagram-feed
client: "<% musteriAdi %>"
slug: <% slug %>
platform: instagram
username: <% kullaniciAdi %>
profile_name: "<% musteriAdi %>"
bio: ""
avatar: 
posts_count: 0
followers: 0
following: 0
verified: false
private: false
grid_ratio: "4:5"
theme: dark
highlights: []
status_bar_time: "19:28"
status: draft
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [sosyal-medya, instagram, onizleme]
related: ["[[00-Musteriler/<% slug %>/marka-brief]]"]
---

# <% musteriAdi %> — Instagram Feed Önizlemesi

> Bu notu stüdyo yazar: `node scripts/instagram-studio.js <% slug %>`
> Gönderi sırası = ızgara sırası (en yeni üstte). Gönderiler bölümü dışındaki bölümler korunur.
> Müşteriye gönderilecek tek dosya: `node scripts/build-instagram.js <% slug %>`

## Çekim / yayın notları

- 

## Hikayeler

_Henüz hikaye yok — stüdyodaki Hikayeler bölümüne görsel/video sürükle._

## Gönderiler

_Henüz gönderi yok — stüdyoda görsel/video sürükleyip bırak._
