import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStateModel } from '../model/auth-state.model';
import { AuthMethods } from '../methods/auth.methods';
import { AuthGetters } from '../getters/auth.getters';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new AuthStateModel();
  private methods: AuthMethods;
  private getters: AuthGetters;

  constructor(private http: HttpClient) {
    this.methods = new AuthMethods(this.http, this.authState);
    this.getters = new AuthGetters(this.authState);
  }

  getAuthState() {
    return this.getters.getAuthState();
  }

  isAuthenticated() {
    return this.getters.isAuthenticated();
  }

  login(email: string, password: string, rememberMe: boolean) {
    return this.methods.login(email, password, rememberMe);
  }

  logout() {
    this.methods.logout();
  }
}
