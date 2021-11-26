import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentRoutingModule} from './component-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    RouterModule
  ]
})
export class ComponentModule {
}
