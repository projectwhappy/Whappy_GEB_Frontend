import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/models/store';

@Component({
  selector: 'app-choose-store',
  templateUrl: './choose-store.component.html',
  styleUrls: ['./choose-store.component.scss']
})
export class ChooseStoreComponent implements OnInit {
  public stores: Store[] = [
    {
      id: '',
      name: 'Store name test',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '',
      name: 'Store name test 2',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '',
      name: 'Store name test 3',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '',
      name: 'Store name test 4',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  public storeSelected(store: Store) {
    alert(store.name);
  }
}
