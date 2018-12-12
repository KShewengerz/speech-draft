import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Speech } from '@app/speech/models/speech.interface';

import { ModalService } from '@app/speech/services/modal.service';


/**
 * A component that is responsible for rendering the speech form template and its functionalities
 */
@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnChanges {
  
  /**
   * A variable that act as a parent form group for Speech Form
   *
   * @type {FormGroup}
   */
  form: FormGroup = this.fb.group(this.formFields);
  
  /**
   * A variable that stores a specific speech item from a list of speeches.
   *
   * @type {Speech}
   */
  speech: Speech;
  
  /**
   * A variable that is a passed from its caller's component that passes a list of speeches.
   *
   * @type {Speech[]}
   */
  @Input() speeches: Speech[];
  
  /**
   * A function that sets the local variable "this.speech" to the dynamic value changes from @Input() data passed from the caller's
   * component
   */
  @Input()
  set data(speech: Speech) {
    this.speech = speech;
  }
  
  /**
   * A Get function that returns the set speech from @Input() set data(speech)
   *
   * @returns {Speech}
   */
  get data(): Speech {
    return this.speech;
  }
  
  /**
   * A variable that emits a speech id to its caller component to perform the delete function
   *
   * @type {EventEmitter<number>>}
   */
  @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  
  /**
   * A variable that emits a speech data to its caller component to perform save function
   *
   * @type {EventEmitter<Speech>>}
   */
  @Output() saveSpeech: EventEmitter<Speech> = new EventEmitter<Speech>();
  
  /**
   * @param {FormBuilder} fb            - responsible for building an initial form group with its corresponding form fields
   * @param {ModalService} modalService - responsible for showing/hiding a modal
   */
  constructor(private fb: FormBuilder,
              private modalService: ModalService) { }
  
  /**
   * A function that detects changes within the component and the @Input() values. If this.speech has been detected to have a value, then
   * it will call the setFormValues() function to set the corresponding form controls with its new speech data.
   */
  ngOnChanges(): void {
    if (this.speech) this.setFormValues();
  }
  
  /**
   * A Get function that is responsible for returning a group of form controls with its designated initial value and validators
   *
   * @returns {any}
   */
  get formFields(): any {
    const fields     = ['content', 'author', 'keywords', 'date'];
    const formFields = fields.reduce((acc, field) => Object.assign(acc,{ [field] : this.requiredField }), {});
    
    return formFields;
  }
  
  /**
   * A Get function that is responsible for returning a static value for the field control assignment value and validator
   *
   * @returns {[string, Function]}
   */
  get requiredField(): [string, Function] {
    return [ '', Validators.required ];
  }
  
  /**
   * A function that is responsible on setting values based on the passed @Input() speech from the caller's component
   */
  setFormValues(): void {
     const { content, author, keywords, date } = this.speech;
     this.form.setValue({ content, author, keywords, date });
  }
  
  /**
   * A function that shows modal based on its type e.g view, delete, share or success
   *
   * @param {string} type - the template's type
   */
  openModal(type: string) {
    this.modalService.showModal(type);
  }
  
  /**
   * A function that is responsible on emitting an id to caller's component to perform its delete functionality
   *
   * @param {number} id - the speech id
   */
  onDeleteSpeech(id: number): void {
     this.deleteSpeech.emit(id);
     this.modalService.hideModal();
  }
  
  /**
   * A function that is responsible on emitting a new speech data to its caller component
   *
   * @param {Speech} body - the speech data
   */
  onSaveSpeech(body: Speech): void {
    body.id    = this.speech ? this.speech.id : this.speeches[this.speeches.length - 1].id + 1;
    body.title = this.speech ? this.speech.title : `Speech ${body.id}`;
  
    if (!this.speech) this.form.reset();
    
    this.saveSpeech.emit(body);
  }
  
}
