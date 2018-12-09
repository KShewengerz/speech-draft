import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SpeechService } from '@app/speech/speech.service';
import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-search-speech',
  templateUrl : './search-speech.component.html',
  styleUrls   : ['./search-speech.component.scss']
})
export class SearchSpeechComponent implements OnInit {
  
  form: FormGroup = this.fb.group({ author: '', keywords: '', date: new Date() });
  
  speechKeys: string[] = ['id', 'title', 'author', 'keywords', 'date', ''];
  speeches: Speech[];
  
  icons: string[] = ['trash', 'file', 'share'];
  
  constructor(private fb: FormBuilder,
              private speechService: SpeechService) { }
  
  ngOnInit() {
    this.loadSpeeches();
  }
  
  loadSpeeches(): void {
    this.speechService
    .fetchSpeeches()
    .subscribe(speeches => this.speeches = speeches);
  }

}
