import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ComponentModule} from '../../component/component.module';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {ServicesComponent} from './services/services.component';
import {IntroComponent} from './intro/intro.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {SwiperModule} from 'swiper/angular';
import { ContactMe } from './contact-me/contact-me';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProjectInMindComponent } from './project-in-mind/project-in-mind.component';

@NgModule({
  declarations: [
    DashboardComponent,
    QualificationsComponent,
    ServicesComponent,
    IntroComponent, AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactMe,
    TestimonialComponent,
    ProjectInMindComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentModule,
    SwiperModule
  ]
})
export class DashboardModule {
}
