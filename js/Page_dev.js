let currentImageIndex = 0; // Index de l'image courante

function openModal(images, description) {
  // Affiche la modale
  document.getElementById('modal').style.display = 'block';
  
  // Met à jour la description
  document.getElementById('modal-description').innerText = description;
  
  // Met à jour la première image
  changeImage(images[currentImageIndex]);

  // Stocke les images à afficher
  window.images = images;
}

function changeImage(imageSrc) {
  document.getElementById('modal-img').src = imageSrc;
}

function nextImage() {
  // Passer à l'image suivante
  if (currentImageIndex < window.images.length - 1) {
    currentImageIndex++;
    changeImage(window.images[currentImageIndex]);
  }
}

function prevImage() {
  // Retourner à l'image précédente
  if (currentImageIndex > 0) {
    currentImageIndex--;
    changeImage(window.images[currentImageIndex]);
  }
}

function closeModal() {
  // Ferme la modale
  document.getElementById('modal').style.display = 'none';
}

























// Ouvrir la pop-up avec effet fluide
document.getElementById('about-me-btn').addEventListener('click', function() {
  const popup = document.getElementById('about-me-popup');
  popup.style.display = 'block';
  
  // Ajout d'un petit délai pour permettre l'effet d'apparition
  setTimeout(() => {
    popup.classList.add('active');
  }, 10);
});

// Fermer la pop-up
document.getElementById('close-btn').addEventListener('click', function() {
  const popup = document.getElementById('about-me-popup');
  popup.classList.remove('active');

  // Attendre la fin de l'animation avant de cacher la pop-up
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500);
});