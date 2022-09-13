import{S as B,i as $,s as q,a1 as J,e as g,t as I,k as R,c as k,a as w,h as A,d as f,m as N,b as T,g as b,I as y,a2 as Q,n as D,a3 as X,a4 as Y}from"../chunks/index-ebfde0cd.js";import{d as Z,b as x}from"../chunks/env-5493c761.js";var j={};function ee(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var te=function(n,e,t,r){e=e||"&",t=t||"=";var o={};if(typeof n!="string"||n.length===0)return o;var l=/\+/g;n=n.split(e);var d=1e3;r&&typeof r.maxKeys=="number"&&(d=r.maxKeys);var s=n.length;d>0&&s>d&&(s=d);for(var a=0;a<s;++a){var u=n[a].replace(l,"%20"),c=u.indexOf(t),h,m,v,_;c>=0?(h=u.substr(0,c),m=u.substr(c+1)):(h=u,m=""),v=decodeURIComponent(h),_=decodeURIComponent(m),ee(o,v)?Array.isArray(o[v])?o[v].push(_):o[v]=[o[v],_]:o[v]=_}return o},U=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}},ne=function(n,e,t,r){return e=e||"&",t=t||"=",n===null&&(n=void 0),typeof n=="object"?Object.keys(n).map(function(o){var l=encodeURIComponent(U(o))+t;return Array.isArray(n[o])?n[o].map(function(d){return l+encodeURIComponent(U(d))}).join(e):l+encodeURIComponent(U(n[o]))}).filter(Boolean).join(e):r?encodeURIComponent(U(r))+t+encodeURIComponent(U(n)):""};j.decode=j.parse=te;j.encode=j.stringify=ne;var V={},W={},S={exports:{}};(function(n,e){var t=function(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof r!="undefined")return r;throw new Error("unable to locate global object")},r=t();n.exports=e=r.fetch,r.fetch&&(e.default=r.fetch.bind(r)),e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response})(S,S.exports);(function(n){Object.defineProperty(n,"__esModule",{value:!0});var e=S.exports,t=j;n.API_URL="https://api.pinboard.in/v1";var r=function(o,l){var d=o.endpoint,s=o.qs,a=e.default(n.API_URL+"/"+d+"?"+t.stringify(s),{headers:{"Content-Type":"application/json"}}).then(function(u){return u.json()});return l?a.then(function(u){return l(null,u)}).catch(function(u){return l(u,null)}):a};n.default=r})(W);Object.defineProperty(V,"__esModule",{value:!0});var z=W;function E(n,e){return function(t,r){var o=Object.assign({},{auth_token:e,format:"json"},t),l={endpoint:n,qs:o};return z.default(l,r)}}var re=function(){function n(e){this.token=e,this.update=E("posts/update",this.token),this.add=E("posts/add",this.token),this.get=E("posts/get",this.token),this.dates=E("posts/dates",this.token),this.recent=E("posts/recent",this.token),this.all=E("posts/all",this.token),this.getTags=E("tags/get",this.token),this.renameTag=E("tags/rename",this.token),this.userSecret=E("user/secret",this.token),this.api_token=E("user/api_token",this.token)}return n.prototype.delete=function(e,t){return E("posts/delete",this.token)({url:e},t)},n.prototype.suggest=function(e,t){return E("posts/suggest",this.token)({url:e},t)},n.prototype.delTag=function(e,t){return E("tags/delete",this.token)({tag:e},t)},n.prototype.listNotes=function(e){return E("notes/list",this.token)({},e)},n.prototype.getNote=function(e,t){var r="notes/"+e,o={endpoint:r,qs:{auth_token:this.token,format:"json"}};return z.default(o,t)},n}(),K=V.default=re;function F(n,e,t){const r=n.slice();return r[1]=e[t],r}function oe(n){let e,t,r,o,l=n[4].name+"",d,s,a=n[4].message+"",u;return{c(){e=g("h1"),t=I("Error"),r=R(),o=g("p"),d=I(l),s=I(": "),u=I(a)},l(c){e=k(c,"H1",{});var h=w(e);t=A(h,"Error"),h.forEach(f),r=N(c),o=k(c,"P",{});var m=w(o);d=A(m,l),s=A(m,": "),u=A(m,a),m.forEach(f)},m(c,h){b(c,e,h),y(e,t),b(c,r,h),b(c,o,h),y(o,d),y(o,s),y(o,u)},p:D,d(c){c&&f(e),c&&f(r),c&&f(o)}}}function se(n){let e=n[0][0].href+"",t,r,o,l,d,s,a,u,c,h,m=[],v=new Map,_=n[0];const C=i=>i[1].href;for(let i=0;i<_.length;i+=1){let p=F(n,_,i),P=C(p);v.set(P,m[i]=G(P,p))}return{c(){t=I(e),r=R(),o=g("h1"),l=I("News"),d=R(),s=g("p"),a=g("em"),u=I("This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect|||s views."),c=R(),h=g("ul");for(let i=0;i<m.length;i+=1)m[i].c();this.h()},l(i){t=A(i,e),r=N(i),o=k(i,"H1",{});var p=w(o);l=A(p,"News"),p.forEach(f),d=N(i),s=k(i,"P",{});var P=w(s);a=k(P,"EM",{});var L=w(a);u=A(L,"This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect|||s views."),L.forEach(f),P.forEach(f),c=N(i),h=k(i,"UL",{id:!0});var M=w(h);for(let H=0;H<m.length;H+=1)m[H].l(M);M.forEach(f),this.h()},h(){T(h,"id","news-links")},m(i,p){b(i,t,p),b(i,r,p),b(i,o,p),y(o,l),b(i,d,p),b(i,s,p),y(s,a),y(a,u),b(i,c,p),b(i,h,p);for(let P=0;P<m.length;P+=1)m[P].m(h,null)},p(i,p){p&0&&(_=i[0],m=X(m,p,C,1,i,_,v,h,Y,G,null,F))},d(i){i&&f(t),i&&f(r),i&&f(o),i&&f(d),i&&f(s),i&&f(c),i&&f(h);for(let p=0;p<m.length;p+=1)m[p].d()}}}function G(n,e){let t,r,o=e[1].description+"",l,d,s;return{key:n,first:null,c(){t=g("li"),r=g("a"),l=I(o),s=R(),this.h()},l(a){t=k(a,"LI",{});var u=w(t);r=k(u,"A",{href:!0});var c=w(r);l=A(c,o),c.forEach(f),s=N(u),u.forEach(f),this.h()},h(){T(r,"href",d=e[1].href),this.first=t},m(a,u){b(a,t,u),y(t,r),y(r,l),y(t,s)},p(a,u){e=a},d(a){a&&f(t)}}}function ie(n){let e,t,r,o,l,d;return{c(){e=g("h1"),t=I("News"),r=R(),o=g("p"),l=g("em"),d=I("Loading...")},l(s){e=k(s,"H1",{});var a=w(e);t=A(a,"News"),a.forEach(f),r=N(s),o=k(s,"P",{});var u=w(o);l=k(u,"EM",{});var c=w(l);d=A(c,"Loading..."),c.forEach(f),u.forEach(f)},m(s,a){b(s,e,a),y(e,t),b(s,r,a),b(s,o,a),y(o,l),y(l,d)},p:D,d(s){s&&f(e),s&&f(r),s&&f(o)}}}function le(n){let e,t,r,o,l,d,s,a,u,c,h,m,v={ctx:n,current:null,token:null,hasCatch:!0,pending:ie,then:se,catch:oe,value:0,error:4};return J(ce,v),{c(){e=g("sveltekit:head"),t=g("title"),r=I("News"),o=R(),l=g("meta"),d=R(),s=g("div"),v.block.c(),a=R(),u=g("p"),c=g("small"),h=g("a"),m=I("Click here for our sitemap."),this.h()},l(_){e=k(_,"SVELTEKIT:HEAD",{});var C=w(e);t=k(C,"TITLE",{});var i=w(t);r=A(i,"News"),i.forEach(f),o=N(C),l=k(C,"META",{name:!0,content:!0}),C.forEach(f),d=N(_),s=k(_,"DIV",{class:!0});var p=w(s);v.block.l(p),a=N(p),u=k(p,"P",{});var P=w(u);c=k(P,"SMALL",{});var L=w(c);h=k(L,"A",{href:!0});var M=w(h);m=A(M,"Click here for our sitemap."),M.forEach(f),L.forEach(f),P.forEach(f),p.forEach(f),this.h()},h(){T(l,"name","description"),T(l,"content",""),T(h,"href","/sitemap.xml"),T(s,"class","content svelte-cf77e8")},m(_,C){b(_,e,C),y(e,t),y(t,r),y(e,o),y(e,l),b(_,d,C),b(_,s,C),v.block.m(s,v.anchor=null),v.mount=()=>s,v.anchor=a,y(s,a),y(s,u),y(u,c),y(c,h),y(h,m)},p(_,[C]){n=_,Q(v,n,C)},i:D,o:D,d(_){_&&f(e),_&&f(d),_&&f(s),v.block.d(),v.token=null,v=null}}}const pe=Z,me=x,_e=!0;let O=[{href:"#",description:"foo bar"}],ae=K.default||K,ue=new ae("tb:09609A3FC3DCC28DDEAC");const fe=()=>ue.get({tag:["mediation","negotiation"]}),ce=new Promise((n,e)=>{fe().then((t,r)=>{if(!!t&&!!t.posts){let o=[];for(let l=0;l<t.posts.length;l+=1)o.push({href:t.posts[l].href,description:t.posts[l].description,tags:t.posts[l].tags});console.log("REPLACING",O,o),O=o}}).finally((t,r)=>{r!=null?e(r):!!O&&O.length>=0?n(O):e(new Error("Failure to plan"))})});class ve extends B{constructor(e){super(),$(this,e,null,le,q,{})}}export{ve as default,pe as hydrate,_e as prerender,me as router};