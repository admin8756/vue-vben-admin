var _=(F,v,l)=>new Promise((u,m)=>{var r=o=>{try{c(l.next(o))}catch(d){m(d)}},b=o=>{try{c(l.throw(o))}catch(d){m(d)}},c=o=>o.done?u(o.value):Promise.resolve(o.value).then(r,b);c((l=l.apply(F,v)).next())});import{P as $}from"./index-Der6pWgT.js";import{C as w,d as V,a as K}from"./entry/index-CcD9InFe-1713859961241.js";import{_ as P}from"./BasicForm.vue_vue_type_script_setup_true_lang-CamHNraV.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B5GSRQl5.js";import"./componentMap-CvAyH2yZ.js";import{u as T}from"./useForm-DWfbRj_U.js";import{a0 as g,o as B}from"./antd-wx2EorFB.js";import{d as x,f as k,a7 as D,n as R,m as M,Z as h,a8 as N,a9 as i,$ as S,k as n,G as y,u as p,_ as j,F as G,aa as W,ac as A}from"./vue-BzLr-Yiv.js";import"./useContentViewHeight-bDMQRRO6.js";import"./useWindowSizeFn-D8Bj5L-Q.js";import"./onMountedOrActivated-CXOAhMDs.js";import"./FormItem.vue_vue_type_script_lang-DIGucFGt.js";import"./helper-L_K8O3bh.js";import"./index-ChcFEl8M.js";import"./useFormItem-Ck1BFBX6.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CxgfVUKl.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BXkv1tna.js";import"./download-DmS_ODBY.js";import"./base64Conver-bBv-IO2K.js";import"./index-C6IzKrim.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BfkDRkun.js";import"./copyTextToClipboard-BjiZR9iM.js";import"./index-CXfT09uu.js";import"./index-DGNxvfys.js";const E={class:"mb-4"},de=x({name:"TabsFormDemo",__name:"TabsForm",setup(F){const v=g.TabPane,{createMessage:l}=K(),u=k("tabs2"),m=k(!1),r=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let a=1;a<=5;++a){const e=`tabs${a}`,s=[],f={};for(let t=1;t<=8;++t)s.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),f[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=f,r.push({key:e,tab:e,forceRender:!0,Form:T(Object.assign({schemas:s},b))})}function o(){return _(this,null,function*(){for(const a of r){const{resetFields:e}=a.Form[1];yield e()}})}function d(){return _(this,null,function*(){let a="";m.value=!0;try{const e={};for(const s of r){a=s.key;const{validate:f,getFieldsValue:t}=s.Form[1];yield f(),V(e,t())}l.success("提交成功！请打开控制台查看")}catch(e){u.value=a}finally{m.value=!1}})}function C(){return _(this,null,function*(){for(const a of r){const{setFieldsValue:e}=a.Form[1];yield e(c)}})}return(a,e)=>{const s=D("a-button"),f=R("loading");return M((h(),N(p($),{title:"标签页+多级field表单"},{default:i(()=>[S("div",E,[n(s,{onClick:o,class:"mr-2"},{default:i(()=>[y(" 重置表单 ")]),_:1}),n(s,{onClick:C,class:"mr-2"},{default:i(()=>[y(" 设置默认值 ")]),_:1}),n(s,{onClick:d,class:"mr-2",type:"primary"},{default:i(()=>[y(" 提交表单 ")]),_:1})]),n(p(w),{title:"标签页+多级field表单"},{default:i(()=>[n(p(g),{activeKey:u.value,"onUpdate:activeKey":e[0]||(e[0]=t=>u.value=t)},{default:i(()=>[(h(),j(G,null,W(r,t=>n(p(v),A({key:t.key,ref_for:!0},p(B)(t,["Form","key"])),{default:i(()=>[n(p(P),{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040)),64))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[f,m.value]])}}});export{de as default};
