import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AUTH_LOGIN, REGISTER_USER} from '../constants/url-contants';
import {AuthUserResponse} from '../models/user-auth.model';
import {UserRegisterModel} from '../models/user-register.model';


@Injectable({providedIn: "root"})
export class UserService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<AuthUserResponse> {
    return this.http.get(`${AUTH_LOGIN}?userName=${userName}&password=${password}`)
      .pipe(map(value => value as AuthUserResponse));
  }

  registerUser(user: UserRegisterModel): Observable<AuthUserResponse> {
    return this.http.post(`${REGISTER_USER}`, user)
      .pipe(map(value => value as AuthUserResponse));
  }
}
