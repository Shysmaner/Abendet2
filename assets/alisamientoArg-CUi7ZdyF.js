import{r as e,j as s,g as A,c as v,R}from"./country-D3IyiI93.js";/* empty css                  *//* empty css                       *//* empty css              *//* empty css                */import{g as p,a as g}from"./firebase-C--_s6Y8.js";/* empty css                  */import{c as O,a as w}from"./cookies-DJwG0iie.js";const S=({howMany:l,setHowMany:i})=>{const[u,m]=e.useState(!0),x=e.useRef(null),j=e.useRef(null),a=e.useRef(null),d=e.useRef(null);let[n,C]=e.useState(O());function b(){w(),C=!0,window.location.href=""}e.useEffect(()=>{const c=p(g).onAuthStateChanged(r=>{m(!r)});A().then(r=>{if(r!="Argentina"){let o=document.body;o.innerHTML="",o.innerHTML="Página no disponible"}});const f=r=>{if(r.key==="Enter"){const o=document.querySelector(".search-icon");o==null||o.click()}};return window.addEventListener("keypress",f),()=>{c(),window.removeEventListener("keypress",f)}},[]);const h=t=>{window.location.href=t},k=()=>{const t=document.querySelector(".search");t==null||t.classList.toggle("search-appear")};function N(){const t=a.current,c=d.current;t.classList.toggle("rotation"),c.classList.add("shaking2"),setTimeout(()=>{c.classList.toggle("shaking1"),setTimeout(()=>{c.classList.toggle("shaking2")},200),setTimeout(()=>{c.classList.toggle("visibility")},200)},200)}return s.jsxs("section",{className:"top",children:[s.jsx("i",{className:"fa-solid fa-chevron-right",onClick:N,ref:a}),s.jsxs("div",{className:"mobile-content",ref:d,children:[s.jsx("a",{href:"../products/index.html",children:"PRODUCTOS"}),s.jsx("a",{href:"../about-us/index.html",children:"ACERCA DE"}),s.jsx("a",{href:"../contact-us/index.html",children:"CONTACTO"})]}),s.jsx("a",{href:"../",children:s.jsx("img",{src:"../../src/assets/brand.png",className:"brand",alt:"brand"})}),s.jsxs("div",{className:"top-sections",children:[s.jsx("button",{onClick:()=>h("../products/index.html"),className:"products btns",children:"PRODUCTOS"}),s.jsx("button",{onClick:()=>h("../about-us/index.html"),className:"about-us btns",children:"ACERCA DE"}),s.jsx("button",{onClick:()=>h("../contact-us/index.html"),className:"contact-us btns",children:"CONTACTO"})]}),s.jsxs("div",{className:"look-up",children:[u?s.jsx("button",{className:"log-btn",onClick:()=>h("../../"),children:"Iniciar Sesión"}):s.jsx(s.Fragment,{}),l&&s.jsxs("div",{className:"how-many",children:[s.jsx("i",{className:"fa-solid fa-xmark close",onClick:()=>i(!1)}),"Cantidad: ",s.jsx("br",{}),s.jsx("input",{type:"number",className:"amount",ref:x,defaultValue:1}),s.jsx("br",{}),s.jsx("button",{className:"add",ref:j,children:"Agregar"})]}),s.jsx("div",{className:"search-div",children:s.jsx("i",{className:"fa-solid fa-magnifying-glass top-search",onClick:k})})]}),!n&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"cookies-advice activo",id:"cookies-advice",children:[s.jsx("img",{className:"cookie",src:"../../src/assets/cookie.svg",alt:"Cookie"}),s.jsx("h3",{className:"tittle",children:"Cookies"}),s.jsx("p",{className:"paragraph",children:"Utilizamos cookies propias y de terceros para mejorar nuestros servicios."}),s.jsx("button",{className:"button",id:"accept-cookies-btn",onClick:b,children:"De acuerdo"}),s.jsx("a",{className:"link",href:"abendet-cookies/index.html",children:"Aviso de Cookies"})]}),s.jsx("div",{className:"back-cookies-advice activo",id:"back-cookies-advice"})]}),s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-div1",children:[s.jsx("a",{href:"../products/index.html",children:"Productos"}),s.jsx("a",{href:"../about-us/index.html",children:"Acerca De"}),s.jsx("a",{href:"../contact-us/index.html",children:"Contacto"})]}),s.jsxs("div",{className:"footer-div2",children:[s.jsx("a",{href:"../sponsorships/index.html",children:"Patrocinios"}),s.jsx("a",{href:"../abendet-cookies/index.html",children:"Cookies"}),s.jsx("a",{href:"../abendet-privacy/index.html",children:"Privacidad"})]})]})]})},P=({setHowMany:l})=>{const i=e.useRef(null),[u,m]=e.useState(!1),x=p(g),j=()=>{const n=i.current;n.value!==""?(localStorage.setItem("input-value",n.value),window.location.href="../search/index.html"):n.placeholder="Introduzca una búsqueda válida"},a=()=>{x.currentUser==null?(m(!0),window.scrollTo({top:0,behavior:"smooth"})):window.location.href="../products/index.html"},d=()=>{window.location.href="../../../"};return s.jsxs("div",{children:[s.jsxs("section",{className:"search",children:[s.jsx("h1",{children:"Estamos contentos de ayudarte"}),s.jsx("input",{className:"search-input",ref:i}),s.jsx("i",{className:"fa-solid fa-magnifying-glass search-icon",onClick:j})]}),s.jsx("h2",{className:"title-h2",children:"CASPA"}),s.jsxs("div",{className:"content",children:[s.jsxs("section",{className:"products",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"SHAMPOO CONTROL CASPA"}),s.jsx("img",{src:"../../src/assets/head-and.webp"}),s.jsxs("button",{onClick:a,children:["COMPRAR ",s.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"SHAMPOO CONTROL CASPA"}),s.jsx("img",{src:"../../src/assets/head-and.webp"}),s.jsxs("button",{onClick:a,children:["COMPRAR ",s.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"SHAMPOO CONTROL CASPA"}),s.jsx("img",{src:"../../src/assets/head-and.webp"}),s.jsxs("button",{onClick:a,children:["COMPRAR ",s.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"SHAMPOO CONTROL CASPA"}),s.jsx("img",{src:"../../src/assets/head-and.webp"}),s.jsxs("button",{onClick:a,children:["COMPRAR ",s.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"SHAMPOO CONTROL CASPA"}),s.jsx("img",{src:"../../src/assets/head-and.webp"}),s.jsxs("button",{onClick:a,children:["COMPRAR ",s.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]})]}),u&&s.jsxs("div",{className:"not-user",children:[s.jsx("p",{children:"Inicia sesión para poder añadir productos al carrito"}),s.jsx("button",{onClick:d,children:"Iniciar Sesión"})]})]})]})},y=()=>{const[l,i]=e.useState(!1);return s.jsxs("div",{children:[s.jsx(S,{howMany:l,setHowMany:i}),s.jsx(P,{setHowMany:i})]})};v.createRoot(document.getElementById("root")).render(s.jsx(R.StrictMode,{children:s.jsx(y,{})}));
