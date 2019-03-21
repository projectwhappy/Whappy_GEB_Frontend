import {Injectable} from '@angular/core';
import {EventWithParticipants} from '../models/eventWithParticipants';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {
  }

  public getEventByStoreId(id: string) {
    return this.http.get(environment.serverAPI + '/events/' + id + '/participants').toPromise();
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
