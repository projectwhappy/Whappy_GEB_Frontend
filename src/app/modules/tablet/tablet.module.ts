import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletRoutingModule } from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    TabletComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    TabletRoutingModule
  ]
})
export class TabletModule { }
