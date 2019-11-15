
// Go To Top
 // When the user scrolls down 300px from the top of the document, show the button
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


// Open/Close Contact Form Modal
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

//Validate Contact Form content
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