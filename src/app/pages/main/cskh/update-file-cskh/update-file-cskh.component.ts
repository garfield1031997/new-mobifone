import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-update-file-cskh',
    template: `<app-form-upload [(data)]="dataUpload" (callback)="handleCallback($event)"></app-form-upload>`
})
export class UpdateFileCskhComponent implements OnInit {

    constructor() { }
    dataUpload: any = [];
    ngOnInit(): void {
    }
    
    handleCallback(ev){
        this.dataUpload = ev;        
    }

}
