import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(mail: string, password: string) {
        return this.http.post<any>(`${environment.serverAPI}/user/auth/login`, { mail, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .pipe(map(response => {

                let currentUser = {
                    token: response.authentication_token,
                    mail: response.mail,
                    role: response.role
                };

                // login successful if there's a jwt token in the response
                if (response.authentication_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                }

                return response.authentication_token;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}