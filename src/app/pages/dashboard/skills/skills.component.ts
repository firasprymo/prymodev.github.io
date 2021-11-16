import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.openSkills();
  }
  openSkills(): any {
    const skillsContent = document.getElementsByClassName('skills__content');
    const skillsHeader = document.querySelectorAll('.skills__header');
    skillsHeader.forEach((el) => {
      el.addEventListener('click', () => {
        const itemClass = el.parentElement.className;
        for (let i = 0; i < skillsContent.length; i++) {
          skillsContent[i].className = 'skills__content skills__close';
        }
        if (itemClass === 'skills__content skills__close') {
          el.parentElement.className = 'skills__content skills__open';
        }
      });
    });
  }

}
