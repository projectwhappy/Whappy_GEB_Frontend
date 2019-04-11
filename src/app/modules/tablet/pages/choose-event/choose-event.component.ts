import {Component, OnInit} from '@angular/core';
import {StoreEvent} from '../../../../core/models/store-event';
import {Router} from '@angular/router';


@Component({
  selector: 'app-choose-event',
  templateUrl: './choose-event.component.html',
  styleUrls: ['./choose-event.component.scss']
})
export class ChooseEventComponent implements OnInit {
  public storeEvents: StoreEvent[];

  constructor(
    private router: Router,
  ) {
    // Mock
    this.storeEvents = [{
    code: '99155d71-3e36-48df-ac59-7a9343f98c56',
      _bannerUrl: 'https://www.controcampus.it/wp-content/uploads/2017/03/Sfilata-di-moda.jpg',
    label: 'Pre Sale',
    description: 'Description jrjtwoeijgpejwt',
    date: '12 Aprile 2019',
  },
{
  code: '99155d71-3e36-48df-ac59-7a9343f98c56',
  _bannerUrl: 'https://www.controcampus.it/wp-content/uploads/2017/03/Sfilata-di-moda.jpg',
  label: 'Post Sale',
  description: 'Description jrjtwoeijgpejwt',
  date: '18 Aprile 2019',
},
];
}

  ngOnInit() {
  }
  public eventSelected(storeEvent: StoreEvent) {
    // console.log(`Questo è l'evento selezionato ${storeEvent.code}`);
    this.router.navigate(['tablet/events', storeEvent.code]);
  }

}
