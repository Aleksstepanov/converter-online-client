import { IRadioField } from '@shared/types';

export interface IRadioProps extends IRadioField {
  value: string;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}
