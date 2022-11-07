import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryBoxRef = document.querySelector('.gallery');


function imgValueFromGalleryItems(values) {
    let arrayValues = values.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${ preview }" alt="${description}" />
        </a>
        `
    }).join('');
    return galleryBoxRef.innerHTML += arrayValues;
}; 
imgValueFromGalleryItems(galleryItems);

galleryBoxRef = new SimpleLightbox('.gallery a', { 
    scrollZoom: false,
    captionsData: "alt",
    captionDelay: 250,
});
