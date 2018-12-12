import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


/**
 * A component that is responsible for rendering the error messages from a certain field control
 */
@Component({
  selector    : 'app-error-field-message',
  templateUrl : './error-field-message.component.html',
  styles      : [`small { font-size: 11px; }`]
})
export class ErrorFieldMessageComponent {
  
  /**
   * A variable that is a passed from its caller's component which is an instance of FormGroup with its fields and validations that are
   * configured inside the caller's component.
   *
   * @type {FormGroup}
   */
  @Input() form: FormGroup;
  
  /**
   * A variable that is passed from its caller's component which is an instance of the field control name
   *
   * @type {string}
   */
  @Input() name: string;
  
  constructor() { }
  
  /**
   * A function that is responsible on checking if the field control from the form is invalid or not.
   *
   * @returns {boolean}
   */
  checkFieldRequiredError(): boolean {
    const field = this.form.get(this.name);
    
    return field.hasError('required') && field.touched;
  }

}
