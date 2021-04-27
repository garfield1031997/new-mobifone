import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingSendEmailModel } from 'src/app/common/model/setting-send-email.model';

@Component({
    selector: 'app-create-setting-email',
    template: `
                <app-create 
                    [(data)]="listCreate" 
                    [(option)]="option"
                    [(arrayButton)]="arrayButton"
                    (callback)="handleCallbackEvent($event)"
                    >
                </app-create>`
})
export class CreateSettingEmailComponent implements OnInit {

    conFig = new SettingSendEmailModel;
    option = this.data;
    arrayButton = [{
        class: 'mbf-btn-cancel',
        text: 'Hủy bỏ'
    },
    {
        class: 'mbf-btn-save',
        text: 'Lưu ngay'
    }];
    listCreate = []

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<CreateSettingEmailComponent>,

    ) { }

    ngOnInit(): void {
        this.listCreate = this.conFig.create;
        console.log(this.data);
        
    }

    handleCallbackEvent = (value) => {
        switch (value.class) {
            case 'mbf-btn-save-note':
                break;
            case 'mbf-btn-save':
                break;
            default:
                break;
        }
        this.dialogRef.close();
    }

}
