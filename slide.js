document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slide-image');
    let currentSlide = 0;
  
    function showSlide(index) {
      images.forEach(image => {
        image.classList.remove('active');
        image.style.opacity = 0;
      });

      images[index].classList.add('active');
      images[index].style.opacity = 1;
    }
  
    function nextSlide() {
      let index = (currentSlide + 1) % images.length;
      showSlide(index);
      currentSlide = index;
    }

    showSlide(0);
    setInterval(nextSlide, 5000);
  });