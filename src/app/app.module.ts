import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ComponentModule } from './component/component.module';
import {SwiperModule} from 'swiper/angular';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ComponentModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
