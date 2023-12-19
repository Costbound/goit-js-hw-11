import{i as c,S as d}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f=document.querySelector("form"),[p]=f.elements,n=document.querySelector(".gallery");c.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});const h=new d(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.createElement("span");l.classList.add("loader");const g=new URLSearchParams({key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0});f.addEventListener("submit",async i=>{i.preventDefault(),n.innerHTML="",n.append(l);const t=await y(`https://pixabay.com/api/?${g}&q=${p.value}`),r=w(t);n.insertAdjacentHTML("beforeend",r.join(" ")),h.refresh(),l.remove()});function y(i){return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits.length===0?c.error():(n.innerHTML="",n.append(l),t.hits)).catch(t=>console.log(t))}function w(i){return i.map(t=>{const{largeImageURL:r,webformatURL:a,tags:e,likes:s,views:o,comments:m,downloads:u}=t;return`<li class="gallery-item">
            <div class="img-wrapper">
              <a href="${r}">
                  <img
                    class="gallery-img"
                    src="${a}" 
                    alt="${e}"
                    width="360"
                    height="200">
              </a> 
            </div>
            <div class="text-wrapper">
              <ul class="img-info-list">
                <li class="info-item">
                  <h3 class="info-title">likes</h3>
                  <p class="info-text">${s}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">views</h3>
                  <p class="info-text">${o}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">comments</h3>
                  <p class="info-text">${m}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">downloads</h3>
                  <p class="info-text">${u}</p>
                </li>
              </ul>
            </div>
        </li>`})}
//# sourceMappingURL=commonHelpers.js.map
