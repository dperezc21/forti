import {Routes} from '@angular/router';
import {LogInFormComponent} from '../components/log-in-form/log-in-form.component';

export const adminRoutes: Routes  = [
  {
    path: 'log-in',
    component: LogInFormComponent
  }
] as Routes;
