import { FieldConfig, FieldType } from '@shared';

export const registerFormFields: FieldConfig[] = [
  {
    key: 'fullName',
    label: 'Full Name',
    type: FieldType.input,
    class: 'col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'username',
    label: 'Username',
    type: FieldType.input,
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'email',
    label: 'Email Address',
    type: FieldType.input,
    inputType: 'email',
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'phoneNumber',
    label: 'Phone Number',
    type: FieldType.input,
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'userType',
    label: 'User Type',
    type: FieldType.select,
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true,
    options: [
      { name: 'Farmer', value: 'FARMER' },
      { name: 'Extension Officer', value: 'EXTENSION_OFFICER' },
      { name: 'Production Officer', value: 'PRODUCTION_OFFICER' },
      { name: 'Researcher', value: 'RESEARCHER' }
    ]
  },
  {
    key: 'password',
    label: 'Password',
    type: FieldType.input,
    inputType: 'password',
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'confirmPassword',
    label: 'Confirm Password',
    type: FieldType.input,
    inputType: 'password',
    class: 'col-md-6 col-12',
    appearance: 'outline',
    required: true
  },
  {
    key: 'submit',
    label: 'Create Account',
    type: FieldType.button,
    class: 'col-12',
    fieldClass: 'w-100'
  }
];
