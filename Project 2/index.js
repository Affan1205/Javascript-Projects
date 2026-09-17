const sharebtn = document.querySelector("#sharebtn");
const modalDiv = document.querySelector("#modal-div");
const closeBtn = document.querySelector(".close-btn");
sharebtn.addEventListener("click", function () {
  modalDiv.classList.replace("modal", "modal-visible");
});

closeBtn.addEventListener("click", function () {
  modalDiv.classList.replace("modal-visible", "modal");
});
