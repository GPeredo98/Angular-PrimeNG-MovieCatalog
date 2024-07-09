import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn) {
    return true;
  } else {
    router.navigate(['/login']);
  }
  return true;
};
