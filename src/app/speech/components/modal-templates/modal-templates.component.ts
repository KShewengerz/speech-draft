import { Component, Input, AfterViewInit, TemplateRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

import { Speech } from '@app/speech/models/speech.interface';

import { ModalService } from '@app/speech/services/modal.service';


@Component({
  selector    : 'app-modal-templates',
  templateUrl : './modal-templates.component.html',
  styleUrls   : ['./modal-templates.component.scss']
})
export class ModalTemplatesComponent implements AfterViewInit {
  
  emailAddress: string;
  
  @Input() speech: Speech;
  @Input() modalRef: BsModalRef;
  
  @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  
  @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  
  constructor(private modalService: ModalService) {}
  
  ngAfterViewInit(): void {
    const templateKeys = ['delete', 'share', 'success', 'view'];
    
    this.templates.forEach((template, index) => this.modalService.templates.set(templateKeys[index], template));
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
