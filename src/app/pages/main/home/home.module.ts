import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule { }
