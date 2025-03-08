import {Routes} from '@angular/router';
import {LogInFormComponent} from '../components/log-in-form/log-in-form.component';

export const authRoute: Routes  = [
  {
    path: 'log-in',
    component: LogInFormComponent
  }
] as Routes;
