import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AuthService } from '@entities/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.authService.getAuthState().pipe(
      take(1),
      switchMap((authState) => {
        const token = authState.data;

        const cloned = token
          ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
          : req;

        return next.handle(cloned).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('API Error:', error);
            return throwError(() => new Error(error.message || 'Server error'));
          }),
        );
      }),
    );
  }
}
