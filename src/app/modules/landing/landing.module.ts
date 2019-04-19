import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {LandingComponent} from './landing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {SharedModule} from '../../shared/shared.module';
import {CountdownComponent} from './components/countdown/countdown.component';
import { QRViewerDialogComponent } from './components/qr-viewer-dialog/qr-viewer-dialog.component';

@NgModule({
  declarations: [
    CountdownComponent,
    LandingComponent,
    LandingPageComponent,
    QRViewerDialogComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule
  ],
  entryComponents: [
    QRViewerDialogComponent,
  ],
})
export class LandingModule { }
