import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, finalize, catchError, of } from 'rxjs';
import {
  TAuthResponse,
  TLoginPayload,
  TRegisterPayload,
} from '../model/auth.model';
import { AuthStateModel } from '../model/auth-state.model';
import { AUTH_STORAGE_KEYS, AUTH_API } from '../config/consts';

@Injectable({
  providedIn: 'root',
})
export class AuthMethods {
  private readonly accessTokenKey = AUTH_STORAGE_KEYS.TOKEN;
  private readonly refreshTokenKey = AUTH_STORAGE_KEYS.REFRESH;
  private readonly rememberKey = AUTH_STORAGE_KEYS.REMEMBER;

  constructor(
    private http: HttpClient,
    private authState: AuthStateModel,
  ) {
    this.loadToken();
  }

  private loadToken() {
    const isRemember = localStorage.getItem(this.rememberKey) === 'true';
    const token = isRemember
      ? localStorage.getItem(this.accessTokenKey)
      : sessionStorage.getItem(this.accessTokenKey);

    if (token) {
      this.authState.setToken(token);
    }
  }

  login({ email, password }: TLoginPayload): Observable<TAuthResponse> {
    this.authState.setLoading(true);

    return this.http
      .post<TAuthResponse>(AUTH_API.LOGIN, { email, password })
      .pipe(
        tap({
          next: ({ accessToken, refreshToken }) => {
            const rememberMe = localStorage.getItem(this.rememberKey);
            if (rememberMe) {
              localStorage.setItem(this.accessTokenKey, accessToken);
              localStorage.setItem(this.refreshTokenKey, refreshToken);
              localStorage.setItem(this.rememberKey, 'true');
            } else {
              sessionStorage.setItem(this.accessTokenKey, accessToken);
              sessionStorage.setItem(this.refreshTokenKey, refreshToken);
              localStorage.setItem(this.rememberKey, 'false');
            }

            this.authState.setToken(accessToken);
          },
          error: () => {
            this.authState.setError('Ошибка входа');
          },
        }),
        finalize(() => {
          this.authState.setLoading(false);
        }),
      );
  }

  register(payload: TRegisterPayload): Observable<TAuthResponse> {
    this.authState.setLoading(true);

    return this.http
      .post<TAuthResponse>(AUTH_API.REGISTER, { ...payload })
      .pipe(
        tap({
          next: ({ accessToken, refreshToken }) => {
            const rememberMe = localStorage.getItem(this.rememberKey);
            if (rememberMe) {
              localStorage.setItem(this.accessTokenKey, accessToken);
              localStorage.setItem(this.refreshTokenKey, refreshToken);
              localStorage.setItem(this.rememberKey, 'true');
            } else {
              sessionStorage.setItem(this.accessTokenKey, accessToken);
              sessionStorage.setItem(this.refreshTokenKey, refreshToken);
              localStorage.setItem(this.rememberKey, 'false');
            }

            this.authState.setToken(accessToken);
          },
          error: () => {
            this.authState.setError('Ошибка входа');
          },
        }),
        finalize(() => {
          this.authState.setLoading(false);
        }),
      );
  }

  refreshToken(): Observable<TAuthResponse | null> {
    this.authState.setLoading(true);

    return this.http.post<TAuthResponse>(AUTH_API.REFRESH, {}).pipe(
      tap({
        next: ({ accessToken, refreshToken }) => {
          const rememberMe = localStorage.getItem(this.rememberKey);
          if (rememberMe) {
            localStorage.setItem(this.accessTokenKey, accessToken);
          } else {
            sessionStorage.setItem(this.accessTokenKey, accessToken);
          }
          this.authState.setToken(accessToken);
        },
        error: () => {
          this.authState.clearSession();
        },
      }),
      finalize(() => {
        this.authState.setLoading(false);
      }),
      catchError(() => {
        this.authState.clearSession();
        return of(null);
      }),
    );
  }

  async logout(): Promise<void> {
    this.authState.setLoading(true);

    try {
      await this.http.post(AUTH_API.LOGOUT, {}).toPromise();
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    } finally {
      const isRemember = localStorage.getItem(this.rememberKey) === 'true';

      if (isRemember) {
        localStorage.removeItem(this.accessTokenKey);
      } else {
        sessionStorage.removeItem(this.accessTokenKey);
      }

      localStorage.removeItem(this.rememberKey);
      this.authState.clearSession();
    }
  }
}
