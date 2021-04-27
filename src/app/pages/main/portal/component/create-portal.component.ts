import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';
import { PortalService } from 'src/app/common/service/portal.service';

@Component({
    selector: 'app-create-portal',
    template: `<app-create 
                [(data)]="listCreate" 
                [(option)]="option"
                [(arrayButton)]="arrayButton"
                (callback)="handleCallbackEvent($event)"
                ></app-create>`
})
export class CreatePortalComponent implements OnInit {
    conFig = new PortalModel;
    dataModel = {};
    option = {
        title: 'Thêm mới thông tin',
        type: 'create'
    };

    arrayButton = [{
        class: 'mbf-btn-cancel',
        text: 'Hủy bỏ'
    }, {
        class: 'mbf-btn-save-note',
        text: 'Nội bộ'
    },
    {
        class: 'mbf-btn-save',
        text: 'Gửi đi'
    }]

    constructor(
        private dialogRef: MatDialogRef<CreatePortalComponent>,
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
