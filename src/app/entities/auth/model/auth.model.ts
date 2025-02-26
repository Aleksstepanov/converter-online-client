import { IApiSlice } from '@shared/models/api-slice.model';

export type TAuthState = IApiSlice<string>;

export type TAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginFormData = {
  email: string;
  password: string;
  rememberPassword?: boolean;
};

export type TRegisterFormData = TLoginFormData & {
  firstName: string;
  lastName: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TRegisterPayload = TLoginPayload & {
  firstName: string;
  lastName: string;
};
