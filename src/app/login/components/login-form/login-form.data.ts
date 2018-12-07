import { FormlyFieldConfig } from '@ngx-formly/core';


/* SIGN IN FORM FIELDS */
export const loginFormFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Password',
      required: true,
    }
  }
];
