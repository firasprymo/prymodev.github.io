import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.addHoverOnSelected();
  }

  addHoverOnSelected(): any {
    const list = document.querySelectorAll('.navigation li');
    list.forEach((item) => {
      item.addEventListener('mouseover', () => {
        list.forEach((res) => {
          res.classList.remove('hovered');
          item.classList.add('hovered');
        });
      });
    });
  }
}
