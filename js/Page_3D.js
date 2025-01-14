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

























  // Ouvrir la pop-up lorsqu'on clique sur "A propos de moi"
document.getElementById('about-me-btn').addEventListener('click', function() {
    document.getElementById('about-me-popup').style.display = 'block';
  });
  
  // Fermer la pop-up lorsqu'on clique sur le bouton de fermeture
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('about-me-popup').style.display = 'none';
  });