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
      code: '47f8c888-7164-42c8-8344-9a2cef95dd1a',
      image: '',
      label: 'Store name test',
      description: 'string',
      address: {
        name: 'string',
        address: 'string', // street and number
        city: 'string',
        zipcode: 'string',
        province: 'string',
        country: 'string',
      },
    },
    {
      code: '2222-22',
      image: '',
      label: 'Store name test 2',
      description: 'string',
      address: {
        name: 'string',
        address: 'string', // street and number
        city: 'string',
        zipcode: 'string',
        province: 'string',
        country: 'string',
      },
    },
    {
      code: '3333-33',
      image: '',
      label: 'Store name test 3',
      description: 'string',
      address: {
        name: 'string',
        address: 'string', // street and number
        city: 'string',
        zipcode: 'string',
        province: 'string',
        country: 'string',
      },
    },
    {
      code: '4444-4',
      image: '',
      label: 'Store name test 4',
      description: 'string',
      address: {
        name: 'string',
        address: 'string', // street and number
        city: 'string',
        zipcode: 'string',
        province: 'string',
        country: 'string',
      },
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

  public async getStores() {
    return this.stores;
  }

  public async getStoreByCode(code: string) {
    this.stores.forEach(element => {
      if (code === element.code) {
        return element;
      }

    });
  }

  /*
  public async checkPassword(code: string, pw: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (const s of this.stores) {
          if (s.code === code && s.password === pw) {
            return resolve(s);
          }
        }
        return resolve(false);
      }, 2000);
    });
  }
  */
}
