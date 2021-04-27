import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() listlable: any;
    @Input() listActive?: any;
    @Output() callback = new EventEmitter<any>();

    totalPage: number;
    currentPage: number = 1;
    dataSub = [];
    
    constructor() { }

    ngOnChanges() {
        console.log(this.data);
        this.totalPage = Math.ceil((this.data.length / 5));
        this.currentPage = 1;
        this.onLoadDatePagitor();
    }

    ngOnInit() {
        this.totalPage = Math.ceil((this.data.length / 5));
        this.onLoadDatePagitor();
    }

    nextPage = () => {
        if (this.currentPage + 1 > this.totalPage) return;
        this.currentPage += 1;
        this.onLoadDatePagitor();
    }

    backPage = () => {
        if (this.currentPage - 1 === 0) return;
        this.currentPage -= 1;
        this.onLoadDatePagitor();
    }

    onLoadDatePagitor = () => {
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * 5 <= ix && ix < this.currentPage * 5);
    }

    onClickSetting = (item, type) => {
        this.callback.emit({
            item: item,
            type: type
        })
    }

    onClickBtnActive = (i) => {
        this.callback.emit({
            type: i.type,
            service: i.service
        })
    }
}

