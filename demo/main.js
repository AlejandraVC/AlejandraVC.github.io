const projectName = 'portfolio';

//DISABLE SCROLLING WHEN PAGE OPENS
//for under construction popup
window.onload = function () { 
  document.body.style.overflowY = "hidden";
}
    
//CLOSE UNDER CONSTRUCTION POPUP
function closePopup() {
  let popupWindow = document.getElementById("popup-window");
  if (popupWindow.style.display === "none") {
    popupWindow.style.display = "block";
  } else {
    popupWindow.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
} 

//OPEN/CLOSE CONTACT FORM POPUP
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

 //VALIDATE CONTACT FORM
 function validate(){
  let name = document.getElementById("contact-name").value;
  let subject = document.getElementById("contact-subject").value;
  let email = document.getElementById("contact-email").value;
  let message = document.getElementById("contact-message").value;
  let error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  let text;
  if(name.length < 3){
    text = "Please enter a valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter a valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 3){
    text = "Please enter a valid Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 20){
    text = "Please enter a valid Message";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  error_message.style.display = "none";
  openContactForm();
  return true;
}

//DISABLE SCROLLING WHEN PAGE OPENS
// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
const targetElement = document.getElementById("popup-window");
const targetElement_2 = document.getElementById("contact-form");
// 2. ...in some event handler after showing the target element...disable body scroll
bodyScrollLock.disableBodyScroll(targetElement);
bodyScrollLock.disableBodyScroll(targetElement_2);
 
// 3. ...in some event handler after hiding the target element...
bodyScrollLock.enableBodyScroll(targetElement);
bodyScrollLock.enableBodyScroll(targetElement_2);
 
// 4. Useful if we have called disableBodyScroll for multiple target elements,
// and we just want a kill-switch to undo all that.
bodyScrollLock.clearAllBodyScrollLocks();