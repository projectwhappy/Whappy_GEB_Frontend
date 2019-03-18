import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletRoutingModule } from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';

@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ]
})
export class TabletModule { }
