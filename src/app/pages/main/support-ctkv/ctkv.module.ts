import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CtkvRoutingModule } from './ctkv-routing.module';
import { CtkvComponent } from './ctkv.component';
import { UploadFileStkvComponent } from './upload-file-stkv/upload-file-stkv.component';
@NgModule({
    declarations: [
        CtkvComponent,
        UploadFileStkvComponent,
    ],
    imports: [
        CommonModule,
        CtkvRoutingModule,
    ],
    providers: [],
})
export class CtkvModule { }
