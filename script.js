// let textTag = document.querySelector(".section1 h1");
// let text = textTag.textContent;

// let splittedText = text.split(""); //razdvajanje teksta na slova

// for (let i = 0; i < splittedText.lenght; i++) {
//   textTag.innerHTML += `<span>${splittedText[i]}</span>`;
// }

// let k = 0;
// let interval = setInterval(() => {
//   let spans = textTag.querySelectorAll("span");
//   let singleSpan = spans[k];

//   singleSpan.className = "fadeMovie";
//   k++;

//   if (k === spans.lenght) {
//     clearInterval(interval);
//   }
// }, 1000);

let border = document.querySelector(".border-line");
let animationWidth = 0;

window.onscroll = () => {
  if (this.oldScrool > this.scrollY) {
    animationWidth -= 1;
  } else {
    animationWidth += 1;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + "%";
  this.oldScrool = this.scrollY;

  let sectionForAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  console.log(sectionPosition);

  console.log(screenPosition);

  let leftImage = document.querySelector(".slideFromLeft");
  let rightImage = document.querySelector(".slideFromRight");

  if (sectionPosition < screenPosition) {
    leftImage.classList.add("animated");
    rightImage.classList.add("animated");
  }
};
