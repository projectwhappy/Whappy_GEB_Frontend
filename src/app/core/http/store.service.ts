import { Injectable } from '@angular/core';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[] = [
    {
      id: '3229ea80-78d2-4785-bdc9-8e8ad6fab49d',
      name: 'Store name test',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '2',
      name: 'Store name test 2',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '3',
      name: 'Store name test 3',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    },
    {
      id: '4',
      name: 'Store name test 4',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
    }
  ]
  constructor() { }

  public async getStores() {
    return this.stores;
  }

  public async getStoreById(_id: string) {
    this.stores.forEach(element => { 
      if (_id === element.id) {
        return element;
      }
      
    });
  }
}
