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
    console.log(body);
    return this.http.post(environment.serverAPI + '/events', body).toPromise();
  }

  public sendEvent(eventCode, body) {
    return this.http.post(environment.serverAPI + '/events/' + eventCode + '/communication', body, {
      headers: {
        'Content-Type': null
      }
    } ).toPromise();
  }

  public getAllEvents() {
    return this.http.get(environment.serverAPI + '/events').toPromise();
  }

  // Da controllare
  public getEventByStoreId(id: string) {
    return this.http.get(environment.serverAPI + '/events/' + id + '/participants').toPromise();
  }

  // Da controllare
  public getEventByEventCodeWithInvitedPeopleInvited(eventCode) {
    return this.http.get( environment.serverAPI + '/events/' + eventCode + '/invited_people?invitedFilter=invited').toPromise();
  }

  public getEventByEventCodeWithInvitedPeopleConfirmed(eventCode) {
    return this.http.get( environment.serverAPI + '/events/' + eventCode + '/invited_people?invitedFilter=confirmed').toPromise();
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
