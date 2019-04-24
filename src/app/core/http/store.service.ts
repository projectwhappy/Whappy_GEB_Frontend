import {Injectable} from '@angular/core';
import {Store} from '../models/store';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[]

  constructor(
    private http: HttpClient
  ) {
  }

  public async getStores() {

    return this.http.get( environment.serverAPI + '/stores').toPromise();
    // return this.stores;
  }


  public getStoreByStoreCode( storeCode: string ) {
    return this.http.get( environment.serverAPI + '/stores/' + storeCode).toPromise();
  }

  public getStoreCodeByUser( userToken: string ) {
    let queryParams = '?';
    if (userToken) {
      queryParams += 'userToken='+userToken;
    }
    return this.http.get( environment.serverAPI + '/stores/info_user_store' + queryParams).toPromise();
  }

  /*
  public async getStoreByCode(code: string) {
    this.stores.forEach(element => {
      if (code === element.code) {
        return element;
      }
    });
    }
    */

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
