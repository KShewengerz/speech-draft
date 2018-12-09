import { Component, OnInit, Input } from '@angular/core';



import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-speech-form',
  templateUrl : './speech-form.component.html',
  styleUrls   : ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit {

  @Input() speech: Speech;
  
  constructor() { }

  ngOnInit() {}

}
