import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tab, tabs } from '@app/speech/containers/speech/speech.data';


@Component({
  selector    : 'app-speech',
  templateUrl : './speech.component.html',
  styleUrls   : ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {
  
  speechTabs: Tab[] = tabs;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setActiveTabByCurrentUrl();
  }
  
  setActiveTabByCurrentUrl(): void {
    const currentUrl = this.router.url.split('/')[2];
    this.speechTabs.forEach(speech => speech.url === currentUrl ? (speech.active = true) : speech);
  }

}
