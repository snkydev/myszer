// Funkcja do losowania zdjęcia
function getRandomImage() {
  // Pobieranie listy zdjęć z folderu 'myszery'
  const images = [
    'myszery/mysz1.jpg',
    'myszery/mysz2.jpg',
    'myszery/mysz3.jpg',
    'myszery/mysz4.jpg',
    'myszery/mysz5.jpg'
  ];

  // Losowanie jednego zdjęcia
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Funkcja, która ustawia losowe zdjęcie
function setRandomImage() {
  const imgElement = document.getElementById('mysz-image');
  const randomImage = getRandomImage();
  imgElement.src = randomImage;
}

// Inicjalizacja pierwszego zdjęcia przy załadowaniu strony
window.onload = setRandomImage;

// Obsługa kliknięcia przycisku "Wylosuj Myszera"
document.getElementById('randomize-btn').addEventListener('click', setRandomImage);
