import { HttpClient } from '@angular/common/http';
import { Observable, tap, finalize, catchError, of } from 'rxjs';
import { TAuthResponse } from '../model/auth.model';
import { AuthStateModel } from '../model/auth-state.model';
import { AUTH_STORAGE_KEYS, AUTH_API } from '../config/consts';

export class AuthMethods {
  private readonly tokenKey = AUTH_STORAGE_KEYS.TOKEN;
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
      ? localStorage.getItem(this.tokenKey)
      : sessionStorage.getItem(this.tokenKey);

    if (token) {
      this.authState.setToken(token);
    }
  }

  login(
    email: string,
    password: string,
    rememberMe: boolean,
  ): Observable<TAuthResponse> {
    this.authState.setLoading(true);
    console.log('🌐 API URL:', AUTH_API.LOGIN);

    return this.http
      .post<TAuthResponse>(AUTH_API.LOGIN, { email, password })
      .pipe(
        tap({
          next: (response) => {
            if (rememberMe) {
              localStorage.setItem(this.tokenKey, response.accessToken);
              localStorage.setItem(this.rememberKey, 'true');
            } else {
              sessionStorage.setItem(this.tokenKey, response.accessToken);
              localStorage.setItem(this.rememberKey, 'false');
            }

            this.authState.setToken(response.accessToken);
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
        next: (response) => {
          sessionStorage.setItem(this.tokenKey, response.accessToken);
          this.authState.setToken(response.accessToken);
        },
        error: () => {
          this.authState.clearSession();
        },
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
        localStorage.removeItem(this.tokenKey);
      } else {
        sessionStorage.removeItem(this.tokenKey);
      }

      localStorage.removeItem(this.rememberKey);
      this.authState.clearSession();
    }
  }
}
