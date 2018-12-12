import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Speech } from '@app/speech/models/speech.interface';

import { speeches } from '@app/speech/speech.data';


/**
 * A service that is responsible for speech activity e.g fetch, delete and save a speech
 */
@Injectable({ providedIn: 'root' })
export class SpeechService {
  
  /**
   * A variable that is an instance of a Speech that will be used to store the dummy speech lists.
   *
   * @type {Speech[]}
   */
  list: Speech[] = speeches;
  
  constructor() {}
  
  /**
   * A function that is responsible for fetching and returning a list of speeches.
   *
   * @returns {Observable<Speech[]>>}
   */
  fetchSpeeches(): Observable<Speech[]> {
    return of(this.list);
  }
  
  /**
   * A function that is responsible on deleting a speech based on the provided ID by the user.
   *
   * @param {number} id - the speech id
   * @returns {Observable<string>}
   */
  deleteSpeech(id: number): Observable<string> {
    const index = this.list.findIndex(item => item.id === id);
    this.list.splice(index, 1);
    
    return of('Success');
  }
  
  /**
   * A function that is responsible on saving a speech. If the user exists, the function will perform an update on the
   * user based on the provided speech param otherwise it will create a new speech.
   *
   * @param {Speech} speech - the speech data
   * @returns {Observable<string>>}
   */
  saveSpeech(speech: Speech): Observable<string> {
    const compare  = item => item.id === speech.id;
    const isExists = this.list.some(compare);
    
    if (isExists) this.list.map(item => compare(item) ? Object.assign(item, speech) : item );
    else this.list.push(speech);
    
    return of('Success');
  }
  
}
