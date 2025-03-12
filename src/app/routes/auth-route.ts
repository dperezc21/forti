import {Routes} from '@angular/router';
import {LogInFormComponent} from '../components/log-in-form/log-in-form.component';
import {RegisterFormComponent} from '../components/register-form/register-form.component';

export const authRoute: Routes  = [
  {
    path: 'login',
    component: LogInFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  }
] as Routes;
