import{D as h,u as D,c as A}from"./chunk-43PRAFWA-ggMuEKcf.js";import{S as L}from"./chunk-2RQLKDBF-ByAB-Zu3.js";import{a as v,j as i,eC as y,b as c,u as S,r as d,k as x}from"./index-Br7KcgVZ.js";import{u as C}from"./chunk-C76H5USB-snx4tQYu.js";import{u as _}from"./chunk-EPATMX2O-Fnr0vyLv.js";import{P as j}from"./pencil-square-DvX6HK1G.js";import{C as P}from"./container-DT4nbkLO.js";import"./checkbox-CuKUmx-V.js";import"./index-CTi5Aiew.js";import"./command-bar-D4WdMclT.js";import"./index-DTt8xJH5.js";import"./table-Oe8J9KZe.js";import"./arrow-up-mini-Dqi2bbQJ.js";import"./date-picker-DwI7Qf6K.js";import"./clsx-B-dksMZM.js";import"./popover-ntoiPHLH.js";import"./x-mark-mini-7wDt4qdT.js";import"./triangle-left-mini-BCF8TRqK.js";import"./Trans-D_-MLUQW.js";import"./check-C_q2Aw8o.js";import"./format-Bc3Z-myT.js";var n=20,w=()=>{const{q:e,order:o,offset:r}=C(["q","order","offset"]),{users:t,count:m,isPending:u,isError:p,error:f}=y({q:e,order:o,offset:r?parseInt(r):0,limit:n},{placeholderData:x}),g=E(),b=T(),{t:s}=c();if(p)throw f;return i.jsx(P,{className:"divide-y p-0",children:i.jsx(h,{data:t,columns:g,filters:b,getRowId:l=>l.id,rowCount:m,pageSize:n,heading:s("users.domain"),rowHref:l=>`${l.id}`,isLoading:u,action:{label:s("users.invite"),to:"invite"},emptyState:{empty:{heading:s("users.list.empty.heading"),description:s("users.list.empty.description")},filtered:{heading:s("users.list.filtered.heading"),description:s("users.list.filtered.description")}}})})},a=A(),E=()=>{const{t:e}=c(),o=S(),{getFullDate:r}=_();return d.useMemo(()=>[a.accessor("email",{header:e("fields.email"),cell:({row:t})=>t.original.email,enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),a.accessor("first_name",{header:e("fields.firstName"),cell:({row:t})=>t.original.first_name||"-",enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),a.accessor("last_name",{header:e("fields.lastName"),cell:({row:t})=>t.original.last_name||"-",enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),a.accessor("created_at",{header:e("fields.createdAt"),cell:({row:t})=>r({date:t.original.created_at}),enableSorting:!0,sortAscLabel:e("filters.sorting.dateAsc"),sortDescLabel:e("filters.sorting.dateDesc")}),a.accessor("updated_at",{header:e("fields.updatedAt"),cell:({row:t})=>r({date:t.original.updated_at}),enableSorting:!0,sortAscLabel:e("filters.sorting.dateAsc"),sortDescLabel:e("filters.sorting.dateDesc")}),a.action({actions:[{label:e("actions.edit"),icon:i.jsx(j,{}),onClick:t=>{o(`${t.row.original.id}/edit`)}}]})],[e,r,o])},T=()=>{const e=D();return d.useMemo(()=>e,[e])},Y=()=>{const{getWidgets:e}=v();return i.jsx(L,{widgets:{after:e("user.list.after"),before:e("user.list.before")},children:i.jsx(w,{})})};export{Y as Component};
