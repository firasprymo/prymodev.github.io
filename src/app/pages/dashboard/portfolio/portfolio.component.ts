import {Component, OnInit} from '@angular/core';
import * as Swiper from '../../../../assets/js/swiper-bundle.min';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    this.getSwiper();
  }

  getSwiper() {
    const swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }


}
