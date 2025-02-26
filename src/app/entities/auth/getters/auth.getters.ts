import { map } from 'rxjs';
import { AuthStateModel } from '../model/auth-state.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGetters {
  constructor(private authState: AuthStateModel) {}

  getAuthState() {
    return this.authState.getAuthState();
  }

  isAuthenticated() {
    return this.authState.getAuthState().pipe(map((state) => !!state.data));
  }

  getLoading() {
    return this.authState
      .getAuthState()
      .pipe(map((state) => (state.loading !== null ? state.loading : false)));
  }

  getError() {
    return this.authState
      .getAuthState()
      .pipe(map((state) => state.error ?? ''));
  }
}
