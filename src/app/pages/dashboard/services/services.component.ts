import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.showModalService();
  }

  showModalService(): any {
    const modalViews = document.querySelectorAll('.services__modal');
    const modalBtns = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');

    const modal = modalClick => {
        console.log(modalViews[modalClick]);
        modalViews[modalClick].classList.add('active-modal');
      }
    ;
    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener('click', () => {
        modal(i);
      });
    });
    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove('active-modal');
        });
      });
    });
  }
}
