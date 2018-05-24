import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../utilities';
@Pipe({
    name: 'yearMonthFilter'
})
export class YearFilterPipe implements PipeTransform {
    transform(items: Payment[] = [], filter: any): any {
        if (!filter.year) {return items; }
        let arrayFilter: any;
        if (filter.month) {
            arrayFilter = item => item.year === +filter.year && item.month === filter.month;
        } else {
            arrayFilter = item => item.year === +filter.year;
        }
        return items.filter(arrayFilter);
    }
}
