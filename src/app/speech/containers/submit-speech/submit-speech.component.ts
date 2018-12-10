import { Component, OnInit } from '@angular/core';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-submit-speech',
  templateUrl : './submit-speech.component.html',
  styleUrls   : ['./submit-speech.component.scss']
})
export class SubmitSpeechComponent implements OnInit {

  speeches: Speech[];
  
  constructor(private modalService: ModalService,
              private speechService: SpeechService) { }
  
  ngOnInit() {
    this.loadSpeeches();
  }
  
  loadSpeeches(): void {
    this.speechService
    .fetchSpeeches()
    .subscribe(speeches => this.speeches = speeches);
  }
  
  onSaveSpeech(speech: Speech): void {
    this.speechService
      .saveSpeech(speech, 'add')
      .subscribe(() => this.openModal());
  }
  
  openModal(): void {
    this.modalService.showModal('success');
  }

}
