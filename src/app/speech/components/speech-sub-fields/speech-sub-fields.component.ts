import { Component, OnInit, Input } from '@angular/core';
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
  datepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  
  @Input() form: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.datepickerConfig = Object.assign({}, { containerClass: 'theme-red' });
  }

}
