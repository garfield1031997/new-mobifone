import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
import { AuthSetingComponent } from './auth-seting/auth-seting.component';
const routes: Routes = [
    {
        path: 'general',
        component: GeneralSettingComponent,
    },
    {
        path: 'email',
        component: SentEmailComponent,
    },
    {
        path: 'auth',
        component: AuthSetingComponent,
    },
    {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingRoutingModule { }
