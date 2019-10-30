const projectName = 'portfolio';

function closePopup() {
    let popupWindow = document.getElementById("popup-window");
    if (popupWindow.style.display === "none") {
      popupWindow.style.display = "block";
    } else {
      popupWindow.style.display = "none";
    }
  } 

  function openContactForm() {
    let contactForm = document.getElementById("contact-form");
    if (contactForm.style.display === "none") {
        contactForm.style.display = "block";
      } else {
        contactForm.style.display = "none";
    }  
  } 