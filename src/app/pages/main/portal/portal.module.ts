import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { UpdateComponent } from './component/update.component';
import { PortalAllComponent } from './component/portal-all/portal-all.component';
import { PortalInternalComponent } from './component/portal-internal/portal-internal.component';
import { PortalSentComponent } from './component/portal-sent/portal-sent.component';
import { PortalDetailComponent } from './component/portal-detail.component';
import { CreatePortalComponent } from './component/create-portal.component';
@NgModule({
    declarations: [
        PortalComponent,
        UpdateComponent,
        CreatePortalComponent,
        PortalAllComponent,
        PortalInternalComponent,
        PortalSentComponent,
        PortalDetailComponent
    ],
    imports: [
        CommonModule,
        PortalRoutingModule,
    ],
    providers: [],
})
export class PortalModule { }
