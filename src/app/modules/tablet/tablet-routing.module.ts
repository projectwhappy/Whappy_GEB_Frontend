import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
import { LandingComponent } from './pages/landing/landing.component';
import {NewClientFormComponent} from './pages/new-client-form/new-client-form.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';

const routes: Routes = [
  {
    path: '',
  // redirectTo: 'choose',
    component: TabletComponent,
    children: [
      {
        path: 'events',
        component: ChooseEventComponent,
      },
      {
        path: '',
        component: ChooseStoreComponent,
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'form',
        component: NewClientFormComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletRoutingModule {
}
