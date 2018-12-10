import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Speech } from '@app/speech/models/speech.interface';

import { speeches } from '@app/speech/containers/speech/speech.data';


@Injectable({ providedIn: 'root' })
export class SpeechService {
  
  list: Speech[] = speeches;
  
  constructor() {}
  
  fetchSpeeches(): Observable<Speech[]> {
    return of(this.list);
  }
  
  deleteSpeech(id: number): Observable<string> {
    const index = this.list.findIndex(item => item.id === id);
    this.list.splice(index, 1);
    
    return of('Success');
  }
  
  saveSpeech(speech: Speech, type?: string): Observable<boolean> {
    const compare  = item => item.id === speech.id;
    const isExists = this.list.some(compare);
    
    if (isExists) this.list.map(item => compare(item) ? Object.assign(item, speech) : item );
    else this.list.push(speech);
    
    return of(!!type);
  }
  
}
