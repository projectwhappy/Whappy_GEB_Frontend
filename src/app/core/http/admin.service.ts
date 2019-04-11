import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export interface LoginBody {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }
  public adminLogin(body: LoginBody) {
    return this.http.post(environment.serverAPI, body).toPromise();
  }
}
