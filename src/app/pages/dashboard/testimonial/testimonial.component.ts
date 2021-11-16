import {Component, OnInit} from '@angular/core';
import * as Swiper from '../../../../assets/js/swiper-bundle.min';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.getSwiper();
  }

  getSwiper() {
    const swiperTestimonial = new Swiper('.testimonial__container', {
      cssMode: true,
      loop: true,
      // grabCursor: true,
      // spaceBetween: 48,
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // dynamicBullets: true,
      },
      // breakpoints: {
      //   568: {slidersPerView: 2}
      // }
    });
  }


}
