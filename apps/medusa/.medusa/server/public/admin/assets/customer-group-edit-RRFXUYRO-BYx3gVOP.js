import{a1 as j,a3 as p,R as f,eb as y,b as x,j as s,H as b,a8 as g,a9 as v,ed as C,t as u,w as a,x as w,B as d}from"./index-Br7KcgVZ.js";import{K as E}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{b as r,u as F}from"./chunk-6DAFMWMA-CJYvS4oG.js";import"./prompt-BFK30w09.js";var G=j({name:p().min(1)}),S=({group:t})=>{const{t:e}=x(),{handleSuccess:n}=F(),o=g({defaultValues:{name:t.name||""},resolver:v(G)}),{mutateAsync:i,isPending:l}=C(t.id),h=o.handleSubmit(async c=>{await i(c,{onSuccess:({customer_group:m})=>{u.success(e("customerGroups.edit.successToast",{name:m.name})),n()},onError:m=>{u.error(m.message)}})});return s.jsx(r.Form,{form:o,children:s.jsxs(E,{onSubmit:h,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsx(r.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:s.jsx(a.Field,{control:o.control,name:"name",render:({field:c})=>s.jsxs(a.Item,{children:[s.jsx(a.Label,{children:e("fields.name")}),s.jsx(a.Control,{children:s.jsx(w,{...c,size:"small"})}),s.jsx(a.ErrorMessage,{})]})})}),s.jsx(r.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(r.Close,{asChild:!0,children:s.jsx(d,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(d,{size:"small",type:"submit",isLoading:l,children:e("actions.save")})]})})]})})},H=()=>{const{id:t}=f(),{customer_group:e,isLoading:n,isError:o,error:i}=y(t),{t:l}=x();if(o)throw i;return s.jsxs(r,{children:[s.jsx(r.Header,{children:s.jsx(b,{children:l("customerGroups.edit.header")})}),!n&&e&&s.jsx(S,{group:e})]})};export{H as Component};
