import {Component, OnInit} from '@angular/core';
import {Participant} from 'src/app/core/models/participant';
import {StoreStateService} from '../../services/store-state.service';
import {EventService} from '../../../../core/http/event.service';
import {EventWithParticipants} from '../../../../core/models/eventWithParticipants';
import index from '@angular/cli/lib/cli';
import {MatDialog} from '@angular/material';
import {EventConfirmDialogComponent} from '../../components/event-confirm-dialog/event-confirm-dialog.component';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss']
})
export class EventManagerComponent implements OnInit {

  public event: EventWithParticipants;
  public searchText: string;

  constructor(
    private storeStateService: StoreStateService,
    private eventService: EventService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.refreshData();
  }

  public refreshData() {
    this.eventService
      .getEventByStoreId(this.storeStateService.getCurrentStoreId())
      .then((event: EventWithParticipants) => {
        this.event = event;
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
          const nameArray = participant.fullname.split(' ');
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
    const dialogRef = this.dialog.open(EventConfirmDialogComponent, {
      width: '300px',
      data: {
        participant,
        eventCode: this.event.event.code,
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.refreshData();
      }
    });
  }

}
