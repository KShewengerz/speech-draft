import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


/**
 * A component that is responsible for rendering the view speech tab content template and its functionalities
 */
@Component({
  selector    : 'app-view-speech',
  templateUrl : './view-speech.component.html',
  styleUrls   : ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit {
  
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
   * @param router         - responsible for route navigation
   * @param speechService  - responsible for speech's fetch, delete and save functionality
   * @param modalService   - responsible for showing/hiding a modal
   */
  constructor(private router: Router,
              private speechService: SpeechService,
              private modalService: ModalService) { }
  
  /**
   * A function that performs an initial call to load the speeches fetched from a service
   */
  ngOnInit() {
    this.loadSpeeches();
  }
  
  /**
   * A function that fetches and loads a list of speeches and assign it to its local variable "this.speeches" and assign the 1st item of
   * the list to its other local variable "this.selectedSpeech"
   */
  loadSpeeches(): void {
    this.speechService
      .fetchSpeeches()
      .subscribe(speeches => {
        this.speeches = speeches;
        this.selectedSpeech = speeches[0];
      });
  }
  
  /**
   * A function that is responsible for deleting a speech and selects the 1st item from the speech list after the delete call is
   * successful
   *
   * @param {number} id - the selected speech id
   */
  onSpeechDelete(id: number): void {
    this.speechService
      .deleteSpeech(id)
      .subscribe(() => this.selectedSpeech = this.speeches[0]);
  }
  
  /**
   * A function that is responsible for saving a speech and showing a success modal after its call is successful
   *
   * @param {Speech} speech - the selected speech item from speech's list.
   */
  onSaveSpeech(speech: Speech): void {
    this.speechService
      .saveSpeech(speech)
      .subscribe(isAdd => this.modalService.showModal('success'));
  }

}
