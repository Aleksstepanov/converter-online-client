import { TFields } from '@shared/types';

export interface TFormComponentProps {
  fields: TFields;
  data: TFormData;
  submitBtnTitle: string;
  loading?: boolean;
}

export type TFormData = Record<string, string | number | boolean | null>;
