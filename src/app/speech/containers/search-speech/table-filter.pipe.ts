import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  
  constructor(private datePipe: DatePipe) {}
  
  transform(list: any[], filters: Object) {
    const keys            = filters ? Object.keys(filters).filter(key => filters[key]) : [];
    const filterSpeeches  = speech => keys.every(key => {
      if (typeof speech[key] === 'string') return this.transformLowerCase(speech[key]).includes(this.transformLowerCase(filters[key]));
      else return this.transformDate(speech[key]) === this.transformDate(filters[key]);
    });
    
    return keys.length ? list.filter(filterSpeeches) : list;
  }
  
  transformDate(value: Date): string {
    return this.datePipe.transform(value, 'shortDate');
  }

  transformLowerCase(value: string): string {
    return value.toLocaleLowerCase();
  }
}
