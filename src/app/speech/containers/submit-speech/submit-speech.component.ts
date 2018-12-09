import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { SpeechService } from '@app/speech/speech.service';

import { Speech } from '@app/speech/models/speech.interface';


@Component({
  selector    : 'app-submit-speech',
  templateUrl : './submit-speech.component.html',
  styleUrls   : ['./submit-speech.component.scss'],
  providers   : [ BsModalService ]
})
export class SubmitSpeechComponent implements OnInit {

  speeches: Speech[];
  modalRef: BsModalRef;
  
  @ViewChild('success', { read: TemplateRef }) successTemplate: TemplateRef<any>;
  
  constructor(private bsModalService: BsModalService,
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
      .subscribe(() => this.openModal(this.successTemplate));
  }
  
  openModal(template): void {
    this.modalRef = this.bsModalService.show(template, { class: 'modal-md modal-dialog-centered' });
  }

}
