import{a as f,S as m,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="Your_API_KEY",p="https://pixabay.com/api/";async function y(s){return(await f.get(p,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new m(".gallery a",{captions:!0,captionDelay:250});function h(s){const o=s.map(r=>` <li class="gallery-item"> <a class="gallery-link" href="${r.largeImageURL}"> <img
class="gallery-image"
src="${r.webformatURL}"
alt="${r.tags}"
/>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${r.likes}
          </p>

          <p class="info-item">
            <b>Views</b>
            ${r.views}
          </p>

          <p class="info-item">
            <b>Comments</b>
            ${r.comments}
          </p>

          <p class="info-item">
            <b>Downloads</b>
            ${r.downloads}
          </p>
        </div>
      </a>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=l.elements["search-text"].value.trim();o!==""&&(b(),L(),y(o).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}).catch(r=>{a.error({message:"Something went wrong. Please try again later."}),console.error(r)}).finally(()=>{v()}))});
//# sourceMappingURL=index.js.map
