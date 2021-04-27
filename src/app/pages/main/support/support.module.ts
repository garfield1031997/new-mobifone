import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
    declarations: [SupportComponent, UploadFileComponent],
    imports: [
        CommonModule,
        SupportRoutingModule,
    ],
    providers: [],
})
export class SupportModule { }
