import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [UserProfileComponent, SidebarComponent, MainLayoutComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
    
  ],

  exports: [UserProfileComponent, SidebarComponent, MainLayoutComponent, AuthLayoutComponent],
})
export class LayoutModule {}
