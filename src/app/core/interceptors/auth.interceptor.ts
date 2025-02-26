import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthGetters } from '@entities/auth/getters/auth.getters';
import { Router } from '@angular/router';
import { catchError, switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authGetters = inject(AuthGetters);
  const router = inject(Router);

  return authGetters.isAuthenticated().pipe(
    take(1),
    switchMap((isAuthenticated) => {
      const token = isAuthenticated ? authGetters.getAuthState() : null;

      const cloned = token
        ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        : req;

      return next(cloned).pipe(
        catchError((error) => {
          if (error.status === 401) {
            console.warn('Unauthorized, redirecting to login...');
            router.navigate(['/login']);
          }
          return throwError(() => error);
        }),
      );
    }),
  );
};
