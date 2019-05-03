import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../../core/http/event.service';
import {MatDialog} from '@angular/material';
import {EventConfirmDialogComponent} from '../../components/event-confirm-dialog/event-confirm-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Participant} from '../../../../core/models/participant';
import { EventWithParticipants } from 'src/app/core/models/eventWithParticipants';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss']
})
export class EventManagerComponent implements OnInit {

  public eventCode: string;
  public event: EventWithParticipants;
  public searchText: string;
  public arrayOfCheckedPeople: Participant[];
  private event$: any; // better way?
  private title: string;


  constructor(
    private eventService: EventService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,

  ) {
  }

  ngOnInit() {
    this.eventCode = this.route.snapshot.paramMap.get('eventcode');
    this.event$ = this.getData();
    this.route.queryParams.subscribe(params => {
      if(params['qrCode']) {

        this.eventService.getEventByEventCodeWithInvitedPerson(this.eventCode, null, params['qrCode']).then(
          (response: any) => {
            let person: Participant;
            person = response.participant;
            this.confirmParticipant(person);
            // console.log(person);
            // alert("C'è il QR CODE! "+params['qrCode']);
        });
      }
  });
  }

  public getData() {
    this.eventService.getEventByEventCodeWithInvitedPeopleConfirmed(this.eventCode)
      .then((event: EventWithParticipants) => {
        // Assign event value
        this.event = event;

        // Create an array of checked people
        this.arrayOfCheckedPeople = this.event.participants.list.filter( (el) => {
          return el.checked_in;
        });
      }, (err) => {
        console.log(err);
      });
  }

  public getParticipants() {
    if (!this.event) {
      return [];
    } else {
      if (!this.searchText) {
        return this.event.participants.list;
      } else {
        const participantToReturn = [];

        for (const participant of this.event.participants.list) {
          const fullName = participant.firstname + ' ' + participant.lastname;
          const nameArray = fullName.split(' ');
          const textToSearch = this.searchText.split(' ');
          let allItemsMatch = true;
          for (const itemSearch of textToSearch) {
            let found = false;
            for (let i = 0; i < nameArray.length && !found; i++) {
              if (nameArray[i].toLowerCase().indexOf(itemSearch.toLowerCase()) === 0) {
                found = true;
                nameArray.splice(i, 1);
              }
            }
            if (!found) {
              allItemsMatch = false;
            }
          }
          if (allItemsMatch) {
            participantToReturn.push(participant);
          }
        }
        return participantToReturn;
      }
    }
  }

  public confirmParticipant(participant) {
    if (!participant.checked_in) {
      const dialogRef = this.dialog.open(EventConfirmDialogComponent, {
        width: '300px',
        data: {
          participant,
          eventCode: this.eventCode,
          title: 'TITLE',
          text: 'TEXT'
        }
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.getData();
        }
      });
    }
  }

  public scanQRCode() {
    this.router.navigate(['tablet/events', this.eventCode, 'QRScanner']);
  }

}
