var rt=Object.defineProperty,ut=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var Pe=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var Re=(a,d,e)=>d in a?rt(a,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[d]=e,T=(a,d)=>{for(var e in d||(d={}))ct.call(d,e)&&Re(a,e,d[e]);if(Pe)for(var e of Pe(d))dt.call(d,e)&&Re(a,e,d[e]);return a},Y=(a,d)=>ut(a,it(d));var E=(a,d,e)=>new Promise((s,p)=>{var h=m=>{try{r(e.next(m))}catch(y){p(y)}},v=m=>{try{r(e.throw(m))}catch(y){p(y)}},r=m=>m.done?s(m.value):Promise.resolve(m.value).then(h,v);r((e=e.apply(a,d)).next())});import{u as ce}from"./useFormItem-Ck1BFBX6.js";import{p as _,r as pt,h as te,I as le,Q as ft,f as mt,R as vt,z as ye,S as Te,U as gt,K as Ie,a as xe,V as Be,H as ht,w as Ne,W as yt}from"./entry/index-CcD9InFe-1713859961241.js";import{a as $e,e as K,ae as q,o as ee,al as ie,am as oe,W as Ee,an as bt,ao as Me,ap as je,aq as ze,T as Ge,a4 as Ke,ar as wt,ai as St,l as We,as as Ct,at as At,Q as ve,au as Ft,av as be,Y as _t,aw as kt,M as Pt,E as re,ax as Rt,ay as Tt,az as It,a3 as He,aA as Dt,aB as Ot,aC as de,aD as Ve}from"./antd-wx2EorFB.js";import{d as W,f as k,c as U,w as x,u as n,Z as P,a8 as O,a9 as R,ac as Z,H as pe,_ as z,aa as ue,F as J,G as V,a0 as G,ad as fe,ae as me,aj as we,ak as Se,k as w,$ as se,K as Ce,o as Ae,h as Lt,e as Ut,p as xt,a7 as Fe,ab as H,a1 as ge,J as De,y as Oe,I as qe}from"./vue-BzLr-Yiv.js";import{_ as Bt}from"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CxgfVUKl.js";import{u as Nt,a as Ze,B as Qe,b as Le}from"./index-ChcFEl8M.js";import{b as $t}from"./uuid-D0SLUWHI.js";import{u as Et}from"./useSortable-BXkv1tna.js";import{d as Mt}from"./download-DmS_ODBY.js";import{S as jt}from"./index-C6IzKrim.js";import{_ as zt}from"./IconPicker.vue_vue_type_script_setup_true_lang-BfkDRkun.js";import{C as Gt}from"./index-CXfT09uu.js";import{C as Kt}from"./index-DGNxvfys.js";const Wt=W({name:"ApiRadioGroup",__name:"ApiRadioGroup",props:{api:{type:Function,default:null},params:{type:[Object,String],default:()=>({})},value:{type:[String,Number,Boolean]},isBtn:{type:[Boolean],default:!1},numberToString:_.bool,resultField:_.string.def(""),labelField:_.string.def("label"),valueField:_.string.def("value"),immediate:_.bool.def(!0)},emits:["options-change","change","update:value"],setup(a,{emit:d}){const e=a,s=d,p=k([]),h=k(!1),v=k([]),r=pt(),[m]=ce(e,"value","change",v),y=U(()=>{const{labelField:u,valueField:o,numberToString:i}=e;return n(p).reduce((b,c)=>{if(c){const D=c[o];b.push(T({label:c[u],value:i?`${D}`:D},ee(c,[u,o])))}return b},[])});x(()=>e.params,(u,o)=>{$e(u,o)||g()},{deep:!0,immediate:e.immediate});function g(){return E(this,null,function*(){const u=e.api;if(!(!u||!K(u))){p.value=[];try{h.value=!0;const o=yield u(e.params);if(Array.isArray(o)){p.value=o,l();return}e.resultField&&(p.value=q(o,e.resultField)||[]),l()}catch(o){}finally{h.value=!1}}})}function l(){s("options-change",n(y))}function t(...u){v.value=u}return(u,o)=>(P(),O(n(ie).Group,Z(n(r),{value:n(m),"onUpdate:value":o[0]||(o[0]=i=>pe(m)?m.value=i:null),"button-style":"solid"}),{default:R(()=>[(P(!0),z(J,null,ue(y.value,i=>(P(),z(J,{key:`${i.value}`},[e.isBtn?(P(),O(n(ie).Button,{key:0,value:i.value,disabled:i.disabled,onClick:b=>t(i)},{default:R(()=>[V(G(i.label),1)]),_:2},1032,["value","disabled","onClick"])):(P(),O(n(ie),{key:1,value:i.value,disabled:i.disabled,onClick:b=>t(i)},{default:R(()=>[V(G(i.label),1)]),_:2},1032,["value","disabled","onClick"]))],64))),128))]),_:1},16,["value"]))}}),Ht=W({name:"ApiSelect",inheritAttrs:!1,__name:"ApiSelect",props:{value:{type:[Array,Object,String,Number]},numberToString:_.bool,api:{type:Function,default:null},params:_.any.def({}),resultField:_.string.def(""),labelField:_.string.def("label"),valueField:_.string.def("value"),immediate:_.bool.def(!0),alwaysLoad:_.bool.def(!1),options:{type:Array,default:[]}},emits:["options-change","change","update:value"],setup(a,{emit:d}){const e=a,s=d,p=k([]),h=k(!1),v=k(!1),r=k([]),{t:m}=te(),[y]=ce(e,"value","change",r),g=U(()=>{const{labelField:i,valueField:b,numberToString:c}=e;let D=n(p).reduce((B,N)=>{if(N){const Q=q(N,b);B.push(Y(T({},ee(N,[i,b])),{label:q(N,i),value:c?`${Q}`:Q}))}return B},[]);return D.length>0?D:e.options});x(()=>y.value,i=>{s("update:value",i)}),x(()=>e.params,(i,b)=>{$e(i,b)||l()},{deep:!0,immediate:e.immediate});function l(){return E(this,null,function*(){const i=e.api;if(!(!i||!K(i)||h.value)){p.value=[];try{h.value=!0;const b=yield i(e.params);if(v.value=!0,Array.isArray(b)){p.value=b,u();return}e.resultField&&(p.value=q(b,e.resultField)||[]),u()}catch(b){v.value=!1}finally{h.value=!1}}})}function t(i){return E(this,null,function*(){i&&(e.alwaysLoad?yield l():!e.immediate&&!n(v)&&(yield l()))})}function u(){s("options-change",n(g))}function o(i,...b){r.value=b}return(i,b)=>(P(),O(n(Ee),Z({onDropdownVisibleChange:t},i.$attrs,{onChange:o,options:g.value,value:n(y),"onUpdate:value":b[0]||(b[0]=c=>pe(y)?y.value=c:null)}),fe({_:2},[ue(Object.keys(i.$slots),c=>({name:c,fn:R(D=>[me(i.$slots,c,we(Se(D||{})))])})),h.value?{name:"suffixIcon",fn:R(()=>[w(n(oe),{spin:""})]),key:"0"}:void 0,h.value?{name:"notFoundContent",fn:R(()=>[se("span",null,[w(n(oe),{spin:"",class:"mr-1"}),V(" "+G(n(m)("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1040,["options","value"]))}}),Vt=W({name:"ApiTree",__name:"ApiTree",props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:{type:String,default:""},afterFetch:{type:Function},value:{type:Array}},emits:["options-change","change","update:value"],setup(a,{emit:d}){const e=a,s=d,p=Ce(),h=k([]),v=k(!1),r=k(!1),m=k([]),[y]=ce(e,"value","change",m),g=U(()=>T(T({},e.api?{treeData:n(h)}:{}),p));x(()=>y.value,t=>{s("update:value",t)}),x(()=>e.params,()=>{!n(v)&&l()},{deep:!0}),x(()=>e.immediate,t=>{t&&!v.value&&l()}),Ae(()=>{e.immediate&&l()});function l(){return E(this,null,function*(){const{api:t,afterFetch:u}=e;if(!t||!K(t))return;r.value=!0,h.value=[];let o;try{o=yield t(e.params)}catch(i){}u&&K(u)&&(o=u(o)),r.value=!1,o&&(le(o)||(o=q(o,e.resultField)),h.value=o||[],v.value=!0,s("options-change",h.value))})}return(t,u)=>(P(),O(n(bt),Z(g.value,{selectedKeys:n(y),"onUpdate:selectedKeys":u[0]||(u[0]=o=>pe(y)?y.value=o:null)}),fe({_:2},[ue(Object.keys(t.$slots),o=>({name:o,fn:R(i=>[me(t.$slots,o,we(Se(i||{})))])}))]),1040,["selectedKeys"]))}}),qt=W({name:"ApiTreeSelect",__name:"ApiTreeSelect",props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},async:{type:Boolean,default:!1},resultField:_.string.def(""),labelField:_.string.def("title"),valueField:_.string.def("value"),childrenField:_.string.def("children")},emits:["options-change","change","load-data"],setup(a,{emit:d}){const e=a,s=d,p=Ce(),h=k([]),v=k(!1),r=k(!1),m=U(()=>T(T({},e.api?{treeData:n(h)}:{}),p)),y={children:e.childrenField,value:e.valueField,label:e.labelField};function g(...u){s("change",...u)}x(()=>e.params,()=>{!n(v)&&t()},{deep:!0}),x(()=>e.immediate,u=>{u&&!v.value&&t()}),Ae(()=>{e.immediate&&t()});function l(u){return new Promise(o=>{if(le(u.children)&&u.children.length>0){o();return}s("load-data",{treeData:h,treeNode:u,resolve:o})})}function t(){return E(this,null,function*(){const{api:u}=e;if(!u||!K(u)||r.value)return;r.value=!0,h.value=[];let o;try{o=yield u(e.params)}catch(i){}r.value=!1,o&&(le(o)||(o=q(o,e.resultField)),h.value=o||[],v.value=!0,s("options-change",h.value))})}return(u,o)=>(P(),O(n(Me),Z(m.value,{onChange:g,"field-names":y,"load-data":a.async?l:void 0}),fe({_:2},[ue(Object.keys(u.$slots),i=>({name:i,fn:R(b=>[me(u.$slots,i,we(Se(b||{})))])})),r.value?{name:"suffixIcon",fn:R(()=>[w(n(oe),{spin:""})]),key:"0"}:void 0]),1040,["load-data"]))}}),Zt=W({name:"ApiCascader",__name:"ApiCascader",props:{value:{type:Array},api:{type:Function,default:null},numberToString:_.bool,resultField:_.string.def(""),labelField:_.string.def("label"),valueField:_.string.def("value"),childrenField:_.string.def("children"),apiParamKey:_.string.def("parentCode"),immediate:_.bool.def(!0),initFetchParams:{type:Object,default:()=>({})},isLeaf:{type:Function,default:null},displayRenderArray:{type:Array}},emits:["change","defaultChange"],setup(a,{emit:d}){const e=a,s=d,p=k([]),h=k([]),v=k(!1),r=k([]),m=k(!0),{t:y}=te(),[g]=ce(e,"value","change",r);x(p,b=>{const c=l(b);h.value=c},{deep:!0});function l(b){const{labelField:c,valueField:D,numberToString:B,childrenField:N,isLeaf:Q}=e;return b.reduce((ne,X)=>{if(X){const ae=X[D],A=Y(T({},ee(X,[c,D])),{label:X[c],value:B?`${ae}`:ae,isLeaf:Q&&typeof Q=="function"?Q(X):!1}),F=Reflect.get(X,N);F&&Reflect.set(A,N,l(F)),ne.push(A)}return ne},[])}function t(){return E(this,null,function*(){const b=e.api;if(!(!b||!K(b))){p.value=[],v.value=!0;try{const c=yield b(e.initFetchParams);if(Array.isArray(c)){p.value=c;return}e.resultField&&(p.value=q(c,e.resultField)||[])}catch(c){}finally{v.value=!1}}})}const u=b=>E(this,null,function*(){const c=b[b.length-1];c.loading=!0;const D=e.api;if(!(!D||!K(D)))try{const B=yield D({[e.apiParamKey]:Reflect.get(c,"value")});if(Array.isArray(B)){const N=l(B);c.children=N;return}if(e.resultField){const N=l(q(B,e.resultField)||[]);c.children=N}}catch(B){}finally{c.loading=!1}});x(()=>e.immediate,()=>{e.immediate&&t()},{immediate:!0}),x(()=>e.initFetchParams,()=>{!n(m)&&t()},{deep:!0});function o(b,c){r.value=c,s("defaultChange",b,c)}const i=({labels:b,selectedOptions:c})=>n(r).length===(c==null?void 0:c.length)?b.join(" / "):e.displayRenderArray?e.displayRenderArray.join(" / "):"";return(b,c)=>(P(),O(n(je),{value:n(g),"onUpdate:value":c[0]||(c[0]=D=>pe(g)?g.value=D:null),options:h.value,"load-data":u,"change-on-select":"",onChange:o,displayRender:i},fe({_:2},[v.value?{name:"suffixIcon",fn:R(()=>[w(n(oe),{spin:""})]),key:"0"}:void 0,v.value?{name:"notFoundContent",fn:R(()=>[se("span",null,[w(n(oe),{spin:"",class:"mr-1"}),V(" "+G(n(y)("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1032,["value","options"]))}}),Qt=W({name:"ApiTransfer",__name:"ApiTransfer",props:{value:{type:Array},api:{type:Function,default:null},params:{type:Object},dataSource:{type:Array},immediate:_.bool.def(!0),alwaysLoad:_.bool.def(!1),afterFetch:{type:Function},resultField:_.string.def(""),labelField:_.string.def("title"),valueField:_.string.def("key"),showSearch:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterOption:{type:Function},selectedKeys:{type:Array},showSelectAll:{type:Boolean,default:!1},targetKeys:{type:Array}},emits:["options-change","change"],setup(a,{emit:d}){const e=a,s=d,p=k([]),h=k([]),v=U(()=>{const{labelField:l,valueField:t}=e;return n(p).reduce((u,o)=>(o&&u.push(Y(T({},ee(o,[l,t])),{title:o[l],key:o[t]})),u),[])}),r=U(()=>Array.isArray(e.value)?e.value:Array.isArray(e.targetKeys)?e.targetKeys:[]);function m(l,t,u){h.value=l,s("change",l)}Lt(()=>{e.immediate&&!e.alwaysLoad&&y()}),x(()=>e.params,()=>{y()},{deep:!0});function y(){return E(this,null,function*(){const l=e.api;if(!l||!K(l)){Array.isArray(e.dataSource)&&(p.value=e.dataSource);return}p.value=[];try{const t=yield l(e.params);if(Array.isArray(t)){p.value=t,g();return}e.resultField&&(p.value=q(t,e.resultField)||[]),g()}catch(t){}})}function g(){s("options-change",n(v))}return(l,t)=>(P(),O(n(ze),{"data-source":v.value,"filter-option":a.filterOption,render:u=>u.title,showSelectAll:a.showSelectAll,selectedKeys:a.selectedKeys,targetKeys:r.value,showSearch:a.showSearch,disabled:a.disabled,onChange:m},null,8,["data-source","filter-option","render","showSelectAll","selectedKeys","targetKeys","showSearch","disabled"]))}}),Xe={previewColumns:{type:Array,default:[],required:!1},beforePreviewData:{type:Function,default:null,required:!1}},Ye={disabled:{type:Boolean,default:!1},listType:{type:String,default:"picture-card"},helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:1},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!1},uploadParams:{type:Object,default:()=>({})},api:{type:Function,default:null,required:!0},name:{type:String,default:"file"},filename:{type:String,default:null},fileListOpenDrag:{type:Boolean,default:!0},fileListDragOptions:{type:Object,default:()=>({})},resultField:_.string.def("")},Je=T(Y(T({value:{type:Array,default:()=>[]}},Ye),{showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}}),Xe),Xt=T({value:{type:Array,default:()=>[]}},Xe),Yt={columns:{type:Array,default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null},openDrag:{type:Boolean,default:!1},dragOptions:{type:Object,default:()=>({})}},{t:he}=te();function et({acceptRef:a,helpTextRef:d,maxNumberRef:e,maxSizeRef:s}){const p=U(()=>{const r=n(a);return r&&r.length>0?r:[]}),h=U(()=>n(p).map(r=>r.indexOf("/")>0||r.startsWith(".")?r:`.${r}`).join(",")),v=U(()=>{const r=n(d);if(r)return r;const m=[],y=n(a);y.length>0&&m.push(he("component.upload.accept",[y.join(",")]));const g=n(s);g&&m.push(he("component.upload.maxSize",[g]));const l=n(e);return l&&l!==1/0&&m.push(he("component.upload.maxNumber",[l])),m.join("，")});return{getAccept:p,getStringAccept:h,getHelpText:v}}var L=(a=>(a.DONE="done",a.SUCCESS="success",a.ERROR="error",a.UPLOADING="uploading",a))(L||{});function Jt(a,d){let e;if(!d||d.length===0)e=/.(jpg|jpeg|png|gif|webp)$/i;else{const s=d.join("|");e=new RegExp("\\.("+s+")$","i")}return e.test(a.name)}function ea(a){return tt(a.name)}function tt(a){return/\.(jpg|jpeg|png|gif|webp)$/i.test(a)}function ta(a){return new Promise((d,e)=>{const s=new FileReader;s.readAsDataURL(a),s.onload=()=>d({result:s.result,file:a}),s.onerror=p=>e(p)})}const at=Symbol("basic-table");function Ea(a){xt(at,a)}function aa(){return Ut(at)}const{table:na}=ft,{pageSizeOptions:la,defaultPageSize:oa,fetchSetting:sa,defaultSize:ra,defaultSortFn:ua,defaultFilterFn:ia}=na,Ma="key",ja=la,za=oa,Ga=sa,Ka=ra,Wa=ua,Ha=ia,Va="center",qa="INDEX",ca="ACTION",nt=W({name:"TableAction",__name:"TableAction",props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:_.bool.def(!0),outside:_.bool,stopButtonPropagation:_.bool.def(!1)},setup(a){const d=a,{prefixCls:e}=mt("basic-table-action");let s={};d.outside||(s=aa());const{hasPermission:p}=vt();function h(l){const t=l.ifShow;let u=!0;return St(t)&&(u=t),K(t)&&(u=t(l)),u}const v=U(()=>(De(d.actions)||[]).filter(l=>p(l.auth)&&h(l)).map(l=>{const{popConfirm:t}=l;return Y(T(T({getPopupContainer:()=>{var u;return(u=n(s==null?void 0:s.wrapRef))!=null?u:document.body},type:"link",size:"small"},l),t||{}),{onConfirm:t==null?void 0:t.confirm,onCancel:t==null?void 0:t.cancel,enable:!!t})})),r=U(()=>{const l=(De(d.dropDownActions)||[]).filter(t=>p(t.auth)&&h(t));return l.map((t,u)=>{const{label:o,popConfirm:i}=t;return Y(T(T({},t),i),{onConfirm:i==null?void 0:i.confirm,onCancel:i==null?void 0:i.cancel,text:o,divider:u<l.length-1?d.divider:!1})})}),m=U(()=>{var u,o;const t=(((u=s==null?void 0:s.getColumns)==null?void 0:u.call(s))||[]).find(i=>i.flag===ca);return(o=t==null?void 0:t.align)!=null?o:"left"});function y(l){return T({getPopupContainer:()=>{var t;return(t=n(s==null?void 0:s.wrapRef))!=null?t:document.body},placement:"bottom"},We(l)?{title:l}:l)}function g(l){if(!d.stopButtonPropagation)return;l.composedPath().find(o=>{var i;return((i=o.tagName)==null?void 0:i.toUpperCase())==="BUTTON"})&&l.stopPropagation()}return(l,t)=>{const u=Fe("a-button");return P(),z("div",{class:ge([n(e),m.value]),onClick:g},[(P(!0),z(J,null,ue(v.value,(o,i)=>(P(),z(J,{key:`${i}-${o.label}`},[o.tooltip?(P(),O(n(Ge),Z({key:0,ref_for:!0},y(o.tooltip)),{default:R(()=>[w(n(Te),Z({ref_for:!0},n(ee)(o,"icon")),{default:R(()=>[o.icon?(P(),O(ye,{key:0,icon:o.icon,class:ge({"mr-1":!!o.label})},null,8,["icon","class"])):H("",!0),o.label?(P(),z(J,{key:1},[V(G(o.label),1)],64)):H("",!0)]),_:2},1040)]),_:2},1040)):(P(),O(n(Te),Z({key:1,ref_for:!0},n(ee)(o,"icon")),{default:R(()=>[o.icon?(P(),O(ye,{key:0,icon:o.icon,class:ge({"mr-1":!!o.label})},null,8,["icon","class"])):H("",!0),o.label?(P(),z(J,{key:1},[V(G(o.label),1)],64)):H("",!0)]),_:2},1040)),a.divider&&i<v.value.length-1?(P(),O(n(Ke),{key:2,type:"vertical",class:"action-divider"})):H("",!0)],64))),128)),a.dropDownActions&&r.value.length>0?(P(),O(n(gt),{key:0,trigger:["hover"],dropMenuList:r.value,popconfirm:""},{default:R(()=>[me(l.$slots,"more"),l.$slots.more?H("",!0):(P(),O(u,{key:0,type:"link",size:"small"},{default:R(()=>[w(n(wt),{class:"icon-more"})]),_:1}))]),_:3},8,["dropMenuList"])):H("",!0)],2)}}}),da={class:"thumb"},lt=W({__name:"ThumbUrl",props:{fileUrl:_.string.def(""),fileName:_.string.def("")},setup(a){return(d,e)=>(P(),z("span",da,[a.fileUrl?(P(),O(n(Ct),{key:0,src:a.fileUrl,width:104},null,8,["src"])):H("",!0)]))}}),{t:M}=te();function pa(){return[{dataIndex:"thumbUrl",title:M("component.upload.legend"),width:100,customRender:({record:a})=>{const{thumbUrl:d}=a||{};return d&&w(lt,{fileUrl:d},null)}},{dataIndex:"name",title:M("component.upload.fileName"),align:"left",customRender:({text:a,record:d})=>{const{percent:e,status:s}=d||{};let p="normal";return s===L.ERROR?p="exception":s===L.UPLOADING?p="active":s===L.SUCCESS&&(p="success"),w("div",null,[w("p",{class:"truncate mb-1 max-w-[280px]",title:a},[a]),w(At,{percent:e,size:"small",status:p},null)])}},{dataIndex:"size",title:M("component.upload.fileSize"),width:100,customRender:({text:a=0})=>a&&(a/1024).toFixed(2)+"KB"},{dataIndex:"status",title:M("component.upload.fileStatue"),width:100,customRender:({text:a})=>a===L.SUCCESS?w(ve,{color:"green"},{default:()=>M("component.upload.uploadSuccess")}):a===L.ERROR?w(ve,{color:"red"},{default:()=>M("component.upload.uploadError")}):a===L.UPLOADING?w(ve,{color:"blue"},{default:()=>M("component.upload.uploading")}):a||M("component.upload.pending")}]}function fa(a){return{width:120,title:M("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:d})=>{const e=[{label:M("component.upload.del"),color:"error",onClick:a.bind(null,d)}];return w(nt,{actions:e,outside:!0},null)}}}function Ue(){return[{dataIndex:"url",title:M("component.upload.legend"),width:100,customRender:({record:a})=>{const{url:d}=a||{};return tt(d)&&w(lt,{fileUrl:d},null)}},{dataIndex:"name",title:M("component.upload.fileName"),align:"left"}]}function ma({handleRemove:a,handleDownload:d}){return{width:160,title:M("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:e})=>{const s=[{label:M("component.upload.del"),color:"error",onClick:a.bind(null,e)},{label:M("component.upload.download"),onClick:d.bind(null,e)}];return w(nt,{actions:s,outside:!0},null)}}}const ot=W({name:"FileList",props:Yt,setup(a,{emit:d}){const e=Nt(),s=k();return x(()=>a.dataSource,()=>{Oe(()=>{var p;(p=e==null?void 0:e.redoModalHeight)==null||p.call(e)})}),a.openDrag&&Ae(()=>Et(s,Y(T({},a.dragOptions),{onEnd:({oldIndex:p,newIndex:h})=>{if(p===h)return;const{onAfterEnd:v}=a.dragOptions;if(Ie(p)&&Ie(h)){const r=[...a.dataSource],[m]=r.splice(p,1);r.splice(h,0,m),Oe(()=>{d("update:dataSource",r),K(v)&&v(r)})}}})).initSortable()),()=>{const{columns:p,actionColumn:h,dataSource:v}=a;let r;return r=h?[...p,h]:[...p],w("div",{class:"overflow-x-auto"},[w("table",{class:"file-table"},[w("colgroup",null,[r.map(m=>{const{width:y=0,dataIndex:g}=m,l={width:`${y}px`,minWidth:`${y}px`};return w("col",{style:y?l:{},key:g},null)})]),w("thead",null,[w("tr",{class:"file-table-tr"},[r.map(m=>{const{title:y="",align:g="center",dataIndex:l}=m;return w("th",{class:["file-table-th",g],key:l},[y])})])]),w("tbody",{ref:s},[v.map((m={},y)=>w("tr",{class:"file-table-tr",key:`${y+m.name||""}`},[r.map(g=>{const{dataIndex:l="",customRender:t,align:u="center"}=g,o=t&&K(t);return w("td",{class:["file-table-td break-all",u],key:l},[o?t==null?void 0:t({text:m[l],record:m}):m[l]])})]))])])])}}}),va={class:"upload-modal-toolbar"},ga=W({__name:"UploadModal",props:Y(T({},Ye),{previewFileList:{type:Array,default:()=>[]}}),emits:["change","register","delete"],setup(a,{emit:d}){const e=a,s=d,p=pa(),h=fa(ne),v=k(!1),r=k([]),{accept:m,helpText:y,maxNumber:g,maxSize:l}=qe(e),{t}=te(),[u,{closeModal:o}]=Ze(),{getStringAccept:i,getHelpText:b}=et({acceptRef:m,helpTextRef:y,maxNumberRef:g,maxSizeRef:l}),{createMessage:c}=xe(),D=U(()=>r.value.length>0&&!r.value.every(f=>f.status===L.SUCCESS)),B=U(()=>{const f=r.value.some(S=>S.status===L.SUCCESS);return{disabled:v.value||r.value.length===0||!f}}),N=U(()=>{const f=r.value.some(S=>S.status===L.ERROR);return v.value?t("component.upload.uploading"):t(f?"component.upload.reUploadFailed":"component.upload.startUpload")});function Q(f){const{size:S,name:I}=f,{maxSize:$}=e;if($&&f.size/1024/1024>=$)return c.error(t("component.upload.maxSizeMultiple",[$])),!1;const j={uuid:$t(),file:f,size:S,name:I,percent:0,type:I.split(".").pop()};return ea(f)?ta(f).then(({result:_e})=>{r.value=[...n(r),T({thumbUrl:_e},j)]}):r.value=[...n(r),j],!1}function ne(f){const S=r.value.findIndex(I=>I.uuid===f.uuid);S!==-1&&r.value.splice(S,1),v.value=r.value.some(I=>I.status===L.UPLOADING),s("delete",f)}function X(f){return E(this,null,function*(){var I;const{api:S}=e;if(!S||!K(S))return Be();try{f.status=L.UPLOADING;const $=yield(I=e.api)==null?void 0:I.call(e,{data:T({},e.uploadParams||{}),file:f.file,name:e.name,filename:e.filename},function(ke){const st=ke.loaded/ke.total*100|0;f.percent=st}),{data:j}=$;return f.status=L.SUCCESS,f.response=j,e.resultField&&(f.response={code:0,message:"upload Success!",url:q($,e.resultField)}),{success:!0,error:null}}catch($){return f.status=L.ERROR,{success:!1,error:$}}})}function ae(){return E(this,null,function*(){const{maxNumber:f}=e;if(r.value.length+e.previewFileList.length>f)return c.warning(t("component.upload.maxNumber",[f]));try{v.value=!0;const S=r.value.filter(j=>j.status!==L.SUCCESS)||[],I=yield Promise.all(S.map(j=>X(j)));v.value=!1;const $=I.filter(j=>!j.success);if($.length>0)throw $}catch(S){throw v.value=!1,S}})}function A(){const{maxNumber:f}=e;if(r.value.length>f)return c.warning(t("component.upload.maxNumber",[f]));if(v.value)return c.warning(t("component.upload.saveWarn"));const S=[];for(const I of r.value){const{status:$,response:j}=I;$===L.SUCCESS&&j&&S.push(j.url)}if(S.length<=0)return c.warning(t("component.upload.saveError"));r.value=[],o(),s("change",S)}function F(){return E(this,null,function*(){return v.value?(c.warning(t("component.upload.uploadWait")),!1):(r.value=[],!0)})}return(f,S)=>{const I=Fe("a-button");return P(),O(n(Qe),Z({width:"800px",title:n(t)("component.upload.upload"),okText:n(t)("component.upload.save")},f.$attrs,{onRegister:n(u),onOk:A,closeFunc:F,maskClosable:!1,keyboard:!1,class:"upload-modal",okButtonProps:B.value,cancelButtonProps:{disabled:v.value}}),{centerFooter:R(()=>[w(I,{onClick:ae,color:"success",disabled:!D.value,loading:v.value},{default:R(()=>[V(G(N.value),1)]),_:1},8,["disabled","loading"])]),default:R(()=>[se("div",va,[w(n(Ft),{message:n(b),type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),w(n(be),{accept:n(i),multiple:f.multiple,"before-upload":Q,"show-upload-list":!1,class:"upload-modal-toolbar__btn"},{default:R(()=>[w(I,{type:"primary"},{default:R(()=>[V(G(n(t)("component.upload.choose")),1)]),_:1})]),_:1},8,["accept","multiple"])]),w(ot,{dataSource:r.value,"onUpdate:dataSource":S[0]||(S[0]=$=>r.value=$),columns:n(p),actionColumn:n(h),openDrag:f.fileListOpenDrag,dragOptions:f.fileListDragOptions},null,8,["dataSource","columns","actionColumn","openDrag","dragOptions"])]),_:1},16,["title","okText","onRegister","okButtonProps","cancelButtonProps"])}}}),ha=W({__name:"UploadPreviewModal",props:Xt,emits:["list-change","register","delete"],setup(a,{emit:d}){const e=a,s=d;let p=Ue(),h;const[v]=Ze(),{t:r}=te(),m=k([]);x(()=>e.previewColumns,()=>{e.previewColumns.length?(p=e.previewColumns,h=null):(p=Ue(),h=ma({handleRemove:y,handleDownload:g}))},{immediate:!0}),x(()=>e.value,l=>{if(le(l)||(l=[]),e.beforePreviewData){l=e.beforePreviewData(l),m.value=l;return}m.value=l.filter(t=>!!t).map(t=>{if(typeof t=="string")return{url:t,type:t.split(".").pop()||"",name:t.split("/").pop()||""}})},{immediate:!0});function y(l){const t=m.value.findIndex(u=>u.url===l.url);if(t!==-1){const u=m.value.splice(t,1);s("delete",u[0].url),s("list-change",m.value.map(o=>o.url))}}function g(l){const{url:t=""}=l;Mt({url:t})}return(l,t)=>(P(),O(n(Qe),Z({width:"800px",title:n(r)("component.upload.preview"),class:"upload-preview-modal"},l.$attrs,{onRegister:n(v),showOkBtn:!1}),{default:R(()=>[w(ot,{dataSource:m.value,columns:n(p),actionColumn:n(h)},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","onRegister"]))}}),ya=W({name:"BasicUpload",__name:"BasicUpload",props:Je,emits:["change","delete","preview-delete","update:value"],setup(a,{emit:d}){const e=a,s=d,p=Ce(),{t:h}=te(),[v,{openModal:r}]=Le(),[m,{openModal:y}]=Le(),g=k([]),l=U(()=>{const{emptyHidePreview:c}=e;return c&&c?g.value.length>0:!0}),t=U(()=>{const c=T(T({},p),e);return ee(c,"onChange")});x(()=>e.value,(c=[])=>{g.value=le(c)?c:[]},{immediate:!0});function u(c){g.value=[...n(g),...c||[]],s("update:value",g.value),s("change",g.value)}function o(c){g.value=[...c||[]],s("update:value",g.value),s("change",g.value)}function i(c){s("delete",c)}function b(c){s("preview-delete",c)}return(c,D)=>{const B=Fe("a-button");return P(),z("div",null,[w(n(_t),null,{default:R(()=>[w(B,{type:"primary",onClick:n(r),preIcon:"carbon:cloud-upload",disabled:c.disabled},{default:R(()=>[V(G(n(h)("component.upload.upload")),1)]),_:1},8,["onClick","disabled"]),l.value?(P(),O(n(Ge),{key:0,placement:"bottom"},{title:R(()=>[V(G(n(h)("component.upload.uploaded"))+" ",1),g.value.length?(P(),z(J,{key:0},[V(G(g.value.length),1)],64)):H("",!0)]),default:R(()=>[w(B,{onClick:n(y)},{default:R(()=>[w(ye,{icon:"bi:eye"}),g.value.length&&c.showPreviewNumber?(P(),z(J,{key:0},[V(G(g.value.length),1)],64)):H("",!0)]),_:1},8,["onClick"])]),_:1})):H("",!0)]),_:1}),w(ga,Z(t.value,{previewFileList:g.value,fileListOpenDrag:c.fileListOpenDrag,fileListDragOptions:c.fileListDragOptions,onRegister:n(v),onChange:u,onDelete:i}),null,16,["previewFileList","fileListOpenDrag","fileListDragOptions","onRegister"]),w(ha,{value:g.value,onRegister:n(m),onListChange:o,onDelete:b,"preview-columns":e.previewColumns,"before-preview-data":e.beforePreviewData},null,8,["value","onRegister","preview-columns","before-preview-data"])])}}}),ba={key:0},wa={style:{"margin-top":"8px"}},Sa=["src"],Ca=W({name:"ImageUpload",__name:"ImageUpload",props:T({},ee(Je,["previewColumns","beforePreviewData"])),emits:["change","update:value","delete"],setup(a,{emit:d}){const e=d,s=a,{t:p}=te(),{createMessage:h}=xe(),{accept:v,helpText:r,maxNumber:m,maxSize:y}=qe(s),g=k(!1),{getStringAccept:l}=et({acceptRef:v,helpTextRef:r,maxNumberRef:m,maxSizeRef:y}),t=k(!1),u=k(""),o=k(""),i=k([]),b=k(!0),c=k(!0);x(()=>s.value,A=>{if(g.value){g.value=!1;return}if(A){let F=[];le(A)?F=A:F.push(A),i.value=F.map((f,S)=>f&&We(f)?{uid:-S+"",name:f.substring(f.lastIndexOf("/")+1),status:"done",url:f}:f&&ht(f)?f:void 0)}},{immediate:!0,deep:!0});function D(A){return new Promise((F,f)=>{const S=new FileReader;S.readAsDataURL(A),S.onload=()=>{F(S.result)},S.onerror=I=>f(I)})}const B=A=>E(this,null,function*(){!A.url&&!A.preview&&(A.preview=yield D(A.originFileObj)),u.value=A.url||A.preview||"",t.value=!0,o.value=A.name||u.value.substring(u.value.lastIndexOf("/")+1)}),N=A=>E(this,null,function*(){if(i.value){const F=i.value.findIndex(S=>S.uid===A.uid);F!==-1&&i.value.splice(F,1);const f=ae();g.value=!0,e("update:value",f),e("change",f),e("delete",A)}}),Q=()=>{t.value=!1,o.value=""},ne=A=>{const{maxSize:F,accept:f}=s,S=Jt(A,f);S||(h.error(p("component.upload.acceptUpload",[f])),c.value=!1,setTimeout(()=>c.value=!0,1e3));const I=A.size/1024/1024>F;return I&&(h.error(p("component.upload.maxSizeMultiple",[F])),b.value=!1,setTimeout(()=>b.value=!0,1e3)),S&&!I||be.LIST_IGNORE};function X(A){return E(this,null,function*(){var f;const{api:F}=s;if(!F||!K(F))return Be();try{const S=yield(f=s.api)==null?void 0:f.call(s,{data:T({},s.uploadParams||{}),file:A.file,name:s.name,filename:s.filename});s.resultField?A.onSuccess(S):A.onSuccess(S.data);const I=ae();g.value=!0,e("update:value",I),e("change",I)}catch(S){A.onError(S)}})}function ae(){const A=(i.value||[]).filter(F=>(F==null?void 0:F.status)===L.DONE).map(F=>{var f;return s.resultField?q(F==null?void 0:F.response,s.resultField):(F==null?void 0:F.url)||((f=F==null?void 0:F.response)==null?void 0:f.url)});return s.multiple?A:A.length>0?A[0]:""}return(A,F)=>(P(),z("div",null,[w(n(be),Z(A.$attrs,{"file-list":i.value,"onUpdate:fileList":F[0]||(F[0]=f=>i.value=f),"list-type":A.listType,accept:n(l),multiple:A.multiple,maxCount:n(m),"before-upload":ne,"custom-request":X,onPreview:B,onRemove:N}),{default:R(()=>[i.value&&i.value.length<n(m)?(P(),z("div",ba,[w(n(kt)),se("div",wa,G(n(p)("component.upload.upload")),1)])):H("",!0)]),_:1},16,["file-list","list-type","accept","multiple","maxCount"]),w(n(Pt),{open:t.value,title:o.value,footer:null,onCancel:Q},{default:R(()=>[se("img",{alt:"",style:{width:"100%"},src:u.value},null,8,Sa)]),_:1},8,["open","title"])]))}}),Aa=Ne(Ca),Fa=Ne(ya),C=new Map;C.set("Input",re);C.set("InputGroup",re.Group);C.set("InputPassword",re.Password);C.set("InputSearch",re.Search);C.set("InputTextArea",re.TextArea);C.set("InputNumber",Rt);C.set("AutoComplete",Tt);C.set("ImageUpload",Aa);C.set("Select",Ee);C.set("ApiSelect",Ht);C.set("ApiTree",Vt);C.set("TreeSelect",Me);C.set("ApiTreeSelect",qt);C.set("ApiRadioGroup",Wt);C.set("Switch",It);C.set("RadioButtonGroup",Bt);C.set("RadioGroup",ie.Group);C.set("Checkbox",He);C.set("CheckboxGroup",He.Group);C.set("ApiCascader",Zt);C.set("Cascader",je);C.set("Slider",Dt);C.set("Rate",Ot);C.set("Transfer",ze);C.set("ApiTransfer",Qt);C.set("DatePicker",de);C.set("MonthPicker",de.MonthPicker);C.set("RangePicker",de.RangePicker);C.set("WeekPicker",de.WeekPicker);C.set("TimePicker",Ve);C.set("TimeRangePicker",Ve.TimeRangePicker);C.set("StrengthMeter",jt);C.set("IconPicker",zt);C.set("InputCountDown",Gt);C.set("Upload",Fa);C.set("Divider",Ke);C.set("CropperAvatar",Kt);C.set("BasicTitle",yt);function Za(a,d){C.set(a,d)}export{ca as A,Fa as B,Va as D,Ga as F,qa as I,za as P,Ma as R,Ht as _,nt as a,ja as b,C as c,Ea as d,qt as e,Wt as f,Wa as g,Ha as h,Ka as i,Za as j,aa as u};
