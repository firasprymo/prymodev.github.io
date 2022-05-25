import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,

  ) {
  }

  ngOnInit(): void {
    this.onClick();
    this.gotLink();
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
        console.log(navMenu);
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
  public navigateToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);

  }

}
