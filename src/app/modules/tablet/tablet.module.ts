import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletRoutingModule } from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EventManagerComponent } from './pages/event-manager/event-manager.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
    LandingComponent,
    EventManagerComponent,
    CardStoreComponent,
    CountdownComponent,
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ]
})
export class TabletModule { }
