import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';

const routes: Routes = [
  {
    path: '',
  // redirectTo: 'choose',
    component: TabletComponent,
    children: [
      {
        path: '',
        component: LogInComponent,
      },
      {
        path: 'events',
        component: ChooseEventComponent,
      },
      {
        path: 'events/:event-code',
        component: EventManagerComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletRoutingModule {
}
