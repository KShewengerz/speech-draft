import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap';

import { SubFields, fields } from '@app/speech/components/speech-sub-fields/speech-sub-fields.data';


/**
 * A component that is responsible for rendering the speech sub fields template with form controls e.g author, keywords and date
 */
@Component({
  selector    : 'app-speech-sub-fields',
  templateUrl : './speech-sub-fields.component.html',
  styleUrls   : ['./speech-sub-fields.component.scss']
})
export class SpeechSubFieldsComponent implements OnInit {
  
  /**
   * A variable that stores the sub fields e.g author, keywords and date and its corresponding properties used for template's input
   * iteration
   *
   * @type {SubFields[]}
   */
  fields: SubFields[] = fields;
  
  /**
   * A variable that stores the precedent sub field's data which is changed dynamically and they will be used to
   * reference its previous data to the current filter values that will be used to emit for the table filter reference
   *
   * @type {Object}
   */
  subValues: Object;
  
  /**
   * A variable that creates an instance of the Ngx-Bootstrap's Datepicker config
   *
   * @type {Partial<BsDatepickerConfig>}
   */
  datepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  
  /**
   * A variable that is a passed from its caller's component which is an instance of FormGroup with its fields and validations that are
   * configured inside the caller's component.
   *
   * @type {FormGroup}
   */
  @Input() form: FormGroup;
  
  /**
   * A variable that is a passed from its caller's component that passed a boolean value if the current mode is for searching a speech
   * or not
   *
   * @type {boolean}
   */
  @Input() isSearchSpeechMode: boolean = false;
  
  /**
   * A variable that emits the updates from form control values e.g author, keywords and date
   *
   * @type {EventEmitter<Object>>}
   */
  @Output() filters: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor() { }
  
  /**
   * A function that performs an initial action of assigning the datepickerConfig with a 'theme-red' class
   */
  ngOnInit() {
    this.datepickerConfig = Object.assign({}, { containerClass: 'theme-red' });
  }
  
  /**
   * A function that is responsible on listening to the value changes of author, keywords and date fields.
   *
   * @param {string} value - the field control's current value
   * @param {string} name  - the field's name or the field key
   */
  onFieldValueChange(value: string, name: string): void {
    if (this.isSearchSpeechMode) {
      this.subValues = Object.assign({}, this.subValues, {[name]: value});
      this.filters.emit(this.subValues);
    }
  }

}
