import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatDateService } from '../../services/format-date.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
    @Input() listFilter: any;
    @Input() data: any;
    @Output() callback = new EventEmitter<any>();
    constructor(
        private serviceDate: FormatDateService
    ) { }
    startDate = '2021-04-07';
    endDate = '2021-04-27';
    onChangeValueDate = (valueDate, item) => {
        if (item.type === 'date') {

            item.value = this.serviceDate.formatDate(valueDate, 'MM-DD-YYYY');
            console.log(item);
            
        }
        if (item.type === 'datePicker') {
           item.startdate = this.serviceDate.formatDate(this.startDate, 'MM-DD-YYYY');
           item.enddate = this.serviceDate.formatDate(this.endDate, 'MM-DD-YYYY');
        }else {
            item.value = valueDate;            
        }
        this.callback.emit(item)
    }



}
