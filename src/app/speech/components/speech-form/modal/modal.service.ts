import { Injectable, TemplateRef } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ModalService {
  
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  
  constructor() {}
  
}
