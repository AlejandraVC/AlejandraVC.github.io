import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
/* tslint:disable */
export class WelcomeComponent implements OnInit {
  private typewriter_text: string = 'WEB DEVELOPMENT'
  public typewriter_display: string = ''
  public isTyping: boolean

  constructor() {}

  ngOnInit() {
    this.typingCallback(this)
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length
    let current_length = that.typewriter_display.length
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length]
      setTimeout(that.typingCallback, 200, that)
      this.isTyping = true
    } else {
      that.typewriter_display = 'WEB DEVELOPMENT'
      this.isTyping = false
    }

    console.log(this.isTyping)
  }
}
