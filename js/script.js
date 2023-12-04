const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
