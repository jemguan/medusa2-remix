import{a5 as m,R as j,b as h,fe as f,j as e,H as y,a8 as v,a9 as g,fg as T,t as x,w as o,x as b,B as p}from"./index-Br7KcgVZ.js";import{K as P}from"./chunk-6HTZNHPT-DwdXlY_A.js";import{b as r,u as E}from"./chunk-6DAFMWMA-CJYvS4oG.js";import"./prompt-BFK30w09.js";var F=m.object({value:m.string().min(1)}),w=({productType:t})=>{const{t:s}=h(),{handleSuccess:n}=E(),a=v({defaultValues:{value:t.value},resolver:g(F)}),{mutateAsync:l,isPending:c}=T(t.id),i=a.handleSubmit(async d=>{await l({value:d.value},{onSuccess:({product_type:u})=>{x.success(s("productTypes.edit.successToast",{value:u.value})),n()},onError:u=>{x.error(u.message)}})});return e.jsx(r.Form,{form:a,children:e.jsxs(P,{onSubmit:i,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(r.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsx(o.Field,{control:a.control,name:"value",render:({field:d})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("productTypes.fields.value")}),e.jsx(o.Control,{children:e.jsx(b,{...d})}),e.jsx(o.ErrorMessage,{})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:c,children:s("actions.save")})]})})]})})},B=()=>{const{id:t}=j(),{t:s}=h(),{product_type:n,isPending:a,isError:l,error:c}=f(t),i=!a&&!!n;if(l)throw c;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(y,{children:s("productTypes.edit.header")})}),i&&e.jsx(w,{productType:n})]})};export{B as Component};
