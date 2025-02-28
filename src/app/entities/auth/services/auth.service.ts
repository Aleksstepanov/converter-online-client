import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStateModel } from '../model/auth-state.model';
import { AuthMethods } from '../methods/auth.methods';
import { AuthGetters } from '../getters/auth.getters';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { TLoginPayload, TRegisterPayload } from '../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new AuthStateModel();

  constructor(
    private http: HttpClient,
    private router: Router,
    private methods: AuthMethods,
    private getters: AuthGetters,
  ) {}

  getAuthState() {
    return this.getters.getAuthState();
  }

  isAuthenticated() {
    return this.getters.isAuthenticated();
  }

  getLoading() {
    return this.getters.getLoading();
  }

  getError() {
    return this.getters.getError();
  }

  login(payload: TLoginPayload) {
    return this.methods.login(payload).pipe(
      tap(() => {
        this.router.navigate(['/home']);
      }),
    );
  }

  register(payload: TRegisterPayload) {
    return this.methods.register(payload).pipe(
      tap(() => {
        this.router.navigate(['/home']);
      }),
    );
  }

  logout() {
    return this.methods.logout();
  }
}
