import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../../../core/http/event.service';
import {StoreEvent} from '../../../../core/models/store-event';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  public storeEvents: StoreEvent[];

  constructor(
    private router: Router,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.eventService.getAllEvents().then( (storeEvents: StoreEvent[]) => {
      this.storeEvents = storeEvents;
      });
  }

}
