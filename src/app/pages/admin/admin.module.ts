import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {CardsComponent} from './cards/cards.component';
import {ContentComponent} from './content/content.component';
import {HeaderAdminComponent} from './header-admin/header-admin.component';


@NgModule({
  declarations: [HeaderAdminComponent, SidemenuComponent, CardsComponent, ContentComponent],
  exports: [
    SidemenuComponent,
    CardsComponent,
    ContentComponent,
    HeaderAdminComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
