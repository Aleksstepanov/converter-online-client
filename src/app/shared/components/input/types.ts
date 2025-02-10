export const enum EInputTypeAttributes {
  COLOR = 'color',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export type TInputProps = {
  label: string;
  value: string;
  placeholder?: string;
  type: EInputTypeAttributes;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
};
