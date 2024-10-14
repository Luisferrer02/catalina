const slider = document.getElementById('slider');
let currentIndex = 0;

// Array de nombres de las fotos (actualiza las rutas para que apunten a la carpeta img)
const photos = [];
const texts = [
    "Eres mi primer pensamiento al despertar.",
    "Tu sonrisa ilumina mis días.",
    "Eres mi razón de ser.",
    "Cada momento contigo es un regalo.",
    "Te amo más que a nada en este mundo.",
    "Contigo, cada día es especial.",
    "Eres la estrella que ilumina mi vida.",
    "Nuestro amor es eterno.",
    "Eres mi sueño hecho realidad.",
    "Siempre estaré a tu lado.",
    "Juntos, hacemos la mejor pareja.",
    "Te elijo hoy y siempre.",
    "Gracias por ser tú."
];

// Generar nombres de archivos de fotos con la nueva ruta
for (let i = 1; i <= 13; i++) {
    photos.push(`img/foto${i}.jpg`); // Ahora las imágenes están en la carpeta img
}

// Crear el HTML para el slider
photos.forEach((photo, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = photo; // Usa la ruta correcta de las imágenes
    img.alt = `Foto ${index + 1}`;

    const caption = document.createElement('p');
    caption.classList.add('caption');
    caption.textContent = texts[index];

    slide.appendChild(img);
    slide.appendChild(caption);
    slider.appendChild(slide);
});

// Función para mostrar la diapositiva actual
function showSlide(index) {
    if (index >= photos.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = photos.length - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Intervalo para cambiar de imagen cada 3 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

// Swipe para dispositivos móviles
let startX = 0;
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        showSlide(currentIndex + 1);
    } else if (startX < endX - 50) {
        showSlide(currentIndex - 1);
    }
});
