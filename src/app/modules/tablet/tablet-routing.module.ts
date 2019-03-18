import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import { ChooseStoreComponent } from './pages/choose-store/choose-store.component';

const routes: Routes = [
  {
    path: '',
    component: TabletComponent,
    children:[
      {
        path: '',
        component: ChooseStoreComponent,
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
