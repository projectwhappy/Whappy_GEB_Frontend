import {Component, OnInit} from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';
import {Router} from '@angular/router';
import { StoreService } from 'src/app/core/http/store.service';
import { EventService } from 'src/app/core/http/event.service';
import * as moment from 'moment';

@Component({
  selector: 'app-choose-event',
  templateUrl: './choose-event.component.html',
  styleUrls: ['./choose-event.component.scss']
})
export class ChooseEventComponent implements OnInit {
  public storeEvents: StoreEvent[];

  constructor(
    private router: Router,
    private storeService: StoreService,
    private eventService: EventService
    ) { }

  ngOnInit() {
    // GET USER STORE
    // estraggo store code sulla base del token salvato in localstorage implementando il service
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let userToken = currentUser.token;

    this.storeService.getStoreCodeByUser(userToken).then(
      (_storeCode: string) => {

        this.eventService.getAllEvents(_storeCode).then( (storeEvents: StoreEvent[]) => {
          for (let key in storeEvents) {
            storeEvents[key].date = moment.unix(storeEvents[key].date as number).toDate().toString();
          }
          this.storeEvents = storeEvents;
        });

      }
    );


    // GET EVENTS FOR THAT STORE
    // faccio la chiamata a list event, dopo aver cambiato il service, avendo implementato il parametro opzionale
    // metto dentro a storeEvents i risultati
  }
  public eventSelected(storeEvent: StoreEvent) {
    // console.log(`Questo è l'evento selezionato ${storeEvent.code}`);
    this.router.navigate(['tablet/events', storeEvent.code]);
  }

}
