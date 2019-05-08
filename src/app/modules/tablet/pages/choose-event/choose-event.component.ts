import {Component, OnInit} from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';
import {Router} from '@angular/router';
import { StoreService } from 'src/app/core/http/store.service';
import { EventService } from 'src/app/core/http/event.service';
import * as moment from 'moment';
import { Role } from 'src/app/core/enums/role';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

type _Store = { storeName: string; storeCode: string };

@Component({
  selector: 'app-choose-event',
  templateUrl: './choose-event.component.html',
  styleUrls: ['./choose-event.component.scss']
})
export class ChooseEventComponent implements OnInit {
  public storeEvents: StoreEvent[];
  public storesList: Array<_Store> = new Array<_Store>();
  public selectedStore: _Store;
  public form: FormGroup;
  public isAdmin: boolean;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private eventService: EventService,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group(
        {
          store: ['ALL', Validators.required]
        }
      );
    }

  ngOnInit() {
    // GET USER STORE
    // estraggo store code sulla base del token salvato in localstorage implementando il service
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isAdmin = currentUser.role === Role.admin ? true : false;
    let userToken = currentUser.token;

    if (this.isAdmin) {
      this.addStoreWithoutDuplicates("ALL", "ALL");

      this.eventService.getAllEvents().then( (storeEvents: StoreEvent[]) => {
        for (let key in storeEvents) {
          storeEvents[key].date = moment.unix(storeEvents[key].date as number).toDate().toString();
          this.addStoreWithoutDuplicates(storeEvents[key].store, storeEvents[key]._storeName);
        }
        this.storeEvents = storeEvents;
      });
    } else {
      this.storeService.getStoreCodeByUser(userToken).then(
        (_storeCode: string) => {
          this.getAllEventByStore(_storeCode);
        }
        );
      }
    }
    public eventSelected(storeEvent: StoreEvent) {
      this.router.navigate(['tablet/events', storeEvent.code]);
    }

  public getSelectedStoreName(selectedStoreCode: string) {
    return this.storesList.find(_store => _store.storeCode === selectedStoreCode).storeName;
  }

  public getAllEventByStore(storeCode?) {
    this.eventService.getAllEvents(storeCode).then( (storeEvents: StoreEvent[]) => {
      for (let key in storeEvents) {
        storeEvents[key].date = moment.unix(storeEvents[key].date as number).toDate().toString();
        this.addStoreWithoutDuplicates(storeEvents[key].store, storeEvents[key]._storeName);
      }
      this.storeEvents = storeEvents;

      if (!this.selectedStore && storeEvents[0]) {
        this.selectedStore = { storeName: storeEvents[0]._storeName, storeCode: storeEvents[0].store };
      }
    });
  }

  public changeStore(){
    let _form = this.form.getRawValue();
    if (_form.store == "ALL") {
      this.selectedStore = { storeName: "ALL", storeCode: "ALL" };
      this.getAllEventByStore();
    } else {
      this.selectedStore = { storeName: this.getSelectedStoreName(_form.store), storeCode: _form.store };
      this.getAllEventByStore(_form.store);
    }
  }

  public addStoreWithoutDuplicates(storeCode: string, storeName: string) {
    if (!this.storesList.find(_store => _store.storeCode === storeCode)) {
      let _selectedStore = new Object() as _Store;
      _selectedStore.storeName = storeName;
      _selectedStore.storeCode = storeCode;
      this.storesList.push(_selectedStore);
    }
  }

  public showAllStores() {
    if (this.selectedStore && this.selectedStore.storeCode !== "ALL") {
      return false;
    } else {
      return true;
    }
  }

}
