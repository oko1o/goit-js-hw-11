import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="43833375-8d3f0c892462ae71a1cd36e3a",u=i=>{const r=new URLSearchParams({q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18});return fetch(`${d}?key=${f}&${r}`).then(s=>s.json()).then(s=>(s.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.hits))},g=i=>i.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:o,downloads:m})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${s}">
        <img src="${r}" alt="${l}" />
      </a>
    </div>
    <div class="gallery-item-info">
      <ul class="gallery-item-info-items">
        <li class="gallery-item-info-item">
          <p class="title"><b>Likes</b></p>
          <p class="data">${e}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Views</b></p>
          <p class="data">${t}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Comments</b></p>
          <p class="data">${o}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${m}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const h=document.querySelector("#searchform"),a=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(i){i.preventDefault();const r=i.target.elements.searchinput.value.trim();if(a.innerHTML="",n.classList.remove("is-hidden"),r===""){a.innerHTML="",i.target.reset(),c.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"});return}u(r).then(s=>{a.innerHTML=g(s)}).finally(()=>{i.target.reset(),n.classList.add("is-hidden"),new p(".gallery-item-image a")})}h.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
