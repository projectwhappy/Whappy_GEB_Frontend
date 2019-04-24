import {Component, OnInit} from '@angular/core';
import {Store} from 'src/app/core/models/store';
import {StoreService} from 'src/app/core/http/store.service';
import {StoreStateService} from '../../services/store-state.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {StoreConfirmDialogComponent} from '../../components/store-confirm-dialog/store-confirm-dialog.component';

@Component({
  selector: 'app-choose-store',
  templateUrl: './choose-store.component.html',
  styleUrls: ['./choose-store.component.scss']
})
export class ChooseStoreComponent implements OnInit {
  public stores: Store[] = [];


  constructor(private storeService: StoreService,
              private storeState: StoreStateService,
              private router: Router,
              public dialog: MatDialog,
  ) {

    this.storeService.getStores().then((stores: Store[]) => {
      this.stores = stores;
    });
  }

  ngOnInit() {
  }

  public storeSelected(store: Store) {
    const dialogRef = this.dialog.open(StoreConfirmDialogComponent, {
      width: 'calc(100% - 9.6rem)',
      data: {cde: store.code}
    });

  }


}
