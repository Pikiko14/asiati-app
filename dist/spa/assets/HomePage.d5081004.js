var Zt=Object.defineProperty;var Lt=(e,n,r)=>n in e?Zt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var et=(e,n,r)=>(Lt(e,typeof n!="symbol"?n+"":n,r),r);import{Q as Rt,a as zt}from"./QForm.907399ed.js";import{e as p,as as mt,at as Ut,o as vt,au as Xt,q as Jt,v as Wt,av as Gt,r as k,aw as Kt,B as le,G as g,ab as ve,I as ea,K as ft,ax as ta,D as tt,ah as N,ay as aa,am as ht,Y as ie,_ as ue,$ as E,a0 as gt,a1 as ee,af as x,a2 as F,ag as na,F as oa,az as Ae,ae as Q,aA as at,aB as nt,aC as se,a3 as ra,a5 as K,aj as la,E as sa}from"./index.e94012db.js";import{u as ia,a as ua,Q as ca,b as we,c as ot,C as da,d as ma,M as va,H as fa}from"./QMarkupTable.c50713a9.js";import{p as w}from"./QList.f494f610.js";import{u as ha}from"./auth.4c1cf49a.js";import"./notification.c885a505.js";function ga(){let e=Object.create(null);return{getCache:(n,r)=>e[n]===void 0?e[n]=typeof r=="function"?r():r:e[n],setCache(n,r){e[n]=r},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const X=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ya(e,n,r){return Object.prototype.toString.call(e)==="[object Date]"&&(r=e.getDate(),n=e.getMonth()+1,e=e.getFullYear()),Da(Be(e,n,r))}function rt(e,n,r){return pt(_a(e,n,r))}function pa(e){return Ma(e)===0}function be(e,n){return n<=6?31:n<=11||pa(e)?30:29}function Ma(e){const n=X.length;let r=X[0],l,i,s,u,c;if(e<r||e>=X[n-1])throw new Error("Invalid Jalaali year "+e);for(c=1;c<n&&(l=X[c],i=l-r,!(e<l));c+=1)r=l;return u=e-r,i-u<6&&(u=u-i+S(i+4,33)*33),s=T(T(u+1,33)-1,4),s===-1&&(s=4),s}function yt(e,n){const r=X.length,l=e+621;let i=-14,s=X[0],u,c,f,b,v;if(e<s||e>=X[r-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<r&&(u=X[v],c=u-s,!(e<u));v+=1)i=i+S(c,33)*8+S(T(c,33),4),s=u;b=e-s,i=i+S(b,33)*8+S(T(b,33)+3,4),T(c,33)===4&&c-b===4&&(i+=1);const M=S(l,4)-S((S(l,100)+1)*3,4)-150,q=20+i-M;return n||(c-b<6&&(b=b-c+S(c+4,33)*33),f=T(T(b+1,33)-1,4),f===-1&&(f=4)),{leap:f,gy:l,march:q}}function _a(e,n,r){const l=yt(e,!0);return Be(l.gy,3,l.march)+(n-1)*31-S(n,7)*(n-7)+r-1}function Da(e){const n=pt(e).gy;let r=n-621,l,i,s;const u=yt(r,!1),c=Be(n,3,u.march);if(s=e-c,s>=0){if(s<=185)return i=1+S(s,31),l=T(s,31)+1,{jy:r,jm:i,jd:l};s-=186}else r-=1,s+=179,u.leap===1&&(s+=1);return i=7+S(s,30),l=T(s,30)+1,{jy:r,jm:i,jd:l}}function Be(e,n,r){let l=S((e+S(n-8,6)+100100)*1461,4)+S(153*T(n+9,12)+2,5)+r-34840408;return l=l-S(S(e+100100+S(n-8,6),100)*3,4)+752,l}function pt(e){let n=4*e+139361631;n=n+S(S(4*e+183187720,146097)*3,4)*4-3908;const r=S(T(n,1461),4)*5+308,l=S(T(r,153),5)+1,i=T(S(r,153),12)+1;return{gy:S(n,1461)-100100+S(8-i,6),gm:i,gd:l}}function S(e,n){return~~(e/n)}function T(e,n){return e-~~(e/n)*n}const ba=["gregorian","persian"],wa={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>ba.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Ca=["update:modelValue"];function z(e){return e.year+"/"+w(e.month)+"/"+w(e.day)}function Sa(e,n){const r=p(()=>e.disable!==!0&&e.readonly!==!0),l=p(()=>r.value===!0?0:-1),i=p(()=>{const c=[];return e.color!==void 0&&c.push(`bg-${e.color}`),e.textColor!==void 0&&c.push(`text-${e.textColor}`),c.join(" ")});function s(){return e.locale!==void 0?{...n.lang.date,...e.locale}:n.lang.date}function u(c){const f=new Date,b=c===!0?null:0;if(e.calendar==="persian"){const v=ya(f);return{year:v.jy,month:v.jm,day:v.jd}}return{year:f.getFullYear(),month:f.getMonth()+1,day:f.getDate(),hour:b,minute:b,second:b,millisecond:b}}return{editable:r,tabindex:l,headerClass:i,getLocale:s,getCurrentDate:u}}const Mt=864e5,Ya=36e5,Te=6e4,_t="YYYY-MM-DDTHH:mm:ss.SSSZ",$a=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,xa=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Ie={};function Ha(e,n){const r="("+n.days.join("|")+")",l=e+r;if(Ie[l]!==void 0)return Ie[l];const i="("+n.daysShort.join("|")+")",s="("+n.months.join("|")+")",u="("+n.monthsShort.join("|")+")",c={};let f=0;const b=e.replace(xa,M=>{switch(f++,M){case"YY":return c.YY=f,"(-?\\d{1,2})";case"YYYY":return c.YYYY=f,"(-?\\d{1,4})";case"M":return c.M=f,"(\\d{1,2})";case"MM":return c.M=f,"(\\d{2})";case"MMM":return c.MMM=f,u;case"MMMM":return c.MMMM=f,s;case"D":return c.D=f,"(\\d{1,2})";case"Do":return c.D=f++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return c.D=f,"(\\d{2})";case"H":return c.H=f,"(\\d{1,2})";case"HH":return c.H=f,"(\\d{2})";case"h":return c.h=f,"(\\d{1,2})";case"hh":return c.h=f,"(\\d{2})";case"m":return c.m=f,"(\\d{1,2})";case"mm":return c.m=f,"(\\d{2})";case"s":return c.s=f,"(\\d{1,2})";case"ss":return c.s=f,"(\\d{2})";case"S":return c.S=f,"(\\d{1})";case"SS":return c.S=f,"(\\d{2})";case"SSS":return c.S=f,"(\\d{3})";case"A":return c.A=f,"(AM|PM)";case"a":return c.a=f,"(am|pm)";case"aa":return c.aa=f,"(a\\.m\\.|p\\.m\\.)";case"ddd":return i;case"dddd":return r;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return c.Z=f,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return c.ZZ=f,"(Z|[+-]\\d{2}\\d{2})";case"X":return c.X=f,"(-?\\d+)";case"x":return c.x=f,"(-?\\d{4,})";default:return f--,M[0]==="["&&(M=M.substring(1,M.length-1)),M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:c,regex:new RegExp("^"+b)};return Ie[l]=v,v}function Dt(e,n){return e!==void 0?e:n!==void 0?n.date:Ut.date}function lt(e,n=""){const r=e>0?"-":"+",l=Math.abs(e),i=Math.floor(l/60),s=l%60;return r+w(i)+n+w(s)}function qa(e,n,r,l,i){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(i!==void 0&&Object.assign(s,i),e==null||e===""||typeof e!="string")return s;n===void 0&&(n=_t);const u=Dt(r,mt.props),c=u.months,f=u.monthsShort,{regex:b,map:v}=Ha(n,u),M=e.match(b);if(M===null)return s;let q="";if(v.X!==void 0||v.x!==void 0){const H=parseInt(M[v.X!==void 0?v.X:v.x],10);if(isNaN(H)===!0||H<0)return s;const V=new Date(H*(v.X!==void 0?1e3:1));s.year=V.getFullYear(),s.month=V.getMonth()+1,s.day=V.getDate(),s.hour=V.getHours(),s.minute=V.getMinutes(),s.second=V.getSeconds(),s.millisecond=V.getMilliseconds()}else{if(v.YYYY!==void 0)s.year=parseInt(M[v.YYYY],10);else if(v.YY!==void 0){const H=parseInt(M[v.YY],10);s.year=H<0?H:2e3+H}if(v.M!==void 0){if(s.month=parseInt(M[v.M],10),s.month<1||s.month>12)return s}else v.MMM!==void 0?s.month=f.indexOf(M[v.MMM])+1:v.MMMM!==void 0&&(s.month=c.indexOf(M[v.MMMM])+1);if(v.D!==void 0){if(s.day=parseInt(M[v.D],10),s.year===null||s.month===null||s.day<1)return s;const H=l!=="persian"?new Date(s.year,s.month,0).getDate():be(s.year,s.month);if(s.day>H)return s}v.H!==void 0?s.hour=parseInt(M[v.H],10)%24:v.h!==void 0&&(s.hour=parseInt(M[v.h],10)%12,(v.A&&M[v.A]==="PM"||v.a&&M[v.a]==="pm"||v.aa&&M[v.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),v.m!==void 0&&(s.minute=parseInt(M[v.m],10)%60),v.s!==void 0&&(s.second=parseInt(M[v.s],10)%60),v.S!==void 0&&(s.millisecond=parseInt(M[v.S],10)*10**(3-M[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(q=v.Z!==void 0?M[v.Z].replace(":",""):M[v.ZZ],s.timezoneOffset=(q[0]==="+"?-1:1)*(60*q.slice(1,3)+1*q.slice(3,5)))}return s.dateHash=w(s.year,6)+"/"+w(s.month)+"/"+w(s.day),s.timeHash=w(s.hour)+":"+w(s.minute)+":"+w(s.second)+q,s}function st(e){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);const r=new Date(n.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);const l=n.getTimezoneOffset()-r.getTimezoneOffset();n.setHours(n.getHours()-l);const i=(n-r)/(Mt*7);return 1+Math.floor(i)}function L(e,n,r){const l=new Date(e),i=`set${r===!0?"UTC":""}`;switch(n){case"year":case"years":l[`${i}Month`](0);case"month":case"months":l[`${i}Date`](1);case"day":case"days":case"date":l[`${i}Hours`](0);case"hour":case"hours":l[`${i}Minutes`](0);case"minute":case"minutes":l[`${i}Seconds`](0);case"second":case"seconds":l[`${i}Milliseconds`](0)}return l}function De(e,n,r){return(e.getTime()-e.getTimezoneOffset()*Te-(n.getTime()-n.getTimezoneOffset()*Te))/r}function bt(e,n,r="days"){const l=new Date(e),i=new Date(n);switch(r){case"years":case"year":return l.getFullYear()-i.getFullYear();case"months":case"month":return(l.getFullYear()-i.getFullYear())*12+l.getMonth()-i.getMonth();case"days":case"day":case"date":return De(L(l,"day"),L(i,"day"),Mt);case"hours":case"hour":return De(L(l,"hour"),L(i,"hour"),Ya);case"minutes":case"minute":return De(L(l,"minute"),L(i,"minute"),Te);case"seconds":case"second":return De(L(l,"second"),L(i,"second"),1e3)}}function it(e){return bt(e,L(e,"year"),"days")+1}function ut(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const ct={YY(e,n,r){const l=this.YYYY(e,n,r)%100;return l>=0?w(l):"-"+w(Math.abs(l))},YYYY(e,n,r){return r!=null?r:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return w(e.getMonth()+1)},MMM(e,n){return n.monthsShort[e.getMonth()]},MMMM(e,n){return n.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return ut(this.Q(e))},D(e){return e.getDate()},Do(e){return ut(e.getDate())},DD(e){return w(e.getDate())},DDD(e){return it(e)},DDDD(e){return w(it(e),3)},d(e){return e.getDay()},dd(e,n){return this.dddd(e,n).slice(0,2)},ddd(e,n){return n.daysShort[e.getDay()]},dddd(e,n){return n.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return st(e)},ww(e){return w(st(e))},H(e){return e.getHours()},HH(e){return w(e.getHours())},h(e){const n=e.getHours();return n===0?12:n>12?n%12:n},hh(e){return w(this.h(e))},m(e){return e.getMinutes()},mm(e){return w(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return w(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return w(Math.floor(e.getMilliseconds()/10))},SSS(e){return w(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,n,r,l){const i=l==null?e.getTimezoneOffset():l;return lt(i,":")},ZZ(e,n,r,l){const i=l==null?e.getTimezoneOffset():l;return lt(i)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ka(e,n,r,l,i){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;n===void 0&&(n=_t);const u=Dt(r,mt.props);return n.replace($a,(c,f)=>c in ct?ct[c](s,u,l,i):f===void 0?c:f.split("\\]").join("]"))}const G=20,Fa=["Calendar","Years","Months"],dt=e=>Fa.includes(e),je=e=>/^-?[\d]+\/[0-1]\d$/.test(e),re=" \u2014 ";function U(e){return e.year+"/"+w(e.month)}var Va=vt({name:"QDate",props:{...wa,...Xt,...Jt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:je},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:je},navigationMaxYearMonth:{type:String,validator:je},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:dt}},emits:[...Ca,"rangeStart","rangeEnd","navigation"],setup(e,{slots:n,emit:r}){const{proxy:l}=ft(),{$q:i}=l,s=Wt(e,i),{getCache:u}=ga(),{tabindex:c,headerClass:f,getLocale:b,getCurrentDate:v}=Sa(e,i);let M;const q=Gt(e),H=ta(q),V=k(null),Y=k(ze()),$=k(b()),wt=p(()=>ze()),Ct=p(()=>b()),Z=p(()=>v()),y=k(Ue(Y.value,$.value)),A=k(e.defaultView),Ee=i.lang.rtl===!0?"right":"left",fe=k(Ee.value),Ce=k(Ee.value),Se=y.value.year,he=k(Se-Se%G-(Se<0?G:0)),j=k(null),St=p(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(s.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),J=p(()=>e.color||"primary"),te=p(()=>e.textColor||"white"),ge=p(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Ye=p(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),P=p(()=>Ye.value.filter(t=>typeof t=="string").map(t=>qe(t,Y.value,$.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),ae=p(()=>{const t=a=>qe(a,Y.value,$.value);return Ye.value.filter(a=>Kt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ye=p(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=rt(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),$e=p(()=>e.calendar==="persian"?z:(t,a,o)=>ka(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?Y.value:a,o===void 0?$.value:o,t.year,t.timezoneOffset)),ce=p(()=>P.value.length+ae.value.reduce((t,a)=>t+1+bt(ye.value(a.to),ye.value(a.from)),0)),Pe=p(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(j.value!==null){const o=j.value.init,d=ye.value(o);return $.value.daysShort[d.getDay()]+", "+$.value.monthsShort[o.month-1]+" "+o.day+re+"?"}if(ce.value===0)return re;if(ce.value>1)return`${ce.value} ${$.value.pluralDay}`;const t=P.value[0],a=ye.value(t);return isNaN(a.valueOf())===!0?re:$.value.headerTitle!==void 0?$.value.headerTitle(a,t):$.value.daysShort[a.getDay()]+", "+$.value.monthsShort[t.month-1]+" "+t.day}),Yt=p(()=>P.value.concat(ae.value.map(a=>a.from)).sort((a,o)=>a.year-o.year||a.month-o.month)[0]),$t=p(()=>P.value.concat(ae.value.map(a=>a.to)).sort((a,o)=>o.year-a.year||o.month-a.month)[0]),Ne=p(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ce.value===0)return re;if(ce.value>1){const t=Yt.value,a=$t.value,o=$.value.monthsShort;return o[t.month-1]+(t.year!==a.year?" "+t.year+re+o[a.month-1]+" ":t.month!==a.month?re+o[a.month-1]:"")+" "+a.year}return P.value[0].year}),pe=p(()=>{const t=[i.iconSet.datetime.arrowLeft,i.iconSet.datetime.arrowRight];return i.lang.rtl===!0?t.reverse():t}),Qe=p(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):$.value.firstDayOfWeek),xt=p(()=>{const t=$.value.daysShort,a=Qe.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),R=p(()=>{const t=y.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():be(t.year,t.month)}),Ht=p(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),O=p(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),I=p(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),xe=p(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return O.value!==null&&O.value.year>=y.value.year&&(t.year.prev=!1,O.value.year===y.value.year&&O.value.month>=y.value.month&&(t.month.prev=!1)),I.value!==null&&I.value.year<=y.value.year&&(t.year.next=!1,I.value.year===y.value.year&&I.value.month<=y.value.month&&(t.month.next=!1)),t}),Me=p(()=>{const t={};return P.value.forEach(a=>{const o=U(a);t[o]===void 0&&(t[o]=[]),t[o].push(a.day)}),t}),Ze=p(()=>{const t={};return ae.value.forEach(a=>{const o=U(a.from),d=U(a.to);if(t[o]===void 0&&(t[o]=[]),t[o].push({from:a.from.day,to:o===d?a.to.day:void 0,range:a}),o<d){let m;const{year:D,month:h}=a.from,_=h<12?{year:D,month:h+1}:{year:D+1,month:1};for(;(m=U(_))<=d;)t[m]===void 0&&(t[m]=[]),t[m].push({from:void 0,to:m===d?a.to.day:void 0,range:a}),_.month++,_.month>12&&(_.year++,_.month=1)}}),t}),de=p(()=>{if(j.value===null)return;const{init:t,initHash:a,final:o,finalHash:d}=j.value,[m,D]=a<=d?[t,o]:[o,t],h=U(m),_=U(D);if(h!==B.value&&_!==B.value)return;const C={};return h===B.value?(C.from=m.day,C.includeFrom=!0):C.from=1,_===B.value?(C.to=D.day,C.includeTo=!0):C.to=R.value,C}),B=p(()=>U(y.value)),qt=p(()=>{const t={};if(e.options===void 0){for(let o=1;o<=R.value;o++)t[o]=!0;return t}const a=typeof e.options=="function"?e.options:o=>e.options.includes(o);for(let o=1;o<=R.value;o++){const d=B.value+"/"+w(o);t[o]=a(d)}return t}),kt=p(()=>{const t={};if(e.events===void 0)for(let a=1;a<=R.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:o=>e.events.includes(o);for(let o=1;o<=R.value;o++){const d=B.value+"/"+w(o);t[o]=a(d)===!0&&Ht.value(d)}}return t}),Ft=p(()=>{let t,a;const{year:o,month:d}=y.value;if(e.calendar!=="persian")t=new Date(o,d-1,1),a=new Date(o,d-1,0).getDate();else{const m=rt(o,d,1);t=new Date(m.gy,m.gm-1,m.gd);let D=d-1,h=o;D===0&&(D=12,h--),a=be(h,D)}return{days:t.getDay()-Qe.value-1,endDay:a}}),Le=p(()=>{const t=[],{days:a,endDay:o}=Ft.value,d=a<0?a+7:a;if(d<6)for(let h=o-d;h<=o;h++)t.push({i:h,fill:!0});const m=t.length;for(let h=1;h<=R.value;h++){const _={i:h,event:kt.value[h],classes:[]};qt.value[h]===!0&&(_.in=!0,_.flat=!0),t.push(_)}if(Me.value[B.value]!==void 0&&Me.value[B.value].forEach(h=>{const _=m+h-1;Object.assign(t[_],{selected:!0,unelevated:!0,flat:!1,color:J.value,textColor:te.value})}),Ze.value[B.value]!==void 0&&Ze.value[B.value].forEach(h=>{if(h.from!==void 0){const _=m+h.from-1,C=m+(h.to||R.value)-1;for(let me=_;me<=C;me++)Object.assign(t[me],{range:h.range,unelevated:!0,color:J.value,textColor:te.value});Object.assign(t[_],{rangeFrom:!0,flat:!1}),h.to!==void 0&&Object.assign(t[C],{rangeTo:!0,flat:!1})}else if(h.to!==void 0){const _=m+h.to-1;for(let C=m;C<=_;C++)Object.assign(t[C],{range:h.range,unelevated:!0,color:J.value,textColor:te.value});Object.assign(t[_],{flat:!1,rangeTo:!0})}else{const _=m+R.value-1;for(let C=m;C<=_;C++)Object.assign(t[C],{range:h.range,unelevated:!0,color:J.value,textColor:te.value})}}),de.value!==void 0){const h=m+de.value.from-1,_=m+de.value.to-1;for(let C=h;C<=_;C++)t[C].color=J.value,t[C].editRange=!0;de.value.includeFrom===!0&&(t[h].editRangeFrom=!0),de.value.includeTo===!0&&(t[_].editRangeTo=!0)}y.value.year===Z.value.year&&y.value.month===Z.value.month&&(t[m+Z.value.day-1].today=!0);const D=t.length%7;if(D>0){const h=7-D;for(let _=1;_<=h;_++)t.push({i:_,fill:!0})}return t.forEach(h=>{let _="q-date__calendar-item ";h.fill===!0?_+="q-date__calendar-item--fill":(_+=`q-date__calendar-item--${h.in===!0?"in":"out"}`,h.range!==void 0&&(_+=` q-date__range${h.rangeTo===!0?"-to":h.rangeFrom===!0?"-from":""}`),h.editRange===!0&&(_+=` q-date__edit-range${h.editRangeFrom===!0?"-from":""}${h.editRangeTo===!0?"-to":""}`),(h.range!==void 0||h.editRange===!0)&&(_+=` text-${h.color}`)),h.classes=_}),t}),Vt=p(()=>e.disable===!0?{"aria-disabled":"true"}:{});le(()=>e.modelValue,t=>{if(M===t)M=0;else{const a=Ue(Y.value,$.value);ne(a.year,a.month,a)}}),le(A,()=>{V.value!==null&&l.$el.contains(document.activeElement)===!0&&V.value.focus()}),le(()=>y.value.year+"|"+y.value.month,()=>{r("navigation",{year:y.value.year,month:y.value.month})}),le(wt,t=>{Ke(t,$.value,"mask"),Y.value=t}),le(Ct,t=>{Ke(Y.value,t,"locale"),$.value=t});function Re(){const{year:t,month:a,day:o}=Z.value,d={...y.value,year:t,month:a,day:o},m=Me.value[U(d)];(m===void 0||m.includes(d.day)===!1)&&Fe(d),He(d.year,d.month)}function Ot(t){dt(t)===!0&&(A.value=t)}function It(t,a){["month","year"].includes(t)&&(t==="month"?Je:ke)(a===!0?-1:1)}function He(t,a){A.value="Calendar",ne(t,a)}function jt(t,a){if(e.range===!1||!t){j.value=null;return}const o=Object.assign({...y.value},t),d=a!==void 0?Object.assign({...y.value},a):o;j.value={init:o,initHash:z(o),final:d,finalHash:z(d)},He(o.year,o.month)}function ze(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function qe(t,a,o){return qa(t,a,o,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ue(t,a){const o=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(o.length===0)return Xe();const d=o[o.length-1],m=qe(d.from!==void 0?d.from:d,t,a);return m.dateHash===null?Xe():m}function Xe(){let t,a;if(e.defaultYearMonth!==void 0){const o=e.defaultYearMonth.split("/");t=parseInt(o[0],10),a=parseInt(o[1],10)}else{const o=Z.value!==void 0?Z.value:v();t=o.year,a=o.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+w(a)+"/01"}}function Je(t){let a=y.value.year,o=Number(y.value.month)+t;o===13?(o=1,a++):o===0&&(o=12,a--),ne(a,o),ge.value===!0&&_e("month")}function ke(t){const a=Number(y.value.year)+t;ne(a,y.value.month),ge.value===!0&&_e("year")}function At(t){ne(t,y.value.month),A.value=e.defaultView==="Years"?"Months":"Calendar",ge.value===!0&&_e("year")}function Tt(t){ne(y.value.year,t),A.value="Calendar",ge.value===!0&&_e("month")}function Bt(t,a){const o=Me.value[a];(o!==void 0&&o.includes(t.day)===!0?Ve:Fe)(t)}function W(t){return{year:t.year,month:t.month,day:t.day}}function ne(t,a,o){if(O.value!==null&&t<=O.value.year&&((a<O.value.month||t<O.value.year)&&(a=O.value.month),t=O.value.year),I.value!==null&&t>=I.value.year&&((a>I.value.month||t>I.value.year)&&(a=I.value.month),t=I.value.year),o!==void 0){const{hour:m,minute:D,second:h,millisecond:_,timezoneOffset:C,timeHash:me}=o;Object.assign(y.value,{hour:m,minute:D,second:h,millisecond:_,timezoneOffset:C,timeHash:me})}const d=t+"/"+w(a)+"/01";d!==y.value.dateHash&&(fe.value=y.value.dateHash<d==(i.lang.rtl!==!0)?"left":"right",t!==y.value.year&&(Ce.value=fe.value),tt(()=>{he.value=t-t%G-(t<0?G:0),Object.assign(y.value,{year:t,month:a,day:1,dateHash:d})}))}function We(t,a,o){const d=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;M=d;const{reason:m,details:D}=Ge(a,o);r("update:modelValue",d,m,D)}function _e(t){const a=P.value[0]!==void 0&&P.value[0].dateHash!==null?{...P.value[0]}:{...y.value};tt(()=>{a.year=y.value.year,a.month=y.value.month;const o=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():be(a.year,a.month);a.day=Math.min(Math.max(1,a.day),o);const d=oe(a);M=d;const{details:m}=Ge("",a);r("update:modelValue",d,t,m)})}function Ge(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...W(a.target),from:W(a.from),to:W(a.to)}}:{reason:`${t}-day`,details:W(a)}}function oe(t,a,o){return t.from!==void 0?{from:$e.value(t.from,a,o),to:$e.value(t.to,a,o)}:$e.value(t,a,o)}function Fe(t){let a;if(e.multiple===!0)if(t.from!==void 0){const o=z(t.from),d=z(t.to),m=P.value.filter(h=>h.dateHash<o||h.dateHash>d),D=ae.value.filter(({from:h,to:_})=>_.dateHash<o||h.dateHash>d);a=m.concat(D).concat(t).map(h=>oe(h))}else{const o=Ye.value.slice();o.push(oe(t)),a=o}else a=oe(t);We(a,"add",t)}function Ve(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const o=oe(t);t.from!==void 0?a=e.modelValue.filter(d=>d.from!==void 0?d.from!==o.from&&d.to!==o.to:!0):a=e.modelValue.filter(d=>d!==o),a.length===0&&(a=null)}We(a,"remove",t)}function Ke(t,a,o){const d=P.value.concat(ae.value).map(m=>oe(m,t,a)).filter(m=>m.from!==void 0?m.from.dateHash!==null&&m.to.dateHash!==null:m.dateHash!==null);r("update:modelValue",(e.multiple===!0?d:d[0])||null,o)}function Et(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+f.value},[g("div",{class:"relative-position"},[g(ve,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+Ne.value,class:"q-date__header-subtitle q-date__header-link "+(A.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:c.value,...u("vY",{onClick(){A.value="Years"},onKeyup(t){t.keyCode===13&&(A.value="Years")}})},[Ne.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(ve,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+Pe.value,class:"q-date__header-title-label q-date__header-link "+(A.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:c.value,...u("vC",{onClick(){A.value="Calendar"},onKeyup(t){t.keyCode===13&&(A.value="Calendar")}})},[Pe.value]))]),e.todayBtn===!0?g(N,{class:"q-date__header-today self-start",icon:i.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:c.value,onClick:Re}):null])])}function Oe({label:t,type:a,key:o,dir:d,goTo:m,boundaries:D,cls:h}){return[g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:pe.value[0],tabindex:c.value,disable:D.prev===!1,...u("go-#"+a,{onClick(){m(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+h},[g(ve,{name:"q-transition--jump-"+d},()=>g("div",{key:o},[g(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:c.value,...u("view#"+a,{onClick:()=>{A.value=a}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:pe.value[1],tabindex:c.value,disable:D.next===!1,...u("go+#"+a,{onClick(){m(1)}})})])]}const Pt={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},Oe({label:$.value.months[y.value.month-1],type:"Months",key:y.value.month,dir:fe.value,goTo:Je,boundaries:xe.value.month,cls:" col"}).concat(Oe({label:y.value.year,type:"Years",key:y.value.year,dir:Ce.value,goTo:ke,boundaries:xe.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},xt.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(ve,{name:"q-transition--slide-"+fe.value},()=>g("div",{key:B.value,class:"q-date__calendar-days fit"},Le.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:c.value,...u("day#"+t.i,{onClick:()=>{Nt(t.i)},onMouseover:()=>{Qt(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=y.value.year===Z.value.year,a=d=>O.value!==null&&y.value.year===O.value.year&&O.value.month>d||I.value!==null&&y.value.year===I.value.year&&I.value.month<d,o=$.value.monthsShort.map((d,m)=>{const D=y.value.month===m+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(N,{class:t===!0&&Z.value.month===m+1?"q-date__today":null,flat:D!==!0,label:d,unelevated:D,color:D===!0?J.value:null,textColor:D===!0?te.value:null,tabindex:c.value,disable:a(m+1),...u("month#"+m,{onClick:()=>{Tt(m+1)}})})])});return e.yearsInMonthView===!0&&o.unshift(g("div",{class:"row no-wrap full-width"},[Oe({label:y.value.year,type:"Years",key:y.value.year,dir:Ce.value,goTo:ke,boundaries:xe.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},o)},Years(){const t=he.value,a=t+G,o=[],d=m=>O.value!==null&&O.value.year>m||I.value!==null&&I.value.year<m;for(let m=t;m<=a;m++){const D=y.value.year===m;o.push(g("div",{class:"q-date__years-item flex flex-center"},[g(N,{key:"yr"+m,class:Z.value.year===m?"q-date__today":null,flat:!D,label:m,dense:!0,unelevated:D,color:D===!0?J.value:null,textColor:D===!0?te.value:null,tabindex:c.value,disable:d(m),...u("yr#"+m,{onClick:()=>{At(m)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:pe.value[0],tabindex:c.value,disable:d(t),...u("y-",{onClick:()=>{he.value-=G}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},o),g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:pe.value[1],tabindex:c.value,disable:d(a),...u("y+",{onClick:()=>{he.value+=G}})})])])}};function Nt(t){const a={...y.value,day:t};if(e.range===!1){Bt(a,B.value);return}if(j.value===null){const o=Le.value.find(m=>m.fill!==!0&&m.i===t);if(e.noUnset!==!0&&o.range!==void 0){Ve({target:a,from:o.range.from,to:o.range.to});return}if(o.selected===!0){Ve(a);return}const d=z(a);j.value={init:a,initHash:d,final:a,finalHash:d},r("rangeStart",W(a))}else{const o=j.value.initHash,d=z(a),m=o<=d?{from:j.value.init,to:a}:{from:a,to:j.value.init};j.value=null,Fe(o===d?a:{target:a,...m}),r("rangeEnd",{from:W(m.from),to:W(m.to)})}}function Qt(t){if(j.value!==null){const a={...y.value,day:t};Object.assign(j.value,{final:a,finalHash:z(a)})}}return Object.assign(l,{setToday:Re,setView:Ot,offsetCalendar:It,setCalendarTo:He,setEditingRange:jt}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(ve,{name:"q-transition--fade"},Pt[A.value])])],a=ea(n.default);return a!==void 0&&t.push(g("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&H(t,"push"),g("div",{class:St.value,...Vt.value},[Et(),g("div",{ref:V,class:"q-date__main col column",tabindex:-1},t)])}}}),Oa=vt({name:"QPopupProxy",props:{...ia,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:n,emit:r,attrs:l}){const{proxy:i}=ft(),{$q:s}=i,u=k(!1),c=k(null),f=p(()=>parseInt(e.breakpoint,10)),{canShow:b}=ua({showing:u});function v(){return s.screen.width<f.value||s.screen.height<f.value?"dialog":"menu"}const M=k(v()),q=p(()=>M.value==="menu"?{maxHeight:"99vh"}:{});le(()=>v(),Y=>{u.value!==!0&&(M.value=Y)});function H(Y){u.value=!0,r("show",Y)}function V(Y){u.value=!1,M.value=v(),r("hide",Y)}return Object.assign(i,{show(Y){b(Y)===!0&&c.value.show(Y)},hide(Y){c.value.hide(Y)},toggle(Y){c.value.toggle(Y)}}),aa(i,"currentComponent",()=>({type:M.value,ref:c.value})),()=>{const Y={ref:c,...q.value,...l,onShow:H,onHide:V};let $;return M.value==="dialog"?$=ht:($=ca,Object.assign(Y,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),g($,Y,n.default)}}});const Ia=ie({name:"CampaignsComponent",emits:["close-modal"],props:{campaigns:{type:Array,default:()=>[]},company:{type:String,default:()=>""}},setup(e,{emit:n}){const r=k(),l=k({campaign:"",ad:"",date:{}}),i=k([]),s=k(!1),u=we(),c=p(()=>e.campaigns.map(q=>({value:q.id,label:q.name}))),f=p(()=>`${l.value.date.from||""} - ${l.value.date.to||""}`);return{ads:i,loading:s,filters:l,doFilter:async()=>{s.value=!0,u.setMetrics({});try{const q=`?from=${l.value.date.from||l.value.date}&to=${l.value.date.to||l.value.date}`,H=await u.listMetrics(e.company,l.value.ad||l.value.campaign,q);H.success&&(H.data.metrics&&H.data.metrics.length>0&&u.setMetrics(H.data.metrics.shift()),n("close-modal"))}catch{}finally{s.value=!1}},dateLabel:f,optionsCampaigns:c,filterAdsFromCampaign:async q=>{try{const H=await u.listAds(e.company,q);H.success&&(i.value=H.data.ads.map(V=>({label:V.name,value:V.id})))}catch{}},closeDate:()=>{r.value.hide()},popupProxy:r}}}),ja={class:"col-12"},Aa=x("label",{for:"",class:"text-weight-semi-bold"},"Campa\xF1a publicitaria*",-1),Ta={class:"col-12"},Ba=x("label",{for:"",class:"text-weight-semi-bold"},"Anuncio",-1),Ea={class:"col-12 q-mt-lg"},Pa=x("label",{for:"",class:"text-weight-semi-bold"},"Rango de fecha",-1);function Na(e,n,r,l,i,s){return E(),gt(Rt,{class:"row filterCampaign",onSubmit:e.doFilter},{default:ee(()=>[x("div",ja,[Aa,F(ot,{"onUpdate:modelValue":[n[0]||(n[0]=u=>e.filterAdsFromCampaign(u)),n[1]||(n[1]=u=>e.filters.campaign=u)],"emit-value":"","map-options":"",dense:"",modelValue:e.filters.campaign,label:"Selecciona una opci\xF3n",options:e.optionsCampaigns,outlined:"",rounded:"",rules:[u=>!!u||"Este campo es requerido"]},null,8,["modelValue","options","rules"])]),x("div",Ta,[Ba,F(ot,{"emit-value":"","map-options":"",dense:"",modelValue:e.filters.ad,"onUpdate:modelValue":n[2]||(n[2]=u=>e.filters.ad=u),label:"Selecciona una opci\xF3n",options:e.ads,outlined:"",rounded:""},null,8,["modelValue","options"])]),x("div",Ea,[Pa,F(na,{dense:"",modelValue:e.dateLabel,"onUpdate:modelValue":n[4]||(n[4]=u=>e.dateLabel=u),placeholder:"Ingrese su correo electr\xF3nico",outlined:"",rounded:"",rules:[u=>!!u||"Este campo es requerido"]},{default:ee(()=>[F(Oa,{ref:"popupProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:ee(()=>[F(Va,{mask:"YYYY-MM-DD","onUpdate:modelValue":[e.closeDate,n[3]||(n[3]=u=>e.filters.date=u)],style:{width:"420px"},range:"",minimal:"",modelValue:e.filters.date},null,8,["onUpdate:modelValue","modelValue"])]),_:1},512)]),_:1},8,["modelValue","rules"])]),x("div",{class:Ae(["col-12 col-md-6 q-mt-xl",{"q-pr-sm":e.$q.screen.gt.sm}])},[oa(F(N,{label:"Cancelar",color:"info","no-caps":"",rounded:"",outline:"",class:"full-width"},null,512),[[da]])],2),x("div",{class:Ae(["col-12 col-md-6 q-mt-xl",{"q-pl-sm":e.$q.screen.gt.sm}])},[F(N,{loading:e.loading,type:"submit",unelevated:"",label:"Filtrar metricas",color:"primary","no-caps":"",rounded:"",class:"full-width"},null,8,["loading"])],2)]),_:1},8,["onSubmit"])}var Qa=ue(Ia,[["render",Na]]);const Za=ie({name:"ActionMainComponent",setup(){const e={onsite_web_app_view_content:"Vista de contenido",landing_page_view:"Vista de p\xE1gina de destino","onsite_conversion.post_save":"Conversi\xF3n onsite guardada",page_engagement:"Compromiso con la p\xE1gina",post_engagement:"Compromiso con la publicaci\xF3n",view_content:"Vista de contenido",onsite_web_view_content:"Vista de contenido en web onsite",video_view:"Vista de video",omni_view_content:"Vista de contenido omni","offsite_conversion.fb_pixel_view_content":"Conversi\xF3n fuera de sitio con p\xEDxel de Facebook - Vista de contenido",post_reaction:"Reacci\xF3n a publicaci\xF3n",link_click:"Clic en enlace"},n=we();return{actions:p(()=>n.metrics.actions),actionsTypes:e}}}),La={class:"row q-mt-lg"},Ra={class:"col-12"};function za(e,n,r,l,i,s){return E(),Q("div",La,[x("div",Ra,[F(ma,{class:"shadow-1 round-10"},{default:ee(()=>[x("thead",null,[x("tr",null,[(E(!0),Q(at,null,nt(e.actions,(u,c)=>(E(),Q("th",{class:"text-left",key:c},se(e.actionsTypes[u.action_type]),1))),128))])]),x("tbody",null,[x("tr",null,[(E(!0),Q(at,null,nt(e.actions,(u,c)=>(E(),Q("td",{class:"text-left",key:c},se(u.value),1))),128))])])]),_:1})])])}var Ua=ue(Za,[["render",za]]);class Xa{constructor(n){et(this,"model");this.model=n}formatPrice(n){if(!n)return"";const r=(n/1).toFixed(2).replace(".",",");return"$"+r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}validatePermission(n){const r=ha(),l=r.user.scopes&&r.user.scopes.length>0?r.user.scopes:[];let i=!1;if(l&&l.length>0)for(const s of l)if(s!==n)i=!1;else{i=!0;break}return i}transformObjectInFormData(n,r,l){const i=new FormData,s=Object.keys(n);for(const u of s)Array.isArray(n[u])||n[u]&&typeof n[u]=="object"&&!n[u].size&&!n[u].lastModified?i.append(`${u}`,JSON.stringify(n[u])):i.append(u,n[u]);return r&&l&&!Array.isArray(l)&&i.append("file",l),Array.isArray(l)&&l.forEach(u=>{i.append("file",u)}),i}valdiateDate(n){return n?/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(n):!0}valdiateFile(n){return n?/^.*\.(png|jpg|jpeg|webp|pdf)$/.test(n.name):!0}}const Ja=ie({name:"MainCardComponent",props:{title:{type:String,default:"Flujo de caja"},amount:{type:Number,default:0},label:{type:String,default:"-"},icon:{type:String,default:"img:/images/calculator.svg"},isPrice:{type:Boolean,default:!0},isYellow:{type:Boolean,default:!1},isGreen:{type:Boolean,default:!1}},setup(){return{utils:new Xa("dashboard")}}}),Wa={class:"row full-width"},Ga={class:"col-10 q-pt-md"},Ka={class:"title-card text-weight-semi-bold"},en={class:"amount-card text-weight-semi-bold"},tn={key:0},an={key:1},nn={class:"label-card"},on={class:"col-2"},rn={class:"icon-card"};function ln(e,n,r,l,i,s){return E(),Q("div",{class:Ae(["dashboard-card",{"is-yellow":e.isYellow,"is-green":e.isGreen}])},[x("div",Wa,[x("div",Ga,[x("p",Ka,se(e.title),1),x("p",en,[e.isPrice?(E(),Q("span",tn,se(e.utils.formatPrice(e.amount)),1)):(E(),Q("span",an,se(e.amount),1))]),x("p",nn,se(e.label),1)]),x("div",on,[x("div",rn,[F(ra,{name:e.icon},null,8,["name"])])])])],2)}var sn=ue(Ja,[["render",ln]]);const un=ie({name:"MainDashboardComponent",components:{MainCard:sn},setup(){const e=we();return{metaMetrics:p(()=>e.metrics)}}}),cn={class:"grid-container"},dn={class:"col-12 col-sm-6 col-md-3"},mn={class:"col-12 col-sm-6 col-md-3"},vn={class:"col-12 col-sm-6 col-md-3"};function fn(e,n,r,l,i,s){const u=K("MainCard");return E(),Q("div",cn,[x("div",dn,[F(u,{title:"Meta",amount:e.metaMetrics.spend,label:"Gasto de campa\xF1a"},null,8,["amount"])]),x("div",mn,[F(u,{title:"Meta",amount:e.metaMetrics.impressions,isPrice:!1,label:"Impresiones totales"},null,8,["amount"])]),x("div",vn,[F(u,{title:"Meta",amount:e.metaMetrics.clicks,isPrice:!1,label:"Click totales"},null,8,["amount"])])])}var hn=ue(un,[["render",fn]]);const gn=ie({name:"MainComponent",components:{Campaigns:Qa,ModalCard:va,HeaderComponent:fa,ActionsViewComponent:Ua,MainDashboardComponent:hn},setup(){const e=k(),n=k(),r=we(),l=k([]),i=p(()=>r.metrics),s=async()=>{try{await r.listForSelect()}catch{}},u=f=>{console.log(f)},c=async f=>{try{const b=await r.listCampaings(f);b.success&&(e.value=f,l.value=b.data.campains,n.value=!n.value)}catch{}};return la(async()=>{await s()}),sa(()=>{r.clearCompanies()}),{campaigns:l,metaMetrics:i,doFilterByDate:u,companySelected:e,doFilterByCompany:c,openCampaignModal:n}}}),yn={class:"full-width"};function pn(e,n,r,l,i,s){const u=K("HeaderComponent"),c=K("MainDashboardComponent"),f=K("ActionsViewComponent"),b=K("Campaigns"),v=K("ModalCard");return E(),Q("section",yn,[F(u,{title:"Dashboard Financiero",onFilterByDate:e.doFilterByDate,onFilterByCompany:e.doFilterByCompany},null,8,["onFilterByDate","onFilterByCompany"]),F(c,{class:"q-mt-xl"}),F(f),F(ht,{modelValue:e.openCampaignModal,"onUpdate:modelValue":n[1]||(n[1]=M=>e.openCampaignModal=M)},{default:ee(()=>[F(v,{title:"Selector de campa\xF1a"},{body:ee(()=>[F(b,{onCloseModal:n[0]||(n[0]=M=>e.openCampaignModal=!1),company:e.companySelected,campaigns:e.campaigns},null,8,["company","campaigns"])]),_:1})]),_:1},8,["modelValue"])])}var Mn=ue(gn,[["render",pn]]);const _n=ie({name:"HomePageComponent",components:{MainComponent:Mn}});function Dn(e,n,r,l,i,s){const u=K("MainComponent");return E(),gt(zt,{padding:""},{default:ee(()=>[F(u)]),_:1})}var Hn=ue(_n,[["render",Dn]]);export{Hn as default};