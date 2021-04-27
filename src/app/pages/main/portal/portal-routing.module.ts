import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortalComponent } from './portal.component';
import { PortalAllComponent } from './component/portal-all/portal-all.component';
import { PortalInternalComponent } from './component/portal-internal/portal-internal.component';
import { PortalSentComponent } from './component/portal-sent/portal-sent.component';
const routes: Routes = [
    {
        path: 'all',
        component: PortalAllComponent,
    },
    {
        path: 'internal',
        component: PortalInternalComponent
    },
    {
        path: 'sent',
        component: PortalSentComponent
    },
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PortalRoutingModule { }
