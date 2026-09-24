const textInput = document.querySelector(".textInput");
const totalCharacter = document.querySelector(".total-character");
const remainingCharacter = document.querySelector(".remaining-character");

//Initial
let currentLength = textInput.value.length;
let totalCharacterCount = currentLength;
let remainingCharacterCount = 50 - currentLength;
handleCount();

function handleCount() {
  totalCharacter.innerText = totalCharacterCount;
  remainingCharacter.innerText = remainingCharacterCount;
}

textInput.addEventListener("input", function () {
  currentLength = textInput.value.length;
  totalCharacterCount = currentLength;
  remainingCharacterCount = 50 - currentLength;
  handleCount();
});
