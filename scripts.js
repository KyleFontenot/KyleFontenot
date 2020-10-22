const backTopBtn = document.getElementById("backToTop");
const secEducation = document.getElementById("secEducation");
const arrowEducation = document.getElementById("arrowsecEducation");
const secProfessional = document.getElementById("secProfessional");
const arrowProfessional = document.getElementById("arrowsecProfessional");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
}

function showSec(domSection) {
  if (domSection.classList.contains("show")) {
    domSection.classList.remove("show");
  }
  else {
    domSection.classList.add("show");
  }
}

function turnArrow(arrow) {
  if (!arrow.style.transform === "rotate(-45deg);") {
    arrow.style.transform = "rotate(-45deg)"
  }
  else {
    arrow.style.transform = "rotate(45deg)"
  }
}
function turnArrow(arrow) {
  if (arrow.classList.contains("turn")) {
    arrow.classList.remove("turn");
  }
  else {
    arrow.classList.add("turn");
  }
}
