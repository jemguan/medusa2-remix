import{cA as l,s as n,dh as y,aI as u,q as s,dp as o}from"./index-Br7KcgVZ.js";var d="shipping_options",r=y(d),v=(e,i,a)=>{const{data:t,...p}=l({queryFn:()=>n.admin.shippingOption.retrieve(e,i),queryKey:r.detail(e),...a});return{...t,...p}},h=(e,i)=>{const{data:a,...t}=l({queryFn:()=>n.admin.shippingOption.list(e),queryKey:r.list(e),...i});return{...a,...t}},O=e=>u({mutationFn:i=>n.admin.shippingOption.create(i),onSuccess:(i,a,t)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...e}),g=(e,i)=>u({mutationFn:a=>n.admin.shippingOption.update(e,a),onSuccess:(a,t,p)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i}),q=(e,i)=>u({mutationFn:()=>n.admin.shippingOption.delete(e),onSuccess:(a,t,p)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i});export{q as a,O as b,g as c,v as d,r as s,h as u};
