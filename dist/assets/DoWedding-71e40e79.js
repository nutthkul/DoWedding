import{_ as S,S as I,a as z,V as $,A as N,P as B,N as M,b as W,c as H,d as v}from"./VImg-a1e0764f.js";import{i as k,u as R,r as w,w as K,a as O,o as V,b as F,c as G,g as P,d as y,e as f,f as b,h as _,j as s,k as g,l as h,m,n as c,p as q,F as Y,q as l,s as J,t as X}from"./index-f5a918fa.js";let Q;function Z(){return Q}function ss(e){return typeof e=="function"?e():R(e)}function u(e,a=""){if(e instanceof Promise)return e;const n=ss(e);return!e||!n?n:Array.isArray(n)?n.map(o=>u(o,a)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,R(i)]:[o,u(i,o)])):n}const es="usehead",j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U="__unhead_injection_handler__";function ts(){if(U in j)return j[U]();const e=k(es);return e||Z()}function ns(e,a={}){const n=a.head||ts();if(n)return n.ssr?n.push(e,a):os(n,e,a)}function os(e,a,n={}){const o=w(!1),i=w({});K(()=>{i.value=o.value?{}:u(a)});const r=e.push(i.value,n);return O(i,d=>{r.patch(d)}),P()&&(V(()=>{r.dispose()}),F(()=>{o.value=!0}),G(()=>{o.value=!1})),r}const as="/assets/33-2f202e22.jpeg",is="/assets/iconWedding1-3f28a5b4.png",cs="/assets/iconWedding2-d8fff2dd.png",ls="/assets/iconWedding3-05aaba6e.png",rs="/assets/iconWedding4-4fcc3aae.png",ds="/assets/22-4ad1d5d2.jpeg",L="/assets/THEME3-9614c450.png",D="/assets/THEME1-b41b8c74.png",E="/assets/THEME2-6af035f1.png",A="/assets/THEME4-4cd984f8.png",x="/assets/THEME5-62205f25.png",fs="/assets/Vanueu-f795fd49.png",ps="/assets/27crop-ea163fb8.jpeg",hs="/assets/pp_qr-f5abf811.png";const _s={components:{Swiper:I,SwiperSlide:z},setup(){const e=Array.from({length:1e3}).map((a,n)=>`Slide ${n+1}`);return ns({title:"Donut & Nat",meta:[{name:"Wedding",content:"this about wedding page",image:"@/assets/slidePic/1.jpeg"}]}),{slides:e,Virtual:$,modules:[N,B,M]}},data(){return{show:!1,countdown:"",dayCount:"",hrCount:"",minCount:"",secCount:"",currentIndex:0,images:[{src:new URL("/assets/1-12d9bcf2.jpeg",self.location).href},{src:new URL("/assets/2-e178dedf.jpeg",self.location).href},{src:new URL("/assets/3-92054df0.jpeg",self.location).href},{src:new URL("/assets/4-0cc54a9b.jpeg",self.location).href},{src:new URL("/assets/5-8cc86116.jpeg",self.location).href},{src:new URL("/assets/6-a5ce264c.jpeg",self.location).href},{src:new URL("/assets/7-4a6ef4e6.jpeg",self.location).href},{src:new URL("/assets/8-dc6a2993.jpeg",self.location).href},{src:new URL("/assets/9-4ab2c080.jpeg",self.location).href},{src:new URL("/assets/10-b860a26a.jpeg",self.location).href},{src:new URL("/assets/11-43c8ee65.jpeg",self.location).href},{src:new URL("/assets/12-cd0b811e.jpeg",self.location).href},{src:new URL("/assets/13-4cebd850.jpeg",self.location).href},{src:new URL("/assets/14-48f0fe34.jpeg",self.location).href},{src:new URL("/assets/15-c5e3809a.jpeg",self.location).href},{src:new URL("/assets/16-b1734d54.jpeg",self.location).href},{src:new URL("/assets/17-e235e8b7.jpeg",self.location).href},{src:new URL("/assets/18-8017ec84.jpeg",self.location).href},{src:new URL("/assets/19-0b19c9ff.jpeg",self.location).href},{src:new URL("/assets/20-18c415b3.jpeg",self.location).href},{src:new URL("/assets/21-bbafbf11.jpeg",self.location).href},{src:new URL("/assets/22-4ad1d5d2.jpeg",self.location).href},{src:new URL("/assets/23-c50f59d5.jpeg",self.location).href},{src:new URL("/assets/25-7ebef7a5.jpeg",self.location).href},{src:new URL("/assets/26-7150ce4d.jpeg",self.location).href},{src:new URL("/assets/27-975b1152.jpeg",self.location).href},{src:new URL("/assets/28-faa36fc1.jpeg",self.location).href},{src:new URL("/assets/29-cb2bda7d.jpeg",self.location).href},{src:new URL("/assets/30-1d3325c8.jpeg",self.location).href},{src:new URL("/assets/31-b437dd93.jpeg",self.location).href},{src:new URL("/assets/32-5e4416f4.jpeg",self.location).href},{src:new URL("/assets/33-2f202e22.jpeg",self.location).href},{src:new URL("/assets/34-b0320fe4.jpeg",self.location).href},{src:new URL("/assets/35-61d98535.jpeg",self.location).href},{src:new URL("/assets/36-e5420aea.jpeg",self.location).href},{src:new URL("/assets/37-21bd9d5c.jpeg",self.location).href},{src:new URL("/assets/38-fb4abbab.jpeg",self.location).href},{src:new URL("/assets/39-b125ab61.jpeg",self.location).href},{src:new URL("/assets/40-8b3e6126.jpeg",self.location).href},{src:new URL("/assets/41-f0e0fc96.jpeg",self.location).href},{src:new URL("/assets/42-2f34c023.jpeg",self.location).href},{src:new URL("/assets/43-d3e54809.jpeg",self.location).href},{src:new URL("/assets/44-150a2923.jpeg",self.location).href},{src:new URL("/assets/45-7c464ccd.jpeg",self.location).href},{src:new URL("/assets/46-9357e19a.jpeg",self.location).href},{src:new URL("/assets/47-97871924.jpeg",self.location).href},{src:new URL("/assets/48-f663b837.jpeg",self.location).href},{src:new URL("/assets/49-1debf343.jpeg",self.location).href}]}},async created(){this.countDownTime()},mounted(){},methods:{countDownTime(){const e=new Date("2024-06-02T08:00:00").getTime(),a=setInterval(()=>{const n=new Date().getTime(),o=e-n,i=Math.floor(o/(1e3*60*60*24)),r=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(o%(1e3*60*60)/(1e3*60)),d=Math.floor(o%(1e3*60)/1e3);this.countdown=`${i}d ${r}h ${p}m ${d}s`,this.dayCount=i,this.hrCount=r,this.minCount=p,this.secCount=d,o<0&&(clearInterval(a),this.countdown="Congratulations")},1e3)}}},t=e=>(J("data-v-21af35b1"),e=e(),X(),e),gs=t(()=>s("div",{class:"wrapper_presence"},[s("div",{class:"request_txt"},"With joyful hearts we invite you"),s("br"),s("div",{class:"celeb_txt"},"TO CELEBRATE OUR WEDDING"),s("div",{class:"june02_txt"},"02 JUNE 2024"),s("br"),s("br"),s("div",{class:"chapter_txt"},"#DoNatNewChapter")],-1)),ms=t(()=>s("div",{class:"wrapper_profile"},[s("img",{src:as}),s("div",{class:"nickname1_txtImg"},[s("div",{style:{"font-size":"9vw","font-weight":"500",color:"transparent","text-shadow":"0 0 2px #f6f6f6"}}," Doughnut ")]),s("div",{class:"nickname2_txtImg"},[s("div",{style:{"font-size":"9vw","font-weight":"500",color:"transparent","text-shadow":"0 0 2px #f6f6f6"}}," Nat ")]),s("div",{class:"doughnut_txtImg"},[s("div",{style:{"font-size":"4vw"}},"Nutthapon"),s("div",{style:{"font-size":"4vw"}},"Kulkrittayarat")]),s("div",{class:"nat_txtImg"},[s("div",{style:{"font-size":"4vw"}},"Nutchita"),s("div",{style:{"font-size":"4vw"}},"Saksupawattanakul")])],-1)),us=t(()=>s("div",{class:"wrapper_presence"},[s("div",{class:"timing_txt"},"TIMING OF THE DAY"),s("br"),s("div",{class:"celeb_txt"},[l("OUR SPECIAL DAY’S "),s("br"),l("SCHEDULE")]),s("div",{class:"wrapper_grid"},[s("div",{class:"img_icon"},[s("img",{src:is}),s("br"),s("div",{class:"time_iconTxt"},"08.09 AM"),s("div",{class:"icon_txt"},[l(" Khan maak "),s("br"),l(" Processions ")])]),s("div",{class:"img_icon"},[s("img",{src:cs}),s("br"),s("div",{class:"time_iconTxt"},"09.09 AM"),s("div",{class:"icon_txt"},"The Engagement")]),s("div",{class:"img_icon"},[s("img",{src:ls}),s("br"),s("div",{class:"time_iconTxt"},"09.39 AM"),s("div",{class:"icon_txt"},"Tea Ceremony")]),s("div",{class:"img_icon"},[s("img",{src:rs}),s("br"),s("div",{class:"time_iconTxt"},"18.00 AM"),s("div",{class:"icon_txt"},"Wedding Ceremony")])])],-1)),vs={class:"img_dress"},ws=t(()=>s("img",{class:"img_bgDress",src:ds},null,-1)),ys={class:"wrapper_theme"},bs=t(()=>s("div",{class:"wedding_theme_txt"},"WEDDING THEME",-1)),js=t(()=>s("div",{class:"dress_code_txt"},"#DRESS CODE",-1)),Us={key:0,class:"grid_theme1"},Rs=t(()=>s("div",null,[s("img",{class:"img_theme",src:L}),s("br"),s("div",{class:"font_color"},"#A35105")],-1)),Ls=t(()=>s("div",null,[s("img",{class:"img_theme",src:D}),s("br"),s("div",{class:"font_color"},"#EDC796")],-1)),Ds=t(()=>s("div",null,[s("img",{class:"img_theme",src:E}),s("br"),s("div",{class:"font_color"},"#B9CFBA")],-1)),Es=[Rs,Ls,Ds],As={key:1,class:"grid_theme2"},xs=t(()=>s("div",null,[s("img",{class:"img_theme",src:A}),s("br"),s("div",{class:"font_color"},"#EBBCC4")],-1)),Ts=t(()=>s("div",null,[s("img",{class:"img_theme",src:x}),s("br"),s("div",{class:"font_color"},"#B52F35")],-1)),Cs=[xs,Ts],Ss={key:2,class:"grid_mobile"},Is=t(()=>s("div",null,[s("img",{class:"img_theme",src:L}),s("br"),s("div",{class:"font_color"},"#A35105")],-1)),zs=t(()=>s("div",null,[s("img",{class:"img_theme",src:D}),s("br"),s("div",{class:"font_color"},"#EDC796")],-1)),$s=t(()=>s("div",null,[s("img",{class:"img_theme",src:E}),s("br"),s("div",{class:"font_color"},"#B9CFBA")],-1)),Ns=t(()=>s("div",null,[s("img",{class:"img_theme",src:A}),s("br"),s("div",{class:"font_color"},"#EBBCC4")],-1)),Bs=t(()=>s("div",null,[s("img",{class:"img_theme",src:x}),s("br"),s("div",{class:"font_color"},"#B52F35")],-1)),Ms=[Is,zs,$s,Ns,Bs],Ws={class:"pa-10 pb-7 mb-1"},Hs=t(()=>s("br",null,null,-1)),ks={class:"mb-10"},Ks=["src"],Os={class:"mt-16"},Vs=t(()=>s("div",{class:"img_venue"},[s("img",{src:fs})],-1)),Fs=t(()=>s("br",null,null,-1)),Gs=t(()=>s("div",{class:"btn_google"},[s("button",{onclick:"window.open('https://maps.app.goo.gl/JNRwjb3ctpqVXBKK8?g_st=il', '_blank')"}," Open Google Map ")],-1)),Ps={class:"img_support"},qs=t(()=>s("img",{src:ps},null,-1)),Ys={class:"support_txtImg"},Js=t(()=>s("br",null,null,-1)),Xs=t(()=>s("div",{class:"mt-12"},[l(" With love, "),s("br"),l(" Doughnut & Nat ")],-1)),Qs=t(()=>s("br",null,null,-1)),Zs={class:"margin_qr"};function se(e,a,n,o,i,r){const p=y("swiper-slide"),d=y("swiper");return f(),b(W,{class:"align-center text-center fill-height bgColor"},{default:_(()=>[s("div",null,[g(v,{src:H,class:"mx-auto"})]),gs,ms,us,s("div",null,[s("div",vs,[ws,s("div",ys,[bs,js,e.$vuetify.display.smAndDown?m("",!0):(f(),h("div",Us,Es)),e.$vuetify.display.smAndDown?m("",!0):(f(),h("div",As,Cs)),e.$vuetify.display.smAndDown?(f(),h("div",Ss,Ms)):m("",!0)])])]),s("div",Ws,[s("span",{style:c([e.$vuetify.display.smAndDown?" font-size: 12px; font-weight: 400":" font-size: 25px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}])}," MEMORIES ",4),Hs,s("span",{style:c([e.$vuetify.display.smAndDown?" font-size: 25px; font-weight: 400":" font-size: 75px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}])},"OUR WEDDING GALLERY",4)]),s("div",ks,[g(d,{"slides-per-view":e.$vuetify.display.smAndDown?3:5,spaceBetween:e.$vuetify.display.smAndDown?15:30,centeredSlides:!1,autoplay:{delay:0,disableOnInteraction:!1},navigation:!1,modules:o.modules,class:"mySwiper wrapper_slide",speed:"2000"},{default:_(()=>[(f(!0),h(Y,null,q(i.images,(T,C)=>(f(),b(p,{key:C},{default:_(()=>[s("img",{class:"img_slide img_hover_zoom",src:T.src,style:c((e.$vuetify.display.smAndDown||e.$vuetify.display.mdAndDown,"width: 100%; height: auto"))},null,12,Ks)]),_:2},1024))),128))]),_:1},8,["slides-per-view","spaceBetween","modules"])]),s("div",Os,[s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 12px; font-weight: 400":" font-size: 25px; font-weight: 400",{"font-family":"Sree Krushnadevaraya","margin-top":"15%"}])}," WE CAN’T WAIT TO SEE YOU! ",4),s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 32px; font-weight: 400":" font-size: 75px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}])}," THE VENUE ",4),Vs,s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 14px; font-weight: 400":" font-size: 25px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}]),class:"mt-6"},[l(" Canegrowers Association of Region 6, Kamphaengphet "),Fs,l("สมาคมชาวไร่อ้อยเขต 6 กำแพงเพชร ")],4),Gs]),s("div",Ps,[qs,s("div",Ys,[s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 16px; font-weight: 400":" font-size: 40px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}])}," To our family and friends ",4),s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 12px; font-weight: 400":" font-size: 32px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}]),class:"mt-10"},[l(" Thank you for your love, support, and for being a part of our special day. We love you all dearly. "),Js,Xs,Qs,s("div",Zs,[s("div",{style:c([e.$vuetify.display.smAndDown?" font-size: 10px; font-weight: 400":" font-size: 25px; font-weight: 400",{"font-family":"Sree Krushnadevaraya"}])}," Join in congratulating ",4),g(v,{width:e.$vuetify.display.smAndDown?"25%":"30%",height:"auto",src:hs,cover:"",class:"mx-auto img_map1"},null,8,["width"])])],4)])])]),_:1})}const ne=S(_s,[["render",se],["__scopeId","data-v-21af35b1"]]);export{ne as default};