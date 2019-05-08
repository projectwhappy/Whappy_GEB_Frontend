import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {SharedModule} from '../../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { SendCampaignComponent } from './pages/send-campaign/send-campaign.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS, DateTimeAdapter } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

export const MY_CUSTOM_FORMATS = {
  parseInput: 'll, LT',
  fullPickerInput: 'll, LT',
  datePickerInput: 'll',
  timePickerInput: 'll',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'll',
  monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
  declarations: [
    AdminComponent,
    LogInComponent,
    NavComponent,
    CampaignsComponent,
    TopBarComponent,
    CreateEventComponent,
    SendCampaignComponent,
    EventDetailsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    // BrowserAnimationsModule,
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
export class AdminModule {
}
