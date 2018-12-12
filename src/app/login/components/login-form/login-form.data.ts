import { FormlyFieldConfig } from '@ngx-formly/core';


/**
 * A variable that contains the sign-in form fields following the properties required under FormlyFieldConfig from ngx-formly
 *
 * @type {FormlyFieldConfig[]}
 */
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
