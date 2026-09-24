const countValue = document.querySelector("#counter");
const incBtn = document.querySelector("#incBtn");
const decBtn = document.querySelector("#decBtn");
const resetBtn = document.querySelector("#reset");

incBtn.addEventListener("click", function () {
  //get the value form UI
  let value = parseInt(countValue.textContent);
  //update the value
  value = value + 1;
  //set the value onto UI
  countValue.textContent = value;
});
decBtn.addEventListener("click", function () {
  //get the value form UI
  let value = parseInt(countValue.textContent);
  //update the value
  value = value - 1;
  //set the value onto UI
  countValue.textContent = value;
});
resetBtn.addEventListener("click", function () {
  let value = parseInt(countValue.textContent);
  value = 0;
  countValue.textContent = value;
});
