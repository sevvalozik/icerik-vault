---
type: kutuphane
tags: [ai-video, comfyui, wan, acik-kaynak, image-to-video]
date: 2026-09-30
---

# ComfyUI ve Açık Kaynak Video Akışları

Flow/Veo kredisi yetmediğinde ya da müşteri görselinin dışarı gitmemesi gerektiğinde alternatif: fotoğrafı videoya çeviren (image-to-video) açık kaynak modeller. ComfyUI, bu modelleri kutucuklarla çalıştıran ücretsiz arayüz; hazır akışlar `.json` olarak yükleniyor. Model genel bakışı: [[model-rehberi]].

Henüz denenmedi (30 Eylül 2026).

## Donanım gerçeği

Yerel çalıştırmak güçlü bir NVIDIA ekran kartı istiyor ([kaynak](https://stable-diffusion-art.com/wan-2-2-image-to-video/)):

| Model | VRAM | Süre (RTX 4090, bir klip) |
|---|---|---|
| Wan 2.2 **5B** | ~8 GB | ~6 dakika |
| Wan 2.2 **14B** | ~20 GB | ~1 saat 20 dakika |

MacBook Air'de pratik değil. Seçenekler: saatlik GPU kiralama (RunPod, Vast.ai vb.), ComfyUI'ın bulut sürümü ya da Wan'ı barındıran servisler. Kalite olarak Veo'nun altında ama kredisiz ve sınırsız deneme imkânı veriyor.

## Hazır akışlar

- [ComfyUI resmi Wan 2.2 rehberi](https://docs.comfy.org/tutorials/video/wan/wan2_2) — resmi, en güvenilir başlangıç.
- [Wan 2.2 14B Image-to-Video (comfy.org)](https://comfy.org/workflows/video_wan2_2_14B_i2v-8c7511104c80/) — tek tıkla yüklenen resmi akış.
- [ComfyUI_examples — Wan 2.2](https://comfyanonymous.github.io/ComfyUI_examples/wan22/) — ComfyUI yazarının örnekleri.
- [Wan-Video/Wan2.2](https://github.com/Wan-Video/Wan2.2) — modelin kendi deposu.
- [Jeff-Emmett/ComfyUI_Workflows](https://github.com/Jeff-Emmett/ComfyUI_Workflows) — Wan 2.2 / 2.1 image-to-video, text-to-video ve FLUX görsel akışları.
- [safzanpirani/comfyui-workflows](https://github.com/safzanpirani/comfyui-workflows) — hız/kalite dengeli görsel ve video akışları.
- [Çok sahneli Wan 2.2 akışı (gist)](https://gist.github.com/tailot/af743f7db43bab93f1006aab0304a13b) — her sahne bir öncekinin son karesinden başlıyor, sonra birleştiriyor. Bizim "Extend" ile yaptığımız devam klibi mantığının aynısı; scroll hikâyeleri için ilginç.
- [Adım adım rehber: ComfyUI + Wan 2.2](https://papayabytes.substack.com/p/guide-comfyui-and-wan-22-image-to)

## Nerede işe yarar?

- Bulunma filmindeki gibi **fotoğrafları hafifçe canlandırmak** (kişi nefes alır, ışık değişir) — Flow kredisi harcamadan.
- Humentis scroll hikâyelerinin **taslak denemeleri**: fikir tutuyor mu, önce ucuzca Wan'la dene, beğenilince Flow'da 1080p son hâlini üret.
- Yüz/kural kontrolü bizde kalır: prompt ve seed tekrar kullanılabilir ([[tutarlilik-rehberi]]).
