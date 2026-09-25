const hourDisplay = document.querySelector(".hour-display");
const minutesDisplay = document.querySelector(".minutes-display");
const secondsDisplay = document.querySelector(".seconds-display");
display();

function display() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  hourDisplay.innerText = hours;
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;

  setInterval(() => {
    display();
  }, 1000);
}
