import{u as b}from"./chunk-XWO5BP42-DFUhNHVV.js";import{a as g,j as t,b as m,dO as j,k as C,H as h,T,L as y,B as v,r as P,dP as k,A as w}from"./index-Br7KcgVZ.js";import{u as S,_ as A}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import{u as D}from"./chunk-5R4UGQUP-BQClAcK-.js";import{u as _}from"./chunk-IRV425DP-DVPUpwMo.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{S as E}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{P as z}from"./pencil-square-DvX6HK1G.js";import{T as L}from"./trash-CF90J7Pj.js";import{u as H}from"./use-prompt-BJQZ-chh.js";import{C as B}from"./container-DT4nbkLO.js";import{c as I}from"./index-CTi5Aiew.js";import"./chunk-MSDRGCRR-B49IUHK3.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./chunk-C76H5USB-snx4tQYu.js";import"./chunk-W7625H47-BkG1IMls.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./format-Bc3Z-myT.js";import"./_isIndex-69RBt1x5.js";import"./x-mark-mini-7wDt4qdT.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";import"./prompt-BFK30w09.js";var N=({collection:e})=>{const{t:o}=m(),r=H(),{mutateAsync:s}=k(e.id),i=async()=>{await r({title:o("general.areYouSure"),description:o("collections.deleteWarning",{title:e.title}),verificationText:e.title,verificationInstruction:o("general.typeToConfirm"),confirmText:o("actions.delete"),cancelText:o("actions.cancel")})&&await s()};return t.jsx(w,{groups:[{actions:[{label:o("actions.edit"),to:`/collections/${e.id}/edit`,icon:t.jsx(z,{})}]},{actions:[{label:o("actions.delete"),onClick:i,icon:t.jsx(L,{}),disabled:!e.id}]}]})},l=20,R=()=>{const{t:e}=m(),{searchParams:o,raw:r}=D({pageSize:l}),{collections:s,count:i,isError:n,error:p,isLoading:d}=j({...o,fields:"+products.id"},{placeholderData:C}),u=_(),c=q(),{table:f}=S({data:s??[],columns:c,count:i,enablePagination:!0,getRowId:(a,x)=>a.id??`${x}`,pageSize:l});if(n)throw p;return t.jsxs(B,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(h,{children:e("collections.domain")}),t.jsx(T,{className:"text-ui-fg-subtle",size:"small",children:e("collections.subtitle")})]}),t.jsx(y,{to:"/collections/create",children:t.jsx(v,{size:"small",variant:"secondary",children:e("actions.create")})})]}),t.jsx(A,{table:f,columns:c,pageSize:l,count:i,filters:u,orderBy:[{key:"title",label:e("fields.title")},{key:"handle",label:e("fields.handle")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],search:!0,navigateTo:a=>`/collections/${a.original.id}`,queryObject:r,isLoading:d})]})},$=I(),q=()=>{const e=b();return P.useMemo(()=>[...e,$.display({id:"actions",cell:({row:o})=>t.jsx(N,{collection:o.original})})],[e])},Pe=()=>{const{getWidgets:e}=g();return t.jsx(E,{widgets:{after:e("product_collection.list.after"),before:e("product_collection.list.before")},children:t.jsx(R,{})})};export{Pe as Component};
