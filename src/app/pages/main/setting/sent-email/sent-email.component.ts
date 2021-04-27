import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSettingEmailComponent } from './create-setting-email/create-setting-email.component';

@Component({
    selector: 'app-sent-email',
    templateUrl: './sent-email.component.html',
    styleUrls: ['./sent-email.component.scss']
})
export class SentEmailComponent implements OnInit {
    ishow = false;
    showActive = false;
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {

    }
    openCreateDialog(title: string) {
        this.dialog.open(CreateSettingEmailComponent, {
            width: '1500px',
            height: '900px',
            data: {
                    title: `${title}`,
                    type: 'create'
                }
        }).afterClosed().subscribe(result => {

        });
    }
    checkIshow = () => {
        this.ishow = !this.ishow;
    }

    isActive = () => {
        this.showActive = !this.showActive;
    }

}
