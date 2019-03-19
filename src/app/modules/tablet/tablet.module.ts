import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletRoutingModule } from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
<<<<<<< HEAD
import { LandingComponent } from './pages/landing/landing.component';
import { Landing1Component } from './pages/landing1/landing1.component';
import { Landing11Component } from './pages/landing11/landing11.component';
=======
import { EventManagerComponent } from './pages/event-manager/event-manager.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
>>>>>>> featureNegozio

@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
<<<<<<< HEAD
    LandingComponent,
    Landing1Component,
    Landing11Component,
=======
    EventManagerComponent,
    CardStoreComponent,
>>>>>>> featureNegozio
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ]
})
export class TabletModule { }
