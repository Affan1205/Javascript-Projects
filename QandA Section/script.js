const showBtn = document.querySelectorAll(".show-btn");
const hideBtn = document.querySelectorAll(".hide-btn");
const answerCard = document.querySelectorAll(".card-answer");

//YEH TAB SAHI CHALTA JAB HUMARE PASS EK HI BUTTON HOTA 
// showBtn.addEventListener("click",()=>{
//     showBtn.classList.add("inactive")
//     hideBtn.classList.add("active")
//     answerCard.classList.add("active")
// })

// hideBtn.addEventListener("click",()=>{
//     hideBtn.classList.remove("active")
//     showBtn.classList.remove("inactive")
//     showBtn.classList.add("active")
//     answerCard.classList.remove("active")
// })

showBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.add("inactive");
    hideBtn[index].classList.add("active");
    answerCard[index].classList.add("active");
  });
});
hideBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.remove("active");
    showBtn[index].classList.remove("inactive");
    showBtn[index].classList.add("active");
    answerCard[index].classList.remove("active");
  });
});
