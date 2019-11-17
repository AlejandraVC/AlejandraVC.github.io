
// Go To Top
 // When the user scrolls down 500px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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


// Open/Close Contact Form Modal
function openContactForm() {
  let contactForm = document.getElementById("contact-me-form");
  if (contactForm.style.display !== "block") {
    contactForm.style.display = "block";
    document.body.style.overflowY = "hidden";
  } else {
    contactForm.style.display = "none";
    document.body.style.overflowY = "scroll";
  }  
} 

//Validate Contact Form content
function validate(){
  const name = document.getElementById("contact-name").value;
  const subject = document.getElementById("contact-subject").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  let errorMessage = document.getElementById("error_message");
  
  errorMessage.style.padding = "10px";
  
  let text;

  if(name.length === 0){
    text = "PLEASE ENTER A VALID NAME";
    errorMessage.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "PLEASE ENTER A VALID EMAIL";
    errorMessage.innerHTML = text;
    return false;
  }

  if(subject.length < 3){
    text = "PLEASE ENTER A VALID SUBJECT";
    errorMessage.innerHTML = text;
    return false;
  }

  if(message.length <= 20){
    text = "PLEASE ENTER A VALID MESSAGE";
    errorMessage.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!");
  errorMessage.style.display = "none";
  openContactForm();
  return true;
}