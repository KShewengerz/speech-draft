import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Speech } from '@app/speech/models/speech.interface';

import { SpeechService } from '@app/speech/services/speech.service';
import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-search-speech',
  templateUrl : './search-speech.component.html',
  styleUrls   : ['./search-speech.component.scss']
})
export class SearchSpeechComponent implements OnInit {
  
  form: FormGroup = this.fb.group({ author: '', keywords: '', date: new Date() });
  
  speechKeys: string[] = ['Id', 'Title', 'Author', 'Keywords', 'Date', ''];
  speeches: Speech[];
  selectedSpeech: Speech;
  
  constructor(private fb: FormBuilder,
              private speechService: SpeechService,
              private modalService: ModalService) { }
  
  ngOnInit() {
    this.loadSpeeches();
  }
  
  loadSpeeches(): void {
    this.speechService
    .fetchSpeeches()
    .subscribe(speeches => this.speeches = speeches);
  }
  
  viewSpeech(speech: Speech): void {
    console.log('view');
  }
  
  deleteSpeech(speech: Speech): void {
    this.selectedSpeech = speech;
    this.modalService.showModal('delete');
  }
  
  shareSpeech(speech: Speech): void {
    this.selectedSpeech = speech;
    this.modalService.showModal('share');
  }
  
  onSpeechDelete(id: number): void {
    this.speechService
      .deleteSpeech(id)
      .subscribe(() => this.modalService.hideModal());
  }

}
