import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportPortalComponent } from './report/report-portal/report-portal.component';
import { ReportCtkvComponent } from './report/report-ctkv/report-ctkv.component';
import { ReportVncertComponent } from './report/report-vncert/report-vncert.component';
import { ReportCskhComponent } from './report/report-cskh/report-cskh.component';

const routes: Routes = [
    {
        path: 'report-portal',
        component: ReportPortalComponent,
    },
    {
        path: 'report-ctkv',
        component: ReportCtkvComponent,
    },
    {
        path: 'report-vncert',
        component: ReportVncertComponent,
    },
    {
        path: 'report-cskh',
        component: ReportCskhComponent,
    },
    {
        path: '',
        redirectTo: 'report-portal',
        pathMatch: 'full',
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportRoutingModule { }