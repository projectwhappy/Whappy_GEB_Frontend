import {NgModule} from '@angular/core';
import {TabletComponent} from './tablet.component';
import {ChooseStoreComponent} from './pages/choose-store/choose-store.component';
import {EventConfirmDialogComponent} from './components/event-confirm-dialog/event-confirm-dialog.component';
import {SharedModule} from '../../shared/shared.module';
import {CardEventComponent} from './components/card-event/card-event.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';
import {CardStoreComponent} from './components/card-store/card-store.component';
import {StoreConfirmDialogComponent} from './components/store-confirm-dialog/store-confirm-dialog.component';
import {TabletRoutingModule} from './tablet-routing.module';
import {ListItemParticipantComponent} from './components/list-item-participant/list-item-participant.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {NavComponent} from './components/nav/nav.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { QRScannerComponent } from './pages/qr-scanner/qr-scanner.component';


@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
    EventManagerComponent,
    CardStoreComponent,
    ListItemParticipantComponent,
    LogInComponent,
    EventConfirmDialogComponent,
    StoreConfirmDialogComponent,
    ChooseEventComponent,
    CardEventComponent,
    TopBarComponent,
    NavComponent,
    QRScannerComponent
  ],
  imports: [
    SharedModule,
    TabletRoutingModule,
    ZXingScannerModule,
    // BrowserModule,
    ZXingScannerModule
  ],
  entryComponents: [
    EventConfirmDialogComponent,
    StoreConfirmDialogComponent,
  ],
  bootstrap: [QRScannerComponent]
})
export class TabletModule {
}
