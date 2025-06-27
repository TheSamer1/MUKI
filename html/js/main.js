// Video reverso
const video = document.getElementById('videoMuki');
let isReversing = false;
let reverseInterval;

if (video) {
  video.playbackRate = 0.7;
  video.loop = false; // Desactivar loop normal

  video.addEventListener('ended', () => {
    if (!isReversing) {
      // Inicia simulación de reproducción invertida
      isReversing = true;
      reverseInterval = setInterval(() => {
        if (video.currentTime <= 0) {
          clearInterval(reverseInterval);
          isReversing = false;
          video.play(); // vuelve a reproducir hacia adelante
        } else {
          video.currentTime -= 0.033; // aproximadamente 30 fps
        }
      }, 33);
    }
  });
}

// Menú responsive
const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Cambio de imagen de aretes
const aretesImg = document.querySelector('#aretes img');
const imagenesAretes = [
  'resources/img/arete_1.png',
  'resources/img/arete_2.png'
];

let index = 0;

if (aretesImg) {
  setInterval(() => {
    // Fade out
    aretesImg.style.opacity = 0;

    // Espera el tiempo del fade y luego cambia la imagen
    setTimeout(() => {
      index = (index + 1) % imagenesAretes.length;
      aretesImg.src = imagenesAretes[index];

      // Fade in
      aretesImg.style.opacity = 1;
    }, 300); // tiempo igual a transition del CSS
  }, 5000); // cada 5 segundos
}
