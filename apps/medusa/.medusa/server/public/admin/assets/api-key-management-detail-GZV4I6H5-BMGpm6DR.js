import{b as E,a as L,p as S}from"./chunk-G22WWLPG-C9g-VuwI.js";import{U as q}from"./chunk-YL5TLRXX-CQr3nyeS.js";import{u as F,a as I,b as O}from"./chunk-VELNOPU6-E0AdclGe.js";import{d as Y,R as H,a as Q,fn as _,j as e,dS as U,q as J,b as j,u as G,fi as W,fj as X,H as N,A as b,T as n,Y as k,dg as $,az as w,r as M,J as Z,fo as P,W as V,fp as ee,s as se,t as l,k as te}from"./index-Br7KcgVZ.js";import{u as ae,_ as ie}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{S as ne}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{u as re}from"./chunk-EPATMX2O-Fnr0vyLv.js";import{T as z}from"./trash-CF90J7Pj.js";import{X as le}from"./x-circle-Ckg2vNM4.js";import{P as D}from"./pencil-square-DvX6HK1G.js";import{u as v}from"./use-prompt-BJQZ-chh.js";import{C as R}from"./container-DT4nbkLO.js";import{S as oe}from"./status-badge-PaBe6mve.js";import{C as ce}from"./copy-BfD6EAUA.js";import{C}from"./checkbox-CuKUmx-V.js";import{c as de}from"./index-CTi5Aiew.js";import"./chunk-GA34GXNI-XY3ahu3p.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./chunk-MSDRGCRR-B49IUHK3.js";import"./chunk-ADOCJB6L-DpbH65mi.js";import"./chunk-C76H5USB-snx4tQYu.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./_isIndex-69RBt1x5.js";import"./x-mark-mini-7wDt4qdT.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";import"./format-Bc3Z-myT.js";import"./prompt-BFK30w09.js";var me=({apiKey:s})=>{const{t}=j(),a=G(),i=v(),{getFullDate:r}=re(),{mutateAsync:o}=W(s.id),{mutateAsync:m}=X(s.id),c=async()=>{await i({title:t("general.areYouSure"),description:t("apiKeyManagement.delete.warning",{title:s.title}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await m(void 0,{onSuccess:()=>{l.success(t("apiKeyManagement.delete.successToast",{title:s.title})),a("..",{replace:!0})},onError:p=>{l.error(p.message)}})},g=async()=>{await i({title:t("general.areYouSure"),description:t("apiKeyManagement.revoke.warning",{title:s.title}),confirmText:t("apiKeyManagement.actions.revoke"),cancelText:t("actions.cancel")})&&await o(void 0,{onSuccess:()=>{l.success(t("apiKeyManagement.revoke.successToast",{title:s.title}))},onError:p=>{l.error(p.message)}})},x=[{icon:e.jsx(z,{}),label:t("actions.delete"),onClick:c,disabled:!s.revoked_at}];s.revoked_at||x.unshift({icon:e.jsx(le,{}),label:t("apiKeyManagement.actions.revoke"),onClick:g,disabled:!!s.revoked_at});const u=E(s.revoked_at,t),h=L(s.type,t);return e.jsxs(R,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(N,{children:s.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("div",{className:"flex items-center gap-x-2",children:e.jsx(oe,{color:u.color,children:u.label})}),e.jsx(b,{groups:[{actions:[{label:t("actions.edit"),icon:e.jsx(D,{}),to:"edit"}]},{actions:x}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("fields.key")}),s.type==="secret"?e.jsx(k,{size:"2xsmall",children:S(s.redacted)}):e.jsx(ce,{asChild:!0,content:s.token,className:"cursor-pointer",children:e.jsx(k,{size:"2xsmall",className:"text-ui-tag-neutral-text",children:S(s.redacted)})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("fields.type")}),e.jsx(n,{size:"small",leading:"compact",children:h.label})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("apiKeyManagement.fields.lastUsedAtLabel")}),e.jsx(n,{size:"small",leading:"compact",children:s.last_used_at?r({date:s.last_used_at,includeTime:!0}):"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("apiKeyManagement.fields.createdByLabel")}),e.jsx(A,{userId:s.created_by})]}),s.revoked_at&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("apiKeyManagement.fields.revokedAtLabel")}),e.jsx(n,{size:"small",leading:"compact",children:r({date:s.revoked_at,includeTime:!0})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:t("apiKeyManagement.fields.revokedByLabel")}),e.jsx(A,{userId:s.revoked_by})]})]})]})},A=({userId:s})=>{const{user:t,isLoading:a,isError:i,error:r}=$(s,void 0,{enabled:!!s});if(!s)return e.jsx(n,{size:"small",className:"text-ui-fg-subtle",children:"-"});if(i)throw r;return a?e.jsxs("div",{className:"grid grid-cols-[20px_1fr]",children:[e.jsx(w,{className:"h-5 w-5 rounded-full"}),e.jsx(w,{className:"w-full max-w-[220px]"})]}):t?e.jsx(q,{...t}):e.jsx(n,{size:"small",className:"text-ui-fg-subtle",children:"-"})},f=10,ue=({apiKey:s})=>{const[t,a]=M.useState({}),{t:i}=j(),r=v(),{raw:o,searchParams:m}=F({pageSize:f}),{sales_channels:c,count:g,isLoading:x}=Z({...m,publishable_key_id:s.id},{placeholderData:te}),u=ge(),h=I(),{table:y}=ae({data:c??[],columns:u,count:g,enablePagination:!0,enableRowSelection:!0,getRowId:d=>d.id,pageSize:f,rowSelection:{state:t,updater:a},meta:{apiKey:s.id}}),{mutateAsync:p}=P(s.id),K=async()=>{const d=Object.keys(t);await r({title:i("general.areYouSure"),description:i("apiKeyManagement.removeSalesChannel.warningBatch",{count:d.length}),confirmText:i("actions.continue"),cancelText:i("actions.cancel")})&&await p(d,{onSuccess:()=>{l.success(i("apiKeyManagement.removeSalesChannel.successToastBatch",{count:d.length})),a({})},onError:B=>{l.error(B.message)}})};return e.jsxs(R,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(N,{level:"h2",children:i("salesChannels.domain")}),e.jsx(b,{groups:[{actions:[{icon:e.jsx(V,{}),label:i("actions.add"),to:"sales-channels"}]}]})]}),e.jsx(ie,{table:y,columns:u,filters:h,count:g,isLoading:x,queryObject:o,navigateTo:d=>`/settings/sales-channels/${d.id}`,orderBy:[{key:"name",label:i("fields.name")},{key:"created_at",label:i("fields.createdAt")},{key:"updated_at",label:i("fields.updatedAt")}],commands:[{action:K,label:i("actions.remove"),shortcut:"r"}],pageSize:f,pagination:!0,search:!0,noRecords:{message:i("apiKeyManagement.salesChannels.list.noRecordsMessage")}})]})},pe=({salesChannel:s,apiKey:t})=>{const{t:a}=j(),i=v(),{mutateAsync:r}=P(t),o=async()=>{await i({title:a("general.areYouSure"),description:a("apiKeyManagement.removeSalesChannel.warning",{name:s.name}),confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await r([s.id],{onSuccess:()=>{l.success(a("apiKeyManagement.removeSalesChannel.successToast",{count:1}))},onError:c=>{l.error(c.message)}})};return e.jsx(b,{groups:[{actions:[{icon:e.jsx(D,{}),label:a("actions.edit"),to:`/settings/sales-channels/${s.id}/edit`}]},{actions:[{icon:e.jsx(z,{}),label:a("actions.delete"),onClick:o}]}]})},T=de(),ge=()=>{const s=O();return M.useMemo(()=>[T.display({id:"select",header:({table:t})=>e.jsx(C,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:a=>t.toggleAllPageRowsSelected(!!a)}),cell:({row:t})=>e.jsx(C,{checked:t.getIsSelected(),onCheckedChange:a=>t.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...s,T.display({id:"actions",cell:({row:t,table:a})=>{const{apiKey:i}=a.options.meta;return e.jsx(pe,{salesChannel:t.original,apiKey:i})}})],[s])},ns=()=>{const s=Y(),{id:t}=H(),{getWidgets:a}=Q(),{api_key:i,isLoading:r,isError:o,error:m}=_(t,{initialData:s});if(r||!i)return e.jsx(U,{showJSON:!0,sections:1});const c=(i==null?void 0:i.type)==="publishable";if(o)throw m;return e.jsxs(ne,{hasOutlet:!0,showJSON:!0,widgets:{before:a("api_key.details.before"),after:a("api_key.details.after")},data:i,children:[e.jsx(me,{apiKey:i}),c&&e.jsx(ue,{apiKey:i})]})},rs=s=>{const{id:t}=s.params||{},{api_key:a}=_(t,{initialData:s.data,enabled:!!t});return a?e.jsx("span",{children:a.title}):null},xe=s=>({queryKey:ee.detail(s),queryFn:async()=>se.admin.apiKey.retrieve(s)}),ls=async({params:s})=>{const t=s.id,a=xe(t);return J.ensureQueryData(a)};export{rs as Breadcrumb,ns as Component,ls as loader};
