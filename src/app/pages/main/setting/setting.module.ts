import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { CreateSettingEmailComponent } from './sent-email/create-setting-email/create-setting-email.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
import { SettingRoutingModule } from './setting-routing.module';
import { AuthSetingComponent } from './auth-seting/auth-seting.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthSettingGeneralComponent } from './auth-seting/auth-setting-general/auth-setting-general.component';
import { AuthSettingPersonalComponent } from './auth-seting/auth-setting-personal/auth-setting-personal.component';
@NgModule({
    declarations: [
        GeneralSettingComponent,
        SentEmailComponent,
        CreateSettingEmailComponent,
        AuthSetingComponent,
        AuthSettingGeneralComponent,
        AuthSettingPersonalComponent
    ],
    imports: [
        CommonModule,
        SettingRoutingModule,
        MatTabsModule
    ],
    providers: [],
})
export class SettingModule { }
