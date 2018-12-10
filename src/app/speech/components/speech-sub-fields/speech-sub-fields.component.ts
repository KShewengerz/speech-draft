import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap';

import { SubFields, fields } from '@app/speech/components/speech-sub-fields/speech-sub-fields.data';


@Component({
  selector    : 'app-speech-sub-fields',
  templateUrl : './speech-sub-fields.component.html',
  styleUrls   : ['./speech-sub-fields.component.scss']
})
export class SpeechSubFieldsComponent implements OnInit {
  
  fields: SubFields[] = fields;
  subValues: Object;
  datepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  
  @Input() form: FormGroup;
  @Input() isSearchSpeechMode: boolean = false;
  
  @Output() filters: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    this.datepickerConfig = Object.assign({}, { containerClass: 'theme-red' });
  }
  
  onFieldValueChange(value: string, name: string): void {
    if (this.isSearchSpeechMode) {
      this.subValues = Object.assign({}, this.subValues, {[name]: value});
      this.filters.emit(this.subValues);
    }
  }

}
