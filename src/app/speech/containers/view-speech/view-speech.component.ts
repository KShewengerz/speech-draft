import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-view-speech',
  templateUrl : './view-speech.component.html',
  styleUrls   : ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit {
  
  speeches: Speech[];
  selectedSpeech: Speech;

  constructor(private router: Router,
              private speechService: SpeechService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.loadSpeeches();
  }
  
  loadSpeeches(): void {
    this.speechService
      .fetchSpeeches()
      .subscribe(speeches => {
        this.speeches = speeches;
        this.selectedSpeech = speeches[0];
      });
  }
  
  onSpeechDelete(id: number): void {
    this.speechService
      .deleteSpeech(id)
      .subscribe(() => this.selectedSpeech = this.speeches[0]);
  }
  
  onSaveSpeech(speech: Speech): void {
    this.speechService
      .saveSpeech(speech)
      .subscribe(isAdd => this.modalService.showModal('success'));
  }

}
