import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tab } from '@app/speech/containers/speech/speech.interface';

import { tabs } from '@app/speech/containers/speech/speech.data';


@Component({
  selector    : 'app-speech',
  templateUrl : './speech.component.html',
  styleUrls   : ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {
  
  speechTabs: Tab[] = tabs;

  constructor(private router: Router) { }

  ngOnInit() {}

}
