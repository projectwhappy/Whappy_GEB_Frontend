import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletRoutingModule } from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
import { EventManagerComponent } from './pages/event-manager/event-manager.component';
import { CardStoreComponent } from './components/card-store/card-store.component';

@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
    EventManagerComponent,
    CardStoreComponent,
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ]
})
export class TabletModule { }
