const btn1 = document.querySelector(".stepOneBtn");
const btn2 = document.querySelector(".stepTwoBtn");
const btn3 = document.querySelector(".stepThreeBtn");
const image = document.querySelector(".image");
const container1 = document.querySelector(".step1");
const container2 = document.querySelector(".step2");
const container3 = document.querySelector(".step3");

//initial
let currentTab = btn1;
container1.classList.add("active");
image.setAttribute("src", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a8/1a/f6/this-is-from-annapurna.jpg?w=1200&h=1200&s=1");

btn1.addEventListener("click", () => {
  if (currentTab !== btn1) {
    currentTab = btn1;//imp
    if (!container1.classList.contains("active")) {
      container1.classList.add("active");
    }
    container2.classList.remove("active");
    container3.classList.remove("active");

    image.setAttribute("src", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a8/1a/f6/this-is-from-annapurna.jpg?w=1200&h=1200&s=1");
    console.log(" first end");
  }
});

btn2.addEventListener("click", () => {
  if (currentTab !== btn2) {
    currentTab = btn2;
    container1.classList.remove("active");
    container2.classList.add("active");
    container3.classList.remove("active");

    image.setAttribute("src", "https://cdn.britannica.com/96/196396-050-13758154/Chureito-Pagoda-Arakura-Sengen-Shrine-Mount-Fuji.jpg");
    console.log(" second end");
  }
});

btn3.addEventListener("click", () => {
  if (currentTab !== btn3) {
    currentTab = btn3;
    container1.classList.remove("active");
    container2.classList.remove("active");
    container3.classList.add("active");

    image.setAttribute(
      "src",
      "https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0",
    );
    console.log(" third end");
  }
});
