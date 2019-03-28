import {Injectable} from '@angular/core';
import {Store} from '../models/store';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[] = [
    {
      id: '47f8c888-7164-42c8-8344-9a2cef95dd1a',
      name: 'Store name test',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/' +
        '00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
      password: '12345',
    },
    {
      id: '2',
      name: 'Store name test 2',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/' +
        '00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
      password: '12345aa',

    },
    {
      id: '3',
      name: 'Store name test 3',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/' +
        '00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
      password: '12345bb',
    },
    {
      id: '4',
      name: 'Store name test 4',
      address: 'Address test, 7',
      imageUrl: 'https://static01.nyt.com/images/2018/04/06/business/' +
        '00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp',
      password: '12345cc',
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

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

  public async checkPassword(code: string, pw: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (const s of this.stores) {
          if (s.id === code && s.password === pw) {
            return resolve(s);
          }
        }
        return resolve(false);
      }, 2000);
    });
  }
}
