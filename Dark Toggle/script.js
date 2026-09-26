const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");

btn.addEventListener("click", () => {
  if (!wrapper.classList.contains("wrapperchanger")) {
    wrapper.classList.add("wrapperchanger");
    btn.classList.add("btnChanger");
    circle.classList.remove("animationBack");
    circle.classList.add("animation", "circleChanger");
  } else {
    wrapper.classList.remove("wrapperchanger");
    btn.classList.remove("btnChanger");
    circle.classList.remove("animation", "circleChanger");
    circle.classList.add("animationBack");
  }
});
