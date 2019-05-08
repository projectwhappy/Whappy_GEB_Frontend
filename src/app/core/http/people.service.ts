import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export interface CreatePerson {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  mail: string;
  gender: string;
  birthDate: string|number;
  newsletterAcceptance: string|number;
  preferredCommunication: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http: HttpClient) {
  }
  public createNewPeople(body: CreatePerson) {
    return this.http.post( environment.serverAPI + '/people', body).toPromise();
  }
}


