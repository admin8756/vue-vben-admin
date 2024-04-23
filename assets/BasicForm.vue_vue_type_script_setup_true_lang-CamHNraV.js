var Ke=Object.defineProperty;var Fe=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var be=(n,r,o)=>r in n?Ke(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,L=(n,r)=>{for(var o in r||(r={}))Se.call(r,o)&&be(n,o,r[o]);if(Fe)for(var o of Fe(r))Ne.call(r,o)&&be(n,o,r[o]);return n};var O=(n,r,o)=>new Promise((c,A)=>{var v=i=>{try{b(o.next(i))}catch(l){A(l)}},d=i=>{try{b(o.throw(i))}catch(l){A(l)}},b=i=>i.done?c(i.value):Promise.resolve(i.value).then(v,d);b((o=o.apply(n,r)).next())});import{u as t,g as Re,c as X,w as M,an as Ue,y as Ae,J as ge,h as Ce,d as He,K as We,r as we,f as z,o as ke,Z as de,a8 as Ie,a9 as re,k as Ve,ae as ce,_ as Ye,aa as pe,ad as Te,ac as he,F as Xe,aj as Be,ak as De,al as qe}from"./vue-BzLr-Yiv.js";import{_ as Ge}from"./FormItem.vue_vue_type_script_lang-DIGucFGt.js";import{b as Je,c as ze,_ as Me}from"./BasicForm.vue_vue_type_style_index_0_lang-B5GSRQl5.js";import{h as Ze,i as le,d as _e,a as Qe}from"./helper-L_K8O3bh.js";import{H,I as Z,J as W,G as et,u as Le,K as tt,L as me,d as je,f as nt}from"./entry/index-CcD9InFe-1713859961241.js";import{e as fe,l as ue,s as Q,ae as q,ah as Ee,d as ee,v as Oe,f as G,aa as st,ai as at,aj as ot,ak as it,U as rt,a2 as ct}from"./antd-wx2EorFB.js";import{u as lt}from"./index-ChcFEl8M.js";function ut(n,r,o){const c=/^\[(.+)\]$/;if(c.test(n)){const A=n.match(c);if(A&&A[1]){const v=A[1].split(",");return r=Array.isArray(r)?r:[r],v.forEach((d,b)=>{Q(o,d.trim(),r[b])}),!0}}}function ft(n,r,o){const c=/^\{(.+)\}$/;if(c.test(n)){const A=n.match(c);if(A&&A[1]){const v=A[1].split(",");return r=H(r)?r:{},v.forEach(d=>{Q(o,d.trim(),r[d.trim()])}),!0}}}function dt({defaultValueRef:n,getSchema:r,formModel:o,getProps:c}){function A(i){var g,B;if(!H(i))return{};const l={};for(const E of Object.entries(i)){let[,u]=E;const[w]=E;if(!w||Z(u)&&u.length===0||fe(u))continue;const p=t(c).transformDateFunc;H(u)&&(u=p==null?void 0:p(u)),Z(u)&&((g=u[0])!=null&&g.format)&&((B=u[1])!=null&&B.format)&&(u=u.map(h=>p==null?void 0:p(h))),ue(u)&&(u=u.trim()),!ut(w,u,l)&&!ft(w,u,l)&&Q(l,w,u)}return v(l)}function v(i){const l=t(c).fieldMapToTime;if(!l||!Array.isArray(l))return i;for(const[g,[B,E],u="YYYY-MM-DD"]of l){if(!g||!B||!E)continue;if(!q(i,g)){Ee(i,g);continue}const[w,p]=q(i,g),[h,F]=Array.isArray(u)?u:[u,u];!ee(w)&&!Oe(w)&&Q(i,B,d(w,h)),!ee(p)&&!Oe(p)&&Q(i,E,d(p,F)),Ee(i,g)}return i}function d(i,l){return l==="timestamp"?W(i).unix():l==="timestampStartDay"?W(i).startOf("day").unix():W(i).format(l)}function b(){const i=t(r),l={};i.forEach(g=>{const{defaultValue:B,defaultValueObj:E}=g,u=Object.keys(E||{});u.length&&u.forEach(w=>{l[w]=E[w],o[w]===void 0&&(o[w]=E[w])}),ee(B)||(l[g.field]=B,o[g.field]===void 0&&(o[g.field]=B))}),n.value=G(l)}return{handleFormValues:A,initDefault:b}}const Y=24;function pt({advanceState:n,emit:r,getProps:o,getSchema:c,formModel:A,defaultValueRef:v}){const d=Re(),{realWidthRef:b,screenEnum:i,screenRef:l}=et(),g=X(()=>{if(!n.isAdvanced)return 0;const h=t(o).emptySpan||0;if(st(h))return h;if(H(h)){const{span:F=0}=h,U=t(l);return h[U.toLowerCase()]||F||0}return 0}),B=Le(w,30);M([()=>t(c),()=>n.isAdvanced,()=>t(b)],()=>{const{showAdvancedButton:h}=t(o);h&&B()},{immediate:!0});function E(h,F=0,U=!1){const D=t(b),K=parseInt(h.md)||parseInt(h.xs)||parseInt(h.sm)||h.span||Y,j=parseInt(h.lg)||K,S=parseInt(h.xl)||j,N=parseInt(h.xxl)||S;return D<=i.LG?F+=K:D<i.XL?F+=j:D<i.XXL?F+=S:F+=N,U?(n.hideAdvanceBtn=!1,F<=Y*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):F>Y*2&&F<=Y*(t(o).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:F}):F>Y*(t(o).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:F}:{isAdvanced:!0,itemColSum:F}}const u=Ue({});function w(){var D;let h=0,F=0;const{baseColProps:U={}}=t(o);for(const K of t(c)){const{show:j,colProps:S}=K;let N=!0;if(at(j)&&(N=j),fe(j)&&(N=j({schema:K,model:A,field:K.field,values:L(L({},t(v)),A)})),N&&(S||U)){const{itemColSum:C,isAdvanced:k}=E(L(L({},U),S),h);h=C||0,k&&(F=h),u[K.field]=k}}(D=d==null?void 0:d.proxy)==null||D.$forceUpdate(),n.actionSpan=F%Y+t(g),E(t(o).actionColOptions||{span:Y},h,!0),r("advanced-change",n.isAdvanced)}function p(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:p,fieldsIsAdvancedMap:u}}function ht({emit:n,getProps:r,formModel:o,getSchema:c,defaultValueRef:A,formElRef:v,schemaRef:d,handleFormValues:b}){function i(){return O(this,null,function*(){const{resetFunc:e,submitOnReset:a}=t(r);e&&fe(e)&&(yield e()),t(v)&&(Object.keys(o).forEach(s=>{const y=t(c).find(T=>T.field===s),I=y==null?void 0:y.defaultValueObj,x=Object.keys(I||{});x.length&&x.forEach(T=>{o[T]=I[T]}),o[s]=mt(y,A,s)}),Ae(()=>S()),n("reset",ge(o)),a&&C())})}const l=()=>t(c).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function g(e){return O(this,null,function*(){if(Object.keys(e).length===0)return;const a=l(),m=[];a.forEach(s=>{const y=t(c).find(P=>P.field===s);let I=q(e,s);const x=ot(e,s);I=Ze(y==null?void 0:y.component,I);const{componentProps:T}=y||{};let _=T;typeof T=="function"&&(_=_({formModel:t(o),formActionType:k}));const te=q(I,s),ne=P=>P?_!=null&&_.valueFormat?P:W(P):null;if(x||te){const P=te||I;if(U(s))if(Array.isArray(P)){const se=[];for(const J of P)se.push(ne(J));t(o)[s]=se}else t(o)[s]=ne(P);else t(o)[s]=P;_!=null&&_.onChange&&(_==null||_.onChange(P)),m.push(s)}else tt(q(A.value,s))&&(t(o)[s]=G(t(q(A.value,s))))}),D(m).catch(s=>{})})}function B(e){return O(this,null,function*(){const a=G(t(c));if(!e)return;let m=ue(e)?[e]:e;ue(e)&&(m=[e]);for(const s of m)E(s,a);d.value=a})}function E(e,a){if(ue(e)){const m=a.findIndex(s=>s.field===e);m!==-1&&(delete o[e],a.splice(m,1))}}function u(e,a,m=!1){return O(this,null,function*(){const s=G(t(c)),y=Array.isArray(e)?e.map(T=>T.field):[e.field];if(s.find(T=>y.includes(T.field))){me("There are schemas that have already been added");return}const I=s.findIndex(T=>T.field===a),x=H(e)?[e]:e;!a||I===-1||m?m?s.unshift(...x):s.push(...x):I!==-1&&s.splice(I+1,0,...x),d.value=s,h(e)})}function w(e){return O(this,null,function*(){let a=[];if(H(e)&&a.push(e),Z(e)&&(a=[...e]),!a.every(s=>le(s.component)||Reflect.has(s,"field")&&s.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}d.value=a})}function p(e){return O(this,null,function*(){let a=[];if(H(e)&&a.push(e),Z(e)&&(a=[...e]),!a.every(I=>le(I.component)||Reflect.has(I,"field")&&I.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}const s=[],y=[];t(c).forEach(I=>{const x=a.find(T=>I.field===T.field);if(x){const T=je(I,x);y.push(T),s.push(T)}else s.push(I)}),h(y),d.value=it(s,"field")})}function h(e){let a=[];H(e)&&a.push(e),Z(e)&&(a=[...e]);const m={},s=F();a.forEach(y=>{!le(y.component)&&Reflect.has(y,"field")&&y.field&&!ee(y.defaultValue)&&(!(y.field in s)||ee(s[y.field]))&&(m[y.field]=y.defaultValue)}),g(m)}function F(){return t(v)?b(ge(t(o))):{}}function U(e){return t(c).some(a=>a.field===e&&a.component?_e.includes(a.component):!1)}function D(e){return O(this,null,function*(){var m;const a=yield(m=t(v))==null?void 0:m.validateFields(e);return b(a)})}function K(e){return O(this,null,function*(){var a;yield(a=t(v))==null?void 0:a.setProps(e)})}function j(e){return O(this,null,function*(){var s;let a;e===void 0?a=l():a=e===Array.isArray(e)?e:void 0;const m=yield(s=t(v))==null?void 0:s.validate(a);return b(m)})}function S(e){return O(this,null,function*(){var a;yield(a=t(v))==null?void 0:a.clearValidate(e)})}function N(e,a){return O(this,null,function*(){var m;yield(m=t(v))==null?void 0:m.scrollToField(e,a)})}function C(e){return O(this,null,function*(){e&&e.preventDefault();const{submitFunc:a}=t(r);if(a&&fe(a)){yield a();return}if(t(v))try{const s=yield j();n("submit",s)}catch(s){if((s==null?void 0:s.outOfDate)===!1&&(s!=null&&s.errorFields))return;throw new Error(s)}})}const k={getFieldsValue:F,setFieldsValue:g,resetFields:i,updateSchema:p,resetSchema:w,setProps:K,removeSchemaByField:B,appendSchemaByField:u,clearValidate:S,validateFields:D,validate:j,submit:C,scrollToField:N};return{handleSubmit:C,clearValidate:S,validate:j,validateFields:D,getFieldsValue:F,updateSchema:p,resetSchema:w,appendSchemaByField:u,removeSchemaByField:B,resetFields:i,setFieldsValue:g,scrollToField:N}}function mt(n,r,o){let c=G(r.value[o]);return yt(n)?c||void 0:(!c&&n&&At(n)&&(c=[0,0]),!c&&n&&n.component==="ApiTree"&&(c=[]),c)}function At(n){if(n.component==="Slider"&&n.componentProps&&"range"in n.componentProps)return!0}function yt(n){return(n==null?void 0:n.component)&&Qe.includes(n.component)}function vt(A){return O(this,arguments,function*({getSchema:n,getProps:r,formElRef:o,isInitedDefault:c}){Ce(()=>O(this,null,function*(){if(t(c)||!t(r).autoFocusFirstItem)return;yield Ae();const v=t(n),d=t(o),b=d==null?void 0:d.$el;if(!d||!b||!v||v.length===0)return;const i=v[0];if(!i.component||!i.component.includes("Input"))return;const l=b.querySelector(".ant-row:first-child input");l&&(l==null||l.focus())}))})}const Dt=He({name:"BasicForm",__name:"BasicForm",props:Je,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{expose:r,emit:o}){const c=n,A=o,v=We(),d=we({}),b=lt(),i=we({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),l=z({}),g=z(!1),B=z(),E=z(null),u=z(null),{prefixCls:w}=nt("basic-form"),p=X(()=>L(L({},c),t(B))),h=X(()=>[w,{[`${w}--compact`]:t(p).compact}]),F=X(()=>{const{baseRowStyle:f={},rowProps:$}=t(p);return L({style:f},$)}),U=X(()=>L(L(L({},v),c),t(p))),D=X(()=>{var $;const f=G(t(E)||t(p).schemas);for(const V of f){const{defaultValue:R,component:ae,componentProps:oe={},isHandleDateDefaultValue:Pe=!0}=V;if(Pe&&R&&ae&&_e.includes(ae)){const $e={schema:V,tableAction:($=c.tableAction)!=null?$:{},formModel:d,formActionType:{}},ie=oe?typeof oe=="function"?oe($e).valueFormat:oe.valueFormat:null;if(!Array.isArray(R))V.defaultValue=ie?W(R).format(ie):W(R);else{const ye=[];R.forEach(ve=>{ye.push(ie?W(ve).format(ie):W(ve))}),V.defaultValue=ye}}}return t(p).showAdvancedButton?f.filter(V=>!le(V.component)):f}),{handleToggleAdvanced:K,fieldsIsAdvancedMap:j}=pt({advanceState:i,emit:A,getProps:p,getSchema:D,formModel:d,defaultValueRef:l}),{handleFormValues:S,initDefault:N}=dt({getProps:p,defaultValueRef:l,getSchema:D,formModel:d});vt({getSchema:D,getProps:p,isInitedDefault:g,formElRef:u});const{handleSubmit:C,setFieldsValue:k,clearValidate:e,validate:a,validateFields:m,getFieldsValue:s,updateSchema:y,resetSchema:I,appendSchemaByField:x,removeSchemaByField:T,resetFields:_,scrollToField:te}=ht({emit:A,getProps:p,formModel:d,getSchema:D,defaultValueRef:l,formElRef:u,schemaRef:E,handleFormValues:S});ze({resetAction:_,submitAction:C}),M(()=>t(p).model,()=>{const{model:f}=t(p);f&&k(f)},{immediate:!0}),M(()=>c.schemas,f=>{I(f!=null?f:[])}),M(()=>D.value,f=>{Ae(()=>{var $;($=b==null?void 0:b.redoModalHeight)==null||$.call(b)}),!t(g)&&f!=null&&f.length&&(N(),g.value=!0)}),M(()=>d,Le(()=>{t(p).submitOnChange&&C()},300),{deep:!0});function ne(f){return O(this,null,function*(){B.value=je(t(B)||{},f)})}function P(f,$,V){d[f]=$,A("field-value-change",f,$),V&&V.itemProps&&!V.itemProps.autoLink&&m([f]).catch(R=>{})}function se(f){const{autoSubmitOnEnter:$}=t(p);if($&&f.key==="Enter"&&f.target&&f.target instanceof HTMLElement){const V=f.target;V&&V.tagName&&V.tagName.toUpperCase()==="INPUT"&&C()}}const J={getFieldsValue:s,setFieldsValue:k,resetFields:_,updateSchema:y,resetSchema:I,setProps:ne,removeSchemaByField:T,appendSchemaByField:x,clearValidate:e,validateFields:m,validate:a,submit:C,scrollToField:te},xe=X(()=>L(L({},p.value),i));return r(L({},J)),ke(()=>{N(),A("register",J)}),(f,$)=>(de(),Ie(t(ct),he(U.value,{class:h.value,ref_key:"formElRef",ref:u,model:d,onKeypress:qe(se,["enter"])}),{default:re(()=>[Ve(t(rt),Be(De(F.value)),{default:re(()=>[ce(f.$slots,"formHeader"),(de(!0),Ye(Xe,null,pe(D.value,V=>(de(),Ie(Ge,{key:V.field,isAdvanced:t(j)[V.field],tableAction:f.tableAction,formActionType:J,schema:V,formProps:p.value,allDefaultValues:l.value,formModel:d,setFormModel:P},Te({_:2},[pe(Object.keys(f.$slots),R=>({name:R,fn:re(ae=>[ce(f.$slots,R,he({ref_for:!0},ae||{}))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Ve(Me,he(xe.value,{onToggleAdvanced:t(K)}),Te({_:2},[pe(["resetBefore","submitBefore","advanceBefore","advanceAfter"],V=>({name:V,fn:re(R=>[ce(f.$slots,V,Be(De(R||{})))])}))]),1040,["onToggleAdvanced"]),ce(f.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model"]))}});export{Dt as _};
