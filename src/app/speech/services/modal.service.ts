import { Injectable, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Injectable({ providedIn: 'root' })
export class ModalService {
  
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  modalRef: BsModalRef;
  
  constructor(private bsModalService: BsModalService) {}
  
  showModal(type: string, size: string): void {
    const template = this.templates.get(type);
    this.modalRef  = this.bsModalService.show(template, { class: `modal-${size} modal-dialog-centered` });
  }
  
  hideModal(): void {
    this.modalRef.hide();
  }
  
}
