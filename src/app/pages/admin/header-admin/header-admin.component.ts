import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  menuToggle(): any {
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const main = document.querySelector('.main');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    toggle.classList.toggle('active');
  }
}
