import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthManager } from './auth-manager';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthManager);

  if (auth.token() && auth.user()) {
    return true;
  }

  return false;
};
