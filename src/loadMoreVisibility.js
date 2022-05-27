import { refs } from "./refs"

export function loadMoreVisibility(response) {
    const isActive = refs.loadMoreButton.classList.contains('active');
    if (response.length < refs.per_page * refs.page) { 
        if (isActive) { refs.loadMoreButton.classList.remove('active');
refs.loadMoreButton.classList.add('not-active')} else {return}
     } else { refs.loadMoreButton.classList.remove('not-active');
refs.loadMoreButton.classList.add('active')}
}

