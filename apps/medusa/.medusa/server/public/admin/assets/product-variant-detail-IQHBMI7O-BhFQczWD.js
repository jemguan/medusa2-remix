import{L as q}from"./chunk-6WKBBTKM-DUqLoGFy.js";import{g as D}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{V as f}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{P as x}from"./chunk-P3UUX2T6-CLQSpNsH.js";import{u as P,_ as T}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import{a7 as _,j as e,q as I,d as V,R as k,a as A,S as B,aC as E,s as z,b as u,u as M,aD as L,H as h,A as v,Y as R,_ as w,r as S,aE as K,B as H}from"./index-Br7KcgVZ.js";import"./lodash-Cir5W1CW.js";import{N as O}from"./chunk-WX2SMNCD-B8Y84W59.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{S as N}from"./chunk-LFLGEXIG-CRH6mmi7.js";import{T as y}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{C}from"./component-BZ-FIySZ.js";import{P as Q}from"./pencil-square-DvX6HK1G.js";import{T as $}from"./trash-CF90J7Pj.js";import{u as F}from"./use-prompt-BJQZ-chh.js";import{C as j}from"./container-DT4nbkLO.js";import{c as G}from"./index-CTi5Aiew.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./plus-mini-Bys5jE3c.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./format-Bc3Z-myT.js";import"./_isIndex-69RBt1x5.js";import"./x-mark-mini-7wDt4qdT.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";import"./prompt-BFK30w09.js";var Me=t=>{const{id:s,variant_id:a}=t.params||{},{variant:i}=_(s,a,{fields:f},{initialData:t.data,enabled:!!s&&!!a});return i?e.jsx("span",{children:i.title}):null},J=(t,s)=>({queryKey:E.detail(s,{fields:f}),queryFn:async()=>z.admin.product.retrieveVariant(t,s,{fields:f})}),Le=async({params:t})=>{const s=t.id,a=t.variant_id,i=J(s,a);return I.ensureQueryData(i)};function W({variant:t}){var c,d;const{t:s}=u(),a=F(),i=M(),r=((c=t.inventory)==null?void 0:c.length)>1,{mutateAsync:o}=L(t.product_id,t.id),l=async()=>{await a({title:s("general.areYouSure"),description:s("products.variant.deleteWarning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await o(void 0,{onSuccess:()=>{i("..",{replace:!0})}})};return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{children:t.title}),r&&e.jsx("span",{className:"text-ui-fg-muted font-normal",children:e.jsx(C,{})})]}),e.jsx("span",{className:"text-ui-fg-subtle txt-small mt-2",children:s("labels.productVariant")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(v,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(Q,{})}]},{actions:[{label:s("actions.delete"),onClick:l,icon:e.jsx($,{})}]}]})})]}),e.jsx(N,{title:s("fields.sku"),value:t.sku}),(d=t.options)==null?void 0:d.map(n=>{var p;return e.jsx(N,{title:(p=n.option)==null?void 0:p.title,value:e.jsx(R,{size:"2xsmall",children:n.value})},n.id)})]})}var Y=({item:t})=>{const{t:s}=u();return e.jsx(v,{groups:[{actions:[{icon:e.jsx(w,{}),label:s("products.variant.inventory.navigateToItem"),to:`/inventory/${t.id}`}]}]})},m=G(),U=()=>{const{t}=u();return S.useMemo(()=>[m.accessor("title",{header:t("fields.title"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(x,{})}}),m.accessor("sku",{header:t("fields.sku"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(x,{})}}),m.accessor("required_quantity",{header:t("fields.requiredQuantity"),cell:({getValue:s})=>{const a=s();return Number.isNaN(a)?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})})}}),m.display({id:"inventory_quantity",header:t("fields.inventory"),cell:({getValue:s,row:{original:a}})=>{var o;if(!((o=a.location_levels)!=null&&o.length))return e.jsx(x,{});let i=0,r=0;return a.location_levels.forEach(l=>{i+=l.available_quantity,r+=1}),e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:t("products.variant.tableItem",{availableCount:i,locationCount:r,count:r})})})}}),m.display({id:"actions",cell:({row:s})=>e.jsx(Y,{item:s.original})})],[t])},b=20;function Z({inventoryItems:t}){const{t:s}=u(),a=U(),{table:i}=P({data:t??[],columns:a,count:t.length,enablePagination:!0,getRowId:o=>o.id,pageSize:b}),r=t.length>1;return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(h,{level:"h2",children:s("fields.inventoryItems")})}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(v,{groups:[{actions:[{label:s(r?"products.variant.inventory.manageKit":"products.variant.inventory.manageItems"),to:"manage-items",icon:r?e.jsx(C,{}):e.jsx(w,{})}]}]})})]}),e.jsx(T,{table:i,columns:a,pageSize:b,count:t.length,navigateTo:o=>`/inventory/${o.id}`})]})}function X(){const{t}=u();return e.jsx(j,{className:"divide-y p-0",children:e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(h,{level:"h2",children:t("fields.inventoryItems")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("products.variant.inventory.notManagedDesc")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(q,{to:"edit",children:t("products.variant.edit.header")})})]})})}function ee({variant:t}){var d;const{t:s}=u(),a=(d=t.prices)==null?void 0:d.filter(n=>!Object.keys(n.rules||{}).length).sort((n,p)=>{var g;return(g=n.currency_code)==null?void 0:g.localeCompare(p.currency_code)}),i=!!(a!=null&&a.length),[r,o]=S.useState(3),l=a==null?void 0:a.slice(0,r),c=()=>{o(r+3)};return e.jsxs(j,{className:"flex flex-col divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(h,{level:"h2",children:s("labels.prices")}),e.jsx(v,{groups:[{actions:[{label:s("actions.edit"),to:`/products/${t.product_id}/variants/${t.id}/prices`,icon:e.jsx(K,{})}]}]})]}),!i&&e.jsx(O,{className:"h-60"}),l==null?void 0:l.map(n=>e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:n.currency_code.toUpperCase()}),e.jsx("span",{children:D(n.amount,n.currency_code)})]},n.id)),i&&e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex items-center justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:s("products.variant.pricesPagination",{total:a.length,current:Math.min(r,a.length)})}),e.jsx(H,{onClick:c,disabled:r>=a.length,className:"-mr-3 text-blue-500",variant:"transparent",children:s("actions.showMore")})]})]})}var Re=()=>{const t=V(),{id:s,variant_id:a}=k(),{variant:i,isLoading:r,isError:o,error:l}=_(s,a,{fields:f},{initialData:t}),{getWidgets:c}=A();if(r||!i)return e.jsx(B,{mainSections:2,sidebarSections:1,showJSON:!0,showMetadata:!0});if(o)throw l;return e.jsxs(y,{data:i,hasOutlet:!0,showJSON:!0,showMetadata:!0,widgets:{after:c("product_variant.details.after"),before:c("product_variant.details.before"),sideAfter:c("product_variant.details.side.after"),sideBefore:c("product_variant.details.side.before")},children:[e.jsxs(y.Main,{children:[e.jsx(W,{variant:i}),i.manage_inventory?e.jsx(Z,{inventoryItems:i.inventory_items.map(d=>({...d.inventory,required_quantity:d.required_quantity,variant:i}))}):e.jsx(X,{})]}),e.jsx(y.Sidebar,{children:e.jsx(ee,{variant:i})})]})};export{Me as Breadcrumb,Re as Component,Le as loader};
