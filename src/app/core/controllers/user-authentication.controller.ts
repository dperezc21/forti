import {Injectable} from '@angular/core';
import {UserService} from '../services/user-service';
import {take, tap} from 'rxjs';
import {AuthUserResponse, UserLoginModel} from '../models/user-auth.model';
import {Router} from '@angular/router';
import {UserRegisterModel} from '../models/user-register.model';

@Injectable({ providedIn: "root"})
export class UserAuthenticationController {

  constructor(private userService: UserService,
              private route: Router) {}

  userLogin(user: UserLoginModel) {
    this.userService.login(user.email, user.password)
      .pipe(take(1), tap((value: AuthUserResponse) => {
        if(value.email) this.route.navigate(['/home']);
      })).subscribe();
  }

  register(value: UserRegisterModel) {
    this.userService.registerUser(value)
      .pipe(take(1), tap((value1: AuthUserResponse) => {
        if(value1.email) this.route.navigate(['/auth/log-in']);
      })).subscribe();
  }
}
