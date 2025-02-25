import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import { formFieldsLogin } from '../../config/consts';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [FormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  standalone: true,
})
export class LoginFormComponent {
  isLoading = false;
  protected readonly formFieldsLogin = formFieldsLogin;

  constructor(private authService: AuthService) {}

  onSubmit(data: Record<string, unknown>) {
    console.log('data', data);
    const { email, password } = data;
    this.authService
      .login(email as string, password as string, false)
      .subscribe();
  }
}
