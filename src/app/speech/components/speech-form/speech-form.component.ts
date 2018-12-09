import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnChanges {
  
  form: FormGroup = this.fb.group(this.formFields);
  
  speech: Speech;
  
  @Input()
  set data(speech: Speech) {
    this.speech = speech;
  }
  
  get data(): Speech {
    return this.speech;
  }
  
  constructor(private fb: FormBuilder) { }
  
  ngOnChanges(): void {
    if (this.speech) this.setFormValues();
  }
  
  get formFields(): any {
    const fields     = ['content', 'author', 'keywords', 'date'];
    const formFields = fields.reduce((acc, field) => Object.assign(acc,{ [field] : this.requiredField }), {});
    
    return formFields;
  }
  
  get requiredField(): [string, Function] {
    return [ '', Validators.required ];
  }
  
  setFormValues(): void {
     const { content, author, keywords, date } = this.speech;
     this.form.setValue({ content, author, keywords, date });
  }

}
