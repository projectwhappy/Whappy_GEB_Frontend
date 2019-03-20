import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EventManagerComponent } from './pages/event-manager/event-manager.component';

const routes: Routes = [
  {
    path: '',
  //redirectTo: 'choose',
    component: TabletComponent,
    children:[
      {
        path: 'event',
        component: EventManagerComponent,
      },
      {
        path: '',
        component: ChooseStoreComponent,
      },
      {
        path: 'landing',
        component: LandingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletRoutingModule {
}
