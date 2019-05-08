import {Injectable} from '@angular/core';
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
    let formData: FormData = new FormData();

    Object.keys(body).forEach(key => { // Conversione oggetto body in formData
      if (key != 'banner') {
        if (key == 'address') { // Conversione dell'oggetto address in elementi del formData
          Object.keys(body[key]).forEach(_key => {
            formData.append('address[' + _key + ']', body[key][_key]);
          });
        } else {
          formData.append(key, body[key]);
        }
      } else { // Cast a blob quando è il file banner
        formData.append(key, body[key] as Blob);
      }
    })

    return this.http.post(environment.serverAPI + '/events', formData).toPromise();
  }

  public sendEvent(eventCode, body) {
    return this.http.post(environment.serverAPI + '/events/' + eventCode + '/communication', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    } ).toPromise();
  }

  public getAllEvents(storeCode?: string) {
    let queryParams = '?';
    if (storeCode) {
      queryParams += 'store=' + storeCode;
    }
    return this.http.get(environment.serverAPI + '/events' + queryParams).toPromise();
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

  // Da controllare
  public getEventByEventCodeWithInvitedPerson(eventCode, personCode, qrCode) {
    let queryParams = '?';
    let hasPrevious = false;

    if (personCode) {
      queryParams += 'personCode=' + personCode;
      hasPrevious = true;
      queryParams += '&';
    }
    if (qrCode) {
      queryParams += 'qrCode=' + qrCode;
      if (hasPrevious) {
        queryParams += '&';
      }
      hasPrevious = true;
    }

    return this.http.get( environment.serverAPI + '/events/' + eventCode + '/invited_person' + queryParams).toPromise();
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

  public getInvitationByToken(inviteToken: string) {
    let queryParams = '?';

    if (inviteToken) {
      queryParams += 'inviteToken=' + inviteToken;
    }

    return this.http.get( environment.serverAPI + '/events/retrieve_invitation_by_token' + queryParams).toPromise();
  }

  public getInvitationQRCode(eventCode: string, personCode: string) {
    let queryParams = '?';

    if (personCode) {
      queryParams += 'personCode=' + personCode;
    }

    return this.http.get( environment.serverAPI + '/events/' + eventCode + '/retrieve_qr_by_person' + queryParams).toPromise();
  }

  public confirmEventParticipation(eventCode: string, personCode: string) {
    return this.http.post(environment.serverAPI + '/events/' + eventCode + '/confirm_participation', {
      personCode,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise();
  }
}
