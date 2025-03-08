import {UserLoginModel} from './user-auth.model';

export interface UserRegisterModel extends UserLoginModel {
  name: string,
  surnames: string,
  birthDay: Date,
  profilePhoto: string
}
