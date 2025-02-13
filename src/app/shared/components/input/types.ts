import { IInputField } from '@shared/types';

export interface IInputProps extends IInputField {
  value: string;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}
