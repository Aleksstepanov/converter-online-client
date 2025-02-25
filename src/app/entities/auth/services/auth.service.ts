import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStateModel } from '../model/auth-state.model';
import { AuthMethods } from '../methods/auth.methods';
import { AuthGetters } from '../getters/auth.getters';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new AuthStateModel();
  private methods: AuthMethods;
  private getters: AuthGetters;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.methods = new AuthMethods(this.http, this.authState);
    this.getters = new AuthGetters(this.authState);
  }

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

  login(email: string, password: string) {
    return this.methods.login(email, password).pipe(
      tap(() => {
        this.router.navigate(['/home']);
      }),
    );
  }

  logout() {
    return this.methods.logout();
  }
}
