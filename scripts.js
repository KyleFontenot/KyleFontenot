const backTopBtn = document.getElementById("backToTop");
const secEducation = document.getElementById("sectionEducation");
// const secEducation = document.getElementById("sectionEducation");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
}

function showSec(domSection) {
  domSection.style.height = "100%";
  domSection.style.display = "block";

}
