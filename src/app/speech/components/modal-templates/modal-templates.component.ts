import { Component, Input, AfterViewInit, TemplateRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

import { Speech } from '@app/speech/models/speech.interface';

import { ModalService } from '@app/speech/services/modal.service';


/**
 * A component that is responsible for storing a set of ng-templates for types e.g delete, share, view and success templates
 */
@Component({
  selector    : 'app-modal-templates',
  templateUrl : './modal-templates.component.html',
  styleUrls   : ['./modal-templates.component.scss']
})
export class ModalTemplatesComponent implements AfterViewInit {
  
  /**
   * A variable that is used to store the recipient's email address
   *
   * @type {string}
   */
  emailAddress: string;
  
  /**
   * A variable that is a passed from its caller's component that has a value of a list of speeches.
   *
   * @type {Speech}
   */
  @Input() speech: Speech;
  
  /**
   * A variable that emits a speech id to its caller component to perform the delete function
   *
   * @type {EventEmitter<number>>}
   */
  @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
  
  /**
   * Fetches the container's TemplateRef's children
   *
   * @type {QueryList<TemplateRef<any>>>}
   */
  @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  
  /**
   * @param {ModalService} modalService - responsible for showing/hiding a modal
   */
  constructor(private modalService: ModalService) {}
  
  /**
   * After the view has been rendered, iterate the templates fetched from @ViewChildren TemplateRef and store them on the modalService's
   * templates that has an interface of Map<string, TemplateRef> to be used on registering a template and use them to show a modal based
   * on its keys (templateKeys)
   */
  ngAfterViewInit(): void {
    const templateKeys = ['delete', 'share', 'success', 'view'];
    
    this.templates.forEach((template, index) => this.modalService.templates.set(templateKeys[index], template));
  }
  
  /**
   * A function that is responsible on emitting an id to caller's component to perform its delete functionality
   *
   * @param {number} id - the speech id
   */
  onDeleteSpeech(id: number): void {
    this.deleteSpeech.emit(id);
  }
  
  /**
   * A function that is responsible on sharing a speech but since this is a dummy function, this will just close the modal after the
   * shareSpeech is shown
   *
   * @param {number} id           - the speech id
   * @param {string} emailAddress - the recipient's email address
   */
  onShareSpeech(id: number, emailAddress: string): void {
    this.emailAddress = '';
    this.closeModal();
  }
  
  /**
   * A function that calls the modalService to hide the current existing modal.
   */
  closeModal(): void {
    this.modalService.hideModal();
  }
  
}
