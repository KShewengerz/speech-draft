import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Speech } from '@app/speech/models/speech.interface';

import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnChanges {
  
  form: FormGroup = this.fb.group(this.formFields);
  
  speech: Speech;
  
  @Input() speeches: Speech[];
  
  @Input()
  set data(speech: Speech) {
    this.speech = speech;
  }
  
  get data(): Speech {
    return this.speech;
  }
  
  @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveSpeech: EventEmitter<Speech> = new EventEmitter<Speech>();
  
  constructor(private fb: FormBuilder,
              private modalService: ModalService) { }
              
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
  
  openModal(type: string, size: string) {
    this.modalService.showModal(type, size);
  }
  
  onDeleteSpeech(id: number): void {
     this.deleteSpeech.emit(id);
     this.modalService.hideModal();
  }
  
  onSaveSpeech(body: Speech): void {
    body.id    = this.speech ? this.speech.id : this.speeches[this.speeches.length - 1].id + 1;
    body.title = this.speech ? this.speech.title : `Speech ${body.id}`;
    
    this.saveSpeech.emit(body);
  }
  
}
