import { ICheckboxField } from '@shared/types';

export interface ICheckboxProps extends ICheckboxField {
  value: string;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}
