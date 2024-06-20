import{f as it,c as N,n as Se,l as rt,g as J,p as me,h as Te,s as he,j as we,k as ge,m as lt,o as U,u as ut,q as st,t as ct,v as dt,w as ft,x as Ae,y as R,r as k,e as m,z as vt,A as mt,B as C,C as j,D as ie,E as re,F as ht,G as x,H as _e,I as He,J as qe,K as Y,L as gt,M as We,O as pt,P as yt,Q as Ce,R as bt,S as wt,T as Re,U as pe,V as Z,W as Ct,X as St,Y as Fe,Z as qt,_ as Ve,$ as Q,a0 as A,a1 as q,a2 as S,a3 as ee,a4 as ne,a5 as Pe}from"./index.f19e594f.js";import{c as $t,b as te,Q as X,a as ae,d as oe,e as zt}from"./QList.ab204cec.js";import{Q as kt}from"./QImg.2b1ca6bc.js";import{u as Lt}from"./auth.ce35a589.js";import"./notification.42b47c46.js";const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},xt=Object.keys($e);$e.all=!0;function Oe(e){const n={};for(const i of xt)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?$e:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Tt=["INPUT","TEXTAREA"];function Ee(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Tt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ye(e,n,i){const u=we(e);let t,a=u.left-n.event.x,s=u.top-n.event.y,f=Math.abs(a),c=Math.abs(s);const l=n.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,f=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:u,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:f,y:c},offset:{x:a,y:s},delta:{x:u.left-n.event.lastX,y:u.top-n.event.lastY}}}}let _t=0;var be=it({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&N.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?lt(a):(i.stop===!0&&he(a),i.prevent===!0&&Te(a))}const t={uid:"qvtp_"+_t++,handler:n,modifiers:i,direction:Oe(i),noop:Se,mouseStart(a){Ee(a,t)&&rt(a)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ee(a,t)){const s=a.target;J(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(N.is.firefox===!0&&me(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Te(l),a.cancelBubble===!0&&he(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}he(a)}const{left:f,top:c}=we(a);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(a){if(t.event===void 0)return;const s=we(a),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let g;i.preserveCursor!==!0&&i.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$t(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),l===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:g,synthetic:h}=ye(a,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=h===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const b=Math.abs(f),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&f<0||t.direction.right===!0&&b>y&&f>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ge(t,"temp"),N.is.firefox===!0&&me(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ye(a===void 0?t.lastEvt:a,t).payload);const{payload:f}=ye(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Oe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),N.is.firefox===!0&&me(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Be=150;var Pt=U({name:"QDrawer",inheritAttrs:!1,props:{...ut,...st,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ct,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:u}){const t=Y(),{proxy:{$q:a}}=t,s=dt(e,a),{preventBodyScroll:f}=gt(),{registerTimeout:c,removeTimeout:l}=ft(),r=Ae(qe,R);if(r===R)return console.error("QDrawer needs to be child of QLayout"),R;let b,y=null,g;const h=k(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),_=m(()=>e.mini===!0&&h.value!==!0),$=m(()=>_.value===!0?e.miniWidth:e.width),p=k(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),B=m(()=>e.persistent!==!0&&(h.value===!0||Ne.value===!0));function F(o,d){if(M(),o!==!1&&r.animate(),T(0),h.value===!0){const z=r.instances[K.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),O(1),r.isContainer.value!==!0&&f(!0)}else O(0),o!==!1&&de(!1);c(()=>{o!==!1&&de(!0),d!==!0&&i("show",o)},Be)}function v(o,d){V(),o!==!1&&r.animate(),O(0),T(H.value*$.value),fe(),d!==!0?c(()=>{i("hide",o)},Be):l()}const{show:w,hide:L}=vt({showing:p,hideOnRouteChange:B,handleShow:F,handleHide:v}),{addToHistory:M,removeFromHistory:V}=mt(p,L,B),D={belowBreakpoint:h,hide:L},P=m(()=>e.side==="right"),H=m(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ze=k(0),W=k(!1),le=k(!1),ke=k($.value*H.value),K=m(()=>P.value===!0?"left":"right"),ue=m(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),se=m(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(P.value?"R":"L")!==-1||a.platform.is.ios===!0&&r.isContainer.value===!0),I=m(()=>e.overlay===!1&&p.value===!0&&h.value===!1),Ne=m(()=>e.overlay===!0&&p.value===!0&&h.value===!1),Xe=m(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&W.value===!1?" hidden":"")),je=m(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Le=m(()=>P.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Ue=m(()=>P.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ye=m(()=>{const o={};return r.header.space===!0&&Le.value===!1&&(se.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&Ue.value===!1&&(se.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),Ke=m(()=>{const o={width:`${$.value}px`,transform:`translateX(${ke.value}px)`};return h.value===!0?o:Object.assign(o,Ye.value)}),Ge=m(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Je=m(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(se.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Ze=m(()=>{const o=a.lang.rtl===!0?e.side:K.value;return[[be,ot,void 0,{[o]:!0,mouse:!0}]]}),et=m(()=>{const o=a.lang.rtl===!0?K.value:e.side;return[[be,xe,void 0,{[o]:!0,mouse:!0}]]}),tt=m(()=>{const o=a.lang.rtl===!0?K.value:e.side;return[[be,xe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){nt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(h,o=>{o===!0?(b=p.value,p.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(p.value===!0?(T(0),O(0),fe()):w(!1))}),C(()=>e.side,(o,d)=>{r.instances[d]===D&&(r.instances[d]=void 0,r[d].space=!1,r[d].offset=0),r.instances[o]=D,r[o].size=$.value,r[o].space=I.value,r[o].offset=ue.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),C(()=>e.behavior+e.breakpoint,ce),C(r.isContainer,o=>{p.value===!0&&f(o!==!0),o===!0&&ce()}),C(r.scrollbarWidth,()=>{T(p.value===!0?0:void 0)}),C(ue,o=>{E("offset",o)}),C(I,o=>{i("onLayout",o),E("space",o)}),C(P,()=>{T()}),C($,o=>{T(),ve(e.miniToOverlay,o)}),C(()=>e.miniToOverlay,o=>{ve(o,$.value)}),C(()=>a.lang.rtl,()=>{T()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(at(),r.animate())}),C(_,o=>{i("miniState",o)});function T(o){o===void 0?ie(()=>{o=p.value===!0?0:$.value,T(H.value*o)}):(r.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(o)===$.value)&&(o+=H.value*r.scrollbarWidth.value),ke.value=o)}function O(o){ze.value=o}function de(o){const d=o===!0?"remove":r.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function at(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,y=setTimeout(()=>{y=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(o){if(p.value!==!1)return;const d=$.value,z=te(o.distance.x,0,d);if(o.isFinal===!0){z>=Math.min(75,d)===!0?w():(r.animate(),O(0),T(H.value*d)),W.value=!1;return}T((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(d-z,0):Math.min(0,z-d)),O(te(z/d,0,1)),o.isFirst===!0&&(W.value=!0)}function xe(o){if(p.value!==!0)return;const d=$.value,z=o.direction===e.side,G=(a.lang.rtl===!0?z!==!0:z)?te(o.distance.x,0,d):0;if(o.isFinal===!0){Math.abs(G)<Math.min(75,d)===!0?(r.animate(),O(1),T(0)):L(),W.value=!1;return}T(H.value*G),O(te(1-G/d,0,1)),o.isFirst===!0&&(W.value=!0)}function fe(){f(!1),de(!0)}function E(o,d){r.update(e.side,o,d)}function nt(o,d){o.value!==d&&(o.value=d)}function ve(o,d){E("size",o===!0?e.miniWidth:d)}return r.instances[e.side]=D,ve(e.miniToOverlay,$.value),E("space",I.value),E("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),j(()=>{i("onLayout",I.value),i("miniState",_.value),b=e.showIfAbove===!0;const o=()=>{(p.value===!0?F:v)(!1,!0)};if(r.totalWidth.value!==0){ie(o);return}g=C(r.totalWidth,()=>{g(),g=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?w(!1):o()})}),re(()=>{g!==void 0&&g(),y!==null&&(clearTimeout(y),y=null),p.value===!0&&fe(),r.instances[e.side]===D&&(r.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const o=[];h.value===!0&&(e.noSwipeOpen===!1&&o.push(ht(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ze.value)),o.push(_e("div",{ref:"backdrop",class:Xe.value,style:je.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>tt.value)));const d=_.value===!0&&n.mini!==void 0,z=[x("div",{...u,key:""+d,class:[Ge.value,u.class]},d===!0?n.mini():He(n.default))];return e.elevated===!0&&p.value===!0&&z.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(_e("aside",{ref:"content",class:Je.value,style:Ke.value},z,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>et.value)),x("div",{class:"q-drawer-container"},o)}}}),Ot=U({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=Y(),u=Ae(qe,R);if(u===R)return console.error("QPageContainer needs to be child of QLayout"),R;We(pt,!0);const t=m(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:t.value},He(n.default))}});const{passive:Me}=Ce,Et=["both","horizontal","vertical"];var Bt=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Et.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{c(),f()});function s(){u!==null&&u();const b=Math.max(0,bt(t)),y=wt(t),g={top:b-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const h=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";i.position={top:b,left:y},i.directionChanged=i.direction!==h,i.delta=g,i.directionChanged===!0&&(i.direction=h,i.inflectionPoint=i.position),n("scroll",{...i})}function f(){t=yt(a,e.scrollTarget),t.addEventListener("scroll",l,Me),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,Me),t=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[y,g]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{g(y),u=null}}}const{proxy:r}=Y();return C(()=>r.$q.lang.rtl,s),j(()=>{a=r.$el.parentNode,f()}),re(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),Se}});function Mt(){const e=k(!Re.value);return e.value===!1&&j(()=>{e.value=!0}),{isHydrated:e}}const Ie=typeof ResizeObserver!="undefined",De=Ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Qe=U({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},n("resize",t))}}const{proxy:f}=Y();if(f.trigger=a,Ie===!0){let c;const l=r=>{u=f.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&ie(()=>{l(!0)})};return j(()=>{l()}),re(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),Se}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,Ce.passive),l=void 0)},b=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,Ce.passive),s())};const{isHydrated:c}=Mt();let l;return j(()=>{ie(()=>{u=f.$el,u&&b()})}),re(r),()=>{if(c.value===!0)return x("object",{class:"q--avoid-card-border",style:De.style,tabindex:-1,type:"text/html",data:De.url,"aria-hidden":"true",onLoad:b})}}}}),Dt=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:u}}=Y(),t=k(null),a=k(u.screen.height),s=k(e.container===!0?0:u.screen.width),f=k({position:0,direction:"down",inflectionPoint:0}),c=k(0),l=k(Re.value===!0?0:pe()),r=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),y=m(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),g=m(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function h(v){if(e.container===!0||document.qScrollPrevented!==!0){const w={position:v.position.top,direction:v.direction,directionChanged:v.directionChanged,inflectionPoint:v.inflectionPoint.top,delta:v.delta.top};f.value=w,e.onScroll!==void 0&&i("scroll",w)}}function _(v){const{height:w,width:L}=v;let M=!1;a.value!==w&&(M=!0,a.value=w,e.onScrollHeight!==void 0&&i("scrollHeight",w),p()),s.value!==L&&(M=!0,s.value=L),M===!0&&e.onResize!==void 0&&i("resize",v)}function $({height:v}){c.value!==v&&(c.value=v,p())}function p(){if(e.container===!0){const v=a.value>c.value?pe():0;l.value!==v&&(l.value=v)}}let B=null;const F={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:m(()=>s.value+l.value),rows:m(()=>{const v=e.view.toLowerCase().split(" ");return{top:v[0].split(""),middle:v[1].split(""),bottom:v[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:f,animate(){B!==null?clearTimeout(B):document.body.classList.add("q-body--layout-animate"),B=setTimeout(()=>{B=null,document.body.classList.remove("q-body--layout-animate")},155)},update(v,w,L){F[v][w]=L}};if(We(qe,F),pe()>0){let L=function(){v=null,w.classList.remove("hide-scrollbar")},M=function(){if(v===null){if(w.scrollHeight>u.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(v);v=setTimeout(L,300)},V=function(D){v!==null&&D==="remove"&&(clearTimeout(v),L()),window[`${D}EventListener`]("resize",M)},v=null;const w=document.body;C(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),Ct(()=>{V("remove")})}return()=>{const v=St(n.default,[x(Bt,{onScroll:h}),x(Qe,{onResize:_})]),w=x("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},v);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(Qe,{onResize:$}),x("div",{class:"absolute-full",style:y.value},[x("div",{class:"scroll",style:g.value},[w])])]):w}}});const Qt=Fe({name:"MenuComponent",setup(){const e=qt(),n=Lt();return{doLogout:()=>{try{n.doLogout(),e.push({name:"login"})}catch{}}}}});function At(e,n,i,u,t,a){return Q(),A(zt,{class:"bg-primary custom-aside"},{default:q(()=>[S(X,{header:"",class:"q-pa-sm q-pt-lg text-center"},{default:q(()=>[S(kt,{width:"60px",src:"/images/logoWhite.svg"})]),_:1}),e.$hasPermission("list-meta-metric")?(Q(),A(ae,{key:0,to:"/dashboard"},{default:q(()=>[S(oe,null,{default:q(()=>[S(X,{class:"text-center"},{default:q(()=>[S(ee,{flat:"",size:"18pt",dense:"",rounded:"",name:"img:/images/dashboard.svg"})]),_:1})]),_:1})]),_:1})):ne("",!0),e.$hasPermission("list-business")?(Q(),A(ae,{key:1,to:"/companies?page=1&perPage=12&search=",class:"q-mt-sm"},{default:q(()=>[S(oe,null,{default:q(()=>[S(X,{class:"text-center"},{default:q(()=>[S(ee,{flat:"",size:"18pt",dense:"",rounded:"",name:"img:/images/company.svg"})]),_:1})]),_:1})]),_:1})):ne("",!0),e.$hasPermission("list-users")?(Q(),A(ae,{key:2,to:"/users?page=1&perPage=12&search=",class:"q-mt-sm"},{default:q(()=>[S(oe,null,{default:q(()=>[S(X,{class:"text-center"},{default:q(()=>[S(ee,{flat:"",size:"18pt",dense:"",rounded:"",name:"img:/images/users.svg"})]),_:1})]),_:1})]),_:1})):ne("",!0),S(ae,{class:"absolute-bottom",clickable:"",onClick:e.doLogout},{default:q(()=>[S(oe,null,{default:q(()=>[S(X,{class:"text-center"},{default:q(()=>[S(ee,{flat:"",style:{"margin-left":"-5px"},size:"20pt",dense:"",rounded:"",name:"img:/images/logout.svg"})]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})}var Ht=Ve(Qt,[["render",At]]);const Wt=Fe({name:"MainLayout",components:{MenuComponent:Ht},setup(){const e=k(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Rt(e,n,i,u,t,a){const s=Pe("menu-component"),f=Pe("router-view");return Q(),A(Dt,{view:"lHh Lpr lFf"},{default:q(()=>[e.$route.path!=="/"&&e.$route.path!=="/login"&&e.$route.path!=="/recovery"?(Q(),A(Pt,{key:0,width:100,modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",class:"q-pa-md"},{default:q(()=>[S(s)]),_:1},8,["modelValue"])):ne("",!0),S(Ot,null,{default:q(()=>[(Q(),A(f,{key:e.$route.fullPath}))]),_:1})]),_:1})}var Ut=Ve(Wt,[["render",Rt]]);export{Ut as default};
