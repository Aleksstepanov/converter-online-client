import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import { TFields } from '@shared/types';

@Component({
  selector: 'app-login-form',
  imports: [FormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  standalone: true,
})
export class LoginFormComponent {
  formFields: TFields = [
    {
      name: 'email',
      label: 'Email address:',
      type: 'input',
      placeholder: 'esteban_shiller@gmail.com',
      typeInput: 'text',
      className: 'mt-10',
    },
    {
      name: 'password',
      label: 'Password:',
      type: 'input',
      placeholder: '******',
      typeInput: 'password',
      className: 'mt-10',
    },
    {
      name: 'rememberPassword',
      label: 'Remember Password',
      type: 'checkbox',
    },
  ];

  isLoading = false;
}
