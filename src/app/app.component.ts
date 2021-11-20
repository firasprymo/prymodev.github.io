import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'monportfolio';
  ngOnInit(): void {
    this.scrollUp();
  }

  scrollUp() {
    window.addEventListener('scroll', () => {
      const scrollUp = document.getElementById('scroll-up');

      // When the scroll is higher than 560 viewport height, add the show-scroll class
      if (scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    });
  }

}
