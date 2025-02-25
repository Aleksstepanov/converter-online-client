import { BehaviorSubject } from 'rxjs';
import { TAuthState } from './auth.model';
import { getDefaultApiSlice } from '@shared/models/api-slice.model';

export class AuthStateModel {
  private authState$ = new BehaviorSubject<TAuthState>(getDefaultApiSlice({}));

  getAuthState() {
    return this.authState$.asObservable();
  }

  setLoading(loading: boolean) {
    this.authState$.next({
      ...this.authState$.value,
      loading,
    });
  }

  setToken(token: string) {
    this.authState$.next({
      ...this.authState$.value,
      data: token,
      loading: false,
      error: null,
      initialized: true,
      finalized: true,
    });
  }

  setError(message: string) {
    this.authState$.next({
      ...this.authState$.value,
      loading: false,
      error: message,
    });
  }

  clearSession() {
    this.authState$.next(getDefaultApiSlice({}));
  }

  isAuthenticated(): boolean {
    return !!this.authState$.value.data;
  }
}
