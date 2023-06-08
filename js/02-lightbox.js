import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");


const makeMurkup = () => {

    const murkup = galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    }).join("");
    return murkup;
}
galleryRef.insertAdjacentHTML('afterbegin', makeMurkup());
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
    captionPosition: 'top',
  });