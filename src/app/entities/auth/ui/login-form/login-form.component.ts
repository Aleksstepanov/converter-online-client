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
      name: 'username',
      label: 'Username',
      type: 'input',
      placeholder: 'Введите имя',
      typeInput: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      placeholder: 'Введите email',
      typeInput: 'text',
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'input',
      placeholder: 'Введите пароль',
      typeInput: 'text',
    },
  ];

  formData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: '12345',
  };

  isLoading = false;
}
