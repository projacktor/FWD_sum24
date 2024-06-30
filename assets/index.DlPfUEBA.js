(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const i=`I have a year of freelance experience in GUI and front-end development.

- Python
- Java
- React
- Qt

My English is B2, it was approved by TOEFL iBT exam.

Now I am interested in Full-stack development and Systems administration.`,l=document.getElementById("typing_text_stack");let r=0;function t(){r<i.length&&(l.innerHTML+=i[r],r++,setTimeout(t,45))}t()});document.addEventListener("DOMContentLoaded",()=>{const i=`Hi there! I am Arsen Galiev, also known as Projacktor or
Rosehipbloom.


Kazan Liceum 7 graduated and a student of Innopolis University.


My hobbies are sports, coding, and reading.`,l=document.getElementById("typing_text_greeting");let r=0,t=0,e=!1;function n(){r<i.length&&(l.innerHTML+=i[r],i[r]===`
`&&t++,t===3&&!e&&(c(),e=!0),r++,setTimeout(n,25))}function c(){const s=document.createElement("img");s.src="../assets/svg/Li7ico.svg",s.alt="Li7",s.style.width="70px",s.style.margin="10px",s.style.paddingRight="18rem";const o=document.createElement("img");o.src="../assets/svg/IU_icon.svg",o.alt="IU",o.style.width="84px",o.style.margin="10px",l.appendChild(s),l.appendChild(o)}n()});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".moveLeft"),l=document.querySelector(".moveRight"),r=document.querySelector(".scroller");let t=0;function e(o){const u=document.querySelectorAll(".gallery_heads .gallery_header"),m=document.querySelectorAll(".gallery_pictures .gallery_img"),y=document.querySelectorAll(".gallery_desc .gallery_para");u.forEach((a,d)=>{a.style.display=d===o?"block":"none"}),m.forEach((a,d)=>{a.style.display=d===o?"block":"none"}),y.forEach((a,d)=>{a.style.display=d===o?"block":"none"})}function n(){const o=document.querySelectorAll(".gallery_heads .gallery_header").length;t=t===0?o-1:t-1,e(t),s()}function c(){const o=document.querySelectorAll(".gallery_heads .gallery_header").length;t=t===o-1?0:t+1,e(t),s()}function s(){r.querySelectorAll("circle").forEach((u,m)=>{m===t?u.setAttribute("fill","#FF00FF"):u.setAttribute("fill","#DDDDDD")})}i.addEventListener("click",n),l.addEventListener("click",c),e(t),s()});
