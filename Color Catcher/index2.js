const btn = document.getElementById("btn");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const targetColorDisplay = document.getElementById("target-color");
const grid = document.getElementById("grid");

btn.addEventListener("click", startGame);

let score = 0;
let time = 30;
let timer;
let colors = [
  "red",
  "orange",
  "blue",
  "green",
  "black",
  "gray",
  "hotpink",
  "purple",
  "white",
  "yellow",
  "lightgreen",
  "maroon",
  "khaki",
  "brown",
  "navy",
  "aqua",
];
function shuffleArray(colors) {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    //swap
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }
  return colors;
}
function handleClick(color) {
  if (color === targetColor) {
    score++;
    scoreDisplay.textContent = score;
    createGrid();
  }
}
function createGrid() {
  //random target color
  targetColor = colors[Math.floor(Math.random() * 16)];
  targetColorDisplay.textContent = targetColor;

  //creating grid using js
  //grid mujhe haar baar alag chahe toh mujhe unko shuffle krna hoga
  grid.innerHTML = "";
  colors = shuffleArray(colors);
  colors.forEach(function (color) {
    const box = document.createElement("div");
    box.className = "box-container";
    box.style.background = color;
    box.addEventListener("click", function () {
      handleClick(color);
    });
    grid.appendChild(box);
  });
}
function startGame() {
  score = 0;
  time = 30;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  createGrid();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      alert("Time is up!!!1");
    }
  }, 1000);
}
