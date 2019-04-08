import {Injectable} from '@angular/core';
import {EventWithParticipants} from '../models/eventWithParticipants';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StoreEvent} from '../models/store-event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {
  }

  public createNewEvent(body: StoreEvent) {
    return this.http.post(environment.serverAPI + '/events', body).toPromise();
  }

  public sendEvent(eventCode, body) {
    return this.http.post(environment.serverAPI + '/events/' + eventCode + '/communication', body ).toPromise();
  }

  public getAllEvents() {
    return this.http.get(environment.serverAPI + '/events').toPromise();
  }

  public getEventByStoreId(id: string) {
    return this.http.get(environment.serverAPI + '/events/' + id + '/participants').toPromise();
  }

  public getEventByEventCode(eventCode) {
    return this.http.get( environment.serverAPI + '/events/' + eventCode).toPromise();
  }

  public checkInPerson(eventCode: string, personCode: string) {
    return this.http.post(environment.serverAPI + '/events/' + eventCode + '/check_in_by_person', {
      personCode,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise();
  }
}
