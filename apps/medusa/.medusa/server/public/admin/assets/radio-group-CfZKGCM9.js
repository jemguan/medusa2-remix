import{b$ as k,r as e,c2 as N,j as u,c3 as w,c4 as R,c5 as V,d6 as z,d7 as T,c$ as I,d0 as H,ce as U,d1 as W,d2 as X,m as h,z as Y,E as J}from"./index-Br7KcgVZ.js";var x="Radio",[Q,C]=k(x),[Z,ee]=Q(x),G=e.forwardRef((t,r)=>{const{__scopeRadio:o,name:i,checked:a=!1,required:s,disabled:n,value:c="on",onCheck:l,...b}=t,[m,p]=e.useState(null),f=N(r,g=>p(g)),d=e.useRef(!1),v=m?!!m.closest("form"):!0;return u.jsxs(Z,{scope:o,checked:a,disabled:n,children:[u.jsx(w.button,{type:"button",role:"radio","aria-checked":a,"data-state":S(a),"data-disabled":n?"":void 0,disabled:n,value:c,...b,ref:f,onClick:R(t.onClick,g=>{a||l==null||l(),v&&(d.current=g.isPropagationStopped(),d.current||g.stopPropagation())})}),v&&u.jsx(oe,{control:m,bubbles:!d.current,name:i,value:c,checked:a,required:s,disabled:n,style:{transform:"translateX(-100%)"}})]})});G.displayName=x;var j="RadioIndicator",P=e.forwardRef((t,r)=>{const{__scopeRadio:o,forceMount:i,...a}=t,s=ee(j,o);return u.jsx(V,{present:i||s.checked,children:u.jsx(w.span,{"data-state":S(s.checked),"data-disabled":s.disabled?"":void 0,...a,ref:r})})});P.displayName=j;var oe=t=>{const{control:r,checked:o,bubbles:i=!0,...a}=t,s=e.useRef(null),n=z(o),c=T(r);return e.useEffect(()=>{const l=s.current,b=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(b,"checked").set;if(n!==o&&p){const f=new Event("click",{bubbles:i});p.call(l,o),l.dispatchEvent(f)}},[n,o,i]),u.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...a,tabIndex:-1,ref:s,style:{...t.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function S(t){return t?"checked":"unchecked"}var te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],y="RadioGroup",[re,ue]=k(y,[I,C]),_=I(),A=C(),[ae,se]=re(y),D=e.forwardRef((t,r)=>{const{__scopeRadioGroup:o,name:i,defaultValue:a,value:s,required:n=!1,disabled:c=!1,orientation:l,dir:b,loop:m=!0,onValueChange:p,...f}=t,d=_(o),v=H(b),[g,K]=U({prop:s,defaultProp:a,onChange:p});return u.jsx(ae,{scope:o,name:i,required:n,disabled:c,value:g,onValueChange:K,children:u.jsx(W,{asChild:!0,...d,orientation:l,dir:v,loop:m,children:u.jsx(w.div,{role:"radiogroup","aria-required":n,"aria-orientation":l,"data-disabled":c?"":void 0,dir:v,...f,ref:r})})})});D.displayName=y;var O="RadioGroupItem",F=e.forwardRef((t,r)=>{const{__scopeRadioGroup:o,disabled:i,...a}=t,s=se(O,o),n=s.disabled||i,c=_(o),l=A(o),b=e.useRef(null),m=N(r,b),p=s.value===a.value,f=e.useRef(!1);return e.useEffect(()=>{const d=g=>{te.includes(g.key)&&(f.current=!0)},v=()=>f.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",v)}},[]),u.jsx(X,{asChild:!0,...c,focusable:!n,active:p,children:u.jsx(G,{disabled:n,required:s.required,checked:p,...l,...a,name:s.name,ref:m,onCheck:()=>s.onValueChange(a.value),onKeyDown:R(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:R(a.onFocus,()=>{var d;f.current&&((d=b.current)==null||d.click())})})})});F.displayName=O;var ne="RadioGroupIndicator",M=e.forwardRef((t,r)=>{const{__scopeRadioGroup:o,...i}=t,a=A(o);return u.jsx(P,{...a,...i,ref:r})});M.displayName=ne;var ie=D,L=F,de=M;const $=e.forwardRef(({className:t,...r},o)=>e.createElement(ie,{className:h("grid gap-2",t),...r,ref:o}));$.displayName="RadioGroup";const E=e.forwardRef(({className:t,...r},o)=>e.createElement(de,{ref:o,className:h("flex items-center justify-center",t),...r},e.createElement("div",{className:h("bg-ui-bg-base shadow-details-contrast-on-bg-interactive h-1.5 w-1.5 rounded-full")})));E.displayName="RadioGroup.Indicator";const q=e.forwardRef(({className:t,...r},o)=>e.createElement(L,{ref:o,className:h("group relative flex h-5 w-5 items-center justify-center outline-none",t),...r},e.createElement("div",{className:h("shadow-borders-base bg-ui-bg-base transition-fg flex h-[14px] w-[14px] items-center justify-center rounded-full","group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover","group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow","group-focus-visible:!shadow-borders-interactive-with-focus","group-disabled:cursor-not-allowed group-disabled:opacity-50")},e.createElement(E,null))));q.displayName="RadioGroup.Item";const B=e.forwardRef(({className:t,id:r,label:o,description:i,...a},s)=>{const n=e.useId();r||(r=n);const c=`${r}-description`;return e.createElement(L,{ref:s,className:h("shadow-borders-base bg-ui-bg-base focus-visible:shadow-borders-interactive-with-focus transition-fg group flex items-start gap-x-2 rounded-lg p-3 outline-none","hover:enabled:bg-ui-bg-base-hover","data-[state=checked]:shadow-borders-interactive-with-shadow","group-disabled:cursor-not-allowed group-disabled:opacity-50",t),...a,id:r,"aria-describedby":c},e.createElement("div",{className:"flex h-5 w-5 items-center justify-center"},e.createElement("div",{className:h("shadow-borders-base bg-ui-bg-base group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow transition-fg flex h-3.5 w-3.5 items-center justify-center rounded-full","group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover")},e.createElement(E,null))),e.createElement("div",{className:"flex flex-col items-start"},e.createElement(Y,{htmlFor:r,size:"small",weight:"plus",className:"group-disabled:text-ui-fg-disabled cursor-pointer group-disabled:cursor-not-allowed"},o),e.createElement(J,{className:"txt-small text-ui-fg-subtle group-disabled:text-ui-fg-disabled text-left",id:c},i)))});B.displayName="RadioGroup.ChoiceBox";const le=Object.assign($,{Item:q,ChoiceBox:B});export{le as R};
