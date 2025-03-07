import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AUTH_LOGIN} from '../constants/url-contants';
import {UserLoginResponse} from '../models/user-auth.model';


@Injectable({providedIn: "root"})
export class UserService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<UserLoginResponse> {
    return this.http.get(`${AUTH_LOGIN}?userName=${userName}&password=${password}`)
      .pipe(map(value => value as UserLoginResponse));
  }
}
