import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {CampaignsComponent} from './pages/campaigns/campaigns.component';
import {CreateEventComponent} from './pages/create-event/create-event.component';
import {SendCampaignComponent} from './pages/send-campaign/send-campaign.component';
import {EventDetailsComponent} from './pages/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: LogInComponent,
      },
      {
        path: 'campaigns',
        component: CampaignsComponent,
      },
      {
        path: 'campaigns/create-event',
        component: CreateEventComponent,
      },
      {
        path: 'campaigns/events/:eventcode',
        component: EventDetailsComponent,
      },
      {
        path: 'send-campaign/:campaign-code',
        component: SendCampaignComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
