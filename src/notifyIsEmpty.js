import Notiflix from "notiflix";

export function notifyIsEmpty(array) {
    if (array.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    } else {return}
}