import {Injectable} from '@angular/core';
import {UserService} from '../services/user-service';
import {take} from 'rxjs';
import {UserLoginModel} from '../models/user-auth.model';

@Injectable({ providedIn: "root"})
export class UserAuthenticationController {

  constructor(private userService: UserService) {}

  userLogin(user: UserLoginModel) {
    this.userService.login(user.email, user.password)
      .pipe(take(1)).subscribe();
  }
}
