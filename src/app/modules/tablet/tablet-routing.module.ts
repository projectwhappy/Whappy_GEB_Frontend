import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';
import { TabletGuard } from 'src/app/shared/auth/tablet.guard';
import { QRScannerComponent } from './pages/qr-scanner/qr-scanner.component';

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
        canActivate: [TabletGuard]
      },
      {
        path: 'events/:eventcode',
        component: EventManagerComponent,
        canActivate: [TabletGuard]
      },
      {
        path: 'events/:eventcode/QRScanner',
        component: QRScannerComponent,
        canActivate: [TabletGuard]
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
