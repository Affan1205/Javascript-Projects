const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

const now = new Date();
now.setHours(0, 24, 60);
let currentMinutes = now.getMinutes();
let currentSeconds = now.getSeconds();
let timer;
minutes.innerText = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
seconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

startBtn.addEventListener("click", startTimer);
function startTimer() {
  timer = setInterval(() => {
    if (currentSeconds > 0) {
      currentSeconds--;
      seconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
    } else {
      if (currentMinutes > 0) {
        currentMinutes--;
        minutes.innerText = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
      } else {
        alert("time up");
        clearInterval(timer);
      }
      currentSeconds = 59;
      currentSeconds--;
      seconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
    }
  }, 1000);
}

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  now.setHours(0, 24, 60);
  currentMinutes = now.getMinutes();
  currentSeconds = now.getSeconds();

  minutes.innerText = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  seconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
});
