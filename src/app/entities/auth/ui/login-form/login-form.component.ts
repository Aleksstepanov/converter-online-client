import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import { FORM_FIELDS_LOGIN, AUTH_STORAGE_KEYS } from '../../config/consts';
import { AuthService } from '../../services/auth.service';
import { TLoginFormData } from '../../model/auth.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormComponent, AsyncPipe, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  standalone: true,
})
export class LoginFormComponent {
  protected readonly formFieldsLogin = FORM_FIELDS_LOGIN;

  constructor(public authService: AuthService) {}

  onSubmit(data: TLoginFormData) {
    const { email, password, rememberPassword } = data;
    localStorage.setItem(
      AUTH_STORAGE_KEYS.REMEMBER,
      rememberPassword?.toString() || '',
    );
    this.authService.login({ email, password }).subscribe();
  }
}
