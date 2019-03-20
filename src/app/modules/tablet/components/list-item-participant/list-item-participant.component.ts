import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Participant } from "src/app/core/models/participant";


@Component({
  selector: 'app-list-item-participant',
  templateUrl: './list-item-participant.component.html',
  styleUrls: ['./list-item-participant.component.scss']
})
export class ListItemParticipantComponent implements OnInit {
  @Input() public participant: Participant;
  @Output() public isSelected = new EventEmitter();
  constructor() { 

    
    this.participant = {
      id: "345ad45",
      firstName: "Marco",
      lastName: "Rossi",
      checked: true
    };


  }

  ngOnInit() {
  }

  public sendIsSelected() {
    this.isSelected.emit();
  }

}
