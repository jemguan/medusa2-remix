import{c as m}from"./chunk-MWVM4TYO-bKUcYSnf.js";var i=t=>{var r;return((r=m[t.toUpperCase()])==null?void 0:r.decimal_digits)??0},s=(t,r)=>new Intl.NumberFormat([],{style:"currency",currencyDisplay:"narrowSymbol",currency:r}).format(t),n=t=>new Intl.NumberFormat([],{style:"currency",currency:t,currencyDisplay:"narrowSymbol"}).format(0).replace(/\d/g,"").replace(/[.,]/g,"").trim(),l=(t,r)=>{const e=n(r),a=i(r),o=t.toLocaleString(void 0,{minimumFractionDigits:a,maximumFractionDigits:a});return`${e} ${o} ${r.toUpperCase()}`};export{l as a,s as g};
