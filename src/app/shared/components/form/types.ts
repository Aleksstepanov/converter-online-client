import { TFields } from '@shared/types';

export interface TFormComponentProps {
  fields: TFields;
  data: TFormData;
  submitBtnTitle: string;
  loading: boolean | null;
  formClass: string;
  buttonClass: string;
}

export type TFormData = Record<string, string | number | boolean | null>;
