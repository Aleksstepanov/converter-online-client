export const AUTH_API = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  REGISTER: '/api/auth/register',
};

export const AUTH_STORAGE_KEYS = {
  TOKEN: 'access_token',
  REFRESH: 'refresh_token',
  REMEMBER: 'isRemember',
};

import { TFields } from '@shared/types';
import { Validators } from '@angular/forms';

export const FORM_FIELDS_LOGIN: TFields = [
  {
    name: 'email',
    label: 'Email Address:',
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

export const FORM_FIELDS_REGISTRATION: TFields = [
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'input',
    placeholder: 'Shiller',
    typeInput: 'text',
    className: 'mt-5',
    validators: [Validators.required],
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    placeholder: 'Esteban',
    typeInput: 'text',
    className: 'mt-5',
    validators: [Validators.required],
  },
  {
    name: 'email',
    label: 'Email Address:',
    type: 'input',
    placeholder: 'esteban_shiller@gmail.com',
    typeInput: 'text',
    className: 'mt-5',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'password',
    label: 'Password:',
    type: 'input',
    placeholder: '******',
    typeInput: 'password',
    className: 'mt-5',
    validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'rememberPassword',
    label: 'Remember Password',
    type: 'checkbox',
    className: 'mt-5',
  },
];
