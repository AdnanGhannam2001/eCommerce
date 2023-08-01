import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { TieredMenuModule } from "primeng/tieredmenu";
import { ButtonModule } from "primeng/button";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";



@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    TieredMenuModule,
    ButtonModule,
    MegaMenuModule,
    MenuModule
  ],
  exports: [
    NavbarComponent,
    LogoComponent
  ]
})
export class SharedModule { }
