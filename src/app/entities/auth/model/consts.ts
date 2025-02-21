import { TFields } from '@shared/types';

export const formFieldsLogin: TFields = [
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
    className: 'mt-5',
  },
];
