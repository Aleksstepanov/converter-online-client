import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import { formFieldsLogin } from '../../config/consts';

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

  onSubmit(data: Record<string, unknown>) {
    console.log('data', data);
  }
}
