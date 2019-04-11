import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicAccessComponent} from './public-access.component';
import {NewClientFormComponent} from './pages/new-client-form/new-client-form.component';

const routes: Routes = [
  {
    path: '',
    component: PublicAccessComponent,
    children: [
      {
      path: '',
      component: NewClientFormComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAccessRoutingModule { }
