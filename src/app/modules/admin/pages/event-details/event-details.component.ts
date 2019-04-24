import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../../core/http/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../../../../core/models/store';
import {Participant} from '../../../../core/models/participant';
import {StoreService} from '../../../../core/http/store.service';
import { EventWithParticipants } from 'src/app/core/models/eventWithParticipants';
import { environment } from 'src/environments/environment';

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


        // Assign event value
        this.eventWP = e;
        this.eventWP._bannerUrl = environment.serverAPI + this.eventWP._bannerUrl;

        // Create an array of confirmed people
        this.arrayOfConfirmedPeople = this.eventWP.participants.list.filter((el) => {
          return el.confirmed;
        });

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
