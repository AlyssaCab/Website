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

