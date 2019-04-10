import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAccessRoutingModule } from './public-access-routing.module';
import {PublicAccessComponent} from './public-access.component';
import {SharedModule} from '../../shared/shared.module';
import {NewClientFormComponent} from './pages/new-client-form/new-client-form.component';

@NgModule({
  declarations: [
    PublicAccessComponent,
    NewClientFormComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicAccessRoutingModule,
  ]
})
export class PublicAccessModule { }
