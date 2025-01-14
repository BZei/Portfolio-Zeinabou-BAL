// Ouvrir la pop-up lorsqu'on clique sur "A propos de moi"
document.getElementById('about-me-btn').addEventListener('click', function() {
  document.getElementById('about-me-popup').style.display = 'block';
});

// Fermer la pop-up lorsqu'on clique sur le bouton de fermeture
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('about-me-popup').style.display = 'none';
});