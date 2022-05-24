export function targetUrl (array) {
    return `${array.baseUrl}?key=${array.key}&q=${array.q}&image_type=${array.image_type}&orientation=${array.orientation}&safesearch=${array.safesearch}&per_page=${array.per_page}&page=${array.page}`
}