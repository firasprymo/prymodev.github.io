import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ComponentModule } from './component/component.module';
import {SwiperModule} from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
