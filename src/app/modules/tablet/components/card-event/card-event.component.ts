import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {
  @Input() public storeEvent: StoreEvent;
  @Output() public isSelected = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  public sendIsSelected() {
    this.isSelected.emit();
  }
}
