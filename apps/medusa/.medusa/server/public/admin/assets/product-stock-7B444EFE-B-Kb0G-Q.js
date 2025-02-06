import{D as re}from"./chunk-4OAB6CQA-C0O8DIqd.js";import{r as d,aw as ae,a5 as m,b as C,d as oe,j as e,at as le,ax as ce,ay as de,az as I,s as B,a8 as ue,a9 as me,aA as fe,t as A,B as W,aB as ve,V as he,ab as pe}from"./index-Br7KcgVZ.js";import{b as ye,D as xe,d as y,u as je,a as _e}from"./chunk-2T6UWGTP-FG_W_o8A.js";import{P as be}from"./chunk-AM2BU2RH-Jz_rw4zs.js";import{c as Q}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as ge}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{R as p,u as ke}from"./chunk-6DAFMWMA-CJYvS4oG.js";import{u as Se}from"./use-prompt-BJQZ-chh.js";import"./index.esm-Dx8Cmbzx.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-69RBt1x5.js";import"./index-CTi5Aiew.js";import"./checkbox-CuKUmx-V.js";import"./prompt-BFK30w09.js";var we=Object.defineProperty,P=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Z=(t,n,s)=>n in t?we(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Pe=(t,n)=>{for(var s in n||(n={}))J.call(n,s)&&Z(t,s,n[s]);if(P)for(var s of P(n))X.call(n,s)&&Z(t,s,n[s]);return t},Ne=(t,n)=>{var s={};for(var r in t)J.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&P)for(var r of P(t))n.indexOf(r)<0&&X.call(t,r)&&(s[r]=t[r]);return s};const ee=d.forwardRef((t,n)=>{var s=t,{color:r="currentColor"}=s,a=Ne(s,["color"]);return d.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:n},a),d.createElement("g",{stroke:r,strokeWidth:1.5,clipPath:"url(#a)"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6.829 6.784.037-.018a.671.671 0 0 1 .95.763l-.633 2.537a.67.67 0 0 0 .951.763l.037-.018M7.5 4.1h.007v.007H7.5z"}),d.createElement("circle",{cx:7.5,cy:7.5,r:6.36})),d.createElement("defs",null,d.createElement("clipPath",{id:"a"},d.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});ee.displayName="InformationCircle";async function Ie(t,n){let r=0,a=0,i=[];do{const{variants:c,count:u}=await B.admin.product.listVariants(t,{id:n,offset:r,limit:20,fields:"id,title,sku,inventory_items,inventory_items.*,inventory_items.inventory,inventory_items.inventory.id,inventory_items.inventory.title,inventory_items.inventory.sku,*inventory_items.inventory.location_levels,product.thumbnail"});i=[...i,...c],a=u,r+=20}while(i.length<a);const{stock_locations:o}=await B.admin.stockLocation.list({limit:9999,fields:"id,name"});return{variants:i,locations:o}}var it=async({params:t,request:n})=>{var o;const s=t.id,a=((o=new URLSearchParams(n.url).get(be))==null?void 0:o.split(","))||void 0,i=Ie(s,a);return ae({data:i})},De=({duplicateOf:t,children:n})=>{const{watchedValue:s}=je({duplicateOf:t});return e.jsx("div",{className:"bg-ui-bg-base txt-compact-small text-ui-fg-subtle flex size-full cursor-not-allowed items-center justify-between overflow-hidden px-4 py-2.5 outline-none",children:typeof n=="function"?n({value:s}):n})};function w(t){return t.id.startsWith("variant_")}function Ce(t){return t.inventory_items&&t.inventory_items.length>0}function Ee(t){const n={},s={};return t.forEach(r=>{const a=r.inventory_items;a&&a.forEach(i=>{const o=n[i.inventory_item_id];if(o){s[i.inventory_item_id]={id:o.id,title:o.title||"",sku:o.sku||""};return}n[i.inventory_item_id]=r})}),s}var D=_e(),Te=(t=[],n={})=>{const{t:s}=C(),r=d.useCallback(a=>{const i=n[a.inventory_item_id],o=!!i&&i.id!==a.variant_id;return o?{isDisabled:o,item:i}:{isDisabled:!1,item:void 0}},[n]);return d.useMemo(()=>[D.column({id:"title",name:"Title",header:"Title",cell:a=>{var u,f,v,l;const i=a.row.original;if(w(i))return e.jsx(y,{context:a,children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(ve,{size:"small",src:(u=i.product)==null?void 0:u.thumbnail}),e.jsx("span",{children:i.title||"-"})]})});const{isDisabled:o,item:c}=r(i);return o?e.jsx(y,{context:a,color:"normal",children:e.jsxs("div",{className:"flex size-full items-center justify-between gap-x-2",children:[e.jsx("span",{title:((f=i.inventory)==null?void 0:f.title)||void 0,className:"text-ui-fg-disabled",children:((v=i.inventory)==null?void 0:v.title)||"-"}),e.jsx(he,{content:c.sku?s("products.stock.tooltips.alreadyManagedWithSku",{title:c.title,sku:c.sku}):s("products.stock.tooltips.alreadyManaged",{title:c.title}),children:e.jsx(ee,{})})]})}):e.jsx(y,{context:a,color:"normal",children:((l=i.inventory)==null?void 0:l.title)||"-"})},disableHiding:!0}),D.column({id:"sku",name:"SKU",header:"SKU",cell:a=>{var c,u;const i=a.row.original;if(w(i))return e.jsx(y,{context:a,children:i.sku||"-"});const{isDisabled:o}=r(i);return o?e.jsx(y,{context:a,color:"normal",children:e.jsx("span",{className:"text-ui-fg-disabled",children:((c=i.inventory)==null?void 0:c.sku)||"-"})}):e.jsx(y,{context:a,color:"normal",children:((u=i.inventory)==null?void 0:u.sku)||"-"})},disableHiding:!0}),...t.map(a=>D.column({id:`location_${a.id}`,name:a.name,header:a.name,field:i=>{const o=i.row.original;if(w(o))return null;const{isDisabled:c}=r(o);return c?null:`variants.${o.variant_id}.inventory_items.${o.inventory_item_id}.locations.${a.id}`},type:"togglable-number",cell:i=>{const o=i.row.original;if(w(o))return e.jsx(y,{context:i});const{isDisabled:c,item:u}=r(o);return c?e.jsx(De,{duplicateOf:`variants.${u.id}.inventory_items.${o.inventory_item_id}.locations.${a.id}`,children:({value:f})=>{const{checked:v,quantity:l}=f;return e.jsxs("div",{className:"flex size-full items-center gap-x-2",children:[e.jsx(pe,{className:"shrink-0 cursor-not-allowed",tabIndex:-1,size:"small",checked:v,disabled:!0}),e.jsx("span",{className:"text-ui-fg-disabled flex size-full items-center justify-end",children:l})]})}}):e.jsx(re,{context:i,disabledToggleTooltip:s("inventory.stock.disabledToggleTooltip"),placeholder:s("inventory.stock.placeholder")})}}))],[t,r,s])},Oe=m.object({id:m.string().optional(),quantity:m.union([m.number(),m.string()]),checked:m.boolean(),disabledToggle:m.boolean()}),ze=m.record(Oe),Re=m.object({locations:ze}),qe=m.object({inventory_items:m.record(Re)}),Le=m.object({variants:m.record(qe)}),Ve=({variants:t,locations:n,onLoaded:s})=>{const{t:r}=C(),{handleSuccess:a,setCloseOnEscape:i}=ke(),o=Se();d.useEffect(()=>{s()},[s]);const[c,u]=d.useState(!1),f=ue({defaultValues:Y(t,n),resolver:me(Le)}),v=d.useRef(Y(t,n)),l=d.useMemo(()=>Ee(t),[t]),_=Te(n,l),{mutateAsync:b,isPending:g}=fe(),te=f.handleSubmit(async N=>{var E,T,O,z,R,q,L,V,H,M,K,$,F,G;const x={create:[],update:[],delete:[],force:!0};for(const[j,ie]of Object.entries(N.variants))for(const[k,se]of Object.entries(ie.inventory_items))for(const[S,h]of Object.entries(se.locations)){if(h.id)if(((L=(q=(R=(z=(O=(T=(E=v.current)==null?void 0:E.variants)==null?void 0:T[j])==null?void 0:O.inventory_items)==null?void 0:z[k])==null?void 0:R.locations)==null?void 0:q[S])==null?void 0:L.checked)&&!h.checked)x.delete.push(h.id);else{const U=h.quantity!==""?Q(h.quantity):0,ne=(G=(F=($=(K=(M=(H=(V=v.current)==null?void 0:V.variants)==null?void 0:H[j])==null?void 0:M.inventory_items)==null?void 0:K[k])==null?void 0:$.locations)==null?void 0:F[S])==null?void 0:G.quantity;U!==ne&&x.update.push({inventory_item_id:k,location_id:S,stocked_quantity:U})}!h.id&&h.quantity!==""&&x.create.push({inventory_item_id:k,location_id:S,stocked_quantity:Q(h.quantity)})}if(x.delete.length>0){u(!0);const j=await o({title:r("general.areYouSure"),description:r("inventory.stock.disablePrompt",{count:x.delete.length}),confirmText:r("actions.continue"),cancelText:r("actions.cancel"),variant:"confirmation"});if(u(!1),!j)return}await b(x,{onSuccess:()=>{A.success(r("inventory.stock.successToast")),a()},onError:j=>{A.error(j.message)}})});return e.jsx(p.Form,{form:f,children:e.jsxs(ge,{onSubmit:te,className:"flex h-full flex-col",children:[e.jsx(p.Header,{}),e.jsx(p.Body,{className:"flex-1",children:e.jsx(xe,{state:f,columns:_,data:t,getSubRows:He,onEditingChange:N=>i(!N),disableInteractions:g||c,multiColumnSelection:!0})}),e.jsx(p.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-2",children:[e.jsx(p.Close,{asChild:!0,children:e.jsx(W,{variant:"secondary",size:"small",type:"button",children:r("actions.cancel")})}),e.jsx(W,{type:"submit",size:"small",isLoading:g,children:r("actions.save")})]})})]})})};function He(t){if(Ce(t))return t.inventory_items}function Y(t,n){return{variants:t.reduce((s,r)=>{var i;const a=(i=r.inventory_items)==null?void 0:i.reduce((o,c)=>{const u=n.reduce((f,v)=>{var _,b;const l=(b=(_=c.inventory)==null?void 0:_.location_levels)==null?void 0:b.find(g=>g.location_id===v.id);return f[v.id]={id:l==null?void 0:l.id,quantity:(l==null?void 0:l.stocked_quantity)!==void 0?l==null?void 0:l.stocked_quantity:"",checked:!!l,disabledToggle:((l==null?void 0:l.incoming_quantity)||0)>0||((l==null?void 0:l.reserved_quantity)||0)>0},f},{});return o[c.inventory_item_id]={locations:u},o},{});return s[r.id]={inventory_items:a||{}},s},{})}}var st=()=>{const{t}=C(),n=oe(),[s,r]=d.useState(!1),a=d.useRef();d.useEffect(()=>(a.current=setTimeout(()=>{r(!0)},200),()=>{a.current&&clearTimeout(a.current)}),[]);const i=()=>{a.current&&clearTimeout(a.current),r(!1)};return e.jsxs("div",{children:[e.jsx("div",{className:"fixed inset-x-0 top-0 z-50 h-1",children:e.jsx(le,{children:s?e.jsx(ce,{duration:5}):null})}),e.jsxs(p,{children:[e.jsx(p.Title,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:t("products.stock.heading")})}),e.jsx(p.Description,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:t("products.stock.description")})}),e.jsx(d.Suspense,{fallback:e.jsx(Me,{}),children:e.jsx(de,{resolve:n.data,children:o=>e.jsx(Ve,{variants:o.variants,locations:o.locations,onLoaded:i})})})]})]})},Me=()=>e.jsx("div",{className:"relative flex size-full flex-col items-center justify-center divide-y",children:e.jsxs("div",{className:"flex size-full flex-col divide-y",children:[e.jsx("div",{className:"px-4 py-2",children:e.jsx(I,{className:"h-7 w-7"})}),e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsx(ye,{columns:Array.from({length:10})})}),e.jsxs("div",{className:"bg-ui-bg-base flex items-center justify-end gap-x-2 p-4",children:[e.jsx(I,{className:"h-7 w-[59px]"}),e.jsx(I,{className:"h-7 w-[46px]"})]})]})});export{st as Component,it as loader};
