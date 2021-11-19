import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.showQualification();

  }

  showQualification(): any {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');
    console.log(tabs);
    tabs.forEach((tab: any) => {
      const datas = tab.dataset.target;
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');
        tabs.forEach(tabb => {
          tabb.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
      });
    });
  }

}
