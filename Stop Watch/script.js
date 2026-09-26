const hour = document.querySelector(".hours-container");
const minutes = document.querySelector(".minutes-container");
const seconds = document.querySelector(".seconds-container");
const miliSeconds = document.querySelector(".miliseconds-container");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

const now = new Date();
now.setHours(0, 0, 0, 0);
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let currentSeconds = now.getSeconds();
let currentMiliseconds = now.getMilliseconds();
let timer;

hour.innerText = `0${currentHour}`;
minutes.innerText = `0${currentMinutes}`;
seconds.innerText = `0${currentSeconds}`;
miliSeconds.innerText = `0${currentMiliseconds}`;

startBtn.addEventListener("click", startTimer);

function startTimer() {
  timer = setInterval(() => {
    if (currentMiliseconds <= 100) {
      currentMiliseconds++;
      miliSeconds.innerText = currentMiliseconds;
    } else {
      if (currentSeconds < 60) {
        currentSeconds++;
        seconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
      } else {
        if (currentMinutes < 60) {
          currentMinutes++;
          minutes.innerText = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
        } else {
          if (currentHour < 24) {
            currentHour++;
            hour.innerText = currentHour < 10 ? `0${currentHour}` : currentHour;
          } else {
            currentHour = 0;
            currentHour++;
            hour.innerText = currentHour;
          }
          currentMinutes = 0;
          currentMinutes++;
          minutes.innerText = currentMinutes;
        }
        currentSeconds = 0;
        currentSeconds++;
        seconds.innerText = currentSeconds;
      }
      currentMiliseconds = 0;
      currentMiliseconds++;
      miliSeconds.innerText = currentMiliseconds;
    }
  }, 10);
}

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  now.setHours(0, 0, 0, 0);
  currentHour = now.getHours();
  currentMinutes = now.getMinutes();
  currentSeconds = now.getSeconds();
  currentMiliseconds = now.getMilliseconds();
  hour.innerText = `0${currentHour}`;
  minutes.innerText = `0${currentMinutes}`;
  seconds.innerText = `0${currentSeconds}`;
  miliSeconds.innerText = `0${currentMiliseconds}`; 
});
