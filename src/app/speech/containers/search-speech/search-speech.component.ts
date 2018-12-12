import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


/**
 * A component that is responsible for rendering the search speech tab content template and its functionalities
 */
@Component({
  selector    : 'app-search-speech',
  templateUrl : './search-speech.component.html',
  styleUrls   : ['./search-speech.component.scss']
})
export class SearchSpeechComponent implements OnInit {
  
  /**
   * A variable that act as a parent formGroup for speech form
   *
   * @type {FormGroup}
   */
  form: FormGroup = this.fb.group({ author: '', keywords: '', date: '' });
  
  /**
   * A variable that stores speech keys used to loop within the table's headers
   *
   * @type {string[]}
   */
  speechKeys: string[] = ['Id', 'Title', 'Author', 'Keywords', 'Date', ''];
  
  /**
   * A variable that is used to store a list of speeches.
   *
   * @type {Speech[]}
   */
  speeches: Speech[];
  
  /**
   * A variable that is used to store a selected speech from a list of speeches
   *
   * @type {Speech}
   */
  selectedSpeech: Speech;
  
  /**
   * A variable that is used to store the values from the author, keywords and date form fields
   *
   * @type {Object}
   */
  filters: Object = {};
  
  /**
   * @param fb {FormBuilder}              - responsible for building an initial form group with its corresponding form fields
   * @param speechService {SpeechService} - responsible for speech's fetch, delete and save functionality
   * @param modalService {ModalService}   - responsible for showing/hiding a modal
   */
  constructor(private fb: FormBuilder,
              private speechService: SpeechService,
              private modalService: ModalService) { }
  
  /**
   * A function that performs an initial call to load the speeches fetched from a service
   */
  ngOnInit() {
    this.loadSpeeches();
  }
  
  /**
   * A function that fetches and loads a list of speeches and assign it to its local variable "this.speeches"
   */
  loadSpeeches(): void {
    this.speechService
      .fetchSpeeches()
      .subscribe(speeches => this.speeches = speeches);
  }
  
  /**
   * A function that is responsible for showing the speech's content placed in a modal form
   *
   * @param {Speech} speech - the selected speech item from speech's list.
   */
  viewSpeech(speech: Speech): void {
    this.selectedSpeech = speech;
    this.modalService.showModal('view');
  }
  
  /**
   * A function that is responsible for a delete speech confirmation modal form
   *
   * @param {Speech} speech - the selected speech item from speech's list.
   */
  deleteSpeech(speech: Speech): void {
    this.selectedSpeech = speech;
    this.modalService.showModal('delete');
  }
  
  /**
   * A function that is responsible for sharing a speech placed in a modal form which shows a field to supply an email address
   *
   * @param {Speech} speech - the selected speech item from speech's list.
   */
  shareSpeech(speech: Speech): void {
    this.selectedSpeech = speech;
    this.modalService.showModal('share');
  }
  
  /**
   * A function that is responsible for deleting a speech and hides its delete confirmation thereafter
   *
   * @param {number} id - the selected speech id
   */
  onSpeechDelete(id: number): void {
    this.speechService
      .deleteSpeech(id)
      .subscribe(() => this.modalService.hideModal());
  }

}
