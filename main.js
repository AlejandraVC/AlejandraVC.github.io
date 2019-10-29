function closePopup() {
  let popupWindow = document.getElementById("popup-window");
  if (popupWindow.style.display === "none") {
    popupWindow.style.display = "block";
  } else {
    popupWindow.style.display = "none";
  }
} 