import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  { path: 'auth-callback', loadComponent: () => import('./features/auth-callback/auth-callback').then(m => m.AuthCallback) }
];
