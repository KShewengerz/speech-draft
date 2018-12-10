import { Component, Input, AfterViewInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

import { Speech } from '@app/speech/models/speech.interface';

import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-modal-template',
  templateUrl : './modal-template.component.html',
  styleUrls   : ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements AfterViewInit {
  
  emailAddress: string;
  
  @Input() speech: Speech;
  @Input() modalRef: BsModalRef;
  
  @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  
  @ViewChild('delete', { read: TemplateRef }) deleteTemplate: TemplateRef<any>;
  @ViewChild('share', { read: TemplateRef }) shareTemplate: TemplateRef<any>;
  @ViewChild('success', { read: TemplateRef }) successTemplate: TemplateRef<any>;
  @ViewChild('view', { read: TemplateRef }) viewTemplate: TemplateRef<any>;
  
  constructor(private modalService: ModalService) {}
  
  ngAfterViewInit(): void {
    this.modalService.templates.set('delete', this.deleteTemplate);
    this.modalService.templates.set('share', this.shareTemplate);
    this.modalService.templates.set('success', this.successTemplate);
    this.modalService.templates.set('view', this.viewTemplate);
  }
  
  onDeleteSpeech(id: number): void {
    this.deleteSpeech.emit(id);
  }
  
  onShareSpeech(id: number, emailAddress: string): void {
    this.emailAddress = '';
    this.closeModal();
  }
  
  closeModal(): void {
    this.modalService.hideModal();
  }
  
}
