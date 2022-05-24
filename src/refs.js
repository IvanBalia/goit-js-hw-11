export const refs = {
    input: document.querySelector('input'),
    searchButton: document.querySelector('button[type="submit"]'),
    gallery: document.querySelector('.gallery'),
    loadMoreButton: document.querySelector('.load-more'),
    baseUrl: 'https://pixabay.com/api/',
    key: '27624998-a26f51884b94bfc570dbeb835',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page:40,
}