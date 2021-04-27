import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CSKHComponent } from './cskh-total/cskh.component';
import { ScanComponent } from './scan/scan.component';
import { CSKHPingComponent } from './cskh-page/cskh-ping.component';
const routes: Routes = [
    {
        path: 'total',
        component: CSKHComponent,
    },
    {
        path: 'ping',
        component: CSKHPingComponent,
    },
    {
        path: 'scan',
        component: ScanComponent,
    },
    {
        path: '',
        redirectTo: 'total',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CSKHRoutingModule { }
