import{d as f}from"./vuedraggable.umd-D2njivOh.js";import g from"./LayoutItem-D0ktnc9l.js";import{u as h}from"./useFormDesignState-Z-K2WdVs.js";import{a2 as v,aI as _,f as C}from"./antd-wx2EorFB.js";import{d as y,c as S,a7 as r,Z as I,_ as E,m as F,A as D,k as s,a9 as d,$ as b,aj as k,ak as A}from"./vue-BzLr-Yiv.js";import{c as V}from"./entry/index-CcD9InFe-1713859961241.js";import"./FormNode-CSLrLamO.js";import"./FormNodeOperate-DzP1YMfV.js";import"./index-O7bUfy4o.js";import"./index-nWWBQOi7.js";import"./formItemConfig-BMsCib_u.js";import"./componentMap-CvAyH2yZ.js";import"./useFormItem-Ck1BFBX6.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CxgfVUKl.js";import"./index-ChcFEl8M.js";import"./useWindowSizeFn-D8Bj5L-Q.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BXkv1tna.js";import"./download-DmS_ODBY.js";import"./base64Conver-bBv-IO2K.js";import"./index-C6IzKrim.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BfkDRkun.js";import"./copyTextToClipboard-BjiZR9iM.js";import"./index-CXfT09uu.js";import"./index-DGNxvfys.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:g,draggable:f,Form:v,Empty:_},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:t}=h(),i=({newIndex:e})=>{t.value.schemas=t.value.schemas||[];const m=t.value.schemas;m[e]=C(m[e]),a("handleSetSelectItem",m[e])},p=e=>{a("handleSetSelectItem",t.value.schemas[e.oldIndex])},l=S(()=>t.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:t,layoutTag:l}}}),B={class:"form-panel v-form-container"},P={class:"draggable-box"};function L(o,a,t,i,p,l){const e=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return I(),E("div",B,[F(s(e,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[D,o.formConfig.schemas.length===0]]),s(u,k(A(o.formConfig)),{default:d(()=>[b("div",P,[s(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=n=>o.formConfig.schemas=n),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:n})=>[s(m,{class:"drag-move",schema:n,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const ro=V($,[["render",L],["__scopeId","data-v-311e860d"]]);export{ro as default};
