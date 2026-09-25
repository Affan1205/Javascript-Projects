const userInput = document.querySelector(".userInput");
userInput.value = "";

const buttonText = document.querySelectorAll(".btncalculate");
buttonText.forEach((element) => {
  element.addEventListener("click", (e) => {
    userInput.value = userInput.value + e.target.innerText;
  });
});

const calculate = document.querySelector(".btnequal");
calculate.addEventListener("click", () => {
  let finalCalculate = new Function(`return ${userInput.value}`)();
  userInput.value = finalCalculate;
});

const clearBtn = document.querySelector(".btnc");
clearBtn.addEventListener("click", () => {
  userInput.value = "";
});
