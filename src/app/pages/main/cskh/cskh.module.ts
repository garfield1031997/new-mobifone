import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateCSKHComponent } from './create/create-cskh.component';
import { CSKHPingComponent } from './cskh-page/cskh-ping.component';
import { CSKHRoutingModule } from './cskh-routing.module';
import { CSKHComponent } from './cskh-total/cskh.component';
import { ScanDetailComponent } from './scan/scan-detail/scan-detail.component';
import { ScanComponent } from './scan/scan.component';
import { UpdateFileCskhComponent } from './update-file-cskh/update-file-cskh.component';
@NgModule({
    declarations: [CSKHComponent, ScanComponent, UpdateFileCskhComponent, CSKHPingComponent, ScanDetailComponent, CreateCSKHComponent],
    imports: [
        CommonModule,
        CSKHRoutingModule,
    ],
    providers: [],
})
export class CSKHModule { }
