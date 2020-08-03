var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}const r="undefined"!=typeof window;let i=r?()=>window.performance.now():()=>Date.now(),c=r?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&c(d)}function m(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function b(){return h(" ")}function y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}class ${constructor(t,e=null){this.e=g("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)v(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(f)}}let j;function E(t){j=t}const M=[],D=[],T=[],A=[],S=Promise.resolve();let L=!1;function z(t){T.push(t)}let _=!1;const C=new Set;function q(){if(!_){_=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];E(e),I(e.$$)}for(M.length=0;D.length;)D.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];C.has(e)||(C.add(e),e())}T.length=0}while(M.length);for(;A.length;)A.pop()();L=!1,_=!1,C.clear()}}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const O=new Set;let P;function U(t,e){t&&t.i&&(O.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),P.c.push(()=>{O.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function G(t,e){N(t,1,1,()=>{e.delete(t.key)})}function H(t){t&&t.c()}function B(t,n,o){const{fragment:l,on_mount:r,on_destroy:i,after_update:c}=t.$$;l&&l.m(n,o),z(()=>{const n=r.map(e).filter(a);i?i.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(z)}function F(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(M.push(t),L||(L=!0,S.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,a,o,l,r,i,c=[-1]){const u=j;E(e);const d=a.props||{},m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c};let v=!1;if(m.ctx=o?o(e,d,(t,n,...s)=>{const a=s.length?s[0]:n;return m.ctx&&r(m.ctx[t],m.ctx[t]=a)&&(m.bound[t]&&m.bound[t](a),v&&J(e,t)),n}):[],m.update(),v=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();a.intro&&U(e.$$.fragment),B(e,a.target,a.anchor),q()}E(u)}class X{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Y=[];function R(t){return"[object Date]"===Object.prototype.toString.call(t)}function Q(e,n={}){const s=function(e,n=t){let s;const a=[];function l(t){if(o(e,t)&&(e=t,s)){const t=!Y.length;for(let t=0;t<a.length;t+=1){const n=a[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(o,r=t){const i=[o,r];return a.push(i),1===a.length&&(s=n(l)||t),o(e),()=>{const t=a.indexOf(i);-1!==t&&a.splice(t,1),0===a.length&&(s(),s=null)}}}}(e),{stiffness:a=.15,damping:l=.8,precision:r=.01}=n;let m,v,f,p=e,g=e,h=1,b=0,y=!1;function k(t,n={}){g=t;const a=f={};if(null==e||n.hard||w.stiffness>=1&&w.damping>=1)return y=!0,m=i(),p=t,s.set(e=g),Promise.resolve();if(n.soft){const t=!0===n.soft?.5:+n.soft;b=1/(60*t),h=0}return v||(m=i(),y=!1,v=function(t){let e;return 0===u.size&&c(d),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}(t=>{if(y)return y=!1,v=null,!1;h=Math.min(h+b,1);const n={inv_mass:h,opts:w,settled:!0,dt:60*(t-m)/1e3},a=function t(e,n,s,a){if("number"==typeof s||R(s)){const t=a-s,o=(s-n)/(e.dt||1/60),l=(o+(e.opts.stiffness*t-e.opts.damping*o)*e.inv_mass)*e.dt;return Math.abs(l)<e.opts.precision&&Math.abs(t)<e.opts.precision?a:(e.settled=!1,R(s)?new Date(s.getTime()+l):s+l)}if(Array.isArray(s))return s.map((o,l)=>t(e,n[l],s[l],a[l]));if("object"==typeof s){const o={};for(const l in s)o[l]=t(e,n[l],s[l],a[l]);return o}throw new Error(`Cannot spring ${typeof s} values`)}(n,p,e,g);return m=t,p=e,s.set(e=a),n.settled&&(v=null),!n.settled})),new Promise(t=>{v.promise.then(()=>{a===f&&t()})})}const w={set:k,update:(t,n)=>k(t(g,e),n),subscribe:s.subscribe,stiffness:a,damping:l,precision:r};return w}function W(t){let e,n;function s(s){e=s.clientX,n=s.clientY,t.dispatchEvent(new CustomEvent("panstart",{detail:{x:e,y:n}})),window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)}function a(s){const a=s.clientX-e,o=s.clientY-n;e=s.clientX,n=s.clientY,t.dispatchEvent(new CustomEvent("panmove",{detail:{x:e,y:n,dx:a,dy:o}}))}function o(s){e=s.clientX,n=s.clientY,t.dispatchEvent(new CustomEvent("panend",{detail:{x:e,y:n}})),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)}return t.addEventListener("mousedown",s),{destroy(){t.removeEventListener("mousedown",s)}}}function Z(t,e,n){const s=t.slice();return s[5]=e[n],s}function K(t){let e,n,s,a=t[5]+"";return{c(){e=h(a),n=b(),s=g("br"),k(s,"class","svelte-1wct4za")},m(t,a){v(t,e,a),v(t,n,a),v(t,s,a)},p(t,n){4&n&&a!==(a=t[5]+"")&&w(e,a)},d(t){t&&f(e),t&&f(n),t&&f(s)}}}function tt(e){let n,s,a,o,l,r,i,c,u,d,y,j,E,M,D,T,A,S,L,z,_=e[2],C=[];for(let t=0;t<_.length;t+=1)C[t]=K(Z(e,_,t));return{c(){n=g("div"),s=g("div"),a=g("label"),o=g("input"),r=b(),i=g("div"),c=g("br"),u=b(),d=g("b");for(let t=0;t<C.length;t+=1)C[t].c();y=b(),j=g("br"),E=b(),T=b(),A=g("br"),S=b(),L=g("h3"),z=h(e[1]),k(o,"type","checkbox"),k(o,"id",l="deploy-"+e[0]),k(o,"class","svelte-1wct4za"),k(c,"class","svelte-1wct4za"),k(d,"class","svelte-1wct4za"),k(j,"class","svelte-1wct4za"),M=new $(e[3],null),k(i,"class","description-box svelte-1wct4za"),k(a,"for",D="deploy-"+e[0]),k(a,"class","img-box svelte-1wct4za"),x(a,"background-image","url("+(et+e[4])+")"),k(s,"class","info-box svelte-1wct4za"),k(A,"class","svelte-1wct4za"),k(L,"class","svelte-1wct4za"),k(n,"class","presentation-box svelte-1wct4za")},m(t,e){v(t,n,e),m(n,s),m(s,a),m(a,o),m(a,r),m(a,i),m(i,c),m(i,u),m(i,d);for(let t=0;t<C.length;t+=1)C[t].m(d,null);m(i,y),m(i,j),m(i,E),M.m(i),m(n,T),m(n,A),m(n,S),m(n,L),m(L,z)},p(t,[e]){if(1&e&&l!==(l="deploy-"+t[0])&&k(o,"id",l),4&e){let n;for(_=t[2],n=0;n<_.length;n+=1){const s=Z(t,_,n);C[n]?C[n].p(s,e):(C[n]=K(s),C[n].c(),C[n].m(d,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=_.length}8&e&&M.p(t[3]),1&e&&D!==(D="deploy-"+t[0])&&k(a,"for",D),16&e&&x(a,"background-image","url("+(et+t[4])+")"),2&e&&w(z,t[1])},i:t,o:t,d(t){t&&f(n),p(C,t)}}}const et="build/img/";function nt(t,e,n){let{id:s}=e,{name:a}=e,{abils:o}=e,{description:l}=e,{img:r}=e;return t.$set=t=>{"id"in t&&n(0,s=t.id),"name"in t&&n(1,a=t.name),"abils"in t&&n(2,o=t.abils),"description"in t&&n(3,l=t.description),"img"in t&&n(4,r=t.img)},[s,a,o,l,r]}class st extends X{constructor(t){super(),V(this,t,nt,tt,o,{id:0,name:1,abils:2,description:3,img:4})}}function at(t,e,n){const s=t.slice();return s[6]=e[n],s}function ot(e,n){let s,a;const o=new st({props:{id:n[6].id,name:n[6].name,abils:Object.values(n[6].abil),description:n[6].description,img:n[6].img}});return{key:e,first:null,c(){s=g("li"),H(o.$$.fragment),k(s,"class","svelte-df4x9h"),this.first=s},m(t,e){v(t,s,e),B(o,s,null),a=!0},p:t,i(t){a||(U(o.$$.fragment,t),a=!0)},o(t){N(o.$$.fragment,t),a=!1},d(t){t&&f(s),F(o)}}}function lt(t){let e,n,a,o,l,r=[],i=new Map,c=t[3];const u=t=>t[6].id;for(let e=0;e<c.length;e+=1){let n=at(t,c,e),s=u(n);i.set(s,r[e]=ot(s,n))}return{c(){e=g("ul");for(let t=0;t<r.length;t+=1)r[t].c();n=b(),a=g("li"),k(a,"class","finish svelte-df4x9h"),k(e,"class","carousel svelte-df4x9h"),x(e,"--opacity",t[0])},m(i,c,u){v(i,e,c);for(let t=0;t<r.length;t+=1)r[t].m(e,null);m(e,n),m(e,a),o=!0,u&&s(l),l=[y(e,"mouseenter",t[1]),y(e,"mouseleave",t[2])]},p(t,[a]){if(8&a){const o=t[3];P={r:0,c:[],p:P},r=function(t,e,n,s,a,o,l,r,i,c,u,d){let m=t.length,v=o.length,f=m;const p={};for(;f--;)p[t[f].key]=f;const g=[],h=new Map,b=new Map;for(f=v;f--;){const t=d(a,o,f),r=n(t);let i=l.get(r);i?s&&i.p(t,e):(i=c(r,t),i.c()),h.set(r,g[f]=i),r in p&&b.set(r,Math.abs(f-p[r]))}const y=new Set,k=new Set;function w(t){U(t,1),t.m(r,u,l.has(t.key)),l.set(t.key,t),u=t.first,v--}for(;m&&v;){const e=g[v-1],n=t[m-1],s=e.key,a=n.key;e===n?(u=e.first,m--,v--):h.has(a)?!l.has(s)||y.has(s)?w(e):k.has(a)?m--:b.get(s)>b.get(a)?(k.add(s),w(e)):(y.add(a),m--):(i(n,l),m--)}for(;m--;){const e=t[m];h.has(e.key)||i(e,l)}for(;v;)w(g[v-1]);return g}(r,a,u,1,t,o,i,e,G,ot,n,at),P.r||s(P.c),P=P.p}(!o||1&a)&&x(e,"--opacity",t[0])},i(t){if(!o){for(let t=0;t<c.length;t+=1)U(r[t]);o=!0}},o(t){for(let t=0;t<r.length;t+=1)N(r[t]);o=!1},d(t){t&&f(e);for(let t=0;t<r.length;t+=1)r[t].d();s(l)}}}function rt(t,e,n){let s,a,o=0;return[o,function(t){clearInterval(a),s=setInterval((function(){o>=1&&(n(0,o=1),clearInterval(s)),n(0,o+=.1)}),50)},function(t){clearInterval(s),a=setInterval((function(){o<=0&&(n(0,o=0),clearInterval(a)),n(0,o-=.1)}),50)},[{id:1,name:"Ing. Mario Tejerina",abil:{1:"Ingeniero informático",2:"Analista funcional",3:"Desarrollador de Videojuegos"},description:" \t\t\t\tProfe con gran pasión en construir, apuntar objetivos, y derribar torretas para subir de nivel y lograr las metas <br> \t\t\t\t[Quiere ganar un Mundial] \t\t\t",img:"icon-perfil.png"},{id:2,name:"Guillermo Tolaba",abil:{1:"IT Manager",2:"Especialista en Seguridad",3:"Programador Full Stack"},description:" \t\t\t\tViviendo en un mundo paralelo es capaz de levantar, y romper cualquier infraestructura \t\t\t\tapuntando con precisión a lo superior. <br> \t\t\t\t[Siempre se deja ganar] \t\t\t",img:"icon-perfil.png"},{id:3,name:"Ernesto Ittig",abil:{1:"Arquitecto de Software",2:"Release Manager"},description:" \t\t\t\tOpenSource Evangelist. Documentando todos los hechos, investigando sin parar. <br> \t\t\t\t[Es ProMac] \t\t\t",img:"icon-perfil.png"},{id:4,name:"Guillermo Buczek",abil:{1:"Diseñador 3D",2:"Analista Digital",3:"Diseñador Gráfico"},description:" \t\t\t\tCon lapiz y papel crea mundos para disfrutar. <br> \t\t\t\t[Le gusta chatear] \t\t\t",img:"icon-perfil.png"},{id:5,name:"Joaquín Cruz",abil:{1:"Diseñador Web",2:"Desarrollador de Software",3:"Desarrollador Mobile"},description:" \t\t\t\tGrandes habilidades en la resolución de problemas y en retener a la audiencia. Uso de código puro. <br> \t\t\t\t[Adora Bootstrap] \t\t\t",img:"icon-perfil.png"},{id:6,name:"Victor Celi",abil:{1:"Músico",2:"Soporte Técnico",3:"Traductor"},description:" \t\t\t\tExperimentado en musicalizar y programar. Busca las soluciones en Japonés (Trilingüe) <br> \t\t\t\t[Le encanta leer la documentación] \t\t\t",img:"victor.png"},{id:7,name:"Emanuel Jara",abil:{1:"Diseñador UX",2:"Desarrollador de Videojuegos",3:"Desarrollador Mobile"},description:" \t\t\t\tOfrece las mejores [tazas de café]. Desayuna Unity DOTS. Programación Extrema. Le encanta el dinero (Negociante) \t\t\t",img:"ema.png"},{id:8,name:"Julieta Alemán",abil:{1:"Analista de Bases de Datos",2:"Desarrollador Mobile"},description:" \t\t\t\tCon .NETflix, habilidad e ingenio, se rie de los problemas <br> \t\t\t\t[Tiene mucha imaginación] \t\t\t",img:"juli.png"},{id:9,name:"Emanuel Vilte",abil:{1:"Project Manager",2:"Analista Técnico"},description:" \t\t\t\tProgramando encuentra la key para cualquier puerta, accediendo al nivel mientras toca su guitarra. <br> \t\t\t\t[Su pasión es cantar] \t\t\t",img:"manu.png"}]]}class it extends X{constructor(t){super(),V(this,t,rt,lt,o,{})}}function ct(e){let n,s,a,o,l,r,i,c,u,d;return{c(){n=g("div"),s=g("div"),a=g("div"),a.innerHTML='<h2 class="svelte-1hvymjo">Videojuegos</h2> \n      <p class="svelte-1hvymjo">\n        Usamos las últimas tecnologías en Unity 3D (Unity DOTS) como en Unreal Engine.\n      </p>',o=b(),l=g("div"),r=g("div"),i=g("div"),i.innerHTML='<h2 class="svelte-1hvymjo">Aplicaciones web y de escritorio</h2> \n        <p class="svelte-1hvymjo">\n          Desarrollo estable y eficiente en .NET. <br class="svelte-1hvymjo">\n          Las mejores aplicaciones web con Svelte y Angular Material.\n        </p>',c=b(),u=g("div"),d=g("div"),d.innerHTML='<h2 class="svelte-1hvymjo">Aplicaciones móviles</h2> \n        <p class="svelte-1hvymjo">\n          Las apps más compatibles con las últimas tecnologías como Flutter.\n        </p>',k(a,"class","layer svelte-1hvymjo"),k(s,"class","img1 img-box svelte-1hvymjo"),x(s,"background-image","url("+(ut+e[0][0])+")"),k(i,"class","layer svelte-1hvymjo"),k(r,"class","img2 img-box svelte-1hvymjo"),x(r,"background-image","url("+(ut+e[0][1])+")"),k(d,"class","layer svelte-1hvymjo"),k(u,"class","img2 img-box svelte-1hvymjo"),x(u,"background-image","url("+(ut+e[0][2])+")"),k(l,"class","projects-img-box svelte-1hvymjo"),k(n,"class","projects-box svelte-1hvymjo")},m(t,e){v(t,n,e),m(n,s),m(s,a),m(n,o),m(n,l),m(l,r),m(r,i),m(l,c),m(l,u),m(u,d)},p:t,i:t,o:t,d(t){t&&f(n)}}}const ut="build/img/";function dt(t){return[["proj1.jpg","proj2.jpg","proj3.jpg"]]}class mt extends X{constructor(t){super(),V(this,t,dt,ct,o,{})}}function vt(t,e,n){const s=t.slice();return s[1]=e[n],s}function ft(e){let n,s,a,o,l,r,i,c,u=e[1].name+"";return{c(){n=g("figure"),s=g("img"),l=b(),r=g("figcaption"),i=h(u),c=b(),s.src!==(a=gt+e[1].img)&&k(s,"src",a),k(s,"alt",o=e[1].name),k(s,"class","svelte-tq8mjd"),k(r,"class","svelte-tq8mjd"),k(n,"class","svelte-tq8mjd")},m(t,e){v(t,n,e),m(n,s),m(n,l),m(n,r),m(r,i),m(n,c)},p:t,d(t){t&&f(n)}}}function pt(e){let n,s=e[0],a=[];for(let t=0;t<s.length;t+=1)a[t]=ft(vt(e,s,t));return{c(){n=g("div");for(let t=0;t<a.length;t+=1)a[t].c();k(n,"class","technologies-box svelte-tq8mjd")},m(t,e){v(t,n,e);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,[e]){if(1&e){let o;for(s=t[0],o=0;o<s.length;o+=1){const l=vt(t,s,o);a[o]?a[o].p(l,e):(a[o]=ft(l),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=s.length}},i:t,o:t,d(t){t&&f(n),p(a,t)}}}const gt="build/img/";function ht(t){return[[{name:"Unity 3D & Unity DOTS",img:"unity3d.png"},{name:"Unreal Engine 4",img:"unrealengine.png"},{name:"Angular Material",img:"angular.png"},{name:"Svelte",img:"svelte.png"},{name:"Laravel",img:"laravel.png"},{name:".Net",img:"net.png"},{name:"Flutter",img:"flutter.png"},{name:"FL Studio",img:"flstudio.png"},{name:"ZBrush",img:"zbrush.png"}]]}class bt extends X{constructor(t){super(),V(this,t,ht,pt,o,{})}}function yt(e){let n,o,l,r,i,c,u,d,p,h,w,$,j,E,M,D,T,A,S,L,z,_,C,q,I,O,P,G,J;const V=new mt({}),X=new it({}),Y=new bt({});return{c(){n=g("link"),o=b(),l=g("header"),r=g("nav"),i=g("div"),u=b(),d=g("div"),p=b(),h=g("div"),w=b(),$=g("div"),$.innerHTML='<ul class="h-list header-box svelte-1varkol"><li class="big-logo svelte-1varkol"><img src="build/img/logo.png" alt="GA Entertainment" class="svelte-1varkol"></li> \n\t\t\t<li class="ide-box svelte-1varkol"><h1 class="svelte-1varkol"><span class="svelte-1varkol">GA</span>  <br class="svelte-1varkol">\n\t\t\t\t\tInnovación <br class="svelte-1varkol">\n\t\t\t\t\tDesarrollo <br class="svelte-1varkol">\n\t\t\t\t\tEntretenimiento <br class="svelte-1varkol"></h1></li></ul>',j=b(),E=g("main"),M=g("div"),M.innerHTML='<h2 class="svelte-1varkol">Somos un equipo que te ayuda a evolucionar y digitalizar tus ideas.</h2>',D=b(),T=g("div"),T.innerHTML='<div class="content svelte-1varkol" style="text-align: center">\n\t\t\tDesarrollamos aplicaciones con la integración de las últimas y mejores tecnologías. <br class="svelte-1varkol">\n\t\t\tOfrecemos al cliente una solución que lo hará avanzar en su negocio y metas.\n\t\t</div>',A=b(),S=g("div"),H(V.$$.fragment),L=b(),z=g("h2"),z.textContent="Nos tomamos en serio tu diversión...",_=b(),H(X.$$.fragment),C=b(),q=g("h2"),q.textContent="Trabajamos con estas tecnologías y más...",I=b(),H(Y.$$.fragment),O=b(),P=g("footer"),P.innerHTML='<div class="content svelte-1varkol"><ul class="h-list svelte-1varkol"><li class="svelte-1varkol"><div class="svelte-1varkol">\n\t\t\t\t\tSan Salvador de Jujuy, Jujuy, Argentina\n\t\t\t\t</div></li> \n\t\t\t<li class="svelte-1varkol"><div class="svelte-1varkol"><span class="section svelte-1varkol">Redes Sociales</span>  <br class="svelte-1varkol"> \n\t\t\t\t\t<a href="https://www.instagram.com/ga_ide/" target="_blank" class="svelte-1varkol"><span class="icon-ig svelte-1varkol"></span>Instagram</a>  <br class="svelte-1varkol"> \n\t\t\t\t\t<a href="https://www.facebook.com/GA.ide.contact/" target="_blank" class="svelte-1varkol"><span class="icon-fb svelte-1varkol"></span>Facebook</a>  <br class="svelte-1varkol"></div></li> \n\t\t\t<li class="svelte-1varkol"><div class="svelte-1varkol"><span class="section svelte-1varkol">Contacto</span>  <br class="svelte-1varkol"> \n\t\t\t\t\t<span class="icon-mail svelte-1varkol"></span>ga.ide.contact@gmail.com.ar <br class="svelte-1varkol"> \n\t\t\t\t\t<span class="icon-mobile svelte-1varkol"></span>+54 9 388 404-7795 <br class="svelte-1varkol"> \n\t\t\t\t\t<span class="icon-mobile svelte-1varkol"></span>+54 9 388 686-4008\n\t\t\t\t</div></li> \n\t\t\t<li class="svelte-1varkol">\n\t\t\t\tCopyright © GA Innovación Desarrollo Entretenimiento 2020 | Todos los derechos reservados\n\t\t\t</li></ul></div>',k(n,"rel","stylesheet"),k(n,"href","css/fontello.css"),k(n,"class","svelte-1varkol"),k(i,"class","logo box svelte-1varkol"),x(i,"transform","translate("+e[3].x+"px,"+e[3].y+"px) rotate("+.2*e[3].x+"deg)"),x(i,"--width",e[0]+"px"),x(i,"--height",e[1]+"px"),k(d,"class","logo-bar svelte-1varkol"),k(r,"class","logo-box svelte-1varkol"),k(h,"class","logo-ghost svelte-1varkol"),k($,"class","content svelte-1varkol"),k(l,"class","svelte-1varkol"),k(M,"class","content svelte-1varkol"),k(T,"class","description svelte-1varkol"),k(z,"class","svelte-1varkol"),k(q,"class","svelte-1varkol"),k(S,"class","content svelte-1varkol"),k(E,"class","svelte-1varkol"),k(P,"class","svelte-1varkol")},m(f,g,b){var k;m(document.head,n),v(f,o,g),v(f,l,g),m(l,r),m(r,i),m(r,u),m(r,d),m(l,p),m(l,h),m(l,w),m(l,$),v(f,j,g),v(f,E,g),m(E,M),m(E,D),m(E,T),m(E,A),m(E,S),B(V,S,null),m(S,L),m(S,z),m(S,_),B(X,S,null),m(S,C),m(S,q),m(S,I),B(Y,S,null),v(f,O,g),v(f,P,g),G=!0,b&&s(J),J=[(k=c=W.call(null,i),k&&a(k.destroy)?k.destroy:t),y(i,"panstart",e[4]),y(i,"panmove",e[5]),y(i,"panend",e[6])]},p(t,[e]){(!G||8&e)&&x(i,"transform","translate("+t[3].x+"px,"+t[3].y+"px) rotate("+.2*t[3].x+"deg)"),(!G||1&e)&&x(i,"--width",t[0]+"px"),(!G||2&e)&&x(i,"--height",t[1]+"px")},i(t){G||(U(V.$$.fragment,t),U(X.$$.fragment,t),U(Y.$$.fragment,t),G=!0)},o(t){N(V.$$.fragment,t),N(X.$$.fragment,t),N(Y.$$.fragment,t),G=!1},d(t){f(n),t&&f(o),t&&f(l),t&&f(j),t&&f(E),F(V),F(X),F(Y),t&&f(O),t&&f(P),s(J)}}}function kt(t,e,n){let s,a=60,o=60;const r=Q({x:0,y:0},{stiffness:.2,damping:.4});return l(t,r,t=>n(3,s=t)),[a,o,r,s,function(){n(0,a=n(1,o=350)),n(2,r.stiffness=n(2,r.damping=1,r),r)},function(t){r.update(e=>({x:e.x+t.detail.dx,y:e.y+t.detail.dy}))},function(t){n(0,a=n(1,o=60)),n(2,r.stiffness=.2,r),n(2,r.damping=.4,r),r.set({x:0,y:0})}]}return new class extends X{constructor(t){super(),V(this,t,kt,yt,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
