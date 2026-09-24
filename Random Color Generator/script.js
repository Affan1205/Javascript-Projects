const colorContainer = document.querySelector(".colors-container");
const btn = document.querySelector(".btn");
//Intial
generateRandomBox();

btn.addEventListener("click", function () {
  generateRandomBox();
});

function generateRandomBox() {
  colorContainer.innerText = "";
  for (let i = 0; i < 30; i++) {
    let divcolorItem = document.createElement("div");
    divcolorItem.className = "colorItem";
    colorContainer.appendChild(divcolorItem);
  }
  generateColor();
}

function generateColor() {
  const colorItem = document.querySelectorAll(".colorItem");
  colorItem.forEach((element) => {
    let rgb = `${generateRandomInteger(0, 256)},${generateRandomInteger(0, 256)},${generateRandomInteger(0, 256)}`;
    element.style.backgroundColor = `rgb(${rgb})`;
    element.innerText = `RGB(${rgb})`;
  });
}
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min));
}
