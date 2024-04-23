import{B as b}from"./componentMap-CvAyH2yZ.js";import{a as w}from"./entry/index-CcD9InFe-1713859961241.js";import{_ as p}from"./BasicForm.vue_vue_type_script_setup_true_lang-CamHNraV.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B5GSRQl5.js";import{u as m}from"./useForm-DWfbRj_U.js";import{P as _}from"./index-Der6pWgT.js";import{u as i}from"./upload-9iOnVnsM.js";import{au as n,B as C}from"./antd-wx2EorFB.js";import{d as x,Z as V,a8 as y,a9 as I,k as s,u as t}from"./vue-BzLr-Yiv.js";import"./useFormItem-Ck1BFBX6.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CxgfVUKl.js";import"./index-ChcFEl8M.js";import"./useWindowSizeFn-D8Bj5L-Q.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BXkv1tna.js";import"./download-DmS_ODBY.js";import"./base64Conver-bBv-IO2K.js";import"./index-C6IzKrim.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BfkDRkun.js";import"./copyTextToClipboard-BjiZR9iM.js";import"./index-CXfT09uu.js";import"./index-DGNxvfys.js";import"./FormItem.vue_vue_type_script_lang-DIGucFGt.js";import"./helper-L_K8O3bh.js";import"./useContentViewHeight-bDMQRRO6.js";import"./onMountedOrActivated-CXOAhMDs.js";const se=x({__name:"index",setup(U){const u=[{field:"field1",component:"Upload",label:"字段1",rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:i}},{field:"field2",component:"ImageUpload",label:"字段2(ImageUpload)",colProps:{span:8},componentProps:{api:i}}],c=[{field:"field3",component:"Upload",label:"字段3",componentProps:{resultField:"data3.url",api:(e,o)=>new Promise(a=>{i(e,o).then(l=>{a({code:200,data3:{url:l.data.url}})})})}},{field:"field4",component:"ImageUpload",label:"字段4(ImageUpload)",colProps:{span:8},componentProps:{resultField:"data4.url",api:(e,o)=>new Promise(a=>{i(e,o).then(l=>{a({code:200,data4:{url:l.data.url}})})})}}],d=[{field:"field5",component:"Upload",label:"字段5",componentProps:{previewColumns:[{title:"url5",dataIndex:"url5"},{title:"type5",dataIndex:"type5"},{title:"name5",dataIndex:"name5"},{title:"operation",dataIndex:"",customRender:({record:e})=>s(C,{onclick:()=>{r.success("请到控制台查看该行输出结果")}},"点我")}],beforePreviewData:e=>e.filter(a=>!!a).map(a=>{if(typeof a=="string")return{url5:a,type5:a.split(".").pop()||"",name5:a.split("/").pop()||""}}),resultField:"data5.url",api:(e,o)=>new Promise(a=>{i(e,o).then(l=>{a({code:200,data5:{url:l.data.url}})})})}}],{createMessage:r}=w();function g(e){r.success(`已上传文件${JSON.stringify(e)}`)}const[f,{getFieldsValue:R,validate:h}]=m({labelWidth:160,schemas:u,actionColOptions:{span:18},submitFunc:()=>new Promise(e=>{h().then(()=>{e(),r.success("请到控制台查看结果")}).catch(()=>{r.error("请输入必填项")})})}),[P,{getFieldsValue:v}]=m({labelWidth:160,schemas:c,actionColOptions:{span:18},submitFunc:()=>new Promise(e=>{e(),r.success("请到控制台查看结果")})}),[F,{getFieldsValue:B}]=m({labelWidth:160,schemas:d,actionColOptions:{span:18},submitFunc:()=>new Promise(e=>{e(),r.success("请到控制台查看结果")})});return(e,o)=>(V(),y(t(_),{title:"上传组件示例"},{default:I(()=>[s(t(n),{message:"基础示例"}),s(t(b),{maxSize:20,maxNumber:10,onChange:g,api:t(i),class:"my-5",accept:["image/*"]},null,8,["api"]),s(t(n),{message:"嵌入表单,加入表单校验"}),s(t(p),{onRegister:t(f),class:"my-5"},null,8,["onRegister"]),s(t(n),{message:"嵌入表单,加入resultFiled自定义返回值"}),s(t(p),{onRegister:t(P),class:"my-5"},null,8,["onRegister"]),s(t(n),{message:"嵌入表单,自定义预览内容"}),s(t(p),{onRegister:t(F),class:"my-5"},null,8,["onRegister"])]),_:1}))}});export{se as default};
