import { gsap } from "gsap";

// GSAP IMAGE MOVE IN //
gsap.from("img", { duration: 3, x: 300, opacity: 0, scale: 0.5 });

const logo = document.querySelector(".logo-heading");
const funButton = document.querySelector(".btn");

// LOAD EVENT //
window.addEventListener("load", (event) => {
  console.log("let the fun begin!");
});

// MOUSE OVER & TIME OUT //
logo.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "hot pink";
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// CLICK COUNTER //
funButton.addEventListener("click", (event) => {
  funButton.textContent = `Fun Count: ${event.detail}`;
});

// WHEEL EVENT //
function zoom(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    scale *= event.deltaY * -1;
  } else {
    scale /= event.deltaY * 1;
  }
  scale = Math.min(Math.max(0.125, scale), 4);
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector(".footer");
document.onwheel = zoom; //5.keydown

const bod = document.querySelector("body");
bod.addEventListener("keydown", (event) => {
  event.target.style.color = "hotPink";
  event.target.style.backgroundColor = "red";
});

// MOUSE OVER //
const busImg = document.querySelector("img:nth-of-type(1)");
busImg.classList.add("bus");
busImg.addEventListener("mouseover", (event) => {
  busImg.setAttribute(
    "src",
    "https://images.squarespace-cdn.com/content/v1/59f76c9af14aa1219138e485/1567785899419-C4HZG3QUY17I688NNTP7/Dog+the+Bounty+Hunter+Slim.jpg?format=1000w"
  );
});

// MOUSE LEAVE //
busImg.addEventListener("mouseleave", (event) => {
  busImg.setAttribute(
    "src",
    "https://www.cesarsway.com/wp-content/uploads/2019/11/skateboarding-dog-rowdy-thumb-large.jpg"
  );
});

// KEYUP //
const bodUp = document.querySelector("body");
bodUp.addEventListener("keyup", (event) => {
  event.target.style.color = "pink";
  event.target.style.backgroundColor = "blue";
});

// CLICK //
const fontChange = document.querySelector("h2");
fontChange.addEventListener("click", (event) => {
  event.target.style.fontFamily = "Comic Sans MS";
});
