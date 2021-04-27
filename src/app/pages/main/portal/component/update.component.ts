import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';
import { PortalService } from 'src/app/common/service/portal.service';

@Component({
    selector: 'app-update',
    template: `<app-create 
                [(data)]="listUpadte" 
                [(dataModel)]="dataModel" 
                [(option)]="option"
                [(arrayButton)]="arrayButton"
                (callback)="handleCallbackEvent($event)"
                ></app-create>`
})
export class  UpdateComponent implements OnInit {
    conFig = new PortalModel;
    dataModel;
    option = {
        title: 'Chỉnh sửa thông tin',
        type: 'update'
    };

    arrayButton = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<UpdateComponent>,
        private service: PortalService,
    ) { }

    listUpadte = []

    ngOnInit(): void {
        this.dataModel = this.data;
        this.listUpadte = this.conFig.create;
        this.arrayButton = this.conFig.arrayBtn;
    }

    handleCallbackEvent = (value) => {
        switch (value.class) {
            case 'mbf-btn-save-note':
                this.onFunictionSaveNote();
                break;
            case 'mbf-btn-save':
                this.onFunictionSave()
                break;
            default:
                break;
        }
        this.dialogRef.close();
    }

    onFunictionSaveNote = () => {
        console.log(this.dataModel);
    }

    onFunictionSave = () => {
        console.log(this.dataModel);
    }

}
