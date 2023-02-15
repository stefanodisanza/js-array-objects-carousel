const slides = document.querySelectorAll(".slide");
console.log(slides)
      let currentSlide = 0;

      document.querySelector(".next").addEventListener("click", function() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      });

      document.querySelector(".prev").addEventListener("click", function() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + slides.length - 1) % slides.length;
        slides[currentSlide].classList.add("active");
      });

    