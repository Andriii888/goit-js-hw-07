import { galleryItems } from './gallery-items.js';
// Change code below this line
const galaryBoxRef = document.querySelector('.gallery');

function imgValueFromGalleryItems(values) {
    let arrayValues = values.map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${ preview }"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
       `
    }).join('');
    return galaryBoxRef.innerHTML += arrayValues;
}; 
imgValueFromGalleryItems(galleryItems);


galaryBoxRef.addEventListener('click', onZoomClickedImg); 

function onZoomClickedImg(e) { 
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const imgSrc = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src='${imgSrc}' width="800" height="600">
`)
    instance.show();


    const escBox = document.querySelector('.basicLightbox');
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            escBox.remove();
       }
    });
};

