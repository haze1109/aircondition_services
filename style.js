const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let counter = 1;
const size = slides[0].clientWidth;

slider.style.transform = `translateX(${-size * counter}px)`;

setInterval(() => {
  if (counter >= slides.length - 1) return;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
}, 5000);