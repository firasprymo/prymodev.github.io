import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.onClick();
    this.gotLink();
    this.changeBgHeader();

  }

  onClick(): any {
    /*====================== MENU SHOW Y HIDDEN =================*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    /*=================== MENu SHOW ==================*/
    /* Validate if contant exist*/
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
    /*=========== MENU HIDDEN =========*/
    /* Validate if contant exist*/
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
    /*=============== REMOVE MENU MOBILE =================*/


  }

  gotLink(): any {
    const navLink = document.querySelectorAll<HTMLElement>('.nav__link');
    navLink.forEach(n => n.addEventListener('click', () => {
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }));
  }
  changeBgHeader() {
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('header');
      // when the scroll is greater than 200 viewport height, add the scroll header class
      if (scrollY >= 80) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    });
  }

}
