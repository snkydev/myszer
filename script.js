function getRandomImage() {
  const images = [
    'myszery/mysz1.jpg',
    'myszery/mysz2.jpg',
    'myszery/mysz3.jpg',
    'myszery/mysz4.jpg',
    'myszery/mysz5.jpg',
    'myszery/mysz6.jpg',
    'myszery/mysz7.jpg',
    'myszery/mysz8.jpg',
    'myszery/mysz9.jpg',
    'myszery/mysz10.jpg',
    'myszery/mysz11.jpg',
    'myszery/mysz12.jpg',
    'myszery/mysz13.jpg'
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function setRandomImage() {
  const imgElement = document.getElementById('mysz-image');
  const randomImage = getRandomImage();
  imgElement.src = randomImage;
}

let discoInterval;
function toggleDiscoMode() {
  if (document.getElementById('disco-mode').checked) {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    discoInterval = setInterval(() => {
      document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }, 200);
  } else {
    clearInterval(discoInterval);
    document.body.style.backgroundColor = '#f5f5f5';
  }
}

window.onload = () => {
  setRandomImage();
  document.getElementById('disco-mode').checked=false;
}

document.getElementById('randomize-btn').addEventListener('click', setRandomImage);
document.getElementById('disco-mode').addEventListener('change', toggleDiscoMode);