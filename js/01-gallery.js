import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// console.dir(gallery);

gallery.insertAdjacentHTML("afterbegin", createMarkUp(galleryItems));
gallery.addEventListener("click", handlerClick);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>
  `
    )
    .join("");
}

function handlerClick(evt) {
  evt.preventDefault();
  const currentImage = evt.target.dataset.source;
  console.dir(currentImage);
  const instance = basicLightbox.create(
    `
    <img src="${currentImage}" width="800" height="600">`,

    //   instance.show(() => console.log("lightbox now visible"));

    {
      onShow: () => {
        window.addEventListener("keydown", closeOnEscClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeOnEscClick);
      },
    }
  );
  if (evt.target !== evt.currentTarget) instance.show();

  function closeOnEscClick(evt) {
    if (evt.code === "Escape") instance.close();
  }
}
