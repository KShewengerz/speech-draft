import { Component, OnInit } from '@angular/core';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


/**
 * A component that is responsible for rendering the submit speech tab content template and its functionalities
 */
@Component({
  selector    : 'app-submit-speech',
  templateUrl : './submit-speech.component.html',
  styleUrls   : ['./submit-speech.component.scss']
})
export class SubmitSpeechComponent implements OnInit {
  
  /**
   * A variable that stores a list of speeches.
   *
   * @type {Speech[]}
   */
  speeches: Speech[];
  
  /**
   * @param {ModalService} modalService   - responsible for showing/hiding a modal
   * @param {SpeechService} speechService - responsible for speech's fetch, delete and save functionality
   */
  constructor(private modalService: ModalService,
              private speechService: SpeechService) { }
  
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
   * A function that is responsible for saving a speech and showing a success modal after its call is successful
   *
   * @param {Speech} speech - the selected speech item from speech's list.
   */
  onSaveSpeech(speech: Speech): void {
    this.speechService
      .saveSpeech(speech, 'add')
      .subscribe(() => this.modalService.showModal('success'));
  }

}
