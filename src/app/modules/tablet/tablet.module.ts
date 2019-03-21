import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TabletRoutingModule} from './tablet-routing.module';
import {TabletComponent} from './tablet.component';
import {SharedModule} from '../../shared/shared.module';
import {ChooseStoreComponent} from './pages/choose-store/choose-store.component';
import {EventManagerComponent} from './pages/event-manager/event-manager.component';
import {CardStoreComponent} from './components/card-store/card-store.component';
import {ListItemParticipantComponent} from './components/list-item-participant/list-item-participant.component';
import {EventConfirmDialogComponent} from './components/event-confirm-dialog/event-confirm-dialog.component';

@NgModule({
  declarations: [
    TabletComponent,
    ChooseStoreComponent,
    EventManagerComponent,
    CardStoreComponent,
    ListItemParticipantComponent,
    EventConfirmDialogComponent,
  ],
  imports: [
    SharedModule,
    TabletRoutingModule
  ],
  entryComponents: [
    EventConfirmDialogComponent,
  ]
})
export class TabletModule {
}
