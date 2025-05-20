function toggleMenu() {
  const menu = document.querySelector('.tab-bar');
  const hamburger = document.querySelector('.hamburger');
  const icon = hamburger.querySelector('.icon');

  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    icon.textContent = '×'; // X symbol
    icon.classList.add('close-icon'); // Add class to enlarge
  } else {
    icon.textContent = '☰'; // Hamburger symbol
    icon.classList.remove('close-icon'); // Remove enlarged class
  }
}

function openPopup() {
  document.getElementById("emailPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("emailPopup").style.display = "none";
}

window.onclick = function(event) {
  const popup = document.getElementById("emailPopup");
  if (event.target === popup) {
    closePopup();
  }
};