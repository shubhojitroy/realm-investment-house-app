import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'privacy',
    // component: PrivacyComponent,
    loadComponent: () => {
      return import('./pages/privacy/privacy.component').then((file) => {
        return file.PrivacyComponent;
      });
    },
  },
  {
    path: 'terms',
    // component: TermsComponent,
    loadComponent: () => {
      return import('./pages/terms/terms.component').then((file) => {
        return file.TermsComponent;
      });
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    //component: HomeComponent,
    loadComponent: () => {
      return import('./pages/home/home.component').then((file) => {
        return file.HomeComponent;
      });
    },
  },
];
