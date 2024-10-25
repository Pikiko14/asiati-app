import{Q as J}from"./QPage.26cd991d.js";import{e as $,o as X,r as d,w as T,T as ee,C as oe,G as y,al as te,I as ae,aB as se,B as ne,ay as L,K as re,Y as z,Z as x,_ as P,$ as f,aC as p,a6 as u,a2 as n,a1 as g,a8 as b,a5 as D,aa as _,a3 as ie,ab as le,a7 as ue,ac as R,au as de,as as ce,ad as me,a4 as Q,a0 as ge}from"./index.f8830be8.js";import{Q as N}from"./QForm.2f7c127e.js";import{u as E}from"./auth.92ad8fad.js";import{notification as Z}from"./notification.9f215daf.js";const fe={ratio:[String,Number]};function ve(e,o){return $(()=>{const r=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const he=1.7778;var ye=X({name:"QImg",props:{...fe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:he},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:r}){const m=d(e.initialRatio),c=ve(e,m),l=re(),{registerTimeout:t,removeTimeout:s}=T(),{registerTimeout:w,removeTimeout:q}=T(),k=$(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),i=$(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),v=[d(null),d(k.value)],h=d(0),C=d(!1),F=d(!1),M=$(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),U=$(()=>({width:e.width,height:e.height})),j=$(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),O=$(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function H(){if(q(),e.loadingShowDelay===0){C.value=!0;return}w(()=>{C.value=!0},e.loadingShowDelay)}function I(){q(),C.value=!1}function G({target:a}){L(l)===!1&&(s(),m.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,B(a,1))}function B(a,S){S===1e3||L(l)===!0||(a.complete===!0?K(a):t(()=>{B(a,S+1)},50))}function K(a){L(l)!==!0&&(h.value=h.value^1,v[h.value].value=null,I(),a.getAttribute("__qerror")!=="true"&&(F.value=!1),r("load",a.currentSrc||a.src))}function W(a){s(),I(),F.value=!0,v[h.value].value=i.value,v[h.value^1].value=k.value,r("error",a)}function A(a){const S=v[a].value,V={key:"img_"+a,class:j.value,style:O.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...S};return h.value===a?Object.assign(V,{class:V.class+"current",onLoad:G,onError:W}):V.class+="loaded",y("div",{class:"q-img__container absolute-full",key:"img"+a},y("img",V))}function Y(){return C.value===!1?y("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ae(o[F.value===!0?"error":"default"])):y("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[y(se,{color:e.spinnerColor,size:e.spinnerSize})])}{let a=function(){ne(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,S=>{s(),F.value=!1,S===null?(I(),v[h.value^1].value=k.value):H(),v[h.value].value=S},{immediate:!0})};ee.value===!0?oe(a):a()}return()=>{const a=[];return c.value!==null&&a.push(y("div",{key:"filler",style:c.value})),v[0].value!==null&&a.push(A(0)),v[1].value!==null&&a.push(A(1)),a.push(y(te,{name:"q-transition--fade"},Y)),y("div",{key:"main",class:M.value,style:U.value,role:"img","aria-label":e.alt},a)}}});const pe=z({name:"RecoveryForm",props:{token:{type:String,required:!1,default:()=>""}},emits:["close-modal"],setup(e,{emit:o}){const r=d({password:"",token:e.token,confirmation_password:""}),m=x(),c=d(""),l=E(),t=d(!1),s=d(!1),w=()=>{o("close-modal")},q=async()=>{if(t.value=!0,e.token)return await k(),!1;try{const i=await l.initRecoveryPassword({email:c.value});i!=null&&i.success&&(Z("positice",i==null?void 0:i.message,"primary"),w())}catch{}finally{t.value=!1}},k=async()=>{try{const i=await l.doChangePassword(r.value);i!=null&&i.success&&(Z("positice",i==null?void 0:i.message,"primary"),w(),m.push({name:"login"}))}catch{}finally{t.value=!1}};return{email:c,loading:t,onSubmit:q,closeModal:w,recoveryData:r,showPassword:s}}}),we={class:"row d-flex align-center justify-center"},Se={class:"col-12 text-center text-h5 text-weight-semi-bold"},$e={key:0},_e={key:1},ke={class:"col-12 q-mt-lg"},be={key:0,class:"col-12"},qe={key:1,class:"col-12"},Ce={key:2,class:"col-12"},Fe={class:"col-12 q-mt-sm"},Ve={class:"col-12 q-mt-lg"},ze=u("span",{class:"q-pl-sm text-accent"},"Regresar a Iniciar sesi\xF3n",-1);function Pe(e,o,r,m,c,l){return f(),p("div",we,[u("div",Se,[e.token?(f(),p("span",_e,"Ingresa tu nueva contrase\xF1a")):(f(),p("span",$e," \xBFOlvidaste tu contrase\xF1a? "))]),u("div",ke,[n(N,{class:"row full-width",onSubmit:e.onSubmit},{default:g(()=>[e.token?D("",!0):(f(),p("div",be,[n(b,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=t=>e.email=t),placeholder:"Ingresa tu correo electr\xF3nico",outlined:"",rounded:"",rules:[t=>!!t||"Este campo es requerido",t=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)||"Ingresa un correo electr\xF3nico valido"]},null,8,["modelValue","rules"])])),e.token?(f(),p("div",qe,[n(b,{type:e.showPassword?"text":"password",modelValue:e.recoveryData.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.recoveryData.password=t),placeholder:"**********",outlined:"",rounded:"",rules:[t=>!!t||"Este campo es requerido",t=>/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(t)||"Ingresa una contrase\xF1a valida"]},{append:g(()=>[n(_,{onClick:o[1]||(o[1]=t=>e.showPassword=!e.showPassword),flat:"",dense:"",rounded:"",icon:"img:images/eye.svg"})]),_:1},8,["type","modelValue","rules"])])):D("",!0),e.token?(f(),p("div",Ce,[n(b,{type:e.showPassword?"text":"password",modelValue:e.recoveryData.confirmation_password,"onUpdate:modelValue":o[4]||(o[4]=t=>e.recoveryData.confirmation_password=t),placeholder:"**********",outlined:"",rounded:"",rules:[t=>!!t||"Este campo es requerido",t=>/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(t)||"Ingresa una contrase\xF1a valida"]},{append:g(()=>[n(_,{onClick:o[3]||(o[3]=t=>e.showPassword=!e.showPassword),flat:"",dense:"",rounded:"",icon:"img:images/eye.svg"})]),_:1},8,["type","modelValue","rules"])])):D("",!0),u("div",Fe,[n(_,{loading:e.loading,rounded:"",size:"12pt",label:"Recuperar contrase\xF1a","no-caps":"",unelevated:"",color:"primary",class:"full-width",type:"submit"},null,8,["loading"])]),u("div",Ve,[n(_,{onClick:e.closeModal,flat:"",rounded:"",size:"12pt","no-caps":"",unelevated:"",color:"trasnparent",class:"full-width"},{default:g(()=>[n(ie,{style:{"margin-top":"-4px"},size:"15pt",class:"float-left",name:"img:/images/back.svg"}),ze]),_:1},8,["onClick"])])]),_:1},8,["onSubmit"])])])}var Ie=P(pe,[["render",Pe]]);const Le=z({name:"LoginFormView",emits:["do-login"],props:{loading:Boolean},components:{RecoveryFormVue:Ie},setup(e,{emit:o}){const r=le(),m=x(),c=d(""),l=d(!1),t=d({username:null,password:null}),s=d(!1),w=()=>{o("do-login",t.value)};return ue(()=>{r.path==="/recovery"&&(r.query.token||m.push({name:"login"}),r.query.token&&(s.value=!0,c.value=r.query.token))}),{token:c,onSubmit:w,loginData:t,showPassword:l,recoveryPassword:s}}}),De={class:"full-width full-height d-flex flex-center items-center"},xe={class:"col-12 text-center"},Re=u("div",{class:"col-12 q-mt-xl text-h4 text-weight-semi-bold text-center"},[Q(" M\xF3dulo Financiero "),u("br"),Q(" eCommerce ")],-1),Be={class:"col-12 q-mt-xl"},Ae=u("label",{for:""},"Correo electr\xF3nico",-1),Te={class:"col-12"},Qe=u("label",{for:""},"Contrase\xF1a",-1),Ze={class:"col-12 text-right"},Ne={class:"col-12 q-mt-xl"};function Ee(e,o,r,m,c,l){const t=R("RecoveryFormVue");return f(),p("section",De,[n(N,{onSubmit:e.onSubmit,class:"row q-px-xl"},{default:g(()=>[u("div",xe,[n(ye,{src:"/images/logo.svg",width:"200px"})]),Re,u("div",Be,[Ae,n(b,{modelValue:e.loginData.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.loginData.username=s),placeholder:"Ingresa tu correo electr\xF3nico",outlined:"",rounded:"",rules:[s=>!!s||"Este campo es requerido",s=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)||"Ingresa un correo electr\xF3nico valido"]},null,8,["modelValue","rules"])]),u("div",Te,[Qe,n(b,{type:e.showPassword?"text":"password",modelValue:e.loginData.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.loginData.password=s),placeholder:"**********",outlined:"",rounded:"",rules:[s=>!!s||"Este campo es requerido",s=>/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(s)||"Ingresa una contrase\xF1a valida"]},{append:g(()=>[n(_,{onClick:o[1]||(o[1]=s=>e.showPassword=!e.showPassword),flat:"",dense:"",rounded:"",icon:"img:images/eye.svg"})]),_:1},8,["type","modelValue","rules"])]),u("div",Ze,[u("span",{onClick:o[3]||(o[3]=s=>e.recoveryPassword=!0),class:"text-primary text-weight-medium font-12 cursor-pointer"},"Olvide mi contrase\xF1a")]),u("div",Ne,[n(_,{rounded:"",size:"12pt",label:"Iniciar sesi\xF3n","no-caps":"",unelevated:"",color:"primary",class:"full-width",type:"submit"})])]),_:1},8,["onSubmit"]),n(me,{modelValue:e.recoveryPassword,"onUpdate:modelValue":o[5]||(o[5]=s=>e.recoveryPassword=s)},{default:g(()=>[n(de,{class:"round-10 recovery-card q-pa-lg"},{default:g(()=>[n(ce,null,{default:g(()=>[n(t,{token:e.token,onCloseModal:o[4]||(o[4]=s=>e.recoveryPassword=!1)},null,8,["token"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var Me=P(Le,[["render",Ee]]);const Ue=z({name:"LoginComponent",components:{LoginForm:Me},setup(){const e=x(),o=E(),r=d(!1);return{doLogin:async c=>{try{const l=await o.doLogin(c);l&&l.success&&e.push({name:"dashboard"})}catch{}},loading:r}}}),je={class:"login-form row background"},Oe={class:"col-12 col-md-4 mobile-overflow"};function He(e,o,r,m,c,l){const t=R("LoginForm");return f(),p("section",je,[u("div",Oe,[n(t,{loading:e.loading,onDoLogin:e.doLogin,key:"login-form"},null,8,["loading","onDoLogin"])])])}var Ge=P(Ue,[["render",He]]);const Ke=z({name:"IndexPage",components:{Login:Ge},setup(){return{}}});function We(e,o,r,m,c,l){const t=R("Login");return f(),ge(J,{class:"login-page"},{default:g(()=>[n(t)]),_:1})}var to=P(Ke,[["render",We]]);export{to as default};