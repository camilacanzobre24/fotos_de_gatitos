const API_URL = 'https://api.thecatapi.com/v1/images/search';
const catImage = document.getElementById('cat-image');
const newCatBtn = document.getElementById('new-cat-btn');

// Función para obtener foto de gatito
async function fetchCatImage() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('No se pudo cargar la imagen');

    const data = await response.json();
    catImage.src = data[0].url; 
  } catch (error) {
    console.error(error);
    catImage.alt = 'Error al cargar la imagen';
  }
}

// Cargar la primera imagen de gatito
fetchCatImage();

// Asociar la función al botón para obtener una nueva foto
newCatBtn.addEventListener('click', fetchCatImage);
