import{u as f,a as b,b as g}from"./chunk-EL4SSAMX-Bv-w5J4u.js";import{a as _,j as e,b as y,aR as T,H as j,k as x}from"./index-Br7KcgVZ.js";import{u as E,_ as h}from"./chunk-GIYLQ7GZ-DxufMlpi.js";import"./lodash-Cir5W1CW.js";import"./chunk-RGGFF4GO-BmdmKppo.js";import"./chunk-BNLHRJ2A-B6UFSb8F.js";import"./chunk-KHOKHZC6-CP-tyRv6.js";import{S as v}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{C as O}from"./container-DT4nbkLO.js";import"./chunk-C76H5USB-snx4tQYu.js";import"./chunk-B4FQDBC3-BZI8PJ_J.js";import"./chunk-P3UUX2T6-CLQSpNsH.js";import"./format-Bc3Z-myT.js";import"./chunk-LHJ6JQGA-p_avYaJd.js";import"./chunk-FSMQADBD-DQ6u7KYm.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-MUXBF6QF-CTl6bsBs.js";import"./chunk-ADOCJB6L-DpbH65mi.js";import"./react-country-flag.esm-CGqOfBaS.js";import"./index-CTi5Aiew.js";import"./chunk-YEDAFXMB-DMaLwnzJ.js";import"./chunk-AOFGTNG6-BfTCSYr4.js";import"./table-Oe8J9KZe.js";import"./chunk-WX2SMNCD-B8Y84W59.js";import"./plus-mini-Bys5jE3c.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./chunk-EPATMX2O-Fnr0vyLv.js";import"./_isIndex-69RBt1x5.js";import"./x-mark-mini-7wDt4qdT.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";var D=["id","status","created_at","email","display_id","payment_status","fulfillment_status","total","currency_code"],S=["*customer","*sales_channel"],L=`${D.join(",")},${S.join(",")}`,t=20,A=()=>{const{t:r}=y(),{searchParams:i,raw:o}=f({pageSize:t}),{orders:m,count:a,isError:p,error:d,isLoading:l}=T({fields:L,...i},{placeholderData:x}),n=b(),s=g({}),{table:u}=E({data:m??[],columns:s,enablePagination:!0,count:a,pageSize:t});if(p)throw d;return e.jsxs(O,{className:"divide-y p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(j,{children:r("orders.domain")})}),e.jsx(h,{columns:s,table:u,pagination:!0,navigateTo:c=>`/orders/${c.original.id}`,filters:n,count:a,search:!0,isLoading:l,pageSize:t,orderBy:[{key:"display_id",label:r("orders.fields.displayId")},{key:"created_at",label:r("fields.createdAt")},{key:"updated_at",label:r("fields.updatedAt")}],queryObject:o,noRecords:{message:r("orders.list.noRecordsMessage")}})]})},ur=()=>{const{getWidgets:r}=_();return e.jsx(v,{widgets:{after:r("order.list.after"),before:r("order.list.before")},hasOutlet:!1,children:e.jsx(A,{})})};export{ur as Component};
