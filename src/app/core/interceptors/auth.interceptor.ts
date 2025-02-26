import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@entities/auth/services/auth.service';
import { Router } from '@angular/router';
import { catchError, switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    take(1),
    switchMap((isAuthenticated) => {
      const token = isAuthenticated ? authService.getAuthState() : null;

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
