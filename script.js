// main elements
const items = document.querySelectorAll(".item");
const item = document.querySelector(".item");
const images = document.querySelectorAll(".images .image");
const images_details = document.querySelector(".image-details");
const layout = document.querySelector(".layout");
const image_src = document.querySelector(".image-details .image img");
const image_name = document.querySelector(".image-name");
const close = document.querySelector(".close");
window.onload = () => {
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
      // check if any image contain shoe or hide calss remove them
      for (let y = 0; y < images.length; y++) {
        if (
          images[y].classList.contains("show") ||
          images[y].classList.contains("hide")
        ) {
          images[y].classList.remove("show");
          images[y].classList.remove("hide");
        }
      }
      if (!items[i].hasAttribute("active")) {
        items[i].classList.add("active");
        // get the dataset value to access the images with this value
        let datasetting = Object.values(items[i].dataset);
        if (datasetting.length === 1) {
          // loop into the images gallery to get the optimal dataset (its an attribute as class attribute)
          for (let x = 0; x < images.length; x++) {
            if (images[x].classList.contains(datasetting)) {
              // add show class into the image gallery
              images[x].classList.add("show");
            } else {
              // remove show class into the image gallery
              images[x].classList.add("hide");
            }
          }
        }
        for (let j = 0; j < items.length; j++) {
          if (items[j] === items[i]) continue;
          else {
            items[j].classList.remove("active");
          }
        }
      }
    };
  }
  // open the image onlick
  for (let k = 0; k < images.length; k++) {
    images[k].onclick = () => {
      layout.style.display = "block";
      images_details.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      image_src.src = images[k].firstChild.src;
      image_name.innerHTML = images[k].firstChild.alt;
      close.onclick = () => {
        layout.style.display = "none";
        images_details.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};
