import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector    : 'app-error-field-message',
  templateUrl : './error-field-message.component.html',
  styles      : [`small { font-size: 11px; }`]
})
export class ErrorFieldMessageComponent {

  @Input() form: FormGroup;
  @Input() name: string;
  
  constructor() { }
  
  checkFieldRequiredError() {
    const field = this.form.get(this.name);
    
    return field.hasError('required') && field.touched;
  }

}
