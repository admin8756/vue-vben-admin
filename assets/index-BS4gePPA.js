var f=(g,i,o)=>new Promise((p,n)=>{var d=e=>{try{r(o.next(e))}catch(s){n(s)}},l=e=>{try{r(o.throw(e))}catch(s){n(s)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(d,l);r((o=o.apply(g,i)).next())});import{aF as k,h as G}from"./entry/index-CcD9InFe-1713859961241.js";import{a as V,B as b}from"./index-ChcFEl8M.js";import{_ as M}from"./BasicForm.vue_vue_type_script_setup_true_lang-CamHNraV.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B5GSRQl5.js";import"./componentMap-CvAyH2yZ.js";import{u as D}from"./useForm-DWfbRj_U.js";import{al as v}from"./antd-wx2EorFB.js";import{d as I,f as y,Z as h,a8 as A,a9 as m,k as x,u as a,_ as N,aa as P,ag as U,G as $,a0 as F,F as q,ac as z}from"./vue-BzLr-Yiv.js";import"./useWindowSizeFn-D8Bj5L-Q.js";import"./FormItem.vue_vue_type_script_lang-DIGucFGt.js";import"./helper-L_K8O3bh.js";import"./useFormItem-Ck1BFBX6.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CxgfVUKl.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BXkv1tna.js";import"./download-DmS_ODBY.js";import"./base64Conver-bBv-IO2K.js";import"./index-C6IzKrim.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BfkDRkun.js";import"./copyTextToClipboard-BjiZR9iM.js";import"./index-CXfT09uu.js";import"./index-DGNxvfys.js";const de=I({__name:"index",setup(g){const i=k(),o=v.Group,{t:p}=G(),[n,{closeModal:d}]=V(()=>f(this,null,function*(){S()})),l=y({development:"http://www.a.com",test:"http://www.b.com",prod:"http://www.c.com"}),r=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:s,setFieldsValue:B}]=D({showActionButtonGroup:!1,schemas:[{field:"api",label:p("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"production",required:!0,slot:"api"}]}),C=()=>f(this,null,function*(){const t=yield s();i.setApiAddress({key:t.api,val:l.value[t.api]}),location.reload()}),R=()=>{d()},S=()=>{const{key:t=""}=i.getApiAddress;t&&B({api:t})};return(t,E)=>(h(),A(a(b),z({title:a(p)("layout.header.dropdownChangeApi")},t.$attrs,{onRegister:a(n),onOk:C,onCancel:R}),{default:m(()=>[x(a(M),{onRegister:a(e)},{api:m(({model:_,field:w})=>[x(a(o),{value:_[w],"onUpdate:value":c=>_[w]=c},{default:m(()=>[(h(!0),N(q,null,P(l.value,(c,u)=>(h(),A(a(v),{style:U(r.value),value:u,key:u},{default:m(()=>[$(F(u)+": "+F(c),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{de as default};
