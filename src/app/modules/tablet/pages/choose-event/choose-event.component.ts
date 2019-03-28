import {Component, OnInit} from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';


@Component({
  selector: 'app-choose-event',
  templateUrl: './choose-event.component.html',
  styleUrls: ['./choose-event.component.scss']
})
export class ChooseEventComponent implements OnInit {
  public storeEvents: StoreEvent[];

  constructor() {
    // Mock
    this.storeEvents = [{
      code: 'PRESALEdlfkjsaljlsf',
      imageUrl: 'https://www.controcampus.it/wp-content/uploads/2017/03/Sfilata-di-moda.jpg',
      label: 'Pre Sale',
      description: 'Description jrjtwoeijgpejwt',
      date: '12 Aprile 2019',
    },
      {
        code: 'POSTSALEdlfkjsaljlsf',
        imageUrl: 'https://www.controcampus.it/wp-content/uploads/2017/03/Sfilata-di-moda.jpg',
        label: 'Post Sale',
        description: 'Description jrjtwoeijgpejwt',
        date: '18 Aprile 2019',
      },
    ];
  }

  ngOnInit() {
  }
  public eventSelected(storeEvent: StoreEvent) {
    console.log(`Questo è l'evento selezionato ${storeEvent.code}`);
  }

}
