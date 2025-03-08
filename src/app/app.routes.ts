import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/log-in',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth-route').then(value => value.authRoute)
  }
];
