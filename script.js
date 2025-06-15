
const slider = document.getElementById('slider');
const images = [
  'https://images.unsplash.com/photo-1601933471663-7f9c9d223af1',
  'https://images.unsplash.com/photo-1619011281284-e22e6a0f7a6a',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbe1'
];
let current = 0;
function changeBackground() {
  slider.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);
