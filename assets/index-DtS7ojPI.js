import"./index_style-CDSsdc0a.js";document.addEventListener("DOMContentLoaded",()=>{const o=`I have a year of freelance experience in GUI and front-end development.

- Python
- Java
- React
- Qt

My English is B2, it was approved by TOEFL iBT exam.

Now I am interested in Full-stack development and Systems administration.`,r=document.getElementById("typing_text_stack");let t=0;function e(){t<o.length&&(r.innerHTML+=o[t],t++,setTimeout(e,45))}e()});document.addEventListener("DOMContentLoaded",()=>{const o=`Hi there! I am Arsen Galiev, also known as Projacktor or
Rosehipbloom.


Kazan Liceum 7 graduated and a student of Innopolis University.


My hobbies are sports, coding, and reading.`,r=document.getElementById("typing_text_greeting");let t=0,e=0,l=!1;function s(){t<o.length&&(r.innerHTML+=o[t],o[t]===`
`&&e++,e===7&&!l&&(m(),l=!0),t++,setTimeout(s,25))}function m(){document.getElementById("li7").classList.remove("hidden"),document.getElementById("iu").classList.remove("hidden")}s()});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".moveLeft"),r=document.querySelector(".moveRight"),t=document.querySelector(".scroller");let e=0;function l(n){const d=document.querySelectorAll(".gallery_heads .gallery_header"),u=document.querySelectorAll(".gallery_pictures .gallery_img"),y=document.querySelectorAll(".gallery_desc .gallery_para");d.forEach((i,c)=>{i.style.display=c===n?"block":"none"}),u.forEach((i,c)=>{i.style.display=c===n?"block":"none"}),y.forEach((i,c)=>{i.style.display=c===n?"block":"none"})}function s(){const n=document.querySelectorAll(".gallery_heads .gallery_header").length;e=e===0?n-1:e-1,l(e),a()}function m(){const n=document.querySelectorAll(".gallery_heads .gallery_header").length;e=e===n-1?0:e+1,l(e),a()}function a(){t.querySelectorAll("circle").forEach((d,u)=>{u===e?d.setAttribute("fill","#FF00FF"):d.setAttribute("fill","#DDDDDD")})}o.addEventListener("click",s),r.addEventListener("click",m),l(e),a()});
