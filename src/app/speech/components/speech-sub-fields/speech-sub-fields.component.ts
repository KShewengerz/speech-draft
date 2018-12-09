import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap';


@Component({
  selector    : 'app-speech-sub-fields',
  templateUrl : './speech-sub-fields.component.html',
  styleUrls   : ['./speech-sub-fields.component.scss']
})
export class SpeechSubFieldsComponent implements OnInit {
  
  datepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  
  constructor() { }

  ngOnInit() {
    this.datepickerConfig = Object.assign({}, { containerClass: 'theme-red' });
  }

}
