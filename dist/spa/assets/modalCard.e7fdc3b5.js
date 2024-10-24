import{ae as _e,o as $,e as g,G as C,I as R,r as H,af as Y,h as te,D as Ce,g as z,B,C as Se,E as A,K as j,k as O,Q as V,ag as ne,c as Le,U as Be,u as He,ah as Me,t as We,ai as Pe,w as $e,aj as ze,z as Ae,ak as Qe,P as De,al as Re,m as ve,q as me,am as je,v as ge,an as Ie,ao as Ke,f as Ne,ap as Oe,aq as Ve,Y as Fe,_ as Ue,$ as le,a0 as ae,a1 as P,a2 as K,a6 as Ye,ar as Ge,F as Xe,aa as Je,a4 as Ze,as as ie,at as et,au as tt}from"./index.2f0c4fae.js";function F(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),_e.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const oe=["B","KB","MB","GB","TB","PB"];function gt(e,t=1){let n=0;for(;parseInt(e,10)>=1024&&n<oe.length-1;)e/=1024,++n;return`${e.toFixed(t)}${oe[n]}`}function pt(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bt(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function yt(e,t,n){if(n<=t)return t;const l=n-t+1;let a=t+(e-t)%l;return a<t&&(a=l+a),a===0?0:a}function xt(e,t=2,n="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(n)+l}var wt=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=g(()=>parseInt(e.lines,10)),l=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=g(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:a.value,class:l.value},R(t.default))}}),qt=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},R(t.default))}});const nt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function lt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:a,emit:s}=j(),o=H(null);let u=null;function f(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Y(i,13)===!0&&c.toggle(i)},contextClick(i){a.hide(i),te(i),Ce(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:te,mobileTouch(i){if(c.mobileCleanup(i),f(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const d=i.target;z(c,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&i!==void 0&&F()}}),n=function(i=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let d;i===!0?a.$q.platform.is.mobile===!0?d=[[o.value,"touchstart","mobileTouch","passive"]]:d=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:d=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],z(c,"anchor",d)});function v(){O(c,"anchor")}function p(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function y(){if(l.target===!1||l.target===""||a.$el.parentNode===null)o.value=null;else if(l.target===!0)p(a.$el.parentNode);else{let i=l.target;if(typeof l.target=="string")try{i=document.querySelector(l.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return B(()=>l.contextMenu,i=>{o.value!==null&&(v(),n(i))}),B(()=>l.target,()=>{o.value!==null&&v(),y()}),B(()=>l.noParentEvent,i=>{o.value!==null&&(i===!0?v():n())}),Se(()=>{y(),t!==!0&&l.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),A(()=>{u!==null&&clearTimeout(u),v()}),{anchorEl:o,canShow:f,anchorEvents:c}}function at(e,t){const n=H(null);let l;function a(u,f){const c=`${f!==void 0?"add":"remove"}EventListener`,v=f!==void 0?f:l;u!==window&&u[c]("scroll",v,V.passive),window[c]("scroll",v,V.passive),l=f}function s(){n.value!==null&&(a(n.value),n.value=null)}const o=B(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return A(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:Q}=V,_=[];function D(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=ne.length-1;for(;n>=0;){const l=ne[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=_.length-1;l>=0;l--){const a=_[l];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function it(e){_.push(e),_.length===1&&(document.addEventListener("mousedown",D,Q),document.addEventListener("touchstart",D,Q))}function re(e){const t=_.findIndex(n=>n===e);t!==-1&&(_.splice(t,1),_.length===0&&(document.removeEventListener("mousedown",D,Q),document.removeEventListener("touchstart",D,Q)))}let se,ue;function ce(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const U={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{U[`${e}#ltr`]=e,U[`${e}#rtl`]=e});function de(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:U[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function rt(e,t){let{top:n,left:l,right:a,bottom:s,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],s+=t[1],a+=t[0],o+=t[0],u+=t[1]),{top:n,bottom:s,height:u,left:l,right:a,width:o,middle:l+(a-l)/2,center:n+(s-n)/2}}function st(e,t,n){let{top:l,left:a}=e.getBoundingClientRect();return l+=t.top,a+=t.left,n!==void 0&&(l+=n[1],a+=n[0]),{top:l,bottom:l+1,height:1,left:a,right:a+1,width:1,middle:a,center:l}}function ut(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function fe(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function pe(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{pe(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:u,fit:f,cover:c,maxHeight:v,maxWidth:p}=e;if(Le.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:b,offsetTop:q}=window.visualViewport;b!==se&&(L.setProperty("--q-pe-left",b+"px"),se=b),q!==ue&&(L.setProperty("--q-pe-top",q+"px"),ue=q)}const{scrollLeft:y,scrollTop:i}=n,d=u===void 0?rt(a,c===!0?[0,0]:l):st(a,u,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:w,offsetHeight:T}=n,{elWidth:M,elHeight:S}=f===!0||c===!0?{elWidth:Math.max(d.width,w),elHeight:c===!0?Math.max(d.height,T):T}:{elWidth:w,elHeight:T};let r={maxWidth:p,maxHeight:v};(f===!0||c===!0)&&(r.minWidth=d.width+"px",c===!0&&(r.minHeight=d.height+"px")),Object.assign(n.style,r);const x=ut(M,S);let h=fe(d,x,s,o);if(u===void 0||l===void 0)N(h,d,x,s,o);else{const{top:L,left:b}=h;N(h,d,x,s,o);let q=!1;if(h.top!==L){q=!0;const k=2*l[1];d.center=d.top-=k,d.bottom-=k+2}if(h.left!==b){q=!0;const k=2*l[0];d.middle=d.left-=k,d.right-=k+2}q===!0&&(h=fe(d,x,s,o),N(h,d,x,s,o))}r={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(r.maxHeight=h.maxHeight+"px",d.height>h.maxHeight&&(r.minHeight=r.maxHeight)),h.maxWidth!==void 0&&(r.maxWidth=h.maxWidth+"px",d.width>h.maxWidth&&(r.minWidth=r.maxWidth)),Object.assign(n.style,r),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==y&&(n.scrollLeft=y)}function N(e,t,n,l,a){const s=n.bottom,o=n.right,u=Be(),f=window.innerHeight-u,c=document.body.clientWidth;if(e.top<0||e.top+s>f)if(a.vertical==="center")e.top=t[l.vertical]>f/2?Math.max(0,f-s):0,e.maxHeight=Math.min(s,f);else if(t[l.vertical]>f/2){const v=Math.min(f,l.vertical==="center"?t.center:l.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,v),e.top=Math.max(0,v-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,f-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),a.horizontal==="middle")e.left=t[l.horizontal]>c/2?Math.max(0,c-o):0;else if(t[l.horizontal]>c/2){const v=Math.min(c,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,c-e.left)}var ct=$({name:"QTooltip",inheritAttrs:!1,props:{...nt,...He,...Me,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ce},self:{type:String,default:"top middle",validator:ce},offset:{type:Array,default:()=>[14,14],validator:ot},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...We],setup(e,{slots:t,emit:n,attrs:l}){let a,s;const o=j(),{proxy:{$q:u}}=o,f=H(null),c=H(!1),v=g(()=>de(e.anchor,u.lang.rtl)),p=g(()=>de(e.self,u.lang.rtl)),y=g(()=>e.persistent!==!0),{registerTick:i,removeTick:d}=Pe(),{registerTimeout:w}=$e(),{transitionProps:T,transitionStyle:M}=ze(e),{localScrollTarget:S,changeScrollEvent:r,unconfigureScrollTarget:x}=at(e,Z),{anchorEl:h,canShow:L,anchorEvents:b}=lt({showing:c,configureAnchorEl:ke}),{show:q,hide:k}=Ae({showing:c,canShow:L,handleShow:ye,handleHide:xe,hideOnRouteChange:y,processOnMount:!0});Object.assign(b,{delayShow:we,delayHide:qe});const{showPortal:G,hidePortal:X,renderPortal:be}=Qe(o,f,Ee,"tooltip");if(u.platform.is.mobile===!0){const m={anchorEl:h,innerRef:f,onClickOutside(E){return k(E),E.target.classList.contains("q-dialog__backdrop")&&ve(E),!0}},I=g(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);B(I,E=>{(E===!0?it:re)(m)}),A(()=>{re(m)})}function ye(m){G(),i(()=>{s=new MutationObserver(()=>W()),s.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),W(),Z()}),a===void 0&&(a=B(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,W)),w(()=>{G(!0),n("show",m)},e.transitionDuration)}function xe(m){d(),X(),J(),w(()=>{X(!0),n("hide",m)},e.transitionDuration)}function J(){s!==void 0&&(s.disconnect(),s=void 0),a!==void 0&&(a(),a=void 0),x(),O(b,"tooltipTemp")}function W(){pe({targetEl:f.value,offset:e.offset,anchorEl:h.value,anchorOrigin:v.value,selfOrigin:p.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function we(m){if(u.platform.is.mobile===!0){F(),document.body.classList.add("non-selectable");const I=h.value,E=["touchmove","touchcancel","touchend","click"].map(ee=>[I,ee,"delayHide","passiveCapture"]);z(b,"tooltipTemp",E)}w(()=>{q(m)},e.delay)}function qe(m){u.platform.is.mobile===!0&&(O(b,"tooltipTemp"),F(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),w(()=>{k(m)},e.hideDelay)}function ke(){if(e.noParentEvent===!0||h.value===null)return;const m=u.platform.is.mobile===!0?[[h.value,"touchstart","delayShow","passive"]]:[[h.value,"mouseenter","delayShow","passive"],[h.value,"mouseleave","delayHide","passive"]];z(b,"anchor",m)}function Z(){if(h.value!==null||e.scrollTarget!==void 0){S.value=De(h.value,e.scrollTarget);const m=e.noParentEvent===!0?W:k;r(S.value,m)}}function Te(){return c.value===!0?C("div",{...l,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,M.value],role:"tooltip"},R(t.default)):null}function Ee(){return C(Re,T.value,Te)}return A(J),Object.assign(o.proxy,{updatePosition:W}),be}}),kt=$({name:"QItem",props:{...me,...je,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=j(),a=ge(e,l),{hasLink:s,linkAttrs:o,linkClass:u,linkTag:f,navigateOnClick:c}=Ie(),v=H(null),p=H(null),y=g(()=>e.clickable===!0||s.value===!0||e.tag==="label"),i=g(()=>e.disable!==!0&&y.value===!0),d=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=g(()=>{if(e.insetLevel===void 0)return null;const r=l.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function T(r){i.value===!0&&(p.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===v.value?p.value.focus():document.activeElement===p.value&&v.value.focus()),c(r))}function M(r){if(i.value===!0&&Y(r,[13,32])===!0){ve(r),r.qKeyEvent=!0;const x=new MouseEvent("click",r);x.qKeyEvent=!0,v.value.dispatchEvent(x)}n("keyup",r)}function S(){const r=Ke(t.default,[]);return i.value===!0&&r.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:p})),r}return()=>{const r={ref:v,class:d.value,style:w.value,role:"listitem",onClick:T,onKeyup:M};return i.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,o.value)):y.value===!0&&(r["aria-disabled"]="true"),C(f.value,r,S())}}}),Tt=$({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=j(),l=ge(e,n.proxy.$q),a=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:a.value},R(t.default))}});function he(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var dt=Ne({name:"close-popup",beforeMount(e,{value:t}){const n={depth:he(t),handler(l){n.depth!==0&&setTimeout(()=>{const a=Oe(e);a!==void 0&&Ve(a,l,n.depth)})},handlerKey(l){Y(l,13)===!0&&n.handler(l)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=he(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const ft=Fe({name:"ModalCard",props:{title:String}}),ht={class:"text-h5 text-weight-bold text-primary"};function vt(e,t,n,l,a,s){return le(),ae(tt,{class:"round-10 modal-card q-px-lg q-py-md"},{default:P(()=>[K(ie,null,{default:P(()=>[Ye("span",ht,Ge(e.title),1),Xe((le(),ae(Je,{rounded:"",size:"7pt",flat:"",dense:"",class:"float-right q-mt-sm",icon:"img:/images/close.svg"},{default:P(()=>[K(ct,null,{default:P(()=>[Ze(" Cerrar ")]),_:1})]),_:1})),[[dt]])]),_:1}),K(ie,{style:{"margin-top":"-10px"}},{default:P(()=>[et(e.$slots,"body")]),_:3})]),_:3})}var Et=Ue(ft,[["render",vt]]);export{dt as C,Et as M,wt as Q,kt as a,bt as b,F as c,qt as d,ct as e,Tt as f,lt as g,ot as h,at as i,de as j,it as k,pt as l,gt as m,yt as n,xt as p,re as r,pe as s,nt as u,ce as v};
