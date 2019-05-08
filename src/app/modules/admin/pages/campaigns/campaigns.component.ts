import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../../../core/http/event.service';
import {StoreEvent} from '../../../../core/models/store-event';
import * as moment from 'moment';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  public storeEvents: StoreEvent[];
  // public userLang = navigator.language;

  constructor(
    private router: Router,
    private eventService: EventService,
  ) {
  }

  ngOnInit() {
    this.eventService.getAllEvents(null).then( (storeEvents: StoreEvent[]) => {

      for (let key in storeEvents) {
        storeEvents[key].date = moment.unix(storeEvents[key].date as number).toDate().toString();
      }

      this.storeEvents = storeEvents;
    });
  }

}
