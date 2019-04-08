import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreComponent} from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: '../modules/public-access/public-access.module#PublicAccessModule'
      },
      {
        path: 'admin',
        loadChildren: '../modules/admin/admin.module#AdminModule'
      },
      {
        path: 'tablet',
        loadChildren: '../modules/tablet/tablet.module#TabletModule'
      },
      {
        path: 'landing',
        loadChildren: '../modules/landing/landing.module#LandingModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
