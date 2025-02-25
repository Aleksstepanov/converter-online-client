export const AUTH_API = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
};

export const AUTH_STORAGE_KEYS = {
  TOKEN: 'access_token',
  REMEMBER: 'isRemember',
};

import { TFields } from '@shared/types';
import { Validators } from '@angular/forms';

export const formFieldsLogin: TFields = [
  {
    name: 'email',
    label: 'Email address:',
    type: 'input',
    placeholder: 'esteban_shiller@gmail.com',
    typeInput: 'text',
    className: 'mt-10',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'password',
    label: 'Password:',
    type: 'input',
    placeholder: '******',
    typeInput: 'password',
    className: 'mt-10',
    validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'rememberPassword',
    label: 'Remember Password',
    type: 'checkbox',
    className: 'mt-5',
  },
];
