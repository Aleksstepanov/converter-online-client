import { ISelectField } from '@shared/types';

export interface ISelectProps extends ISelectField {
  value: string;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}
