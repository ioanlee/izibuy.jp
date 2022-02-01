

document.addEventListener('DOMContentLoaded', function() {
  const pageWidth = document.body.clientWidth;
  const mobileWidth = 1024

  if (pageWidth > mobileWidth) {

    let slideIndex = 0;
    let slideIndexCurrent = 0;
    showSlides();

    function currentSlide(n) {
      showSlidesCurrent(slideIndexCurrent = n);
    }

    function currentSlide(n) {
      showSlidesCurrent(slideIndexCurrent = n);
    }

    function showSlidesCurrent(n) {
      
      let i;
      let slides = document.getElementsByClassName("carousel__item");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndexCurrent = 1}   

      if (n < 0) {slideIndexCurrent = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndexCurrent-1].style.display = "block";  
      dots[slideIndexCurrent-1].className += " active";
      slideIndexCurrent++;
    }

    function showSlides() {

      let i;
      let slides = document.getElementsByClassName("carousel__item");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";

      setTimeout(showSlides, 5000); // Change image every x seconds
    }
  }

})


