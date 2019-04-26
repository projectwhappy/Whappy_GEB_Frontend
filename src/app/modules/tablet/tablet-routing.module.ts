import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabletComponent} from './tablet.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';
import { QRScannerComponent } from './pages/qr-scanner/qr-scanner.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { Role } from 'src/app/core/enums/role';

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
        canActivate: [AuthGuard],
        data: { roles: [Role.admin, Role.negozio] }
      },
      {
        path: 'events/:eventcode',
        component: EventManagerComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.admin, Role.negozio] }
      },
      {
        path: 'events/:eventcode/QRScanner',
        component: QRScannerComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.admin, Role.negozio] }
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
