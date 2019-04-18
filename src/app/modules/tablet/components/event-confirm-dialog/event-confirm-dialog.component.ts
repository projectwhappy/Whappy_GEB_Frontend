import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Participant} from '../../../../core/models/participant';
import {EventService} from '../../../../core/http/event.service';

@Component({
  selector: 'app-event-confirm-dialog',
  templateUrl: './event-confirm-dialog.component.html',
  styleUrls: ['./event-confirm-dialog.component.scss']
})
export class EventConfirmDialogComponent implements OnInit {
  public participant: Participant;
  public eventCode: string;

  constructor(public dialogRef: MatDialogRef<EventConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private eventService: EventService,
  ) {
    this.participant = data.participant;
    this.eventCode = data.eventCode;
  }

  ngOnInit() {
  }

  public confirmParticipant() {
    this.eventService.checkInPerson(this.eventCode, this.participant.code).then(() => {
        this.dialogRef.close(true);
      },
      (err) => {
        console.log(err);
      });
  }

}
