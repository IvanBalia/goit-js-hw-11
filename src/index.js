//встановити залежності npm ci
//встановити бібліотеки axios, notiflix and others
//створити обєкт налаштувань refs: input, search button, cardContainer, params (array of image parametrs), base-url
//написати функцію targetUrl(), яка обєкт настройок в якості аргументу та видає готову строку запиту,
//написати функцію getImagesData, яка повертатиме масив обєктів картинок з даними
//написати функцію notifyIsEmpty, яка прийматиме результат виклику getImagesData
//та викидатиме алерт, якщо масив пустий
//написати функцію markupCards, яка прийматиме масив обєктів та генеруватиме строку розмітки
//написати функцію createLoadMoreButton, яка створюватиме кнопку "показати ще"
//написати функцію renderCards, яка спочатку очищатиме вміст cardContainer прийматиме результат виклику getImagesData
//після чого запускатиме markupCards


import { refs } from "./refs";
import Notiflix from "notiflix";
import axios from "axios";
import { targetUrl } from "./targetUrl";
import { getImagesData } from "./getImagesData";
import { markupCards } from "./markupCards";
import { loadMoreVisibility } from "./loadMoreVisibility";
import { notification } from "./notification";
import SimpleLightbox from "simplelightbox";
import { markupSLB } from "./markupSLB.js";
import "simplelightbox/dist/simple-lightbox.min.css";
import { smothScroll } from "./smoothScroll";
import { isFullyVisible } from "./isFullyVisible";
import { isPartiallyVisible } from "./isPartialyVisible";

const lightbox = new SimpleLightbox('.photo-card a', { overlayOpacity: 0.7 });


refs.loadMoreButton.classList.add('not-active')


refs.input.addEventListener('input', (e) => {
    e.preventDefault();
    refs.q = e.target.value.trim();
    refs.page === 1;
    refs.gallery.innerHTML = '';
    if (refs.loadMoreButton.classList.contains('active')) { refs.loadMoreButton.classList.remove('active');
refs.loadMoreButton.classList.add('not-active')}
    
});

refs.searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (refs.q.length === 0) { return } else { renderCards();
refs.page===1}
});


refs.loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    moreCards();
});

//window.addEventListener('scroll', (e) => {
//    if (isFullyVisible(refs.gallery.lastChild) || isPartiallyVisible(refs.gallery.lastChild)) {
//        moreCards()
//    }
//})




 async function renderCards () {
    refs.gallery.innerHTML = '';
    const request = targetUrl(refs);
    console.log(request);
     const result = await getImagesData(request);
     const response = await result.hits;
    const noti = await notification(result);
    //const markup = await markupCards(response);
     const markup = await markupSLB(response);
     refs.gallery.innerHTML = markup;
     loadMoreVisibility(response);
     lightbox.refresh();
    
     
};

async function moreCards () {
    refs.page += 1;
    const request = targetUrl(refs);
    console.log(request);
     const result = await getImagesData(request);
     const response = await result.hits;
     const markup = await markupSLB(response);
    refs.gallery.insertAdjacentHTML("beforeend", markup);
    loadMoreVisibility(response);
    lightbox.refresh();
    smothScroll();
}







