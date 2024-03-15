function openImage(element) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = element.getElementsByTagName('img')[0].src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}