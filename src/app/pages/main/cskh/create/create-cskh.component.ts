import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';
import { CSKHModel } from 'src/app/common/model/cskh.model';
import { PortalService } from 'src/app/common/service/portal.service';

@Component({
    selector: 'app-create-cskh',
    template: `<app-create 
                [(data)]="listCreate" 
                [(option)]="option"
                [(arrayButton)]="arrayButton"
                (callback)="handleCallbackEvent($event)"
                ></app-create>`
})
export class CreateCSKHComponent implements OnInit {
    conFig = new CSKHModel;
    dataModel = {};
    option = {
        title: 'Thêm mới trang CSKH',
        type: 'create'
    };

    arrayButton = [{
        class: 'mbf-btn-cancel',
        text: 'Hủy bỏ'
    },
    {
        class: 'mbf-btn-save',
        text: 'Lưu'
    }]

    constructor(
        private dialogRef: MatDialogRef<CreateCSKHComponent>,
        private service: PortalService,
    ) { }

    listCreate = [];

    ngOnInit(): void {
        this.listCreate = this.conFig.create;
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
