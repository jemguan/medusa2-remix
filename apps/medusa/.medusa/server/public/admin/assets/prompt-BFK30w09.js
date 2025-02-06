import{b$ as Y,cn as f,r as a,j as n,co as V,cp as k,c2 as v,cq as J,cr as K,c4 as Q,cs as U,ct as X,cu as Z,cv as A,cw as ee,cx as te,m as i,H as ae,B as D}from"./index-Br7KcgVZ.js";var y="AlertDialog",[re,Ee]=Y(y,[f]),l=f(),x=e=>{const{__scopeAlertDialog:t,...r}=e,o=l(t);return n.jsx(te,{...o,...r,modal:!0})};x.displayName=y;var oe="AlertDialogTrigger",N=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,s=l(r);return n.jsx(V,{...s,...o,ref:t})});N.displayName=oe;var se="AlertDialogPortal",E=e=>{const{__scopeAlertDialog:t,...r}=e,o=l(t);return n.jsx(ee,{...o,...r})};E.displayName=se;var ne="AlertDialogOverlay",P=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,s=l(r);return n.jsx(k,{...s,...o,ref:t})});P.displayName=ne;var c="AlertDialogContent",[le,ie]=re(c),C=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,children:o,...s}=e,d=l(r),m=a.useRef(null),W=v(t,m),u=a.useRef(null);return n.jsx(J,{contentName:c,titleName:R,docsSlug:"alert-dialog",children:n.jsx(le,{scope:r,cancelRef:u,children:n.jsxs(K,{role:"alertdialog",...d,...s,ref:W,onOpenAutoFocus:Q(s.onOpenAutoFocus,p=>{var g;p.preventDefault(),(g=u.current)==null||g.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault(),children:[n.jsx(U,{children:o}),n.jsx(de,{contentRef:m})]})})})});C.displayName=c;var R="AlertDialogTitle",h=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,s=l(r);return n.jsx(X,{...s,...o,ref:t})});h.displayName=R;var _="AlertDialogDescription",b=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,s=l(r);return n.jsx(Z,{...s,...o,ref:t})});b.displayName=_;var ce="AlertDialogAction",w=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,s=l(r);return n.jsx(A,{...s,...o,ref:t})});w.displayName=ce;var T="AlertDialogCancel",S=a.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...o}=e,{cancelRef:s}=ie(T,r),d=l(r),m=v(t,s);return n.jsx(A,{...d,...o,ref:m})});S.displayName=T;var de=({contentRef:e})=>{const t=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${_}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return a.useEffect(()=>{var o;document.getElementById((o=e.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},pe=x,me=N,ue=P,ge=C,fe=w,ve=S,Ae=h,De=b;const O=a.createContext({variant:"danger"}),ye=()=>{const e=a.useContext(O);if(!e)throw new Error("usePromptContext must be used within a PromptProvider");return e},xe=({variant:e,children:t})=>a.createElement(O.Provider,{value:{variant:e}},t),j=({variant:e="danger",...t})=>a.createElement(xe,{variant:e},a.createElement(pe,{...t}));j.displayName="Prompt";const $=me;$.displayName="Prompt.Trigger";const M=e=>a.createElement(E,{...e});M.displayName="Prompt.Portal";const I=a.forwardRef(({className:e,...t},r)=>a.createElement(ue,{ref:r,className:i("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));I.displayName="Prompt.Overlay";const F=a.forwardRef(({className:e,children:t,...r},o)=>a.createElement(Ae,{ref:o,className:i(e),...r,asChild:!0},a.createElement(ae,{level:"h2",className:"text-ui-fg-base"},t)));F.displayName="Prompt.Title";const H=a.forwardRef(({className:e,...t},r)=>a.createElement(M,null,a.createElement(I,null),a.createElement(ge,{ref:r,className:i("bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus-visible:outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",e),...t})));H.displayName="Prompt.Content";const z=a.forwardRef(({className:e,...t},r)=>a.createElement(De,{ref:r,className:i("text-ui-fg-subtle txt-compact-medium",e),...t}));z.displayName="Prompt.Description";const L=a.forwardRef(({className:e,children:t,type:r,...o},s)=>{const{variant:d}=ye();return a.createElement(fe,{ref:s,className:e,...o,asChild:!0},a.createElement(D,{size:"small",type:r,variant:d==="danger"?"danger":"primary"},t))});L.displayName="Prompt.Action";const B=a.forwardRef(({className:e,children:t,...r},o)=>a.createElement(ve,{ref:o,className:i(e),...r,asChild:!0},a.createElement(D,{size:"small",variant:"secondary"},t)));B.displayName="Prompt.Cancel";const G=({className:e,...t})=>a.createElement("div",{className:i("flex flex-col gap-y-1 px-6 pt-6",e),...t});G.displayName="Prompt.Header";const q=({className:e,...t})=>a.createElement("div",{className:i("flex items-center justify-end gap-x-2 p-6",e),...t});q.displayName="Prompt.Footer";const Pe=Object.assign(j,{Trigger:$,Content:H,Title:F,Description:z,Action:L,Cancel:B,Header:G,Footer:q});export{Pe as P};
