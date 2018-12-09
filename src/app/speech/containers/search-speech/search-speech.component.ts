import { Component, OnInit } from '@angular/core';

import { SpeechService } from '@app/speech/speech.service';
import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-search-speech',
  templateUrl : './search-speech.component.html',
  styleUrls   : ['./search-speech.component.scss']
})
export class SearchSpeechComponent implements OnInit {
  
  keys: Object = Object.keys;
  speeches: Speech[];
  
  icons: string[] = ['trash', 'file', 'share'];
  
  constructor(private speechService: SpeechService) { }
  
  ngOnInit() {
    this.loadSpeeches();
  }
  
  loadSpeeches(): void {
    this.speechService
    .fetchSpeeches()
    .subscribe(speeches => this.speeches = speeches);
  }

}
