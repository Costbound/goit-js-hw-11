import{i as c,S as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector("form"),[g]=f.elements,l=document.querySelector(".gallery");c.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});const y=new p(".gallery a",{captionsData:"alt",captionDelay:250}),a=document.createElement("span");a.classList.add("loader");const w=new URLSearchParams({key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0});f.onsubmit=async n=>{n.preventDefault();const r=await fetch(`https://pixabay.com/api/?${w}&q=${g.value}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits.length===0?c.error():(l.innerHTML="",l.append(a),e.hits)).catch(e=>console.log(e));let o=await Promise.all(r.map(async e=>await fetch(e.webformatURL).then(s=>{if(!s.ok)throw new Error(s.status);return s.blob()}).then(s=>s).catch(s=>console.log(s))));r.forEach(e=>{const{largeImageURL:t,tags:s,likes:m,views:u,comments:h,downloads:d}=e;l.insertAdjacentHTML("beforeend",`<li class="gallery-item">
            <div class="img-wrapper">
              <a href="${t}">
                  <img
                    class="gallery-img" 
                    alt="${s}"
                    width="360"
                    height="200">
              </a> 
            </div>
            <div class="text-wrapper">
              <ul class="img-info-list">
                <li class="info-item">
                  <h3 class="info-title">likes</h3>
                  <p class="info-text">${m}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">views</h3>
                  <p class="info-text">${u}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">comments</h3>
                  <p class="info-text">${h}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">downloads</h3>
                  <p class="info-text">${d}</p>
                </li>
              </ul>
            </div>
        </li>`)}),document.querySelectorAll(".gallery-img").forEach((e,t)=>{try{e.src=URL.createObjectURL(o[t])}catch(s){console.log(s)}}),y.refresh(),a.remove()};
//# sourceMappingURL=commonHelpers.js.map
