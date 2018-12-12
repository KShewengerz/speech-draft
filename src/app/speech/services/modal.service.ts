import { Injectable, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


/**
 * A service that is responsible for showing and hiding a modal and stores the templates as well to be used as a factor to
 * render a certain template based on its type (view, success, delete and share)
 */
@Injectable({ providedIn: 'root' })
export class ModalService {
  
  /**
   * A variable that is a template instance responsible for storing templates in a Map with its key and value (template) to
   * easily fetch a certain template based on its key (view, success, delete and share)
   *
   * @type {Map<string, TemplateRef<any>>>}
   */
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  
  /**
   * A variable that is an instance of a modal from ngx-bootstrap, this will store the instance of the modalService when shown
   * and will be used to call to hide the modal.
   *
   * @type {BsModalRef}
   */
  modalRef: BsModalRef;
  
  /**
   * @param {BsModalService} bsModalService - responsible for showing/hiding a modal
   */
  constructor(private bsModalService: BsModalService) {}
  
  /**
   * A function that is responsible for showing a modal which its template is based on the param type supplied from the user
   *
   * @param {string} type - the template type e.g view, share, delete or success
   */
  showModal(type: string): void {
    const template = this.templates.get(type);
    const size     = type === 'view' ? 'lg' : 'md';
    
    this.modalRef  = this.bsModalService.show(template, { class: `modal-${size} modal-dialog-centered` });
  }
  
  /**
   * A function that is responsible for hiding the current active modal
   */
  hideModal(): void {
    this.modalRef.hide();
  }
  
}
