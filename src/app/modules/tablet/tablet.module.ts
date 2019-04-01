import {NgModule} from '@angular/core';
import {TabletComponent} from './tablet.component';
import {ChooseStoreComponent} from './pages/choose-store/choose-store.component';
import {EventConfirmDialogComponent} from './components/event-confirm-dialog/event-confirm-dialog.component';
import {SharedModule} from '../../shared/shared.module';
import {CardEventComponent} from './components/card-event/card-event.component';
import {CountdownComponent} from './components/countdown/countdown.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';
import {ChooseEventComponent} from './pages/choose-event/choose-event.component';
import {CardStoreComponent} from './components/card-store/card-store.component';
import {StoreConfirmDialogComponent} from './components/store-confirm-dialog/store-confirm-dialog.component';
import {TabletRoutingModule} from './tablet-routing.module';
import {LandingComponent} from './pages/landing/landing.component';
import {ListItemParticipantComponent} from './components/list-item-participant/list-item-participant.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {NavComponent} from './components/nav/nav.component';


@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
    LandingComponent,
    EventManagerComponent,
    CardStoreComponent,
    CountdownComponent,
    ListItemParticipantComponent,
    EventConfirmDialogComponent,
    StoreConfirmDialogComponent,
    ChooseEventComponent,
    CardEventComponent,
    TopBarComponent,
    NavComponent,
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ],
  entryComponents: [
    EventConfirmDialogComponent,
    StoreConfirmDialogComponent,
  ]
})
export class TabletModule {
}
