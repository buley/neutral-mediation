import{F as ao,G as oo,S as pt,i as gt,s as wt,e as s,t as _,c,a as r,h as E,d as o,b as e,H as p,g as _e,I as t,J as no,K as Za,k as A,m as x,f as z,r as De,o as ro,p as tt,q as lo,j as io,n as Oa,L as so,D as Pa,M as Ma,N as Va,x as At,y as xt,z as Ct,O as co,A as ja,B as Ya,P as Wa,C as yt,Q as ee,R as te,T as vt,U as eo,V as fo,W as uo,X as ho,Y as mo}from"../chunks/index-5575368d.js";import{p as vo}from"../chunks/phone-f0b0e6b3.js";const po=()=>{const f=ao("__svelte__");return{page:{subscribe:f.page.subscribe},navigating:{subscribe:f.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:f.navigating.subscribe}},session:f.session,updated:f.updated}},to={subscribe(f){return po().page.subscribe(f)}};var go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqJJREFUeNrsmL9OG0EQxs+GnqsjITkFdYiUKg1OS0PewPgJsDs67CfAPEHsNzBNpFScGyokTE3BoUip7w3CTDSWTof3dvYPnAPfT1qdOZ/3Zr6dnZklSQAAAAAAAAAAAADA+6LV1Iu/fD0c0aUnf85urn+OmrBjqyHnz+lySiOV0f2wu5f++X3/67VtaTcUAMfKe29WgFR5780KMF1zb/6eBBjSyEp/8+f+xpYKSlopje7/UtrYVrY5ShmkiTg5ncsezWl8o5KVb6jjHbpc0ejIrT7ZOq37zbZi3rNSgupIth5FMHa/NG9Bhi4jVZdOxfZgAaqhtOMSimLQJxorh/cNz64+shCFXO/46iDOjmtl0QhwIUomYtjMsqrfaRxwc+O5iiuBuhVxOFEuuFrUCDKTKEhLtoe3wuJYV16eV75jh4/E8deq5YWUzUuyZ74mD7AtmSZyWgH7t1dRuykK2ecznzzScnScHT4x7eMNgAW4sGV+1zLIKzwQx22rnZVyRC8gD4TOW8j+n5AYhZcAspfOHA4pz2quRMyPQOdD5+Xfjk29SyuC44koPTQIOZBGyqtlpnknNUfqgeP545kQ684Ct47Oc4iNTV+KAz5NztLkvDCWd7s0SbcvcRia2/aZHH58DkxJjbBFjBPkOgE+yslMq+6l7QEyNpNzhJZcfhP87lKU9sU3dRLkjP9gy/xkqLaZcskFQ0v4l+f9q3D+sykJti0hZgvdzGFVm3p2WHd6bVtWd2oJXXVYS5eWK8PfJWnmlrmmof8Rqks0jx4NTczVt9lgTZIaARaW1tOFu0jPaG1YxBBgaUkwsYz1FbUImaut2Lt5EglNaVOWP+378hgR8K/VNexVnw5v4vld3Spnhk4RAAAAAAAAAAAAAIAKTwIMAGat8b+xyT8+AAAAAElFTkSuQmCC",wo="/_app/immutable/assets/calendar-07d24ffd.svg";function Ha(f,{delay:a=0,duration:l=400,easing:m=oo}={}){const h=+getComputedStyle(f).opacity;return{delay:a,duration:l,easing:m,css:n=>`opacity: ${n*h}`}}function Ja(f){let a,l,m,h;return{c(){a=s("p"),l=_("menu"),this.h()},l(n){a=c(n,"P",{class:!0,style:!0});var i=r(a);l=E(i,"menu"),i.forEach(o),this.h()},h(){e(a,"class","nav-text svelte-r5q87o"),p(a,"left",f[4])},m(n,i){_e(n,a,i),t(a,l),h=!0},p(n,i){f=n,i&16&&p(a,"left",f[4])},i(n){h||(no(()=>{m||(m=Za(a,Ha,{duration:f[9]*1e3},!0)),m.run(1)}),h=!0)},o(n){m||(m=Za(a,Ha,{duration:f[9]*1e3},!1)),m.run(0),h=!1},d(n){n&&o(a),n&&m&&m.end()}}}function bo(f){let a,l,m,h,n=f[3]==!1&&Ja(f);return{c(){a=s("div"),l=s("button"),m=A(),n&&n.c(),this.h()},l(i){a=c(i,"DIV",{style:!0});var u=r(a);l=c(u,"BUTTON",{type:!0,class:!0}),r(l).forEach(o),m=x(u),n&&n.l(u),u.forEach(o),this.h()},h(){e(l,"type","button"),e(l,"class","nav-button svelte-r5q87o"),p(l,"open",f[3]),p(l,"left",f[4]),z(a,"--openButtonColor",f[5]),z(a,"--closeButtonColor",f[6]),z(a,"--buttonTransitionTime",f[0]),z(a,"--zIndexSize",f[7]),z(a,"--buttonTopSize",f[1]),z(a,"--textTopSize",f[8]),z(a,"--buttonSideSize",f[2])},m(i,u){_e(i,a,u),t(a,l),t(a,m),n&&n.m(a,null),h=!0},p(i,[u]){u&8&&p(l,"open",i[3]),u&16&&p(l,"left",i[4]),i[3]==!1?n?(n.p(i,u),u&8&&De(n,1)):(n=Ja(i),n.c(),De(n,1),n.m(a,null)):n&&(ro(),tt(n,1,1,()=>{n=null}),lo()),(!h||u&32)&&z(a,"--openButtonColor",i[5]),(!h||u&64)&&z(a,"--closeButtonColor",i[6]),(!h||u&1)&&z(a,"--buttonTransitionTime",i[0]),(!h||u&128)&&z(a,"--zIndexSize",i[7]),(!h||u&2)&&z(a,"--buttonTopSize",i[1]),(!h||u&256)&&z(a,"--textTopSize",i[8]),(!h||u&4)&&z(a,"--buttonSideSize",i[2])},i(i){h||(De(n),h=!0)},o(i){tt(n),h=!1},d(i){i&&o(a),n&&n.d()}}}function Ao(f,a,l){let{open:m}=a,{left:h}=a,{openButtonColor:n}=a,{closeButtonColor:i}=a,{buttonTransitionTime:u}=a,v=Number(u),{zIndexSize:y}=a,{buttonTopSize:d}=a,{buttonSideSize:k}=a,U=Number(d)-5;return u=u+"s",d=d+"px",k=k+"px",U=U+"px",f.$$set=C=>{"open"in C&&l(3,m=C.open),"left"in C&&l(4,h=C.left),"openButtonColor"in C&&l(5,n=C.openButtonColor),"closeButtonColor"in C&&l(6,i=C.closeButtonColor),"buttonTransitionTime"in C&&l(0,u=C.buttonTransitionTime),"zIndexSize"in C&&l(7,y=C.zIndexSize),"buttonTopSize"in C&&l(1,d=C.buttonTopSize),"buttonSideSize"in C&&l(2,k=C.buttonSideSize)},[u,d,k,m,h,n,i,y,U,v]}class xo extends pt{constructor(a){super(),gt(this,a,Ao,bo,wt,{open:3,left:4,openButtonColor:5,closeButtonColor:6,buttonTransitionTime:0,zIndexSize:7,buttonTopSize:1,buttonSideSize:2})}}function Xa(f,a,l){const m=f.slice();return m[7]=a[l].name,m[8]=a[l].url,m}function $a(f){let a,l,m=f[7]+"",h,n;return{c(){a=s("li"),l=s("a"),h=_(m),this.h()},l(i){a=c(i,"LI",{class:!0});var u=r(a);l=c(u,"A",{href:!0,class:!0});var v=r(l);h=E(v,m),v.forEach(o),u.forEach(o),this.h()},h(){e(l,"href",n=f[8]),e(l,"class","svelte-1sdhhd0"),e(a,"class","svelte-1sdhhd0")},m(i,u){_e(i,a,u),t(a,l),t(l,h)},p(i,u){u&4&&m!==(m=i[7]+"")&&io(h,m),u&4&&n!==(n=i[8])&&e(l,"href",n)},d(i){i&&o(a)}}}function Co(f){let a,l,m,h=f[2],n=[];for(let i=0;i<h.length;i+=1)n[i]=$a(Xa(f,h,i));return{c(){a=s("div"),l=s("nav"),m=s("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){a=c(i,"DIV",{style:!0});var u=r(a);l=c(u,"NAV",{class:!0});var v=r(l);m=c(v,"UL",{class:!0});var y=r(m);for(let d=0;d<n.length;d+=1)n[d].l(y);y.forEach(o),v.forEach(o),u.forEach(o),this.h()},h(){e(m,"class","svelte-1sdhhd0"),e(l,"class","svelte-1sdhhd0"),p(l,"open",f[1]),z(a,"--pcNaviColor",f[3]),z(a,"--smNaviColor",f[4]),z(a,"--backgroundColor",f[5]),z(a,"--naviFadeTime",f[0]),z(a,"--navizIndexSize",f[6])},m(i,u){_e(i,a,u),t(a,l),t(l,m);for(let v=0;v<n.length;v+=1)n[v].m(m,null)},p(i,[u]){if(u&4){h=i[2];let v;for(v=0;v<h.length;v+=1){const y=Xa(i,h,v);n[v]?n[v].p(y,u):(n[v]=$a(y),n[v].c(),n[v].m(m,null))}for(;v<n.length;v+=1)n[v].d(1);n.length=h.length}u&2&&p(l,"open",i[1]),u&8&&z(a,"--pcNaviColor",i[3]),u&16&&z(a,"--smNaviColor",i[4]),u&32&&z(a,"--backgroundColor",i[5]),u&1&&z(a,"--naviFadeTime",i[0]),u&64&&z(a,"--navizIndexSize",i[6])},i:Oa,o:Oa,d(i){i&&o(a),so(n,i)}}}function yo(f,a,l){let{open:m}=a,{menu_list:h}=a,{pcNaviColor:n}=a,{smNaviColor:i}=a,{backgroundColor:u}=a,{naviFadeTime:v}=a,{navizIndexSize:y}=a;return v=v+"s",f.$$set=d=>{"open"in d&&l(1,m=d.open),"menu_list"in d&&l(2,h=d.menu_list),"pcNaviColor"in d&&l(3,n=d.pcNaviColor),"smNaviColor"in d&&l(4,i=d.smNaviColor),"backgroundColor"in d&&l(5,u=d.backgroundColor),"naviFadeTime"in d&&l(0,v=d.naviFadeTime),"navizIndexSize"in d&&l(6,y=d.navizIndexSize)},[v,m,h,n,i,u,y]}class ko extends pt{constructor(a){super(),gt(this,a,yo,Co,wt,{open:1,menu_list:2,pcNaviColor:3,smNaviColor:4,backgroundColor:5,naviFadeTime:0,navizIndexSize:6})}}function _o(f){let a,l,m,h,n,i,u,v,y;const d=[f[2]];function k(g){f[17](g)}let U={};for(let g=0;g<d.length;g+=1)U=Pa(U,d[g]);f[1]!==void 0&&(U.open=f[1]),l=new xo({props:U}),Ma.push(()=>Va(l,"open",k));const C=[{menu_list:f[0]},f[3]];function R(g){f[18](g)}let S={};for(let g=0;g<C.length;g+=1)S=Pa(S,C[g]);return f[1]!==void 0&&(S.open=f[1]),n=new ko({props:S}),Ma.push(()=>Va(n,"open",R)),{c(){a=s("div"),At(l.$$.fragment),h=A(),At(n.$$.fragment)},l(g){a=c(g,"DIV",{});var I=r(a);xt(l.$$.fragment,I),h=x(I),xt(n.$$.fragment,I),I.forEach(o)},m(g,I){_e(g,a,I),Ct(l,a,null),t(a,h),Ct(n,a,null),u=!0,v||(y=co(a,"click",f[4]),v=!0)},p(g,[I]){const F=I&4?ja(d,[Ya(g[2])]):{};!m&&I&2&&(m=!0,F.open=g[1],Wa(()=>m=!1)),l.$set(F);const Q=I&9?ja(C,[I&1&&{menu_list:g[0]},I&8&&Ya(g[3])]):{};!i&&I&2&&(i=!0,Q.open=g[1],Wa(()=>i=!1)),n.$set(Q)},i(g){u||(De(l.$$.fragment,g),De(n.$$.fragment,g),u=!0)},o(g){tt(l.$$.fragment,g),tt(n.$$.fragment,g),u=!1},d(g){g&&o(a),yt(l),yt(n),v=!1,y()}}}function Eo(f,a,l){let{menu_list:m}=a,{buttonTopSize:h="15"}=a,{buttonSideSize:n="10"}=a,{left:i=!1}=a,{openButtonColor:u="#444444"}=a,{closeButtonColor:v="#EDEDED"}=a,{buttonTransitionTime:y="0.3"}=a,{zIndexSize:d="100"}=a,{pcNaviColor:k="#444444"}=a,{smNaviColor:U="#EDEDED"}=a,{backgroundColor:C="#171717"}=a,{naviFadeTime:R="0.5"}=a,{navizIndexSize:S=Number(d)-1}=a,g={left:i,buttonTopSize:h,openButtonColor:u,closeButtonColor:v,buttonTransitionTime:y,zIndexSize:d,buttonTopSize:h,buttonSideSize:n},I={pcNaviColor:k,smNaviColor:U,backgroundColor:C,naviFadeTime:R,navizIndexSize:S},F=!1;function Q(){l(1,F=!F)}function ae(w){F=w,l(1,F)}function Ee(w){F=w,l(1,F)}return f.$$set=w=>{"menu_list"in w&&l(0,m=w.menu_list),"buttonTopSize"in w&&l(5,h=w.buttonTopSize),"buttonSideSize"in w&&l(6,n=w.buttonSideSize),"left"in w&&l(7,i=w.left),"openButtonColor"in w&&l(8,u=w.openButtonColor),"closeButtonColor"in w&&l(9,v=w.closeButtonColor),"buttonTransitionTime"in w&&l(10,y=w.buttonTransitionTime),"zIndexSize"in w&&l(11,d=w.zIndexSize),"pcNaviColor"in w&&l(12,k=w.pcNaviColor),"smNaviColor"in w&&l(13,U=w.smNaviColor),"backgroundColor"in w&&l(14,C=w.backgroundColor),"naviFadeTime"in w&&l(15,R=w.naviFadeTime),"navizIndexSize"in w&&l(16,S=w.navizIndexSize)},[m,F,g,I,Q,h,n,i,u,v,y,d,k,U,C,R,S,ae,Ee]}class So extends pt{constructor(a){super(),gt(this,a,Eo,_o,wt,{menu_list:0,buttonTopSize:5,buttonSideSize:6,left:7,openButtonColor:8,closeButtonColor:9,buttonTransitionTime:10,zIndexSize:11,pcNaviColor:12,smNaviColor:13,backgroundColor:14,naviFadeTime:15,navizIndexSize:16})}}function zo(f){let a,l,m,h,n,i,u,v,y,d,k,U,C,R,S,g,I,F,Q,ae,Ee,w,P,fe,Ge,ne,M,ue,Ke,re,V,he,Ze,Se,me,H,pe,le,j,Y,D,ge,de,W,we,L,ie,be,J,se;return J=new So({props:{menu_list:f[1],openButtonColor:"#343a4a",backgroundColor:"#343a4a",pcNaviColor:"#e6dfda"}}),{c(){a=s("header"),l=s("div"),m=A(),h=s("nav"),n=ee("svg"),i=ee("path"),u=A(),v=s("ul"),y=s("li"),d=s("a"),k=s("img"),C=A(),R=s("li"),S=s("a"),g=_("Mediation"),I=A(),F=s("li"),Q=s("a"),ae=_("Negotiation"),Ee=A(),w=s("li"),P=s("a"),fe=_("Training"),Ge=A(),ne=s("li"),M=s("a"),ue=_("Consulting"),Ke=A(),re=s("li"),V=s("a"),he=_("Coaching"),Ze=A(),Se=s("li"),me=A(),H=s("li"),pe=s("span"),le=s("a"),j=s("span"),Y=s("img"),ge=_(`
						Book Now`),de=A(),W=ee("svg"),we=ee("path"),L=A(),ie=s("div"),be=s("div"),At(J.$$.fragment),this.h()},l(B){a=c(B,"HEADER",{class:!0});var q=r(a);l=c(q,"DIV",{class:!0});var O=r(l);O.forEach(o),m=x(q),h=c(q,"NAV",{class:!0});var ce=r(h);n=te(ce,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var at=r(n);i=te(at,"path",{d:!0,class:!0}),r(i).forEach(o),at.forEach(o),u=x(ce),v=c(ce,"UL",{class:!0});var N=r(v);y=c(N,"LI",{class:!0});var Ae=r(y);d=c(Ae,"A",{"sveltekit:prefetch":!0,href:!0,id:!0,class:!0});var ze=r(d);k=c(ze,"IMG",{src:!0,alt:!0,height:!0,width:!0}),ze.forEach(o),Ae.forEach(o),C=x(N),R=c(N,"LI",{class:!0});var ot=r(R);S=c(ot,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=r(S);g=E(G,"Mediation"),G.forEach(o),ot.forEach(o),I=x(N),F=c(N,"LI",{class:!0});var Ne=r(F);Q=c(Ne,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var nt=r(Q);ae=E(nt,"Negotiation"),nt.forEach(o),Ne.forEach(o),Ee=x(N),w=c(N,"LI",{class:!0});var Ue=r(w);P=c(Ue,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var xe=r(P);fe=E(xe,"Training"),xe.forEach(o),Ue.forEach(o),Ge=x(N),ne=c(N,"LI",{class:!0});var Ie=r(ne);M=c(Ie,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var rt=r(M);ue=E(rt,"Consulting"),rt.forEach(o),Ie.forEach(o),Ke=x(N),re=c(N,"LI",{class:!0});var K=r(re);V=c(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Te=r(V);he=E(Te,"Coaching"),Te.forEach(o),K.forEach(o),Ze=x(N),Se=c(N,"LI",{class:!0}),r(Se).forEach(o),me=x(N),H=c(N,"LI",{class:!0});var lt=r(H);pe=c(lt,"SPAN",{class:!0});var Fe=r(pe);le=c(Fe,"A",{href:!0,class:!0});var ve=r(le);j=c(ve,"SPAN",{class:!0});var Be=r(j);Y=c(Be,"IMG",{src:!0,height:!0,width:!0,class:!0}),Be.forEach(o),ge=E(ve,`
						Book Now`),ve.forEach(o),Fe.forEach(o),lt.forEach(o),N.forEach(o),de=x(ce),W=te(ce,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var it=r(W);we=te(it,"path",{d:!0,class:!0}),r(we).forEach(o),it.forEach(o),ce.forEach(o),L=x(q),ie=c(q,"DIV",{class:!0});var Z=r(ie);be=c(Z,"DIV",{class:!0});var Qe=r(be);xt(J.$$.fragment,Qe),Qe.forEach(o),Z.forEach(o),q.forEach(o),this.h()},h(){e(l,"class","corner svelte-1m5qnsu"),e(i,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(i,"class","svelte-1m5qnsu"),e(n,"viewBox","0 0 2 3"),e(n,"aria-hidden","true"),e(n,"class","svelte-1m5qnsu"),vt(k.src,U=go)||e(k,"src",U),e(k,"alt","Neutral Mediation Home"),e(k,"height","64px"),e(k,"width","64px"),e(d,"sveltekit:prefetch",""),e(d,"href","/"),e(d,"id","home"),e(d,"class","svelte-1m5qnsu"),e(y,"class","svelte-1m5qnsu"),p(y,"active",f[0].url.pathname==="/"),e(S,"sveltekit:prefetch",""),e(S,"href","/mediation"),e(S,"class","svelte-1m5qnsu"),e(R,"class","svelte-1m5qnsu"),p(R,"active",f[0].url.pathname==="/mediation"),e(Q,"sveltekit:prefetch",""),e(Q,"href","/negotiation"),e(Q,"class","svelte-1m5qnsu"),e(F,"class","svelte-1m5qnsu"),p(F,"active",f[0].url.pathname==="/negotiation"),e(P,"sveltekit:prefetch",""),e(P,"href","/training"),e(P,"class","svelte-1m5qnsu"),e(w,"class","svelte-1m5qnsu"),p(w,"active",f[0].url.pathname==="/training"),e(M,"sveltekit:prefetch",""),e(M,"href","/consulting"),e(M,"class","svelte-1m5qnsu"),e(ne,"class","svelte-1m5qnsu"),p(ne,"active",f[0].url.pathname==="/consulting"),e(V,"sveltekit:prefetch",""),e(V,"href","/coaching"),e(V,"class","svelte-1m5qnsu"),e(re,"class","svelte-1m5qnsu"),p(re,"active",f[0].url.pathname==="/coaching"),e(Se,"class","menu-separator svelte-1m5qnsu"),vt(Y.src,D=wo)||e(Y,"src",D),e(Y,"height","24px"),e(Y,"width","24px"),e(Y,"class","book-icon"),e(j,"class","book-contact-icon svelte-1m5qnsu"),e(le,"href","https://neutral.setmore.com"),e(le,"class","svelte-1m5qnsu"),e(pe,"class","book-text"),e(H,"class","book-contact svelte-1m5qnsu"),e(v,"class","svelte-1m5qnsu"),e(we,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(we,"class","svelte-1m5qnsu"),e(W,"viewBox","0 0 2 3"),e(W,"aria-hidden","true"),e(W,"class","svelte-1m5qnsu"),e(h,"class","menu-primary svelte-1m5qnsu"),e(be,"class","right-corner svelte-1m5qnsu"),e(ie,"class","corner svelte-1m5qnsu"),e(a,"class","primary-navigation svelte-1m5qnsu")},m(B,q){_e(B,a,q),t(a,l),t(a,m),t(a,h),t(h,n),t(n,i),t(h,u),t(h,v),t(v,y),t(y,d),t(d,k),t(v,C),t(v,R),t(R,S),t(S,g),t(v,I),t(v,F),t(F,Q),t(Q,ae),t(v,Ee),t(v,w),t(w,P),t(P,fe),t(v,Ge),t(v,ne),t(ne,M),t(M,ue),t(v,Ke),t(v,re),t(re,V),t(V,he),t(v,Ze),t(v,Se),t(v,me),t(v,H),t(H,pe),t(pe,le),t(le,j),t(j,Y),t(le,ge),t(h,de),t(h,W),t(W,we),t(a,L),t(a,ie),t(ie,be),Ct(J,be,null),se=!0},p(B,[q]){q&1&&p(y,"active",B[0].url.pathname==="/"),q&1&&p(R,"active",B[0].url.pathname==="/mediation"),q&1&&p(F,"active",B[0].url.pathname==="/negotiation"),q&1&&p(w,"active",B[0].url.pathname==="/training"),q&1&&p(ne,"active",B[0].url.pathname==="/consulting"),q&1&&p(re,"active",B[0].url.pathname==="/coaching")},i(B){se||(De(J.$$.fragment,B),se=!0)},o(B){tt(J.$$.fragment,B),se=!1},d(B){B&&o(a),yt(J)}}}function Uo(f,a,l){let m;return eo(f,to,n=>l(0,m=n)),[m,[{name:"Home",url:"/"},{name:"Mediation",url:"/mediation"},{name:"Negotation",url:"/negotiation"},{name:"Training",url:"/training"},{name:"Consulting",url:"/consulting"},{name:"Coaching",url:"/coaching"},{name:"Book Now",url:"https://neutral.setmore.com/"}]]}class Io extends pt{constructor(a){super(),gt(this,a,Uo,zo,wt,{})}}var Fo="data:image/png;base64,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",Bo="/_app/immutable/assets/email-icon-7dd35e0b.svg";function No(f){let a,l,m,h,n,i,u,v,y,d,k,U,C,R,S,g,I,F,Q,ae,Ee,w,P,fe,Ge,ne,M,ue,Ke,re,V,he,Ze,Se,me,H,pe,le,j,Y,D,ge,de,W,we,L,ie,be,J,se,B,q,O,ce,at,N,Ae,ze,ot,G,Ne,nt,Ue,xe,Ie,rt,K,Te,lt,Fe,ve,Be,it,Z,Qe,kt,Le,st,ct,Oe,ft,qe,Vt,_t,Et,ut,ht,Pe,mt,Re,jt,St,zt,X,Me,Ve,Ut,It,je,Ye,Ft,Bt,We,He,Nt,Tt,Je,Xe,Qt,Lt,$e,et,qt,dt;a=new Io({});const Rt=f[2].default,oe=fo(Rt,f,f[1],null);return{c(){At(a.$$.fragment),l=A(),m=s("main"),oe&&oe.c(),h=A(),n=s("footer"),i=s("a"),u=s("img"),y=A(),d=s("ul"),k=s("li"),U=s("a"),C=_("About"),R=A(),S=s("li"),g=s("a"),I=_("Background"),F=A(),Q=s("li"),ae=s("a"),Ee=_("Contact"),w=A(),P=s("li"),fe=s("a"),Ge=_("Ethics"),ne=A(),M=s("li"),ue=s("a"),Ke=_("Prices"),re=A(),V=s("li"),he=s("a"),Ze=_("Disclaimer"),Se=A(),me=s("li"),H=s("a"),pe=_("Forms & Documents"),le=A(),j=s("div"),Y=s("div"),D=s("ul"),ge=s("li"),de=s("a"),W=s("span"),we=_("Twitter"),L=ee("svg"),ie=ee("path"),be=A(),J=s("li"),se=s("a"),B=s("span"),q=_("Instagram"),O=ee("svg"),ce=ee("path"),at=A(),N=s("li"),Ae=s("a"),ze=s("span"),ot=_("Facebook"),G=ee("svg"),Ne=ee("path"),nt=A(),Ue=s("li"),xe=s("a"),Ie=s("span"),rt=_("YouTube"),K=ee("svg"),Te=ee("path"),lt=A(),Fe=s("li"),ve=s("a"),Be=s("span"),it=_("LinkedIn"),Z=ee("svg"),Qe=ee("path"),kt=A(),Le=s("ul"),st=s("li"),ct=s("span"),Oe=s("a"),ft=s("span"),qe=s("img"),_t=_(`
					+1-650-353-7653`),Et=A(),ut=s("li"),ht=s("span"),Pe=s("a"),mt=s("span"),Re=s("img"),St=_(`
					info@neutrals.io`),zt=A(),X=s("ul"),Me=s("li"),Ve=s("a"),Ut=_("Cancellation"),It=A(),je=s("li"),Ye=s("a"),Ft=_("Cookies"),Bt=A(),We=s("li"),He=s("a"),Nt=_("Privacy"),Tt=A(),Je=s("li"),Xe=s("a"),Qt=_("Refunds"),Lt=A(),$e=s("li"),et=s("a"),qt=_("Terms of Service"),this.h()},l(b){xt(a.$$.fragment,b),l=x(b),m=c(b,"MAIN",{class:!0});var T=r(m);oe&&oe.l(T),T.forEach(o),h=x(b),n=c(b,"FOOTER",{});var Ce=r(n);i=c(Ce,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Yt=r(i);u=c(Yt,"IMG",{src:!0,alt:!0,height:!0,width:!0}),Yt.forEach(o),y=x(Ce),d=c(Ce,"UL",{class:!0});var $=r(d);k=c($,"LI",{});var Wt=r(k);U=c(Wt,"A",{"sveltekit:prefetch":!0,href:!0});var Ht=r(U);C=E(Ht,"About"),Ht.forEach(o),Wt.forEach(o),R=x($),S=c($,"LI",{});var Jt=r(S);g=c(Jt,"A",{"sveltekit:prefetch":!0,href:!0});var Xt=r(g);I=E(Xt,"Background"),Xt.forEach(o),Jt.forEach(o),F=x($),Q=c($,"LI",{});var $t=r(Q);ae=c($t,"A",{"sveltekit:prefetch":!0,href:!0});var ea=r(ae);Ee=E(ea,"Contact"),ea.forEach(o),$t.forEach(o),w=x($),P=c($,"LI",{});var ta=r(P);fe=c(ta,"A",{"sveltekit:prefetch":!0,href:!0});var aa=r(fe);Ge=E(aa,"Ethics"),aa.forEach(o),ta.forEach(o),ne=x($),M=c($,"LI",{});var oa=r(M);ue=c(oa,"A",{"sveltekit:prefetch":!0,href:!0});var na=r(ue);Ke=E(na,"Prices"),na.forEach(o),oa.forEach(o),re=x($),V=c($,"LI",{});var ra=r(V);he=c(ra,"A",{"sveltekit:prefetch":!0,href:!0});var la=r(he);Ze=E(la,"Disclaimer"),la.forEach(o),ra.forEach(o),Se=x($),me=c($,"LI",{});var ia=r(me);H=c(ia,"A",{"sveltekit:prefetch":!0,href:!0});var sa=r(H);pe=E(sa,"Forms & Documents"),sa.forEach(o),ia.forEach(o),$.forEach(o),le=x(Ce),j=c(Ce,"DIV",{class:!0,role:!0,"aria-label":!0});var ca=r(j);Y=c(ca,"DIV",{class:!0});var fa=r(Y);D=c(fa,"UL",{id:!0,class:!0});var ye=r(D);ge=c(ye,"LI",{class:!0});var ua=r(ge);de=c(ua,"A",{href:!0});var Dt=r(de);W=c(Dt,"SPAN",{class:!0});var ha=r(W);we=E(ha,"Twitter"),ha.forEach(o),L=te(Dt,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0,role:!0,focusable:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var ma=r(L);ie=te(ma,"path",{d:!0}),r(ie).forEach(o),ma.forEach(o),Dt.forEach(o),ua.forEach(o),be=x(ye),J=c(ye,"LI",{class:!0});var da=r(J);se=c(da,"A",{href:!0});var Gt=r(se);B=c(Gt,"SPAN",{class:!0});var va=r(B);q=E(va,"Instagram"),va.forEach(o),O=te(Gt,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0,role:!0,focusable:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var pa=r(O);ce=te(pa,"path",{d:!0}),r(ce).forEach(o),pa.forEach(o),Gt.forEach(o),da.forEach(o),at=x(ye),N=c(ye,"LI",{class:!0});var ga=r(N);Ae=c(ga,"A",{href:!0});var Kt=r(Ae);ze=c(Kt,"SPAN",{class:!0});var wa=r(ze);ot=E(wa,"Facebook"),wa.forEach(o),G=te(Kt,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0,role:!0,focusable:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var ba=r(G);Ne=te(ba,"path",{d:!0}),r(Ne).forEach(o),ba.forEach(o),Kt.forEach(o),ga.forEach(o),nt=x(ye),Ue=c(ye,"LI",{class:!0});var Aa=r(Ue);xe=c(Aa,"A",{href:!0});var Zt=r(xe);Ie=c(Zt,"SPAN",{class:!0});var xa=r(Ie);rt=E(xa,"YouTube"),xa.forEach(o),K=te(Zt,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0,role:!0,focusable:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var Ca=r(K);Te=te(Ca,"path",{d:!0}),r(Te).forEach(o),Ca.forEach(o),Zt.forEach(o),Aa.forEach(o),lt=x(ye),Fe=c(ye,"LI",{class:!0});var ya=r(Fe);ve=c(ya,"A",{href:!0});var Ot=r(ve);Be=c(Ot,"SPAN",{class:!0});var ka=r(Be);it=E(ka,"LinkedIn"),ka.forEach(o),Z=te(Ot,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0,role:!0,focusable:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var _a=r(Z);Qe=te(_a,"path",{d:!0}),r(Qe).forEach(o),_a.forEach(o),Ot.forEach(o),ya.forEach(o),ye.forEach(o),fa.forEach(o),ca.forEach(o),kt=x(Ce),Le=c(Ce,"UL",{id:!0});var bt=r(Le);st=c(bt,"LI",{class:!0});var Ea=r(st);ct=c(Ea,"SPAN",{class:!0});var Sa=r(ct);Oe=c(Sa,"A",{href:!0});var Pt=r(Oe);ft=c(Pt,"SPAN",{class:!0});var za=r(ft);qe=c(za,"IMG",{src:!0,height:!0,width:!0,class:!0}),za.forEach(o),_t=E(Pt,`
					+1-650-353-7653`),Pt.forEach(o),Sa.forEach(o),Ea.forEach(o),Et=x(bt),ut=c(bt,"LI",{class:!0});var Ua=r(ut);ht=c(Ua,"SPAN",{class:!0});var Ia=r(ht);Pe=c(Ia,"A",{href:!0});var Mt=r(Pe);mt=c(Mt,"SPAN",{class:!0});var Fa=r(mt);Re=c(Fa,"IMG",{src:!0,height:!0,width:!0,class:!0}),Fa.forEach(o),St=E(Mt,`
					info@neutrals.io`),Mt.forEach(o),Ia.forEach(o),Ua.forEach(o),bt.forEach(o),zt=x(Ce),X=c(Ce,"UL",{class:!0});var ke=r(X);Me=c(ke,"LI",{});var Ba=r(Me);Ve=c(Ba,"A",{"sveltekit:prefetch":!0,href:!0});var Na=r(Ve);Ut=E(Na,"Cancellation"),Na.forEach(o),Ba.forEach(o),It=x(ke),je=c(ke,"LI",{});var Ta=r(je);Ye=c(Ta,"A",{"sveltekit:prefetch":!0,href:!0});var Qa=r(Ye);Ft=E(Qa,"Cookies"),Qa.forEach(o),Ta.forEach(o),Bt=x(ke),We=c(ke,"LI",{});var La=r(We);He=c(La,"A",{"sveltekit:prefetch":!0,href:!0});var qa=r(He);Nt=E(qa,"Privacy"),qa.forEach(o),La.forEach(o),Tt=x(ke),Je=c(ke,"LI",{});var Ra=r(Je);Xe=c(Ra,"A",{"sveltekit:prefetch":!0,href:!0});var Da=r(Xe);Qt=E(Da,"Refunds"),Da.forEach(o),Ra.forEach(o),Lt=x(ke),$e=c(ke,"LI",{});var Ga=r($e);et=c(Ga,"A",{"sveltekit:prefetch":!0,href:!0});var Ka=r(et);qt=E(Ka,"Terms of Service"),Ka.forEach(o),Ga.forEach(o),ke.forEach(o),Ce.forEach(o),this.h()},h(){e(m,"class","body"),vt(u.src,v=Fo)||e(u,"src",v),e(u,"alt","Neutral Mediation Home"),e(u,"height","64px"),e(u,"width","64px"),e(i,"sveltekit:prefetch",""),e(i,"href","/"),e(i,"class","footer-icon"),e(U,"sveltekit:prefetch",""),e(U,"href","/about"),p(k,"active",f[0].url.pathname==="/about"),e(g,"sveltekit:prefetch",""),e(g,"href","/background"),p(S,"active",f[0].url.pathname==="/neutral"),e(ae,"sveltekit:prefetch",""),e(ae,"href","/contact"),p(Q,"active",f[0].url.pathname==="/contact"),e(fe,"sveltekit:prefetch",""),e(fe,"href","/ethics"),p(P,"active",f[0].url.pathname==="/ethics"),e(ue,"sveltekit:prefetch",""),e(ue,"href","/prices"),p(M,"active",f[0].url.pathname==="/prices"),e(he,"sveltekit:prefetch",""),e(he,"href","/disclaimer"),p(V,"active",f[0].url.pathname==="/disclaimer"),e(H,"sveltekit:prefetch",""),e(H,"href","/documents"),p(me,"active",f[0].url.pathname==="/documents"),e(d,"class","menu-navigation"),e(W,"class","screen-reader-text"),e(ie,"d","M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"),e(L,"class","svg-icon"),e(L,"width","16"),e(L,"height","16"),e(L,"aria-hidden","true"),e(L,"role","img"),e(L,"focusable","false"),e(L,"viewBox","0 0 24 24"),e(L,"version","1.1"),e(L,"xmlns","http://www.w3.org/2000/svg"),e(L,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(de,"href","https://twitter.com/taylorbuley"),e(ge,"class","menu-item"),e(B,"class","screen-reader-text"),e(ce,"d","M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"),e(O,"class","svg-icon"),e(O,"width","16"),e(O,"height","16"),e(O,"aria-hidden","true"),e(O,"role","img"),e(O,"focusable","false"),e(O,"viewBox","0 0 24 24"),e(O,"version","1.1"),e(O,"xmlns","http://www.w3.org/2000/svg"),e(O,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(se,"href","https://instagram.com/taylorbuley"),e(J,"class","menu-item"),e(ze,"class","screen-reader-text"),e(Ne,"d","M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h8.621v-6.971h-2.346v-2.717h2.346V9.31 c0-2.325,1.42-3.591,3.494-3.591c0.993,0,1.847,0.074,2.096,0.107v2.43l-1.438,0.001c-1.128,0-1.346,0.536-1.346,1.323v1.734h2.69 l-0.35,2.717h-2.34V21h4.587C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z"),e(G,"class","svg-icon"),e(G,"width","16"),e(G,"height","16"),e(G,"aria-hidden","true"),e(G,"role","img"),e(G,"focusable","false"),e(G,"viewBox","0 0 24 24"),e(G,"version","1.1"),e(G,"xmlns","http://www.w3.org/2000/svg"),e(G,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(Ae,"href","https://facebook.com/TaylorBuley"),e(N,"class","menu-item"),e(Ie,"class","screen-reader-text"),e(Te,"d","M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"),e(K,"class","svg-icon"),e(K,"width","16"),e(K,"height","16"),e(K,"aria-hidden","true"),e(K,"role","img"),e(K,"focusable","false"),e(K,"viewBox","0 0 24 24"),e(K,"version","1.1"),e(K,"xmlns","http://www.w3.org/2000/svg"),e(K,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(xe,"href","https://www.youtube.com/taylorbuley"),e(Ue,"class","menu-item"),e(Be,"class","screen-reader-text"),e(Qe,"d","M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"),e(Z,"class","svg-icon"),e(Z,"width","16"),e(Z,"height","16"),e(Z,"aria-hidden","true"),e(Z,"role","img"),e(Z,"focusable","false"),e(Z,"viewBox","0 0 24 24"),e(Z,"version","1.1"),e(Z,"xmlns","http://www.w3.org/2000/svg"),e(Z,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(ve,"href","https://linkedin.com/in/buley"),e(Fe,"class","menu-item"),e(D,"id","menu-social"),e(D,"class","social-links-menu"),e(Y,"class","menu-social-container"),e(j,"class","social-navigation"),e(j,"role","navigation"),e(j,"aria-label","Social Links Menu"),vt(qe.src,Vt=vo)||e(qe,"src",Vt),e(qe,"height","16px"),e(qe,"width","16px"),e(qe,"class","phone-number-icon"),e(ft,"class","phone-contact-icon"),e(Oe,"href","tel:16503537653"),e(ct,"class","phone-number-text"),e(st,"class","phone-contact"),vt(Re.src,jt=Bo)||e(Re,"src",jt),e(Re,"height","16px"),e(Re,"width","16px"),e(Re,"class","email-icon"),e(mt,"class","email-contact-icon"),e(Pe,"href","mailto:info@neutrals.io"),e(ht,"class","email-text"),e(ut,"class","email-contact"),e(Le,"id","menu-contact"),e(Ve,"sveltekit:prefetch",""),e(Ve,"href","/cancellation"),p(Me,"active",f[0].url.pathname==="/cancellation"),e(Ye,"sveltekit:prefetch",""),e(Ye,"href","/cookies"),p(je,"active",f[0].url.pathname==="/cookies"),e(He,"sveltekit:prefetch",""),e(He,"href","/privacy"),p(We,"active",f[0].url.pathname==="/privacy"),e(Xe,"sveltekit:prefetch",""),e(Xe,"href","/refunds"),p(Je,"active",f[0].url.pathname==="/refunds"),e(et,"sveltekit:prefetch",""),e(et,"href","/terms"),p($e,"active",f[0].url.pathname==="/terms"),e(X,"class","menu-policy")},m(b,T){Ct(a,b,T),_e(b,l,T),_e(b,m,T),oe&&oe.m(m,null),_e(b,h,T),_e(b,n,T),t(n,i),t(i,u),t(n,y),t(n,d),t(d,k),t(k,U),t(U,C),t(d,R),t(d,S),t(S,g),t(g,I),t(d,F),t(d,Q),t(Q,ae),t(ae,Ee),t(d,w),t(d,P),t(P,fe),t(fe,Ge),t(d,ne),t(d,M),t(M,ue),t(ue,Ke),t(d,re),t(d,V),t(V,he),t(he,Ze),t(d,Se),t(d,me),t(me,H),t(H,pe),t(n,le),t(n,j),t(j,Y),t(Y,D),t(D,ge),t(ge,de),t(de,W),t(W,we),t(de,L),t(L,ie),t(D,be),t(D,J),t(J,se),t(se,B),t(B,q),t(se,O),t(O,ce),t(D,at),t(D,N),t(N,Ae),t(Ae,ze),t(ze,ot),t(Ae,G),t(G,Ne),t(D,nt),t(D,Ue),t(Ue,xe),t(xe,Ie),t(Ie,rt),t(xe,K),t(K,Te),t(D,lt),t(D,Fe),t(Fe,ve),t(ve,Be),t(Be,it),t(ve,Z),t(Z,Qe),t(n,kt),t(n,Le),t(Le,st),t(st,ct),t(ct,Oe),t(Oe,ft),t(ft,qe),t(Oe,_t),t(Le,Et),t(Le,ut),t(ut,ht),t(ht,Pe),t(Pe,mt),t(mt,Re),t(Pe,St),t(n,zt),t(n,X),t(X,Me),t(Me,Ve),t(Ve,Ut),t(X,It),t(X,je),t(je,Ye),t(Ye,Ft),t(X,Bt),t(X,We),t(We,He),t(He,Nt),t(X,Tt),t(X,Je),t(Je,Xe),t(Xe,Qt),t(X,Lt),t(X,$e),t($e,et),t(et,qt),dt=!0},p(b,[T]){oe&&oe.p&&(!dt||T&2)&&uo(oe,Rt,b,b[1],dt?mo(Rt,b[1],T,null):ho(b[1]),null),T&1&&p(k,"active",b[0].url.pathname==="/about"),T&1&&p(S,"active",b[0].url.pathname==="/neutral"),T&1&&p(Q,"active",b[0].url.pathname==="/contact"),T&1&&p(P,"active",b[0].url.pathname==="/ethics"),T&1&&p(M,"active",b[0].url.pathname==="/prices"),T&1&&p(V,"active",b[0].url.pathname==="/disclaimer"),T&1&&p(me,"active",b[0].url.pathname==="/documents"),T&1&&p(Me,"active",b[0].url.pathname==="/cancellation"),T&1&&p(je,"active",b[0].url.pathname==="/cookies"),T&1&&p(We,"active",b[0].url.pathname==="/privacy"),T&1&&p(Je,"active",b[0].url.pathname==="/refunds"),T&1&&p($e,"active",b[0].url.pathname==="/terms")},i(b){dt||(De(a.$$.fragment,b),De(oe,b),dt=!0)},o(b){tt(a.$$.fragment,b),tt(oe,b),dt=!1},d(b){yt(a,b),b&&o(l),b&&o(m),oe&&oe.d(b),b&&o(h),b&&o(n)}}}function To(f,a,l){let m;eo(f,to,i=>l(0,m=i));let{$$slots:h={},$$scope:n}=a;return f.$$set=i=>{"$$scope"in i&&l(1,n=i.$$scope)},[m,n,h]}class qo extends pt{constructor(a){super(),gt(this,a,To,No,wt,{})}}export{qo as default};
