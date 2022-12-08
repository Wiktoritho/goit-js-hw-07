import { galleryItems } from "./gallery-items.js";
// Change code below this line

const grid = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const newDiv = document.createElement("div");
  const newLink = document.createElement("a");
  const newItem = document.createElement("img");

  newDiv.classList.add("gallery__item");
  grid.append(newDiv);
  newLink.classList.add("gallery__link");
  newDiv.append(newLink);
  newItem.classList.add("gallery__image");
  newItem.setAttribute("src", `${image.preview}`);
  newItem.setAttribute("alt", `${image.description}`);
  newItem.setAttribute("data-source", `${image.original}`);
  newLink.append(newItem);
});

grid.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      };
    });
  };
});
