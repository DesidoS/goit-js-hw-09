const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function d(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(n){o=setInterval(d,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(n){clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d70d9321.js.map
