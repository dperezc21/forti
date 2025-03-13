import {Injectable} from '@angular/core';
import {UserService} from '../services/user-service';
import {take, tap} from 'rxjs';
import {AuthUserResponse, UserLoginModel} from '../models/user-auth.model';
import {Router} from '@angular/router';
import {UserRegisterModel} from '../models/user-register.model';
import {SnackBarService} from '../services/snack-bar.service';
import {USER_AUTHENTICATED_MESSAGE, USER_NOT_AUTHENTICATED_MESSAGE} from '../constants/message-constants';

@Injectable({ providedIn: "root"})
export class UserAuthenticationController {

  constructor(private userService: UserService,
              private route: Router,
              private snackBarService: SnackBarService) {}

  userLogin(user: UserLoginModel) {
    this.userService.login(user.email, user.password)
      .pipe(take(1), tap({
        next: value => {
          this.route.navigate(['/home']);
          this.snackBarService.showMessage(USER_AUTHENTICATED_MESSAGE);
        },
        error: () => this.snackBarService.showMessage(USER_NOT_AUTHENTICATED_MESSAGE)
      })).subscribe();
  }

  register(value: UserRegisterModel) {
    this.userService.registerUser(value)
      .pipe(take(1), tap((value1: AuthUserResponse) => {
        if(value1.email) this.route.navigate(['/auth/login']);
      })).subscribe();
  }
}
