import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const grid = document.querySelector(".gallery");

galleryItems.forEach((img) => {
    grid.insertAdjacentHTML("beforeend", `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`)
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});