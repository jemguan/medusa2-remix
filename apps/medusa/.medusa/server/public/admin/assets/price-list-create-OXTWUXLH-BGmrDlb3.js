import{P as ee}from"./chunk-AOA3QLJK-BnNqArco.js";import{P as se,a as te,u as re,b as ie}from"./chunk-F7GRODPA-Bvi5hZ6h.js";import{a5 as h,j as e,r as R,b as A,a8 as ae,a9 as le,dY as oe,t as B,B as D,y as ne,H as ce,T as G,w as t,x as de,D as E,m as ue,bN as pe,I as me,v as O,e as W,k as xe}from"./index-Br7KcgVZ.js";import{e as he,i as fe}from"./chunk-G2J2T2QU-CIbW83Yn.js";import{u as ge}from"./chunk-G3QXMPRB-C4Y9XDpT.js";import{D as je}from"./chunk-2T6UWGTP-FG_W_o8A.js";import{u as be,_ as ve}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import{u as ye,a as Pe}from"./chunk-LF55PRLE-C0mm5P7A.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{K as Ce}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{R as N,u as Y,a as Se,S as T}from"./chunk-6DAFMWMA-CJYvS4oG.js";import{X as Le}from"./x-mark-mini-7wDt4qdT.js";import{P as C}from"./progress-tabs-BWGMEUCD.js";import{R as H}from"./radio-group-CfZKGCM9.js";import{S as w}from"./select-DP_jSwBJ.js";import{T as _e}from"./textarea-dEO33NI7.js";import{D as K}from"./date-picker-DwI7Qf6K.js";import{C as X}from"./checkbox-CuKUmx-V.js";import{c as we}from"./index-CTi5Aiew.js";import"./chunk-ZJRFL6ZN-Drw4hxOZ.js";import"./chunk-C76H5USB-snx4tQYu.js";import"./chunk-MSDRGCRR-B49IUHK3.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./chunk-IQBAUTU5-B5iMuFbL.js";import"./chunk-ADOCJB6L-DpbH65mi.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-69RBt1x5.js";import"./index.esm-Dx8Cmbzx.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./format-Bc3Z-myT.js";import"./prompt-BFK30w09.js";import"./triangles-mini-D47Qut5I.js";import"./check-C_q2Aw8o.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";var Ne=({form:a})=>{const{t:s}=A(),{fields:o,remove:n,append:g}=ne({control:a.control,name:"rules.customer_group_id",keyName:"cg_id"}),{setIsOpen:j}=Se(),p=l=>{const x=l.map(f=>f.id),c=l.filter(f=>!o.some(v=>v.id===f.id));for(const f of o)x.includes(f.id)||n(o.indexOf(f));g(c),j("cg",!1)};return e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-8 py-16",children:[e.jsxs("div",{children:[e.jsx(ce,{children:s("priceLists.create.header")}),e.jsx(G,{size:"small",className:"text-ui-fg-subtle",children:s("priceLists.create.subheader")})]}),e.jsx(t.Field,{control:a.control,name:"type",render:({field:{onChange:l,...x}})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{children:[e.jsx(t.Label,{children:s("priceLists.fields.type.label")}),e.jsx(t.Hint,{children:s("priceLists.fields.type.hint")})]}),e.jsx(t.Control,{children:e.jsxs(H,{onValueChange:l,...x,className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(H.ChoiceBox,{value:"sale",label:s("priceLists.fields.type.options.sale.label"),description:s("priceLists.fields.type.options.sale.description")}),e.jsx(H.ChoiceBox,{value:"override",label:s("priceLists.fields.type.options.override.label"),description:s("priceLists.fields.type.options.override.description")})]})})]}),e.jsx(t.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1  gap-4 md:grid-cols-2",children:[e.jsx(t.Field,{control:a.control,name:"title",render:({field:l})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:s("fields.title")}),e.jsx(t.Control,{children:e.jsx(de,{...l})}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(t.Field,{control:a.control,name:"status",render:({field:{onChange:l,ref:x,...c}})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:s("priceLists.fields.status.label")}),e.jsx(t.Control,{children:e.jsxs(w,{...c,onValueChange:l,children:[e.jsx(w.Trigger,{ref:x,children:e.jsx(w.Value,{})}),e.jsxs(w.Content,{children:[e.jsx(w.Item,{value:"active",children:s("priceLists.fields.status.options.active")}),e.jsx(w.Item,{value:"draft",children:s("priceLists.fields.status.options.draft")})]})]})}),e.jsx(t.ErrorMessage,{})]})})]}),e.jsx(t.Field,{control:a.control,name:"description",render:({field:l})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:s("fields.description")}),e.jsx(t.Control,{children:e.jsx(_e,{...l})}),e.jsx(t.ErrorMessage,{})]})})]}),e.jsx(E,{}),e.jsx(t.Field,{control:a.control,name:"starts_at",render:({field:l})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t.Label,{optional:!0,children:s("priceLists.fields.startsAt.label")}),e.jsx(t.Hint,{children:s("priceLists.fields.startsAt.hint")})]}),e.jsx(t.Control,{children:e.jsx(K,{granularity:"minute",shouldCloseOnSelect:!1,...l})})]}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(E,{}),e.jsx(t.Field,{control:a.control,name:"ends_at",render:({field:l})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t.Label,{optional:!0,children:s("priceLists.fields.endsAt.label")}),e.jsx(t.Hint,{children:s("priceLists.fields.endsAt.hint")})]}),e.jsx(t.Control,{children:e.jsx(K,{granularity:"minute",shouldCloseOnSelect:!1,...l})})]}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(E,{}),e.jsx(t.Field,{control:a.control,name:"rules.customer_group_id",render:({field:l})=>e.jsxs(t.Item,{children:[e.jsxs("div",{children:[e.jsx(t.Label,{optional:!0,children:s("priceLists.fields.customerAvailability.label")}),e.jsx(t.Hint,{children:s("priceLists.fields.customerAvailability.hint")})]}),e.jsx(t.Control,{children:e.jsxs("div",{className:ue("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",ref:l.ref,children:[e.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:s("priceLists.fields.customerAvailability.attribute")}),e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:s("operators.in")})]}),e.jsx("div",{className:"flex items-center gap-1.5 px-1.5",children:e.jsxs(T,{id:"cg",children:[e.jsx(T.Trigger,{asChild:!0,children:e.jsxs("button",{type:"button",className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",children:[e.jsx(pe,{}),s("priceLists.fields.customerAvailability.placeholder")]})}),e.jsx(T.Trigger,{asChild:!0,children:e.jsx(D,{variant:"secondary",children:s("actions.browse")})}),e.jsxs(T.Content,{children:[e.jsx(T.Header,{}),e.jsx(ee,{state:o,setState:p,type:"focus"})]})]})}),o.length>0?e.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[e.jsx(E,{variant:"dashed"}),e.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:o.map((x,c)=>e.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[e.jsx(G,{size:"small",leading:"compact",children:x.name}),e.jsx(me,{size:"small",variant:"transparent",type:"button",onClick:()=>n(c),children:e.jsx(Le,{})})]},x.cg_id))})]}):null]})}),e.jsx(t.ErrorMessage,{})]})})]})})},Fe=({form:a,currencies:s,regions:o,pricePreferences:n})=>{const g=O({control:a.control,name:"product_ids"}),j=O({control:a.control,name:"products"}),{products:p,isLoading:l,isError:x,error:c}=W({id:g.map(u=>u.id),limit:g.length,fields:"title,thumbnail,*variants"}),{setCloseOnEscape:f}=Y(),{setValue:v}=a;R.useEffect(()=>{!l&&p&&p.forEach(u=>{j[u.id]||!u.variants||v(`products.${u.id}.variants`,{...u.variants.reduce((L,_)=>(L[_.id]={currency_prices:{},region_prices:{}},L),{})})})},[p,j,l,v]);const F=ie({currencies:s,regions:o,pricePreferences:n});if(x)throw c;return e.jsx("div",{className:"flex size-full flex-col divide-y overflow-hidden",children:e.jsx(je,{isLoading:l,columns:F,data:p,getSubRows:u=>{if(fe(u)&&u.variants)return u.variants},state:a,onEditingChange:u=>f(!u)})})},V=50,$="p";function Te(a){return a.reduce((s,o)=>(s[o.id]=!0,s),{})}var Re=({form:a})=>{const{t:s}=A(),{control:o,setValue:n}=a,g=O({control:o,name:"product_ids"}),j=O({control:o,name:"products"}),[p,l]=R.useState(Te(g)),{searchParams:x,raw:c}=ye({pageSize:V,prefix:$}),{products:f,count:v,isLoading:F,isError:u,error:L}=W(x,{placeholderData:xe}),_=r=>{const d=typeof r=="function"?r(p):r,y=Object.keys(d),b=Object.keys(j).reduce((I,M)=>(y.includes(M)&&(I[M]=j[M]),I),{}),U=y.map(I=>({id:I}));n("product_ids",U,{shouldDirty:!0,shouldTouch:!0}),n("products",b,{shouldDirty:!0,shouldTouch:!0}),l(d)},k=Ie(),i=Pe(),{table:m}=be({data:f||[],columns:k,count:v,enablePagination:!0,enableRowSelection:r=>{var d;return!!((d=r.original.variants)!=null&&d.length)},getRowId:r=>r.id,rowSelection:{state:p,updater:_},pageSize:V});if(u)throw L;return e.jsx("div",{className:"flex size-full flex-col",children:e.jsx(ve,{table:m,columns:k,filters:i,pageSize:V,prefix:$,count:v,isLoading:F,layout:"fill",orderBy:[{key:"title",label:s("fields.title")},{key:"status",label:s("fields.status")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],pagination:!0,search:!0,queryObject:c,noRecords:{message:s("priceLists.create.products.list.noRecordsMessage")}})})},ke=we(),Ie=()=>{const a=ge();return R.useMemo(()=>[ke.display({id:"select",header:({table:s})=>e.jsx(X,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:o=>s.toggleAllPageRowsSelected(!!o)}),cell:({row:s})=>e.jsx(X,{checked:s.getIsSelected(),disabled:!s.getCanSelect(),onCheckedChange:o=>s.toggleSelected(!!o),onClick:o=>{o.stopPropagation()}})}),...a],[a])};h.array(h.object({id:h.string(),name:h.string()}));var z=h.object({type:h.enum(["sale","override"]),status:h.enum(["draft","active"]),title:h.string().min(1),description:h.string().min(1),starts_at:h.date().nullish(),ends_at:h.date().nullish(),product_ids:h.array(h.object({id:h.string()})).min(1),products:se,rules:te.nullish()}),Z=z.pick({type:!0,title:!0,description:!0,starts_at:!0,ends_at:!0,customer_group_ids:!0}),q=Object.keys(Z.shape),J=z.pick({product_ids:!0}),Q=Object.keys(J.shape),Ee=z.pick({products:!0}),De=Object.keys(Ee.shape),S=["detail","product","price"],Oe={detail:"in-progress",product:"not-started",price:"not-started"},Ae=({regions:a,currencies:s,pricePreferences:o})=>{const[n,g]=R.useState("detail"),[j,p]=R.useState(Oe),{t:l}=A(),{handleSuccess:x}=Y(),c=ae({defaultValues:{type:"sale",status:"active",title:"",description:"",starts_at:null,ends_at:null,product_ids:[],products:{},rules:{customer_group_id:[]}},resolver:le(z)}),{mutateAsync:f,isPending:v}=oe(),F=c.handleSubmit(async i=>{var P;const{rules:m,products:r}=i,d=(P=m==null?void 0:m.customer_group_id)!=null&&P.length?{"customer.groups.id":m.customer_group_id.map(b=>b.id)}:void 0,y=he(r,a);await f({title:i.title,type:i.type,status:i.status,description:i.description,starts_at:i.starts_at?i.starts_at.toISOString():null,ends_at:i.ends_at?i.ends_at.toISOString():null,rules:d,prices:y},{onSuccess:({price_list:b})=>{B.success(l("priceLists.create.successToast",{title:b.title})),x(`../${b.id}`)},onError:b=>{B.error(b.message)}})}),u=(i,m)=>{c.clearErrors(i);const r=i.reduce((y,P)=>(y[P]=c.getValues(P),y),{}),d=m.safeParse(r);return d.success?!0:(d.error.errors.forEach(({path:y,message:P,code:b})=>{c.setError(y.join("."),{type:b,message:P})}),!1)},L=i=>{switch(i){case"detail":return q.some(r=>c.getFieldState(r).isDirty);case"product":return Q.some(r=>c.getFieldState(r).isDirty);case"price":return De.some(r=>c.getFieldState(r).isDirty)}},_=i=>{if(n===i)return;if(S.indexOf(i)<S.indexOf(n)){const r=L(n);p(d=>({...d,[n]:r?d[n]:"not-started",[i]:"in-progress"})),g(i);return}const m=S.slice(0,S.indexOf(i));for(const r of m)if(r==="detail"){if(!u(q,Z)){p(d=>({...d,[r]:"in-progress"})),g(r);return}p(d=>({...d,[r]:"completed"}))}else if(r==="product"){if(!u(Q,J)){p(d=>({...d,[r]:"in-progress"})),g(r);return}p(d=>({...d,[r]:"completed"}))}p(r=>({...r,[n]:"completed",[i]:"in-progress"})),g(i)},k=i=>{if(S.indexOf(i)+1>=S.length)return;const m=S[S.indexOf(i)+1];_(m)};return e.jsx(N.Form,{form:c,children:e.jsx(C,{value:n,onValueChange:i=>_(i),className:"flex h-full flex-col overflow-hidden",children:e.jsxs(Ce,{onSubmit:F,className:"flex h-full flex-col",children:[e.jsx(N.Header,{children:e.jsx("div",{className:"flex w-full items-center justify-between gap-x-4",children:e.jsx("div",{className:"-my-2 w-full max-w-[600px] border-l",children:e.jsxs(C.List,{className:"grid w-full grid-cols-3",children:[e.jsx(C.Trigger,{status:j.detail,value:"detail",children:l("priceLists.create.tabs.details")}),e.jsx(C.Trigger,{status:j.product,value:"product",children:l("priceLists.create.tabs.products")}),e.jsx(C.Trigger,{status:j.price,value:"price",children:l("priceLists.create.tabs.prices")})]})})})}),e.jsxs(N.Body,{className:"size-full overflow-hidden",children:[e.jsx(C.Content,{className:"size-full overflow-y-auto",value:"detail",children:e.jsx(Ne,{form:c})}),e.jsx(C.Content,{className:"size-full overflow-y-auto",value:"product",children:e.jsx(Re,{form:c})}),e.jsx(C.Content,{className:"size-full overflow-hidden",value:"price",children:e.jsx(Fe,{form:c,regions:a,currencies:s,pricePreferences:o})})]}),e.jsx(N.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(N.Close,{asChild:!0,children:e.jsx(D,{variant:"secondary",size:"small",children:l("actions.cancel")})}),e.jsx(ze,{tab:n,next:k,isLoading:v})]})})]})})})},ze=({tab:a,next:s,isLoading:o})=>{const{t:n}=A();return a==="price"?e.jsx(D,{type:"submit",variant:"primary",size:"small",isLoading:o,children:n("actions.save")},"submit-button"):e.jsx(D,{type:"button",variant:"primary",size:"small",onClick:()=>s(a),children:n("actions.continue")},"next-button")},ks=()=>{const{isReady:a,regions:s,currencies:o,pricePreferences:n}=re();return e.jsx(N,{children:a&&e.jsx(Ae,{regions:s,currencies:o,pricePreferences:n})})};export{ks as Component};
