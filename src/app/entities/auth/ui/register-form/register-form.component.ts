import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import {
  FORM_FIELDS_REGISTRATION,
  AUTH_STORAGE_KEYS,
} from '../../config/consts';
import { AuthService } from '../../services/auth.service';
import { TRegisterFormData } from '../../model/auth.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [AsyncPipe, FormComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  protected readonly formFieldsRegistration = FORM_FIELDS_REGISTRATION;

  constructor(public authService: AuthService) {}

  onSubmit(data: TRegisterFormData) {
    const { email, password, rememberPassword, lastName, firstName } = data;
    localStorage.setItem(
      AUTH_STORAGE_KEYS.REMEMBER,
      rememberPassword?.toString() || '',
    );
    this.authService
      .register({ email, password, firstName, lastName })
      .subscribe();
  }
}
