import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Speech } from '@app/speech/models/speech.interface';


@Injectable({ providedIn: 'root' })
export class SpeechService {
  
  constructor() {}
  
  fetchSpeeches(): Observable<Speech[]> {
    const speeches: Speech[] = [
      {
        id: 1,
        title: 'Speech 1',
        content: 'This is Speech 1',
        author: 'Mark Dave',
        keywords: 'romance, comedy',
        date: new Date('12/07/2018')
      },
      {
        id: 1,
        title: 'Speech 2',
        content: 'This is Speech 2',
        author: 'John Doe',
        keywords: 'politics',
        date: new Date('12/08/2018')
      },
      {
        id: 1,
        title: 'Speech 3',
        content: 'This is Speech 3',
        author: 'Todd Wheel',
        keywords: 'inspirational, motivation',
        date: new Date('12/08/2018')
      }
    ];
    
    return of(speeches);
  }
  
}
