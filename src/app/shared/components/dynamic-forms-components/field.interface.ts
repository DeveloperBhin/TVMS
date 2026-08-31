export enum FieldType {
  input = 'input',
  select = 'select',
  button = 'button',
  textarea = 'textarea'
}

export interface FieldOption {
  name: string;
  value: string | number;
}

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  inputType?: string;
  class?: string;
  fieldClass?: string;
  appearance?: 'fill' | 'outline';
  placeholder?: string;
  options?: FieldOption[];
  required?: boolean;
}
