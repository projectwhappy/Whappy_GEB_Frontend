import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Store} from 'src/app/core/models/store';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent implements OnInit {
  @Input() public store: Store;
  @Output() public isSelected = new EventEmitter();

  constructor() {
    this.store = {
      code: 'string',
      image: 'string',
      label: 'string',
      description: 'string',
      address: {
        name: 'string',
        address: 'string',
        city: 'string',
        zipcode: 'string',
        province: 'string',
        country: 'string',
      }
    };
  }

  ngOnInit() {
  }

  public sendIsSelected() {
    this.isSelected.emit();
  }
}
