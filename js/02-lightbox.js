import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// console.dir(gallery);

gallery.insertAdjacentHTML("afterbegin", createMarkUp(galleryItems));
// gallery.addEventListener("click", handlerClick);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
       </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
