import{T as M,c as E,a as Y,b as Z}from"./chunk-DFEJAA7W-CGOBzxfL.js";import{a5 as i,R as ee,fx as se,j as e,b as re,a8 as te,a9 as ae,t as oe,y as A,v as le,H as V,T as L,w as a,x as P,z as ie,E as ne,B as b,m as de,bN as ce,D as xe}from"./index-Br7KcgVZ.js";import{P as me}from"./chunk-YRY2CZ6I-Bdeow-nn.js";import"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{b as pe}from"./chunk-6YTJEFSJ-DfA0jTEs.js";import{S as ue}from"./chunk-JLD5AXG6-B8R1IlZM.js";import{K as he}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{R as m,u as fe,a as ge,S as u}from"./chunk-6DAFMWMA-CJYvS4oG.js";import{S as j}from"./select-DP_jSwBJ.js";import"./chunk-V3MOBCDF-Fr8ItIPO.js";import"./chunk-D2UCOBBT-BtE3OoB1.js";import"./chunk-B4FQDBC3-BZI8PJ_J.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./format-Bc3Z-myT.js";import"./chunk-MSDRGCRR-B49IUHK3.js";import"./index-CTi5Aiew.js";import"./chunk-YYGNAECV-CdtusxP9.js";import"./chunk-C76H5USB-snx4tQYu.js";import"./chunk-W7625H47-BkG1IMls.js";import"./chunk-XWO5BP42-DFUhNHVV.js";import"./chunk-ZJRFL6ZN-Drw4hxOZ.js";import"./chunk-G3QXMPRB-C4Y9XDpT.js";import"./chunk-IQBAUTU5-B5iMuFbL.js";import"./chunk-ADOCJB6L-DpbH65mi.js";import"./chunk-5R4UGQUP-BQClAcK-.js";import"./chunk-IRV425DP-DVPUpwMo.js";import"./chunk-LF55PRLE-C0mm5P7A.js";import"./x-mark-mini-7wDt4qdT.js";import"./checkbox-CuKUmx-V.js";import"./index.esm-Dx8Cmbzx.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./_isIndex-69RBt1x5.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./prompt-BFK30w09.js";import"./triangles-mini-D47Qut5I.js";import"./check-C_q2Aw8o.js";var be=i.object({name:i.string().min(1),code:i.string().min(1),rate:i.object({float:i.number().optional(),value:i.string().optional()}).optional(),is_combinable:i.boolean().optional(),enabled_rules:i.object({product:i.boolean(),product_type:i.boolean()}),product:i.array(M).optional(),product_type:i.array(M).optional()}),je="tr",k=g=>`${je}-${g}`,ve=({taxRegion:g})=>{const{t:r}=re(),{handleSuccess:v}=fe(),{setIsOpen:y}=ge(),o=te({defaultValues:{name:"",code:"",is_combinable:!1,rate:{value:""},enabled_rules:{product:!0,product_type:!1},product:[],product_type:[]},resolver:ae(be)}),{mutateAsync:R,isPending:N}=pe(),z=o.handleSubmit(async s=>{var h;const{product:l,product_type:t}=s,c=E({reference_type:"product",references:l||[]}),p=E({reference_type:"product_type",references:t||[]}),n=[c,p].filter(d=>!!d).flatMap(d=>d);R({name:s.name,tax_region_id:g.id,rate:(h=s.rate)==null?void 0:h.float,code:s.code,is_combinable:s.is_combinable,rules:n,is_default:!1},{onSuccess:()=>{v()},onError:d=>{oe.error(d.message)}})}),B=A({control:o.control,name:"product"}),H=A({control:o.control,name:"product_type"}),S=s=>{switch(s){case"product":return B;case"product_type":return H}},F=[{value:"product",label:r("taxRegions.fields.targets.options.product")},{value:"product_type",label:r("taxRegions.fields.targets.options.productType")}],$={product:r("taxRegions.fields.targets.placeholders.product"),product_type:r("taxRegions.fields.targets.placeholders.productType")},K=s=>{const{fields:l,remove:t,append:c}=S(s),p=k(s);return n=>{if(!n.length){o.setValue(s,[],{shouldDirty:!0}),y(p,!1);return}const h=n.map(x=>x.value),d=n.filter(x=>!l.some(w=>w.value===x.value));for(const x of l)h.includes(x.value)||t(l.indexOf(x));c(d),y(p,!1)}},T=new Set(["product"]),I=s=>{o.setValue(s,[],{shouldDirty:!0}),o.setValue(`enabled_rules.${s}`,!1,{shouldDirty:!0}),T.delete(s)},O=s=>{o.setValue(`enabled_rules.${s}`,!0,{shouldDirty:!0}),o.setValue(s,[],{shouldDirty:!0}),T.add(s)},_=le({control:o.control,name:"enabled_rules"}),G=()=>{const s=Object.keys(_).find(l=>!_[l]);s&&O(s)},C=F.filter(s=>_[s.value]).sort((s,l)=>{const t=Array.from(T);return t.indexOf(l.value)-t.indexOf(s.value)}),W=s=>F.filter(l=>!C.some(t=>t.value===l.value)||l.value===s),q=Object.values(_).some(s=>!s);return e.jsx(m.Form,{form:o,children:e.jsxs(he,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(m.Header,{}),e.jsx(m.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(m.Title,{asChild:!0,children:e.jsx(V,{children:r("taxRegions.taxOverrides.create.header")})}),e.jsx(m.Description,{asChild:!0,children:e.jsx(L,{size:"small",className:"text-ui-fg-subtle",children:r("taxRegions.taxOverrides.create.hint")})})]}),e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(a.Field,{control:o.control,name:"name",render:({field:s})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("fields.name")}),e.jsx(a.Control,{children:e.jsx(P,{...s})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:o.control,name:"rate",render:({field:{value:s,onChange:l,...t}})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("taxRegions.fields.taxRate")}),e.jsx(a.Control,{children:e.jsx(me,{...t,placeholder:"0.00",value:s==null?void 0:s.value,onValueChange:(c,p,n)=>l({value:c,float:n==null?void 0:n.float})})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:o.control,name:"code",render:({field:s})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("taxRegions.fields.taxCode")}),e.jsx(a.Control,{children:e.jsx(P,{...s})}),e.jsx(a.ErrorMessage,{})]})})]})})}),e.jsx(ue,{control:o.control,name:"is_combinable",label:r("taxRegions.fields.isCombinable.label"),description:r("taxRegions.fields.isCombinable.hint")}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(ie,{id:"tax_region_rules_label",htmlFor:"tax_region_rules",children:r("taxRegions.fields.targets.label")}),e.jsxs(L,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:["(",r("fields.optional"),")"]})]}),e.jsx(ne,{id:"tax_region_rules_description",className:"text-pretty",children:r("taxRegions.fields.targets.hint")})]}),q&&e.jsx(b,{onClick:G,type:"button",size:"small",variant:"transparent",className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex-shrink-0",children:r("taxRegions.fields.targets.action")})]}),e.jsx("div",{id:"tax_region_rules","aria-labelledby":"tax_region_rules_label","aria-describedby":"tax_region_rules_description",role:"application",className:"flex flex-col gap-y-3",children:C.map((s,l)=>{const t=s.value,c=s.label,p=l===C.length-1,n=$[t],h=W(t),{fields:d,remove:x}=S(t),w=K(t),J=k(t),Q=D=>{I(t),O(D)};return e.jsx("div",{children:e.jsx(a.Field,{control:o.control,name:s.value,render:({field:{value:D,onChange:ye,...U}})=>e.jsxs(a.Item,{className:"space-y-0",children:[e.jsx(a.Label,{className:"sr-only",children:c}),e.jsxs("div",{className:de("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",...U,children:[e.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[p?e.jsxs(j,{value:t,onValueChange:Q,children:[e.jsx(j.Trigger,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",children:e.jsx(j.Value,{})}),e.jsx(j.Content,{children:h.map(f=>e.jsx(j.Item,{value:f.value,children:f.label},f.value))})]}):e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:c}),e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:r("taxRegions.fields.targets.operators.in")})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-1.5",children:[e.jsxs(u,{id:J,children:[e.jsx(u.Trigger,{asChild:!0,children:e.jsxs("button",{type:"button",className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",children:[e.jsx(ce,{}),n]})}),e.jsx(u.Trigger,{asChild:!0,children:e.jsx(b,{variant:"secondary",children:r("actions.browse")})}),e.jsxs(u.Content,{children:[e.jsxs(u.Header,{children:[e.jsx(u.Title,{asChild:!0,children:e.jsx(V,{className:"sr-only",children:r("taxRegions.fields.targets.modal.header")})}),e.jsx(u.Description,{className:"sr-only",children:r("taxRegions.fields.targets.hint")})]}),e.jsx(Y,{type:"focus",referenceType:t,state:d,setState:w})]})]}),e.jsx(b,{variant:"secondary",onClick:()=>I(t),type:"button",children:r("actions.delete")})]}),d.length>0?e.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[e.jsx(xe,{variant:"dashed"}),e.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:d.map((f,X)=>e.jsx(Z,{index:X,label:f.label,onRemove:x},f.id))})]}):null]}),e.jsx(a.ErrorMessage,{className:"mt-2"})]})})},t)})})]})]})})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:N,children:r("actions.save")})]})})]})})},bs=()=>{const{id:g,province_id:r}=ee(),{tax_region:v,isPending:y,isError:o,error:R}=se(r||g),N=!y&&!!v;if(o)throw R;return e.jsx(m,{children:N&&e.jsx(ve,{taxRegion:v})})};export{bs as Component};
