const userScoreDisplay = document.querySelector(".userScore");
const computerScoreDisplay = document.querySelector(".computerScore");
let userScore = 0;
let computerScore = 0;
displayScore();

function displayScore() {
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorBtn");

let moveArr = [rockBtn, paperBtn, scissorBtn];

//randomly computer have to select move initially

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min));
}
let computerMove = moveArr[generateRandomInteger(0, moveArr.length)];

rockBtn.addEventListener("click", function () {
  checkResult(rockBtn);
  computerMove = moveArr[generateRandomInteger(0, moveArr.length)];
});
paperBtn.addEventListener("click", () => {
  checkResult(paperBtn);
  computerMove = moveArr[generateRandomInteger(0, moveArr.length)];
});
scissorBtn.addEventListener("click", () => {
  checkResult(scissorBtn);
  computerMove = moveArr[generateRandomInteger(0, moveArr.length)];
});

function checkResult(clickMove) {
  const resultDisplay = document.querySelector(".result-text");
  if (computerMove === clickMove) {
    resultDisplay.innerText = "It's Tie!";
  } else {
    if (computerMove === rockBtn && clickMove === scissorBtn) {
      resultDisplay.innerText = "Computer Won , Rock beats Scissor!";
      computerScore++;
      displayScore();
    } else if (computerMove === rockBtn && clickMove === paperBtn) {
      resultDisplay.innerText = "You Won, Papper beats rock!";
      userScore++;
      displayScore();
    } else if (computerMove === paperBtn && clickMove === rockBtn) {
      resultDisplay.innerText = "Computer Won , Papper beats rock!";
      computerScore++;
      displayScore();
    } else if (computerMove === paperBtn && clickMove === scissorBtn) {
      resultDisplay.innerText = "You Won , Scissor beat paper!";
      userScore++;
      displayScore();
    } else if (computerMove === scissorBtn && clickMove === rockBtn) {
      resultDisplay.innerText = "You Won , Rock beat scissor!";
      userScore++;
      displayScore();
    } else if (computerMove === scissorBtn && clickMove === paperBtn) {
      resultDisplay.innerText = "Computer Won , scissor beat paper!";
      computerScore++;
      displayScore();
    }
  }
}
