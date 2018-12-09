import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpeechService } from '@app/speech/speech.service';
import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-view-speech',
  templateUrl : './view-speech.component.html',
  styleUrls   : ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit {
  
  speeches: Speech[];
  selectedSpeech: Speech;

  constructor(private router: Router,
              private speechService: SpeechService) { }

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
      .subscribe(isAdd => isAdd ? this.selectedSpeech = this.speeches[this.speeches.length - 1] : null);
  }

}
