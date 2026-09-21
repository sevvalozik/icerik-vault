import html
OUT='/tmp/claude-0/-home-claude/d384ae64-59f3-5575-8c6d-77e47a430241/scratchpad/deck2/index.html'
css='''
:root{--ink:#F6EFE4;--dark:#3B2A22;--espresso:#1E1410;--gold:#D9B36C;--goldd:#86622A;--taupe:#6B564B;--soft:#CDBBA5;--sand:#EADBC8;--display:'Bodoni Moda',Georgia,'Times New Roman',serif;--text:'Jost','Helvetica Neue',Arial,sans-serif;color-scheme:dark}
*{box-sizing:border-box}
html,body{margin:0;height:100%;overflow:hidden}
body{background:#120C09;font-family:var(--text);color:var(--ink);-webkit-font-smoothing:antialiased;user-select:none}
#stage{position:absolute;left:50%;top:50%;width:1920px;height:1080px;transform-origin:0 0;overflow:hidden;background:var(--espresso)}
.slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .7s ease,visibility 0s .7s}
.slide.active{opacity:1;visibility:visible;transition:opacity .7s ease}
.slide *{position:absolute;margin:0}
.slide .flow{position:static}
.eyebrow{font-size:26px;letter-spacing:.3em;text-transform:uppercase;font-weight:500}
h1,h2,h3{font-family:var(--display);font-weight:500;margin:0}
.rise{opacity:0}
.slide.active .rise{animation:rise .95s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.slide.active .fade{animation:fadein 1.1s ease var(--d,0s) both}
.fade{opacity:0}
@keyframes rise{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@keyframes fadein{from{opacity:0}to{opacity:1}}
.dark{background:radial-gradient(ellipse at 28% 18%,#4A3226 0%,#2B1D16 55%,#1E1410 100%)}
.cream{background:radial-gradient(ellipse at 78% 12%,#FCF8F0 0%,#F6EFE4 45%,#EADBC8 100%)}
.sandbg{background:#EADBC8}
.m{cursor:pointer;overflow:hidden;border-radius:28px;border:1px solid var(--gold);background:#000}
.m video,.m img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s ease}
.m:hover video,.m:hover img{transform:scale(1.03)}
.badge{left:14px;bottom:14px;font-size:22px;letter-spacing:.08em;padding:8px 16px;border-radius:99px;background:rgba(30,20,16,.72);color:var(--ink);backdrop-filter:blur(6px);display:flex;align-items:center;gap:8px}
.badge svg{position:static;width:16px;height:16px;fill:var(--gold)}
.cap{font-size:30px}
.cap b{position:static;display:block;font-weight:400;color:var(--gold);font-size:24px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:4px}
.calcell{border-radius:12px;padding:12px 16px;position:relative;transition:filter .45s ease,box-shadow .3s ease}
.slide .calcell.flow{position:relative}
.calcell.go{cursor:pointer}
.calcell.go:hover,.calcell.go:focus-visible{box-shadow:0 10px 30px rgba(59,42,34,.35);filter:brightness(1.08);outline:none}
.calcell .dot,.dot{position:absolute;right:12px;top:12px;width:14px;height:14px;border-radius:50%;background:#D9B36C;box-shadow:0 0 0 0 rgba(217,179,108,.7);animation:pulse 2.2s ease-out infinite}
.calcell[data-f=C] .dot{background:#3B2A22;box-shadow:0 0 0 0 rgba(59,42,34,.5)}
.calcell[data-s=rev] .dot{background:#C9A24E;opacity:.55;animation:none}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(217,179,108,.7)}70%{box-shadow:0 0 0 14px rgba(217,179,108,0)}100%{box-shadow:0 0 0 0 rgba(217,179,108,0)}}
.calgrid[data-f=R] .calcell:not([data-f=R]),.calgrid[data-f=C] .calcell:not([data-f=C]),.calgrid[data-f=S] .calcell:not([data-f=S]),.calgrid[data-f=ready] .calcell:not([data-s=ready]){filter:opacity(.14) grayscale(1)}
.chip{padding:10px 26px;border-radius:99px;border:1px solid var(--goldd);font-size:24px;letter-spacing:.06em;color:var(--dark);cursor:pointer;transition:background .3s,color .3s}
.chip:hover{background:rgba(217,179,108,.3)}
.chip[data-on]{background:var(--dark);color:var(--ink);border-color:var(--dark)}
.calcell p{position:static;font-size:24px;line-height:1.2}
.calcell .d{font-size:26px;font-weight:600}
#hud{position:absolute;left:0;right:0;bottom:0;height:8px;z-index:30;pointer-events:none}
#bar{position:absolute;left:0;bottom:0;height:3px;background:var(--gold);width:0;transition:width .5s ease}
#count{position:absolute;right:56px;bottom:34px;font-size:24px;letter-spacing:.14em;z-index:30;pointer-events:none;color:var(--soft)}
#stage.lt #count{color:var(--taupe)}
#hint{position:absolute;left:0;width:1920px;bottom:44px;text-align:center;font-size:22px;letter-spacing:.3em;text-transform:uppercase;color:rgba(234,219,200,.6);z-index:30;pointer-events:none;animation:fadein 2s ease 2.2s both}
#nav{position:fixed;inset:0;z-index:5}
#ov{position:fixed;inset:0;z-index:100;background:rgba(14,9,6,.95);display:flex;align-items:center;justify-content:center;padding:16px}
#ov[hidden]{display:none}
#ovin{display:flex;flex-direction:column;align-items:center;gap:16px}
#ov video,#ov img{background:#000;border-radius:18px;border:1px solid rgba(217,179,108,.4);max-width:calc(100vw - 32px);object-fit:contain}
#ov video.v9{height:min(86vh,880px);aspect-ratio:9/16}
#ov video.v16{width:min(92vw,1500px);max-height:80vh;aspect-ratio:16/9}
#ov img{max-height:84vh}
#ovcap{text-align:center;font-family:var(--display);font-size:28px}
#ovcap span{display:block;font-family:var(--text);font-size:13px;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
.obtn{position:absolute;width:48px;height:48px;border-radius:50%;border:1px solid rgba(217,179,108,.45);background:rgba(43,29,22,.85);color:var(--ink);font-size:22px;cursor:pointer;display:grid;place-items:center}
.obtn:hover,.obtn:focus-visible{border-color:var(--gold);outline:none}
#oc{top:16px;right:16px}#op{left:16px;top:50%;margin-top:-24px}#on{right:16px;top:50%;margin-top:-24px}
@media(prefers-reduced-motion:reduce){.rise,.fade{opacity:1!important;animation:none!important}.slide,.slide.active{transition:none}}
'''
def rise(d): return f' class="rise" style="--d:{d}s'
S=[]
# 1 cover
S.append('''<section class="slide dark" data-theme="dk" id="s1">
<video src="bg.mp4" poster="bg.jpg" muted loop playsinline preload="auto" data-auto style="left:0;top:0;width:1920px;height:1080px;object-fit:cover"></video>
<div style="left:56px;top:56px;width:1808px;height:968px;border:1px solid rgba(217,179,108,.55)"></div>
<div style="left:72px;top:72px;width:1776px;height:936px;border:1px solid rgba(217,179,108,.25)"></div>
<p class="eyebrow rise" style="--d:.2s;left:0;top:318px;width:1920px;text-align:center;letter-spacing:.5em;color:var(--gold);font-weight:400">NEFIN cosmetics</p>
<h1 class="rise" style="--d:.5s;left:0;top:382px;width:1920px;text-align:center;font-size:168px;line-height:1.05;letter-spacing:2px;color:var(--ink)">Aylık İçerik Planı</h1>
<div class="fade" style="--d:1.1s;left:640px;top:676px;width:290px;border-top:1px solid var(--gold)"></div>
<div class="fade" style="--d:1.1s;left:950px;top:669px;width:14px;height:14px;background:var(--gold);transform:rotate(45deg)"></div>
<div class="fade" style="--d:1.1s;left:990px;top:676px;width:290px;border-top:1px solid var(--gold)"></div>
<p class="rise" style="--d:1.3s;left:0;top:722px;width:1920px;text-align:center;font-size:30px;font-weight:300;letter-spacing:.26em;text-transform:uppercase;color:var(--sand)">Neler planladık · Neler hazırladık</p>
</section>''')
# 2 takvim
cal={1:('Tanışma','R'),3:('Bariyer','C'),5:('Tonik','R'),7:('Cilt testi','S'),8:('Nemlendirici','C'),10:('CC Krem','R'),12:('Göz serumu','C'),14:('Akne','R'),15:('Soru kutusu','S'),17:('Kolajen','C'),19:('Vitamin C','R'),21:('Leke','C'),22:('Rutin seçimi','S'),24:('Retinol','R'),26:('SPF 50+','C'),28:('Temizleme','R'),30:('Ay sonu','R')}
sty={'R':'background:#3B2A22;color:#F6EFE4','C':'background:#D9B36C;color:#3B2A22','S':'background:#FBF6EE;color:#3B2A22;border:2px solid #86622A'}
ready={5:('gold.mp4','video','9','Reels','Tonik'),8:('cream.mp4','video','16','Carousel','Yoğun Nemlendirici'),10:('cc.mp4','video','9','Reels','CC Krem'),17:('img_collagen.jpg','img','','Carousel','Kolajen'),19:('vitc.mp4','video','9','Reels','Vitamin C+ Serum'),24:('ret.mp4','video','9','Reels','Retinol Supreme'),26:('sun.mp4','video','16','Carousel','SPF 50+ Güneş Kremi'),28:('kopuk.mp4','video','9','Reels','Temizleyici Köpük')}
cells=''
hid=''
for d in range(1,31):
    if d in cal:
        n,f=cal[d]
        st='ready' if d in ready and d!=10 else ('rev' if d==10 else 'plan')
        op=f' data-open="{d}" role="button" tabindex="0"' if d in ready else ''
        dot='<span class="dot"></span>' if d in ready else ''
        cells+=f'<div class="calcell flow rise {"go" if d in ready else ""}" data-f="{f}" data-s="{st}"{op} style="--d:{0.25+d*0.04:.2f}s;{sty[f]}">{dot}<p class="d">{d}</p><p>{n}</p></div>'
    else:
        cells+=f'<div class="calcell flow rise" data-f="-" data-s="none" style="--d:{0.25+d*0.04:.2f}s;border:1px solid #DCCBB3"><p style="color:#A8927F">{d}</p></div>'
for d,(src,t,o,fmt,cap) in ready.items():
    hid+=f'<div class="m" hidden data-group="c" data-n="{d}" data-type="{t}" data-src="{src}" data-orient="{o}" data-day="{d}. gün · {fmt}" data-cap="{cap}"></div>'
chips=''.join(f'<span class="chip flow" data-k="{k}" {"data-on=1" if k=="all" else ""}>{l}</span>' for k,l in [('all','Tümü'),('R','Reels'),('C','Carousel'),('S','Stories'),('ready','Hazır')])
S.append(f'''<section class="slide cream" data-theme="lt" id="s2">
<h2 class="rise" style="left:128px;top:84px;font-size:96px;color:var(--dark);line-height:1.05">Aylık <i style="position:static;color:var(--goldd);font-weight:400">Takvim</i></h2>
<div class="fade" style="--d:.5s;left:960px;top:118px;width:832px;display:flex;gap:12px;justify-content:flex-end;position:absolute">{chips}</div>
<div class="calgrid" data-f="all" style="left:128px;top:236px;width:1664px;display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:132px;gap:12px;position:absolute">{cells}</div>
<p class="fade" style="--d:1.8s;left:128px;top:972px;width:1200px;font-size:24px;letter-spacing:.06em;color:var(--taupe)"><span class="dot" style="position:relative;display:inline-block;top:1px;margin-right:12px"></span>Hazır olanlara tıkla: büyür ve oynar</p>
{hid}
</section>''')
# 3 reels
reels=[('gold','5','Tonik','',''),('cc','10','CC Krem','',''),('vitc','19','Vitamin C+ Serum','',''),('ret','24','Retinol Supreme','','Sessiz klip')]
reels2=[('kopuk','28','Temizleyici Köpük','',''),('dokusu','28','Köpük dokusu','',''),('drop','','Altın serum damlası','','')]
reels3=[('vitc2','19','Vitamin C+ Serum','',''),('cilt','','Güneşte cilt','','')]
play='<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg>'
def phones(lst,base):
    ph=''
    for i,(k,d,n,hk,tag) in enumerate(lst):
        x=128+i*340
        lab=f'<b>{d}. gün</b>' if d else '<b>Yeni</b>'
        ph+=f'<div class="m rise" data-group="r" data-type="video" data-src="{k}.mp4" data-orient="9" data-day="{(d+". gün · ") if d else ""}Reels" data-cap="{n}" role="button" tabindex="0" aria-label="{n} klibini sesli izle" style="--d:{base+i*0.15}s;left:{x}px;top:250px;width:300px;height:533px"><video src="{k}.mp4" poster="{k}.jpg" muted loop playsinline preload="metadata" data-auto></video><div class="badge">{play}{"Sessiz" if tag else "Sesli izle"}</div></div><p class="cap rise" style="--d:{base+0.1+i*0.15}s;left:{x}px;top:806px;width:300px">{lab}{n}</p>'
    return ph
pend=[('1','Marka tanışma'),('14','Akne'),('30','Ay sonu rutin')]
pl='<p class="eyebrow rise" style="--d:1s;left:1528px;top:250px;width:264px;font-size:24px;color:var(--gold)">Sırada</p>'
for i,(a,b) in enumerate(pend):
    pl+=f'<p class="rise" style="--d:{1.1+i*0.1}s;left:1528px;top:{312+i*72}px;width:280px;font-size:27px;font-weight:300;color:var(--sand)"><span style="position:static;color:var(--gold)">{a}.</span>&nbsp; {b}</p>'
S.append(f'''<section class="slide dark" data-theme="dk" id="s3">
<h2 class="rise" style="left:124px;top:84px;width:900px;font-size:120px;line-height:1.05;color:var(--ink)"><i style="position:static;color:var(--gold);font-weight:400">8</i> Reels</h2>
<p class="fade" style="--d:.6s;left:1092px;top:150px;width:700px;text-align:right;font-size:28px;font-weight:300;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)">Hazırlananlar · 1 / 2</p>
{phones(reels,0.4)}{pl}
<p class="fade" style="--d:1.6s;left:128px;top:900px;width:1100px;font-size:26px;letter-spacing:.06em;color:var(--soft)">Bir Reels'e tıkla: büyür ve sesiyle oynar</p>
</section>''')
S.append(f'''<section class="slide dark" data-theme="dk" id="s3b">
<h2 class="rise" style="left:124px;top:84px;width:1200px;font-size:120px;line-height:1.05;color:var(--ink)">Yeni <i style="position:static;color:var(--gold);font-weight:400">Reels</i></h2>
<p class="fade" style="--d:.6s;left:1092px;top:150px;width:700px;text-align:right;font-size:28px;font-weight:300;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)">Hazırlananlar · 2 / 2</p>
{phones(reels2+reels3,0.4)}
<p class="fade" style="--d:1.6s;left:128px;top:900px;width:1100px;font-size:26px;letter-spacing:.06em;color:var(--soft)">Bir Reels'e tıkla: büyür ve sesiyle oynar</p>
</section>''')
# 4 gorseller
def gallery(sid,title,items,cols=3,H=310,note='Bir görsele tıkla: büyür',contain=False):
    X0=700;W=1092;gap=20;w=(W-gap*(cols-1))/cols;gh=''
    for idx,(k,dd,nm) in enumerate(items):
        src=f'img_{k}.jpg' if k=='collagen' else f'{k}.jpg'
        r,c=divmod(idx,cols);x=round(X0+c*(w+gap));y=200+r*(H+100);ww=round(w)
        cap=(dd+' · ' if dd else '')+nm
        lab=(f'<b style="color:#86622A">{dd}</b>' if dd else '')+nm
        fit='contain' if contain else 'cover'
        pos='33% center' if k=='n_orange' else 'center'
        bg='background:#F4EBDD;' if contain else ''
        gh+=f'<div class="m rise" data-group="g" data-type="img" data-src="{src}" data-day="Hazır görsel" data-cap="{cap}" role="button" tabindex="0" style="--d:{0.3+idx*0.12:.2f}s;left:{x}px;top:{y}px;width:{ww}px;height:{H}px;border-color:#86622A;{bg}"><img src="{src}" alt="{cap}" style="object-fit:{fit};object-position:{pos}"></div><p class="cap rise" style="--d:{0.4+idx*0.12:.2f}s;left:{x}px;top:{y+H+12}px;width:{ww}px;font-size:26px;line-height:1.15;color:var(--dark)">{lab}</p>'
    S.append(f'''<section class="slide sandbg" data-theme="lt" id="{sid}">
<h2 class="rise" style="left:128px;top:300px;width:540px;font-size:96px;line-height:1.05;color:var(--dark)">{title}</h2>
<div class="fade" style="--d:.7s;left:128px;top:620px;width:120px;border-top:1px solid var(--goldd)"></div>
<p class="fade" style="--d:.9s;left:128px;top:650px;width:500px;font-size:28px;letter-spacing:.06em;color:var(--taupe)">{note}</p>
{gh}
</section>''')
GI='<i style="position:static;color:var(--goldd);font-weight:400">'
gallery('s4',GI+'Ürün</i><br>görselleri',[('n_orange','19. gün','Vitamin C'),('n_cream','8. gün','Nemlendirici'),('n_serum','','Vitamin C+ Serum'),('collagen','17. gün','Kolajen'),('n_group','','Ürün gamı'),('n_hand','','Krem'),('p_sun','26. gün','SPF 50+ Güneş')],cols=4,H=320,note='1 / 2  ·  Bir görsele tıkla: büyür')
gallery('s4d',GI+'Ürün</i><br>görselleri',[('p_tray','','Nemlendirici & Tonik'),('p_linen','','Nemlendirici'),('p_cc','10. gün','CC Krem'),('p_hands','','Nemlendirici'),('p_foamwet','28. gün','Temizleme'),('p_foampink','28. gün','Temizleme'),('p_dropper','','Serum'),('p_eye','12. gün','Göz serumu')],cols=4,H=320,note='2 / 2  ·  Bir görsele tıkla: büyür')
gallery('s4b',GI+'Bilgi</i><br>görselleri',[('c_serum','','Vitamin C+ Serum'),('c_cream','','Nem ve bariyer'),('c_blemish','','Leke bakımı'),('c_tubes1','5. gün','Tonik'),('c_tubes2','24. gün','Retinol'),('c_foundation','10. gün','CC Krem')],contain=True)
gallery('s4c',GI+'Doku</i><br>ve his',[('n_gold','5. gün','Tonik'),('c_foam2','28. gün','Temizleme'),('c_woman','28. gün','Temizleme'),('c_foam1','28. gün','Temizleme'),('c_gel','','Serum dokusu')])
# 5 klipler
S.append(f'''<section class="slide dark" data-theme="dk" id="s5">
<p class="eyebrow rise" style="left:128px;top:110px;width:900px;color:var(--gold)">Carousel klipleri</p>
<div class="m rise" data-group="k" data-type="video" data-src="cream.mp4" data-orient="16" data-day="8. gün · Carousel" data-cap="Yoğun Nemlendirici" role="button" tabindex="0" style="--d:.3s;left:128px;top:250px;width:800px;height:450px"><video src="cream.mp4" poster="cream.jpg" muted loop playsinline preload="metadata" data-auto></video><div class="badge">{play}Sesli izle</div></div>
<div class="m rise" data-group="k" data-type="video" data-src="sun.mp4" data-orient="16" data-day="26. gün · Carousel" data-cap="SPF 50+ Güneş Kremi" role="button" tabindex="0" style="--d:.5s;left:992px;top:250px;width:800px;height:450px"><video src="sun.mp4" poster="sun.jpg" muted loop playsinline preload="metadata" data-auto></video><div class="badge">{play}Sesli izle</div></div>
<p class="cap rise" style="--d:.5s;left:128px;top:730px;width:800px;font-family:var(--display);font-size:44px;color:var(--ink)"><b style="font-family:var(--text);font-size:28px">8. gün</b><br>Yoğun Nemlendirici</p>
<p class="cap rise" style="--d:.7s;left:992px;top:730px;width:800px;font-family:var(--display);font-size:44px;color:var(--ink)"><b style="font-family:var(--text);font-size:28px">26. gün</b><br>SPF 50+ Güneş Kremi</p>
</section>''')
# 7 kapanis
S.append(f'''<section class="slide dark" data-theme="dk" id="s7">
<video src="bg.mp4" poster="bg.jpg" muted loop playsinline preload="metadata" data-auto style="left:0;top:0;width:1920px;height:1080px;object-fit:cover"></video>
<div style="left:56px;top:56px;width:1808px;height:968px;border:1px solid rgba(217,179,108,.55)"></div>
<div style="left:72px;top:72px;width:1776px;height:936px;border:1px solid rgba(217,179,108,.25)"></div>
<p class="eyebrow rise" style="--d:.2s;left:0;top:340px;width:1920px;text-align:center;letter-spacing:.5em;color:var(--gold);font-weight:400">NEFIN cosmetics</p>
<h1 class="rise" style="--d:.5s;left:0;top:404px;width:1920px;text-align:center;font-size:190px;line-height:1.05;letter-spacing:2px;color:var(--ink)">Teşekkürler</h1>
<div class="fade" style="--d:1.1s;left:640px;top:690px;width:290px;border-top:1px solid var(--gold)"></div>
<div class="fade" style="--d:1.1s;left:950px;top:683px;width:14px;height:14px;background:var(--gold);transform:rotate(45deg)"></div>
<div class="fade" style="--d:1.1s;left:990px;top:690px;width:290px;border-top:1px solid var(--gold)"></div>
<p class="rise" style="--d:1.3s;left:0;top:736px;width:1920px;text-align:center;font-size:30px;font-weight:300;letter-spacing:.26em;text-transform:uppercase;color:var(--sand)">Sorular · Görüşler</p>
</section>''')
N=len(S)
js='''
var stage=document.getElementById('stage'),slides=[].slice.call(document.querySelectorAll('.slide')),cur=0,N=slides.length;
function fit(){var s=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform='translate('+(-960*s)+'px,'+(-540*s)+'px) scale('+s+')';}
addEventListener('resize',fit);fit();
function setActive(i){cur=Math.max(0,Math.min(N-1,i));slides.forEach(function(s,k){var on=k===cur;if(on){s.classList.add('active')}else{s.classList.remove('active')}
 [].forEach.call(s.querySelectorAll('video[data-auto]'),function(v){if(on){var p=v.play();if(p&&p.catch)p.catch(function(){})}else{v.pause()}});});
 stage.className=slides[cur].getAttribute('data-theme')==='lt'?'lt':'';
 document.getElementById('bar').style.width=((cur+1)/N*100)+'%';document.getElementById('count').textContent=(cur+1)+' / '+N;
 document.getElementById('hint').style.display=cur===0?'block':'none';
 try{history.replaceState(null,'','#'+(cur+1))}catch(e){}}
var ov=document.getElementById('ov'),ovin=document.getElementById('ovin'),ovcap=document.getElementById('ovcap'),items=[],oi=0,lastEl=null;
function media(i){oi=(i+items.length)%items.length;var it=items[oi],d=it.dataset;var old=ovin.querySelector('video,img');if(old){if(old.pause)old.pause();old.remove()}
 var el;if(d.type==='video'){el=document.createElement('video');el.src=d.src;el.controls=true;el.loop=true;el.setAttribute('playsinline','');el.className=d.orient==='9'?'v9':'v16';el.muted=false;el.volume=1;}else{el=document.createElement('img');el.src=d.src;el.alt=d.cap;}
 ovin.insertBefore(el,ovcap);ovcap.innerHTML='<span>'+d.day+'</span>'+d.cap;if(el.play){var p=el.play();if(p&&p.catch)p.catch(function(){})}}
function openOv(el){lastEl=el;var g=el.dataset.group;items=[].filter.call(slides[cur].querySelectorAll('.m'),function(x){return x.dataset.group===g});
 [].forEach.call(slides[cur].querySelectorAll('video[data-auto]'),function(v){v.pause()});
 ov.hidden=false;media(items.indexOf(el));document.getElementById('oc').focus({preventScroll:true});}
function closeOv(){var v=ovin.querySelector('video');if(v){v.pause();v.removeAttribute('src');v.load()}var o=ovin.querySelector('video,img');if(o)o.remove();ov.hidden=true;
 [].forEach.call(slides[cur].querySelectorAll('video[data-auto]'),function(v){var p=v.play();if(p&&p.catch)p.catch(function(){})});if(lastEl)lastEl.focus({preventScroll:true});}
stage.addEventListener('click',function(e){var ch=e.target.closest('.chip');if(ch){var g=ch.parentNode.parentNode.querySelector('.calgrid');g.dataset.f=ch.dataset.k;[].forEach.call(ch.parentNode.children,function(c){c.removeAttribute('data-on')});ch.setAttribute('data-on','1');return}var ok=e.target.closest('[data-open]');if(ok){var t=slides[cur].querySelector('.m[data-group="c"][data-day^="'+ok.dataset.open+'."]');if(t)openOv(t);return}if(e.target.closest('.calgrid'))return;var m=e.target.closest('.m');if(m){openOv(m);return}var r=stage.getBoundingClientRect();(e.clientX<r.left+r.width*0.22)?setActive(cur-1):setActive(cur+1);});
stage.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('m')){e.preventDefault();e.stopPropagation();openOv(e.target)}});
document.getElementById('oc').onclick=closeOv;document.getElementById('op').onclick=function(){media(oi-1)};document.getElementById('on').onclick=function(){media(oi+1)};
ov.addEventListener('click',function(e){if(e.target===ov)closeOv()});
addEventListener('keydown',function(e){if(!ov.hidden){if(e.key==='Escape')closeOv();else if(e.key==='ArrowLeft')media(oi-1);else if(e.key==='ArrowRight')media(oi+1);return}
 if(e.target.classList&&e.target.classList.contains('m')&&(e.key==='Enter'||e.key===' '))return;
 if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'||e.key==='Enter'){e.preventDefault();setActive(cur+1)}
 else if(e.key==='ArrowLeft'||e.key==='PageUp'||e.key==='Backspace'){e.preventDefault();setActive(cur-1)}
 else if(e.key==='Home')setActive(0);else if(e.key==='End')setActive(N-1);
 else if(e.key==='f'||e.key==='F'){if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()}});
var h=parseInt((location.hash||'').slice(1),10);setActive(h>=1&&h<=N?h-1:0);
'''
page=f'''<title>Nefin Aylık Plan</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400..700;1,400..700&family=Jost:wght@300;400;500;600&display=swap">
<style>{css}</style>
<div id="stage">
{chr(10).join(S)}
<div id="hud"><div id="bar"></div></div><div id="count"></div><p id="hint" style="position:absolute">Ok tuşları veya tıklama ile ilerle</p>
</div>
<div id="ov" hidden role="dialog" aria-modal="true" aria-label="Medya oynatıcı"><button class="obtn" id="oc" aria-label="Kapat">&#10005;</button><button class="obtn" id="op" aria-label="Önceki">&#8249;</button><button class="obtn" id="on" aria-label="Sonraki">&#8250;</button><div id="ovin"><div id="ovcap"></div></div></div>
<script>{js}</script>
'''
open(OUT,'w').write(page); print(len(page))
