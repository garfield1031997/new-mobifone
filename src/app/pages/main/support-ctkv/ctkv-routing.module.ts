import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CtkvComponent } from './ctkv.component';

const routes: Routes = [
    {
        path: '',
        component: CtkvComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CtkvRoutingModule { }
