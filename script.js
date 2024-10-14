const slider = document.getElementById('slider');
let currentIndex = 0;

// Array de nombres de las fotos (actualiza las rutas para que apunten a la carpeta img)
const photos = [];
const texts = [
    "Tu sonrisa que me ilumina y me hace feliz.",
    "Lo bien que lo paso contigo siempre haciendo cosas divertidas.",
    "Como me cuidas y me alegras el dia todos los dias que te veo.",
    "Que eres una chica super inteligente con la que puedo hablar de todo.",
    "Que me quieres por como soy y haces todo para que yo esté bien.",
    "Que eres super detallista conmigo.",
    "Que te preocupas por mi y te esfuerzas por siempre saber lo que hago.",
    "Que me acompañas de viaje por todo el mundo y eres mi passenger princess.",
    "Que sabes calmarme cuando me pongo nervioso.",
    "Que me das todo tu amor todos los dias.",
    "Que siempre estas conmigo aunque tengamos que hacer algo que no te apetece.",
    "Por dar tu tiempo por mi, quedarte despierta cuando llego tarde o arreglarte con mis horarios para estar juntos.",
    "Por creer en mi y apoyarme siempre."
];

// Generar nombres de archivos de fotos con la nueva ruta
for (let i = 1; i <= 13; i++) {
    photos.push(`foto${i}.jpg`); // Ahora las imágenes están en la carpeta img
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
}, 4500);

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
