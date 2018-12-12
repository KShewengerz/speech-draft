import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Speech } from '@app/speech/models/speech.interface';


/**
 * A pipe that is responsible for table filter either by author, keywords and date.
 */
@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  
  /**
   * @param {DatePipe} datePipe - responsible for converting raw dates to a specific and readable format.
   */
  constructor(private datePipe: DatePipe) {}
  
  /**
   * A function that is responsible for table filter
   *
   * @param list    - the table list value
   * @param filters - contains an object that will be used to filter the table per user's keydown event to author, keywords and date fields.
   * @returns {Speech[]}
   */
  transform(list: any[], filters: Object): Speech[] {
    if (filters) {
      const keys            = filters ? Object.keys(filters).filter(key => filters[key]) : [];
      const filterSpeeches  = speech => keys.every(key => {
        if (typeof speech[key] === 'string') return this.transformLowerCase(speech[key]).includes(this.transformLowerCase(filters[key]));
        else return this.transformDate(speech[key]) === this.transformDate(filters[key]);
      });
      
      return keys.length ? list.filter(filterSpeeches) : list;
    }
  }
  
  /**
   * A function that is responsible for transforming date to its desired readable format
   *
   * @param {Date} value - the raw date
   * @returns {string}
   */
  transformDate(value: Date): string {
    return this.datePipe.transform(value, 'shortDate');
  }
  
  /**
   * A function that is responsible for transforming any capitalcase letters to lowercase
   *
   * @param {string} value - the word to tranform
   * @returns {string}
   */
  transformLowerCase(value: string): string {
    return value.toLocaleLowerCase();
  }
}
