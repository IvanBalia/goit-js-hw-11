import { refs } from "./refs"

export function loadMoreVisibility(response) {
    if (response.length === 0) { return } else { refs.loadMoreButton.classList.remove('not-active');
refs.loadMoreButton.classList.add('active')}
}