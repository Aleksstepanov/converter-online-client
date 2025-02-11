import { ValidatorFn } from '@angular/forms';

export type TField = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  validators?: ValidatorFn[];
  options?: TSelectOption[];
};

export type TSelectOption = {
  label: string;
  value: string | number;
};

export type TFields = TField[];

export interface TFormComponentProps {
  fields: TField[];
  data: TFormData;
  submitBtnTitle: string;
  loading?: boolean;
}

export type TFormData = Record<string, string | number | boolean | null>;
