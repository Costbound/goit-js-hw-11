import{i as a,S as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const c=document.querySelector("form"),[d]=c.elements,l=document.querySelector(".gallery");a.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});const p=new m(".gallery a",{captionsData:"alt",captionDelay:250}),h=new URLSearchParams({key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0});c.addEventListener("submit",async s=>{s.preventDefault(),l.innerHTML='<span class="loader"></span>';const t=await g(`https://pixabay.com/api/?${h}&q=${d.value}`),r=y(t);l.innerHTML=r.join(" "),p.refresh()});function g(s){return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits.length===0?(l.innerHTML="",a.error()):t.hits).catch(t=>console.log(t))}function y(s){return s.map(t=>{const{largeImageURL:r,webformatURL:n,tags:e,likes:i,views:o,comments:f,downloads:u}=t;return`<li class="gallery-item">
            <div class="img-wrapper">
              <a href="${r}">
                  <img
                    class="gallery-img"
                    src="${n}" 
                    alt="${e}"
                    width="360"
                    height="200">
              </a> 
            </div>
            <div class="text-wrapper">
              <ul class="img-info-list">
                <li class="info-item">
                  <h3 class="info-title">likes</h3>
                  <p class="info-text">${i}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">views</h3>
                  <p class="info-text">${o}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">comments</h3>
                  <p class="info-text">${f}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">downloads</h3>
                  <p class="info-text">${u}</p>
                </li>
              </ul>
            </div>
        </li>`})}
//# sourceMappingURL=commonHelpers.js.map
