import { IApiSlice } from '@shared/models/api-slice.model';

export type TAuthState = IApiSlice<string>;

export type TAuthResponse = {
  accessToken: string;
};
