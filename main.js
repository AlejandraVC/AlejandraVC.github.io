const projectName = 'portfolio';

window.onload = function () { 
  document.body.style.overflowY = "hidden";
}
    
function closePopup() {
  let popupWindow = document.getElementById("popup-window");
  if (popupWindow.style.display === "none") {
    popupWindow.style.display = "block";
  } else {
    popupWindow.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
} 

function openContactForm() {
  let contactForm = document.getElementById("contact-form");
  if (contactForm.style.display === "none") {
    contactForm.style.display = "block";
    document.body.style.overflowY = "hidden";
  } else {
    contactForm.style.display = "none";
    document.body.style.overflowY = "scroll";
  }  
} 

// GO TO TOP
 // When the user scrolls down 100px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
     document.getElementById("go-top-button").style.display = "block";
   } else {
     document.getElementById("go-top-button").style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }