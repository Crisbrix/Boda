function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Función para cambiar el color del vestido
function changeDressColor(color, button) {
  const dressPath = document.getElementById('dress-path');
  const dressBodice = document.querySelector('.dress-bodice');
  const gradient = document.getElementById('dressGradient');
  
  // Crear gradientes elegantes para cada color
  let lightColor, darkColor;
  if (color === '#2C2C2C') { // Negro
    lightColor = '#2C2C2C';
    darkColor = '#1A1A1A';
  } else if (color === '#722F37') { // Vinotinto
    lightColor = '#722F37';
    darkColor = '#5D1A1D';
  } else if (color === '#FFB6C1') { // Rosado Pastel
    lightColor = '#FFB6C1';
    darkColor = '#FF91A4';
  } else if (color === '#ADD8E6') { // Azul Pastel
    lightColor = '#ADD8E6';
    darkColor = '#87CEEB';
  } else if (color === '#808080') { // Gris
    lightColor = '#808080';
    darkColor = '#696969';
  } else if (color === '#191970') { // Azul Oscuro
    lightColor = '#191970';
    darkColor = '#0F0F47';
  }
  
  // Actualizar el gradiente para la falda y el corsé
  gradient.children[0].style.stopColor = lightColor;
  gradient.children[1].style.stopColor = darkColor;
  
  // Remover la clase active de todos los botones
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Agregar la clase active al botón seleccionado
  button.classList.add('active');
  
  // Efecto de animación sutil en todo el vestido
  const dressContainer = document.querySelector('.dress-svg');
  dressContainer.style.transform = 'scale(1.03)';
  setTimeout(() => {
    dressContainer.style.transform = 'scale(1)';
  }, 250);
}

// Función para cambiar el color del traje
function changeTuxedoColor(color, button) {
  const tuxedoGradient = document.getElementById('tuxedoGradient');
  const bowTieGradient = document.getElementById('bowTieGradient');
  
  // Crear gradientes elegantes para cada color del traje
  let lightColor, darkColor, bowTieLight, bowTieDark;
  if (color === '#2C2C2C') { // Negro
    lightColor = '#2C2C2C';
    darkColor = '#1A1A1A';
    bowTieLight = '#1A1A1A';
    bowTieDark = '#000000';
  } else if (color === '#722F37') { // Vinotinto
    lightColor = '#722F37';
    darkColor = '#5D1A1D';
    bowTieLight = '#5D1A1D';
    bowTieDark = '#4A0E12';
  } else if (color === '#4169E1') { // Azul
    lightColor = '#4169E1';
    darkColor = '#2E4BC6';
    bowTieLight = '#2E4BC6';
    bowTieDark = '#1E3A8A';
  } else if (color === '#808080') { // Gris
    lightColor = '#808080';
    darkColor = '#696969';
    bowTieLight = '#696969';
    bowTieDark = '#555555';
  } else if (color === '#191970') { // Azul Oscuro
    lightColor = '#191970';
    darkColor = '#0F0F47';
    bowTieLight = '#0F0F47';
    bowTieDark = '#000033';
  }
  
  // Actualizar el gradiente para el traje
  tuxedoGradient.children[0].style.stopColor = lightColor;
  tuxedoGradient.children[1].style.stopColor = darkColor;
  
  // Actualizar el corbatín
  bowTieGradient.children[0].style.stopColor = bowTieLight;
  bowTieGradient.children[1].style.stopColor = bowTieDark;
  
  // Remover la clase active de todos los botones del traje
  document.querySelectorAll('.tuxedo-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Agregar la clase active al botón seleccionado
  button.classList.add('active');
  
  // Efecto de animación sutil en todo el traje
  const tuxedoContainer = document.querySelector('.tuxedo-svg');
  tuxedoContainer.style.transform = 'scale(1.03)';
  setTimeout(() => {
    tuxedoContainer.style.transform = 'scale(1)';
  }, 250);
}
