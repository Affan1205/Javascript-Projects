const btn = document.getElementById("btn");
btn.addEventListener("click", startGame);
let targetColor = "";
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
const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function shuffleArray(colors) {
    for(let i =colors.length -1 ; i>0 ;i--)
    {
      const j = Math.floor(Math.random()*(i+1));
      //swap
      [colors[i],colors[j]]=[colors[j],colors[i]]
    }
    return colors
}
function handleClick(clickColor){
  if(clickColor === targetColor){
    score++;
    scoreDisplay.textContent = score;
    createGrid()//click hone ke baad/match hone baad => grid dubara shuffle hona chaiye 
  }
}
function createGrid() {
  //random color of target
  targetColor = colors[Math.floor(Math.random() * 16)];
  targetColorDisplay.textContent = targetColor;
  grid.innerHTML = ""; //agar phele se kuch ha toh khali krne ke esa kiya
  colors = shuffleArray(colors);//jab bhi grid banega woh humesha shuffle colors mein hoga
  colors.forEach(function (color) {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.addEventListener("click", function () {
      handleClick(color);
    });
    grid.appendChild(box);
  });
}
function startGame() {
  //jab game start hoge toh score aur time dono reset honge
  score = 0;
  time = 30;
  //game start hone pr mujhe score and time show hoga pehle
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  //create grid after staring the game
  createGrid();

  //agar koi timer peeche chal raha ho toh usko bhi clear krna ha
  //harr baar jab game start hoga toh timer bhi reeset hona chaheye
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      alert("⏰Times up ! Your final score " + score);
    }
  }, 1000);
}
