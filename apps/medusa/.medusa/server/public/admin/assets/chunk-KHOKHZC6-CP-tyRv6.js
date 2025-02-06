import{r as v,j as R,bt as ct,bp as Zt,bq as xt,bs as Ie,bB as bt,bu as rt,bw as Jt,bC as ze,bD as Ve,bA as $e,bE as Ye,bF as Xe,bG as qe,aL as Ge,br as Ke,bv as Ue,bH as Ze}from"./index-Br7KcgVZ.js";var Je=["top","right","bottom","left"],X=Math.min,L=Math.max,ht=Math.round,dt=Math.floor,q=t=>({x:t,y:t}),Qe={left:"right",right:"left",bottom:"top",top:"bottom"},tn={start:"end",end:"start"};function At(t,e,n){return L(t,X(e,n))}function V(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Ct(t){return t==="x"?"y":"x"}function Rt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes($(t))?"y":"x"}function Ot(t){return Ct(et(t))}function en(t,e,n){n===void 0&&(n=!1);const o=tt(t),r=Ot(t),i=Rt(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=gt(s)),[s,gt(s)]}function nn(t){const e=gt(t);return[Pt(t),e,Pt(e)]}function Pt(t){return t.replace(/start|end/g,e=>tn[e])}function on(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function rn(t,e,n,o){const r=tt(t);let i=on($(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(Pt)))),i}function gt(t){return t.replace(/left|right|bottom|top/g,e=>Qe[e])}function sn(t){return{top:0,right:0,bottom:0,left:0,...t}}function Qt(t){return typeof t!="number"?sn(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function zt(t,e,n){let{reference:o,floating:r}=t;const i=et(e),s=Ot(e),c=Rt(s),a=$(e),l=i==="y",d=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let u;switch(a){case"top":u={x:d,y:o.y-r.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:f};break;case"left":u={x:o.x-r.width,y:f};break;default:u={x:o.x,y:o.y}}switch(tt(e)){case"start":u[s]-=p*(n&&l?-1:1);break;case"end":u[s]+=p*(n&&l?-1:1);break}return u}var cn=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=zt(l,o,a),p=o,u={},h=0;for(let g=0;g<c.length;g++){const{name:x,fn:m}=c[g],{x:w,y:b,data:y,reset:A}=await m({x:d,y:f,initialPlacement:o,placement:p,strategy:r,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});d=w??d,f=b??f,u={...u,[x]:{...u[x],...y}},A&&h<=50&&(h++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(l=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:d,y:f}=zt(l,p,a)),g=-1)}return{x:d,y:f,placement:p,strategy:r,middlewareData:u}};async function it(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:u=0}=V(e,t),h=Qt(u),x=c[p?f==="floating"?"reference":"floating":f],m=mt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:d,strategy:a})),w=f==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},A=mt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:a}):w);return{top:(m.top-A.top+h.top)/y.y,bottom:(A.bottom-m.bottom+h.bottom)/y.y,left:(m.left-A.left+h.left)/y.x,right:(A.right-m.right+h.right)/y.x}}var an=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:d=0}=V(t,e)||{};if(l==null)return{};const f=Qt(d),p={x:n,y:o},u=Ot(r),h=Rt(u),g=await s.getDimensions(l),x=u==="y",m=x?"top":"left",w=x?"bottom":"right",b=x?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[u]-p[u]-i.floating[h],A=p[u]-i.reference[u],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let O=P?P[b]:0;(!O||!await(s.isElement==null?void 0:s.isElement(P)))&&(O=c.floating[b]||i.floating[h]);const D=y/2-A/2,k=O/2-g[h]/2-1,H=X(f[m],k),j=X(f[w],k),S=H,_=O-g[h]-j,T=O/2-g[h]/2+D,E=At(S,T,_),M=!a.arrow&&tt(r)!=null&&T!==E&&i.reference[h]/2-(T<S?H:j)-g[h]/2<0,C=M?T<S?T-S:T-_:0;return{[u]:p[u]+C,data:{[u]:E,centerOffset:T-E-C,...M&&{alignmentOffset:C}},reset:M}}}),ln=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...x}=V(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=$(r),w=$(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(l.floating)),y=p||(w||!g?[gt(c)]:nn(c));!p&&h!=="none"&&y.push(...rn(c,g,h,b));const A=[c,...y],P=await it(e,x),O=[];let D=((o=i.flip)==null?void 0:o.overflows)||[];if(d&&O.push(P[m]),f){const S=en(r,s,b);O.push(P[S[0]],P[S[1]])}if(D=[...D,{placement:r,overflows:O}],!O.every(S=>S<=0)){var k,H;const S=(((k=i.flip)==null?void 0:k.index)||0)+1,_=A[S];if(_)return{data:{index:S,overflows:D},reset:{placement:_}};let T=(H=D.filter(E=>E.overflows[0]<=0).sort((E,M)=>E.overflows[1]-M.overflows[1])[0])==null?void 0:H.placement;if(!T)switch(u){case"bestFit":{var j;const E=(j=D.map(M=>[M.placement,M.overflows.filter(C=>C>0).reduce((C,N)=>C+N,0)]).sort((M,C)=>M[1]-C[1])[0])==null?void 0:j[0];E&&(T=E);break}case"initialPlacement":T=c;break}if(r!==T)return{reset:{placement:T}}}return{}}}};function Vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function $t(t){return Je.some(e=>t[e]>=0)}var fn=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=V(t,e);switch(o){case"referenceHidden":{const i=await it(e,{...r,elementContext:"reference"}),s=Vt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:$t(s)}}}case"escaped":{const i=await it(e,{...r,altBoundary:!0}),s=Vt(i,n.floating);return{data:{escapedOffsets:s,escaped:$t(s)}}}default:return{}}}}};async function un(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=$(n),c=tt(n),a=et(n)==="y",l=["left","top"].includes(s)?-1:1,d=i&&a?-1:1,f=V(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof h=="number"&&(u=c==="end"?h*-1:h),a?{x:u*d,y:p*l}:{x:p*l,y:u*d}}var dn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=e,a=await un(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:s}}}}},pn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:x=>{let{x:m,y:w}=x;return{x:m,y:w}}},...a}=V(t,e),l={x:n,y:o},d=await it(e,a),f=et($(r)),p=Ct(f);let u=l[p],h=l[f];if(i){const x=p==="y"?"top":"left",m=p==="y"?"bottom":"right",w=u+d[x],b=u-d[m];u=At(w,u,b)}if(s){const x=f==="y"?"top":"left",m=f==="y"?"bottom":"right",w=h+d[x],b=h-d[m];h=At(w,h,b)}const g=c.fn({...e,[p]:u,[f]:h});return{...g,data:{x:g.x-n,y:g.y-o}}}}},hn=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=V(t,e),d={x:n,y:o},f=et(r),p=Ct(f);let u=d[p],h=d[f];const g=V(c,e),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(a){const b=p==="y"?"height":"width",y=i.reference[p]-i.floating[b]+x.mainAxis,A=i.reference[p]+i.reference[b]-x.mainAxis;u<y?u=y:u>A&&(u=A)}if(l){var m,w;const b=p==="y"?"width":"height",y=["top","left"].includes($(r)),A=i.reference[f]-i.floating[b]+(y&&((m=s.offset)==null?void 0:m[f])||0)+(y?0:x.crossAxis),P=i.reference[f]+i.reference[b]+(y?0:((w=s.offset)==null?void 0:w[f])||0)-(y?x.crossAxis:0);h<A?h=A:h>P&&(h=P)}return{[p]:u,[f]:h}}}},gn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:i}=e,{apply:s=()=>{},...c}=V(t,e),a=await it(e,c),l=$(n),d=tt(n),f=et(n)==="y",{width:p,height:u}=o.floating;let h,g;l==="top"||l==="bottom"?(h=l,g=d===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(g=l,h=d==="end"?"top":"bottom");const x=u-a[h],m=p-a[g],w=!e.middlewareData.shift;let b=x,y=m;if(f){const P=p-a.left-a.right;y=d||w?X(m,P):P}else{const P=u-a.top-a.bottom;b=d||w?X(x,P):P}if(w&&!d){const P=L(a.left,0),O=L(a.right,0),D=L(a.top,0),k=L(a.bottom,0);f?y=p-2*(P!==0||O!==0?P+O:L(a.left,a.right)):b=u-2*(D!==0||k!==0?D+k:L(a.top,a.bottom))}await s({...e,availableWidth:y,availableHeight:b});const A=await r.getDimensions(i.floating);return p!==A.width||u!==A.height?{reset:{rects:!0}}:{}}}};function nt(t){return te(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(te(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function te(t){return t instanceof Node||t instanceof F(t).Node}function B(t){return t instanceof Element||t instanceof F(t).Element}function I(t){return t instanceof HTMLElement||t instanceof F(t).HTMLElement}function Yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof F(t).ShadowRoot}function at(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function mn(t){return["table","td","th"].includes(nt(t))}function Et(t){const e=St(),n=W(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function vn(t){let e=G(t);for(;I(e)&&!J(e);){if(Et(e))return e;e=G(e)}return null}function St(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(nt(t))}function W(t){return F(t).getComputedStyle(t)}function wt(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yt(t)&&t.host||Y(t);return Yt(e)?e.host:e}function ee(t){const e=G(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&at(e)?e:ee(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ee(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=F(r);return i?e.concat(s,s.visualViewport||[],at(r)?r:[],s.frameElement&&n?st(s.frameElement):[]):e.concat(r,st(r,[],n))}function ne(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=I(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,c=ht(n)!==i||ht(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Dt(t){return B(t)?t:t.contextElement}function Z(t){const e=Dt(t);if(!I(e))return q(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=ne(e);let s=(i?ht(n.width):n.width)/o,c=(i?ht(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}var xn=q(0);function oe(t){const e=F(t);return!St()||!e.visualViewport?xn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function wn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==F(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=Dt(t);let s=q(1);e&&(o?B(o)&&(s=Z(o)):s=Z(t));const c=wn(i,n,o)?oe(i):q(0);let a=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(i){const p=F(i),u=o&&B(o)?F(o):o;let h=p,g=h.frameElement;for(;g&&o&&u!==h;){const x=Z(g),m=g.getBoundingClientRect(),w=W(g),b=m.left+(g.clientLeft+parseFloat(w.paddingLeft))*x.x,y=m.top+(g.clientTop+parseFloat(w.paddingTop))*x.y;a*=x.x,l*=x.y,d*=x.x,f*=x.y,a+=b,l+=y,h=F(g),g=h.frameElement}}return mt({width:d,height:f,x:a,y:l})}var yn=[":popover-open",":modal"];function Tt(t){return yn.some(e=>{try{return t.matches(e)}catch{return!1}})}function bn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=Y(o),c=e?Tt(e.floating):!1;if(o===s||c&&i)return n;let a={scrollLeft:0,scrollTop:0},l=q(1);const d=q(0),f=I(o);if((f||!f&&!i)&&((nt(o)!=="body"||at(s))&&(a=wt(o)),I(o))){const p=U(o);l=Z(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+d.x,y:n.y*l.y-a.scrollTop*l.y+d.y}}function An(t){return Array.from(t.getClientRects())}function re(t){return U(Y(t)).left+wt(t).scrollLeft}function Pn(t){const e=Y(t),n=wt(t),o=t.ownerDocument.body,r=L(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=L(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+re(t);const c=-n.scrollTop;return W(o).direction==="rtl"&&(s+=L(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function Cn(t,e){const n=F(t),o=Y(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const l=St();(!l||l&&e==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}function Rn(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=I(t)?Z(t):q(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,a=r*i.x,l=o*i.y;return{width:s,height:c,x:a,y:l}}function Xt(t,e,n){let o;if(e==="viewport")o=Cn(t,n);else if(e==="document")o=Pn(Y(t));else if(B(e))o=Rn(e,n);else{const r=oe(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return mt(o)}function ie(t,e){const n=G(t);return n===e||!B(n)||J(n)?!1:W(n).position==="fixed"||ie(n,e)}function On(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(c=>B(c)&&nt(c)!=="body"),r=null;const i=W(t).position==="fixed";let s=i?G(t):t;for(;B(s)&&!J(s);){const c=W(s),a=Et(s);!a&&c.position==="fixed"&&(r=null),(i?!a&&!r:!a&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||at(s)&&!a&&ie(t,s))?o=o.filter(d=>d!==s):r=c,s=G(s)}return e.set(t,o),o}function En(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?Tt(e)?[]:On(e,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,d)=>{const f=Xt(e,d,r);return l.top=L(f.top,l.top),l.right=X(f.right,l.right),l.bottom=X(f.bottom,l.bottom),l.left=L(f.left,l.left),l},Xt(e,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Sn(t){const{width:e,height:n}=ne(t);return{width:e,height:n}}function Dn(t,e,n){const o=I(e),r=Y(e),i=n==="fixed",s=U(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const a=q(0);if(o||!o&&!i)if((nt(e)!=="body"||at(r))&&(c=wt(e)),o){const f=U(e,!0,i,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else r&&(a.x=re(r));const l=s.left+c.scrollLeft-a.x,d=s.top+c.scrollTop-a.y;return{x:l,y:d,width:s.width,height:s.height}}function yt(t){return W(t).position==="static"}function qt(t,e){return!I(t)||W(t).position==="fixed"?null:e?e(t):t.offsetParent}function se(t,e){const n=F(t);if(Tt(t))return n;if(!I(t)){let r=G(t);for(;r&&!J(r);){if(B(r)&&!yt(r))return r;r=G(r)}return n}let o=qt(t,e);for(;o&&mn(o)&&yt(o);)o=qt(o,e);return o&&J(o)&&yt(o)&&!Et(o)?n:o||vn(t)||n}var Tn=async function(t){const e=this.getOffsetParent||se,n=this.getDimensions,o=await n(t.floating);return{reference:Dn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Mn(t){return W(t).direction==="rtl"}var _n={convertOffsetParentRelativeRectToViewportRelativeRect:bn,getDocumentElement:Y,getClippingRect:En,getOffsetParent:se,getElementRects:Tn,getClientRects:An,getDimensions:Sn,getScale:Z,isElement:B,isRTL:Mn};function Nn(t,e){let n=null,o;const r=Y(t);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const{left:l,top:d,width:f,height:p}=t.getBoundingClientRect();if(c||e(),!f||!p)return;const u=dt(d),h=dt(r.clientWidth-(l+f)),g=dt(r.clientHeight-(d+p)),x=dt(l),w={rootMargin:-u+"px "+-h+"px "+-g+"px "+-x+"px",threshold:L(0,X(1,a))||1};let b=!0;function y(A){const P=A[0].intersectionRatio;if(P!==a){if(!b)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(y,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,w)}n.observe(t)}return s(!0),i}function Ln(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=Dt(t),d=r||i?[...l?st(l):[],...st(e)]:[];d.forEach(m=>{r&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const f=l&&c?Nn(l,n):null;let p=-1,u=null;s&&(u=new ResizeObserver(m=>{let[w]=m;w&&w.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(e)})),n()}),l&&!a&&u.observe(l),u.observe(e));let h,g=a?U(t):null;a&&x();function x(){const m=U(t);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&n(),g=m,h=requestAnimationFrame(x)}return n(),()=>{var m;d.forEach(w=>{r&&w.removeEventListener("scroll",n),i&&w.removeEventListener("resize",n)}),f==null||f(),(m=u)==null||m.disconnect(),u=null,a&&cancelAnimationFrame(h)}}var Fn=dn,kn=pn,jn=ln,Hn=gn,Wn=fn,Gt=an,Bn=hn,In=(t,e,n)=>{const o=new Map,r={platform:_n,...n},i={...r.platform,_c:o};return cn(t,e,{...r,platform:i})},zn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Gt({element:o.current,padding:r}).fn(n):{}:o?Gt({element:o,padding:r}).fn(n):{}}}},pt=typeof document<"u"?v.useLayoutEffect:v.useEffect;function vt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!vt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!vt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function ce(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Kt(t,e){const n=ce(t);return Math.round(e*n)/n}function Ut(t){const e=v.useRef(t);return pt(()=>{e.current=t}),e}function Vn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:a,open:l}=t,[d,f]=v.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,u]=v.useState(o);vt(p,o)||u(o);const[h,g]=v.useState(null),[x,m]=v.useState(null),w=v.useCallback(C=>{C!==P.current&&(P.current=C,g(C))},[]),b=v.useCallback(C=>{C!==O.current&&(O.current=C,m(C))},[]),y=i||h,A=s||x,P=v.useRef(null),O=v.useRef(null),D=v.useRef(d),k=a!=null,H=Ut(a),j=Ut(r),S=v.useCallback(()=>{if(!P.current||!O.current)return;const C={placement:e,strategy:n,middleware:p};j.current&&(C.platform=j.current),In(P.current,O.current,C).then(N=>{const z={...N,isPositioned:!0};_.current&&!vt(D.current,z)&&(D.current=z,Ge.flushSync(()=>{f(z)}))})},[p,e,n,j]);pt(()=>{l===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,f(C=>({...C,isPositioned:!1})))},[l]);const _=v.useRef(!1);pt(()=>(_.current=!0,()=>{_.current=!1}),[]),pt(()=>{if(y&&(P.current=y),A&&(O.current=A),y&&A){if(H.current)return H.current(y,A,S);S()}},[y,A,S,H,k]);const T=v.useMemo(()=>({reference:P,floating:O,setReference:w,setFloating:b}),[w,b]),E=v.useMemo(()=>({reference:y,floating:A}),[y,A]),M=v.useMemo(()=>{const C={position:n,left:0,top:0};if(!E.floating)return C;const N=Kt(E.floating,d.x),z=Kt(E.floating,d.y);return c?{...C,transform:"translate("+N+"px, "+z+"px)",...ce(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:z}},[n,c,E.floating,d.x,d.y]);return v.useMemo(()=>({...d,update:S,refs:T,elements:E,floatingStyles:M}),[d,S,T,E,M])}var $n="Arrow",ae=v.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return R.jsx(ct.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:R.jsx("polygon",{points:"0,0 30,0 15,10"})})});ae.displayName=$n;var Yn=ae;function Xn(t){const[e,n]=v.useState(void 0);return bt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const a=i.borderBoxSize,l=Array.isArray(a)?a[0]:a;s=l.inlineSize,c=l.blockSize}else s=t.offsetWidth,c=t.offsetHeight;n({width:s,height:c})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}var Mt="Popper",[le,fe]=Zt(Mt),[qn,ue]=le(Mt),de=t=>{const{__scopePopper:e,children:n}=t,[o,r]=v.useState(null);return R.jsx(qn,{scope:e,anchor:o,onAnchorChange:r,children:n})};de.displayName=Mt;var pe="PopperAnchor",he=v.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=ue(pe,n),s=v.useRef(null),c=xt(e,s);return v.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:R.jsx(ct.div,{...r,ref:c})});he.displayName=pe;var _t="PopperContent",[Gn,Kn]=le(_t),ge=v.forwardRef((t,e)=>{var Ft,kt,jt,Ht,Wt,Bt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:a=!0,collisionBoundary:l=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:u="optimized",onPlaced:h,...g}=t,x=ue(_t,n),[m,w]=v.useState(null),b=xt(e,ot=>w(ot)),[y,A]=v.useState(null),P=Xn(y),O=(P==null?void 0:P.width)??0,D=(P==null?void 0:P.height)??0,k=o+(i!=="center"?"-"+i:""),H=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},j=Array.isArray(l)?l:[l],S=j.length>0,_={padding:H,boundary:j.filter(Zn),altBoundary:S},{refs:T,floatingStyles:E,placement:M,isPositioned:C,middlewareData:N}=Vn({strategy:"fixed",placement:k,whileElementsMounted:(...ot)=>Ln(...ot,{animationFrame:u==="always"}),elements:{reference:x.anchor},middleware:[Fn({mainAxis:r+D,alignmentAxis:s}),a&&kn({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Bn():void 0,..._}),a&&jn({..._}),Hn({..._,apply:({elements:ot,rects:It,availableWidth:je,availableHeight:He})=>{const{width:We,height:Be}=It.reference,ut=ot.floating.style;ut.setProperty("--radix-popper-available-width",`${je}px`),ut.setProperty("--radix-popper-available-height",`${He}px`),ut.setProperty("--radix-popper-anchor-width",`${We}px`),ut.setProperty("--radix-popper-anchor-height",`${Be}px`)}}),y&&zn({element:y,padding:c}),Jn({arrowWidth:O,arrowHeight:D}),p&&Wn({strategy:"referenceHidden",..._})]}),[z,Me]=xe(M),ft=Ie(h);bt(()=>{C&&(ft==null||ft())},[C,ft]);const _e=(Ft=N.arrow)==null?void 0:Ft.x,Ne=(kt=N.arrow)==null?void 0:kt.y,Le=((jt=N.arrow)==null?void 0:jt.centerOffset)!==0,[Fe,ke]=v.useState();return bt(()=>{m&&ke(window.getComputedStyle(m).zIndex)},[m]),R.jsx("div",{ref:T.setFloating,"data-radix-popper-content-wrapper":"",style:{...E,transform:C?E.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Fe,"--radix-popper-transform-origin":[(Ht=N.transformOrigin)==null?void 0:Ht.x,(Wt=N.transformOrigin)==null?void 0:Wt.y].join(" "),...((Bt=N.hide)==null?void 0:Bt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:R.jsx(Gn,{scope:n,placedSide:z,onArrowChange:A,arrowX:_e,arrowY:Ne,shouldHideArrow:Le,children:R.jsx(ct.div,{"data-side":z,"data-align":Me,...g,ref:b,style:{...g.style,animation:C?void 0:"none"}})})})});ge.displayName=_t;var me="PopperArrow",Un={top:"bottom",right:"left",bottom:"top",left:"right"},ve=v.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=Kn(me,o),s=Un[i.placedSide];return R.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:R.jsx(Yn,{...r,ref:n,style:{...r.style,display:"block"}})})});ve.displayName=me;function Zn(t){return t!==null}var Jn=t=>({name:"transformOrigin",options:t,fn(e){var x,m,w;const{placement:n,rects:o,middlewareData:r}=e,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,c=s?0:t.arrowWidth,a=s?0:t.arrowHeight,[l,d]=xe(n),f={start:"0%",center:"50%",end:"100%"}[d],p=(((m=r.arrow)==null?void 0:m.x)??0)+c/2,u=(((w=r.arrow)==null?void 0:w.y)??0)+a/2;let h="",g="";return l==="bottom"?(h=s?f:`${p}px`,g=`${-a}px`):l==="top"?(h=s?f:`${p}px`,g=`${o.floating.height+a}px`):l==="right"?(h=`${-a}px`,g=s?f:`${u}px`):l==="left"&&(h=`${o.floating.width+a}px`,g=s?f:`${u}px`),{data:{x:h,y:g}}}});function xe(t){const[e,n="center"]=t.split("-");return[e,n]}var Qn=de,we=he,to=ge,eo=ve,Nt="Popover",[ye,uo]=Zt(Nt,[fe]),lt=fe(),[no,K]=ye(Nt),be=t=>{const{__scopePopover:e,children:n,open:o,defaultOpen:r,onOpenChange:i,modal:s=!1}=t,c=lt(e),a=v.useRef(null),[l,d]=v.useState(!1),[f=!1,p]=Ke({prop:o,defaultProp:r,onChange:i});return R.jsx(Qn,{...c,children:R.jsx(no,{scope:e,contentId:Ue(),triggerRef:a,open:f,onOpenChange:p,onOpenToggle:v.useCallback(()=>p(u=>!u),[p]),hasCustomAnchor:l,onCustomAnchorAdd:v.useCallback(()=>d(!0),[]),onCustomAnchorRemove:v.useCallback(()=>d(!1),[]),modal:s,children:n})})};be.displayName=Nt;var Ae="PopoverAnchor",Pe=v.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=K(Ae,n),i=lt(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=r;return v.useEffect(()=>(s(),()=>c()),[s,c]),R.jsx(we,{...i,...o,ref:e})});Pe.displayName=Ae;var Ce="PopoverTrigger",Re=v.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=K(Ce,n),i=lt(n),s=xt(e,r.triggerRef),c=R.jsx(ct.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Te(r.open),...o,ref:s,onClick:rt(t.onClick,r.onOpenToggle)});return r.hasCustomAnchor?c:R.jsx(we,{asChild:!0,...i,children:c})});Re.displayName=Ce;var Lt="PopoverPortal",[oo,ro]=ye(Lt,{forceMount:void 0}),Oe=t=>{const{__scopePopover:e,forceMount:n,children:o,container:r}=t,i=K(Lt,e);return R.jsx(oo,{scope:e,forceMount:n,children:R.jsx(Jt,{present:n||i.open,children:R.jsx(Ze,{asChild:!0,container:r,children:o})})})};Oe.displayName=Lt;var Q="PopoverContent",Ee=v.forwardRef((t,e)=>{const n=ro(Q,t.__scopePopover),{forceMount:o=n.forceMount,...r}=t,i=K(Q,t.__scopePopover);return R.jsx(Jt,{present:o||i.open,children:i.modal?R.jsx(io,{...r,ref:e}):R.jsx(so,{...r,ref:e})})});Ee.displayName=Q;var io=v.forwardRef((t,e)=>{const n=K(Q,t.__scopePopover),o=v.useRef(null),r=xt(e,o),i=v.useRef(!1);return v.useEffect(()=>{const s=o.current;if(s)return ze(s)},[]),R.jsx(Ve,{as:$e,allowPinchZoom:!0,children:R.jsx(Se,{...t,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:rt(t.onCloseAutoFocus,s=>{var c;s.preventDefault(),i.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:rt(t.onPointerDownOutside,s=>{const c=s.detail.originalEvent,a=c.button===0&&c.ctrlKey===!0,l=c.button===2||a;i.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:rt(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),so=v.forwardRef((t,e)=>{const n=K(Q,t.__scopePopover),o=v.useRef(!1),r=v.useRef(!1);return R.jsx(Se,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s,c;(s=t.onCloseAutoFocus)==null||s.call(t,i),i.defaultPrevented||(o.current||(c=n.triggerRef.current)==null||c.focus(),i.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:i=>{var a,l;(a=t.onInteractOutside)==null||a.call(t,i),i.defaultPrevented||(o.current=!0,i.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const s=i.target;((l=n.triggerRef.current)==null?void 0:l.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&r.current&&i.preventDefault()}})}),Se=v.forwardRef((t,e)=>{const{__scopePopover:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:i,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:d,...f}=t,p=K(Q,n),u=lt(n);return Ye(),R.jsx(Xe,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:i,children:R.jsx(qe,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:d,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onDismiss:()=>p.onOpenChange(!1),children:R.jsx(to,{"data-state":Te(p.open),role:"dialog",id:p.contentId,...u,...f,ref:e,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),De="PopoverClose",co=v.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=K(De,n);return R.jsx(ct.button,{type:"button",...o,ref:e,onClick:rt(t.onClick,()=>r.onOpenChange(!1))})});co.displayName=De;var ao="PopoverArrow",lo=v.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=lt(n);return R.jsx(eo,{...r,...o,ref:e})});lo.displayName=ao;function Te(t){return t?"open":"closed"}var po=be,ho=Pe,go=Re,mo=Oe,vo=Ee;export{ho as A,vo as C,mo as P,po as R,go as T,Xn as u};
