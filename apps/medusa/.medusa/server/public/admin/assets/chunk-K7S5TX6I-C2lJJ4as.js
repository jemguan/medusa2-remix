import{dk as b}from"./index-Br7KcgVZ.js";var C=b({"../../../node_modules/toggle-selection/index.js"(v,u){u.exports=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var o=document.activeElement,i=[],s=0;s<a.rangeCount;s++)i.push(a.getRangeAt(s));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return a.removeAllRanges(),function(){a.type==="Caret"&&a.removeAllRanges(),a.rangeCount||i.forEach(function(f){a.addRange(f)}),o&&o.focus()}}}}),D=b({"../../../node_modules/copy-to-clipboard/index.js"(v,u){var a=C(),o={"text/plain":"Text","text/html":"Url",default:"Text"},i="Copy to clipboard: #{key}, Enter";function s(n){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,t)}function f(n,t){var c,g,y,d,l,e,p=!1;t||(t={}),c=t.debug||!1;try{y=a(),d=document.createRange(),l=document.getSelection(),e=document.createElement("span"),e.textContent=n,e.ariaHidden="true",e.style.all="unset",e.style.position="fixed",e.style.top=0,e.style.clip="rect(0, 0, 0, 0)",e.style.whiteSpace="pre",e.style.webkitUserSelect="text",e.style.MozUserSelect="text",e.style.msUserSelect="text",e.style.userSelect="text",e.addEventListener("copy",function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),typeof r.clipboardData>"u"){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=o[t.format]||o.default;window.clipboardData.setData(m,n)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,n);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(e),d.selectNodeContents(e),l.addRange(d);var w=document.execCommand("copy");if(!w)throw new Error("copy command was unsuccessful");p=!0}catch(r){c&&console.error("unable to copy using execCommand: ",r),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",n),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(m){c&&console.error("unable to copy using clipboardData: ",m),c&&console.error("falling back to prompt"),g=s("message"in t?t.message:i),window.prompt(g,n)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(d):l.removeAllRanges()),e&&document.body.removeChild(e),y()}return p}u.exports=f}});export{D as r};
