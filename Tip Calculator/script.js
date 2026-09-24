const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const calculateBtn = document.querySelector(".btn");
const total = document.querySelector(".total-value");

function calculateAmount() {
  let billamount = parseInt(billInput.value);
  let tippercentage = parseFloat(tipInput.value);
  let calculate = billamount + (tippercentage / 100) * billamount;
  total.innerText = calculate;
}

calculateBtn.addEventListener("click", calculateAmount);
