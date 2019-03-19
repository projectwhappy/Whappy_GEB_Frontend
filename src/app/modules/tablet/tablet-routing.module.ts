import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
<<<<<<< HEAD
import { LandingComponent } from './pages/landing/landing.component';
import { Landing1Component } from './pages/landing1/landing1.component';
import { Landing11Component } from './pages/landing11/landing11.component';
=======
import { EventManagerComponent } from './pages/event-manager/event-manager.component';
>>>>>>> featureNegozio

const routes: Routes = [
  {
    path: '',
    component: TabletComponent,
    children:[
      {
        path: '',
        component: EventManagerComponent,
      },
      {
        path: '/chooseStore',
        component: ChooseStoreComponent,
<<<<<<< HEAD
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'landing1',
        component: Landing1Component,
      },
      {
        path: 'landing11',
        component: Landing11Component,
=======

>>>>>>> featureNegozio
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
