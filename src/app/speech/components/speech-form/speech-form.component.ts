import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Speech } from '@app/speech/models/speech.interface';
import { ModalService } from '@app/speech/components/speech-form/modal/modal.service';


@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss'],
  providers   : [ BsModalService ]
})
export class SpeechFormComponent implements OnChanges {
  
  form: FormGroup = this.fb.group(this.formFields);
  
  speech: Speech;
  modalRef: BsModalRef;
  
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
              private bsModalService: BsModalService,
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
  
  openModal(type: string) {
    const template = this.modalService.templates.get(type);
    this.modalRef = this.bsModalService.show(template, { class: 'modal-md modal-dialog-centered' });
  }
  
  onDeleteSpeech(id: number): void {
     this.deleteSpeech.emit(id);
     this.modalRef.hide();
  }
  
  onSaveSpeech(body: Speech): void {
    body.id    = this.speech ? this.speech.id : this.speeches[this.speeches.length - 1].id + 1;
    body.title = this.speech ? this.speech.title : `Speech ${body.id}`;
    
    this.saveSpeech.emit(body);
  }
  
}
