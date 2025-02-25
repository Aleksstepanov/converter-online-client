import { map } from 'rxjs';
import { AuthStateModel } from '../model/auth-state.model';

export class AuthGetters {
  constructor(private authState: AuthStateModel) {}

  getAuthState() {
    return this.authState.getAuthState();
  }

  isAuthenticated() {
    return this.authState.getAuthState().pipe(map((state) => !!state.data));
  }

  getLoading() {
    return this.authState.getAuthState().pipe(map((state) => state.loading));
  }

  getError() {
    return this.authState.getAuthState().pipe(map((state) => state.error));
  }
}
