const dotsContainer = document.querySelector(".dots");
const btnRight = document.querySelector(".arrow_right");
const btnLeft = document.querySelector(".arrow_left");
const imgSlide = document.querySelector(".banner-img");
const tagSlide = document.querySelector("#banner p");

let index = 0;
let lastIndex = 0;

imgCreate();
dotCreate();

btnRight.addEventListener("click", rightClick);
btnLeft.addEventListener("click", leftClick);

function dotCreate() {
  for (i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

    if (i === slides.length - 1) {
      const dotCreate = document.querySelectorAll(".dot");
      dotCreate[index].classList.add("dot_selected");
    }
  }
}

function imgCreate() {
  imgSlide.src = slides[index].image;
}

function switchExec() {
  const slideIndex = slides[index];
  const dotSlide = document.querySelectorAll(".dot");
  dotSlide[index].classList.add("dot_selected");
  dotSlide[lastIndex].classList.remove("dot_selected");
  imgSlide.src = slideIndex.image;
  tagSlide.innerHTML = slideIndex.tagLine;
}

function rightClick() {
  lastIndex = index;
  index++;
  if (index === slides.length) {
    index = 0;
  }
  switchExec();
}

function leftClick() {
  lastIndex = index;
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  switchExec();
}
