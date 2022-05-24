export function getImagesData(request) {
    return fetch(request).then(r=>r.json()).catch(error=>console.log(error))
}