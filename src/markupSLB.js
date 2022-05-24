export function markupSLB(array) {
    return array.map((element) => {
        return `<div class="photo-card">
        <a href=${element.largeImageURL}>
  <img src=${element.webformatURL} alt=${element.tags} loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${element.likes}<span>
    </p>
    <p class="info-item">
      <b>Views</b>
      <span>${element.views}<span>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <span>${element.comments}<span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span>${element.downloads}<span>
    </p>
  </div>
</div>`
    }).join("")
}