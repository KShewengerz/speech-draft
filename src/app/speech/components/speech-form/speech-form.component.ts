import { Component, OnInit, Input } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap';

import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit {

  @Input() speech: Speech;
  
  datepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  
  constructor() { }

  ngOnInit() {
    this.datepickerConfig = Object.assign({}, { containerClass: 'theme-red' });
  }

}
