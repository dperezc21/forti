import {Injectable} from '@angular/core';
import {UserService} from '../services/user-service';
import {take, tap} from 'rxjs';
import {UserLoginModel, UserLoginResponse} from '../models/user-auth.model';
import {Route, Router} from '@angular/router';

@Injectable({ providedIn: "root"})
export class UserAuthenticationController {

  constructor(private userService: UserService,
              private route: Router) {}

  userLogin(user: UserLoginModel) {
    this.userService.login(user.email, user.password)
      .pipe(take(1), tap((value: UserLoginResponse) => {
        if(value.email) this.route.navigate(['/home']);
      })).subscribe();
  }
}
