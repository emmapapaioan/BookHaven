import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard), canActivate: [authGuard] },
  { path: 'auth-callback', loadComponent: () => import('./features/auth-callback/auth-callback').then(m => m.AuthCallback) },
  { path: 'search-books', loadComponent: () => import('./features/search-books/search-books').then(m => m.SearchBooks), canActivate: [authGuard] },
];
