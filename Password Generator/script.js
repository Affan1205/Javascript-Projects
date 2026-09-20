const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#\$%^&*()_+{}|:<>?-=[];',./~`";

//By Default what are the things already we have to show
//starting mein humein apna project kese dekhna chate ha

let password = ""; //starting mein password empty ha
let passwordLength = 10; //starting mein password ki length
let checkCount = 0;
handleSlider();
setIndicator("#ccc"); //set strength circle to gray intially

function handleSlider() {//yeh function basically silider ki value ko UI mein show karata
  //starting the jo slider ha woh password ki length ke equal honi chaheye that's why => inputSlidervalue=passwordLength kiya
  //varna inputSlider ki value by default zero(0) raheti ha
  inputSlider.value = passwordLength;
  lengthDisplay.textContent = passwordLength;

  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize = ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  //shadow => homework
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  //Yeh mujhe min se max tak ke beech ke value dega,agar sirf yeh krta Math.random() * (max - min)
  //toh mujhe 0 se (max - min) tak value milta esliye min add kiya taaki mujhe min se max value mile
}

function generateRandomNumber() {
  return getRndInteger(0, 10);// 0 to 9
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123)); //number to char(a to z)
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91)); //number to char(A to Z)
}

function generateSymbol() {
  const random = getRndInteger(0, symbols.length);
  return symbols.charAt(random);
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNum = true;
  if (symbolsCheck.checked) hasSym = true;

  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if ((hasUpper || hasLower) && (hasNum || hasSym) && passwordLength >= 6) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value); //using this we can copy the clipboard content
    copyMsg.innertext = "copied";
  } catch (err) {
    copyMsg.innertext = "failed";
  }
  //to make copy wala span visible
  copyMsg.classList.add("active");

  //i want to invisible copy wala span after 2 sec
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

function shufflePassword(array) {
  //fisher yates method
  //Iterate from the last element down to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  //array ko string mein convert kiya
  let str = "";
  array.forEach((el) => {
    str += el;
  });
  return str;
}

function handlecheckBoxChange() {
  //Bascially yeh function kya kr raha ha jese hi koi bhi checkbox (checked ya uncheck hua)
  //hum checkCount -> yaani kitne box check ha usko count krrahe ha
  checkCount = 0;
  //jese hi change hua humne dubara checkkr lia kitne checked ha
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });

  //special case
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handlecheckBoxChange);
});

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  //copy tab krna jab password display khaali na ho , khaali hua toh basically copy krna hi kyu ha
  if (passwordDisplay.value) {
    copyContent();
  }
});

generateBtn.addEventListener("click", () => {
  //none of the checkbox are selected
  if (checkCount <= 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  //let's start the journey  to find new password

  //remove old password
  password = "";

  //let's put the stuff mentioned by checkboxes
  let funcArr = [];
  if (uppercaseCheck.checked) {
    funcArr.push(generateUpperCase);
  }
  if (lowercaseCheck.checked) {
    funcArr.push(generateLowerCase);
  }
  if (numbersCheck.checked) {
    funcArr.push(generateRandomNumber);
  }
  if (symbolsCheck.checked) {
    funcArr.push(generateSymbol);
  }

  //compulsory addition -> jo check hue ha unko daal do
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  //remaining addition -> hume wahi remainging chaheye jo check ha
  //(means agar lowercase and number check hua ha toh woh toh complusory honge lekin jo remainging honge woh bhi inhe ke combination honge)

  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randomIndex = getRndInteger(0, funcArr.length);
    password += funcArr[randomIndex]();
  }
  // shuffle the password
  password = shufflePassword(Array.from(password));

  //show password in ui
  passwordDisplay.value = password;

  //calculate strength
  calcStrength();
});
