import Notiflix from "notiflix";

export function notification(result) {
    if (result.hits.length === 0) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
    } else {Notiflix.Notify.success(`Hooray! We found ${result.totalHits} images.`)}
}