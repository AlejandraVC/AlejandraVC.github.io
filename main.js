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

//VALIDATE CONTACT FORM

function validateContactForm()                                    
{ 
    let name = document.forms["contact-form"]["Name"];   
    let email = document.getElementById("contact-email");
    let subject = document.forms["contact-form"]["Subject"];     
    let message = document.getElementById("contact-message");           
    // let email = document.forms["contact-form"]["EMail"];    
    // let message = document.forms["contact-form"]["Message"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "")                                  
    { 
        window.alert("Please enter a subject."); 
        name.focus(); 
        return false; 
    } 

    if (message.value == "")                               
    { 
        window.alert("Please enter your message."); 
        address.focus(); 
        return false; 
    } 
   
    return true; 
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