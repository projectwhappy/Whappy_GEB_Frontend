import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/core/models/participant';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss']
})
export class EventManagerComponent implements OnInit {
  public participants: Participant[] = [
    {
      id: "345ad45",
      firstName: "Marco",
      lastName: "Rossi",
      checked: true
    },
    {
      id: "346ad45",
      firstName: "Paolo",
      lastName: "Verdi",
      checked: false
    },
    {
      id: "347ad45",
      firstName: "Franco",
      lastName: "Bianchi",
      checked: true
    },
    {
      id: "348ad45",
      firstName: "Viola",
      lastName: "Rossi",
      checked: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public participantSelected(participant: Participant) {
    alert(participant.firstName + " check in");
  }

}
