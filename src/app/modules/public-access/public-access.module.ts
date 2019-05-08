import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PublicAccessRoutingModule } from './public-access-routing.module';
import {PublicAccessComponent} from './public-access.component';
import {SharedModule} from '../../shared/shared.module';
import {NewClientFormComponent} from './pages/new-client-form/new-client-form.component';
import { OWL_DATE_TIME_LOCALE, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

export const MY_CUSTOM_FORMATS = {
  parseInput: 'll',
  fullPickerInput: 'll',
  datePickerInput: 'll',
  timePickerInput: 'll',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'll',
  monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
  declarations: [
    PublicAccessComponent,
    NewClientFormComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicAccessRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    DatePipe,
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'it'},
    {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS},
  ]
})
export class PublicAccessModule { }
