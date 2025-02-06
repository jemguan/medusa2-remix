import{a1 as f,a3 as m,a4 as b,R as C,b as j,h as g,j as e,H as v,a8 as y,a9 as S,eI as w,t as x,w as s,x as E,ab as F,B as h}from"./index-Br7KcgVZ.js";import{K as _}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{b as l,u as T}from"./chunk-6DAFMWMA-CJYvS4oG.js";import{T as H}from"./textarea-dEO33NI7.js";import"./prompt-BFK30w09.js";var I=f({name:m().min(1),description:m().optional(),is_active:b()}),L=({salesChannel:i})=>{const{t:a}=j(),{handleSuccess:t}=T(),r=y({defaultValues:{name:i.name,description:i.description??"",is_active:!i.is_disabled},resolver:S(I)}),{mutateAsync:o,isPending:c}=w(i.id),u=r.handleSubmit(async n=>{await o({name:n.name,description:n.description??void 0,is_disabled:!n.is_active},{onSuccess:()=>{x.success(a("salesChannels.toast.update")),t()},onError:d=>{x.error(d.message)}})});return e.jsx(l.Form,{form:r,children:e.jsxs(_,{onSubmit:u,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(l.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:[e.jsx(s.Field,{control:r.control,name:"name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.name")}),e.jsx(s.Control,{children:e.jsx(E,{...n,size:"small"})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"description",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:a("fields.description")}),e.jsx(s.Control,{children:e.jsx(H,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"is_active",render:({field:{onChange:n,value:d,...p}})=>e.jsxs(s.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s.Label,{children:a("general.enabled")}),e.jsx(s.Control,{children:e.jsx(F,{onCheckedChange:n,checked:d,...p})})]}),e.jsx(s.Hint,{children:a("salesChannels.enabledHint")}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(h,{size:"small",type:"submit",isLoading:c,children:a("actions.save")})]})})]})})},P=()=>{const{id:i}=C(),{t:a}=j(),{sales_channel:t,isPending:r,isError:o,error:c}=g(i);if(o)throw c;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(v,{className:"capitalize",children:a("salesChannels.editSalesChannel")})}),!r&&!!t&&e.jsx(L,{salesChannel:t})]})};export{P as Component};
