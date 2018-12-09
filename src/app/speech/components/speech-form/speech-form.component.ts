import { Component, Input, OnChanges, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Speech } from '@app/speech/models/speech.interface';


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
  
  @Output()
  deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private fb: FormBuilder,
              private modalService: BsModalService) { }
  
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
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md modal-dialog-centered' });
  }
  
  onDeleteSpeech(id: number): void {
    this.deleteSpeech.emit(id);
    this.modalRef.hide();
  }
  
}
