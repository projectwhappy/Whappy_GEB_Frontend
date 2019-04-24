import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {
  @Input() public storeEvent: StoreEvent;
  @Output() public isSelected = new EventEmitter();
  public serverAPI:string = environment.serverAPI;

  constructor() {
  }

  ngOnInit() {
  }

  public sendIsSelected() {
    this.isSelected.emit();
  }
}
