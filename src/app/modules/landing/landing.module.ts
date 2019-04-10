import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {LandingComponent} from './landing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {SharedModule} from '../../shared/shared.module';
import {CountdownComponent} from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    CountdownComponent,
    LandingComponent,
    LandingPageComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
