import{i}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const a=document.querySelector("form"),[l,d]=a.elements;document.querySelector(".gallery");const u=new URLSearchParams({key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0});a.onsubmit=async n=>{n.preventDefault(),fetch(`https://pixabay.com/api/?${u}&q=${l.value}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&i.error()}).catch(t=>{console.log(t)})};i.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});
//# sourceMappingURL=commonHelpers.js.map
