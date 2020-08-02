/* tslint:disable */
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  state = {}
  carouselList = document.querySelector('.carousel__list')
  carouselItems = document.querySelectorAll('.carousel__item')
  elems = Array.from(this.carouselItems)

  constructor() {}

  ngOnInit() {
    this.carouselList.addEventListener('click', function (event) {
      let newActive = <HTMLElement>event.target
      let isItem = newActive.closest('.carousel__item')

      if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return
      }

      this.update(newActive)
    })
  }

  /* 
  update(newActive) {
    const newActivePos = newActive.dataset.pos

    const current = this.elems.find((elem) => elem.dataset.pos == 0)
    const prev = this.elems.find((elem) => elem.dataset.pos == -1)
    const next = this.elems.find((elem) => elem.dataset.pos == 1)
    const first = this.elems.find((elem) => elem.dataset.pos == -2)
    const last = this.elems.find((elem) => elem.dataset.pos == 2)

    current.classList.remove('carousel__item_active')
    ;[current, prev, next, first, last].forEach((item) => {
      let itemPos = item.dataset.pos

      item.dataset.pos = this.getPos(itemPos, newActivePos) 
  }

  getPos(current, active) {
    const diff = current - active

    if (Math.abs(current - active) > 2) {
      return -current
    }

    return diff
  }

})  
}
*/
}
