import { Component, OnInit } from '@angular/core';

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

  constructor(private speechService: SpeechService) { }

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

}
