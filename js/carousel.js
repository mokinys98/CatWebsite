const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let index = 0;

// Funkcija atnaujina karusel?s pozicij?
function updateCarousel() {
  const width = images[0].clientWidth;
  imagesContainer.style.transform = `translateX(-${index * width}px)`;
}

// Rodyti sekant? paveiksl?l?
function showNextImage() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

// Mygtukai
document.querySelector('.next').addEventListener('click', () => {
  showNextImage();
  resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
  resetAutoSlide();
});

// Automatinis slinkimas kas 3 sek.
let autoSlide = setInterval(showNextImage, 3000);

// Jei naudotojas paspaud�ia mygtukus, perjungiamas laikas
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNextImage, 3000);
}

// Per lango keitim?
window.addEventListener('resize', updateCarousel);
