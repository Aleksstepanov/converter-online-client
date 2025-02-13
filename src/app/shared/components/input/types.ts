import { IInputField } from '@shared/types';

export interface IInputProps extends IInputField {
  label: string;
  value: string;
  placeholder?: string;
  type: 'input';
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}
