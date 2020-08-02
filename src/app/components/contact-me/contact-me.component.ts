import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Open/Close Contact Form Modal
  openContactForm() {
    let contactForm = document.getElementById('contact-me-form')
    let goTopButton = document.getElementById('go-top-button')
    if (contactForm.style.display !== 'block') {
      contactForm.style.display = 'block'
      document.body.style.overflowY = 'hidden'
      goTopButton.style.display = 'none'
    } else {
      contactForm.style.display = 'none'
      document.body.style.overflowY = 'scroll'
    }
  }

  //Validate Contact Form content
  /* validate() {
    const name = document.getElementById('contact-name').value
    const subject = document.getElementById('contact-subject').value
    const email = document.getElementById('contact-email').value
    const message = document.getElementById('contact-message').value
    let errorMessage = document.getElementById('error_message')

    errorMessage.style.padding = '10px'

    let text

    if (name.length === 0) {
      text = 'PLEASE ENTER A VALID NAME'
      errorMessage.innerHTML = text
      return false
    }

    if (email.indexOf('@') == -1 || email.length < 6) {
      text = 'PLEASE ENTER A VALID EMAIL'
      errorMessage.innerHTML = text
      return false
    }

    if (subject.length < 3) {
      text = 'PLEASE ENTER A VALID SUBJECT'
      errorMessage.innerHTML = text
      return false
    }

    if (message.length <= 20) {
      text = 'PLEASE ENTER A VALID MESSAGE (MIN 20CHAR)'
      errorMessage.innerHTML = text
      return false
    }

    // alert('Form Submitted Successfully!');
    errorMessage.style.display = 'none'
    openContactForm()
    return true
  } */
}
