const image1 = "https://images.unsplash.com/photo-1731307621692-65cb6539e244?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2 = "https://images.unsplash.com/photo-1775204413742-5b8c9d1601d0?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image3 = "https://images.unsplash.com/photo-1681225692736-da34da4c610c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image4 = "https://images.unsplash.com/photo-1706240947500-8c9c21b36baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image5 = "https://images.unsplash.com/photo-1601344582277-6cd748a8cf48?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const image = document.querySelector(".image");
const fwdImg = document.querySelector(".btnForward");
const bckImg = document.querySelector(".btnBackward");
let imgArr = [image1, image2, image3, image4, image5];
let currentImgIndex = 0;
image.setAttribute("src", `${imgArr[currentImgIndex]}`);

fwdImg.addEventListener("click", () => {
  currentImgIndex++;
  if (currentImgIndex < imgArr.length) {
    image.setAttribute("src", `${imgArr[currentImgIndex]}`);
  } else {
    currentImgIndex = 0;
    image.setAttribute("src", `${imgArr[currentImgIndex]}`);
  }
});
bckImg.addEventListener("click", () => {
  currentImgIndex--;
  if (currentImgIndex >= 0) {
    image.setAttribute("src", `${imgArr[currentImgIndex]}`);
  } else {
    currentImgIndex = imgArr.length - 1;
    image.setAttribute("src", `${imgArr[currentImgIndex]}`);
  }
});
