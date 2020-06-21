import { Component, OnInit, HostListener } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public innerWidth: number
  public isMobile: boolean

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth
    this.innerWidth < 640 ? (this.isMobile = true) : (this.isMobile = false)
    console.log(this.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth
    this.innerWidth < 640 ? (this.isMobile = true) : (this.isMobile = false)
    console.log(this.innerWidth)
  }
}
