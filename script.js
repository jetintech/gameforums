
const slider = document.getElementById('slider');
const images = [
  'bg8.webp',
  'bg10.webp',
  'bg12.jpg'
];
let current = 0;
function changeBackground() {
  slider.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
  
}
changeBackground();
setInterval(changeBackground, 5000);
const bgImages = [
  'ng13.webp',
  'bg6.webp',
  'bg5.jpg',
  'bg4.jpg',
  'bg8.webp'
];

let currentBg = 0;
const bgContainer = document.querySelector('.background-rotator');

function rotateBackground() {
  currentBg = (currentBg + 1) % bgImages.length;
  bgContainer.style.backgroundImage = `url(${bgImages[currentBg]})`;
}
setInterval(rotateBackground, 6000);
bgContainer.style.backgroundImage = `url(${bgImages[0]})`;

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(s => s.style.display = "none");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
}
setInterval(showSlides, 6000);
slides[0].style.display = "block";

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('confirmation').classList.remove('hidden');
  event.target.reset();
}
