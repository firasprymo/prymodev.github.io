import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

const scrollY = window.pageYOffset;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.scrollActive();
    this.changeDark();
  }

  scrollActive() {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('.active-link');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('.active-link');
        }
        // console.log(sectionId);
      });
    });
  }


  changeDark() {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // if the validation is fulfiled, we ask what the issue was to know if we activated or deactivated the dark theme
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }
  scrollUp(){
    window.scrollTo(0, 0);
  }
}
