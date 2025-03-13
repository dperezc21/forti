import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth-route').then(value => value.authRoute)
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(value => value.HomeComponent)
  }
];
