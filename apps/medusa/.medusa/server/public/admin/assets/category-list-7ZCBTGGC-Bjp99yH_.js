import{u as z}from"./chunk-HBXEJRUU-C-hkw4Uj.js";import{g as P,a as N,b as w}from"./chunk-54IEHX46-DWMq7yL7.js";import{T as c,a as E}from"./chunk-MSDRGCRR-B49IUHK3.js";import{S as x}from"./chunk-ADOCJB6L-DpbH65mi.js";import{a as S,j as e,b as p,ag as D,k as H,H as I,T as u,B as h,L as f,r as v,m as j,I as q,aj as A,A as R}from"./index-Br7KcgVZ.js";import{u as k,_ as L}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{S as M}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{u as B}from"./chunk-C76H5USB-snx4tQYu.js";import{P as O}from"./pencil-square-DvX6HK1G.js";import{T as Q}from"./trash-CF90J7Pj.js";import{C as $}from"./container-DT4nbkLO.js";import{c as b}from"./index-CTi5Aiew.js";import"./use-prompt-BJQZ-chh.js";import"./prompt-BFK30w09.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./format-Bc3Z-myT.js";import"./_isIndex-69RBt1x5.js";import"./x-mark-mini-7wDt4qdT.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";var d=b(),G=()=>{const{t}=p();return v.useMemo(()=>[d.accessor("name",{header:()=>e.jsx(c,{text:t("fields.name")}),cell:({getValue:r,row:a})=>{const i=a.getToggleExpandedHandler();if(a.original.parent_category!==void 0){const s=P(a.original);return e.jsx("div",{className:"flex size-full items-center gap-1 overflow-hidden",children:s.map((o,l)=>e.jsxs("div",{className:j("overflow-hidden",{"text-ui-fg-muted flex items-center gap-x-1":l!==s.length-1}),children:[e.jsx(u,{size:"small",leading:"compact",className:"truncate",children:o.name}),l!==s.length-1&&e.jsx(u,{size:"small",leading:"compact",children:"/"})]},o.id))})}return e.jsxs("div",{className:"flex size-full items-center gap-x-3 overflow-hidden",children:[e.jsx("div",{className:"flex size-7 items-center justify-center",children:a.getCanExpand()?e.jsx(q,{type:"button",onClick:s=>{s.stopPropagation(),s.preventDefault(),i()},size:"small",variant:"transparent",className:"text-ui-fg-subtle",children:e.jsx(A,{className:j({"rotate-90 transition-transform will-change-transform":a.getIsExpanded()})})}):null}),e.jsx("span",{className:"truncate",children:r()})]})}}),d.accessor("handle",{header:()=>e.jsx(c,{text:t("fields.handle")}),cell:({getValue:r})=>e.jsx(E,{text:`/${r()}`})}),d.accessor("is_active",{header:()=>e.jsx(c,{text:t("fields.status")}),cell:({getValue:r})=>{const{color:a,label:i}=N(r(),t);return e.jsx(x,{color:a,children:i})}}),d.accessor("is_internal",{header:()=>e.jsx(c,{text:t("categories.fields.visibility.label")}),cell:({getValue:r})=>{const{color:a,label:i}=w(r(),t);return e.jsx(x,{color:a,children:i})}})],[t])},W=({pageSize:t=20,prefix:r})=>{const a=B(["q","offset","order"],r),i={q:a.q,limit:t,offset:a.offset?Number(a.offset):0,order:a.order};return{raw:a,searchParams:i}},m=20,Z=()=>{const{t}=p(),{raw:r,searchParams:a}=W({pageSize:m}),i=r.q?{include_ancestors_tree:!0,fields:"id,name,handle,is_active,is_internal,parent_category",...a}:{include_descendants_tree:!0,parent_category_id:"null",fields:"id,name,category_children,handle,is_internal,is_active",...a},{product_categories:s,count:o,isLoading:l,isError:y,error:C}=D({...i},{placeholderData:H}),g=K(),{table:_}=k({data:s||[],columns:g,count:o,getRowId:n=>n.id,getSubRows:n=>n.category_children,enableExpandableRows:!0,pageSize:m}),T=!!s&&s.length>0;if(y)throw C;return e.jsxs($,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(I,{children:t("categories.domain")}),e.jsx(u,{className:"text-ui-fg-subtle",size:"small",children:t("categories.subtitle")})]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[T&&e.jsx(h,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(f,{to:"organize",children:t("categories.organize.action")})}),e.jsx(h,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(f,{to:"create",children:t("actions.create")})})]})]}),e.jsx(L,{table:_,columns:g,count:o,pageSize:m,isLoading:l,navigateTo:n=>n.id,queryObject:r,search:!0,pagination:!0})]})},F=({category:t})=>{const{t:r}=p(),a=z(t);return e.jsx(R,{groups:[{actions:[{label:r("actions.edit"),icon:e.jsx(O,{}),to:`${t.id}/edit`}]},{actions:[{label:r("actions.delete"),icon:e.jsx(Q,{}),onClick:a}]}]})},J=b(),K=()=>{const t=G();return v.useMemo(()=>[...t,J.display({id:"actions",cell:({row:r})=>e.jsx(F,{category:r.original})})],[t])},He=()=>{const{getWidgets:t}=S();return e.jsx(M,{widgets:{after:t("product_category.list.after"),before:t("product_category.list.before")},hasOutlet:!0,children:e.jsx(Z,{})})};export{He as Component};
