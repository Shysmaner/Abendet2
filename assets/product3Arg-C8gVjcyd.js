import{r as s,j as e,g as y,c as N,R as A}from"./country-D3IyiI93.js";/* empty css                  *//* empty css                       *//* empty css              *//* empty css                */import{g as j,a as f}from"./firebase-C--_s6Y8.js";import{c as w,a as S}from"./cookies-DJwG0iie.js";const R=({howMany:c,setHowMany:o})=>{const[h,m]=s.useState(!0),p=s.useRef(null),x=s.useRef(null),l=s.useRef(null),d=s.useRef(null);let[n,g]=s.useState(w());function v(){S(),g=!0,window.location.href=""}s.useEffect(()=>{const t=j(f).onAuthStateChanged(i=>{m(!i)});y().then(i=>{if(i!="Argentina"){let r=document.body;r.innerHTML="",r.innerHTML="Página no disponible"}});const b=i=>{if(i.key==="Enter"){const r=document.querySelector(".search-icon");r==null||r.click()}};return window.addEventListener("keypress",b),()=>{t(),window.removeEventListener("keypress",b)}},[]);const u=a=>{window.location.href=a},k=()=>{const a=document.querySelector(".search");a==null||a.classList.toggle("search-appear")};function C(){const a=l.current,t=d.current;a.classList.toggle("rotation"),t.classList.add("shaking2"),setTimeout(()=>{t.classList.toggle("shaking1"),setTimeout(()=>{t.classList.toggle("shaking2")},200),setTimeout(()=>{t.classList.toggle("visibility")},200)},200)}return e.jsxs("section",{className:"top",children:[e.jsx("i",{className:"fa-solid fa-chevron-right",onClick:C,ref:l}),e.jsxs("div",{className:"mobile-content",ref:d,children:[e.jsx("a",{href:"../products/index.html",children:"PRODUCTOS"}),e.jsx("a",{href:"../about-us/index.html",children:"ACERCA DE"}),e.jsx("a",{href:"../contact-us/index.html",children:"CONTACTO"})]}),e.jsx("a",{href:"../",children:e.jsx("img",{src:"../../src/assets/brand.png",className:"brand",alt:"brand"})}),e.jsxs("div",{className:"top-sections",children:[e.jsx("button",{onClick:()=>u("../products/index.html"),className:"products btns",children:"PRODUCTOS"}),e.jsx("button",{onClick:()=>u("../about-us/index.html"),className:"about-us btns",children:"ACERCA DE"}),e.jsx("button",{onClick:()=>u("../contact-us/index.html"),className:"contact-us btns",children:"CONTACTO"})]}),e.jsxs("div",{className:"look-up",children:[h?e.jsx("button",{className:"log-btn",onClick:()=>u("../../"),children:"Iniciar Sesión"}):e.jsx(e.Fragment,{}),c&&e.jsxs("div",{className:"how-many",children:[e.jsx("i",{className:"fa-solid fa-xmark close",onClick:()=>o(!1)}),"Cantidad: ",e.jsx("br",{}),e.jsx("input",{type:"number",className:"amount",ref:p,defaultValue:1}),e.jsx("br",{}),e.jsx("button",{className:"add",ref:x,children:"Agregar"})]}),e.jsx("div",{className:"search-div",children:e.jsx("i",{className:"fa-solid fa-magnifying-glass top-search",onClick:k})})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cookies-advice activo",id:"cookies-advice",children:[e.jsx("img",{className:"cookie",src:"../../src/assets/cookie.svg",alt:"Cookie"}),e.jsx("h3",{className:"tittle",children:"Cookies"}),e.jsx("p",{className:"paragraph",children:"Utilizamos cookies propias y de terceros para mejorar nuestros servicios."}),e.jsx("button",{className:"button",id:"accept-cookies-btn",onClick:v,children:"De acuerdo"}),e.jsx("a",{className:"link",href:"abendet-cookies/index.html",children:"Aviso de Cookies"})]}),e.jsx("div",{className:"back-cookies-advice activo",id:"back-cookies-advice"})]}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-div1",children:[e.jsx("a",{href:"../products/index.html",children:"Productos"}),e.jsx("a",{href:"../about-us/index.html",children:"Acerca De"}),e.jsx("a",{href:"../contact-us/index.html",children:"Contacto"})]}),e.jsxs("div",{className:"footer-div2",children:[e.jsx("a",{href:"../sponsorships/index.html",children:"Patrocinios"}),e.jsx("a",{href:"../abendet-cookies/index.html",children:"Cookies"}),e.jsx("a",{href:"../abendet-privacy/index.html",children:"Privacidad"})]})]})]})},E=({setHowMany:c})=>{const o=s.useRef(null),[h,m]=s.useState(!1),p=j(f),x=()=>{const n=o.current;n.value!==""?(localStorage.setItem("input-value",n.value),window.location.href="../search/index.html"):n.placeholder="Introduzca una búsqueda válida"},l=()=>{p.currentUser==null?(m(!0),window.scrollTo({top:0,behavior:"smooth"})):window.location.href="../products/index.html"},d=()=>{window.location.href="../../../"};return e.jsxs("div",{children:[e.jsxs("section",{className:"search",children:[e.jsx("h1",{children:"Estamos contentos de ayudarte"}),e.jsx("input",{className:"search-input",ref:o}),e.jsx("i",{className:"fa-solid fa-magnifying-glass search-icon",onClick:x})]}),e.jsx("h2",{children:"Shampoo Fórmula Natural"}),e.jsxs("div",{className:"content",children:[e.jsx("img",{src:"../../src/assets/shampoo4.avif",alt:"Shampoo"}),e.jsxs("p",{children:["Descubre el poder de la naturaleza con nuestro Shampoo Fórmula Natural, diseñado especialmente para brindar una limpieza profunda y nutritiva sin comprometer la salud de tu cabello. Hecho con ingredientes 100% naturales, este shampoo es la solución perfecta para quienes buscan una alternativa saludable y efectiva a los productos convencionales cargados de químicos.",e.jsx("br",{}),e.jsx("br",{}),"Ingredientes Clave:",e.jsx("br",{}),e.jsx("br",{}),"Aceite de Coco: Rico en ácidos grasos esenciales, el aceite de coco hidrata profundamente y fortalece cada hebra de cabello, dejándolo suave y sedoso.",e.jsx("br",{}),"Extracto de Aloe Vera: Conocido por sus propiedades calmantes y reparadoras, el aloe vera ayuda a restaurar el equilibrio natural del cuero cabelludo, aliviando la sequedad y la irritación.",e.jsx("br",{}),'Aceite de Argán: También conocido como "oro líquido", el aceite de argán es famoso por sus propiedades nutritivas y antioxidantes, que ayudan a reparar el daño y a proteger el cabello contra los agresores ambientales.',e.jsx("br",{}),"Romero y Lavanda: Estos extractos botánicos no solo ofrecen un aroma refrescante sino que también promueven la salud del cuero cabelludo, estimulando el crecimiento del cabello y reduciendo la caída.",e.jsx("br",{}),"Beneficios:",e.jsx("br",{}),e.jsx("br",{}),"Limpieza Suave: Nuestro shampoo elimina impurezas y residuos sin quitar los aceites naturales del cabello.",e.jsx("br",{}),"Hidratación Profunda: Proporciona la humedad necesaria para cabello seco y dañado, revitalizándolo desde la raíz hasta las puntas.",e.jsx("br",{}),"Libre de Químicos: Sin sulfatos, parabenos, ni siliconas, nuestro shampoo es seguro para el uso diario y adecuado para todo tipo de cabello, incluyendo cabello teñido.",e.jsx("br",{}),"Ecológico y Cruelty-Free: Comprometidos con el medio ambiente y el bienestar animal, todos nuestros productos son eco-amigables y libres de pruebas en animales.",e.jsx("br",{}),"Experimenta un cabello más fuerte, brillante y saludable con nuestro Shampoo Fórmula Natural. La naturaleza nunca ha sido tan hermosa.",e.jsx("br",{}),e.jsx("br",{}),e.jsxs("button",{onClick:l,children:["Comprar Producto ",e.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]}),h&&e.jsxs("div",{className:"not-user",children:[e.jsx("p",{children:"Inicia sesión para poder añadir productos al carrito"}),e.jsx("button",{onClick:d,children:"Iniciar Sesión"})]})]})]})},L=()=>{const[c,o]=s.useState(!1);return e.jsxs("div",{children:[e.jsx(R,{howMany:c,setHowMany:o}),e.jsx(E,{setHowMany:o})]})};N.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(L,{})}));
