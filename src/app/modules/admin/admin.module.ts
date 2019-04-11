import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

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
  ]
})
export class AdminModule {
}
