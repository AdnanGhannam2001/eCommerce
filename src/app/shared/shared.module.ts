import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
