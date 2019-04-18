import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export interface TotalTargets {
  total_targets: {
    total: number;
  };
}

export interface GetTargetBody {
  gender: string;
  fromAge: number;
  toAge: number;
  stores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) {
  }

  public getTargetedPeopleByEventCode(eventCode, params: GetTargetBody) {

    let queryParams = '?';
    let hasPrevious = false;

    if (params.gender) {
      queryParams += 'gender=' + params.gender;
      hasPrevious = true;
      queryParams += '&';
    }
    if (params.fromAge) {
      queryParams += 'fromAge=' + params.fromAge;
      if (hasPrevious) {
        queryParams += '&';
      }
      hasPrevious = true;
    }
    if (params.toAge) {
      queryParams += 'toAge=' + params.toAge;
      if (hasPrevious) {
        queryParams += '&';
      }
      hasPrevious = true;
    }

    if (params.stores) {
      // queryParams += 'stores=' + params.stores;

      params.stores.forEach((item, index) => {
        queryParams += '&stores[]=' + item;
      });
    }

    return this.http.get(environment.serverAPI + '/events/' + eventCode + '/communication/targets' + queryParams)
      .toPromise();
  }
}
