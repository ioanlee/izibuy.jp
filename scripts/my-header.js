document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const pageWidth = document.body.clientWidth;
  const mobileWidth = 1024;

  if (pageWidth > mobileWidth) {
    window.addEventListener("scroll", function () {
      if (scrollY > 100) {
        header.style.transform = "translateY(-50px)";
        header.style.transition = "0.6s";
      } else {
        header.style.transform = "translateY(0)";
      }
    });
  }
});
