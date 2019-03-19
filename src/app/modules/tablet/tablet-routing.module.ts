import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Landing1Component } from './pages/landing1/landing1.component';
import { Landing11Component } from './pages/landing11/landing11.component';

const routes: Routes = [
  {
    path: '',
    component: TabletComponent,
    children:[
      {
        path: '',
        component: ChooseStoreComponent,
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
