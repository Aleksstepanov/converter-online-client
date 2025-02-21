import { ValidatorFn } from '@angular/forms';

export type TTypeField = 'input' | 'select' | 'textarea' | 'checkbox' | 'radio';

export interface IBaseField {
  label: string;
  name: string;
  type: TTypeField;
  placeholder?: string;
  validators?: ValidatorFn[];
  className?: string;
}

export interface IInputField extends IBaseField {
  type: 'input';
  typeInput: string;
}

export interface ISelectField extends IBaseField {
  type: 'select';
  options: TSelectOptions;
}

export type TSelectOptions = {
  label: string;
  value: string;
}[];

export interface ITextareaField extends IBaseField {
  type: 'textarea';
}

export interface ICheckboxField extends IBaseField {
  type: 'checkbox';
}

export interface IRadioField extends IBaseField {
  type: 'radio';
}

export type TField =
  | IInputField
  | ISelectField
  | ITextareaField
  | ICheckboxField
  | IRadioField;
export type TFields = TField[];
