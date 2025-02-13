import { Component } from '@angular/core';
import { FormComponent } from '@shared/components/form/form.component';
import { TFields, TFormData } from '@shared/components/form/types';

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
      type: 'text',
      placeholder: 'Введите имя',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Введите email',
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      placeholder: 'Введите пароль',
    },
  ];

  formData: TFormData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: '12345',
  };

  isLoading = false;

  handleSubmit(formData: TFormData) {
    console.log('Форма отправлена:', formData);
  }
}
