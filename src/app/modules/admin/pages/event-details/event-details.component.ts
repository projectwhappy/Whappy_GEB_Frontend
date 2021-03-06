import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../../core/http/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../../../../core/models/store';
import {Participant} from '../../../../core/models/participant';
import {StoreService} from '../../../../core/http/store.service';
import { EventWithParticipants } from 'src/app/core/models/eventWithParticipants';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public eventCode: string;
  public eventWP: EventWithParticipants;
  public arrayOfConfirmedPeople: Participant[];
  public storeInfo: Store;
  public eventWP$: any; // better way?
  public storeInfo$: any; // better way?
  public serverAPI:string = environment.serverAPI;
  public serverFileUrl:string = environment.serverFileUrl;

  constructor(
    public eventService: EventService,
    public storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.eventCode = this.route.snapshot.paramMap.get('eventcode');
    this.eventWP$ = this.eventService.getEventByEventCodeWithInvitedPeopleInvited(this.eventCode)
      .then((e:EventWithParticipants) => {

        e.date = moment.unix(e.date as number).toDate().toString();
        // Assign event value
        this.eventWP = e;

        // Create an array of confirmed people
        this.arrayOfConfirmedPeople = this.eventWP.participants.list.filter((el) => {
          return el.confirmed;
        });

        for (let key in this.arrayOfConfirmedPeople) {
          this.arrayOfConfirmedPeople[key].confirmed = moment.unix(this.arrayOfConfirmedPeople[key].confirmed as number).toDate().toString();
          this.arrayOfConfirmedPeople[key].checked_in = moment.unix(this.arrayOfConfirmedPeople[key].checked_in as number).toDate().toString();
        }

        console.log(this.arrayOfConfirmedPeople);

        // Get store info
        this.storeInfo$ = this.storeService.getStoreByStoreCode(this.eventWP.store).then(
          (s: Store) => {
            return this.storeInfo = s;
          });

      }, (err) => {
        console.log('errore: ' + err);
      });
  }
}
