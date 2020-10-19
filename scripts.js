backTopBtn = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
}
